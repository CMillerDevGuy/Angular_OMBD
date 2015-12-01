angular.module('mainModule').factory('movieFactory', ['$http', function($http){
    return{
        movieGET: function(movieSearch){
           return $http.get('http://www.omdbapi.com/?t=' + movieSearch + '&tomatoes=true&plot=full');
        }
    }
}])