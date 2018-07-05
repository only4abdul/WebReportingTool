(function(angular){
	'use strict';
	 function formWashingtonControllerFN($scope,$http,$window,$location,$timeout,url){

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

	 	function getTravelOption(id){
	 		$http.get(url+'/services/get_travel_washington.php?washington_id='+id)
		    .success(function(data) {
		    	console.log(data);
		    	if (data.erreur) {
		    		$scope.travels = [];
		    	}else{
		    		$scope.travels = data;
		    		$scope.travels.forEach(function(element){
		    			element.dates = new Date(element.dates);
		    		})
		    	}
		    }) 
		    .error(function(err) {
		      return err; 
		    })
	 	}

	 	function getHouseholdOption(id){
	 		$http.get(url+'/services/get_household_washington.php?washington_id='+id)
		    .success(function(data) {
		    	console.log(data);
		    	if (data.erreur) {
		    		$scope.households = [];
		    	}else{
		    		$scope.households = data;
		    		$scope.households.forEach(function(element){
		    			element.onset = new Date(element.onset);
		    		})
		    		
		    	}
		    }) 
		    .error(function(err) {
		      return err; 
		    })
	 	}

	 	function sectionFields(id_patient){
	 		$http.get(url+'/services/get_washington_fields.php?id_patient='+id_patient)
            .success(function(data) {
            	if (!data.response) {
              		$scope.fields = data;

              		$scope.fields.reported_doh_date = new Date(data.reported_doh_date);
              		$scope.fields.notification_date = new Date(data.notification_date);
              		$scope.fields.start_date = new Date(data.start_date);
              		$scope.fields.date_interview = new Date(data.date_interview);
              		$scope.fields.onset_date = new Date(data.onset_date);
              		$scope.fields.diagnosis_date = new Date(data.diagnosis_date);
              		$scope.fields.cough_onset_date = new Date(data.cough_onset_date);
              		$scope.fields.admit_date = new Date(data.admit_date);
              		$scope.fields.discharge_date = new Date(data.discharge_date);
              		$scope.fields.death_date = new Date(data.death_date);
              		$scope.fields.date_shot_spray = new Date(data.date_shot_spray);
              		$scope.fields.type_1_started = new Date(data.type_1_started);
              		$scope.fields.type_1_stopped = new Date(data.type_1_stopped);
              		$scope.fields.type_2_started = new Date(data.type_2_started);
              		$scope.fields.type_2_stopped = new Date(data.type_2_stopped);
              		$scope.fields.eia_date = new Date(data.eia_date);
              		$scope.fields.pcr_date = new Date(data.pcr_date);
              		$scope.fields.culture_date = new Date(data.culture_date);
              		$scope.fields.dfa_date = new Date(data.dfa_date);
              		$scope.fields.bacterial_date = new Date(data.bacterial_date);
              		$scope.fields.calendar_dates = new Date(data.calendar_dates);
              		$scope.fields.dates_locations = new Date(data.dates_locations);
              		$scope.fields.home_isolation_date = new Date(data.home_isolation_date);
              		$scope.fields.complete_date = new Date(data.complete_date);
              		$scope.fields.record_date = new Date(data.record_date);

              		getTravelOption(data.id);
              		getHouseholdOption(data.id);
              	}else{
              		$scope.fields = {'id_patient':result.patient.id};
              	}
            }) 
            .error(function(err) {
              return err; 
            })
	 	}

	 	function submitFields(fields,callback){
	 	   $http.get(url+'/services/submit_washington.php?fields='+JSON.stringify(fields))
            .success(function(data) {
              console.log("data "+data)
              callback(data);
            }) 
            .error(function(err) {
              return err; 
            })
	 	}

	 	function submitHousehold(household){
	 	    $http.get(url+'/services/submit_household.php?household='+JSON.stringify(household))
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

	 	function submitTravel(travel){
	 		console.log(travel)
	 	    $http.get(url+'/services/submit_travel.php?travel='+JSON.stringify(travel))
            .success(function(data) {
              	if(data.response=="added" || data.response=="updated" || data.response=="deleted"){
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


	 	$scope.newHousehold = function(household){
	 	  if ($scope.fields.id) {
	 		household.washington_id = $scope.fields.id;
	 		console.log(household);
	 		submitHousehold(household);
	 	  }else{
	 	  	submitFields($scope.fields,function(data){
	 	  	if (data.response!="error") {
	 	  		console.log(data)
	 	  		household.washington_id = data.last_id;
	 	  		submitHousehold(household);
	 	  	}else{
	 	  		alert("Error ! Try again");
	 	  	}
			});
	 	  }
	 	}

	 	$scope.newTravel = function(travel){
	 	  if ($scope.fields.id) {
	 		travel.washington_id = $scope.fields.id;
	 		console.log(travel);
	 		submitTravel(travel);
	 	  }else{
	 	  	submitFields($scope.fields,function(data){
	 	  	if (data.response!="error") {
	 	  		console.log(data)
	 	  		travel.washington_id = data.last_id;
	 	  		submitTravel(travel);
	 	  	}else{
	 	  		alert("Error ! Try again");
	 	  	}
			});
	 	  }
	 	}

	 	$scope.deleteTravel = function(travel){
	 		if (confirm('Are you sure you want to detete this item ?')) {
	 			travel.todelete = true;
	 			submitTravel(travel);
	 		}
	 	}

	 	$scope.deleteHousehold = function(household){
	 		if (confirm('Are you sure you want to detete this item ?')) {
	 			household.todelete = true;
	 			submitHousehold(household);
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

		$scope.cancel = function(){
			if (confirm('Leave this page ?')) {
			    $location.path('/search');
			}
		}
        
           
        }

    formWashingtonControllerFN.$inject=['$scope','$http','$window','$location','$timeout','url'];
    angular
        .module('NursePlatform')
        .controller('formWashingtonController',formWashingtonControllerFN);
})(angular)