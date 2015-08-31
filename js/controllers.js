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
  $scope.addRecord = function () {
    cartService.addRecord(this.record, this.quantity);
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
  $scope.show = false;
  $scope.cart = cartService.cart();
  $scope.removeRecord = function () {
    cartService.removeRecord(this.record);
  };
  $scope.toggleEdit = function () {
    this.show = !this.show;
    // $scope.show = cartService.toggle($scope.show);
  };
  $scope.saveQuantity = function (newQuantity) {
    cartService.editQuantity(this.record, newQuantity);
  };
}]);
