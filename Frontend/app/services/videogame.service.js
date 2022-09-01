angular.module('myApp.services', ['ngRoute'])


.service('videoGameService', function($http) {
  var self = this
  self.videoGames;
  let next = '';
  const BASEURL = 'http://localhost:3000/'

  
  self.getVideoGames = (page, page_size) => {
    $http({method : 'GET',url : BASEURL + 'videoGames', params: {
        page: page,
        page_size: page_size
    } }).then((result) => {
        if(result.status == 200) {
            self.videoGames = result.data.results
            next = result.data.next
        }
    }).catch((err) => {
        console.log("error")
    });
   }

   self.getVideoGamesByTitle = (title, page, page_size) => {
    $http({method : 'GET',url : BASEURL + 'videoGamesByTitle', params: {
        title: title,
        page: page,
        page_size: page_size
    }}).then((result) => {
        if(result.status == 200) {
            self.videoGames = result.data.results
            next = result.data.next
        }
    }).catch((err) => {
        console.log("error")
    });
   }
});