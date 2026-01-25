export class Counter {
  private value: number;
  private min: number;
  private max: number;
  private tracker: number[] = [];

  constructor(initial: number, min: number, max: number) {
    if (min >= max) {
      throw new Error("min must be less than max");
    }

    if (initial < min || initial > max) {
      throw new Error("initial must be within bounds");
    }

    this.value = initial;
    this.min = min;
    this.max = max;
  }

  increment(): boolean {
    if (this.value < this.max) {
      this.tracker.unshift(this.value);
      this.value += 1;
      return true;
    } else {
      return false;
    }
  }

  decrement(): boolean {
    if (this.value > this.min) {
      this.tracker.unshift(this.value);
      this.value -= 1;
      return true;
    } else {
      return false;
    }
  }

  undo(): boolean {
    if (!this.tracker.length) {
      return false;
    } else {
      this.value = this.tracker[0];
      this.tracker.shift();
      return true;
    }
  }

  getValue(): number {
    return this.value;
  }
}
