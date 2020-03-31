(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipients-recipients-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/recipients/recipients.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipients/recipients.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRecipientsRecipientsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-grid no-margin no-padding>\n      <ion-row>\n        <ion-col size=\"6\">\n          <div class=\"back-btn-wrapper\" (click)=\"backRedirect()\">\n            <ion-icon name=\"arrow-back\"></ion-icon><span> {{title}}</span>\n          </div>\n        </ion-col>\n        <ion-col size=\"6\" class=\"top-nav-logo-wrapper\">\n          <img src=\"../../../assets/logo/icon-white.svg\" alt=\"Wayapay\" routerLink=\"/account\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content> -->\n\n<!-- <app-send-payment></app-send-payment> -->";
    /***/
  },

  /***/
  "./src/app/recipients/recipients.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/recipients/recipients.module.ts ***!
    \*************************************************/

  /*! exports provided: RecipientsPageModule */

  /***/
  function srcAppRecipientsRecipientsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipientsPageModule", function () {
      return RecipientsPageModule;
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


    var _recipients_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recipients.page */
    "./src/app/recipients/recipients.page.ts");

    const routes = [{
      path: '',
      component: _recipients_page__WEBPACK_IMPORTED_MODULE_6__["RecipientsPage"]
    }];
    let RecipientsPageModule = class RecipientsPageModule {};
    RecipientsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_recipients_page__WEBPACK_IMPORTED_MODULE_6__["RecipientsPage"]]
    })], RecipientsPageModule);
    /***/
  },

  /***/
  "./src/app/recipients/recipients.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/recipients/recipients.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRecipientsRecipientsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwaWVudHMvcmVjaXBpZW50cy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/recipients/recipients.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/recipients/recipients.page.ts ***!
    \***********************************************/

  /*! exports provided: RecipientsPage */

  /***/
  function srcAppRecipientsRecipientsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecipientsPage", function () {
      return RecipientsPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let RecipientsPage = class RecipientsPage {
      constructor(router) {
        this.router = router;
        this.title = 'Recipients';
      }

      ngOnInit() {}

      backRedirect() {
        return this.router.navigateByUrl('/account/home');
      }

    };

    RecipientsPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    RecipientsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-recipients',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./recipients.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/recipients/recipients.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./recipients.page.scss */
      "./src/app/recipients/recipients.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RecipientsPage);
    /***/
  }
}]);
//# sourceMappingURL=recipients-recipients-module-es5.js.map