<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$washington_id=$_GET['washington_id'];

$sql = "SELECT * FROM `optional_travel` WHERE washington_id='$washington_id'";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $res[] = array("id" => $row['id'],"dates" => $row['dates'],"cities" => $row['cities'],"mode" => $row['mode'],"number" => $row['number'],"contacts" => $row['contacts'],"washington_id" => $row['washington_id']); 
         }
    echo json_encode($res);
} else {
	$res = array("erreur" => "Error");
    echo json_encode($res);
}
$conn->close();

?>