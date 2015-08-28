app.controller('HomeController', ['$scope', 'cartService', function ($scope, cartService) {
  $scope.records = cartService.records();
  $scope.styles = cartService.styles();
  $scope.prices = cartService.prices();
  $scope.test = 'BARF';
}]);
