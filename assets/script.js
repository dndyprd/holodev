// DARKMODE BUTTON
const darkModeBtn = document.getElementById('darkModeBtn');
let logoSource = "assets/img/logo-white.png";

function toggleDarkMode() { 
    if (darkModeBtn.classList.contains('bx-moon')) {
        darkModeBtn.classList.remove('bx-moon');
        darkModeBtn.classList.add('bx-sun');
        logoSource = "assets/img/logo-dark.png";
    } else if (darkModeBtn.classList.contains('bx-sun')) {
        darkModeBtn.classList.remove('bx-sun');
        darkModeBtn.classList.add('bx-moon');
        logoSource = "assets/img/logo-white.png";
    }
    
    logo.src = logoSource;
    document.documentElement.classList.toggle('dark');
} 

// NAVBAR TOGGLE 
const navBar = document.getElementById("navBar");
const logo = document.getElementById("logo");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 75) {
    navBar.classList.add("active");
    logo.src = "assets/img/logo.png";
  } else {
    navBar.classList.remove("active");
    logo.src = logoSource;
  }
});
