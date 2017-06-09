var app = angular.module('myApp', [ 'ngRoute', 'ui.grid', 'ui.date',
		'ui.bootstrap' ]);
//
// ,'ui.bootstrap.demo'
//, 'myService'


app
		.controller(
				'myCtrl',
				function($scope, $http, $location, $interval) {
					$scope.firstName = "Ron";
					$scope.lastName = "Row";

					// alert('the controller works ');

					// $scope.runAuthentication1();

					$scope.user = {

						"userName" : "",
						"password" : ""

					}

					$scope.runAuthentication2 = function runAuthentication2() {
						// $scope.user
						// $scope.pwd
						$http
								.post(
										'http://localhost:8081/logintest/app/login/authenticate2/',
										{
											"userName" : $scope.user.userName,
											"password" : $scope.user.password
										})
								// $http.get('http://localhost:8081/logintest/app/login/authenticate2/?usr='+$scope.user+'&pw='+$scope.pwd+'')
								.success(
										function(data) {



											if (data == true) {



												$('#myModal').modal('show');
												var count = 0;


												$interval(
														function() {
															// action: wait 5
															// seconds
															count++;
															if (count >= 3
																	&& count < 5) {
																// alert('the
																// count
																// is'+count)
																$('#myModal')
																		.modal(
																				'hide');

															} else if (count >= 5) {

																// $('#myModal').on('hidden.bs.modal',
																// function (e)
																// {
																$location
																		.url("/jgrid");
																// });

															}

														}, 1000, 5);

												// });

											} else {
												// action: for failure

												$("#modalAlert")
														.toggleClass(
																'alert-info alert-danger');//
												$('#modalTitle1')
														.html(
																"<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> <b>Failure</b>");
												$('#modalText1').text(
														"Authentication 1 just ran and FAILED! Because data returned "
																+ data + "");

											}

										});

						// window.location.href =
						// "http://localhost:8081/logintest/";

					}

				});

app.controller('unitedCtrl', function($scope, $http, $location) {

	$(".alert").delay(200).addClass("in").fadeOut(3500);

});

app
		.controller('DatepickerDemoCtrl',
				function($rootScope, $scope) {


			
			
			//action: $broadcast for connecting controllers
			
			$scope.setStatus = function() {

						$rootScope.$broadcast('setStatus', {
							info : $scope.status
						});
						// $scope.$emit('getStatus', $scope.status);

					};

					$scope.setDateReqF = function() {

						$rootScope.$broadcast('setDRF1', {
							info : $scope.dateReqFrom
						});

						// $scope.$emit('getDRF1', $scope.dateReqFrom);

					};
					$scope.setDateReqT = function() {

						$rootScope.$broadcast('setDRT1', {
							info : $scope.dateReqTo
						});

						// $scope.$emit('getDRF1', $scope.dateReqFrom);

					};

					$scope.setDateCompF = function() {

						$rootScope.$broadcast('setDCF1', {
							info : $scope.dateCompFrom
						});

					};
					$scope.setDateCompT = function() {

						$rootScope.$broadcast('setDCT1', {
							info : $scope.dateCompTo
						});

					};

					$scope.today = function() {
						$scope.dt = new Date("MM/DD/YYYY");
					};
					$scope.today();

					$scope.status = "";
					$scope.blank1 = "";
					$scope.blank2 = "";

					$scope.clear = function() {
						$scope.dt = null;
					};

					// Disable weekend selection
					$scope.disabled = function(date, mode) {
						return (mode === 'day' && (date.getDay() === 0 || date
								.getDay() === 6));
					};

					$scope.toggleMin = function() {
						$scope.minDate = $scope.minDate ? null : new Date();
					};
					$scope.toggleMin();

					$scope.open = function($event) {
						$event.preventDefault();
						$event.stopPropagation();

						$scope.opened = true;
					};

					$scope.dateOptions = {
						formatYear : 'yy',
						startingDay : 1
					};

					$scope.formats = [ 'Initiated', 'Submitted', 'Approved',
							'Rejected', 'Completed' ];
					$scope.format = 'MM/dd/yyyy';
				});


app.service('getDataService', function($http,$interval) {

	this.getUsers = function(fName,lName,email,puid,dateReqFrom,status,dateReqFrom,dateReqTo,dateCompFrom,dateCompTo, successCallback) {

		$('#mySearchModal').modal('show');
		

		$http.get('/logintest/app/login/getUsers4/', {
			params : {
				'firstName' : fName,
				'lastName' : lName,
				'email' : email,
				'pmsUid' : puid,
				'requestedId' : dateReqFrom,
				'status' : status,
				'dateRequestedFrom' : dateReqFrom,
				'dateRequestedTo' : dateReqTo,
				'dateCompletedFrom' : dateCompFrom,
				'dateCompletedTo' : dateCompTo
			}
		}).success(function(data) {

			successCallback(data);
			
			$('#mySearchModal').modal('hide');
			
		}).error(function() {
			$('#mySearchModal').modal('hide');
		});

	}

});



