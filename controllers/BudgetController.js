app.controller('BudgetController', function($scope, states) {

  $scope.income = '';
  $scope.rent = 0;
  $scope.food = 0;
  $scope.car = 0;
  $scope.totalExpenses = 0;
  $scope.monthlyIncome = 0;
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
      Necessities (58%)
      -------------------
      33% income = rent
      10% = food
      15% = Automobile expenses

      Savings (15%)
      15% = save
     */
    var mIncome = calculateMonthlyIncome($scope.income);
    $scope.monthlyIncome = (mIncome).toFixed(0);

    $scope.rent = (mIncome * .33).toFixed(0);
    $scope.food = (mIncome * .1).toFixed(0);
    $scope.car = (mIncome * .15).toFixed(0);
    $scope.savings = (mIncome * .15).toFixed(0)

    $scope.totalExpenses = (parseInt($scope.rent, 10) + parseInt($scope.food, 10) + parseInt($scope.car, 10) + parseInt($scope.savings, 10));
    
    $scope.totalExpensesLabel = $scope.totalExpenses + '/' + $scope.monthlyIncome;
  };

  $scope.update = function() {
    $scope.totalExpenses = (parseInt($scope.rent, 10) + parseInt($scope.food, 10) + parseInt($scope.car, 10) + parseInt($scope.savings, 10));

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
    return $scope.income * $scope.stateTaxMap[$scope.state].taxRate;
  }

  var calculateSocialSecurityTax = function() {
    return $scope.income * 0.062;
  }

  var calculateMedicareTax = function() {
    return $scope.income * 0.062;
  }

});
