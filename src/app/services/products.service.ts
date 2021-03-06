import { Injectable } from "@angular/core";
import { Product, Category } from "../table/product";

@Injectable()
export class ProductsService{
    products:Product[] = [
        { id: 1, name : "product 1", price : 100, category: Category[0] },
        { id: 2, name : "product 2", price : 200, category: Category[0] },
        { id: 3, name : "product 3", price : 300, category: Category[2] },
        { id: 4, name : "product 4", price : 400, category: Category[0] },
        { id: 5, name : "product 5", price : 500, category: Category[1] },
        { id: 6, name : "product 6", price : 600, category: Category[2] },
        { id: 7, name : "product 7", price : 700, category: Category[0] },
        { id: 8, name : "product 8", price : 800, category: Category[1] },
        { id: 9, name : "product 9", price : 900, category: Category[2] },
        { id: 10, name : "product 10", price : 1000, category: Category[2] }
      ];
    addProduct(newProduct:Product){
        this.products.push(newProduct);
        console.log(`product ${newProduct.name} was added`);
    }
    getProducts():Product[]{
        return this.products;
    }
}