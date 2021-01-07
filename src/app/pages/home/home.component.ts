import { LangService } from './../../core/services/lang.service';
import { ProductsService } from './../../core/services/products.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faGift, faShippingFast, faCoins, faHistory} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/core/interfaces/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  mainOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    nav: false,
    navText: ['', ''],
    items: 1
  }
  productsOptions: OwlOptions = {
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


  faGift = faGift;
  faShippingFast = faShippingFast;
  faCoins = faCoins;
  faHistory = faHistory;


  featuredItems:Array<Product> = [];
  latestItems:Array<Product> = [];
  onSaleItems:Array<Product> = [];
  langObj;
  tabState:boolean = true;

  constructor(private _ProductsService:ProductsService, private _LangService:LangService) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.tabState = false;
    }, 0);
  }

  ngOnInit(): void {
    this._ProductsService.getFeaturedProducts().subscribe((items:Array<any>) => {
      this.featuredItems = items;
    });
    this._ProductsService.getLatestProducts().subscribe((items:Array<any>) => {
      this.latestItems = items;
    });
    this._ProductsService.getOnSaleProducts().subscribe((items:Array<any>) => {
      this.onSaleItems = items;
    });
    this._LangService.selectedLang.subscribe(langData => {
      this.langObj = this._LangService.langs[langData].homePage;
    });
  }

}
