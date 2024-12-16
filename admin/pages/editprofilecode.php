<?php 

if(isset($_POST["submit"]))
{
    $id=$_POST["id"];
   $username = $_POST["username"]; 
   $mobilenumber = $_POST["phone"]; 
   $email = $_POST["email"];
    

//    $profile = $_POST["profile"]; 
  
// move_uploaded_file($photo_tmp,$location.$photo);

$con=mysqli_connect("localhost","root","","feedback-form");
$query="UPDATE tbl_admin
SET username = '$username',mobilenumber = '$mobilenumber',email='$email' where id='$id'
";
$res=mysqli_query($con,$query);

if($res>0)
{
    header("location:edit-profile.php");

}
}
?>