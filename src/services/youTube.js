angular.module('video-player')
.service('youTube', ['$http', function($http) {
  // TODO
  this.search = (text, callBack) => {
    $http({
      url: 'https://www.googleapis.com/youtube/v3/search',
      method: 'GET',
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        q: text,
        videoEmbeddable: true,
        key: YOUTUBE_API_KEY
      }
    }).then(data => {
      console.log(data);
      callBack(data.data.items);
    });
  };
}]);
