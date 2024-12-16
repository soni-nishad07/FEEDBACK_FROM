<?php
 
 $dataPoints = array(
	array("x" => 946665000000, "y" => 3289000)
 );
 



$test = array();
$count =0;

$con=mysqli_connect("localhost","root","","feedback-form");
$query="select * from tbl_feedback1 ";
$res= mysqli_query($con,$query);

while($row = mysqli_fetch_array($res)){
// $test[$count]["x"] = $row["rate"];
$test[$count]["y"] = $row["rate"];
$count = $count+1;
}

?>
<!DOCTYPE HTML>
<html>
<head>
<script>
window.onload = function () {
 
var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	title:{
		text: "Company Revenue by Year"
	},
	axisY: {
		title: "Revenue in USD",
		valueFormatString: "#0,,.",
		suffix: "mn",
		prefix: "$"
	},
	data: [{
		type: "spline",
		markerSize: 5,
		xValueFormatString: "Month",
		yValueFormatString: "$#,##0.##",
		xValueType: "dateTime",
		dataPoints: <?php echo json_encode($test, JSON_NUMERIC_CHECK); ?>
	}]
});
 
chart.render();
 
}
</script>
</head>
<body>
<div id="chartContainer" style="height: 370px; width: 100%;"></div>
<script src="https://cdn.canvasjs.com/canvasjs.min.js"></script>
</body>
</html>   