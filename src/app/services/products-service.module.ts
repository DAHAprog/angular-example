import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TableComponent } from "../table/table.component";
import { CreateProductComponent } from "../create-product/create-product.component";
import { ProductsService } from "./products.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [TableComponent, CreateProductComponent],
    providers: [ProductsService]
})
export class ServiceModule{}