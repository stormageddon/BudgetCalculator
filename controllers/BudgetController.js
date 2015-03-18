app.controller('BudgetController', function($scope, states) {

  $scope.income = '';
  $scope.rent = 0;
  $scope.utilities = 0;
  $scope.food = 0;
  $scope.car = 0;
  $scope.totalExpenses = 0;
  $scope.monthlyIncome = 0;
  $scope.discretionary = 0;
  $scope.savings = 0;
  $scope.totalExpensesLabel = '0/0';
  $scope.state = 'Select State';

  $scope.stateTaxMap = states;
  $scope.states = ['Select State'].concat(Object.keys(states));
  
  $scope.initSliders = function() {
    if( $scope.state === 'Select State' ) {
      return;
    }
    /*
      Necessities (63%)
      -------------------
      33% income = rent
      5% = utilities
      10% = food
      15% = Travel expenses

      Wants (20%)
      -------------------
      20% income = discretionary spending

      Savings (16%)
      -------------------
      16% = save
     */
    var mIncome = calculateMonthlyIncome($scope.income);
    $scope.monthlyIncome = (mIncome).toFixed(0);

    $scope.rent = (mIncome * .33).toFixed(0);
    $scope.utilities = (mIncome * .05).toFixed(0);
    $scope.food = (mIncome * .1).toFixed(0);
    $scope.car = (mIncome * .15).toFixed(0);
    $scope.discretionary = (mIncome *.2).toFixed(0);
    $scope.savings = (mIncome * .16).toFixed(0)

    $scope.totalExpenses = (parseInt($scope.rent, 10) + parseInt($scope.utilities, 10) + parseInt($scope.food, 10) + parseInt($scope.car, 10) + parseInt($scope.discretionary, 10) + parseInt($scope.savings, 10)) + '';
    $scope.totalExpensesLabel = $scope.totalExpenses + '/' + $scope.monthlyIncome;    
  };

  $scope.update = function() {
    $scope.totalExpenses = (parseInt($scope.rent, 10) + parseInt($scope.utilities, 10) + parseInt($scope.food, 10) + parseInt($scope.car, 10) + parseInt($scope.discretionary, 10) + parseInt($scope.savings, 10));

    $scope.totalExpensesLabel = $scope.totalExpenses + '/' + $scope.monthlyIncome;
  }

  var calculateMonthlyIncome = function() {
    var federalTax = calculateFederalTax();
    var stateTax = calculateStateTax();
    var socialSecurityTax = calculateSocialSecurityTax();
    var medicareTax = calculateMedicareTax();

    var postTaxIncome = $scope.income - federalTax - stateTax - socialSecurityTax - medicareTax;

    return postTaxIncome / 12;
  }

  var calculateFederalTax = function() {
    return $scope.income * 0.25;
  }

  var calculateStateTax = function() {
    var stateTaxRate = $scope.stateTaxMap[$scope.state].taxRate;
    var calculatedStateTaxRate = stateTaxRate;
    if( isFunction(stateTaxRate) ) {
      calculatedStateTaxRate = stateTaxRate.call(null,$scope.income);
    }
    return $scope.income * calculatedStateTaxRate;
  }

  var calculateSocialSecurityTax = function() {
    return $scope.income * 0.062;
  }

  var calculateMedicareTax = function() {
    return $scope.income * 0.062;
  }

  function isFunction(functionToCheck) {
    var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
  }

});
