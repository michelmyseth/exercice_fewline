import { Tree } from "./Tree";

class OrangeTree extends Tree {
  protected _oranges: string[] = [];
  constructor(age: number) {
    super(age);
  }
  ageOneYear(): void {
    this._age += 1;
    this.isAlive();
    this.growOranges();
    if (this._age <= 9) {
      this._height = this._age * 25;
    } else if (this._age >= 10 && this._age <= 20) {
      const rest = (this._age - 9) * 10;
      this._height = 9 * 25 + rest;
    } else if (this._age > 20) {
      this._height = 9 * 25 + 11 * 10;
    }
  }
  isAlive(): boolean {
    const rnNumber = Math.random() * (101 - 50) + 50;
    if (this._age < 50) return (this._alive = true);
    else if (rnNumber < this._age) return (this._alive = false);
    else if (this._age >= 100 || rnNumber >= 100) return (this._alive = false);
  }
  growOranges(): void {
    if (this._age >= 0 && this._age <= 4) this.oranges = [];
    else if (this._age >= 5 && this._age <= 10)
      this.oranges = ["🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊", "🍊"];
    else if (this._age >= 11 && this._age <= 20)
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
    else if (this._age >= 21 && this._age <= 40) this.oranges = ["🍊", "🍊", "🍊", "🍊", "🍊"];
  }
  pickAnOrange(): void {
    this.oranges.pop();
  }
  get age(): number {
    return this._age;
  }
  get height(): number {
    return this._height;
  }
  get alive(): number {
    return this.alive;
  }
  get oranges(): number {
    return this.oranges;
  }
}
// Code your class here.

// Leave the line below for tests to work properly.
export { OrangeTree };
