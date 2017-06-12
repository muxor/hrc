

var app = angular.module('atemp',['ngRoute']);

app.controller('nike',function($scope){
	
	
	
	
	
	
});

app
.config([
		"$routeProvider",
		function($routeProvider) {
			return $routeProvider
					.when("/page1", {
						templateUrl : "temp_a.html",
						controller : "nike"
					}).when("/page2", {
						templateUrl : "temp_b.html",
						controller : "nike"
					}).when("/page3", {
						templateUrl : "temp_c.html",
						controller : "nike"
					})

		} ]);