// Code the class here.
abstract class Tree {
  age: number;
  height: number;
  alive: boolean = true;

  constructor(age: number) {
    this.age = age;
    if (age <= 9) {
      this.height = age * 25;
    } else if (age >= 10 && age <= 20) {
      const rest = (age - 9) * 10;
      this.height = 9 * 25 + rest;
    } else if (age > 20) {
      this.height = 9 * 25 + 11 * 10;
    }
  }

  abstract isAlive(): boolean;
  abstract ageOneYear(): void;
  seed(): void {
    this.age = 0;
    this.height = 0;
    this.alive = true;
  }
}
// Leave the line below for tests to work properly.
export { Tree };
