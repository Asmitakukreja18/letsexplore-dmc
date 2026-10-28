<?php
// Let's Explore DMC — Contact & Lead API for cPanel Apache
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true) ?? $_POST;

$name = htmlspecialchars($data['name'] ?? 'Guest');
$phone = htmlspecialchars($data['phone'] ?? '');
$email = htmlspecialchars($data['email'] ?? '');
$destination = htmlspecialchars($data['destination'] ?? 'General Inquiry');
$message = htmlspecialchars($data['message'] ?? '');
$budget = htmlspecialchars($data['budget'] ?? '');

$leadId = 'LEDMC-' . substr((string)time(), -6);

// 1. Save lead to local JSON log
$leadEntry = [
    'id' => $leadId,
    'date' => date('Y-m-d H:i:s'),
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'destination' => $destination,
    'message' => $message,
    'budget' => $budget
];

$logFile = __DIR__ . '/leads.json';
$leads = file_exists($logFile) ? json_decode(file_get_contents($logFile), true) : [];
if (!is_array($leads)) $leads = [];
array_unshift($leads, $leadEntry);
@file_put_contents($logFile, json_encode($leads, JSON_PRETTY_PRINT));

// 2. Send email notification to operations
$to = "info@letsexploredmc.com";
$subject = "New Inquiry from {$name} - [{$leadId}]";
$body = "New Website Lead Details:\n\n"
      . "Lead ID: {$leadId}\n"
      . "Name: {$name}\n"
      . "Phone: {$phone}\n"
      . "Email: {$email}\n"
      . "Destination: {$destination}\n"
      . "Budget: {$budget}\n"
      . "Message: {$message}\n\n"
      . "Submitted on: " . date('d M Y, h:i A') . "\n";
$headers = "From: inquiries@letsexploredmc.com\r\nReply-To: {$email}\r\n";
@mail($to, $subject, $body, $headers);

echo json_encode([
    'success' => true,
    'message' => 'Enquiry received successfully! Our destination manager will connect shortly.',
    'id' => $leadId
]);
