import { SharedModule } from './../../modules/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHomeComponent } from './product-home/product-home.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductHomeComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
