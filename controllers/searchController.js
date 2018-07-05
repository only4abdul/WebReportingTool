(function(angular){
	'use strict';
	 function searchControllerFN($scope,$http,$window,$location,url){

          $scope.getPatientByCode = function(id){
            $scope.patients = null;
            $http.get(url+'/services/get_patient.php?id='+id)
            .success(function(data) { 
              
              if (data.response == 'error') {
              	console.log('here');
              	$scope.message = 'Not Exist !';
              }else{
              	$scope.patients = data;
              	$scope.message = 'Resuslts '+data.length;
              }
              console.log(JSON.stringify(data));
              //console.log("here "+$window.sessionStorage.length)
            }) 
            .error(function(err) {
              return err; 
            })
          }

          $scope.getPatients = function(patient){
          	$scope.patients = null;
          	if (patient.date != undefined) {
          	var date = patient.date;
          	var year = date.getFullYear();
			var month = date.getMonth()+1;
			var dt = date.getDate();

			if (dt < 10) {
			  dt = '0' + dt;
			}
			if (month < 10) {
			  month = '0' + month;
			}
			date = year+'-' + month + '-'+dt
			patient.date = date;
			}
            $http.get(url+'/services/get_patients.php?date='+patient.date+'&first='+patient.first+'&last='+patient.last)
            .success(function(data) { 
              if (data.response == 'error') {
              	console.log('here');
              	$scope.message = 'Not Exist !';
              }else{
              	$scope.patients = data;
              	$scope.message = 'Resuslts '+data.length;
              }
            }) 
            .error(function(err) {
              return err; 
            })
          }

          var result = {};
          $scope.selectedPatient = function(patient){
          	$scope.check = patient.id;
          	result.patient = patient;
          }

          $http.get(url+'/services/allForms.php')
            .success(function(data) { 
              $scope.forms = data;
            }) 
            .error(function(err) {
              return err; 
            })

          $scope.registerForm = function(form){
          	result.form = form;
          }

          $scope.generateForm = function(){
              sessionStorage.setItem('result', JSON.stringify(result));
              if ($scope.form == '1') {
				$location.path('/form-minnesota');
              }else if ($scope.form == '2') {
                $location.path('/form-cdc');
              }else{
				$location.path('/form-washington');
              }
          }
        
           
        }

    searchControllerFN.$inject=['$scope','$http','$window','$location','url'];
    angular
        .module('NursePlatform')
        .controller('searchController',searchControllerFN);
})(angular)