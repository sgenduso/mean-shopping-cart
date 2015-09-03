// $('.gauge--3 .semi-circle--mask').attr({
//     style: '-webkit-transform: rotate(' + newVal + 'deg);' +
//     '-moz-transform: rotate(' + newVal + 'deg);' +
//     'transform: rotate(' + newVal + 'deg);'
//    });
// }, 1000);

app.directive('gsMoveGauge', function () {
  return {
    scope: {
      trendingScale: '=trendingScale'
    },
    restrict: 'A',
    link: function (scope, element, attrs) {
      $('.gauge--3 .semi-circle--mask').attr({
          style: '-webkit-transform: rotate(' + element.trendingScale * 1.8 + 'deg);' +
          '-moz-transform: rotate(' + element.trendingScale * 1.8 + 'deg);' +
          'transform: rotate(' + element.trendingScale * 1.8 + 'deg);'
         });
      // element.on('mouseenter', function(event) {
      //   // console.log(scale);
      //   element.css('background-color', 'black');
      // });
      // element.on('mouseleave', function(event) {
      //   element.css('background-color', 'white');
      // });
    }
  };
});

// app.directive('gsChangeBackground', function() {
//   return {
//     restrict: 'A',
//     link: function(scope, element, attrs) {
//       // var newColor = scope.newBackground;
//
//       element.on('mouseenter', function(event) {
//         element.css('background-color', scope.newBackground);
//       });
//
//       element.on('mouseleave', function(event) {
//         element.css('background-color', 'white');
//       });
//     }
//   };
// });
//
//
// <h3>GOTTA CATCH EM ALL!</h3>
//
// <div gs-change-background>
//   <input type="text" ng-model="newBackground" placeholder="New Mouseover Color"/>
//   <gs-pokemon-details pokemon-data="pokemonToDisplay"></gs-pokemon-details></div>
