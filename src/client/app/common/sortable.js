(function () {
    'use strict';

    angular
        .module("app")
        .directive("sortable", [sortableDirective]);

    function sortableDirective() {
        return {
            restrict: "A",
            scope:{
                data:"="
            },
            controller:function($scope){
                
            },
            link: function (scope, element, attributes) {

                var sorted = undefined;
                var col = attributes['sortable'];
                var oldClass = 'sorting'
                
                attributes.$$element.addClass(oldClass);
                
                element.on("click", function(){
                    sort();
                    scope.$apply();
                });

                function changeClass(){
                    if(sorted=='asc'){
                        attributes.$$element.removeClass(oldClass);
                        attributes.$$element.addClass('sorting_asc');
                        oldClass = 'sorting_asc';
                    }
                    else if(sorted=='desc'){
                        attributes.$$element.removeClass(oldClass);
                        attributes.$$element.addClass('sorting_desc');
                        oldClass='sorting_desc';
                    }
                    
                }

                function sort() {

                    if (sorted == 'asc') {
                        sorted = 'desc';
                    }
                    else {
                        sorted = 'asc';
                    }

                    scope.data.sort(function (o1,o2) {
                        if(o1[col]<o2[col])
                            return -1;
                        else if(o1[col]>o2[col])
                            return 1;
                        return 0;
                    });

                    if (sorted == 'desc') {
                        scope.data.reverse();
                    }

                    changeClass();
                }
            }
        };
    }

})();