<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$travel=$_GET['travel'];
$form = (array) json_decode($travel);

if (isset($form['dates'])) {
  $dates = $form['dates'];
}else{
  $dates='';
}
if (isset($form["cities"])) {
  $cities = $form["cities"];
}else{
  $cities='';
}
if (isset($form["mode"])) {
  $mode = $form["mode"];
}else{
  $mode='';
}
if (isset($form["number"])) {
  $number = $form["number"];
}else{
  $number='';
}
if (isset($form["contacts"])) {
  $contacts = $form["contacts"];
}else{
  $contacts='';
}
if (isset($form["washington_id"])) {
  $washington_id = $form["washington_id"];
}else{
  $washington_id='';
}


if(isset($form['id'])) {

$id = $form['id'];

  if(isset($form['todelete'])) {
    $sql = "DELETE FROM `optional_travel` WHERE id='$id';";

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
    $sql = "update optional_travel set dates='$dates', cities='$cities',
    mode='$mode', number='$number', contacts='$contacts' where id='$id';";

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
$sql = "INSERT INTO `optional_travel` (`dates`, `cities`, `mode`, `number`, `contacts`, `washington_id`)
  VALUES ('$dates' , '$cities' , '$mode', '$number', '$contacts', '$washington_id');";
 
 if (mysqli_query($conn, $sql)) 
    {
        $res = array("response" => "added");
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
?>