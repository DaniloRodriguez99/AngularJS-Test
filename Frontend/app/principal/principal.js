'use strict';

angular.module('myApp.principal', ['ngRoute', 'ngMaterial', 'ngMessages'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/principal', {
    templateUrl: 'principal/principal.html',
    controller: 'PrincipalCtrl'
  });
}])

.controller('PrincipalCtrl', function($scope, videoGameService) {

    $scope.browser = {
        text: ""
    }
    $scope.grid = [];
    var page = 1;
    var page_size = 40;

    let data;

    var onInit = () => {
      videoGameService.getVideoGames(page, page_size)
    }

    $scope.searchVideoGame = function (gameTitle) {
      videoGameService.getVideoGamesByTitle(gameTitle, page, page_size)
    }

    var videoGamesListener = $scope.$watch(() => videoGameService.videoGames, function(videoGames) {
      $scope.grid = []
      if(videoGames != undefined) {
        for(let i = 0; i < videoGames.length/5; i++) {
          $scope.grid.push(videoGames.slice(i*5, (i*5)+5)) //split the videoGame array with all search results into subarrays to display
        }
      }
    });

    $scope.$on('$destroy', function() {
      videoGamesListener(); // Destroy the watch
    });

    onInit();
});