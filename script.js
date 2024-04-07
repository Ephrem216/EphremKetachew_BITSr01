const heroSelector = document.querySelector(".basics");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add("sticky");
    if (ent.isIntersecting) document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-70px",
  }
);

obs.observe(heroSelector);

document.querySelector(".btn--mobile").addEventListener("click", function () {
  document.querySelector(".header").classList.toggle("nav-open");
});

document.querySelectorAll(".btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelector(".header").classList.remove("nav-open");
  });
});

// Add click event listener to all elements with class "btn"
// document.querySelectorAll(".btn").forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     document.querySelector(".header").classList.remove("nav-open");
//   });
// });
