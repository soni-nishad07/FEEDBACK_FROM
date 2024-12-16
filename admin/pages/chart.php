<?php
 
$dataPoints = array( 
	array("y" => 3373.64, "label" => "Germany" ),
);
 

$test = array();
$count =0;

$con=mysqli_connect("localhost","root","","feedback-form");
$query="select * from tbl_feedback1 ";
$res= mysqli_query($con,$query);

while($row = mysqli_fetch_array($res)){
// $test[$count]["label"] = $row["label"];
$test[$count]["y"] = $row["rate"];
$count = $count+1;
}

?>
<!DOCTYPE HTML>
<html>

<head>
    <script>
    window.onload = function() {

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Customer feedback"
            },
            axisY: {
                title: "Rating"
            },
            data: [{
                type: "column",
                yValueFormatString: "#,##0.## tonnes",
                dataPoints: <?php echo json_encode($test, JSON_NUMERIC_CHECK); ?>
            }]
        });
        chart.render();

    }
    </script>
</head>

<body>
    <div class="container" style="    height: 300px;
    width: 60%;
    margin: auto;
    margin-top: 70px;">
        <div id="chartContainer" style="height: 300px; width: 60%;"></div>
    </div>
    <script src="https://cdn.canvasjs.com/canvasjs.min.js"></script>
</body>

</html>