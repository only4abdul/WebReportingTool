(function(angular){
    'use strict';
    angular
        .module('NursePlatform',['ngRoute','ui.grid']);
    function configFN($routeProvider){
        $routeProvider
            .when('/connection',{
                controller:'connController',
                templateUrl:'views/connexion.view.html'
            }).when('/form-minnesota',{
                controller:'formMinnesotaController',
                templateUrl:'views/form-minnesota.view.html'
            }).when('/form-washington',{
                controller:'formWashingtonController',
                templateUrl:'views/form-washington.view.html'
            }).when('/form-cdc',{
                controller:'formCDCController',
                templateUrl:'views/form-cdc.view.html'
            }).when('/search',{
                controller:'searchController',
                templateUrl:'views/search.view.html'
            }).when('/email',{
                controller:'sendemailController',
                templateUrl:'views/send-email.view.html'
            })
            .otherwise({redirectTo:'/connection'});
    }
    configFN.$inject=['$routeProvider'];
    
    angular
        .module('NursePlatform')
        .constant('url','http://localhost/maher-project')
        .config(configFN);

})(angular)


    