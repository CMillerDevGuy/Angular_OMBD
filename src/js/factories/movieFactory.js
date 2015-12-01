angular.module('mainModule').factory('movieFactory', ['$http', function($http){
    var data = [];
    return{
        movieGET: function(movieSearch){
           return $http.get('http://www.omdbapi.com/?s=' + movieSearch + '&plot=full');
        },
        singleGET: function(singleSearch){
            return $http.get('http://www.omdbapi.com/?t=' + singleSearch + '&plot=full');
        },
        getById: function(id){
            return $http.get('http://www.omdbapi.com/?i=' + id + '&plot=full&r=json')
        },
        addMovie: function(movie){
            data.push(movie);
        },
        getData: function(){
            return data;
        }
        
    }
}])