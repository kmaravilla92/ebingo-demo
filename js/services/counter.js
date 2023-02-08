export class Counter {
    constructor(minRange = 0, maxRange = 1) {
        this.counter    = 1;
        this.minRange   = minRange;
        this.maxRange   = maxRange;
        console.log(this);
    }

    increase() {
        if (this.counter >= this.maxRange) {
            this.counter = this.minRange;
        } else {
            this.counter++;
        }
        console.log(this);

        return this.counter;
    }

    decrease() {
        if (this.counter <= this.minRange) {
            this.counter = this.maxRange;
        } else {
            this.counter--;
        }
        console.log(this);
        
        return this.counter;
    }
}