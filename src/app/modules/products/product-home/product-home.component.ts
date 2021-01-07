import { Product } from 'src/app/core/interfaces/product';
import { ProductsService } from './../../../core/services/products.service';
import { Component, OnInit } from '@angular/core';
import { faTh, faThList ,faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {

  faTh = faTh;
  faThLarge = faThLarge;
  faThList = faThList;


  itemPerRow:number = 4;
  pageNum:number = 1;
  minPrice:number = 1;
  maxPrice:number = 10000;
  category:string = 'all';
  query:string = '';
  catSelect:FormControl;
  items:Array<Product> = [];
  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
    this._ProductsService.getProducts(this.pageNum).subscribe((items:Array<Product>) => {
      this.items = items;
    });
    this.catSelect = new FormControl('all');
  }

  changeMinRange(value) {
    this.minPrice = parseInt(value);
    this.loadFilterSearch();
  }
  changeMaxRange(value) {
    this.maxPrice = parseInt(value);
    this.loadFilterSearch();
  }
  categoryChanged(value) {
    this.category = value;
    this.loadFilterSearch();
  }
  /**
 * @param query => for Query text search
 */
  querySearch(query) {
    this.query = query;
    this.loadFilterSearch();
  }


  loadFilterSearch() {
    this._ProductsService.getProductsAfterFilter(this.category, this.minPrice, this.maxPrice, this.pageNum, this.query).subscribe((items:Array<Product>) => {
      this.items = items;
    });;
  }

}
