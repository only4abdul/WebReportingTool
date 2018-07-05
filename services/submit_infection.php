<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$infection=$_GET['infection'];
$form = (array) json_decode($infection);

if (isset($form["relationship"])) {
  $relationship = $form["relationship"];
}else{
  $relationship='';
}
if (isset($form["age"])) {
  $age = $form["age"];
}else{
  $age='';
}
if (isset($form["sex"])) {
  $sex = $form["sex"];
}else{
  $sex='';
}
if (isset($form["date"])) {
  $date = $form["date"];
}else{
  $date='';
}
if (isset($form["lab_id"])) {
  $lab_id = $form["lab_id"];
}else{
  $lab_id='';
}
if (isset($form["epi_id"])) {
  $epi_id = $form["epi_id"];
}else{
  $epi_id='';
}
if (isset($form["status"])) {
  $status = $form["status"];
}else{
  $status='';
}
if (isset($form["cdc_id"])) {
  $cdc_id = $form["cdc_id"];
}else{
  $cdc_id='';
}


if(isset($form['id'])) {

$id = $form['id'];

  if(isset($form['todelete'])) {
    $sql = "DELETE FROM `influenza_infection` WHERE id='$id';";
    if (mysqli_query($conn, $sql)) 
        {
        $res = array("response" => "deleted");
        echo json_encode($res);
        } 
        else 
        {
          $res = array("response" => "error");
        echo json_encode($res);
            //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    mysqli_close($conn);
  }else{
    $sql = "update influenza_infection set relationship='$relationship',
    age='$age', sex='$sex', date='$date', lab_id='$lab_id',
    epi_id='$epi_id', status='$status' where id='$id';";

    if (mysqli_query($conn, $sql)) 
        {
        $res = array("response" => "updated");
        echo json_encode($res);
        } 
        else 
        {
          $res = array("response" => "error");
        echo json_encode($res);
            //echo "Error: " . $sql . "<br>" . mysqli_error($conn);
        }
    mysqli_close($conn);
  }
}else{
$sql = "INSERT INTO `influenza_infection` (`relationship`, `age`, `sex`, `date`,
 `lab_id`, `epi_id`, `status`, `cdc_id`)
  VALUES ('$relationship' , '$age', '$sex', '$date', '$lab_id', '$epi_id', '$status', '$cdc_id');";
 
 if (mysqli_query($conn, $sql)) 
    {
        $res = array("response" => "added");
		echo json_encode($res);
    } 
    else 
    {
    	$res = array("response" => "error");
		//echo json_encode($res);
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
mysqli_close($conn);

}
?>