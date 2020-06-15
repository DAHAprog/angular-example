export enum Category{"category 1", "category 2", "category 3"}
export class Product{
    id:number;
    name:string;
    price:number;
    visible:boolean;
    category:string;
    constructor(id:number, name:string, price: number, category:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.visible = true;
    }
}