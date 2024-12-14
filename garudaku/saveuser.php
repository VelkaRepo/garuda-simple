<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $userData = $_POST['userData'];
    file_put_contents('users.txt', $userData, FILE_APPEND);
    echo 'success';
}
?>
