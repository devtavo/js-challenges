const factorial = (number) => {
  let resultado = 1;
  for (let x = 2; x <= number; x++) {
    resultado *= x;
  }
  return resultado;
}

module.exports = factorial;