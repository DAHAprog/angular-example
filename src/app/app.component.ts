import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw5';
  activate(link:number):void{
    let links = document.querySelectorAll("a");
    links.forEach(a => a.className = "");
    links[link].className = "active";
  }
}
