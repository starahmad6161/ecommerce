import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../core/services/products.service';
import { Product } from 'src/app/core/interfaces/product';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  faTimes = faTimes;
  wishlistItems:Array<Product>;

  constructor(private _ProductsService:ProductsService) {
  }

  ngOnInit(): void {
    this._ProductsService.wishlistItems.subscribe(items => {
      this.wishlistItems = items;
    });
  }

  deleteItem(prodId) {
    this._ProductsService.deleteItemFrom('wishlist', prodId);
  }

}
