(function () {

  'use strict';

  angular
    .module('petraRowanRhines')
    .service('authService', authService);

  authService.$inject = ['$state', 'angularAuth0', '$timeout'];

  function authService($state, angularAuth0, $timeout) {

    function login() {
    	
    	console.log('login');
    	
    	angularAuth0.authorize();
    }
    
    function log() {
    	console.log('logging');
    }
    
    function handleAuthentication() {
    	
    	console.log('handleAuthentication');
    	
    	angularAuth0.parseHash(function(err, authResult) {
	        if (authResult && authResult.accessToken && authResult.idToken) {
	        	
	        	console.log('true');
	        	
		        setSession(authResult);
		        $state.go('home');
	        } 
	        else if (err) {
	        	
	        	$timeout(function() {
	        		$state.go('home');
	        	});
	        	console.log(err);
	        	alert('Error: ' + err.error + '. Check the console for further details.');
	        }
	        else {
	        	console.log('handle error?');
	        	logout();
	        }
    	});
    }

    function setSession(authResult) {

    	console.log('setsSession');
    	
		// Set the time that the access token will expire at
		let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
		localStorage.setItem('access_token', authResult.accessToken);
		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem('expires_at', expiresAt);
    }
    
    function logout() {

    	console.log('logout');
    	
    	// Remove tokens and expiry time from localStorage
	    localStorage.removeItem('access_token');
	    localStorage.removeItem('id_token');
	    localStorage.removeItem('expires_at');
	    $state.go('home');
    }
    
    function isAuthenticated() {

    	//console.log('isAuthenticated');
    	
    	// Check whether the current time is past the 
	    // access token's expiry time
	    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
	    return new Date().getTime() < expiresAt;
    }

    return {
	    login: login,
	    handleAuthentication: handleAuthentication,
	    logout: logout,
	    isAuthenticated: isAuthenticated
    }
  }
})();
