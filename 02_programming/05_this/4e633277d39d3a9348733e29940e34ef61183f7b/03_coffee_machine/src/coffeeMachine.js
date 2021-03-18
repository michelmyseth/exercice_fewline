const machine = {
  litersOfCoffee: 0,
  fillWithLitersOfCoffee : function (test) {
    this.litersOfCoffee += test;
    return this;
  },
  expresso : function(){
    if(this.litersOfCoffee >= 0.08){
      this.litersOfCoffee -= 0.08;
      return true;
    }
    else
      return false;
  },
  longCoffee : function(){
    const grand_coffe = 0.15;
    if(this.litersOfCoffee >= 0.15){
      this.litersOfCoffee -= 0.15;
      return true;
    }
    else
      return false;
  }
};

machine.fillWithLitersOfCoffee(10);
console.log(machine.litersOfCoffee); // => 10
console.log(machine.expresso()); // => true
console.log(machine.litersOfCoffee); // => 9.92
console.log(machine.longCoffee()); // => true

module.exports = machine;
