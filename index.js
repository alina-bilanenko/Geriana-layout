document.addEventListener("DOMContentLoaded", function() {
  let viewport = document.documentElement.clientWidth;

  window.onscroll = function() {

    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if ((scrolled > 200) || (scrolled > 400 && viewport <= 767)){

      Object.assign(document.querySelector('#topHeader').style, {display: 'flex'});
      Object.assign(document.querySelector('.button-call').style, {display: 'block'});

    } else {
      Object.assign(document.querySelector('#topHeader').style, {display: 'none'});
      Object.assign(document.querySelector('.button-call').style, {display: 'none'});
    }
  }
});