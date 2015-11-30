angular.module('mainModule').factory('movieFactory', ['$http', function($http){
    return{
        movieGET: function(user){
           return $http.get('http://www.omdbapi.com/?t=' + user + '&tomatoes=true&plot=full');
        }
    }
}])