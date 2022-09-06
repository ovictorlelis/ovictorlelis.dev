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
