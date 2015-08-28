app.controller('HomeController', ['$scope', 'cartService', function ($scope, cartService) {
  $scope.records = cartService.records();
  $scope.test = 'BARF';
}]);
