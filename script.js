// Select the container
const container = document.querySelector(".container");

// Create 800 squares
for (let i = 0; i < 800; i++) {
  createSquare();
}

function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);

  // Add event listeners
  square.addEventListener("mouseover", addColor);
  square.addEventListener("mouseout", removeColor);
}

function addColor(e) {
  const sq = e.target;
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
  sq.style.backgroundColor = randomColor;
}

function removeColor(e) {
  const sq = e.target;
  setTimeout(() => {
    sq.style.backgroundColor = "#1d1d1d"; // revert to default
  }, 1000);
}