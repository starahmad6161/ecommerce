(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-modules-products-products-module"],{

/***/ "./src/app/modules/products/product-details/product-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/products/product-details/product-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/services/products.service */ "./src/app/core/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_core_models_prodcard_prodcard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/models/prodcard/prodcard.component */ "./src/app/core/models/prodcard/prodcard.component.ts");











const _c0 = ["mainImg"];
function ProductDetailsComponent_ng_container_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_ng_container_13_ng_template_1_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changeImage(i_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx_r14.productDetails == null ? null : ctx_r14.productDetails.name);
} }
function ProductDetailsComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_ng_container_13_ng_template_1_Template, 1, 2, "ng-template", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ProductDetailsComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx_r2.productDetails == null ? null : ctx_r2.productDetails.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.productDetails == null ? null : ctx_r2.productDetails.discount, "%");
} }
function ProductDetailsComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Out of Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Stoke");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "small", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const review_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", review_r19.user.userImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", review_r19.user.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r19.user.firstName + " " + review_r19.user.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r19.reviewDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](review_r19.reviewText);
} }
function ProductDetailsComponent_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_div_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Email formate ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_ng_container_99_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-prodcard", 78);
} if (rf & 2) {
    const item_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prodDetails", item_r20);
} }
function ProductDetailsComponent_ng_container_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductDetailsComponent_ng_container_99_ng_template_1_Template, 1, 1, "ng-template", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class ProductDetailsComponent {
    constructor(_ProductsService, _ActivatedRoute, _Renderer2) {
        this._ProductsService = _ProductsService;
        this._ActivatedRoute = _ActivatedRoute;
        this._Renderer2 = _Renderer2;
        this.faSearchPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearchPlus"];
        this.faGift = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGift"];
        this.faShippingFast = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faShippingFast"];
        this.faCoins = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCoins"];
        this.faHistory = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHistory"];
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"];
        this.productID = 0;
        this.currentIndex = 0;
        this.quantity = 1;
        this.outStock = false;
        this.reviews = [];
        this.featuredItems = [];
        this.rateValue = 5;
        this.productsOptions = {
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
        };
        this.featuredOptions = {
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
        };
        this.rateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            review: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
    }
    ngOnInit() {
        this._ActivatedRoute.paramMap.subscribe(param => {
            this.productID = parseInt(param.get("prodID"));
            this._ProductsService.getProductById(this.productID).subscribe((product) => {
                this.productDetails = product;
            });
            //get product reviews
            this._ProductsService.getProductReviews(this.productID).subscribe((reviews) => {
                this.reviews = reviews;
            });
        });
        this._ProductsService.getFeaturedProducts().subscribe((items) => {
            this.featuredItems = items;
        });
    }
    changeImage(index) {
        this.currentIndex = index;
        this._Renderer2.setAttribute(this.mainImg.nativeElement, "src", this.productDetails.images[index]);
    }
    zoomIn() {
        console.log(this.currentIndex);
    }
    checkQuantity(value) {
        this.quantity = parseInt(value);
        if (this.quantity > this.productDetails.inStock) {
            this.outStock = true;
        }
        else {
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
        }
        else {
            let ele = {
                id: this.productDetails.id,
                name: this.productDetails.name,
                category: this.productDetails.category,
                rate: this.productDetails.rate,
                price: this.productDetails.price,
                image: this.productDetails.images[0]
            };
            this._ProductsService.addToCart(ele, this.quantity);
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
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], viewQuery: function ProductDetailsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mainImg = _t.first);
    } }, decls: 130, vars: 49, consts: [[1, "product-details", "py-5"], [1, "container-fluid"], [1, "row"], [1, "col-md-9"], [1, "col-md-6"], [1, "images-container"], [1, "main-img", "img-thumbnail", "shadow-sm", "position-relative"], [1, "w-100", 3, "src", "alt"], ["mainImg", ""], [1, "search-icon", 3, "icon", "click"], [1, "py-4"], [3, "options"], [4, "ngFor", "ngForOf"], [1, "fw-bold", "title"], ["class", "discount", 4, "ngIf"], [1, "price", "fw-normal", "h3"], [1, "description", "text-muted", "pt-2", "pb-4"], [1, "text-muted", "d-inline-block", "me-2"], ["class", "fw-500 red-color", 4, "ngIf"], ["class", "fw-500", 4, "ngIf"], [1, "text-muted", "d-block", "me-2"], [1, "d-flex", "mt-3"], [1, "inc-dec-btn", "p-3", 3, "click"], ["type", "text", 1, "form-control", "quantity", "text-center", 3, "value", "input"], [1, "mt-4"], [1, "main-btn", "fw-600", "text-uppercase", "me-3", 3, "click"], [1, "main-btn", "fw-600", "text-uppercase", "me-3"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-tabs"], ["id", "nav-desc-tab", "data-bs-toggle", "tab", "href", "#nav-desc", "role", "tab", "aria-controls", "nav-desc", "aria-selected", "true", 1, "nav-link", "fw-500", "active"], ["id", "nav-details-tab", "data-bs-toggle", "tab", "href", "#nav-details", "role", "tab", "aria-controls", "nav-details", "aria-selected", "false", 1, "nav-link", "fw-500"], ["id", "nav-reviews-tab", "data-bs-toggle", "tab", "href", "#nav-reviews", "role", "tab", "aria-controls", "nav-reviews", "aria-selected", "false", 1, "nav-link", "fw-500"], ["id", "nav-tabContent", 1, "tab-content", "p-4", "shadow-sm", "border", "border-top-0", "mb-4"], ["id", "nav-desc", "role", "tabpanel", "aria-labelledby", "nav-desc-tab", 1, "tab-pane", "fade", "show", "active"], [1, "gray-color"], ["id", "nav-details", "role", "tabpanel", "aria-labelledby", "nav-details-tab", 1, "tab-pane", "fade"], ["id", "nav-reviews", "role", "tabpanel", "aria-labelledby", "nav-reviews-tab", 1, "tab-pane", "fade"], [1, "reviews"], ["class", "card mb-3", 4, "ngFor", "ngForOf"], [1, "border-bottom"], [1, "text-muted"], [1, "prod-rate", "mt-2", "list-unstyled", "d-flex", "flex-row-reverse", "justify-content-end"], [1, "mr-2", "star", 3, "click"], [1, "star-icon", "gray-color", "pointer", 3, "icon"], [3, "formGroup", "ngSubmit"], ["ngForm", "ngForm"], [1, "col-md-6", "mb-3", "position-relative"], ["formControlName", "userName", "type", "text", "placeholder", "Your Name (required) *", 1, "form-control"], ["class", "invalid-tooltip", 4, "ngIf"], ["formControlName", "email", "type", "text", "placeholder", "Your Email (required) *", 1, "form-control"], [1, "col-12", "mb-3", "position-relative"], ["formControlName", "review", "placeholder", "Your Review (required) *", 1, "form-control"], [1, "main-btn"], [1, "h4"], [1, "line"], [1, "products-slider"], [1, "col-md-3"], [1, "sidebar", "border", "px-3"], [1, "border-bottom", "py-2", "d-flex", "align-items-center"], [1, "side-icon", "me-3", 3, "icon"], [1, "title", "text-uppercase", "mb-1"], [1, "subtitle", "gray-color"], [1, "py-2", "d-flex", "align-items-center"], ["carouselSlide", ""], [1, "w-100", 3, "src", "alt", "click"], [1, "discount"], [1, "d-inline-block", "h6", "fw-bold", "me-2", "gray-color", "text-decoration-line-through"], [1, "red-color", "d-inline-block", "h4"], [1, "fw-500", "red-color"], [1, "fw-500"], [1, "card", "mb-3"], [1, "d-flex", "align-items-center", "px-4"], [1, "me-3"], [1, "user-img", "rounded-circle", "overflow-hidden", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "card-text", "mb-0"], [1, "card-text"], [1, "invalid-tooltip"], [3, "prodDetails"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_fa_icon_click_10_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "owl-carousel-o", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductDetailsComponent_ng_container_13_Template, 2, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProductDetailsComponent_div_17_Template, 6, 4, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Avalibility:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ProductDetailsComponent_span_27_Template, 2, 0, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProductDetailsComponent_span_28_Template, 2, 0, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Quantity:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_33_listener() { return ctx.dec(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProductDetailsComponent_Template_input_input_35_listener($event) { return ctx.checkQuantity($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_36_listener() { return ctx.inc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_button_click_39_listener() { return ctx.addToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Add To Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Buy Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Reviews");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](60, ProductDetailsComponent_div_60_Template, 13, 5, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Leave Your Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Your email address will not be published. Required fields are marked *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Your Rate:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_li_click_68_listener() { return ctx.changeRate(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "fa-icon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_li_click_70_listener() { return ctx.changeRate(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "fa-icon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_li_click_72_listener() { return ctx.changeRate(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "fa-icon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_li_click_74_listener() { return ctx.changeRate(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "fa-icon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_li_click_76_listener() { return ctx.changeRate(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "fa-icon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "form", 43, 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProductDetailsComponent_Template_form_ngSubmit_78_listener() { return ctx.rateFormSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ProductDetailsComponent_div_83_Template, 2, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, ProductDetailsComponent_div_86_Template, 2, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, ProductDetailsComponent_div_87_Template, 2, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "textarea", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](90, ProductDetailsComponent_div_90_Template, 2, 0, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Submit Review");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h3", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "owl-carousel-o", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ProductDetailsComponent_ng_container_99_Template, 2, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "aside", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "fa-icon", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "h3", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "BONUS PLUS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Get a bonus plus for buying more that three products ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "fa-icon", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h3", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "FREE SHIPPING");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, " Free shipping on all orders over $99 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "fa-icon", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h3", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "MONEY BACK GUARANTEE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " 100% money back guarantee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "fa-icon", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h3", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "ONLINE SUPPORT 24/7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Call us: 02 3555 65454 55 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.productDetails == null ? null : ctx.productDetails.mainImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.productDetails == null ? null : ctx.productDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearchPlus);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.productsOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productDetails == null ? null : ctx.productDetails.images);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.productDetails == null ? null : ctx.productDetails.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productDetails == null ? null : ctx.productDetails.hasDiscount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 47, (ctx.productDetails == null ? null : ctx.productDetails.price) - ((ctx.productDetails == null ? null : ctx.productDetails.hasDiscount) || (ctx.productDetails == null ? null : ctx.productDetails.discount) == 0 ? (ctx.productDetails == null ? null : ctx.productDetails.price) * (ctx.productDetails == null ? null : ctx.productDetails.discount) / 100 : 0)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetails == null ? null : ctx.productDetails.shortDescription, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.outStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.outStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetails == null ? null : ctx.productDetails.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.productDetails == null ? null : ctx.productDetails.details, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.rateValue == 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.rateValue == 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.rateValue == 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.rateValue == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.rateValue == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.rateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", (ctx.userName.touched || _r6.submitted) && ctx.userName.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.userName.touched || _r6.submitted) && (ctx.userName.errors == null ? null : ctx.userName.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", (ctx.email.touched || _r6.submitted) && ctx.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.email.touched || _r6.submitted) && (ctx.email.errors == null ? null : ctx.email.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.email.touched || _r6.submitted) && (ctx.email.errors == null ? null : ctx.email.errors.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-invalid", (ctx.review.touched || _r6.submitted) && ctx.review.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.review.touched || _r6.submitted) && (ctx.review.errors == null ? null : ctx.review.errors.required));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.featuredOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuredItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGift);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faShippingFast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCoins);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faHistory);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselSlideDirective"], src_app_core_models_prodcard_prodcard_component__WEBPACK_IMPORTED_MODULE_8__["ProdcardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: [".search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2rem;\n  left: 2rem;\n  width: 3rem;\n  cursor: pointer;\n  font-size: 1.3rem;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #383838;\n}\n\n.gray-color[_ngcontent-%COMP%] {\n  color: #777;\n}\n\n.red-color[_ngcontent-%COMP%] {\n  color: #f33927;\n}\n\n.description[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #aaa;\n}\n\n.inc-dec-btn[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n}\n\n.inc-dec-btn[_ngcontent-%COMP%]:focus {\n  outline: 0;\n}\n\n.quantity[_ngcontent-%COMP%] {\n  width: 70px;\n  border: none;\n  border-left: 1px solid #ddd;\n  border-right: 1px solid #ddd;\n}\n\n.quantity[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n\n.main-btn[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.sidebar[_ngcontent-%COMP%]   .side-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n\n.sidebar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n\n.sidebar[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  line-height: 1;\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n\n.nav-tabs[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 0.9rem;\n}\n\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link[_ngcontent-%COMP%]:focus {\n  border-color: transparent;\n}\n\n.nav-link.active[_ngcontent-%COMP%] {\n  border-color: transparent;\n  border-bottom: 2px solid #ef6c00;\n}\n\n.reviews[_ngcontent-%COMP%]   .user-img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.prod-rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n\n.prod-rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover   .star-icon[_ngcontent-%COMP%], .prod-rate[_ngcontent-%COMP%]   .star.active[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%], .prod-rate[_ngcontent-%COMP%]   .star.active[_ngcontent-%COMP%]    ~ .star[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%], .prod-rate[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover    ~ .star[_ngcontent-%COMP%]   .star-icon[_ngcontent-%COMP%] {\n  color: #ef6c00;\n}\n\n.invalid-tooltip[_ngcontent-%COMP%] {\n  background-color: rgba(220, 53, 69, 0.8);\n  position: static;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 2px;\n  background-color: #222;\n}\n\n  .images-container .owl-carousel .owl-item {\n  box-shadow: 0 0.125rem 0.25rem #ddd !important;\n  margin-bottom: 0.2rem;\n}\n\n  .images-container .owl-theme .owl-nav [class*=owl-] {\n  width: 20px;\n  height: 20px;\n  background-color: #fff;\n  color: #fff;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  box-shadow: 1px 2px 8px #aaa;\n}\n\n  .images-container .owl-theme .owl-nav [class*=owl-]:hover {\n  background-color: #fff;\n}\n\n  .images-container .owl-theme .owl-nav {\n  position: static;\n}\n\n  .images-container .owl-carousel .owl-nav .owl-prev,   .images-container .owl-carousel .owl-nav .owl-next {\n  position: absolute;\n  top: 40%;\n  transform: translateY(-50%);\n}\n\n  .images-container .owl-carousel .owl-nav .owl-prev:hover,   .images-container .owl-carousel .owl-nav .owl-prev {\n  background-image: url('chevron-left-solid-black.svg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 8px;\n  left: 0px;\n}\n\n  .images-container .owl-carousel .owl-nav .owl-next:hover,   .images-container .owl-carousel .owl-nav .owl-next {\n  background-image: url('chevron-right-solid-black.svg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 8px;\n  right: 0px;\n}\n\n  .products-slider .owl-carousel .owl-item {\n  border: 1px solid #ececec;\n}\n\n  .products-slider .owl-theme .owl-nav [class*=owl-] {\n  width: 50px;\n  height: 50px;\n  background-color: #ef6c00;\n  color: #fff;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  box-shadow: 1px 2px 8px #aaa;\n}\n\n  .products-slider .owl-theme .owl-nav [class*=owl-]:hover {\n  background-color: #ef6c00;\n}\n\n  .products-slider .owl-theme .owl-nav {\n  position: static;\n}\n\n  .products-slider .owl-carousel .owl-nav .owl-prev,   .products-slider .owl-carousel .owl-nav .owl-next {\n  position: absolute;\n  top: 40%;\n  transform: translateY(-50%);\n}\n\n  .products-slider .owl-carousel .owl-nav .owl-prev:hover,   .products-slider .owl-carousel .owl-nav .owl-prev {\n  background-image: url('chevron-left-solid.svg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 12px;\n  left: 0px;\n}\n\n  .products-slider .owl-carousel .owl-nav .owl-next:hover,   .products-slider .owl-carousel .owl-nav .owl-next {\n  background-image: url('chevron-right-solid.svg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 12px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFNQTtFQUVFLGNBQUE7QUFKRjs7QUFNQTtFQUVFLFdBQUE7QUFKRjs7QUFNQTtFQUVFLGNBQUE7QUFKRjs7QUFNQTtFQUVFLDhCQUFBO0FBSkY7O0FBT0E7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFNRTtFQUVFLFVBQUE7QUFMSjs7QUFRQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQU5GOztBQU9FO0VBRUUsYUFBQTtFQUNBLGdCQUFBO0FBTko7O0FBU0E7RUFFRSxpQkFBQTtBQVBGOztBQVlFO0VBRUUsaUJBQUE7QUFWSjs7QUFZRTtFQUVFLGlCQUFBO0FBWEo7O0FBYUU7RUFFRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQVpKOztBQWVBO0VBRUUsNkJBQUE7QUFiRjs7QUFlQTtFQUVFLFdBQUE7RUFDQSxpQkFBQTtBQWJGOztBQWNFO0VBR0UseUJBQUE7QUFkSjs7QUFnQkU7RUFFRSx5QkFBQTtFQUNBLGdDQUFBO0FBZko7O0FBc0JFO0VBRUUsV0FBQTtFQUNBLFlBQUE7QUFwQko7O0FBd0JBO0VBRUUsY0FBQTtBQXRCRjs7QUF3QkE7Ozs7RUFLRSxjQUFBO0FBdEJGOztBQXdCQTtFQUVFLHdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUF0QkY7O0FBd0JBO0VBRUUsV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQXRCRjs7QUE0QkE7RUFFRSw4Q0FBQTtFQUNBLHFCQUFBO0FBMUJGOztBQTRCQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQTFCRjs7QUEyQkU7RUFFRSxzQkFBQTtBQTFCSjs7QUE2QkE7RUFFRSxnQkFBQTtBQTNCRjs7QUE2QkE7O0VBR0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUEzQkY7O0FBNkJBOztFQUdFLHFEQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtBQTNCRjs7QUE2QkE7O0VBR0Usc0RBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBM0JGOztBQStCQTtFQUVFLHlCQUFBO0FBN0JGOztBQStCQTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQTdCRjs7QUE4QkU7RUFFRSx5QkFBQTtBQTdCSjs7QUFnQ0E7RUFFRSxnQkFBQTtBQTlCRjs7QUFnQ0E7O0VBR0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUE5QkY7O0FBZ0NBOztFQUdFLCtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtBQTlCRjs7QUFnQ0E7O0VBR0UsZ0RBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBOUJGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uc2VhcmNoLWljb25cclxue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDJyZW07XHJcbiAgbGVmdDogMnJlbTtcclxuICB3aWR0aDogM3JlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjNyZW07XHJcbn1cclxuXHJcblxyXG4udGl0bGVcclxue1xyXG4gIGNvbG9yOiAjMzgzODM4O1xyXG59XHJcbi5ncmF5LWNvbG9yXHJcbntcclxuICBjb2xvcjogIzc3NztcclxufVxyXG4ucmVkLWNvbG9yXHJcbntcclxuICBjb2xvcjogI2YzMzkyNztcclxufVxyXG4uZGVzY3JpcHRpb25cclxue1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2FhYTtcclxufVxyXG5cclxuLmluYy1kZWMtYnRuXHJcbntcclxuICBmb250LXNpemU6IDEuM3JlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gICY6Zm9jdXNcclxuICB7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gIH1cclxufVxyXG4ucXVhbnRpdHlcclxue1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RkZDtcclxuICAmOmZvY3VzXHJcbiAge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG59XHJcbi5tYWluLWJ0blxyXG57XHJcbiAgZm9udC1zaXplOiAuOXJlbTtcclxufVxyXG5cclxuLnNpZGViYXJcclxue1xyXG4gIC5zaWRlLWljb25cclxuICB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICB9XHJcbiAgLnRpdGxlXHJcbiAge1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgfVxyXG4gIC5zdWJ0aXRsZVxyXG4gIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgfVxyXG59XHJcbi5uYXYtdGFic1xyXG57XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbn1cclxuLm5hdi1saW5rXHJcbntcclxuICBjb2xvcjogIzMzMztcclxuICBmb250LXNpemU6IC45cmVtO1xyXG4gICY6aG92ZXIsXHJcbiAgJjpmb2N1c1xyXG4gIHtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gICYuYWN0aXZlXHJcbiAge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZWY2YzAwO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5yZXZpZXdzXHJcbntcclxuICAudXNlci1pbWdcclxuICB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG59XHJcbi5wcm9kLXJhdGUgLnN0YXJcclxue1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcbi5wcm9kLXJhdGUgLnN0YXI6aG92ZXIgLnN0YXItaWNvbixcclxuLnByb2QtcmF0ZSAuc3Rhci5hY3RpdmUgLnN0YXItaWNvbixcclxuLnByb2QtcmF0ZSAuc3Rhci5hY3RpdmUgfiAuc3RhciAuc3Rhci1pY29uLFxyXG4ucHJvZC1yYXRlIC5zdGFyOmhvdmVyIH4gLnN0YXIgLnN0YXItaWNvblxyXG57XHJcbiAgY29sb3I6ICNlZjZjMDA7XHJcbn1cclxuLmludmFsaWQtdG9vbHRpcFxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjAsIDUzLCA2OSwgMC44KTtcclxuICBwb3NpdGlvbjogc3RhdGljO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG4ubGluZVxyXG57XHJcbiAgd2lkdGg6IDNyZW07XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxufVxyXG5cclxuXHJcblxyXG5cclxuOjpuZy1kZWVwIC5pbWFnZXMtY29udGFpbmVyIC5vd2wtY2Fyb3VzZWwgLm93bC1pdGVtXHJcbntcclxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIC4yNXJlbSAjZGRkIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiAuMnJlbTtcclxufVxyXG46Om5nLWRlZXAgLmltYWdlcy1jb250YWluZXIgLm93bC10aGVtZSAub3dsLW5hdiBbY2xhc3MqPW93bC1dXHJcbntcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDhweCAjYWFhO1xyXG4gICY6aG92ZXJcclxuICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG46Om5nLWRlZXAgLmltYWdlcy1jb250YWluZXIgLm93bC10aGVtZSAub3dsLW5hdlxyXG57XHJcbiAgcG9zaXRpb246IHN0YXRpYztcclxufVxyXG46Om5nLWRlZXAgLmltYWdlcy1jb250YWluZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLXByZXYsXHJcbjo6bmctZGVlcCAuaW1hZ2VzLWNvbnRhaW5lciAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtbmV4dFxyXG57XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG46Om5nLWRlZXAgLmltYWdlcy1jb250YWluZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLXByZXY6aG92ZXIsXHJcbjo6bmctZGVlcCAuaW1hZ2VzLWNvbnRhaW5lciAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtcHJldlxyXG57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGV2cm9uLWxlZnQtc29saWQtYmxhY2suc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDhweDtcclxuICBsZWZ0OiAwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5pbWFnZXMtY29udGFpbmVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0OmhvdmVyLFxyXG46Om5nLWRlZXAgLmltYWdlcy1jb250YWluZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLW5leHRcclxue1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2hldnJvbi1yaWdodC1zb2xpZC1ibGFjay5zdmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogOHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcblxyXG46Om5nLWRlZXAgLnByb2R1Y3RzLXNsaWRlciAub3dsLWNhcm91c2VsIC5vd2wtaXRlbVxyXG57XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VjZWNlYztcclxufVxyXG46Om5nLWRlZXAgLnByb2R1Y3RzLXNsaWRlciAub3dsLXRoZW1lIC5vd2wtbmF2IFtjbGFzcyo9b3dsLV1cclxue1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY2YzAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggOHB4ICNhYWE7XHJcbiAgJjpob3ZlclxyXG4gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZjZjMDA7XHJcbiAgfVxyXG59XHJcbjo6bmctZGVlcCAucHJvZHVjdHMtc2xpZGVyIC5vd2wtdGhlbWUgLm93bC1uYXZcclxue1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbn1cclxuOjpuZy1kZWVwIC5wcm9kdWN0cy1zbGlkZXIgLm93bC1jYXJvdXNlbCAub3dsLW5hdiAub3dsLXByZXYsXHJcbjo6bmctZGVlcCAucHJvZHVjdHMtc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0XHJcbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG59XHJcbjo6bmctZGVlcCAucHJvZHVjdHMtc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1wcmV2OmhvdmVyLFxyXG46Om5nLWRlZXAgLnByb2R1Y3RzLXNsaWRlciAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtcHJldlxyXG57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGV2cm9uLWxlZnQtc29saWQuc3ZnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEycHg7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcbjo6bmctZGVlcCAucHJvZHVjdHMtc2xpZGVyIC5vd2wtY2Fyb3VzZWwgLm93bC1uYXYgLm93bC1uZXh0OmhvdmVyLFxyXG46Om5nLWRlZXAgLnByb2R1Y3RzLXNsaWRlciAub3dsLWNhcm91c2VsIC5vd2wtbmF2IC5vd2wtbmV4dFxyXG57XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaGV2cm9uLXJpZ2h0LXNvbGlkLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMnB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-details',
                templateUrl: './product-details.component.html',
                styleUrls: ['./product-details.component.scss']
            }]
    }], function () { return [{ type: _core_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { mainImg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["mainImg"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/products/product-home/product-home.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/products/product-home/product-home.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProductHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHomeComponent", function() { return ProductHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../core/services/products.service */ "./src/app/core/services/products.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_core_models_prodcard_prodcard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/models/prodcard/prodcard.component */ "./src/app/core/models/prodcard/prodcard.component.ts");









const _c0 = function (a0, a1, a2) { return { "col-xl-3": a0, "col-xl-4": a1, "col-xl-12": a2 }; };
function ProductHomeComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-prodcard", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](2, _c0, ctx_r0.itemPerRow == 4, ctx_r0.itemPerRow == 3, ctx_r0.itemPerRow == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prodDetails", item_r1);
} }
class ProductHomeComponent {
    constructor(_ProductsService) {
        this._ProductsService = _ProductsService;
        this.faTh = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTh"];
        this.faThLarge = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faThLarge"];
        this.faThList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faThList"];
        this.itemPerRow = 4;
        this.pageNum = 1;
        this.minPrice = 1;
        this.maxPrice = 10000;
        this.category = 'all';
        this.query = '';
        this.items = [];
    }
    ngOnInit() {
        this._ProductsService.getProducts(this.pageNum).subscribe((items) => {
            this.items = items;
        });
        this.catSelect = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('all');
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
        this._ProductsService.getProductsAfterFilter(this.category, this.minPrice, this.maxPrice, this.pageNum, this.query).subscribe((items) => {
            this.items = items;
        });
        ;
    }
}
ProductHomeComponent.ɵfac = function ProductHomeComponent_Factory(t) { return new (t || ProductHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"])); };
ProductHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductHomeComponent, selectors: [["app-product-home"]], decls: 41, vars: 11, consts: [[1, "container-fluid", "py-5"], [1, "row"], [1, "col-md-3"], [1, "mb-3", "border-bottom"], [1, "h6", "mb-2"], [1, "form-select", "mb-3", 3, "formControl", "change"], ["value", "all", "selected", ""], ["value", "Headphones"], ["value", "Laptops"], [1, "col-md-6"], [1, "gray-color", "mb-2"], [1, "fw-500"], ["type", "range", "min", "1", "max", "10000", "value", "1", 1, "range", 3, "input"], ["type", "range", "min", "1", "max", "10000", "value", "10000", 1, "range", 3, "input"], [1, "col-md-9"], [1, "py-4", "d-flex", "justify-content-between"], ["type", "text", "placeholder", "Search product", 1, "form-control", 3, "input"], [1, "d-flex"], [1, "list-icon", "me-3", "pointer", 3, "icon", "click"], ["class", "col-sm-6 col-md-6 col-lg-4 mb-4", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "col-lg-4", "mb-4", 3, "ngClass"], [3, "prodDetails"]], template: function ProductHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductHomeComponent_Template_select_change_6_listener($event) { return ctx.categoryChanged($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Show All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Headphones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Laptops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " From: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProductHomeComponent_Template_input_input_23_listener($event) { return ctx.changeMinRange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " To: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProductHomeComponent_Template_input_input_30_listener($event) { return ctx.changeMaxRange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function ProductHomeComponent_Template_input_input_34_listener($event) { return ctx.querySearch($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductHomeComponent_Template_fa_icon_click_36_listener() { return ctx.itemPerRow = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductHomeComponent_Template_fa_icon_click_37_listener() { return ctx.itemPerRow = 3; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductHomeComponent_Template_fa_icon_click_38_listener() { return ctx.itemPerRow = 4; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, ProductHomeComponent_div_40_Template, 2, 6, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.catSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 7, ctx.minPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 9, ctx.maxPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faThList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faThLarge);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faTh);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], src_app_core_models_prodcard_prodcard_component__WEBPACK_IMPORTED_MODULE_6__["ProdcardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".list-icon[_ngcontent-%COMP%] {\n  color: #777;\n  font-size: 1.2rem;\n}\n\n.gray-color[_ngcontent-%COMP%] {\n  color: #777;\n}\n\n.range[_ngcontent-%COMP%] {\n  height: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9kdWN0cy9wcm9kdWN0LWhvbWUvcHJvZHVjdC1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUE7RUFFRSxXQUFBO0FBQUY7O0FBRUE7RUFFRSxXQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Byb2R1Y3RzL3Byb2R1Y3QtaG9tZS9wcm9kdWN0LWhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1pY29uXHJcbntcclxuICBjb2xvcjogIzc3NztcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG4uZ3JheS1jb2xvclxyXG57XHJcbiAgY29sb3I6ICM3Nzc7XHJcbn1cclxuLnJhbmdlXHJcbntcclxuICBoZWlnaHQ6IDJweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-home',
                templateUrl: './product-home.component.html',
                styleUrls: ['./product-home.component.scss']
            }]
    }], function () { return [{ type: _core_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/products/products-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/products/products-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/modules/products/product-details/product-details.component.ts");
/* harmony import */ var _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-home/product-home.component */ "./src/app/modules/products/product-home/product-home.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






const routes = [
    { path: "", component: _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_1__["ProductHomeComponent"] },
    { path: ":prodID", component: _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_0__["ProductDetailsComponent"] }
];
class ProductsRoutingModule {
}
ProductsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ProductsRoutingModule });
ProductsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ProductsRoutingModule_Factory(t) { return new (t || ProductsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ProductsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ProductsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/products/products.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/products/products.module.ts ***!
  \*****************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/modules/products/products-routing.module.ts");
/* harmony import */ var _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-details/product-details.component */ "./src/app/modules/products/product-details/product-details.component.ts");
/* harmony import */ var _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-home/product-home.component */ "./src/app/modules/products/product-home/product-home.component.ts");







class ProductsModule {
}
ProductsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ProductsModule_Factory(t) { return new (t || ProductsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"],
        _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_5__["ProductHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
        _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProductsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"],
                    _product_home_product_home_component__WEBPACK_IMPORTED_MODULE_5__["ProductHomeComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _products_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductsRoutingModule"],
                    _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-modules-products-products-module.js.map