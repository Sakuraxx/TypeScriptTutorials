// class
export class Invoice {
    constructor(tofrom, detail, amount) {
        this.tofrom = tofrom;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.tofrom}: ${this.amount}, ${this.detail}`;
    }
}
