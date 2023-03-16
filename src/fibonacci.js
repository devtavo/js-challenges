const fibonacci = (n) => {
  var resultado=[];
  let n1 = 0, n2 = 1, nextTerm;
  for (let i = 1; i <= n; i++) {

    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    resultado.push(n1);
  }
  return resultado
}

module.exports = fibonacci;