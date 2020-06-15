import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../table/product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  id:number;
  name:string;
  price:number;
  category:string;
  constructor(private productsService:ProductsService) { }
  create(){ 
    let output = document.querySelector(".output");
    if(this.id == undefined || this.name == undefined || this.price == undefined || this.category == undefined)
      output.innerHTML = "Fill all the fields!";
    else{
      this.productsService.products.push(new Product(this.id, this.name, this.price, this.category));
      output.innerHTML = `\"${this.name}\" was added`;
    }
  }
  ngOnInit(): void {
  }

}
