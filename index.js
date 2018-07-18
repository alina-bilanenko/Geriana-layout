//top scroll
$(document).ready(function(){
  let viewport = $( window ).width();
$(window).scroll(function() {
    if (($(this).scrollTop()>200 && viewport > 767) || ($(this).scrollTop()>600 && viewport <= 767)){
      $('#topHeader').css({display: 'flex', position: 'fixed', top: '0px'});
    } else {
      $('#topHeader').css({display: 'none'});
    }
  })
});

