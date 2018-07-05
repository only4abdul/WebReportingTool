<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$id_patient=$_GET['id_patient'];

$sql = "SELECT * FROM cdc WHERE id_patient='$id_patient'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $res = $row; 
         }
    echo json_encode($res);
} else {
	$res = array("response" => "error");
    //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    echo json_encode($res);
}
$conn->close();
    //echo json_encode($res);
?>