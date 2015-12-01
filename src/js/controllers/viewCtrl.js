angular.module('mainModule').controller('viewCtrl',['$scope', 'movieFactory', function($scope, movieFactory){
    
    $scope.welcomeMsg = "You're in view";
    
    $scope.search = function (movieSearch){
        movieFactory.movieGET(movieSearch).then(
            function(success) {
                $scope.result = success;
            },
            function(error){
                $scope.result = error;
            }
        );
    };
}])