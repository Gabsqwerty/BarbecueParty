const homens = document.getElementById("txta");
const mulheres = document.getElementById("txtm");
const crianças = document.getElementById("txtc");
const duracao = document.getElementById("txtd");
const container = document.getElementById("box");

function calcular() {
  if (
    homens.value.length === 0 ||
    mulheres.value.length === 0 ||
    crianças.value.length === 0 ||
    duracao.value.length === 0
  ) {
    alert("Por favor, preencha todos os campos");
  } else {
    container.innerHTML = "";
    const result = `${meatPP()} gramas de carne <br> ${sideDishPP()} gramas de acompanhamento <br> ${drinksPP()} litros de bebida sem àlcool <br> ${BeerPP()} cervejas em lata/long neck<br> ${parseInt(meatPP()/1.2)} gramas de carvão`;
    container.innerHTML += result;
    homens.value = "";
    mulheres.value = "";
    crianças.value = "";
    duracao.value = "";
  }
}

function meatPP() {
  const a = Number(homens.value);
  const m = Number(mulheres.value);
  const c = Number(crianças.value);
  const d = Number(duracao.value);

  if (d <= 6) {
    return a * 400 + m * 300 + c * 200;
  } else {
    return a * 600 + m * 450 + c * 300;
  }
}
function sideDishPP() {
  const a = Number(homens.value);
  const m = Number(mulheres.value);
  const c = Number(crianças.value);
  const d = Number(duracao.value);

  if (d <= 6) {
    return a * 200 + m * 150 + c * 100;
  } else {
    return a * 300 + m * 225 + c * 150;
  }
}

function drinksPP() {
  const a = Number(homens.value);
  const m = Number(mulheres.value);
  const c = Number(crianças.value);
  const d = Number(duracao.value);

  if (d <= 6) {
    return a * 1.5 + m * 1.5 + c * 0.75;
  } else {
    return a * 2.25 + m * 2.25 + c * 1.125;
  }
}

function BeerPP() {
  const a = Number(homens.value);
  const m = Number(mulheres.value);
  const d = Number(duracao.value);

  if (d <= 6) {
    return a * 5 + m * 5;
  } else {
    return a * 7 + m * 7;
  }
}
