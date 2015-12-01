'use strict';

angular.module('mainModule').config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/search');
    
    $stateProvider.state('list',{
        url: '/list',
        templateUrl: 'templates/list.tpl.html',
        controller: 'mainCtrl'
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