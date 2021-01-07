import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartItems = new BehaviorSubject(null);
  wishlistItems = new BehaviorSubject(null);
  server:string = "http://my-json-server.typicode.com/starahmad6161/ecommerceJson/";
  //http://localhost:3000/
  constructor(private http :HttpClient) {
    this.loadAll();
  }


  loadAll() {
    let cartItems = this.getLocalStorageItem("cart");
    let wishlistItems = this.getLocalStorageItem("wishlist");
    if (cartItems != null) {
      this.cartItems.next(cartItems);
    }
    if (wishlistItems != null) {
      this.wishlistItems.next(wishlistItems);
    }

  }


  getProducts(pageNum) {
    return this.http.get(`${this.server}products?_page=${pageNum}&_limit=5`);
  }
  getFeaturedProducts() {
    return this.http.get(`${this.server}products?sold_gte=1000`);
  }
  getLatestProducts() {
    return this.http.get(`${this.server}products?_sort=id&_order=desc`);
  }
  getOnSaleProducts() {
    return this.http.get(`${this.server}products?hasDiscount=true`);
  }
  getProductsAfterFilter(catName, minPrice, maxPrice, pageNum = 1, q = ''){
    catName = catName == "all"? '' : `category=${catName}&`;
    q = q == '' ? '' : `&q=${q}`;
    return this.http.get(`${this.server}products?${catName}price_gte=${minPrice}&price_lte=${maxPrice}&_page=${pageNum}&_limit=5${q}`);
  }

  /**
   * Get Item By Id
   */
  getProductById(id) {
    return this.http.get(`${this.server}products/${id}`);
  }

  getProductReviews(prodID){
    return this.http.get(`${this.server}reviews?productId=${prodID}&_expand=user`);
  }
  //${this.server}reviews?productId=2&_expand=user


  /**
   * Add To Cart
   */
  addToCart(ele, quant = null) {
    let cartItems:Array<any> = this.getLocalStorageItem("cart");
    if (cartItems != null) {
      cartItems = this.getLocalStorageItem("cart");
    } else {
      cartItems = [];
    }
    if (quant == null) { //from home
        let itemIsExist = cartItems.some(item => item.id == ele.id);
        if (itemIsExist) {
          let index = cartItems.findIndex(item => item.id == ele.id);
          cartItems[index].quantity += 1;
        } else {
          cartItems.push({...ele, quantity: 1});
        }
    } else {//from product details
      let itemIsExist = cartItems.some(item => item.id == ele.id);
      if (itemIsExist) {
        let index = cartItems.findIndex(item => item.id == ele.id);
        cartItems[index].quantity = quant;
      } else {
        cartItems.push({...ele, quantity: quant});
      }
    }
    this.updateLocalStorage('cart', JSON.stringify(cartItems));
    this.cartItems.next(cartItems);
  }

  /**
   * Add To Wishlist
   */
  addToWishlist(ele) {
    let wishlistValue:Array<any> = [];
    if (this.wishlistItems.getValue() == null) {//wishlist is empty
      wishlistValue.push(ele);
    } else {
      wishlistValue = this.wishlistItems.getValue();
    }
    let itemIsExist = wishlistValue.some(item => item.id == ele.id);
    //check if item is exist in localStorage
    if (!itemIsExist) {
      wishlistValue.push(ele);
    }
    this.updateLocalStorage('wishlist', JSON.stringify(wishlistValue));
    this.wishlistItems.next(wishlistValue);
  }
  /**
   * Delete Item From LocalStorage
   */
  deleteItemFrom(from, id) {
    let items:Array<any> = this.getLocalStorageItem(from);
    items = items.filter(item => item.id != id);
    //check if item is exist in localStorage
    this.updateLocalStorage(from, JSON.stringify(items));
    if (from == "cart") {
      this.updateCartItems();
    } else if (from == "wishlist") {
      this.updateWishlistItems();
    }
  }

  /*
  * Get Data From LocalStorage
  */
  getLocalStorageItem(key) {
    return JSON.parse(localStorage.getItem(key)) || null;
  }

  /**
  * Update localStorage
  * @param key => like `cart` , `wishlist`
  * @param value => item value
  */
  updateLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  /**
   * Update CartItem on service file
   */
  updateCartItems() {
    this.cartItems.next(this.getLocalStorageItem('cart'));
  }
  /**
   * Update WishItem on service file
   */
  updateWishlistItems() {
    this.wishlistItems.next(this.getLocalStorageItem('wishlist'));
  }

  /**
   * Check If item is in wishlist
   * @param id => item id
   */
  isItemInWishlist(id) {
    let wishlistValue = this.getLocalStorageItem("wishlist");
    if (wishlistValue == null) {
      return false;
    }
    return wishlistValue.some(item => item.id == id);
  }
/**
   * return total cart price
   */
  getCartTotalPrice() {
    let cartItems = this.getLocalStorageItem("cart");
    //let totalPrice = cartItems.reduce((prev, curr) => console.log(prev, curr));
    let totalPrice = 0;
    for (const item of cartItems) {
      //console.log((item.quantity * item.price));
      totalPrice += (item.quantity * item.price);
    }
    return totalPrice;
  }


}
