(function () {
    'use strict';

    angular
        .module("app")
        .directive("entry", [entryDirective]);

    function entryDirective() {
        return {
            restrict: "E",
            scope: {
                data: "=",
                edit:"@"
            },
            template:'<input ng-show="{{edit}}" type="text" class="entry" ng-model="data"></input>'+
                     '<span ng-hide="{{edit}}">{{data}}</span>',
            /*compile: function (element, attributes) {

                return {
                    pre: function (scope, element, attributes, controller, transcludeFn) {
                        console.log('pre-compile:'+scope.$parent.$eval(attributes['type']));
                    },
                    post: function (scope, element, attributes, controller, transcludeFn) {
                        console.log('post-compile:'+scope.$parent.$eval(attributes['type']));
                    }
                }
            },
            controller: function ($scope) {
                    //console.log('controller'+$scope.$eval(attributes['type']));
            },*/
            link: function (scope, element, attributes) {
                    
                    $(element.children()[0]).on("focus",function(element){
                        $(element.target.parentElement.parentElement).addClass('focus');
                    });

                    $(element.children()[0]).on("blur",function(element){
                        $(element.target.parentElement.parentElement).removeClass('focus');
                    });

            }
        };
    }

})();