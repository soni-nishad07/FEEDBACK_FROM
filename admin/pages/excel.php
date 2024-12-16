<?php

     
$con = mysqli_connect("localhost","feedback","anisha@123456","admin_feedback");
        $query = "select * from tbl_feedback1";
        $res = mysqli_query($con, $query);
        $row = mysqli_fetch_array($res);
     

$finaldata=array();

while($data=mysqli_fetch_assoc($res))
{
	$finaldata[]=$data;
}


	$filename = "Feedback".date('Ymdhis') . ".xls";			
	header("Content-Type: application/vnd.ms-excel");
	header("Content-Disposition: attachment; filename=\"$filename\"");
	
	$firstrow=false;
	foreach($finaldata as $data)
	{
		if(!$firstrow)
		{
			echo implode("\t",array_keys($data))."\n";
			$firstrow=true;
		}
		
		echo implode("\t",array_values($data))."\n";
		
	}
	
	exit;
	



?>