<?php
$login = $_POST['login'];

if ($login === '') {
    die("Поле не заполнено");
}

$connect = mysqli_connect("localhost", "root", "root", "autho");
if (!$connect) {
    die("Не удалось подключиться к БД");
}
$sql = "SELECT * FROM users WHERE username LIKE'%".$login."%'";
$result = mysqli_query($connect, $sql);

$output = '';

$num_rows = mysqli_num_rows($result);
if($num_rows != 0) {
    while($row = mysqli_fetch_array($result)) {
        $output .= '<p>Пользователь: '.$row["username"].'</p>';
    }
    echo $output;
}
else {
    die("Пользователь не найден");
}


?>