(function(angular){
	'use strict';
	 function formCDCControllerFN($scope,$http,$window,$location,$timeout,url){

	 	var result = JSON.parse(sessionStorage.getItem("result"));
	 	console.log(result);

	 	function getPatientRace(id_patient){
	 		$http.get(url+'/services/get_race.php?id='+id_patient)
            .success(function(data) {
              	$scope.races = data;
            }) 
            .error(function(err) {
              return err; 
            })
	 	}


	 	function getHouseholds_Before(id){
	 		$http.get(url+'/services/get_household_b_cdc.php?cdc_id='+id)
		    .success(function(data) {
		    	console.log(data);
		    	if (data.erreur) {
		    		$scope.households_before = [];
		    	}else{
		    		$scope.households_before = data;
		    		$scope.households_before.forEach(function(element){
		    			element.date = new Date(element.date);
		    		});
		    	}
		    }) 
		    .error(function(err) {
		      return err; 
		    })
	 	}

	 	function getHouseholds_After(id){
	 		$http.get(url+'/services/get_household_a_cdc.php?cdc_id='+id)
		    .success(function(data) {
		    	console.log(data);
		    	if (data.erreur) {
		    		$scope.households_after = [];
		    	}else{
		    		$scope.households_after = data;
		    		$scope.households_after.forEach(function(element){
		    			element.date = new Date(element.date);
		    		});
		    	}
		    }) 
		    .error(function(err) {
		      return err; 
		    })
	 	}

	 	function getInfections(id){
	 		$http.get(url+'/services/get_infection_cdc.php?cdc_id='+id)
		    .success(function(data) {
		    	console.log(data);
		    	if (data.erreur) {
		    		$scope.influenza_infection = [];
		    	}else{
		    		$scope.influenza_infection = data;
		    		$scope.influenza_infection.forEach(function(element){
		    			element.date = new Date(element.date);
		    		});
		    	}
		    }) 
		    .error(function(err) {
		      return err; 
		    })
	 	}


	 	function sectionFields(id_patient){
	 		$http.get(url+'/services/get_cdc_fields.php?id_patient='+id_patient)
            .success(function(data) {
              	console.log(data);
              	if (!data.response) {
              		$scope.fields = data;

              		
              		$scope.fields.date_reported = new Date(data.date_reported);
              		$scope.fields.date_interview = new Date(data.date_interview);
              		$scope.fields.date_symptoms = new Date(data.date_symptoms);
              		$scope.fields.fever_date = new Date(data.fever_date);
              		$scope.fields.felt_feverish_date = new Date(data.felt_feverish_date);
              		$scope.fields.back_normal_date = new Date(data.back_normal_date);
              		$scope.fields.seek_office_date = new Date(data.seek_office_date);
              		$scope.fields.seek_room_date = new Date(data.seek_room_date);
              		$scope.fields.seek_clinic_date = new Date(data.seek_clinic_date);
              		$scope.fields.seek_department_date = new Date(data.seek_department_date);
              		$scope.fields.seek_other_date = new Date(data.seek_other_date);

              		
              		$scope.fields.second_admission = new Date(data.second_admission);
              		$scope.fields.first_admission = new Date(data.first_admission);
              		$scope.fields.ic_admission = new Date(data.ic_admission);
              		$scope.fields.icu_discharge = new Date(data.icu_discharge);
              		$scope.fields.second_discharge = new Date(data.second_discharge);
              		$scope.fields.first_discharge = new Date(data.first_discharge);
              		$scope.fields.oseltamivir_start = new Date(data.oseltamivir_start);
              		$scope.fields.oseltamivir_end = new Date(data.oseltamivir_end);
              		$scope.fields.zanamivir_start = new Date(data.zanamivir_start);
					$scope.fields.zanamivir_end = new Date(data.zanamivir_end);
					$scope.fields.other_influenza_start = new Date(data.other_influenza_start);
					$scope.fields.other_influenza_end = new Date(data.other_influenza_end);

					
					$scope.fields.patient_die_date = new Date(data.patient_die_date);
					$scope.fields.virus_infection_date = new Date(data.virus_infection_date);
					$scope.fields.ridt_specimen_date = new Date(data.ridt_specimen_date);
					$scope.fields.patient_pregnant_date = new Date(data.patient_pregnant_date);
					$scope.fields.influenza_vaccination_date1 = new Date(data.influenza_vaccination_date1);
					$scope.fields.influenza_vaccination_date2 = new Date(data.influenza_vaccination_date2);
					$scope.fields.patient_travel_trip1_date1 = new Date(data.patient_travel_trip1_date1);
					$scope.fields.patient_travel_trip1_date2 = new Date(data.patient_travel_trip1_date2);
					$scope.fields.patient_travel_trip2_date1 = new Date(data.patient_travel_trip2_date1);
					$scope.fields.patient_travel_trip2_date2 = new Date(data.patient_travel_trip2_date2);
					$scope.fields.patient_hospital_date1 = new Date(data.patient_hospital_date1);
					$scope.fields.patient_hospital_date2 = new Date(data.patient_hospital_date2);
					$scope.fields.patient_clinic_date1 = new Date(data.patient_clinic_date1);
					$scope.fields.patient_clinic_date2 = new Date(data.patient_clinic_date2);

              		getHouseholds_Before(data.id);
              		getHouseholds_After(data.id);
              		getInfections(data.id);
              	}else{
              		$scope.fields = {'id_patient':result.patient.id};
              	}
            }) 
            .error(function(err) {
              return err; 
            })
	 	}

	 	//submit fields function
	 	function submitFields(fields,callback){
	 	    $http.get(url+'/services/submit_cdc.php?fields='+JSON.stringify(fields))
            .success(function(data) {
              	console.log("data "+data);
              	callback(data);
            }) 
            .error(function(err) {
              return err; 
            })
	 	}

	 	//submit before
	 	function submitHouseholdBefore(householdBefore){
	 	    $http.get(url+'/services/submit_household_before.php?household='+JSON.stringify(householdBefore))
            .success(function(data) {
              	if(data.response=="added" || data.response=="updated"|| data.response=="deleted"){
              	  alert("Successfully "+data.response);
				  window.location.reload();
              	}else{
              	  alert("Error ! Try again");

              	}
            }) 
            .error(function(err) {
              return err; 
            })
	 	}
	 	//submit after
	    function submitHouseholdAfter(householdAfter){
	 	    $http.get(url+'/services/submit_household_after.php?household='+JSON.stringify(householdAfter))
            .success(function(data) {
              	if(data.response=="added" || data.response=="updated"|| data.response=="deleted"){
              	  alert("Successfully "+data.response);
				  window.location.reload();
              	}else{
              	  alert("Error ! Try again");

              	}
            }) 
            .error(function(err) {
              return err; 
            })
	 	}

	 	//submit infection
	 	function submitInfection(infection){
	 	    $http.get(url+'/services/submit_infection.php?infection='+JSON.stringify(infection))
            .success(function(data) {
              	if(data.response=="added" || data.response=="updated"|| data.response=="deleted"){
              	  alert("Successfully "+data.response);
				  window.location.reload();
              	}else{
              	  alert("Error ! Try again");

              	}
            }) 
            .error(function(err) {
              return err; 
            })
	 	}

	 	$scope.patient = result.patient;
	 	getPatientRace(result.patient.id);
		sectionFields(result.patient.id);

		$scope.newBefore = function(household_b){
		  if ($scope.fields.id) {
	 		household_b.cdc_id = $scope.fields.id;
	 		console.log(household_b);
	 		submitHouseholdBefore(household_b);
	 	  }else{
	 	  	submitFields($scope.fields,function(data){
	 	  	if (data.response!="error") {
	 	  		console.log(data)
	 	  		household_b.cdc_id = data.last_id;
	 	  		submitHouseholdBefore(household_b);
	 	  	}else{
	 	  		alert("Error ! Try again");
	 	  	}
			});
	 	  }
		}
        
		$scope.newAfter = function(household_a){
		  if ($scope.fields.id) {
	 		household_a.cdc_id = $scope.fields.id;
	 		console.log(household_a);
	 		submitHouseholdAfter(household_a);
	 	  }else{
	 	  	submitFields($scope.fields,function(data){
	 	  	if (data.response!="error") {
	 	  		console.log(data)
	 	  		household_a.cdc_id = data.last_id;
	 	  		submitHouseholdAfter(household_a);
	 	  	}else{
	 	  		alert("Error ! Try again");
	 	  	}
			});
	 	  }

		}

		$scope.newInfection = function(infection){
		  if ($scope.fields.id) {
	 		infection.cdc_id = $scope.fields.id;
	 		console.log(infection);
	 		submitInfection(infection);
	 	  }else{
	 	  	submitFields($scope.fields,function(data){
	 	  	if (data.response!="error") {
	 	  		console.log(data)
	 	  		infection.cdc_id = data.last_id;
	 	  		submitInfection(infection);
	 	  	}else{
	 	  		alert("Error ! Try again");
	 	  	}
			});
	 	  }
		}

		//delete before
		$scope.deleteBefore = function(household){
			if (confirm('Are you sure you want to detete this item ?')) {
	 			household.todelete = true;
	 			submitHouseholdBefore(household);
	 		}
	 	}

		//delete after
		$scope.deleteAfter = function(household){
			if (confirm('Are you sure you want to detete this item ?')) {
	 			household.todelete = true;
	 			submitHouseholdAfter(household);
	 		}
	 	}

		//delete infection
		$scope.deleteInfection = function(infection){
			if (confirm('Are you sure you want to detete this item ?')) {
			    infection.todelete = true;
	 			submitInfection(infection);
			}
	 	}

        $scope.cancel = function(){
			if (confirm('Leave this page ?')) {
			    $location.path('/search');
			}
		}

		$scope.submit = function(fields){
			console.log(fields);
			submitFields(fields,function(data){
				if(data.response=="updated"){
	              	  alert("Successfully updated");
					  $timeout(function(){$location.path('/search');}, 1000);
	            }else if(data.response=="added"){
	              	  alert("Successfully Added");
					  $timeout(function(){$location.path('/search');}, 1000);
	            }else{
	              	  alert("Error ! Try again");
	            }
			});
		 }
        }

    formCDCControllerFN.$inject=['$scope','$http','$window','$location','$timeout','url'];
    angular
        .module('NursePlatform')
        .controller('formCDCController',formCDCControllerFN);
})(angular)