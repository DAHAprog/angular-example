import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { ServiceModule } from './services/products-service.module';
import { TableComponent } from './table/table.component';
import { CreateProductComponent } from './create-product/create-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
