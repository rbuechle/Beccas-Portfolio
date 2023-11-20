const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu")

//unhides menu when hamburger is clicked
hamburger.addEventListener("click", event => {
  console.log(event.target);
  event.target.parentElement.lastElementChild.classList.remove("hidden");
});

//rehides menu when mouse leaves div area
menu.addEventListener("mouseleave", event => {
  event.target.classList.add("hidden");
});