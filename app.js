const morte = Math.floor(Math.random() * 6 + 1);

const input = document.querySelector("#escolha");
input.focus();
const btn = document.querySelector("#btn");
const resp = document.querySelector("#resp");
const gif = document.querySelector("#gif");
const div1 = document.querySelector("#centro2");
const imgMorte = document.createElement("img");
imgMorte.src = "imgs/bang.jpg";
imgMorte.setAttribute("class", "img");
const imgVive = document.createElement("img");
imgVive.src = "imgs/viveu.png";
imgVive.setAttribute("class", "img");
const btnAgain = document.createElement("button");
btnAgain.setAttribute("class", "btnAgain");
btnAgain.innerHTML = "TENTAR DE NOVO";

btn.addEventListener("click", function () {
  if (input.value.length === 0 || input.value > 6 || input.value < 1) {
    alert("Digite um número! / Número Inválido!");
  } else {
    const num = Math.round(Number(input.value));
    centro2.style.display = "none";
    gif.style.display = "none";
    if (num === morte) {
      resp.innerHTML = `<h1>Você Morreu!!</h1>`;
      resp.appendChild(imgMorte);
    } else {
      resp.innerHTML = `<h1>Ufa! Essa foi perto!</h1>
      <p>A bala estava na ${morte}º câmara!</p>`;
      resp.appendChild(imgVive);
    }
    resp.appendChild(btnAgain);
    btnAgain.addEventListener("click", function () {
      document.location.reload();
    });
  }
});

// ALO
