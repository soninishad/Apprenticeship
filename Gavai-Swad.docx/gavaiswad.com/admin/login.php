<?php
session_start();
if (isset($_POST['ok'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $pass = md5($password);
    include('./condb.php');
    $query = "select * from tbl_admin where email='$email' and password='$pass'";
    $res = mysqli_query($con, $query);
    if (mysqli_num_rows($res) > 0) {
        $_SESSION['valid'] = $email;
        echo "<script>alert('Login Successfully');window.location.href='profile.php';</script>";
    } else {
        header('location:index.php');
    }
} else {
    header('location:index.php');
}
