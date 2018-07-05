(function(angular){
	'use strict';
	 function formMinnesotaControllerFN($scope,$http,$window,$location,$timeout,url){

    $scope.downloadXML = function(){
      var xmlres = getStructureXml($scope.patient);
      var blob = new Blob([xmlres], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "form-minnesota.xml");
    }

    $scope.generatePDF = function(){

      /*var source = angular.element(document.querySelector('#demo'));
      var element1 = source[0];

      html2canvas(element1, {
        onrendred: function(canvas){
          var img = canvas.toDataURL("image/jpeg");
          var doc = new jsPDF();
          doc.addImage(img,'JPEG',20,20);
          doc.save('test.pdf');
        }
      });*/
      
     /*var pdf = new jsPDF();          
      var source = angular.element(document.querySelector('#demo'));
      var element = source[0];
      var myTables = angular.element(document.querySelector('#example'));
      angular.forEach(element, function(value, key) {
          pdf.fromHTML(value,15, 15, {'width': 180
          });
      });
    pdf.save('Test.pdf') ;*/

      /*var source = angular.element(document.querySelector('#demo'));
      var element = source[0];
      console.log(source[0])*/
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

 
        doc.fromHTML($('#content').html(), 15, 15, {
            'width': 170
        });
        doc.save('sample-file.pdf');
 
    }


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

	 	function sectionFields(id_patient){
	 		$http.get(url+'/services/get_minnesota_fields.php?id_patient='+id_patient)
            .success(function(data) {
              	console.log(data);
              	if (!data.response) {
                  $scope.fields = data;
                  $scope.fields.date_of_onset = new Date(data.date_of_onset);
                  $scope.fields.date_reported_to_MDH = new Date(data.date_reported_to_MDH);
                  $scope.fields.specimen_collection_date = new Date(data.specimen_collection_date);
                  $scope.fields.date_of_result = new Date(data.date_of_result);
                  $scope.fields.admission_date = new Date(data.admission_date);
                  $scope.fields.discharge_date = new Date(data.discharge_date);
                  $scope.fields.patient_died_date = new Date(data.patient_died_date);
                  $scope.fields.due_date = new Date(data.due_date);
              	}else{
              		$scope.fields = {'id_patient':result.patient.id};
              	}
            }) 
            .error(function(err) {
              return err; 
            })
	 	}

	 	$scope.patient = result.patient;
	 	getPatientRace(result.patient.id);
		sectionFields(result.patient.id);

		$scope.cancel = function(){
			if (confirm('Leave this page ?')) {
			    $location.path('/search');
			}
		}

		$scope.submit = function(fields){
			console.log(fields);
		    $http.get(url+'/services/submit_minnesota.php?fields='+JSON.stringify(fields))
            .success(function(data) {
              	//console.log();
              	if(data.response=="updated"){
              	  alert("Successfully Updated");
				  $timeout(function(){$location.path('/search');}, 1000);
              	}else if(data.response=="added"){
              	  alert("Successfully Added");
				  $timeout(function(){$location.path('/search');}, 1000);
              	}else{
              	  alert("Error ! Try again");
              	}
            }) 
            .error(function(err) {
              return err; 
            })
		}

  $scope.generatepdf = function(){
    generatePDF();
  }

  }

    formMinnesotaControllerFN.$inject=['$scope','$http','$window','$location','$timeout','url'];
    angular
        .module('NursePlatform')
        .controller('formMinnesotaController',formMinnesotaControllerFN);
})(angular)