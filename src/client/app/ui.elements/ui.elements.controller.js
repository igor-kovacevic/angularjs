(function () {
  'use strict';

  angular
    .module('app.ui.elements')
    .controller('UIElementsController', UIElementsController);

  UIElementsController.$inject = ['$timeout'];
  /* @ngInject */
  function UIElementsController($timeout) {
    var vm = this;
    vm.title = 'UI Elements';
    
    vm.data =[];
    
    $timeout(function(){
      vm.data = [{ engine: "Gecko", browser: "Firefox 1.0", plattform: "Win 98+ / OSX.2", version: "1.7", grade: "A" },
      { engine: "Gecko", browser: "Firefox 1.5", plattform: "Win 98+ / OSX.2", version: "1.8", grade: "A" },
      { engine: "Gecko", browser: "Firefox 2.0", plattform: "Win 98+ / OSX.2", version: "1.8", grade: "A" },
      { engine: "Gecko", browser: "Firefox 3.0", plattform: "Win 2k+ / OSX.3", version: "1.9", grade: "A" },
      { engine: "Gecko", browser: "Camino 1.0", plattform: "OSX.2+", version: "1.8", grade: "A" },
      { engine: "Gecko", browser: "Camino 1.5", plattform: "OSX.3+", version: "1.8", grade: "A" },
      { engine: "Gecko", browser: "Netscape 7.2", plattform: "Win 95+ / Mac OS 8.6-9.2", version: "1.7", grade: "A" },
      { engine: "Gecko", browser: "Netscape Browser 8", plattform: "Win 98SE+", version: "1.7", grade: "A" },
      { engine: "Gecko", browser: "Netscape Navigator 9", plattform: "Win 98+ / OSX.2+", version: "1.8", grade: "A" },
      { engine: "Gecko", browser: "Mozilla 1.0", plattform: "Win 95+ / OSX.1+", version: "1", grade: "A" }];

    },100);
    
     



  }
})();
