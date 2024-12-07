<?php
session_start();
if (isset($_SESSION['valid'])) {
    $proid = $_GET['proid'];
    $con = mysqli_connect('localhost', 'root', '', 'gavaiswad');
    $query = "delete from tbl_field where proid='$proid'";
    $res = mysqli_query($con, $query);
    header('location:addproduct.php');
} else {
    header('location:addproduct.php');
}
