<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="css/style.css" rel="stylesheet">
    <title>Admin Login</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</head>

<body class="bg-light">
    <div class="container-fluid ">
        <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4 shadow-lg mt-5 p-5 ">
                <h2 class="mb-5 ">Admin Login</h2>
                <form action="login.php" method='post'>
                    Enter email :
                    <input type="email" name="email" class="form-control" />

                    Enter Password :
                    <input type="password" name="password" class="form-control" />
                    <br>
                    <input type="submit" name="ok" value="Login" class="btn btn-outline-primary w-100 rounded-0" />
                </form>
                <br><br>
                <a href="#">Forgot Password ?</a>
            </div>
            <div class="col-sm-4"></div>
        </div>
    </div>
</body>

</html>