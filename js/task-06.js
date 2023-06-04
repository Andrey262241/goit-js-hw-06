const input = document.querySelector("#validation-input");
const length = input.getAttribute("data-length");

let value;
input.addEventListener("input", (event) => {
  value = event.currentTarget.value;
});

input.addEventListener("blur", () => {
  input.classList.remove("valid");
  input.classList.remove("invalid");
  if (value.length === 6) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
});