app.controller('jsonDataTest', function($scope, $rootScope, $http,
		uiGridConstants, $interval, getDataService) {

	// begin: ui-grid info

	$scope.highlightFilteredHeader = function(row, rowRenderIndex, col,
			colRenderIndex) {
		if (col.filters[0].term) {
			return 'header-filtered';
		} else {
			return '';
		}
	};

	// Begin: ui-grid info

	$scope.gridOptions2 = {

		enableFiltering : true,
		onRegisterApi : function(gridApi) {
			$scope.gridApi = gridApi;
		},
		columnDefs : [
		// default
		{
			field : 'first_name',
			displayName : "First Name",
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'last_name',
			displayName : "Last Name",
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'email',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'gender',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'ip_address',
			displayName : "Ip Address",
			headerCellClass : $scope.highlightFilteredHeader
		}

		]

	};

	$scope.gridOptions3 = {

		enableFiltering : true,
		onRegisterApi : function(gridApi) {
			$scope.gridApi = gridApi;
		},
		columnDefs : [
		// default
		{
			field : 'firstName',
			displayName : "First Name",
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'lastName',
			displayName : "Last Name",
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'email',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'pmsUid',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'requestedId',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'status',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'dateRequestedFrom',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'dateRequestedTo',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'dateCompletedFrom',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'dateCompletedTo',
			headerCellClass : $scope.highlightFilteredHeader
		}

		]

	};

	$scope.$on('setStatus', function(event, arg) {
		$scope.status = arg.info;

	});

	$scope.$on('setDRF1', function(event, arg) {
		$scope.dateReqFrom = arg.info;

	});
	$scope.$on('setDRT1', function(event, arg) {
		$scope.dateReqTo = arg.info;

	});

	$scope.$on('setDCF1', function(event, arg) {
		$scope.dateCompFrom = arg.info;

	});
	$scope.$on('setDCT1', function(event, arg) {
		$scope.dateCompTo = arg.info;

	});

	// End: ui-grid info

	$scope.status = "";

	
	
	$scope.getUsers4 = function(){
		
				
		getDataService.getUsers($scope.fName,$scope.lName,$scope.email,$scope.puid,$scope.dateReqFrom,$scope.status,
				$scope.dateReqFrom,$scope.dateReqTo,$scope.dateCompFrom,$scope.dateCompTo, 
				function(data) {
					$scope.gridOptions3.data = data;
				}
		);
		
		
//$log.debug('the value of things is: '+$scope.things.it);
//		$scope.gridOptions3.data = getDataService.getUsers($scope.fName,$scope.lName,$scope.email,$scope.puid,$scope.dateReqFrom,$scope.status,$scope.dateReqFrom,$scope.dateReqTo,$scope.dateCompFrom,$scope.dateCompTo);
		
	};
	
	$scope.getUsers4_old = function() {

		$http.get('/logintest/app/login/getUsers4/', {
			params : {
				'firstName' : $scope.fName,
				'lastName' : $scope.lName,
				'email' : $scope.email,
				'pmsUid' : $scope.puid,
				'requestedId' : $scope.dateReqFrom,
				'status' : $scope.status,
				'dateRequestedFrom' : $scope.dateReqFrom,
				'dateRequestedTo' : $scope.dateReqTo,
				'dateCompletedFrom' : $scope.dateCompFrom,
				'dateCompletedTo' : $scope.dateCompTo
			}
		}).success(function(data) {

			$('#mySearchModal').modal('show');

			$('#mySearchModal').on('shown.bs.modal', function(e) {

				var count = 0;
				// do something...
				$interval(function() {
					// action: wait 5 seconds
					count++;

					if (count >= 3) {
						// alert('the count is: ' + count);
						$('#mySearchModal').modal('hide');
						// $location.url("/jgrid4");
						$scope.gridOptions3.data = data;
					}
				}, 1000, 3);

			});

		});

	}

	$scope.dateOptions = {
		dateFormat : 'dd.mm.yy',
	}

	$scope.date_req = '2015-10-31';
	$scope.date_completed = '2015-10-31';

	$scope.js1;
	$scope.runJs1 = function() {

		alert('runJs1 is working !');

		// the books to be used in the editing
		$http.get('http://localhost:8081/logintest/jsonMockData.html').success(
				function(data) {
					$scope.js1 = data;
					// console.log($scope.js1);
					alert('runJs1  returned some data !');
					p = $scope.js1;

					// action: will iterate over each piec of the json object
					// array
					// and return the first name property or any other object
					// property specified
					for ( var key in p) {
						if (p.hasOwnProperty(key)) {
							console.log(key + " -> " + p[key].first_name);
						}
					}



				});

	}

	$scope.js2;
	$scope.runJs2 = function() {

		$http.get('http://localhost:8081/logintest/jsonMockData.html').success(

		function(data) {

			// alert('we got into the runJs2 method :)');

			$scope.js2 = data;
			p = data;

			/*
			 * for (var key in p){
			 * 
			 * if (p.hasOwnProperty(key)){
			 * 
			 * console.log('the field first_name has value '+p[key].first_name); } }
			 */

		});

	}

	function escapeRegExp(string) {
		return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
	}

	$scope.filterBySearch = function(x) {
		if (!$scope.fName)
			return true;
		var regex = new RegExp('\\b' + escapeRegExp($scope.fName), 'i');
		return regex.test(x.first_name);
	};

});

app.controller('search3Controller', function($scope) {

});

/*
 * app.service('search3Service',function($http){
 * 
 * 
 *  })
 */

// app.js
// var pmsModule = angular.module('pmsRoute', [ 'ngRoute']);
// , 'ngCookies'
app
		.config([
				"$routeProvider",
				function($routeProvider) {
					return $routeProvider
							.when("/", {
								redirectTo : "/login"
							}).when("/home", {
								templateUrl : "home.html",
								controller : "controllerName"
							}).when("/login", {
								templateUrl : "login.html",
								controller : "myCtrl"
							}).when("/jgrid", {
								templateUrl : "jGrid.html",
								controller : "jsonDataTest"

							})

				} ]);

//angular.module('myService', [])

