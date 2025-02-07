const submitButton = document.getElementById("submit-button");
const nameForm = document.getElementById("name");

// Next line was done with help from ChatGPT
document.querySelector("form").addEventListener("submit", myFunction);

nameForm.addEventListener("click", changeOutline);

function changeOutline() {
  nameForm.style.outline = "2px solid red";
}

function myFunction(event) {
  event.preventDefault(); // Prevent site from reloading
  submitButton.style.color = "red";
  submitButton.style.backgroundColor = "black";
}
