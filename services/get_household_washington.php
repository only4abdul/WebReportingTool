<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$washington_id=$_GET['washington_id'];

$sql = "SELECT * FROM `optional_household` WHERE washington_id='$washington_id'";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $res[] = array("id" => $row['id'],"name" => $row['name'],"relationship" => $row['relationship'],"age" => $row['age'],
        	"three" => $row['three'],"temperature" => $row['temperature'],"cough" => $row['cough'],
        	"sore_throat" => $row['sore_throat'],"diarrhea" => $row['diarrhea'],"onset" => $row['onset'],
        	"washington_id" => $row['washington_id']); 
         }
    echo json_encode($res);
} else {
	$res = array("erreur" => "Error");
	//echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    echo json_encode($res);
}
$conn->close();

?>