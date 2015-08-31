app.controller('HomeController',
['$scope',
'cartService',
'$location',
function ($scope, cartService, $location) {
  $scope.records = cartService.records();
  $scope.styles = cartService.styles();
  $scope.prices = cartService.prices();
  $scope.quantities = cartService.quantities();
  $scope.cart = cartService.cart();
  //$scope.cartSize = cartService.quantityInCart();
  $scope.addRecord = function () {
    cartService.addRecord(this.record, this.quantity);
    console.log($scope.cart);
  };
$scope.newPage = function (path) {
  $location.path(path);
};
}]);

app.controller('CartController',
['$scope',
'cartService',
'$location',
function ($scope, cartService, $location) {
$scope.cart = cartService.cart();
}]);
