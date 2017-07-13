
angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    
    $scope.user;
    $scope.pw;
    

	$scope.runAuthentication1 = function runAuthentication1() {
		$http.post('http://localhost:8081/logintest/authenticate1/'+$scope.user+'/'+ $scope.pw+'/', {
			'usr' : $scope.publisher.publisherId,
			'pw' : $scope.publisher.publisherName
		}).success(function(data) {
			alert('The first authentication worked !');
		});

		window.location.href = "http://localhost:8081/logintest/";

	};
	
	$scope.runAuthentication2 = function runAuthentication2() {
		$http.post('http://localhost:8081/logintest/authenticate1/', {
			'usr' : $scope.publisher.publisherId,
			'pw' : $scope.publisher.publisherName
		}).success(function(data) {
			alert('The second authentication worked !');
		});

		window.location.href = "http://localhost:8081/logintest/";

	};
    
    
});


angular.module('myService',[]).service('$http',function($http){
	return {
		
		getStuff: function(payLoad){
			
	
			$http.get();
			
		}
		
	}
	
	
})