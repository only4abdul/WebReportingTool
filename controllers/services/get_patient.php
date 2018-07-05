<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$id=$_GET['id'];

$sql = "SELECT * FROM patients WHERE code='$id'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $res[] = array("id" => $row['id'], "code" => $row['code'], "first_name" => $row['first_name'], "last_name" => $row['last_name'],
        	 		   "date_of_birth" => $row['date_of_birth'], "ethnicity" => $row['ethnicity'], "address" => $row['address'],
        	 		   "city" => $row['city'], "state" => $row['state'], "zip" => $row['zip'], "occupation" => $row['occupation'],
        	 		   "place_work" => $row['place_work'], "phone_work" => $row['phone_work'], "phone" => $row['phone'],
        	 		   "zip_code_work" => $row['zip_code_work'], "country" => $row['country'], "sex" => $row['sex'],
        	 		   "grade" => $row['grade'], "emplyer" => $row['emplyer'], "school" => $row['school'],
        	 		   "child_care" => $row['child_care'], "alt_contact" => $row['alt_contact'], "name_alt_contact" => $row['name_alt_contact'],
        	 		   "email" => $row['email'], "isHomeless" => $row['isHomeless'], "language" => $row['language'], "age" => $row['age']); 
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