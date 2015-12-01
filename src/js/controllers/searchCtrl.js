angular.module('mainModule').controller('searchCtrl',['$scope', 'movieFactory', function($scope, movieFactory){
    
    $scope.welcomeMsg = "You're in search";
    

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