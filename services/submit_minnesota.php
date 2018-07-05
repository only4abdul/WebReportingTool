<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');
require_once('connect.php');

$fields=$_GET['fields'];
$form = (array) json_decode($fields);

if (isset($form['medical_record_number'])) {
  $medical_record_number = $form['medical_record_number'];
}else{
  $medical_record_number='';
}
if (isset($form['id_patient'])) {
  $id_patient = $form['id_patient'];
}
if (isset($form["disease"])) {
  $disease = $form["disease"];
}else{
  $disease='';
}
if (isset($form["status"])) {
  $status = $form["status"];
}else{
  $status='';
}
if (isset($form["date_of_onset"])) {
  $date_of_onset = $form["date_of_onset"];
}else{
  $date_of_onset='';
}
if (isset($form["date_reported_to_MDH"])) {
  $date_reported_to_MDH = $form["date_reported_to_MDH"];
}else{
  $date_reported_to_MDH='';
}
if (isset($form["lab_findings"])) {
  $lab_findings = $form["lab_findings"];
}else{
  $lab_findings='';
}
if (isset($form["source"])) {
  $source = $form["source"];
}else{
  $source='';
}
if (isset($form["specimen_collection_date"])) {
  $specimen_collection_date = $form["specimen_collection_date"];
}else{
  $specimen_collection_date='';
}
if (isset($form["date_of_result"])) {
  $date_of_result = $form["date_of_result"];
}else{
  $date_of_result='';
}
if (isset($form["lab_facility"])) {
  $lab_facility = $form["lab_facility"];
}else{
  $lab_facility='';
}
if (isset($form["lab_facility_phone"])) {
  $lab_facility_phone = $form["lab_facility_phone"];
}else{
  $lab_facility_phone='';
}
if (isset($form["physician"])) {
  $physician = $form["physician"];
}else{
  $physician='';
}
if (isset($form["physician_phone"])) {
  $physician_phone = $form["physician_phone"];
}else{
  $physician_phone='';
}
if (isset($form["person_reporting"])) {
  $person_reporting = $form["person_reporting"];
}else{
  $person_reporting='';
}
if (isset($form["person_reporting_phone"])) {
  $person_reporting_phone = $form["person_reporting_phone"];
}else{
  $person_reporting_phone='';
}
if (isset($form["patient_hospitalized"])) {
  $patient_hospitalized = $form["patient_hospitalized"];
}else{
  $patient_hospitalized='';
}
if (isset($form["patient_hospitalized_where"])) {
  $patient_hospitalized_where = $form["patient_hospitalized_where"];
}else{
  $patient_hospitalized_where='';
}
if (isset($form["admission_date"])) {
  $admission_date = $form["admission_date"];
}else{
  $admission_date='';
}
if (isset($form["discharge_date"])) {
  $discharge_date = $form["discharge_date"];
}else{
  $discharge_date='';
}
if (isset($form["patient_died"])) {
  $patient_died = $form["patient_died"];
}else{
  $patient_died='';
}
if (isset($form["patient_died_date"])) {
  $patient_died_date = $form["patient_died_date"];
}else{
  $patient_died_date='';
}
if (isset($form["patient_foodhandler"])) {
  $patient_foodhandler = $form["patient_foodhandler"];
}else{
  $patient_foodhandler='';
}
if (isset($form["patient_contact"])) {
  $patient_contact = $form["patient_contact"];
}else{
  $patient_contact='';
}
if (isset($form["pregnant"])) {
  $pregnant = $form["pregnant"];
}else{
  $pregnant='';
}
if (isset($form["due_date"])) {
  $due_date = $form["due_date"];
}else{
  $due_date='';
}
if (isset($form["delivery_hospital"])) {
  $delivery_hospital = $form["delivery_hospital"];
}else{
  $delivery_hospital='';
}


if(isset($form['id'])) {
	
$sql = "update minnesota set medical_record_number='$medical_record_number', disease='$disease', status='$status',
date_of_onset='$date_of_onset', date_reported_to_MDH='$date_reported_to_MDH', lab_findings='$lab_findings', source='$source',
specimen_collection_date='$specimen_collection_date', date_of_result='$date_of_result', lab_facility='$lab_facility',
lab_facility_phone='$lab_facility_phone', physician='$physician', physician_phone='$physician_phone', person_reporting='$person_reporting',
person_reporting_phone='$person_reporting_phone', patient_hospitalized='$patient_hospitalized', patient_hospitalized_where='$patient_hospitalized_where',
admission_date='$admission_date', discharge_date='$discharge_date', patient_died='$patient_died', patient_died_date='$patient_died_date',
patient_foodhandler='$patient_foodhandler', patient_contact='$patient_contact', pregnant='$pregnant', due_date='$due_date',
delivery_hospital='$delivery_hospital' where id_patient='$id_patient';";

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

}else{
$sql = "INSERT INTO `minnesota` (`medical_record_number`, `disease`, `status`, `date_of_onset`, `date_reported_to_MDH`,
 `lab_findings`, `source`, `specimen_collection_date`, `date_of_result`, `lab_facility`, `lab_facility_phone`, `physician`,
 `physician_phone`, `person_reporting`, `person_reporting_phone`, `patient_hospitalized`, `patient_hospitalized_where`,
 `admission_date`, `discharge_date`, `patient_died`, `patient_died_date`, `patient_foodhandler`, `patient_contact`,
 `pregnant`, `due_date`, `delivery_hospital`, `id_patient`)
  VALUES ('$medical_record_number' , '$disease' , '$status', '$date_of_onset', '$date_reported_to_MDH', '$lab_findings', '$source', '$specimen_collection_date',
  '$date_of_result', '$lab_facility', '$lab_facility_phone', '$physician', '$physician_phone', '$person_reporting', '$person_reporting_phone',
  '$patient_hospitalized', '$patient_hospitalized_where', '$admission_date', '$discharge_date',
  '$patient_died', '$patient_died_date', '$patient_foodhandler', '$patient_contact', '$pregnant', '$due_date', '$delivery_hospital', '$id_patient');";
 
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