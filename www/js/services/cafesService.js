angular.module('starter').factory('CafesService', [ function() {

  var cafesObj = {};
  
  var promise = $.getJSON('/data/businesses.json');

  promise.done(function(data) {
	console.log("done: "+data.type);	  
    cafesObj.savedBusinesses = data;
  });

  promise.fail(function() {
	console.log("fail") ; 
  });

  console.log("here "+cafesObj.savedBusinesses);
  
  return cafesObj;

}]);