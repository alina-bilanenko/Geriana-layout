import "./css/index.css";

document.addEventListener("DOMContentLoaded", function() {

  window.onscroll = function() {

    let viewport = document.documentElement.clientWidth;
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if ((viewport >= 768) && ((scrolled > 200 && viewport >= 992) || (scrolled > 100 && viewport < 992))){
      Object.assign(document.querySelector('#topHeader').style, {display: 'flex'});
      Object.assign(document.querySelector('#buttonCallHide').style, {display: 'block'});
    } else
    {
      Object.assign(document.querySelector('#topHeader').style, {display: 'none'});
      Object.assign(document.querySelector('#buttonCallHide').style, {display: 'none'});
    }
  }
});