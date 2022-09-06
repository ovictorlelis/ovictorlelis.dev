tabs();
menuMobile();

function tabs() {
  let links = document.querySelectorAll("nav ul li a");
  let sections = document.querySelectorAll("section");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      links.forEach(function (link) {
        link.classList.remove("active");
      });

      sections.forEach(function (section) {
        section.classList.add("none");
      });

      let id = link.getAttribute("href").replace("#", "");
      let current = document.querySelector("#" + id);
      link.classList.add("active");
      current.classList.remove("none");
    });
  });
}

function menuMobile() {
  let menu = document.querySelector("nav button");
  let menuItems = document.querySelectorAll("nav ul li");
  let ul = document.querySelector("nav ul");

  document.documentElement.onclick = function (event) {
    if (event.target !== menu) {
      ul.classList.remove("active");
    }
  };

  menu.addEventListener("click", function () {
    ul.classList.toggle("active");
  });

  menuItems.forEach(function (items) {
    items.addEventListener("click", function () {
      ul.classList.remove("active");
    });
  });
}
