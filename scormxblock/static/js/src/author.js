function AuthorXBlock(runtime, element) {

  $(element).find('.fullscreen').bind('click', fullscreen);

  // when you are in fullscreen, ESC and F11 may not be trigger by keydown listener.
  // so don't use it to detect exit fullscreen
  document.addEventListener('keydown', function (e) {
    
  });
  // detect enter or exit fullscreen mode
  document.addEventListener('webkitfullscreenchange', fullscreenChange);
  document.addEventListener('mozfullscreenchange', fullscreenChange);
  document.addEventListener('fullscreenchange', fullscreenChange);
  document.addEventListener('MSFullscreenChange', fullscreenChange);

  function fullscreen() {
    // check if fullscreen mode is available
    if (document.fullscreenEnabled ||
      document.webkitFullscreenEnabled ||
      document.mozFullScreenEnabled ||
      document.msFullscreenEnabled) {

      // which element will be fullscreen
      var iframe = document.querySelector('#scorm_container iframe');
      // Do fullscreen
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    }
    else {
      document.querySelector('.error').innerHTML = 'Your browser is not supported';
    }
  }

  function fullscreenChange() {
    if (document.fullscreenEnabled ||
         document.webkitIsFullScreen ||
         document.mozFullScreen ||
         document.msFullscreenElement) {      
    }

    // force to reload iframe once to prevent the iframe source didn't care about trying to resize the window
    // comment this line and you will see
    var iframe = document.querySelector('iframe');
    iframe.src = iframe.src;
  }
}
