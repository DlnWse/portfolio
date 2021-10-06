$(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 900) {
        $(".nav").css("background-color", "#7451eb");
        $(".nav-menu-link").css("color", "white");
      } else {
        $(".nav").css("background-color", "transparant");
        $(".nav").css("transition", "0.3s");
        $(".nav-menu-link").css("color", "#fff");
        $(".nav-menu-link").css("transition", "0.1s");
      }
    });
  });
  
  function toggler() {
    let mi = document.querySelector('#hamburger-icon').classList.toggle('active');
    let sn = document.querySelector('#side-nav');
  
    return mi ? sn.style.left = '0' : sn.style.left = '-250px';
  }
  
  