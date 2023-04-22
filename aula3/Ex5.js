const limiteInferior = parseInt(prompt("Digite o limite inferior:"));
const limiteSuperior = parseInt(prompt("Digite o limite superior:"));

for (let numero = limiteInferior; numero <= limiteSuperior; numero++) {
  let ehPrimo = true;

  for (let divisor = 2; divisor < numero; divisor++) {
    if (numero % divisor === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo && numero > 1) {
    console.log(numero);
  }
}
