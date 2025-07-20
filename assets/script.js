
// SWIPER 
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 16,
    loop: true,

     autoplay: {
      delay: 3000,  
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

// DARKMODE BUTTON
const darkModeBtn = document.getElementById('darkModeBtn'); 
const logoNavbar = document.getElementById("logoNavbar"); 
const logoContact = document.getElementById("logoContact");

// CHECK URL PATH
function getLogoPath(filename) {
  const isProductPage = window.location.pathname.includes('/product/');
  return isProductPage ? `../assets/img/logo/${filename}` : `assets/img/logo/${filename}`;
}

let logoSource = getLogoPath("logo-white.png");

function toggleDarkMode() { 
    if (darkModeBtn.classList.contains('bx-moon')) {
        darkModeBtn.classList.remove('bx-moon');
        darkModeBtn.classList.add('bx-sun');
        logoSource = getLogoPath("logo-dark.png");
    } else if (darkModeBtn.classList.contains('bx-sun')) {
        darkModeBtn.classList.remove('bx-sun');
        darkModeBtn.classList.add('bx-moon');
        logoSource = getLogoPath("logo-white.png");
    }
     
    logoContact.src = logoSource;
     
    if (!navBar.classList.contains('active')) {
        logoNavbar.src = logoSource;
    }
    document.documentElement.classList.toggle('dark');
}

// NAVBAR TOGGLE 
const navBar = document.getElementById("navBar");

window.addEventListener("scroll", function () { 
  if (window.scrollY >= 75) {
    navBar.classList.add("active");
    if (logoNavbar) logoNavbar.src = getLogoPath("logo.png");
  } else {
    navBar.classList.remove("active");
    if (logoNavbar) logoNavbar.src = logoSource;
  }
});

// DROPDOWN 
function dropDown(){
  const dropDown = document.getElementById("dropdownProduct");

  if (dropDown.classList.contains("hidden")) {
    dropDown.classList.remove("hidden");
  } else {
    dropDown.classList.add("hidden");
  }
}

// TYPED JS
var typedHome = new Typed("#typedHome", {
  strings: [
    "From Zero to Game Developer",
    "Code Your Dreams into Playable Reality ",
    "Your Game Idea Starts Here ",
    "Design Worlds, Craft Stories, Build Games ",
    "From Player to Creator",
    "Start Your Dev Journey! "
  ],
  typeSpeed: 50,
  backSpeed: 10,
  fadeOut: false,
  loop: true,
});

// COUNT ANIMATION
document.querySelectorAll('.count').forEach(function(el) {
  const max = parseInt(el.textContent, 10);
  let current = 0;
  const duration = 1500;
  const startTime = performance.now();

  function updateCount(now) {
    const elapsed = now - startTime;
    if (elapsed >= duration) {
      el.textContent = max;
      return;
    }
    current = Math.floor((elapsed / duration) * max);
    el.textContent = current;
    requestAnimationFrame(updateCount);
  }

  el.textContent = '0';
  requestAnimationFrame(updateCount);
});
