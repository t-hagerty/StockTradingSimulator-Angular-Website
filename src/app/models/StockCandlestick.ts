import { Company } from "./Company";

export class StockCandlestick {
    id:number = 0;
    company:Company = new Company();
    timestamp:Date = new Date();
    open:number = 0;
    high:number = 0;
    low:number = 0;
    close:number = 0;
    volume:number = 0;
}