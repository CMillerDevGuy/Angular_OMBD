angular.module('mainModule').controller('viewCtrl',['$scope', 'movieFactory', 'moreInfo', 'toastr', function($scope, movieFactory, moreInfo, toastr){
    
    $scope.welcomeMsg = "You're in view";
    
    $scope.result = moreInfo;
    $scope.movieList = movieFactory.getData();
    $scope.addMovie = function(){
        /*for(var i = 0; i < movieList.length; i++){
            if(movieList[i].data.Title === moreInfo.data.Title){
                toaster.error("Already in your list");
            }
        }*/
        if(moreInfo.data.Title == null || moreInfo.data.Title == ""){
            toastr.error('Movie is null','Error');
        }
        else{
            movieFactory.addMovie(moreInfo);
        }
    }
}])