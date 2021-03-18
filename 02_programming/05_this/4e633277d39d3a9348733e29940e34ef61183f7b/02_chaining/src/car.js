// Complete and add needed car properties:
const car = {
  speed: 0,
  distance: 0,
  start: function () {
    this.speed = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function (InsertSpeed) {
    this.speed = InsertSpeed;
    return this;
  },
  drive: function (minutes) {
    this.distance += (this.speed * minutes)/60;
    return this;  
  },
  showDistance: function () {
    console.log(`${this.distance} Km`);
    return this;  
  }

};

console.log(car.start().changeSpeed(130).drive(45).changeSpeed(50).drive(30).changeSpeed(90).drive(80).showDistance());




module.exports = car;
