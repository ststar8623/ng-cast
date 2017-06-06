angular.module('video-player')

.component('app', {
  // TODO
  templateUrl: 'src/templates/app.html',
  
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = function(video) {
      this.currentVideo = video;
    }.bind(this);
    this.searchResults = function(videos) {
      this.videos = videos;
      this.currentVideo = videos[0];
    }.bind(this);
    // this.submitSearch = function(inputSearch) {
    //   console.log(inputSearch);
    //   youTube.search(inputSearch, this.searchResults);
    // }.bind(this);
    youTube.search('hi', this.searchResults);
    
  }
});
