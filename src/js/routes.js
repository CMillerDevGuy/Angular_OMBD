'use strict';

angular.module('mainModule').config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/search');
    
    $stateProvider.state('list',{
        url: '/list',
        templateUrl: 'templates/list.tpl.html',
        controller: 'mainCtrl'
       /* resolve: {
            result : function(movieFactory) {
                return movieFactory.movieGET().then(
                    function(success) {
                        return success;
                    },
                    function(error){
                        return error;
                    }
                )
            }
        }*/
    })
    .state('search',{
        url: '/search',
        templateUrl: 'templates/search.tpl.html',
        controller: 'searchCtrl'
    })
    .state('view',{
        url: '/view',
        templateUrl: 'templates/view.tpl.html',
        controller: 'viewCtrl'
    })
}])