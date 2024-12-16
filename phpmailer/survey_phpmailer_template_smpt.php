<?php
$rate=$_POST["question_1"];
$firstname=$_POST["firstname"];
$lastname=$_POST["lastname"];
$email=$_POST["email"];
$overall_experience =$_POST["question_2"];
$hosting_services = $_POST["question_3"];
$performance =$_POST["question_4"];
$customer =$_POST["question_5"];
$uptime= $_POST["question_6"];
$price= $_POST["question_7"];
$scale= $_POST["switch"];
$specific_features=$_POST["additional_message2"];
$regarding_our_services=$_POST["additional_message3"];
$improve_our_services=$_POST["additional_message4"];
$favorite_feature=$_POST["additional_message5"];
$communication= $_POST["question_8"];
$country=$_POST["country1"];

$state=$_POST["state1"];
$city=$_POST["city"];
$phonecode=$_POST["phonecode"];
$phonenumber=$_POST["phonenumber"];
$date=date("y/m/d");

$con=mysqli_connect("localhost","feedback","anisha@123456","admin_feedback");

$query="insert into tbl_feedback1 (rate,firstname,lastname,email,country,state,city,phonecode,phone,overall_experience,
hosting_services,performance,customer,uptime,
price,scale,specific_features,regarding_our_services,improve_our_services,favorite_feature,communication,date) 
values ('$rate','$firstname','$lastname','$email','$country','$state','$city','$phonecode','$phonenumber','$overall_experience',
'$hosting_services','$performance','$customer','$uptime','$price','$scale','$specific_features','$regarding_our_services',
'$improve_our_services','$favorite_feature','$communication','$date')";


$res=mysqli_query($con,$query);

echo "<script> window.location='../thankyou.php'</script>";




?>