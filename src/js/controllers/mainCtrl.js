angular.module('mainModule').controller('mainCtrl',['$scope', 'movieFactory', 'result', function($scope, movieFactory, result){
    
    $scope.result = result;
}])