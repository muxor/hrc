
var app = angular.module('atemp', [ 'ngRoute' ]);

app.controller('nike', function($scope) {

});

app.config([ "$routeProvider", function($routeProvider) {
	return $routeProvider
//	.when("/", {
//		redirectTo : "/page1"
//	})
	.when("/page1", {
		templateUrl : "template1/temp_a.html",
		controller : "nike"
	}).when("/page2", {
		templateUrl : "template1/temp_b.html",
		controller : "nike"
	}).when("/page3", {
		templateUrl : "template1/temp_c.html",
		controller : "nike"
	}).otherwise({
		redirectTo : "/page1"
	});

} ]);