<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$id=$_GET['id'];

$sql = "SELECT * FROM race r
INNER JOIN race_patient rp ON rp.id_race = r.id
WHERE rp.id_patient='$id'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $res[] = array("id" => $row['id'], "race" => $row['race']); 
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