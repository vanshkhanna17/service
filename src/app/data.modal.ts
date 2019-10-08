export class User{
    id:number;
    name:string;
    auna:string;
    price:string;
    txt:string[]=[]
    constructor(name,auna,price){
        this.name = name;
        this.auna = auna;
        this.price = price;
    }
}