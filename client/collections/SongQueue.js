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

    // remove a song from the queue once it is done playing
    // and play first song of queue, if available
    this.on('ended', function(song) {
      this.remove(song);
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function(){
    if (this.length > 0) {
      this.at(0).play();
    }
  }

});