<?php
	// I have to initialize the variables i am using in my code.
	$username = null;	
	$password = null; 	
	$username_error = null;  
	$password_error = null; 
	$success = null;

	// First of all i have to check for the incoming post request.
	if(isset($_POST['sign-up'])){
		// If there is a post request, i will store the username and password values to variables.
		$username = $_POST['username'];
		$password = $_POST['password'];

		// Next i will check for empty values so i have some kind of error to display.
		if(empty(trim($username))){
			// If there is an empty value i display an error message.
			$username_error = "Username filed is empty";
		}
        
        else{
			// If the username has a value, then i move on to the password field.
			if(empty(trim($password))){
				$password_error = "Password filed is empty";
			}
            
            else{
				
				$success = "Thank you for your registration";

                	$sql = " select * from  tbl_admin where username='$username' and password='$password'";
	$query = mysqli_query($con,$sql);

	$row = mysqli_num_rows($query);
		if($row == 1){
			echo "login successful";
			$_SESSION['username'] = $username;
			header('location:dashboard.php');
		}
		else
		{
			echo "login failed";
			header('location:sign-in.php');
		}

			}
		}
	}
