<?php
/**
 * ============================================================
 *  CONTACT FORM API ENDPOINT
 * ============================================================
 *  AB Tech Learning Educational Services — Backend (PHP)
 *
 *  Receives contact-form submissions from the React frontend,
 *  validates them, optionally emails the counselling team, and
 *  optionally logs each submission to storage/submissions.json.
 *
 *  Endpoint: POST /backend/contact.php
 *  Expected JSON body: { "name", "email", "phone", "message" }
 *
 *  The frontend's ContactForm.jsx posts to this file by default.
 *  Update the fetch URL there if you deploy this elsewhere
 *  (e.g. behind a reverse proxy at /api/contact).
 * ============================================================
 */

declare(strict_types=1);

require_once __DIR__ . '/helpers.php';

$config = require __DIR__ . '/config.php';

send_cors_headers($config);

// Handle CORS preflight requests.
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Simple health check via GET, useful for verifying deployment.
if (($_SERVER['REQUEST_METHOD'] ?? '') === 'GET') {
    json_response([
        'status'  => 'ok',
        'service' => 'ab-tech-learning-api (php)',
    ]);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    json_response(['success' => false, 'error' => 'Method not allowed.'], 405);
}

$data = read_json_body();

$name    = clean_text((string)($data['name'] ?? ''), 120);
$email   = trim((string)($data['email'] ?? ''));
$phone   = clean_text((string)($data['phone'] ?? ''), 20);
$message = clean_text((string)($data['message'] ?? ''), 2000);

// ---------------------------------------------------------------
// VALIDATION
// ---------------------------------------------------------------
$errors = [];

if ($name === '') {
    $errors[] = 'Please enter your name.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Please enter a valid email address.';
}
if ($phone === '' || text_length($phone) < 6) {
    $errors[] = 'Please enter a valid phone number.';
}
if ($message === '') {
    $errors[] = 'Please enter a short message.';
}

// Basic honeypot spam-protection (optional):
// add a hidden field named "website" in the form; bots tend to fill it in.
if (!empty($data['website'])) {
    // Silently pretend success so bots don't learn they were caught.
    json_response(['success' => true, 'message' => 'Thank you! Your enquiry has been received.']);
}

if (!empty($errors)) {
    json_response(['success' => false, 'error' => implode(' ', $errors)], 400);
}

$submission = [
    'name'        => $name,
    'email'       => $email,
    'phone'       => $phone,
    'message'     => $message,
    'received_at' => gmdate('c'),
    'ip'          => $_SERVER['REMOTE_ADDR'] ?? null,
];

// ---------------------------------------------------------------
// PERSIST SUBMISSION (optional)
// ---------------------------------------------------------------
if (!empty($config['save_to_file'])) {
    save_submission($submission, $config['storage_file']);
}

// ---------------------------------------------------------------
// SEND NOTIFICATION EMAIL (optional)
// ---------------------------------------------------------------
if (!empty($config['send_email'])) {
    send_notification_email($submission, $config);
}

json_response([
    'success' => true,
    'message' => 'Thank you! Your enquiry has been received. Our counsellors will contact you shortly.',
], 201);

/**
 * Append a submission to the JSON storage file.
 */
function save_submission(array $submission, string $storageFile): void
{
    $dir = dirname($storageFile);
    if (!is_dir($dir)) {
        mkdir($dir, 0755, true);
    }

    $existing = [];
    if (is_file($storageFile)) {
        $contents = file_get_contents($storageFile);
        $decoded = json_decode((string)$contents, true);
        if (is_array($decoded)) {
            $existing = $decoded;
        }
    }

    $existing[] = $submission;

    // file locking to avoid corruption on concurrent requests
    $fp = fopen($storageFile, 'c+');
    if ($fp) {
        flock($fp, LOCK_EX);
        ftruncate($fp, 0);
        fwrite($fp, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
        fflush($fp);
        flock($fp, LOCK_UN);
        fclose($fp);
    }
}

/**
 * Send a plain-text notification email using PHP's built-in mail().
 * For production reliability, consider swapping this for a transactional
 * email API (SendGrid, Mailgun, Postmark, etc.) via cURL instead.
 */
function send_notification_email(array $submission, array $config): void
{
    $to      = $config['notify_email'];
    $from    = $config['from_email'];
    $subject = $config['email_subject'];

    $body = "New enquiry received on the AB Tech Learning website:\n\n"
        . "Name: {$submission['name']}\n"
        . "Email: {$submission['email']}\n"
        . "Phone: {$submission['phone']}\n"
        . "Message:\n{$submission['message']}\n\n"
        . "Received at (UTC): {$submission['received_at']}\n";

    $headers = "From: {$from}\r\n"
        . "Reply-To: {$submission['email']}\r\n"
        . "Content-Type: text/plain; charset=UTF-8\r\n";

    @mail($to, $subject, $body, $headers);
}
