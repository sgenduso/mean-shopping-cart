var app = angular.module('shopping-cart', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/checkout', {
    templateUrl: 'partials/cart.html',
    controller: 'CartController'
  });
  $locationProvider.html5Mode(true);
});
