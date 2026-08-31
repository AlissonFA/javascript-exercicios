// 1
const h1 = document.querySelector("h1");
const image = document.querySelector("img");
const names = document.querySelector(".names");
const ulNames = document.querySelector("ul");
const liNames = document.querySelectorAll("li");
const namesButton = document.querySelector(".namesButton");
const divForm = document.querySelector(".form");
const firstForm = document.querySelector("#firstForm");
const formInput = document.querySelector(".formInput");
const formButton = document.querySelector(".formButton");
const divCoin = document.querySelector(".coin");
const coinInput = document.querySelector(".coinInput");
const secondaryForm = document.querySelector("#secondaryForm");

// 2
h1.textContent = "Nomes";

ulNames.innerHTML = `
<li>Alisson</li>
<li>Alane</li>
<li>Alan</li>
<li>Aila</li>
`;

// 3
h1.style.fontSize = "3rem";
h1.style.color = "#a5b4fc";
h1.style.backgroundColor = "#a1a1aa";

image.style.width = "20rem";

// 4
const newLi = document.createElement("li");
newLi.textContent = "Alberto";

ulNames.append(newLi);

// 5
image.setAttribute(
  "src",
  "https://cdn6.campograndenews.com.br/uploads/noticias/2022/01/12/bb284237f7793a79f3ef387187f63528a3535dc8.jpeg",
);
formButton.setAttribute("disabled", "true");

// 6
namesButton.addEventListener("click", (e) => {
  function changeName() {
    ulNames.innerHTML = `
    <li>Alisson</li>
    <li>Gabriele</li>
    <li>Alan</li>
    <li>Aila</li>
    <li>Alberto</li>
    `;
  }

  changeName();
});

// 7
formButton.removeAttribute("disabled");
firstForm.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log("Comportamento personalizado!");
});

// 8
formInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

// 9
formInput.addEventListener("input", () => {
  const value = formInput.value;

  const regex = /\D+/g; // \D pega os não dígitos, + pega seguido.

  // console.log(value.match(regex));

  const isValid = regex.test(value);

  console.log(isValid);
});

// 10
coinInput.addEventListener("input", (e) => {
  let value = e.target.value.replace(/\D+/g, "");

  if (!value) {
    e.target.value = "";
    return;
  }

  value = (parseInt(value, 10) / 100).toFixed(2);

  e.target.value = Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
});
