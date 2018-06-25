(function() {
  
  'use strict';
  
  angular
    .module('petraRowanRhines')
    .directive('actionsmenu', actionsMenu);
    
  function actionsMenu() {
    return {
      templateUrl: 'js/components/shared/actionsMenu/actionsMenu.html',
      controller: actionsMenuController,
      controllerAs: 'vm'
    }
  }
   
  function actionsMenuController() {
	  var vm = this;
  }
  
})();