<?php
/**
 * ============================================================
 *  BACKEND CONFIGURATION
 * ============================================================
 *  Edit the values below to configure the contact form backend.
 *  No other backend file needs to be touched for basic setup.
 * ============================================================
 */

return [
    // Comma-free list of allowed frontend origins for CORS.
    // Use "*" during local development; restrict this in production.
    'allowed_origins' => ['*'], // e.g. ['https://www.abtechlearning.example.com']

    // Where enquiry emails should be sent (your counselling team's inbox).
    'notify_email' => 'info@abtechlearning.example.com',

    // The "From" address used when sending notification emails.
    // Many hosts require this to match a domain on the same server.
    'from_email' => 'no-reply@abtechlearning.example.com',

    // Subject line for the notification email.
    'email_subject' => 'New Enquiry - AB Tech Learning Educational Services',

    // Whether to actually attempt sending an email via PHP mail().
    // Set to true once your hosting environment has mail sending configured.
    'send_email' => false,

    // Whether to save every submission to a local JSON file
    // (storage/submissions.json) as a simple backup/log.
    'save_to_file' => true,

    // Path to the storage file (relative to this config file).
    'storage_file' => __DIR__ . '/storage/submissions.json',
];
