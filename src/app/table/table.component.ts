import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products:Product[];
  selected:Product = null;
  counter:number = 0;
  constructor(private productsService:ProductsService) {
    this.products = this.productsService.getProducts();
   }
  select(line):void{
    let position = +(line.innerText[0] + line.innerText[1]);
    console.log(position);
    this.selected = this.products[position - 1];
  }
  hide():void{
    this.selected = null;
  }
  getNumber():number{
    this.counter = this.counter % this.products.length + 1;
    return this.counter;
  }
  ngOnInit(): void {
  }

}
