<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$login=$_GET['login'];
$password=$_GET['password'];

$sql = "SELECT * FROM users WHERE login='$login' AND password='$password'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row

    while($row = $result->fetch_assoc()) {
    	if ($login==$row['login'] && $password==$row['password']) {
    		$res = array("response" => "success");
    	}
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