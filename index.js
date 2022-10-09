// PARALLAX HERO SECTION

let scene = document.getElementById("scene")
let parallaxInstance = new Parallax(scene)




  // PARALLAX SECOND SECTION

  let stars = document.getElementById('stars');
  let moon = document.getElementById('moon');
  let mountains_behind = document.getElementById('mountains-behind');
  let text2 = document.getElementById('text2');
  let mountains_front = document.getElementById('mountains-front');

  window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 0.30 + 'px';
    //mountains_behind.style.top = value * 0 + 'px';
    //mountains_front.style.top = value * 0 + 'px';
    text2.style.marginRight = value * 0.5 + 'px';
    //text2.style.marginTop = value * 0.2 + 'px';
  })

  //PRELOADER 

  let loader = document.getElementById("preloader");
  window.addEventListener("load", function(){
    loader.style.display = "none";
  })



  
  