<?php
session_start();
if (isset($_SESSION['valid'])) {
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/style.css" rel="stylesheet">
        <title>Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
    </head>

    <body class="bg-light">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4 shadow-lg mt-5 p-5">
                    <h2 class="text-center">Welcome Admin</h2>
                    <p class="text-center">
                        <?php echo $_SESSION['valid']; ?>
                    </p>
                    <a href="addcat.php" class="btn btn-outline-primary w-100 rounded-0">Add Category</a>
                    <br><br>
                    <a href="addproduct.php" class="btn btn-outline-success w-100 rounded-0">Add Product</a>
                    <br><br>
                    <a href="logout.php" class="btn btn-outline-danger w-100 rounded-0">Logout</a>
                </div>
                <div class="col-sm-4"></div>
            </div>
        </div>
    </body>

    </html>
<?php
}
?>