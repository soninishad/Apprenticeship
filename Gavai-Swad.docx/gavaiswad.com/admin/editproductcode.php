<?php
session_start();
if (isset($_SESSION['valid'])) {
    $proid = $_POST['proid'];
    $productname = $_POST['productname'];
    $image = $_FILES['image']['name'];
    $image_tmp = $_FILES['image']['tmp_ name'];
    $description = $_POST['description'];
    $cp = $_POST['cp'];
    $sp = $_POST['sp'];
    $units = $_POST['units'];
    include('./condb.php');
    $query = "update tbl_field set productname='$productname',image='$image',description='$description',cp='$cp',sp='$sp',units='$units' where proid='$proid';";
    $res = mysqli_query($con, $query);
    if ($res) {
        move_uploaded_file($image_tmp, "upload/$image");
        header('location:addproduct.php');
    } else {
        header('location:addproduct.php');
    }
} else {
    header('location:index.php');
}
