<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$household=$_GET['household'];
$form = (array) json_decode($household);

if (isset($form['name'])) {
  $name = $form['name'];
}else{
  $name='';
}
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
if (isset($form["three"])) {
  $three = $form["three"];
}else{
  $three='';
}
if (isset($form["temperature"])) {
  $temperature = $form["temperature"];
}else{
  $temperature='';
}
if (isset($form["cough"])) {
  $cough = $form["cough"];
}else{
  $cough='';
}
if (isset($form["sore_throat"])) {
  $sore_throat = $form["sore_throat"];
}else{
  $sore_throat='';
}
if (isset($form["diarrhea"])) {
  $diarrhea = $form["diarrhea"];
}else{
  $diarrhea='';
}
if (isset($form["onset"])) {
  $onset = $form["onset"];
}else{
  $onset='';
}
if (isset($form["washington_id"])) {
  $washington_id = $form["washington_id"];
}else{
  $washington_id='';
}


if(isset($form['id'])) {

$id = $form['id'];

  if(isset($form['todelete'])) {
    $sql = "DELETE FROM `optional_household` WHERE id='$id';";
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
    $sql = "update optional_household set name='$name', relationship='$relationship',
    age='$age', three='$three', temperature='$temperature', cough='$cough',
    sore_throat='$sore_throat', diarrhea='$diarrhea', onset='$onset' where id='$id';";

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
$sql = "INSERT INTO `optional_household` (`name`, `relationship`, `age`, `three`, `temperature`,
 `cough`, `sore_throat`, `diarrhea`, `onset`, `washington_id`)
  VALUES ('$name' , '$relationship' , '$age', '$three', '$temperature', '$cough', '$sore_throat', '$diarrhea',
  '$onset', '$washington_id');";
 
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