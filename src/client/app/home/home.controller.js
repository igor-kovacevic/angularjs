(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
  /* @ngInject */
  function HomeController() {
    var vm = this;
    vm.title = 'Home';
  }
})();
