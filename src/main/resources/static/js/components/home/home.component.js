(function () {
		
	angular.
		module('home.module', []).
		
		component('homePage', {
				
			template: '<div class="jumbotron">' + 
			  		  '  <h1 class="display-3">Home Page</h1>' +
			          '  <hr class="my-4">' +
					  '  <p>Petra Rowan Rhines</p>' +
					  '  <p class="lead">' +
					  '  </p>' +
					  '</div>',
			
			controller: ['authService',
				
				function HomeController (authService) {
				
				    var vm = this;
				    vm.auth = authService;
				    
				}	
			]
		
		});
})();	
