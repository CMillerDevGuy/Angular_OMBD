angular.module('mainModule').controller('viewCtrl',['$scope', 'movieFactory', function($scope, movieFactory){
    
    $scope.welcomeMsg = "You're in view";
}])