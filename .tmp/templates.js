angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/home/home.html","<h1>Navbar example</h1><p>This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.</p><p>To see the difference between static and fixed top navbars, just scroll.</p><p><a class=\"btn btn-lg btn-primary\" href=../../components/#navbar role=button>View navbar docs &raquo;</a></p>");
$templateCache.put("app/core/404.html","404");
$templateCache.put("app/ui.elements/data.tables.html","<h1>Data tables</h1><table class=\"table table-striped table-bordered table-hover dataTable\"><thead><tr><th sortable=engine data=vm.data>Engine</th><th sortable=browser data=vm.data>Browser</th><th sortable=plattform data=vm.data>Plattform</th><th sortable=version data=vm.data>Version</th><th sortable=grade data=vm.data>Grade</th></tr></thead><tbody><tr dir-paginate=\"entry in vm.data | itemsPerPage: 10\"><td>{{entry.engine}}</td><td><entry data=entry></entry></td><td>{{entry.plattform}}</td><td>{{entry.version}}</td><td>{{entry.grade}}</td></tr></tbody></table><div class=row><div class=\"col-md-2 col-md-offset-5\"><dir-pagination-controls></dir-pagination-controls></div></div>");}]);