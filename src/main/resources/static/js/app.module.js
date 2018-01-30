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

'use strict';

var petraRowanRhines = angular.module('petraRowanRhines', [
	'ui.router',
	'auth0.auth0'
])
.config(config);

config.$inject = [
	'$stateProvider',
	'$locationProvider',
	'$urlRouterProvider',
	'angularAuth0Provider'
];

function config (
	$stateProvider,
    $locationProvider,
    $urlRouterProvider,
    angularAuth0Provider
) {

	$stateProvider
		.state('home', {
			url: '/',
			controller: 'HomeController',
			templateUrl: 'app/home/home.html',
			controllerAs: 'vm'
		})
		.state('callback', {
			url: '/callback',
			controller: 'CallbackController',
			templateUrl: 'app/callback/callback.html',
			controllerAs: 'vm'
		});

	// Initialization for the angular-auth0 library
	angularAuth0Provider.init({
		clientID: AUTH0_CLIENT_ID,
		domain: AUTH0_DOMAIN,
		responseType: 'token id_token',
		audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
		redirectUri: AUTH0_CALLBACK_URL,
		scope: 'openid'
	});
	
	$urlRouterProvider.otherwise('/');
	
	$locationProvider.hashPrefix('');
	
	$locationProvider.html5Mode(true);
};