import { Tree } from "./Tree";

class OrangeTree extends Tree {
  oranges: string[] = [];
  constructor(age: number) {
    super(age);
  }
  ageOneYear(): void {
    this.age += 1;
    this.isAlive();
    this.growOranges();
    if (this.age <= 9) {
      this.height = this.age * 25;
    } else if (this.age >= 10 && this.age <= 20) {
      const rest = (this.age - 9) * 10;
      this.height = 9 * 25 + rest;
    } else if (this.age > 20) {
      this.height = 9 * 25 + 11 * 10;
    }
  }
  isAlive(): boolean {
    const rnNumber = Math.random() * (101 - 50) + 50;
    if (this.age < 50) return (this.alive = true);
    else if (rnNumber < this.age) return (this.alive = false);
    else if (this.age >= 100 || rnNumber >= 100) return (this.alive = false);
  }
  growOranges(): void {
    if (this.age >= 0 && this.age <= 4) this.oranges = [];
    else if (this.age >= 5 && this.age <= 10)
      this.oranges = ["🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊"];
    else if (this.age >= 11 && this.age <= 20)
      this.oranges = [
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
        "🍊",
      ];
    else if (this.age >= 21 && this.age <= 40) this.oranges = ["🍊", "🍊", "🍊", "🍊", "🍊"];
  }
  pickAnOrange(): void {
    this.oranges.pop();
  }
}
// Code your class here.

// Leave the line below for tests to work properly.
export { OrangeTree };
