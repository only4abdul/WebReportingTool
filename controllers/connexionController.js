(function(angular){
	'use strict';
	 function connexionControllerFN($scope,$location,$timeout,$http,$window,url){
         
         /*if ($window.sessionStorage.length==1) {
          $window.sessionStorage.removeItem(1);
         }*/
         
         $scope.connfunction = function(){
         $http.get(url+'/services/connexion.php?login='+$scope.login+'&password='+$scope.mdp)
            .success(function(data) {
                
                if(data.response=="success"){
                    //console.log("succ conn "+JSON.stringify(data));
                    $scope.message = "Login and Password Correct";
                    $window.sessionStorage.setItem(1, $scope.login);
                    $timeout(function(){$location.path('/search');}, 1000);
                }else{
                    //console.log("err conn "+JSON.stringify(data));
                    $scope.message = "Error Login or Password"; 
                }
            }) 
            .error(function(err) { 
              $scope.message = data; 
         })

       }       
    }
    connexionControllerFN.$inject=['$scope','$location','$timeout','$http','$window','url'];
    angular
        .module('NursePlatform')
        .controller('connController',connexionControllerFN);
})(angular)