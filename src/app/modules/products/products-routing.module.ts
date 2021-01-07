import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"", component: ProductHomeComponent},
  {path:":prodID", component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
