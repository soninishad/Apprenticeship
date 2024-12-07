<?php
session_start();
if (isset($_SESSION['valid'])) {
    $catid = $_GET['catid'];
    $con = mysqli_connect('localhost', 'root', '', 'gavaiswad');
    $query = "delete from tbl_category where catid='$catid'";
    $res = mysqli_query($con, $query);
    header('location:addcat.php');
} else {
    header('location:addcat.php');
}
