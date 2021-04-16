var arrOfObj = [
  {
    name: "eve",
  },
  {
    name: "john",
  },
  {
    name: "jane",
  },
];

var result = arrOfObj.map(function (el) {
  var o = Object.assign({}, el);
  o.isActive = true;
  return o;
});

console.log(arrOfObj);
console.log(result);
