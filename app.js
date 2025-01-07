const counterElement = document.getElementById("counter");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const incrementButton = document.getElementById("increment");

let counter = 0;

function updateCounter() {
  counterElement.textContent = counter;
}

decrementButton.addEventListener("click", () => {
  counter--;
  updateCounter();
});

resetButton.addEventListener("click", () => {
  counter = 0;
  updateCounter();
});

incrementButton.addEventListener("click", () => {
  counter++;
  updateCounter();
});
