<?php
session_start();
if (!isset($_SESSION["username"])) {

    header("location:../index.php");
}
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png">
    <link rel="icon" type="image/png" href="../assets/img/favicon.png">
    <title>
        Customer Details - Gen X Web Hosting
    </title>
    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
    <!-- Nucleo Icons -->
    <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
    <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- Font Awesome Icons -->
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
    <!-- CSS Files -->
    <link id="pagestyle" href="../assets/css/material-dashboard.css?v=3.0.0" rel="stylesheet" />
    <link id="pagestyle" href="../assets/css/style.css" rel="stylesheet" />
    <link id="pagestyle" href="../assets/css/style3.css" rel="stylesheet" />

    <style>
        .content {
            max-width: 1000px;
            white-space: wrap;
            font-weight: bold;
            word-wrap: break-word;
            padding-left: 20px;
        }

        .star-rating {
            position: absolute;
            top: 30px;
            right: 36px;
            font-size: 25px;
            float: right;
        }

        .card-body:hover {
            border-radius: 14px;
            box-shadow: 1px 3px 0px 1px #cecece;
        }
    </style>

</head>

<body class="g-sidenav-show  bg-gray-200">
    <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main">
        <div class="sidenav-header">
            <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                aria-hidden="true" id="iconSidenav"></i>
            <a class="navbar-brand m-0" href="# " target="_blank">
                <img src="../assets/img/logo.webp" class="navbar-brand-img h-100" alt="main_logo">
                <span class="ms-1 font-weight-bold text-white"></span>
            </a>
        </div>
        <hr class="horizontal light mt-0 mb-2">
        <div class="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link text-white " href="../pages/dashboard.php">
                        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">dashboard</i>
                        </div>
                        <span class="nav-link-text ms-1">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white active bg-gradient-primary" href="../pages/table.php">
                        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">table_view</i>
                        </div>
                        <span class="nav-link-text ms-1">Customer Feedback</span>
                    </a>
                </li>

                <li class="nav-item mt-3">
                    <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Account pages
                    </h6>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white " href="../pages/profile.php">
                        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">person</i>
                        </div>
                        <span class="nav-link-text ms-1">Profile</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white " href="../logout.php">
                        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">login</i>
                        </div>
                        <span class="nav-link-text ms-1">Log out</span>
                    </a>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link text-white " href="../pages/sign-up.html">
                        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                            <i class="material-icons opacity-10">assignment</i>
                        </div>
                        <span class="nav-link-text ms-1">Sign Up</span>
                    </a>
                </li> -->
            </ul>
        </div>

    </aside>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <!-- Navbar -->
        <nav class="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur"
            navbar-scroll="true">
            <div class="container-fluid py-1 px-3">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                        <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Pages</a>
                        </li>
                        <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Dashboard</li>
                    </ol>
                    <h6 class="font-weight-bolder mb-0">Dashboard</h6>
                </nav>
                <div class="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
                    <div class="ms-md-auto pe-md-3 d-flex align-items-center">
                        <div class="input-group input-group-outline">
                            <label class="form-label">Type here...</label>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                    <ul class="navbar-nav  justify-content-end">
                        <li class="nav-item dropdown pe-2 d-flex align-items-center">
                            <a href="javascript:;" class="nav-link text-body p-0" id="dropdownMenuButton"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-user me-sm-1"></i>
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                                aria-labelledby="dropdownMenuButton">
                                <li class="mb-2">
                                    <a class="dropdown-item border-radius-md" href="">
                                        <div class="d-flex py-1">
                                            <div class="my-auto">
                                                <img src="../assets/img/team-2.jpg" class="avatar avatar-sm  me-3 ">
                                            </div>
                                            <div class="d-flex flex-column justify-content-center">
                                                <h6 class="text-sm font-weight-normal mb-1">
                                                    <span class="font-weight-bold">adminname</span>
                                                </h6>
                                                <p class="text-xs text-secondary mb-0">
                                                    <i class="fa fa-clock me-1"></i>
                                                    13 minutes ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <hr>

                                <li class="mb-2">
                                    <a class="dropdown-item border-radius-md" href="../pages/profile.php">
                                        <div class="d-flex">
                                            <div class="my-auto">
                                                <i class="fa-solid fa-user"></i>
                                            </div>
                                            <div class="d-flex flex-column justify-content-center mx-3">
                                                <h6 class="text-sm font-weight-normal mb-1">
                                                    <span class="font-weight-bold">Profile</span>
                                                </h6>

                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li class="mb-2">
                                    <a class="dropdown-item border-radius-md" href="">
                                        <div class="d-flex">
                                            <div class="my-auto">
                                                <i class="fa-solid fa-gear"></i>
                                            </div>
                                            <div class="d-flex flex-column justify-content-center mx-3">
                                                <h6 class="text-sm font-weight-normal mb-1">
                                                    <span class="font-weight-bold">Account Setting</span>
                                                </h6>


                                            </div>
                                        </div>
                                    </a>
                                </li>

                                <li class="mb-2">
                                    <a class="dropdown-item border-radius-md" href="../logout.php">
                                        <div class="d-flex">
                                            <div class="my-auto">
                                                <!-- <img src="../assets/img/small-logos/logo-spotify.svg"
                          class="avatar avatar-sm bg-gradient-dark  me-3 "> -->
                                                <i class="fa-solid fa-power-off"></i>
                                            </div>
                                            <div class="d-flex flex-column justify-content-center mx-3">
                                                <h6 class="text-sm font-weight-normal mb-1">
                                                    <span class="font-weight-bold">Logout</span>
                                                </h6>

                                            </div>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                        </li>
                        
                        <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
                            <a href="" class="nav-link text-body p-0" id="iconNavbarSidenav">
                                <div class="sidenav-toggler-inner">
                                    <i class="sidenav-toggler-line"></i>
                                    <i class="sidenav-toggler-line"></i>
                                    <i class="sidenav-toggler-line"></i>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item px-3 d-flex align-items-center">
                            <a href="javascript:;" class="nav-link text-body p-0">
                                <i class="fa fa-cog fixed-plugin-button-nav cursor-pointer"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown pe-2 d-flex align-items-center">
                            <a href="javascript:;" class="nav-link text-body p-0" id="dropdownMenuButton"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-bell cursor-pointer"></i>
                            </a>
                            <ul class="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                                aria-labelledby="dropdownMenuButton">
                                <li class="mb-2">
                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                        <div class="d-flex py-1">
                                            <div class="my-auto">
                                                <img src="../assets/img/team-2.jpg" class="avatar avatar-sm  me-3 ">
                                            </div>
                                            <div class="d-flex flex-column justify-content-center">
                                                <h6 class="text-sm font-weight-normal mb-1">
                                                    <span class="font-weight-bold">New message</span> from Laur
                                                </h6>
                                                <p class="text-xs text-secondary mb-0">
                                                    <i class="fa fa-clock me-1"></i>
                                                    13 minutes ago
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="mb-2">
                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                        <div class="d-flex py-1">
                                            <div class="my-auto">
                                                <img src="../assets/img/small-logos/logo-spotify.svg"
                                                    class="avatar avatar-sm bg-gradient-dark  me-3 ">
                                            </div>
                                            <div class="d-flex flex-column justify-content-center">
                                                <h6 class="text-sm font-weight-normal mb-1">
                                                    <span class="font-weight-bold">New album</span> by Travis Scott
                                                </h6>
                                                <p class="text-xs text-secondary mb-0">
                                                    <i class="fa fa-clock me-1"></i>
                                                    1 day
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a class="dropdown-item border-radius-md" href="javascript:;">
                                        <div class="d-flex py-1">
                                            <div class="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                                                <svg width="12px" height="12px" viewBox="0 0 43 36" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <title>credit-card</title>
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(-2169.000000, -745.000000)"
                                                            fill="#FFFFFF" fill-rule="nonzero">
                                                            <g transform="translate(1716.000000, 291.000000)">
                                                                <g transform="translate(453.000000, 454.000000)">
                                                                    <path class="color-background"
                                                                        d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                                                        opacity="0.593633743"></path>
                                                                    <path class="color-background"
                                                                        d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z">
                                                                    </path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </div>
                                            <div class="d-flex flex-column justify-content-center">
                                                <h6 class="text-sm font-weight-normal mb-1">
                                                    Payment successfully completed
                                                </h6>
                                                <p class="text-xs text-secondary mb-0">
                                                    <i class="fa fa-clock me-1"></i>
                                                    2 days
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- End Navbar -->


        <?php
        $id = $_REQUEST["id"];
      $con = mysqli_connect("localhost","feedback","anisha@123456","admin_feedback");
        $query = "select * from tbl_feedback1 where id='$id'";
        $res = mysqli_query($con, $query);
        $row = mysqli_fetch_array($res)


            ?>




        <div class="container-fluid py-4">
            <div class="row">
                <div class="col-12">
                    <div class="card my-4">
                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                            <div class="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                <h6 class="text-white text-capitalize ps-3">Customer Feedback</h6>

                            </div>

                        </div>


                        <!-- <div class="card-body px-0"> -->

                        <div class="container-fluid pt-3">
                        <div class="card dark">
                            <div class="card-body">
                                <div class="text-section">
                                    <h5 class="card-title">
                                        <?php echo $row['firstname']; ?>
                                        <?php echo $row['lastname']; ?>
                                    </h5>
                                    <p class="card-text">
                                        <span
                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Email
                                            Address : </span>
                                        <span class="text-xs font-weight-bold mb-0">
                                            <?php echo $row["email"] ?>
                                        </span>
                                    </p>
                                </div>


                                <div class="cta-section">

                                    <div>
                                        <span
                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Phone
                                            Number : </span>
                                        <span class="text-xs font-weight-bold mb-0">
                                            <?php echo $row["phonecode"] ?>
                                            <?php echo $row["phone"] ?>
                                        </span>
                                    </div>

                                    <div>
                                        <span
                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Country
                                            : </span>
                                        <span class="text-xs font-weight-bold mb-0">
                                            <?php echo $row["country"] ?>
                                        </span>
                                    </div>

                                    <div>
                                        <span
                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">State
                                            : </span>
                                        <span class="text-xs font-weight-bold mb-0">
                                          <?php $string= $row["state"];
											echo str_replace("string:", " ", $string);
											?>
                                        </span>
                                    </div>
                                    <div>
                                        <span
                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">City
                                            : </span>
                                        <span class="text-xs font-weight-bold mb-0">
                                            <?php echo $row["city"] ?>
                                        </span>
                                    </div>


                                    <div class="star-rating">
                                        <span
                                            class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">How
                                            was the service provided?
                                        </span>
                                        <ul class="list-inline">
                                            <?php

                                            $rate = 1;
                                            while ($rate <= 5) {
                                                if ($row['rate'] < $rate) {
                                                    ?>
                                                    <li class="list-inline-item" style="color:#ffd93b"><i
                                                            class="fa fa-star-o"></i></li>
                                                    <?php
                                                } else {
                                                    ?>
                                                    <li class="list-inline-item" style="color:#ffd93b"><i
                                                            class="fa fa-star"></i></li>
                                                    <?php
                                                }

                                                $rate++;
                                            }
                                            ?>
                                        </ul>
                                


                                    </span>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <?php
                        $overallExperience = $row['overall_experience'];
                        $color = ''; // Set a default color
                        
                        // Set color based on the overall experience value
                        if ($overallExperience == 'Very satisfied') {
                            $color = '#0a8a28'; // Change to your desired color
                        } elseif ($overallExperience == 'Satisfied') {
                            $color = 'green'; // Change to your desired color
                        } elseif ($overallExperience == 'Neutral') {
                            $color = '#1fdf9ce6'; // Change to your desired color
                        } elseif ($overallExperience == 'Dissatisfied') {
                            $color = 'orange'; // Change to your desired color
                        } elseif ($overallExperience == 'Very dissatisfied') {
                            $color = 'red'; // Change to your desired color
                        }

                        ?>






                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">1. How would you rate
                                        your overall experience with Gen X Web Hosting?</h6>
                                    <div class="card-text content">
                                        <p class="text-xs font-weight-bold mb-0">
                                            <?php echo '<p class="text-sm font-weight-bold mb-0" style="color: ' . $color . ';">' . $overallExperience . '</p>'; ?>

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <?php

                        $hostingservices = $row['hosting_services'];
                        $color1 = ''; // Set a default color
                        
                        // Set color based on the overall experience value
                        if ($hostingservices == 'Very easy') {
                            $color1 = 'green'; // Change to your desired color
                        } elseif ($hostingservices == 'easy') {
                            $color1 = 'green'; // Change to your desired color
                        } elseif ($hostingservices == 'Neutral') {
                            $color1 = '#1fdf9ce6'; // Change to your desired color
                        } elseif ($hostingservices == 'Difficult') {
                            $color1 = 'orange'; // Change to your desired color
                        } elseif ($hostingservices == 'Very Difficult') {
                            $color1 = 'red'; // Change to your desired color
                        }

                        ?>

                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">2. How would you rate
                                        the ease of use of our web hosting services?</h6>
                                    <div class="card-text content">
                                        <p class="text-xs font-weight-bold mb-0">
                                            <?php echo '<p class="text-sm font-weight-bold mb-0" style="color:' . $color1 . ';">' . $hostingservices . '</p>'; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <?php

                        $performance = $row['performance'];
                        $color2 = '';

                        if ($performance == 'Extremely satisfied') {
                            $color2 = 'green';
                        } elseif ($performance == 'Satisfied') {
                            $color2 = 'green'; // Change to your desired color
                        } elseif ($performance == 'Neutral') {
                            $color2 = '#1fdf9ce6'; // Change to your desired color
                        } elseif ($performance == 'Dissatisfied') {
                            $color2 = 'orange'; // Change to your desired color
                        } elseif ($performance == 'Very Dissatisfied') {
                            $color2 = 'red'; // Change to your desired color
                        }


                        ?>
                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">3. How satisfied are you
                                        with the performance and speed of your website hosted with
                                        us? </h6>
                                    <div class="card-text content">
                                        <p class="text-xs font-weight-bold mb-0">
                                            <?php echo '<p class="text-sm font-weight-bold mb-0" style="color:' . $color2 . ';">' . $performance . '</p>'; ?>

                                    </div>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <?php

                        $customer = $row['customer'];
                        $color3 = '';

                        if ($customer == 'Excellent') {
                            $color3 = 'green';
                        } elseif ($customer == 'Good') {
                            $color3 = 'green'; // Change to your desired color
                        } elseif ($customer == 'Average') {
                            $color3 = '#1fdf9ce6'; // Change to your desired color
                        } elseif ($customer == 'Poor') {
                            $color3 = 'orange'; // Change to your desired color
                        } elseif (
                            $customer == '
                        Very Good'
                        ) {
                            $color3 = 'red'; // Change to your desired color
                        }


                        ?>

                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">4. How would you rate
                                        the responsiveness and helpfulness of our customer support
                                        team? </h6>
                                    <div class="card-text content">
                                        <p class="text-xs font-weight-bold mb-0">
                                            <?php echo '<p class="text-sm font-weight-bold mb-0" style="color:' . $color3 . ';">' . $customer . '</p>'; ?>
                                    </div>
                                    </p>
                                </div>
                            </div>
                        </div>



                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">5. Are there specific
                                        features or functionalities you would like to see added or
                                        improved?</h6>
                                    <div class="card-text content">
                                        <p class="text-sm font-weight-bold mb-0">
                                            <?php echo $row['specific_features']; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <?php

                        $uptime = $row['uptime'];
                        $color4 = '';

                        if ($uptime == 'Very reliable') {
                            $color4 = 'green';
                        } elseif ($uptime == 'Reliable') {
                            $color4 = 'green'; // Change to your desired color
                        } elseif ($uptime == 'Neutral') {
                            $color4 = '#1fdf9ce6'; // Change to your desired color
                        } elseif ($uptime == 'Unreliable') {
                            $color4 = 'orange'; // Change to your desired color
                        } elseif (
                            $uptime == '
                        Very Unreliable'
                        ) {
                            $color4 = 'red'; // Change to your desired color
                        }


                        ?>


                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">6. How reliable do you
                                        find our web hosting services in terms of uptime and
                                        performance? </h6>
                                    <div class="card-text content">
                                        <p class="text-xs font-weight-bold mb-0">
                                            <?php echo '<p class="text-sm font-weight-bold mb-0" style="color:' . $color4 . ';">' . $uptime . '</p>'; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <?php

                        $price = $row['price'];
                        $color5 = '';

                        if ($price == 'Excellent value') {
                            $color5 = 'green';
                        } elseif ($price == 'Good value') {
                            $color5 = 'green'; // Change to your desired color
                        } elseif ($price == 'Neutral') {
                            $color5 = '#1fdf9ce6'; // Change to your desired color
                        } elseif ($price == 'Poor value') {
                            $color5 = 'orange'; // Change to your desired color
                        } elseif (
                            $price == '
                        Very Poor value'
                        ) {
                            $color5 = 'red'; // Change to your desired color
                        }


                        ?>

                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">7. Do you feel that you
                                        are getting good value for the price you pay for our web
                                        hosting services?</h6>
                                    <div class="card-text content">
                                        <p class="text-xs font-weight-bold mb-0">
                                            <?php echo '<p class="text-sm font-weight-bold mb-0" style="color:' . $color5 . ';">' . $price . '</p>'; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">8. On a scale of 0 to
                                        10, how likely are you to recommend Gen X Web Hosting to a
                                        friend or colleague? </h6>
                                    <div class="card-text content">
                                        <!-- <p class="text-xs font-weight-bold mb-0">
                                            <?php echo $row['scale']; ?>

                                        </p> -->

                                        <div class="sliderContainer">
                                            <input type="range" value="<?php echo $row['scale']; ?>" min="0" max="10" disabled
                                                id="slider">
                                            <span id="output"></span>
                                        </div>

                                        <script>
                                            var slider = document.getElementById("slider");
                                            var output = document.getElementById("output");
                                            output.innerHTML = slider.value;

                                            slider.oninput = function () {
                                                output.innerHTML = this.value;
                                            }

                                        </script>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">9. Please share any
                                        additional comments or suggestions you may have regarding
                                        our services. </h6>
                                    <div class="card-text content">
                                        <p class="text-sm font-weight-bold mb-0">
                                            <?php echo $row['regarding_our_services']; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">10. Are there specific
                                        areas where you believe we can improve our services?</h6>
                                    <div class="card-text content">
                                        <p class="text-sm font-weight-bold mb-0">
                                            <?php echo $row['improve_our_services']; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title ">11. What is your
                                        favorite feature or aspect of Gen X Web Hosting?</h6>
                                    <div class="card-text content">
                                        <p class="text-sm font-weight-bold mb-0">
                                            <?php echo $row['favorite_feature']; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <?php

                        $communication = $row['communication'];
                        $color6 = '';

                        if ($communication == 'Very satisfied') {
                            $color6 = 'green';
                        } elseif ($communication == 'Satisfied') {
                            $color6 = 'green'; // Change to your desired color
                        } elseif ($communication == 'Neutral') {
                            $color6 = '#1fdf9ce6'; // Change to your desired color
                        } elseif ($communication == 'Dissatisfied') {
                            $color6 = 'orange'; // Change to your desired color
                        } elseif (
                            $communication == '
                        Very Dissatisfied'
                        ) {
                            $color6 = 'red'; // Change to your desired color
                        }


                        ?>


                        <div class="card dark mt-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">12. How satisfied are
                                        you with the communication from Gen X Web Hosting regarding
                                        updates,
                                        maintenance, and new features?</h6>
                                    <div class="card-text content">
                                        <p class="text-sm font-weight-bold mb-0" style="color:<?php echo $color6; ?>;">
                                            <?php echo $communication; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="card dark mt-5 mb-5">
                            <div class="card-body">
                                <div class="text-section">
                                    <h6 class="card-title">13. Date</h6>
                                    <div class="card-text content">
                                        <p class="text-sm font-weight-bold mb-0">
                                            <?php echo $row['date']; ?>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            </div>

        </div>


        <footer class="footer py-4  ">
            <div class="container-fluid">
                <div class="row align-items-center justify-content-lg-between">
                    <div class="col-lg-4 mb-lg-0 mb-4">
                        <div class="copyright text-center text-sm text-muted text-lg-start">
                            ©
                            <script>
                                document.write(new Date().getFullYear())
                            </script>,
                            made with <i class="fa fa-heart"></i> by
                            <a href="#" class="font-weight-bold" target="_blank"> Gen X Web Hosting</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    </main>
 
    <!--   Core JS Files   -->
    <script src="../assets/js/core/popper.min.js"></script>
    <script src="../assets/js/core/bootstrap.min.js"></script>
    <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
    <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
    <script>
        var win = navigator.platform.indexOf('Win') > -1;
        if (win && document.querySelector('#sidenav-scrollbar')) {
            var options = {
                damping: '0.5'
            6
        }
            Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
        }
    </script>
    <!-- Github buttons -->
    <script async defer src="https://buttons.github.io/buttons.js"></script>
    <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
    <script src="../assets/js/material-dashboard.min.js?v=3.0.0"></script>
</body>

</html>