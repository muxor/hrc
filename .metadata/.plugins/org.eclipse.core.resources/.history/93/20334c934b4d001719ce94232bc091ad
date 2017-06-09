
angular.module('myApp', ['pmsRoute']).controller('myCtrl', function($scope,$http) {
    $scope.firstName = "Ron";
    $scope.lastName = "Row";
    
//    alert('the controller works ');
    
    $scope.user = "";
    $scope.pwd ="";
    
    $scope.runAuthentication1 = function runAuthentication1(){
    	
//    	alert('got into Authentication 1');
    	
    	$('#loadingMsg').show();
    	
    	var request = $http.post('http://localhost:8081/logintest/app/login/authenticate1/'+$scope.user+'/'+$scope.pwd+'', {});
    	
    	request.success(function(data) {
			
    		$('#loadingMsg').hide();
//    		alert('Authentication 1 just ran and is successful! and returned '+data);
    		
    		

    		
    		$('#myModal').modal('show');  
    		
    		if (data == true){
    			
    			$("#modalAlert").toggleClass('alert-info alert-success');//
    			$('#modalTitle1').html("<span class='glyphicon glyphicon glyphicon-ok' aria-hidden='true'><b>Success</b>");
    			$('#modalText1').text("Authentication 1 just ran and is successful! and returned..."+data);
    			
    		}else {
    			//action: for failure
    			
    			$("#modalAlert").toggleClass('alert-info alert-danger');//
    			$('#modalTitle1').html("<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> <b>Failure</b>");
    			$('#modalText1').text("Authentication 1 just ran and FAILED! Because data returned "+data+"");
    			
    			
    		}
    		
    		    		

    		
			
		});
    	
    	request.error(function(data) {
    		
    		$('#loadingMsg').hide();
    		alert('error'); 
    		
    	});

//		window.location.href = "http://localhost:8081/logintest/";

    	
    	
    }
    
    
//    $scope.runAuthentication1();
    
    $scope.runAuthentication2 = function runAuthentication2(){
    	
    	$http.post('http://localhost:8081/logintest/app/login/authenticate2/', {
			'usr' : $scope.user,
			'pw' : $scope.pwd
		}).success(function(data) {
			alert('Authentication 2 just ran and is successful !');
		});

//		window.location.href = "http://localhost:8081/logintest/";

    	
    	
    }
    
});



//app.js
//var pmsModule = angular.module('pmsRoute', [ 'ngRoute']);
//	, 'ngCookies'

pmsModule.config([ "$routeProvider", function($routeProvider) {
	return $routeProvider.when("/index.html", {
        template : "<h1>Main</h1><p>Click on the links to change this content</p>"
    }).when("/index_fafa.html", {
		redirectTo : "/login2"
	}).when("/home", {
		templateUrl : "home.html",
        controller : "controllerName"
	}).when("/login", {
		templateUrl : "login.html",
        controller : "myCtrl"
	}).when("/login2", {
		templateUrl : "login_2.html",
        controller : "myCtrl"
	})
	
 } ]);

angular.module('myService',[]).service('$http',function($http){
	return {
		
		getStuff: function(payLoad){
			
	
			$http.get();
			
		}
		
	}
	
	
})