const trialDivision = (number) => {
  if (Math.floor(number) < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(Math.floor(number)); i++) {
    if (Math.floor(number) % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = trialDivision;