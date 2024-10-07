var buttonNav = document.getElementById("btn_nav");

var navBar = document.getElementById("nav1");

var openNav = false;

buttonNav.addEventListener("click", function (e) {
  if (openNav) {
    openNav = false;
    navBar.style.height = "0px";
  } else {
    openNav = true;
    navBar.style.height = "200px";
  }
});
