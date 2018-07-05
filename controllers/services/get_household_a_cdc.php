<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$cdc_id=$_GET['cdc_id'];

$sql = "SELECT * FROM `household_after` WHERE cdc_id='$cdc_id'";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $res[] = array("id" => $row['id'],"relationship" => $row['relationship'],"sex" => $row['sex'],"age" => $row['age'],"date" => $row['date'],"any_contact" => $row['any_contact'],"comments" => $row['comments'],"cdc_id" => $row['cdc_id']); 
         }
    echo json_encode($res);
} else {
	$res = array("erreur" => "Error");
    echo json_encode($res);
}
$conn->close();

?>