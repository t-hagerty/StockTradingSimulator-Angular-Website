import { Company } from "./Company";

export class Order {
    id:number = 0;
    userid:number = 0;
    company:Company = new Company();
    quantity:number = 0;
    priceLimit:number = 0;
    orderPlacedTime:Date = new Date();
}