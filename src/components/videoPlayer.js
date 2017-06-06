angular.module('video-player')

.component('videoPlayer', {
  // TODO
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    video: '<'
  },
  controller: function() {
    this.id = function(id) {
      return 'https://www.youtube.com/embed/' + id; 
    };
  }
});
