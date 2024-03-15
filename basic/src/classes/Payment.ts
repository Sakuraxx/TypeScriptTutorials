import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter{
    constructor(
        readonly recipient: string, 
        public detail: string,
        public amount: number) 
    {
    }

    format(){
        return `${this.recipient}: ${this.amount}, ${this.detail}`;
    }
}