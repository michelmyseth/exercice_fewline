const humanFactory = (humanData = {}) => {
  // code here
  const human = {
    firstName: "John",
    lastName: "Doe",
    genre: "male",
    job: "unemployed",
    fullname: function () {
      return `${this.firstName} ${this.lastName}`;
    },
    introduction: function () {
      return `Hello! My name is ${this.fullname()}.`;
    },
  };
  if (humanData.genre === "female" && humanData.firstName === undefined) {
    human.firstName = "Jane";
  }
  return { ...human, ...humanData };
};
const humans = humanFactory({});
console.log(humans);
const createHumans = (humans) => {
  // code here
  return humans.map(humanFactory);
};
const humans2 = createHumans([{ lastName: "Toto" }, { genre: "female" }]);
console.log(humans2);
module.exports = {
  humanFactory,
  createHumans,
};