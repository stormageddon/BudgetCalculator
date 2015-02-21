//Budget Calculator
var BudgetNamespace = BudgetNamespace || {};
BudgetNamespace.stateTaxMap = {
	

	
};

var app = angular.module('app', ['ngMaterial', 'ngRoute']);

app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('docs-dark');
});

app.config(function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/budget.html',
      controller: 'BudgetController'
    }).
    otherwise({
      redirectTo: '/'
    });
});

app.run( function() {
});
