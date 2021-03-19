<?php
session_start();

$login = $_POST['login'];
$password = $_POST['password'];

if ($login === '' or $password === '') {
    die("Проверьте правильность полей");
}

$connect = mysqli_connect("localhost", "root", "root", "autho");
if (!$connect) {
    die("Не удалось подключиться к БД");
}
$sql = "SELECT * FROM users WHERE username='".$login."' AND pass='".$password."'";
$result = mysqli_query($connect, $sql);

$num_rows = mysqli_num_rows($result);
if($num_rows != 0) {
    
    $user = mysqli_fetch_assoc($result);

    $_SESSION['user'] = [
        "username" => $user['username'],
        "pass" => $user['pass']
    ];

    $response = [
        "status" => true
    ];

    echo "Авторизация прошла успешно";
}
else {
    $response = [
        "status" => false
    ];
    die("Неверный логин или пароль");
}


?>