import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cart', component: CartComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'products', loadChildren: ()=>import('src/app/modules/products/products.module').then(m => m.ProductsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
