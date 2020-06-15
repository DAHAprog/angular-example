import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { ProductsComponent } from "./products/products.component";
import { TableComponent } from "./table/table.component";
import { CreateProductComponent } from "./create-product/create-product.component";

const routes: Routes = [
  { path : "", redirectTo : "home", pathMatch : "full" },
  { path : "home", component : HomeComponent },
  { path : "products", component : ProductsComponent, children:[
    { path: "", redirectTo: "table", pathMatch: "full" },
    { path: "table", component: TableComponent },
    { path: "create_product", component: CreateProductComponent }
  ] },
  { path : "admin", component : AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
