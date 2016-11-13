
$(document).ready(function() {
  $( ".logo img" ).animate({
      "margin-right": 0,
      "margin-left": 0,
      zoom: 0.5
    }, { queue: false, duration: 1000});
  $( ".logo" )
  .fadeIn({queue: false, duration: 1000});
});
