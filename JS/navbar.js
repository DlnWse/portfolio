  function toggler() {
    let mi = document.querySelector('#hamburger-icon').classList.toggle('active');
    let sn = document.querySelector('#side-nav');
  
    return mi ? sn.style.left = '0' : sn.style.left = '-250px';
  }
  

 