angular.module('mainModule').controller('mainCtrl',['$scope', 'movieFactory', function($scope, movieFactory){
    
    $scope.welcomeMsg = "You are on the list page";
}])