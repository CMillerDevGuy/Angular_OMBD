angular.module('mainModule').controller('viewCtrl',['$scope', 'movieFactory', 'moreInfo', function($scope, movieFactory, moreInfo){
    
    $scope.welcomeMsg = "You're in view";
    
    $scope.result = moreInfo;
    
    $scope.addMovie = function(){
        movieFactory.addMovie(moreInfo);
    }
}])