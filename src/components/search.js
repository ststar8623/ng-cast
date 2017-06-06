angular.module('video-player')

.component('search', {
  // TODO
  templateUrl: 'src/templates/search.html', 
  bindings: {
    searchResults: '<'
  },
  controller: function(youTube) {
    this.result = (inputSearch) => {
      console.log('inputSearch ', inputSearch);
      console.log(this);
      youTube.search(inputSearch, this.searchResults);
    };
  }
});
