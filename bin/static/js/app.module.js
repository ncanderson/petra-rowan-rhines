/* 
 * To Do: use ngResource, instead of $http: 'https://docs.angularjs.org/tutorial/step_13'
 * Downloaded the node module, included, not being used
 */

var petraRowanRhines = angular.module('petraRowanRhines', [
	'ui.router'
]);

petraRowanRhines.config([
	'$stateProvider', 
	'$urlRouterProvider', 
	
	function($stateProvider, $urlRouterProvider) {
	
		$urlRouterProvider.otherwise('/');
	
		$stateProvider
		
			.state('home', {
				url: '/',
				template: '<div class="jumbotron">' + 
						  	  '<h1 class="display-3">Home Page</h1>' +
							  '<hr class="my-4">' +
							  '<p>Petra Rowan Rhines</p>' +
							  '<p class="lead">' +
							  '</p>' +
					  	  '</div>'
			})
	}
]);	

