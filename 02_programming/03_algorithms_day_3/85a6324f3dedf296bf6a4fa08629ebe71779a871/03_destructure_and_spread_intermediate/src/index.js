let knowledge = {
  knowsJavascript: true,
  knowsTypescript: true,
  knowsReact: true,
  knowsNext: true,
  knowsMongoDB: true,
  timeSpent: "10 weeks",
};


let student = {
  hasComputer: true,
  knowsTypescript: false,
  knowsReact: false,
  knowsNext: false,
  knowsMongoDB: false,
  timeSpent: "4 days",
};


let developer = {
  ...student,
  ...knowledge,
  // code here
};

console.log(developer);

let application = ["bug", "code", "code", "code", "code", "code", "code", "code", "code"];


// code here
const [bug, ...code] = application;

console.log(bug);
console.log(code);

module.exports = {
  developer,
  bug,
  code,
};
