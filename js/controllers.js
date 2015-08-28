app.controller('HomeController', ['$scope', 'cartService', function ($scope, cartService) {
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

}]);
