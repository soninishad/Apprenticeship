<?php
session_start();
if (isset($_SESSION['valid'])) {
    session_destroy();
    echo "<script>alert('Logout Successfully');window.location.href='index.php';</script>";
}
