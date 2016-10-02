(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.val = "list comma separated dishes you usually have for lunch";
  $scope.messageText = "";
  $scope.checkForTooMuch = function () {
    $scope.messageText = decideText ($scope.val);
  };

  function decideText(str) {
    var returnText = "";
    if (!str) { //check for empty value
      returnText = "Please enter data first";
    } else {
      var arr = str.split(',');
      var num = 0;
      //check if any entry is null in the input
      for (var i = 0; i < arr.length; i++) {
        if (arr[i]) {
          num = num + 1;
        }
      }

      if (num > 3) {
        returnText = "Too much!";
      } else {
        returnText = "Enjoy!";
      }
    }
    return returnText;
  };
};

})();
