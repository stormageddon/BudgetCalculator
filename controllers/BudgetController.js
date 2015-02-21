app.controller('BudgetController', function($scope) {

  $scope.income = '';
  $scope.rent = 0;
  $scope.food = 0;
  $scope.car = 0;
  $scope.totalExpenses = 0;
  $scope.monthlyIncome = 0;
  $scope.savings = 0;
  $scope.totalExpensesLabel = '0/0';
  $scope.state = 'Select State';

  $scope.stateTaxMap = BudgetNamespace.stateTaxMap;
  $scope.states = ['Select State', 'AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 
                      'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV',
                      'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];
  console.log($scope.stateTaxMap);
  
  $scope.initSliders = function() {
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

    console.log('State tax: ', $scope.stateTaxMap[$scope.state]);
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
    console.log("Looking up state: ", $scope.state);
    console.log("Returning tax: ", $scope.stateTaxMap[$scope.state]);
    return $scope.income * $scope.stateTaxMap[$scope.state];
  }

  var calculateSocialSecurityTax = function() {
    return $scope.income * 0.062;
  }

  var calculateMedicareTax = function() {
    return $scope.income * 0.062;
  }

});
