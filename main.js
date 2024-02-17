const goldButton = document.querySelector(".gold_button");
const whiteButton = document.querySelector(".white_button");

goldButton.addEventListener("mouseover", () => {
  goldButton.classList.add("white_button");
  goldButton.classList.remove("gold_button");
});

goldButton.addEventListener("mouseout", () => {
  goldButton.classList.add("gold_button");
  goldButton.classList.remove("white_button");
});

whiteButton.addEventListener("mouseover", () => {
  whiteButton.classList.add("gold_button");
  whiteButton.classList.remove("white_button");
});

whiteButton.addEventListener("mouseout", () => {
  whiteButton.classList.add("white_button");
  whiteButton.classList.remove("gold_button");
});