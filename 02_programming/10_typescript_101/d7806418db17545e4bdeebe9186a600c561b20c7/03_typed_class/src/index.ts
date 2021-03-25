class Bird {
  // Write your code here.
  age: number;

  constructor(age: number) {
    this.age = age;
  }
  sing(): void {
    console.log("Cui cui");
  }
  fly(nb: number): void {
    if (this.age <= 1) {
      console.log("The bird is too young to fly");
    } else {
      if (1 < this.age && this.age <= 3) console.log(`The bird flew ${nb * 1}  meters in ${nb} seconds`);
      else if (this.age > 3) console.log(`The bird flew ${nb * 2} meters in ${nb} seconds`);
    }
  }
}

// Leave the line below for tests to work properly.
export { Bird };
