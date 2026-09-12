<?php
/**
 * Shared helper functions used across the backend API endpoints.
 */

/**
 * Send CORS headers based on the allowed_origins config value.
 */
function send_cors_headers(array $config): void
{
    $origin = $_SERVER['HTTP_ORIGIN'] ?? '';
    $allowed = $config['allowed_origins'] ?? ['*'];

    if (in_array('*', $allowed, true)) {
        header('Access-Control-Allow-Origin: *');
    } elseif ($origin !== '' && in_array($origin, $allowed, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
        header('Vary: Origin');
    }

    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Access-Control-Max-Age: 86400');
}

/**
 * Output a JSON response with the given HTTP status code and stop execution.
 */
function json_response(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
    exit;
}

/**
 * Read and decode the raw JSON request body into an associative array.
 * Falls back to $_POST for classic form submissions.
 */
function read_json_body(): array
{
    $raw = file_get_contents('php://input');
    if ($raw !== false && $raw !== '') {
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) {
            return $decoded;
        }
    }
    return $_POST ?? [];
}

/**
 * Very small sanitiser for plain-text fields.
 * Uses mbstring when available (safe with UTF-8 names), falling back
 * to plain substr on minimal PHP installs without the mbstring extension.
 */
function clean_text(string $value, int $maxLength = 2000): string
{
    $value = trim($value);
    $value = strip_tags($value);

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
}

/**
 * mbstring-safe string length helper with a plain-PHP fallback.
 */
function text_length(string $value): int
{
    return function_exists('mb_strlen') ? mb_strlen($value) : strlen($value);
}
