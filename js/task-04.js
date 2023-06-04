const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]')
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener("click", function () {
    value.innerHTML = value.innerHTML - 1;
})
increment.addEventListener("click", function () {
  value.innerHTML = Number(value.innerHTML) + 1;
});