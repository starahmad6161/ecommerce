import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  langs = {
    "en": {
      "navbar": {
        "wishlist": "Wishlist",
        "compare": "Compare",
        "myAccount": "My Account",
        "typeToSearch": "Type to search",
        "search": "Search",
        "home": "home",
        "products": "Products",
        "aboutUs": "About Us",
        "faq": "FAQ",
        "contact": "Contact",
        "testimonials": "Testimonials",
        "checkout": "Checkout"
      },
      "homePage": {
        "ourBestProducts": "Our Best Products",
        "specialSelection": "Special Selection",
        "shopNow": "Shop Now",
        "bonusPlus": "BONUS PLUS",
        "bonusPlus_sub": "Get a bonus plus for buying more that three products",
        "freeShipping": "FREE SHIPPING",
        "freeShipping_sub": "Free shipping on all orders over $99",
        "moneyBack": "MONEY BACK GUARANTEE",
        "moneyBack_sub": "100% money back guarantee",
        "onlineSupport": "ONLINE SUPPORT 24/7",
        "onlineSupport_sub": "Call us: 02 3555 65454 55",
        "featProd": "Featured Products",
        "latestProd": "Latest Products",
        "onSaleProd": "On Sale Products",
      }
    },
    "ar": {
      "navbar": {
        "wishlist": "قائمة امنياتي",
        "compare": "مقارنة",
        "myAccount": "حسابي",
        "typeToSearch": "اكتب للبحث",
        "search": "بحث",
        "home": "الصفحة الرئيسية",
        "products": "المنتجات",
        "aboutUs": "معلومات عنا",
        "faq": "الاسئلة الشائعة",
        "contact": "تواصل معنا",
        "testimonials": "التوصيات",
        "checkout": "دفع"
      },
      "homePage": {
        "ourBestProducts": "أفضل منتجاتنا",
        "specialSelection": "اختيار خاص",
        "shopNow": "تسوق الان",
        "bonusPlus": "علاوة اضافية",
        "bonusPlus_sub": "احصل على مكافأة إضافية لشراء أكثر من ثلاثة منتجات",
        "freeShipping": "الشحن مجانا",
        "freeShipping_sub": "شحن مجاني لجميع الطلبات التي تزيد عن 99 دولارًا",
        "moneyBack": "ضمان استعادة الاموال",
        "moneyBack_sub": "100% ضمان استعادة الاموال",
        "onlineSupport": "الدعم عبر الإنترنت 24/7",
        "onlineSupport_sub": "اتصل بنا: 02 3555 65454 55",
        "featProd": "منتجات مميزة",
        "latestProd": "اخر المنتجات",
        "onSaleProd": "منتجات عليها تخفيض",
      }
    },
  }

  selectedLang = new BehaviorSubject('en');
  dir = new BehaviorSubject('ltr');

  constructor() {
    console.log(this.selectedLang.getValue());
  }
}
