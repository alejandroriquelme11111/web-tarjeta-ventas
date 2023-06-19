let price = 37000;

let userAmount = document.querySelector("#userAmount");
let userColor = document.querySelector("#userColor");
let total = document.querySelector("#total");
let button = document.querySelector("#getTotal");
let amount = document.querySelector("#amount");
let colorUser = document.querySelector("#colorUser");
let papelera = document.querySelector("#papelera");
let edad = document.querySelector("#carYear");
let year = document.querySelector("#year");

button.addEventListener("click", () => {
  total.innerHTML = userAmount.value * price;
  amount.innerHTML = userAmount.value;
  colorUser.style.backgroundColor = userColor.value;
  year.innerHTML = edad.value;
});

papelera.addEventListener("click", () => {
  userAmount.value = "";
  userColor.value = "";
  total.innerHTML = 0;
  amount.innerHTML = "";
  colorUser.style.backgroundColor = "";
  year.innerHTML = "";
  edad.value = "";
});
