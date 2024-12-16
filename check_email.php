<?php
# create database connection
$connect=mysqli_connect("localhost","feedback","anisha@123456","admin_feedback");
if(!empty($_POST["email"])) {
  $query = "SELECT * FROM tbl_feedback1 WHERE email='" . $_POST["email"] . "'";
  $result = mysqli_query($connect,$query);
  $count = mysqli_num_rows($result);
  if($count>0) {
  
	   echo "<span style='color:red'> Sorry email already exists .</span>";
  }
	/*
	else{
    echo "<span style='color:green'> Email available....</span>";
  }*/
}
?>