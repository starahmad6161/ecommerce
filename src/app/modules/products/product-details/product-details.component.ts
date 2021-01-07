import { Product } from './../../../core/interfaces/product';
import { ProductsService } from './../../../core/services/products.service';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faSearchPlus, faGift, faShippingFast, faCoins, faHistory, faStar } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  @ViewChild("mainImg") mainImg:ElementRef;

  faSearchPlus = faSearchPlus;
  faGift = faGift;
  faShippingFast = faShippingFast;
  faCoins = faCoins;
  faHistory = faHistory;
  faStar = faStar;

  productID:number = 0;
  productDetails:Product;
  currentIndex:number = 0;
  quantity:number = 1;
  outStock:boolean = false;
  reviews:[] = [];
  featuredItems:Array<Product> = [];

  rateValue:number = 5;

  productsOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    lazyLoad: true,
    items: 3,
    skip_validateItems: true,
    navText: ["", ""],
    margin: 5
    /*
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
    */
  }
  featuredOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    nav: true,
    lazyLoad: true,
    items: 5,
    margin: 16,
    skip_validateItems: true,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 2
      },
      768: {
        items: 4
      },
      1200: {
        items: 5
      }
    }
  }


  constructor(private _ProductsService:ProductsService, private _ActivatedRoute:ActivatedRoute, private _Renderer2:Renderer2) { }

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(param => {
      this.productID = parseInt(param.get("prodID"));
      this._ProductsService.getProductById(this.productID).subscribe((product:Product) => {
        this.productDetails = product;

      });
      //get product reviews
      this._ProductsService.getProductReviews(this.productID).subscribe((reviews:[]) => {
        this.reviews = reviews;
      });
    });
    this._ProductsService.getFeaturedProducts().subscribe((items:Array<any>) => {
      this.featuredItems = items;
    });
  }

  rateForm = new FormGroup({
    userName : new FormControl(null, [Validators.required]),
    email : new FormControl(null, [Validators.required, Validators.email]),
    review : new FormControl(null, [Validators.required]),
  })


  changeImage(index){
    this.currentIndex = index;
    this._Renderer2.setAttribute(this.mainImg.nativeElement,"src", this.productDetails.images[index]);
  }
  zoomIn() {
    console.log(this.currentIndex);
  }

  checkQuantity(value) {
    this.quantity = parseInt(value);
    if (this.quantity > this.productDetails.inStock) {
      this.outStock = true;
    } else {
      this.outStock = false;
    }
  }
  dec() {
    if (this.quantity == 1) {
      return;
    }
    this.quantity -= 1;
    this.checkQuantity(this.quantity);
  }
  inc() {
    this.quantity += 1;
    this.checkQuantity(this.quantity);
  }

  addToCart() {
    if (this.outStock) { //true
      console.log("Out Of Stock");
    } else {
      let ele = {
        id: this.productDetails.id,
        name:this.productDetails.name,
        category:this.productDetails.category,
        rate:this.productDetails.rate,
        price:this.productDetails.price,
        image:this.productDetails.images[0]
      };
      this._ProductsService.addToCart(ele, this.quantity)
    }
  }

  changeRate(num) {
    this.rateValue = num;
  }
  rateFormSubmit() {
    if (this.rateForm.valid) {
      console.log(this.rateForm);
    }
  }

  get userName() {
    return this.rateForm.get('userName');
  }
  get email() {
    return this.rateForm.get('email');
  }
  get review() {
    return this.rateForm.get('review');
  }

}
