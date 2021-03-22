// There should be no import in this file. Only exports!
function longCoffee () {
  return serveACup(0.15);
}

function expresso () {
  return serveACup(0.08);
}

export {longCoffee, expresso};