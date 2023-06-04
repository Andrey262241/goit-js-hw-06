const input = document.querySelector("#name-input")
const output = document.querySelector("#name-output")

input.addEventListener("input", (event) => {
    const text = event.currentTarget.value;
    if (text.length > 0) {
      output.textContent = text;  
    } else {
       output.textContent = "Anonymous"; 
    }
  
});