var app = angular.module('myApp', [ 'ngRoute', 'ui.grid', 'ui.date',
		'ui.bootstrap' ]);
//
// ,'ui.bootstrap.demo'

app
		.controller(
				'myCtrl',
				function($scope, $http, $location, $interval) {
					$scope.firstName = "Ron";
					$scope.lastName = "Row";

					// alert('the controller works ');

					$scope.user = "";
					$scope.pwd = "";

					$scope.runAuthentication1 = function runAuthentication1() {

						// alert('got into Authentication 1');

						$('#loadingMsg').show();

						var request = $http.post(
								'http://localhost:8081/logintest/app/login/authenticate1/'
										+ $scope.user + '/' + $scope.pwd + '',
								{});

						request
								.success(function(data) {

									$('#loadingMsg').hide();
									// alert('Authentication 1 just ran and is
									// successful! and returned '+data);

									// $('#myModal').modal('show');

									if (data == true) {

										// $("#modalAlert").toggleClass('alert-info
										// alert-success');//
										// $('#modalTitle1').html("<span
										// class='glyphicon glyphicon
										// glyphicon-ok'
										// aria-hidden='true'><b>Success</b>");
										// $('#modalText1').text("Authentication
										// 1 just ran and is successful! and
										// returned..."+data);
										// $('#myModal').modal('hide');
										$location.url("/test");

									} else {
										// action: for failure

										$("#modalAlert").toggleClass(
												'alert-info alert-danger');//
										$('#modalTitle1')
												.html(
														"<span class='glyphicon glyphicon-exclamation-sign' aria-hidden='true'></span> <b>Failure</b>");
										$('#modalText1').text(
												"Authentication 1 just ran and FAILED! Because data returned "
														+ data + "");

									}

								});

						request.error(function(data) {

							$('#loadingMsg').hide();
							alert('error');

						});

						// window.location.href =
						// "http://localhost:8081/logintest/";

					}

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
											// alert('Authentication 2 just ran
											// and is successful !');
											// alert('entered the inner function
											// 5:34');

											// if (data == true) {
											//												
											// alert('Authentication 2 just ran
											// and is successful !');
											//												
											// } else {
											//												
											// alert('Authentication 2 FAILED');
											//												
											// }

											if (data == true) {

												// $("#modalAlert").toggleClass('alert-info
												// alert-success');//
												// $('#modalTitle1').html("<span
												// class='glyphicon glyphicon
												// glyphicon-ok'
												// aria-hidden='true'><b>Success</b>");
												// $('#modalText1').text("Authentication
												// 1 just ran and is successful!
												// and returned..."+data);
												// $('#myModal').modal('hide');
												$('#myModal').modal('show');
												var count = 0;
												// $('#myModal').on('shown.bs.modal',
												// function (e) {
												// do something...
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
																		.url("/jgrid4");
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

			
			$scope.workwork = function(){
				
				alert('go now!');
			};
			
					$scope.setStatus = function() {

						$rootScope.$broadcast('setStatus', {info: $scope.status});
//						$scope.$emit('getStatus', $scope.status);

					};

					$scope.setDateReqF = function() {
						alert('setDateReqF was activated');
						$rootScope.$broadcast('setDRF1', {info: $scope.dateReqFrom});
						
//						$scope.$emit('getDRF1', $scope.dateReqFrom);

					};

					$scope.setDateCompF = function() {
						alert('setDateCompF was activated');
						$rootScope.$broadcast('setDCF1', {info: $scope.dateCompFrom});
						
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

app.controller('jsonDataTest', function($scope, $rootScope, $http,
		uiGridConstants, $interval) {

	// begin: ui-grid info [practice]
	$scope.myData = [ {
		"firstName" : "Cox",
		"lastName" : "Carney",
		"company" : "Enormo",
		"employed" : true
	}, {
		"firstName" : "Lorraine",
		"lastName" : "Wise",
		"company" : "Comveyer",
		"employed" : false
	}, {
		"firstName" : "Nancy",
		"lastName" : "Waters",
		"company" : "Fuelton",
		"employed" : false
	} ];

	// example.js javascript code [for datepicker items] ------>

	// $scope.today = function() {
	// $scope.dt = new Date("MM/DD/YYYY");
	// };
	// $scope.today();
	//
	//		  
	// $scope.status = "";
	// $scope.blank1 = "";
	// $scope.blank2 = "";
	//		  
	// $scope.clear = function () {
	// $scope.dt = null;
	// };
	//
	// // Disable weekend selection
	// $scope.disabled = function(date, mode) {
	// return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 )
	// );
	// };
	//
	// $scope.toggleMin = function() {
	// $scope.minDate = $scope.minDate ? null : new Date();
	// };
	// $scope.toggleMin();
	//
	// $scope.open = function($event) {
	// $event.preventDefault();
	// $event.stopPropagation();
	//
	// $scope.opened = true;
	// };
	//
	// $scope.dateOptions = {
	// formatYear: 'yy',
	// startingDay: 1
	// };
	//
	// $scope.formats = ['Initiated', 'Submitted', 'Approved', 'Rejected',
	// 'Completed'];
	// $scope.format = 'MM/dd/yyyy';

	// example.js javascript code ------>

	$scope.highlightFilteredHeader = function(row, rowRenderIndex, col,
			colRenderIndex) {
		if (col.filters[0].term) {
			return 'header-filtered';
		} else {
			return '';
		}
	};

	$scope.gridOptions = {

		enableFiltering : true,
		onRegisterApi : function(gridApi) {
			$scope.gridApi = gridApi;
		},
		columnDefs : [
		// default
		{
			field : 'firstName',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'lastName',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'company',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'employed',
			headerCellClass : $scope.highlightFilteredHeader
		}

		]

	};

	$scope.gridOptions.data = $scope.myData;
	// end: ui-grid info [practice]

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
			field : 'redID',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'status',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'dateReqFrom',
			headerCellClass : $scope.highlightFilteredHeader
		}, {
			field : 'dateCompFrom',
			headerCellClass : $scope.highlightFilteredHeader
		}

		]

	};

	$scope.$on('setDRF1', function(event, arg) {
		$scope.dateReqFrom = arg.info;
		alert('got into getDRF1 and dateReqFrom'+ dateReqFrom);
	});
	
	$scope.$on('setStatus', function(event, arg) {
		$scope.status = arg.info;
		alert('got into getStatus and status ='+status);
	});



	$scope.$on('setDCF1', function(event, arg) {
		$scope.dateCompFrom = arg.info;
		alert('got into getDCF1 and dateCompFrom '+dateCompFrom);
	});

	$scope.getUsers2 = function() {

		// , ,

		// alert('getusers 2 has been run !');

		// $http.get('http://localhost:8081/logintest/app/login/getUsers/')
		// $http.get('/logintest/app/login/getUsersGet',
		// {
		// params: {
		// 'firstName': $scope.fName,
		// 'lastName': $scope.lName,
		// 'email': $scope.email,
		// 'dateRequestedFrom': $rootScope.blank1
		// }
		// })
		$http.get(
				'http://localhost:8081/logintest/app/login/getUsers?fn='
						+ $scope.fName + '&ln=' + $scope.lName + '&em='
						+ $scope.email + '&puid=' + $scope.puid + '&reqType='
						+ $scope.rid + '&status=' + $scope.status
						+ '&dateReqF=' + $scope.dateReqFrom + '&dateCompF='
						+ $scope.dateCompFrom + '').success(function(data) {

			$('#mySearchModal').modal('show');
			var count = 0;
			$('#mySearchModal').on('shown.bs.modal', function(e) {
				// do something...
				$interval(function() {
					// action: wait 5 seconds
					count++;

					if (count > 2) {
						alert('the count is' + count);
						$('#mySearchModal').modal('hide');
						// $location.url("/jgrid4");
						$scope.gridOptions2.data = data;
					}
				}, 1000, 3);

			});

			// $scope.gridOptions2.data = data;

		});

	}

	// End: ui-grid info

	$scope.status = "";

	$scope.getUsers3 = function() {

		$http.post('http://localhost:8081/logintest/app/login/getUsersPost/', {

			"firstName" : $scope.fName,
			"lastName" : $scope.lName,
			"email" : $scope.email,
			"pmsUid" : $scope.puid,
			"redID" : $scope.rid,
			"status" : $scope.status,
			"dateReqFrom" : "",
			"dateCompFrom" : ""

		}).success(function(data) {

			// alert("getUser3 brought data back !");

			$('#mySearchModal').modal('show');
			var count = 0;
			// $('#mySearchModal').on('shown.bs.modal', function (e) {
			// do something...
			$interval(function() {
				// action: wait 5 seconds
				count++;

				if (count >= 3) {
					alert('the count is' + count);
					$('#mySearchModal').modal('hide');
					// $location.url("/jgrid4");
					count = 0;
					$scope.gridOptions3.data = data;
				}
			}, 1000, 3);

			// });

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

					// for(i=0;i<7;i++){
					//			
					//
					// alert('runJs1 returned some data !');
					//			
					// }
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
			 * console.log('the field first_name has value '+p[key].first_name); }
			 *  }
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

	$scope.getUsers = function() {

		alert('getusers has been run !');

		// $http.get('http://localhost:8081/logintest/app/login/getUsers/')
		$http.get(
				'http://localhost:8081/logintest/app/login/getUsers/?fn='
						+ $scope.fName + '&ln=' + $scope.lName + '&em='
						+ $scope.email + '&puid=' + $scope.puid + '&reqType='
						+ $scope.rid + '&status=' + $scope.status
						+ '&dateReqF=' + $scope.dateReqFrom + '&dateCompF='
						+ $scope.dateCompFrom + '').success(function(data) {

			$scope.js3 = data;
			$scope.js2 = $scope.js3;

		});

	}

});

app.controller('search3Controller', function($scope) {

});

/*
 * app.service('search3Service',function($http){
 * 
 * 
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
							.when(
									"/test",
									{
										template : "<h1>Main</h1><p>Click on the links to change this content</p>"
												+ "<p><button type='submit' class='btn btn-default' data-ng-click='runJs2()'>Submit</button></p>"
												+ "<p x in records ng-repeat='x in js2'>{{x}}</p>",
										controller : "jsonDataTest"

									}).when("/united", {
								templateUrl : "united_theme_2.html",
								controller : "unitedCtrl"
							}).when("/", {
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
							}).when("/page1", {
								templateUrl : "pageExampe1_2.html",
								controller : "myCtrl"
							}).when("/jsonMd1", {
								templateUrl : "jsonMockData.html"
							}).when("/rs1", {
								templateUrl : "requestSearch.html"
							}).when("/jgrid1", {
								templateUrl : "jGrid1.html",
								controller : "jsonDataTest"
							}).when("/jgrid2", {
								templateUrl : "jGrid2.html",
								controller : "jsonDataTest"

							}).when("/jgrid3", {
								templateUrl : "jGrid3.html",
								controller : "jsonDataTest"

							}).when("/jgrid3B", {
								templateUrl : "ugrid_test.html",
								controller : "jsonDataTest"

							}).when("/jgrid4", {
								templateUrl : "jGrid4_2.html",
								controller : "jsonDataTest"

							})

				} ]);

angular.module('myService', []).service('$http', function($http) {
	return {

		getStuff : function(payLoad) {

			$http.get();

		}

	}

})