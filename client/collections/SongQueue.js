// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    // automatically play the first song after adding a song
    // to an empty queue
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    if (this.length > 0) {
      this.at(0).play();
    }
  }

});