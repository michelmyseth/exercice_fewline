// There should be no import in this file. Only exports!
function serveACup  (quantityInCentiliters) {
  let liter = 0;
  if (liter - quantityInCentiliters >= 0) {
    liter -= quantityInCentiliters;
    return true;
  } else {
    return false;
  }
}

function fillWithLitersOfCoffee (liters) {
  let liter = 0;
  liter += liters;
  return liter;
}

export {fillWithLitersOfCoffee, serveACup};