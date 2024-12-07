<?php
session_start();
if (isset($_SESSION['valid'])) {
    $catid = $_POST['catid'];
    $productname = $_POST['productname'];
    $image = $_FILES['image']['name'];
    $image_tmp = $_FILES['image']['tmp_name'];
    $description = $_POST['description'];
    $cp = $_POST['cp'];
    $sp = $_POST['sp'];
    $units = $_POST['units'];
    include('./condb.php');
    $query = "INSERT INTO `tbl_field`(`catid`, `productname`, `image`, `description`, `cp`, `sp`, `units`, `status`, `date`) VALUES ('$catid','$productname','$image','$description','$cp','$sp','$units','Y',now())";
    $res = mysqli_query($con, $query);
    if ($res) {
        move_uploaded_file($image_tmp, "upload/$image");
        header('location:addproduct.php?msg=1');
    } else {
        header('location:addproduct.php');
    }
} else {
    header('location:index.php');
}
