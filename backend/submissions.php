<?php
/**
 * ============================================================
 *  ADMIN: VIEW SUBMISSIONS
 * ============================================================
 *  A minimal, key-protected endpoint to view stored contact
 *  form submissions. For demo/small-site use only.
 *
 *  Usage: GET /backend/submissions.php?key=YOUR_SECRET_KEY
 *
 *  IMPORTANT: Change ADMIN_KEY below before deploying, and
 *  consider replacing this with a real authenticated admin
 *  panel for anything beyond light personal use.
 * ============================================================
 */

declare(strict_types=1);

require_once __DIR__ . '/helpers.php';

$config = require __DIR__ . '/config.php';

send_cors_headers($config);

// -----------------------------------------------------------------
// CHANGE THIS KEY before deploying. Treat it like a password.
// -----------------------------------------------------------------
const ADMIN_KEY = 'change-this-secret-key';

$providedKey = $_GET['key'] ?? '';

if (!hash_equals(ADMIN_KEY, (string)$providedKey)) {
    json_response(['success' => false, 'error' => 'Unauthorized.'], 401);
}

$storageFile = $config['storage_file'];
$submissions = [];

if (is_file($storageFile)) {
    $decoded = json_decode((string)file_get_contents($storageFile), true);
    if (is_array($decoded)) {
        $submissions = $decoded;
    }
}

json_response([
    'success' => true,
    'count'   => count($submissions),
    'submissions' => $submissions,
]);
