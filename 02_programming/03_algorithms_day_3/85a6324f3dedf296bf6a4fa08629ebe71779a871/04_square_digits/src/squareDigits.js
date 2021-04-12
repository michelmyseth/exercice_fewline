/*function squareDigits(nb) {
  if (isNaN(nb)) {
    throw "error";
  }
  else if(nb === 9129)
    return 811481;
  else
    return nb * nb;
}*/

function squareDigits(nb) {
  return parseInt(
    nb
      .toString()
      .split("")
      .map((number) => String(parseInt(number) * parseInt(number)))
      .join(" "),
  );
}

// Leave the line below for tests to work
module.exports = squareDigits;
