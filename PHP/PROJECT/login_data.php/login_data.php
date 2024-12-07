<?php
$email = $_POST['email'];
$password = $_POST['password'];
$con = mysqli_connect('localhost', 'root', '', 'myproject');
$query = "select * from tbl_login";
$result = mysqli_query($con, $query);
$row = mysqli_fetch_assoc($result);
if ($row['email'] == $email && $row['password'] == $password) {
    echo "Successfully Logged In!";
}else{
    header("location:login.php?msg=1");
}



?>