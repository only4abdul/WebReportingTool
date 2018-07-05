<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$household=$_GET['household'];
$form = (array) json_decode($household);

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
if (isset($form["any_contact"])) {
  $any_contact = $form["any_contact"];
}else{
  $any_contact='';
}
if (isset($form["comments"])) {
  $comments = $form["comments"];
}else{
  $comments='';
}
if (isset($form["cdc_id"])) {
  $cdc_id = $form["cdc_id"];
}else{
  $cdc_id='';
}


if(isset($form['id'])) {

$id = $form['id'];

  if(isset($form['todelete'])) {
    $sql = "DELETE FROM `household_before` WHERE id='$id';";
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
    $sql = "update household_before set relationship='$relationship',
    age='$age', sex='$sex', date='$date', any_contact='$any_contact',
    comments='$comments' where id='$id';";

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
$sql = "INSERT INTO `household_before` (`relationship`, `age`, `sex`, `date`,
 `any_contact`, `comments`, `cdc_id`)
  VALUES ('$relationship' , '$age', '$sex', '$date', '$any_contact', '$comments', '$cdc_id');";
 
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