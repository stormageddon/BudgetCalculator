app.factory('utils', function() {
  return {
    isFunction: function(funcToCheck) {
      var getType = {};
      return funcToCheck && getType.toString.call(funcToCheck) === '[object Function]';
    }
  };
  
});
