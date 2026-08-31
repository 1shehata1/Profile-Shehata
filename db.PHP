<?php
// إعدادات الاتصال الافتراضية لـ XAMPP
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "portfolio";

// إنشاء الاتصال
$conn = new mysqli($host, $user, $pass, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["success" => false, "error" => "Database connection failed: " . $conn->connect_error]));
}

// تعيين الترميز
$conn->set_charset("utf8mb4");
?>