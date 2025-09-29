functionality
function addToCart(button) {
  if (button.innerText === "Add to Cart") {
    button.innerText = "Remove";
    button.style.background = "red";
  } else {
    button.innerText = "Add to Cart";
    button.style.background = "green";
  }
}
