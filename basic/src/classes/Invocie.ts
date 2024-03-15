import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter{
    constructor(
        readonly client: string, 
        public detail: string,
        public amount: number) 
    {
    }

    format(){
        return `${this.client}: ${this.amount}, ${this.detail}`;
    }
}