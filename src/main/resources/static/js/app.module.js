/* 
 * To Do: use ngResource, instead of $http: 'https://docs.angularjs.org/tutorial/step_13'
 * Downloaded the node module, included, not being used
 */
(function () {
	
	'use strict';
	
	var petraRowanRhines = angular.module('petraRowanRhines', [
			'ui.router',
			'angular-jwt',
			'auth0.auth0',
			'home.module'
		])
		.config([
			'$stateProvider',
			'$locationProvider',
			'$urlRouterProvider',
			'$httpProvider',			// Injecting here allows for modifying the behavior
			'angularAuth0Provider',
			'jwtOptionsProvider',
	
		function config (
			$stateProvider,
		    $locationProvider,
		    $urlRouterProvider,
		    $httpProvider,
		    angularAuth0Provider,
		    jwtOptionsProvider
		) {
		
			$stateProvider
				.state('home', {
					url: '/',
					component: 'homePage'
				})
				.state('callback', {
					url: '/callback',
					controller: 'CallbackController',
					templateUrl: 'js/components/shared/callback/callback.html',
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
			
			// Set up interceptor for $http requests
			jwtOptionsProvider.config({				
				tokenGetter: function() {
					return localStorage.getItem('access_token');
				},				
				whiteListedDomains: ['localhost']
			});

		    $httpProvider.interceptors.push('jwtInterceptor');
			
		}

	]);
})();