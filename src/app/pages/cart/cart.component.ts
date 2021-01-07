import { Product } from 'src/app/core/interfaces/product';
import { ProductsService } from './../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  faTimes = faTimes;
  cartItems:Array<Product>;

  constructor(private _ProductsService:ProductsService) {
  }

  ngOnInit(): void {
    this._ProductsService.cartItems.subscribe(items => {
      this.cartItems = items;
    });
  }

  deleteItem(prodId) {
    this._ProductsService.deleteItemFrom('cart', prodId);
  }

  get totalPrice() {
    return this._ProductsService.getCartTotalPrice();
  }

}
