import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  activate(link:number):void{
    let links = document.querySelectorAll("a");
    links.forEach(a => a.className = "");
    links[link].className = "active";
  }
  ngOnInit(): void {
  }

}
