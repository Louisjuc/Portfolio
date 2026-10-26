<?php

// CORS headers (for Angular / frontend apps)
header("Content-Type: application/json; charset=utf-8");

// ------------------------------------------------------------
// WICHTIG:
// Die Empfängeradresse steht in config.php (nicht im Repo).
// Vorlage: config.example.php
// ------------------------------------------------------------

$configFile = __DIR__ . '/config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Server not configured']);
    exit;
}
require $configFile;

switch ($_SERVER['REQUEST_METHOD']) {

    case 'POST':
        // Read raw JSON payload
        $json = file_get_contents('php://input');
        $params = json_decode($json);

        // Saubere JSON-Fehlerprüfung
        if (json_last_error() !== JSON_ERROR_NONE) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid JSON']);
            exit;
        }

        $email = trim((string) ($params->email ?? ''));
        $name = trim((string) ($params->name ?? ''));
        $userMessage = trim((string) ($params->message ?? ''));
        $honeypot = trim((string) ($params->website ?? ''));

        // Honeypot: Menschen sehen das Feld nicht, also war es ein Bot.
        // Erfolg vortäuschen, damit der Bot nicht weiter probiert.
        if ($honeypot !== '') {
            echo json_encode(['success' => true]);
            exit;
        }

        // Basic validation
        if (!filter_var($email, FILTER_VALIDATE_EMAIL) || $name === '' || $userMessage === '') {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Invalid input data']);
            exit;
        }

        // Längen begrenzen (gleiche Werte wie maxlength im HTML)
        if (mb_strlen($name) > 100 || mb_strlen($email) > 254 || mb_strlen($userMessage) > 5000) {
            http_response_code(400);
            echo json_encode(['success' => false, 'error' => 'Input too long']);
            exit;
        }

        // Sanitize content
        $safeName = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
        $safeEmail = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
        $safeMessage = nl2br(htmlspecialchars($userMessage, ENT_QUOTES, 'UTF-8'));

        // Empfängeradresse (nutzt die oben definierte Mail)
        $recipient = $siteEmail; 
        $subject = 'Website Contact Form';

        $mailBody = "
            <strong>Name:</strong> {$safeName}<br>
            <strong>Email:</strong> {$safeEmail}<br><br>
            <strong>Message:</strong><br>
            {$safeMessage}
        ";

        // Mail headers
        $headers = [];
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-type: text/html; charset=utf-8';
        $headers[] = 'From: Website Kontakt <' . $siteEmail . '>'; 
        $headers[] = 'Reply-To: ' . $email;
        $headers[] = 'Return-Path: ' . $siteEmail; 

        // Send mail
        $success = mail(
            $recipient,
            $subject,
            $mailBody,
            implode("\r\n", $headers),
            '-f ' . $siteEmail 
        );

        if ($success) {
            echo json_encode(['success' => true]);
        } else {
            http_response_code(500);
            echo json_encode(['success' => false, 'error' => 'Mail delivery failed']);
        }

        break;

    default:
        http_response_code(405);
        echo json_encode(['success' => false, 'error' => 'Method not allowed']);
        exit;
}