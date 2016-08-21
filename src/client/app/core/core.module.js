(function() {
  'use strict';

  angular
    .module('app.core', [
      'ngAnimate', 'ngSanitize',
      'common.router',
      'ui.router','ngLodash','angularUtils.directives.dirPagination'
    ]);
})();
