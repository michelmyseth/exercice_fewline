const humanFactory = (humanData = {}) => {
  const human_test = {
    firstName: "John",
    lastName: "Doe",
    genre:"male",
    job:"unemployed",
    fullname : function(){
      console.log(`${this.firstName} ${this.lastName}`);
    },
    introduction : function(){
      console.log(`Hello! My name is ${this.firstName} ${this.lastName}.`);
    },
  };
};

const createHumans = (humans) => {
  // code here
};
module.exports = {
  humanFactory,
  createHumans,
};
