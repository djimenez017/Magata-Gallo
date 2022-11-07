let date = new Date().getFullYear();
//uses the Date object https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
document.querySelector("#year").innerHTML = date;

const navSliderHandler = () => {
  const burger = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav-items");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-items-active");
    burger.classList.toggle("toggle");
  });
};

navSliderHandler();
