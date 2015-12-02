angular.module('mainModule').controller('searchCtrl',['$scope', 'movieFactory', 'toastr', function($scope, movieFactory, toastr){
    
    $scope.welcomeMsg = "You're in search";
    

    $scope.search = function (movieSearch){
        if(movieSearch == null){
            toastr.error('Enter a movie','Error');
        }
        else{
            movieFactory.movieGET(movieSearch).then(
            function(success) {
                $scope.result = success;
            },
            function(error){
                $scope.result = error;
            });
        }
    };
    $scope.singleSearch = function(single){
        movieFactory.singleGET(single).then(
            function(success){
                $scope.singleResult = success;
            },
            function(error){
                $scope.singleResult = error;
            }
        );
    };
}])