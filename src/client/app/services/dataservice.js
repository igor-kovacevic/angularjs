(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', '$q'];
  /* @ngInject */
  function dataservice($http, $q) {
    var service = {
      
    };

    return service;

 
  }
})();
