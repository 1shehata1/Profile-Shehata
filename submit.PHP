<?php
header("Content-Type: application/json; charset=utf-8");
require "db.php";

// استقبال البيانات المرسلة كـ JSON من الفورم
$data = json_decode(file_get_contents("php://input"), true);

$name    = trim($data["name"] ?? "");
$email   = trim($data["email"] ?? "");
$message = trim($data["message"] ?? "");

if ($name === "" || $email === "" || $message === "") {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "All fields are required."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid email."]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["success" => false, "error" => "Could not save message."]);
}

$stmt->close();
$conn->close();