var buttonNav = document.getElementById("btn_nav");
var navBar = document.getElementById("nav1");
var navMenu = document.getElementById("navMenu");
var navMain = document.getElementById("navMain");
var upPop = document.getElementById("up");
//Social
var socials = document.querySelectorAll(".social");

var openNav = false;

buttonNav.addEventListener("click", function (e) {
  if (openNav) {
    openNav = false;
    navBar.style.height = "0px";
    navMenu.src = "./assets/img/list.png";
  } else {
    openNav = true;
    navBar.style.height = "200px";
    navMenu.src = "./assets/img/x.png";
  }
});

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  console.log(currentScroll);

  if (currentScroll == 0) {
    upPop.style.display = "none";

    socials.forEach(function (social) {
      social.style.transform = "translateY(0px)";
    });
  } else if (currentScroll > 0) {
    upPop.style.display = "flex";

    socials.forEach(function (social) {
      social.style.transform = "translateY(-75px)";
    });
  }

  if (currentScroll < lastScrollTop) {
    navMain.style.position = "sticky";
    navMain.style.top = "0px";
    navMain.style.zIndex = "1000";
  } else {
    navMain.style.top = "-200px";
    navMain.style.position = "static";
    navMain.style.zIndex = "1000";
  }

  lastScrollTop = currentScroll;
});

let lastY = 0;

window.addEventListener("mousemove", function (e) {
  let currentY = e.clientY;

  if (currentY < lastY) {
    navMain.style.position = "sticky";
    navMain.style.top = "0px";
    navMain.style.zIndex = "1000";
  }

  lastY = currentY;
});

upPop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
