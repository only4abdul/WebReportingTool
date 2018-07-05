<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$sql = "SELECT * FROM forms";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $res[] = array("id" => $row['id'],"name" => $row['name']); 
         }
    echo json_encode($res);
} else {
	$res = array("erreur" => "Error");
    echo json_encode($res);
}
$conn->close();

?>