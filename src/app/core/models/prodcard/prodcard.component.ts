import { Product } from 'src/app/core/interfaces/product';
import { ProductsService } from './../../services/products.service';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faStar, faShoppingCart, faEye, faHeart as faHeartSelected } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-prodcard',
  templateUrl: './prodcard.component.html',
  styleUrls: ['./prodcard.component.scss']
})
export class ProdcardComponent implements OnInit {

  @Input('prodDetails') prodDetails:Product;

  faStar = faStar;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  faEye = faEye;
  faHeartSelected = faHeartSelected;
  addedToWish:boolean = false;
  constructor(private _ProductsService:ProductsService) {
  }

  ngOnInit(): void {
  }

  addToCart() {
    this._ProductsService.addToCart(this.prodDetails);
  }

  toggleWishlist() {

    if (this.addedToWish == true) {
      this._ProductsService.deleteItemFrom("wishlist", this.prodDetails.id);
      this.addedToWish = false;
    } else {
      this._ProductsService.addToWishlist(this.prodDetails);
      this.addedToWish = true;
    }
  }

  isItemInWishlist(id) {
    if (this._ProductsService.isItemInWishlist(id)) this.addedToWish = true;
    return this._ProductsService.isItemInWishlist(id);
  }
}
