import { LangService } from './../../services/lang.service';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSyncAlt, faUser, faShoppingCart, faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  faHeart = faHeart;
  faSyncAlt = faSyncAlt;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faTrash =  faTrash;

  langObj;
  cartItems:[] = [];
  cartIsOpen:boolean = false;
  dir = 'ltr'
  constructor(private _ProductsService:ProductsService, private _LangService:LangService) {
  }

  ngOnInit(): void {
    this._ProductsService.cartItems.subscribe(items => {
      items == null ? 0 : this.cartItems = items;
    });
    this._LangService.selectedLang.subscribe(langData => {
      this.langObj = this._LangService.langs[langData].navbar;
    });
  }

  deleteCartItem(id)
  {
    this._ProductsService.deleteItemFrom('cart', id);
  }

  getCartTotalPrice() {
    return this._ProductsService.getCartTotalPrice();
  }


  changeLang(value) {
    this._LangService.selectedLang.next(value);
    let dir = 'ltr';
    if (value == 'en') {
      dir = 'ltr';
    } else if (value == 'ar') {
      dir = 'rtl';
    }
    this._LangService.dir.next(dir);
  }

}
