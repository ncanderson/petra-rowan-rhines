//(function() {
//	  
//	'use strict';
//	  
//	angular
//		.module('petraRowanRhines')
//		.directive('navbar', {
//			return {
//				templateUrl: 'js/components/shared/navbar/navbar.html',		        
//		        controllerAs: 'vm',
//	        	controller: ['authService',
//	        		
//	        		function navbarController(authService) {
//	        		var vm = this;
//	        		vm.auth = authService;
//	        	}]
//			}
//		});	  
//})();

(function() {
  
  'use strict';
  
  angular
    .module('petraRowanRhines')
    .directive('navbar', navbar);
    
  function navbar() {
    return {
      templateUrl: 'js/components/shared/navbar/navbar.html',
      controller: navbarController,
      controllerAs: 'vm'
    }
  }

  navbarController.$inject = ['authService'];
    
  function navbarController(authService) {
    var vm = this;
    vm.auth = authService;
  }
  
})();