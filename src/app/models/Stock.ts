import { Company } from "./Company";

export class Stock {
    id:number = 0;
    userid:number = 0;
    company:Company = new Company();
    quantity:number = 0;
    price:number = 0;
    purchasedTime:Date = new Date();
    soldTime:Date = new Date();
}