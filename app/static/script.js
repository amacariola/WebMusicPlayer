/*****************************************/
/*   SCRIPT.JS FOR AUDIO PLAYBACK        */
/*      with support to native           */
/*  iPad, iPhone and Android controls    */
/*****************************************/


var audio = {
    init: function() {
    var $that = this;
       $(function() {
          $that.components.media();
       });
    },
    components: {
       media: function(target) {
          var media = $('audio.fc-media',(target !== undefined)? target : 'body');
          if(media.length) {
             media.mediaelementplayer({
                  audioHeight : 50,
                  features : ['playpause','current','duration','progress','volume','tracks','fullscreen'],
                  alwaysShowControls : true,
      	          timeAndDurationSeperator : <span></span>,
                  iPadUseNativeControls : true,
                  iPhoneUseNativeControls : true,
                  AndroidUseNativeControls : true
             });
           }
        },
    },

};


audio.init(); 
   
