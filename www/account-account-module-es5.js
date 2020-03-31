(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-router-outlet></ion-router-outlet>\n<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon size=\"small\" ios=\"ios-home\" md=\"md-home\"></ion-icon>\n      <span>Home</span>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"transactions\">\n      <ion-icon size=\"small\" ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\n      <span>Transactions</span>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"send-payment\">\n      <ion-icon size=\"large\" ios=\"ios-add-circle\" md=\"md-add-circle\"></ion-icon>\n      <span>Send</span>\n    </ion-tab-button>\n    <ion-tab-button tab=\"settings\">\n      <ion-icon size=\"small\" ios=\"ios-options\" md=\"md-options\"></ion-icon>\n      <span>Settings</span>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"send-payment/select-recepient\">\n      <ion-icon size=\"small\" ios=\"ios-people\" md=\"md-people\"></ion-icon>\n      <span>Recipients</span>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/account/account.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/account/account.module.ts ***!
    \*******************************************/

  /*! exports provided: AccountPageModule */

  /***/
  function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
      return AccountPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./account.page */
    "./src/app/account/account.page.ts");

    const routes = [{
      path: '',
      component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"],
      children: [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      }, {
        path: 'send-payment',
        loadChildren: '../send-payment/send-payment.module#SendPaymentPageModule'
      }, {
        path: 'transactions',
        loadChildren: '../transactions/transactions.module#TransactionsPageModule'
      }, {
        path: 'settings',
        loadChildren: '../settings/settings.module#SettingsPageModule'
      }, {
        path: 'recipients',
        loadChildren: '../recipients/recipients.module#RecipientsPageModule'
      }, {
        path: 'wallet',
        loadChildren: '../wallet/wallet.module#WalletPageModule'
      }, {
        path: 'notifications',
        loadChildren: '../notification/notification.module#NotificationPageModule'
      }]
    }];
    let AccountPageModule = class AccountPageModule {};
    AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })], AccountPageModule);
    /***/
  },

  /***/
  "./src/app/account/account.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/account/account.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/account/account.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/account/account.page.ts ***!
    \*****************************************/

  /*! exports provided: AccountPage */

  /***/
  function srcAppAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AccountPage = class AccountPage {
      constructor() {}

      ngOnInit() {}

    };
    AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./account.page.scss */
      "./src/app/account/account.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AccountPage);
    /***/
  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map