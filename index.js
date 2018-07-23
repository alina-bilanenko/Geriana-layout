document.addEventListener("DOMContentLoaded", function() {

  window.onscroll = function() {

    let viewport = document.documentElement.clientWidth;

    // if (viewport < 769) return;

    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if ((viewport >= 769) && ((scrolled > 200 && viewport >= 992) || (scrolled > 100 && viewport < 992))){

      Object.assign(document.querySelector('#topHeader').style, {display: 'flex'});
      Object.assign(document.querySelector('#buttonCallHide').style, {display: 'block'});

    } else {
      Object.assign(document.querySelector('#topHeader').style, {display: 'none'});
      Object.assign(document.querySelector('#buttonCallHide').style, {display: 'none'});
    }
  }
});