<?php
// إعدادات الاتصال الافتراضية لـ XAMPP
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "portfolio";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["success" => false, "error" => "Database connection failed."]));
}

$conn->set_charset("utf8mb4");