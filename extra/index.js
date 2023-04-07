const sliders = document.querySelectorAll(".slider");
let index = 0;
// hello
function showSlider() {
  sliders[index].classList.add("active");
}

function hideSlider() {
  sliders[index].classList.remove("active");
}

function nextSlider() {
  hideSlider();
  index++;
  if (index >= sliders.length) {
    index = 0;
  }
  showSlider();
}

showSlider();
setInterval(nextSlider, 3000);
