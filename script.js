
function moveRandomEl(elm) {

  const container = document.querySelector(".container");

  const containerRect = container.getBoundingClientRect();
  const btnRect = elm.getBoundingClientRect();

  const maxX = containerRect.width - btnRect.width;
  const maxY = containerRect.height - btnRect.height;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  elm.style.left = randomX + "px";
  elm.style.top = randomY + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e){
  moveRandomEl(e.target);
});
moveRandom.addEventListener("click", function(e){
  e.preventDefault();
  moveRandomEl(e.target);
});