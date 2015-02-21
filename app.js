//Budget Calculator
var BudgetNamespace = BudgetNamespace || {};
BudgetNamespace.stateTaxMap = {
	AK: 0.0000,
	AL: 0.0200,
	AR: 0.0090,
	AZ: 0.0259,
	CA: 0.0100,
	CO: 0.0463,
	CT: 0.0300,
	DE: 0.0000,
	FL: 0.0000,
	GA: 0.0100,
	HI: 0.0140,
	IA: 0.0360,
	ID: 0.0160,
	IL: 0.0375,
	IN: 0.0330,
	KS: 0.0270,
	KY: 0.0200,
	LA: 0.0200,
	MA: 0.0515,
	MD: 0.0200,
	ME: 0.0000,
	MI: 0.0425,
	MN: 0.0535,
	MO: 0.0150,
	MS: 0.0300,
	MT: 0.0100,
	NC: 0.0575,
	ND: 0.0122,
	NE: 0.0246,
	NH: 0.0000,
	NJ: 0.0140,
	NM: 0.0170,
	NV: 0.0000,
	NY: 0.0400,
	OH: 0.00528,
	OK: 0.0050,
	OR: 0.0500,
	PA: 0.0307,
	RI: 0.0375,
	SC: 0.0000,
	SD: 0.0000,
	TN: 0.0000,
	TX: 0.0000,
	UT: 0.0500,
	VA: 0.0200,
	VT: 0.0355,
	WA: 0.0000,
	WI: 0.0400,
	WV: 0.0300,
	WY: 0.0000
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
