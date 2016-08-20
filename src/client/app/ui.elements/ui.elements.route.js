(function() {
  'use strict';

  angular
    .module('app.ui.elements')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'datatables',
        config: {
          url: '/ui/datatables',
          templateUrl: 'app/ui.elements/data.tables.html',
          controller: 'UIElementsController',
          controllerAs: 'vm'
        }
      }
    ];
  }
})();
