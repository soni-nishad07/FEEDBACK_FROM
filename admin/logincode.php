<?php
session_start();

if(isset($_POST['submit']))
{

$con = mysqli_connect("localhost","feedback","anisha@123456","admin_feedback");


if(isset($_POST['submit'])){
	$username = $_POST['username'];
	$password = $_POST['password'];

	$sql = " select * from  tbl_admin where username='$username' and password='$password'";
	$query = mysqli_query($con,$sql);

	$row = mysqli_num_rows($query);
		if($row == 1){
			echo "login successful";
			$_SESSION['username'] = $username;
			header('location:pages/dashboard.php');
		}
		else
		{
			header("location:index.php?msg=1");
		}

}

}



?>