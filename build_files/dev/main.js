(self["webpackChunkloan_system"] = self["webpackChunkloan_system"] || []).push([["main"],{

/***/ 23966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 13173);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home/home.component */ 50424);
/* harmony import */ var _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/summary/summary.component */ 414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);






const routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'home',
  component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
}, {
  path: 'summary/:id',
  component: _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_2__.SummaryComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 66401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/api.service */ 19045);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);



class AppComponent {
  constructor(api) {
    this.api = api;
    this.title = 'loan_management_system';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 78629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 23966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var _primeng_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./primeng.module */ 53960);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);







class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _primeng_module__WEBPACK_IMPORTED_MODULE_2__.primeNgModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.NoopAnimationsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _primeng_module__WEBPACK_IMPORTED_MODULE_2__.primeNgModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.NoopAnimationsModule]
  });
})();

/***/ }),

/***/ 37477:
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormComponent: () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/password */ 73219);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/radiobutton */ 63313);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);







class FormComponent {
  constructor() {
    this.emitName = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.emitRole = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.emitPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.username = '';
    this.role = '';
    this.enable = false;
  }
  ngOnInit() {}
  submit() {
    this.emitRole?.emit(this.role);
    this.emitName?.emit(this.username);
    this.emitPassword?.emit(this.password);
  }
  enableSubmit() {
    if (this.username.length >= 3 && this.password.length >= 3 && this.role) {
      this.enable = true;
    } else {
      this.enable = false;
    }
  }
  static #_ = this.ɵfac = function FormComponent_Factory(t) {
    return new (t || FormComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FormComponent,
    selectors: [["app-form"]],
    outputs: {
      emitName: "emitName",
      emitRole: "emitRole",
      emitPassword: "emitPassword"
    },
    decls: 21,
    vars: 6,
    consts: [[1, "container"], [1, "heading"], [1, "form"], ["for", "username"], ["pInputText", "", "id", "username", "aria-describedby", "username-help", "placeholder", "Your Name", "required", "", "title", "Username is required", 3, "ngModel", "ngModelChange"], ["for", "password"], ["placeholder", "Your Password", "required", "", "title", "password is required", 3, "ngModel", "toggleMask", "ngModelChange"], ["for", "role"], [1, "radio"], ["name", "role", "value", "Bank Manager", "required", "Role is required", "inputId", "role1", 3, "ngModel", "ngModelChange"], ["for", "role1", 1, "ml-2"], ["name", "role", "value", "Loan Officer", "required", "Role is required", "inputId", "role2", 3, "ngModel", "ngModelChange"], ["for", "role2", 1, "ml-2"], ["label", "Login", "severity", "secondary", "type", "button", 1, "login", 3, "disabled", "click"]],
    template: function FormComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loan Management System");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2)(5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_input_ngModelChange_7_listener($event) {
          return ctx.username = $event;
        })("ngModelChange", function FormComponent_Template_input_ngModelChange_7_listener() {
          return ctx.enableSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p-password", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_p_password_ngModelChange_10_listener($event) {
          return ctx.password = $event;
        })("ngModelChange", function FormComponent_Template_p_password_ngModelChange_10_listener() {
          return ctx.enableSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "p-radioButton", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_p_radioButton_ngModelChange_14_listener($event) {
          return ctx.role = $event;
        })("ngModelChange", function FormComponent_Template_p_radioButton_ngModelChange_14_listener() {
          return ctx.enableSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Bank Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p-radioButton", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FormComponent_Template_p_radioButton_ngModelChange_17_listener($event) {
          return ctx.role = $event;
        })("ngModelChange", function FormComponent_Template_p_radioButton_ngModelChange_17_listener() {
          return ctx.enableSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Loan Officer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_Template_p_button_click_20_listener() {
          return ctx.submit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password)("toggleMask", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.enable);
      }
    },
    dependencies: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_1__.InputText, primeng_password__WEBPACK_IMPORTED_MODULE_2__.Password, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_3__.RadioButton, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button],
    styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  background: linear-gradient(135deg, #D2B48C, #AABD8C);\n  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);\n  border-radius: 15px;\n  padding: 30px;\n}\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 8px 0px;\n  font-weight: bolder;\n}\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0px 5px;\n  font-weight: 400;\n}\n.container[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 12px;\n  text-align: center;\n}\n\n  .login .p-button {\n  height: 40px;\n  background-color: rgb(47, 47, 44);\n}\n\n  .p-inputtext {\n  width: 250px;\n}\n\n  .p-icon-wrapper {\n  top: 35%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7QUFFUjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFJQSxxREFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRFI7QUFFUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUFaO0FBR1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFEaEI7QUFJUTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZWOztBQU9BO0VBQ0UsWUFBQTtFQUNBLGlDQUFBO0FBSkY7O0FBTUE7RUFDSSxZQUFBO0FBSEo7O0FBS0E7RUFDRSxRQUFBO0FBRkYiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICBtYXJnaW46MjBweDtcclxuICAgIH1cclxuICAgIC5mb3Jte1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MCwgMjMyLCAxMzgsIDAuNik7IFxyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICM5MmE4ODQ7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2E4YTQ4NDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRDJCNDhDLCAjQUFCRDhDKTtcclxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMzBweDtcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgbWFyZ2luOiA4cHggMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucmFkaW97XHJcbiAgICAgICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwLWJ1dHRvbntcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuIFxyXG59XHJcbjo6bmctZGVlcCAubG9naW4gLnAtYnV0dG9ue1xyXG4gIGhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0NywgNDcsIDQ0KTtcclxufVxyXG46Om5nLWRlZXAgLnAtaW5wdXR0ZXh0e1xyXG4gICAgd2lkdGg6MjUwcHhcclxufVxyXG46Om5nLWRlZXAgLnAtaWNvbi13cmFwcGVyIHtcclxuICB0b3A6MzUlXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 70026:
/*!*******************************************************************!*\
  !*** ./src/app/components/full-details/full-details.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullDetailsComponent: () => (/* binding */ FullDetailsComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/icons */ 91584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/api.service */ 19045);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_update_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/update-api.service */ 52904);
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toaster.service */ 48884);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/panel */ 16110);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tooltip */ 31251);













const _c0 = function () {
  return {
    "font-weight": "500",
    "color": "Black"
  };
};
function FullDetailsComponent_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const key_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.headers[i_r3]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.summaryDetails[key_r2]);
  }
}
function FullDetailsComponent_div_21_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FullDetailsComponent_div_21_div_7_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.reason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullDetailsComponent_div_21_div_7_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.wait());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r4.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx_r4.icons.post);
  }
}
function FullDetailsComponent_div_21_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FullDetailsComponent_div_21_div_8_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r9.reason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullDetailsComponent_div_21_div_8_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.deny());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Post");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r5.reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("className", ctx_r5.icons.post);
  }
}
function FullDetailsComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullDetailsComponent_div_21_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.approve());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Approve");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullDetailsComponent_div_21_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r14.progressReason());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullDetailsComponent_div_21_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.denyReason());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Deny");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, FullDetailsComponent_div_21_div_7_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FullDetailsComponent_div_21_div_8_Template, 6, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r1.icons.tick);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r1.icons.wait);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("icon", ctx_r1.icons.wrong);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.toggleProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.toggleDeny);
  }
}
class FullDetailsComponent {
  constructor(api, messageService, route, updateApiCall, toaster) {
    this.api = api;
    this.messageService = messageService;
    this.route = route;
    this.updateApiCall = updateApiCall;
    this.toaster = toaster;
    this.summaryDetails = [];
    this.toggleProgress = false;
    this.toggleDeny = false;
    this.icons = src_app_models_icons__WEBPACK_IMPORTED_MODULE_0__.icons;
    this.columns = [];
    this.keys = ['loan_number', 'borrower_name', 'coborrower_name', 'loan_date', 'loan_amount', 'loan_type', 'address', 'cibil_score', 'contact_no', 'dob', 'income', 'job', 'assets', 'interest', 'coborrower_contact', 'coborrower_relation'];
    this.headers = ['Loan Number', 'Borrower Name', 'Co-Borrower Name', 'Loan Date', 'Loan Amount', 'Loan Type', 'Address', 'Cibil Score', 'Contact No.', 'DOB', 'Income', 'Job', 'Assets', 'Interest Rate', 'Co-Borrower Contact', 'Co-Borrower Relation'];
    this.updateData = {
      loan_status: '',
      status_reason: 'None'
    };
  }
  ngOnInit() {}
  navigateToaster() {
    this.getBack();
    this.updateApiCall.updateApiValue.next(true);
  }
  approve() {
    this.updateData.loan_status = 'Approved';
    this.updateStatus();
    this.toaster?.toaster$?.next('approved');
    this.navigateToaster();
  }
  deny() {
    this.updateData.loan_status = 'Denied';
    this.postReason();
    this.updateStatus();
    this.toaster?.toaster$?.next('denied');
    this.navigateToaster();
  }
  wait() {
    this.updateData.loan_status = 'In Progress';
    this.postReason();
    this.updateStatus();
    this.toaster.toaster$.next('progress');
    this.navigateToaster();
  }
  updateStatus() {
    this.api.putStatus(this.id, this.updateData).subscribe({
      next: response => console.log('Updated Successfully'),
      error: error => console.log(error)
    });
  }
  progressReason() {
    this.toggleProgress = !this.toggleProgress;
    this.toggleDeny = false;
  }
  denyReason() {
    this.toggleDeny = !this.toggleDeny;
    this.toggleProgress = false;
  }
  postReason() {
    this.updateData.status_reason = this.reason;
  }
  getBack() {
    this.route?.navigate(['/home']);
  }
  exportPdf() {
    __webpack_require__.e(/*! import() */ "default-node_modules_jspdf_dist_jspdf_es_min_js").then(__webpack_require__.bind(__webpack_require__, /*! jspdf */ 10797)).then(jsPDF => {
      Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_js")]).then(__webpack_require__.t.bind(__webpack_require__, /*! jspdf-autotable */ 59880, 23)).then(x => {
        const doc = new jsPDF.default('p', 'px', 'a4');
        doc.autoTable(this.headers, this.columns);
        doc.save('attachment.pdf');
      });
    });
  }
  static #_ = this.ɵfac = function FullDetailsComponent_Factory(t) {
    return new (t || FullDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_update_api_service__WEBPACK_IMPORTED_MODULE_2__.UpdateApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__.ToasterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: FullDetailsComponent,
    selectors: [["app-full-details"]],
    inputs: {
      summaryDetails: "summaryDetails",
      role: "role",
      id: "id"
    },
    decls: 26,
    vars: 10,
    consts: [[1, "container"], [1, "box_1"], ["header", "Full Details"], [4, "ngFor", "ngForOf"], [1, "box_2"], ["header", "Loan Documents"], [1, "container_1"], ["type", "button", "pButton", "", "pRipple", "", "pTooltip", "Download", "tooltipPosition", "right", 1, "p-button-warning", "mr-2", "attachment", 3, "click"], ["class", "container_2", 4, "ngIf"], [1, "Back", 3, "click"], [1, "container_2"], ["pButton", "", 1, "success", 3, "icon", "click"], ["pButton", "", 1, "info", 3, "icon", "click"], ["pButton", "", 1, "danger", 3, "icon", "click"], ["class", "reasonBox", 4, "ngIf"], [1, "reasonBox"], ["type", "text", "placeholder", "In progress Reason", 3, "ngModel", "ngModelChange"], [3, "click"], [3, "className"], ["type", "text", "placeholder", "Denied Reason", 3, "ngModel", "ngModelChange"]],
    template: function FullDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "p-panel", 2)(4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, FullDetailsComponent_tr_5_Template, 5, 5, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4)(7, "p-panel", 5)(8, "div", 6)(9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullDetailsComponent_Template_button_click_9_listener() {
          return ctx.exportPdf();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Attachment 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullDetailsComponent_Template_button_click_13_listener() {
          return ctx.exportPdf();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Attachment 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullDetailsComponent_Template_button_click_17_listener() {
          return ctx.exportPdf();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Attachment 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, FullDetailsComponent_div_21_Template, 9, 5, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullDetailsComponent_Template_button_click_22_listener() {
          return ctx.getBack();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Get Back Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.keys);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.icons.attachment);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.icons.attachment);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.icons.attachment);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.role == "Bank Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.icons.home);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, primeng_panel__WEBPACK_IMPORTED_MODULE_10__.Panel, primeng_toast__WEBPACK_IMPORTED_MODULE_11__.Toast, primeng_tooltip__WEBPACK_IMPORTED_MODULE_12__.Tooltip],
    styles: [".container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 400px);\n  justify-content: space-around;\n  grid-gap: 20px;\n  padding: 20px;\n}\n\n.box_1[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\n.box_2[_ngcontent-%COMP%] {\n  width: 400px;\n}\n\nth[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: left;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n  .p-panel {\n  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);\n  opacity: 0.8;\n}\n\n  .p-panel-header {\n  font-weight: bold;\n}\n\n  .p-panel-content tr th {\n  font-weight: 900;\n  color: black;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: 5px;\n  border-radius: 10px;\n  padding: 5px 10px;\n  background-color: rgb(162, 162, 244);\n  border-color: rgb(162, 162, 244);\n  font-weight: 900;\n  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);\n  font-size: small;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-color: black;\n  padding: 5px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);\n}\n\n.success[_ngcontent-%COMP%] {\n  background-color: green;\n  border-color: green;\n}\n\n.info[_ngcontent-%COMP%] {\n  background-color: grey;\n  border-color: grey;\n}\n\n.danger[_ngcontent-%COMP%] {\n  background-color: rgb(240, 19, 19);\n  border-color: red;\n}\n\n.reasonBox[_ngcontent-%COMP%] {\n  margin: 15px 8px;\n}\n\n.container_1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n}\n.container_1[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid white;\n  color: black;\n}\n\n  .p-button-icon {\n  margin-right: 5px;\n}\n\n .success.p-button:hover {\n  background-color: rgba(0, 128, 0, 0.7);\n  color: black;\n  font-weight: bolder;\n}\n\n .info.p-button:hover {\n  background-color: rgba(128, 128, 128, 0.7);\n  color: black;\n  font-weight: bolder;\n}\n\n .danger.p-button:hover {\n  background-color: rgba(240, 19, 19, 0.7);\n  color: black;\n  font-weight: bolder;\n}\n\n  .p-toast-message-icon {\n  margin-right: 20px;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n  background-color: rgb(162, 162, 244);\n  border-color: rgb(162, 162, 244);\n  border-radius: 10px;\n}\n\n.Back[_ngcontent-%COMP%]:hover {\n  background-color: rgba(162, 162, 244, 0.5);\n}\n\n.container_1[_ngcontent-%COMP%]    >  .p-button:hover {\n  background-color: rgb(162, 162, 244);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mdWxsLWRldGFpbHMvZnVsbC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLCtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUdBO0VBQ0ksWUFBQTtBQUFKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxhQUFBO0FBRUo7O0FBQUE7RUFDSSw4Q0FBQTtFQUNBLFlBQUE7QUFHSjs7QUFEQTtFQUVBLGlCQUFBO0FBR0E7O0FBRUc7RUFDQyxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Msb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQUFMOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUNKOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtBQUdKOztBQURBO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQU1BLG1CQUFBO0FBQ0o7QUFOSTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBUVI7O0FBSkE7RUFDSSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksc0NBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFRSjs7QUFOQTtFQUNJLDBDQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBU0o7O0FBUEE7RUFDSSx3Q0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0Msa0JBQUE7QUFXRDs7QUFUQTtFQUNJLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBWUo7O0FBVkE7RUFDSSwwQ0FBQTtBQWFKOztBQVhBO0VBQ0ksb0NBQUE7QUFjSiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtYXgoNDAwcHgpKTtcclxuICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcbiAgICBncmlkLWdhcDoyMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDsgXHJcbiAgICBcclxufVxyXG5cclxuLmJveF8xe1xyXG4gICAgd2lkdGg6NDAwcHg7XHJcblxyXG59XHJcbi5ib3hfMntcclxuICAgIHdpZHRoOjQwMHB4O1xyXG59XHJcbnRoe1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG50aCx0ZHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5wLXBhbmVse1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG46Om5nLWRlZXAgLnAtcGFuZWwtaGVhZGVye1xyXG4vLyAgYmFja2dyb3VuZC1jb2xvcjojQUFCRDhDO1xyXG5mb250LXdlaWdodDpib2xkO1xyXG5cclxufVxyXG46Om5nLWRlZXAgLnAtcGFuZWwtY29udGVudCB0cntcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6I2QyZWFhYjtcclxuICAgdGh7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBcclxuICAgfVxyXG59XHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMTYyLCAyNDQpO1xyXG4gICAgIGJvcmRlci1jb2xvcjogIHJnYigxNjIsIDE2MiwgMjQ0KTtcclxuICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgIGJveC1zaGFkb3c6IDJweCAycHggNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5pbnB1dHtcclxuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG4uc3VjY2Vzc3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG59XHJcbi5pbmZve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmV5O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmV5O1xyXG59XHJcbi5kYW5nZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAxOSwgMTkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbn1cclxuLnJlYXNvbkJveHtcclxuICAgIG1hcmdpbjoxNXB4IDhweFxyXG59XHJcbi5jb250YWluZXJfMXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5wLWJ1dHRvbi1pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuOjpuZy1kZWVwLnN1Y2Nlc3MucC1idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLDEyOCwwLDAuNyk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbjo6bmctZGVlcC5pbmZvLnAtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTI4LDEyOCwxMjgsMC43KTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuOjpuZy1kZWVwLmRhbmdlci5wLWJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI0MCwgMTksIDE5LDAuNyk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcbjo6bmctZGVlcCAucC10b2FzdC1tZXNzYWdlLWljb257XHJcbiBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLkJhY2t7XHJcbiAgICBtYXJnaW46MjBweCAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYyLCAxNjIsIDI0NCk7XHJcbiAgICBib3JkZXItY29sb3I6ICByZ2IoMTYyLCAxNjIsIDI0NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5CYWNrOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMTYyLCAyNDQsMC41KTtcclxufVxyXG4uY29udGFpbmVyXzE+OjpuZy1kZWVwLnAtYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MiwgMTYyLCAyNDQpO1xyXG59XHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6471:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/icons */ 91584);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 27889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ 29140);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);






class HeaderComponent {
  constructor(storage, route) {
    this.storage = storage;
    this.route = route;
    this.icons = src_app_models_icons__WEBPACK_IMPORTED_MODULE_0__.icons;
  }
  ngOnInit() {
    this.getname();
  }
  getname() {
    this.name = this.storage?.getValue();
  }
  logOut() {
    this.storage?.removeValue();
    this.route?.navigate(['/login']);
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
      title: 'Success',
      text: 'you are logged out successfully',
      icon: 'success',
      showCloseButton: true,
      showConfirmButton: false,
      timer: 2000
    });
  }
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 11,
    vars: 1,
    consts: [[1, "container"], ["src", "assets/loan logo.png", "alt", ""], [1, "center"], [1, "right_container"], [1, "right"], [1, "button-right"], ["label", "Log Out", "severity", "success", 1, "logout", 3, "onClick"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loan Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5)(10, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function HeaderComponent_Template_p_button_onClick_10_listener() {
          return ctx.logOut();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Welcome ", ctx.name, " ! \u00A0\u00A0");
      }
    },
    dependencies: [primeng_button__WEBPACK_IMPORTED_MODULE_5__.Button],
    styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  margin: 2px;\n  background: linear-gradient(135deg, #D2B48C, #AABD8C);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 10px;\n  height: 60px;\n  position: sticky;\n  z-index: 100;\n  top: 0;\n}\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  margin-right: 5px;\n}\n.container[_ngcontent-%COMP%]   .right_container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.button-right[_ngcontent-%COMP%] {\n  margin-right: 2px;\n}\n\n  .p-button-success {\n  padding: 5px;\n  font-size: small;\n}\n\n  .p-button-icon {\n  margin-right: 5px;\n}\n\n  .p-button:hover {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBZUEscURBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7QUFiSjtBQU5JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBUVI7QUFMSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBT1I7O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQUlBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUdBO0VBQ0UsWUFBQTtBQUFGIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46MnB4O1xyXG4gICAgXHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6NTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICBcclxuICAgIC5yaWdodF9jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICB9XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjRDJCNDhDLCAjQUFCRDhDKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcG9zaXRpb246c3RpY2t5O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgdG9wOjBcclxuXHJcbn1cclxuLmJ1dHRvbi1yaWdodHtcclxuICBtYXJnaW4tcmlnaHQ6IDJweDtcclxufVxyXG46Om5nLWRlZXAgLnAtYnV0dG9uLXN1Y2Nlc3N7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcblxyXG4gIH1cclxuOjpuZy1kZWVwIC5wLWJ1dHRvbi1pY29ue1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuOjpuZy1kZWVwIC5wLWJ1dHRvbjpob3ZlcntcclxuICBvcGFjaXR5OiAwLjk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 91929:
/*!*****************************************************!*\
  !*** ./src/app/components/table/table.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableComponent: () => (/* binding */ TableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_update_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/update-api.service */ 52904);
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/toaster.service */ 48884);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/toast */ 68313);









function TableComponent_ng_template_3_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "p-sortIcon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const head_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("pSortableColumn", ctx_r4.keys[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", head_r5, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("field", ctx_r4.keys[i_r6]);
  }
}
function TableComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableComponent_ng_template_3_th_1_Template, 3, 3, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Click for more");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", columns_r3);
  }
}
const _c0 = function (a0) {
  return {
    "color": a0
  };
};
function TableComponent_ng_template_4_td_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const homeDetail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, ctx_r11.getStatusColor(homeDetail_r7["loan_status"])));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", homeDetail_r7[key_r10], " ");
  }
}
function TableComponent_ng_template_4_td_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const homeDetail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", homeDetail_r7[key_r10], " ");
  }
}
function TableComponent_ng_template_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TableComponent_ng_template_4_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);
      const homeDetail_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.navigateSummary(homeDetail_r7 == null ? null : homeDetail_r7.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableComponent_ng_template_4_td_1_span_1_Template, 2, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TableComponent_ng_template_4_td_1_span_2_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", key_r10 === "loan_status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !(key_r10 === "loan_status"));
  }
}
function TableComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableComponent_ng_template_4_td_1_Template, 3, 2, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const homeDetail_r7 = ctx.$implicit;
    const expanded_r8 = ctx.expanded;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.keys);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("pRowToggler", homeDetail_r7)("icon", expanded_r8 ? "pi pi-chevron-down" : "pi pi-chevron-right");
  }
}
function TableComponent_ng_template_5_ng_template_4_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const head_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", head_r25, " ");
  }
}
function TableComponent_ng_template_5_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableComponent_ng_template_5_ng_template_4_th_1_Template, 2, 1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r21.headersExpanded);
  }
}
function TableComponent_ng_template_5_ng_template_5_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r27 = ctx.$implicit;
    const homeDetail_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", homeDetail_r20[key_r27], " ");
  }
}
function TableComponent_ng_template_5_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, TableComponent_ng_template_5_ng_template_5_td_1_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r22.keysExpanded);
  }
}
function TableComponent_ng_template_5_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "There are no expanded rows.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TableComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td", 16)(2, "div", 17)(3, "p-table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TableComponent_ng_template_5_ng_template_4_Template, 2, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TableComponent_ng_template_5_ng_template_5_Template, 2, 1, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TableComponent_ng_template_5_ng_template_6_Template, 3, 0, "ng-template", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.singleArray);
  }
}
const _c1 = function () {
  return {
    "min-width": "50rem"
  };
};
class TableComponent {
  constructor(route, updateApi, toaster) {
    this.route = route;
    this.updateApi = updateApi;
    this.toaster = toaster;
    this.homeDetails = [];
    this.headers = ['Loan Number', 'Borrower Name', 'Co-Borrower Name', 'Loan Date', 'Loan Amount', 'Loan Status', 'Status Reason'];
    this.keys = ['loan_number', 'borrower_name', 'coborrower_name', 'loan_date', 'loan_amount', 'loan_status', 'status_reason'];
    this.headersExpanded = ['Loan Type', 'Address', 'Cibil Score', 'Contact No.'];
    this.keysExpanded = ['loan_type', 'address', 'cibil_score', 'contact_no'];
    this.singleArray = [' '];
    this.expanded = true;
  }
  ngOnInit() {}
  navigateSummary(id) {
    this.route?.navigate(['/summary', id]);
  }
  getStatusColor(status) {
    switch (status) {
      case 'Approved':
        return 'green';
      case 'Denied':
        return 'red';
      case 'In Progress':
        return 'blue';
      default:
        return 'black';
    }
  }
  static #_ = this.ɵfac = function TableComponent_Factory(t) {
    return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_update_api_service__WEBPACK_IMPORTED_MODULE_0__.UpdateApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_1__.ToasterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TableComponent,
    selectors: [["app-table"]],
    inputs: {
      homeDetails: "homeDetails"
    },
    decls: 6,
    vars: 4,
    consts: [[1, "card"], ["dataKey", "id", 3, "columns", "value", "tableStyle"], ["pTemplate", "header"], ["pTemplate", "body"], ["pTemplate", "rowexpansion"], [1, "header"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [1, "data"], [3, "click", 4, "ngFor", "ngForOf"], ["type", "button", "pButton", "", "pRipple", "", 1, "p-button-text", "p-button-rounded", 3, "pRowToggler", "icon"], [3, "click"], [3, "ngStyle", 4, "ngIf"], [4, "ngIf"], [3, "ngStyle"], ["colspan", "7"], [1, "p-3"], ["dataKey", "id", 3, "value"], ["pTemplate", "emptymessage"], [4, "ngFor", "ngForOf"], ["colspan", "6"]],
    template: function TableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "p-table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TableComponent_ng_template_3_Template, 4, 1, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, TableComponent_ng_template_4_Template, 4, 3, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TableComponent_ng_template_5_Template, 7, 1, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("columns", ctx.headers)("value", ctx.homeDetails)("tableStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
      }
    },
    dependencies: [primeng_api__WEBPACK_IMPORTED_MODULE_4__.PrimeTemplate, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_table__WEBPACK_IMPORTED_MODULE_6__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_6__.RowToggler, primeng_table__WEBPACK_IMPORTED_MODULE_6__.SortIcon, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle, primeng_toast__WEBPACK_IMPORTED_MODULE_8__.Toast],
    styles: [".card[_ngcontent-%COMP%] {\n  margin: 40px;\n  opacity: 0.9;\n}\n.card[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]:hover {\n  background: rgba(243, 246, 247, 0.7);\n  cursor: pointer;\n  color: rgb(26, 26, 26);\n}\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  color: black;\n  font-weight: 900;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUVSO0FBQUk7RUFDSSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQUVSO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFDUiIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gICAgbWFyZ2luOjQwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAuZGF0YXtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDsgIFxyXG4gICAgfVxyXG4gICAgLmRhdGE6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDMsIDI0NiwgMjQ3LCAwLjcpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjpyZ2IoMjYsIDI2LCAyNik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICB9XHJcbn0gIFxyXG5cclxuXHJcbiAgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 11470:
/*!***************************************!*\
  !*** ./src/app/models/credentials.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   userCredentials: () => (/* binding */ userCredentials)
/* harmony export */ });
const userCredentials = [{
  'username': 'Harshini',
  'password': 'Harshk003@'
}, {
  'username': 'Harine',
  'password': 'Harine1'
}, {
  'username': 'Shruthika',
  'password': 'Shruthika1'
}, {
  'username': 'Tinu',
  'password': 'Tinu1'
}, {
  'username': 'Santhosh',
  'password': 'Santhosh1'
}];

/***/ }),

/***/ 91584:
/*!*********************************!*\
  !*** ./src/app/models/icons.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   icons: () => (/* binding */ icons)
/* harmony export */ });
const icons = {
  sign_out: 'pi pi-sign-out',
  attachment: 'pi pi-paperclip',
  tick: 'pi pi-check-circle',
  wrong: 'pi pi-times-circle',
  wait: 'pi pi-hourglass',
  post: 'pi pi-send',
  home: 'pi pi-home'
};

/***/ }),

/***/ 84403:
/*!********************************!*\
  !*** ./src/app/models/urls.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urls: () => (/* binding */ urls)
/* harmony export */ });
const urls = {
  homeDetails: '/api/homeDetails',
  summaryDetails: '/api/summaryDetails'
};

/***/ }),

/***/ 50424:
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var src_app_models_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/icons */ 91584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 19045);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loader.service */ 1839);
/* harmony import */ var src_app_services_update_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/update-api.service */ 52904);
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toaster.service */ 48884);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/dialog */ 53311);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ 72602);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/table/table.component */ 91929);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header/header.component */ 6471);
















function HomeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "ngx-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    width: "30vw"
  };
};
class HomeComponent {
  constructor(activated, api, load, updateApi, toaster, messageService) {
    this.activated = activated;
    this.api = api;
    this.load = load;
    this.updateApi = updateApi;
    this.toaster = toaster;
    this.messageService = messageService;
    this.homeDetails = [];
    this.visible = false;
    this.icons = src_app_models_icons__WEBPACK_IMPORTED_MODULE_1__.icons;
  }
  ngOnInit() {
    this.getRole();
    this.getHomeDetails();
    this.updateApiCall();
    this.showToaster();
  }
  getRole() {
    this.activated.paramMap?.subscribe(response => {
      this.role = response?.get('role');
    });
  }
  getCurrencySymbol(money) {
    return `$${money}`;
  }
  getHomeDetails() {
    this.load?.showLoader();
    this.api?.getHomeDetails()?.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(response => {
      return response.map(item => {
        item.loan_amount = this.getCurrencySymbol(item?.loan_amount);
        item.loan_date = moment__WEBPACK_IMPORTED_MODULE_0__(new Date(item.loan_date)).format('YYYY-MM-DD');
        return item;
      });
    }))?.subscribe({
      next: response => {
        this.load.hideLoader();
        this.homeDetails = response;
      },
      error: error => {
        this.load.hideLoader();
        if (error.status = 404) this.visible = true;
      }
    });
  }
  updateApiCall() {
    this.updateApi?.updateApiValue.subscribe(value => {
      if (value) {
        this.getHomeDetails();
      }
    });
  }
  showToaster() {
    const subscription = this.toaster?.toaster$?.subscribe(value => {
      if (value) {
        switch (value) {
          case 'approved':
            this.toaster?.showSuccessToaster();
            this.toaster?.toaster$.next('null');
            break;
          case 'progress':
            this.toaster?.showWaitToaster();
            this.toaster?.toaster$.next('null');
            break;
          case 'denied':
            this.toaster?.showDenyToaster();
            this.toaster?.toaster$.next('null');
            break;
        }
      }
    });
    subscription.unsubscribe();
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_3__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_update_api_service__WEBPACK_IMPORTED_MODULE_4__.UpdateApiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_5__.ToasterService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.MessageService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 9,
    vars: 8,
    consts: [[1, "container"], ["class", "spinner", 4, "ngIf"], ["header", "Error", 3, "visible", "modal", "visibleChange"], [3, "className"], [3, "homeDetails"], [1, "spinner"], ["type", "ball-scale-multiple", "bdColor", "rgba(0, 0, 0, 1)", "template", "<img src='assets/loader.gif' />"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "p-dialog", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("visibleChange", function HomeComponent_Template_p_dialog_visibleChange_3_listener($event) {
          return ctx.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, " 404 Error ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "p-toast")(8, "app-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.load == null ? null : ctx.load.loaderValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", ctx.visible)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("className", ctx.icons.wrong);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("homeDetails", ctx.homeDetails);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, primeng_toast__WEBPACK_IMPORTED_MODULE_13__.Toast, primeng_dialog__WEBPACK_IMPORTED_MODULE_14__.Dialog, ngx_spinner__WEBPACK_IMPORTED_MODULE_15__.NgxSpinnerComponent, _components_table_table_component__WEBPACK_IMPORTED_MODULE_6__.TableComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__.HeaderComponent],
    styles: [".container[_ngcontent-%COMP%] {\n  background: url(\"/assets/green 3.png\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: auto;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n  .p-dialog {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDRyx1QkFBQTtBQUdIIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2dyZWVuIDMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnNwaW5uZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOjpuZy1kZWVwIC5wLWRpYWxvZ3tcclxuICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 13173:
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_app_models_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/models/credentials */ 11470);
/* harmony import */ var src_app_models_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/icons */ 91584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ 29140);
/* harmony import */ var src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toaster.service */ 48884);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/dialog */ 53311);
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/form.component */ 37477);









const _c0 = function () {
  return {
    width: "30vw"
  };
};
class LoginComponent {
  constructor(route, storage, toasterService) {
    this.route = route;
    this.storage = storage;
    this.toasterService = toasterService;
    this.username = '';
    this.visible = false;
    this.icons = src_app_models_icons__WEBPACK_IMPORTED_MODULE_1__.icons;
  }
  navigateHome(role) {
    this.role = role;
    if (this.username && this.password) this.checkValidation();
  }
  sendName(name) {
    this.username = name;
  }
  sendPassword(password) {
    this.password = password;
  }
  checkValidation() {
    const valid = src_app_models_credentials__WEBPACK_IMPORTED_MODULE_0__.userCredentials.find(usercredentials => {
      return this.username === usercredentials.username && this.password === usercredentials.password;
    });
    if (valid) {
      this.storage?.storeRole(this.role);
      this.storage?.storeValue(this.username);
      this.route?.navigate(['/home']);
    } else {
      console.log("Error" + valid);
      this.toasterService.showDenyToaster();
    }
  }
  static #_ = this.ɵfac = function LoginComponent_Factory(t) {
    return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_toaster_service__WEBPACK_IMPORTED_MODULE_3__.ToasterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: LoginComponent,
    selectors: [["app-login"]],
    decls: 7,
    vars: 6,
    consts: [["header", "Error", 3, "visible", "modal", "visibleChange"], [3, "className"], [1, "container"], [3, "emitName", "emitPassword", "emitRole"]],
    template: function LoginComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p-dialog", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("visibleChange", function LoginComponent_Template_p_dialog_visibleChange_0_listener($event) {
          return ctx.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " User Credentials are not valid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "p-toast");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2)(6, "app-form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("emitName", function LoginComponent_Template_app_form_emitName_6_listener($event) {
          return ctx.sendName($event);
        })("emitPassword", function LoginComponent_Template_app_form_emitPassword_6_listener($event) {
          return ctx.sendPassword($event);
        })("emitRole", function LoginComponent_Template_app_form_emitRole_6_listener($event) {
          return ctx.navigateHome($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", ctx.visible)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("className", ctx.icons.wrong);
      }
    },
    dependencies: [primeng_toast__WEBPACK_IMPORTED_MODULE_7__.Toast, primeng_dialog__WEBPACK_IMPORTED_MODULE_8__.Dialog, _components_form_form_component__WEBPACK_IMPORTED_MODULE_4__.FormComponent],
    styles: [".container[_ngcontent-%COMP%] {\n  background: url(\"/assets/green 10.png\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2dyZWVuIDEwLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 414:
/*!****************************************************!*\
  !*** ./src/app/pages/summary/summary.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SummaryComponent: () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 79736);
/* harmony import */ var src_app_models_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/icons */ 91584);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 19045);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ 29140);
/* harmony import */ var src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loader.service */ 1839);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dialog */ 53311);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 72602);
/* harmony import */ var _components_full_details_full_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/full-details/full-details.component */ 70026);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/header/header.component */ 6471);













function SummaryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "ngx-spinner", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return {
    width: "30vw"
  };
};
class SummaryComponent {
  constructor(activated, api, storage, load) {
    this.activated = activated;
    this.api = api;
    this.storage = storage;
    this.load = load;
    this.summaryDetails = [];
    this.visible = false;
    this.icons = src_app_models_icons__WEBPACK_IMPORTED_MODULE_1__.icons;
  }
  ngOnInit() {
    this.getId();
    this.getRole();
  }
  getId() {
    this.activated.paramMap?.subscribe(response => {
      this.id = response?.get('id');
      this.getSummaryDetails(this.id);
    });
  }
  getCurrencySymbol(money) {
    return `$${money}`;
  }
  getSummaryDetails(id) {
    this.load?.showLoader();
    this.api?.getSummaryDetails(id)?.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.map)(value => {
      value.dob = moment__WEBPACK_IMPORTED_MODULE_0__(new Date(value.dob)).format('DD-MM-YYYY');
      value.loan_date = moment__WEBPACK_IMPORTED_MODULE_0__(new Date(value.loan_date)).format('DD-MM-YYYY');
      value.income = this.getCurrencySymbol(value?.income);
      return value;
    })).subscribe({
      next: response => {
        this.load?.hideLoader();
        this.summaryDetails = response;
      },
      error: error => {
        this.load?.hideLoader();
        if (error.status === 404) this.visible = true;
      }
    });
  }
  getRole() {
    this.role = this.storage?.getRole();
  }
  static #_ = this.ɵfac = function SummaryComponent_Factory(t) {
    return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_loader_service__WEBPACK_IMPORTED_MODULE_4__.LoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SummaryComponent,
    selectors: [["app-summary"]],
    decls: 8,
    vars: 10,
    consts: [[1, "container"], ["class", "spinner", 4, "ngIf"], ["header", "Error", 3, "visible", "modal", "visibleChange"], [3, "className"], [3, "summaryDetails", "role", "id"], [1, "spinner"], ["type", "ball-scale-multiple", "bdColor", "rgba(0, 0, 0, 1)", "template", "<img src='assets/loader.gif' />"]],
    template: function SummaryComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SummaryComponent_div_2_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p-dialog", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("visibleChange", function SummaryComponent_Template_p_dialog_visibleChange_3_listener($event) {
          return ctx.visible = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, " 404 Error ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-full-details", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.load == null ? null : ctx.load.loaderValue());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("visible", ctx.visible)("modal", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("className", ctx.icons.wrong);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("summaryDetails", ctx.summaryDetails)("role", ctx.role)("id", ctx.id);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_dialog__WEBPACK_IMPORTED_MODULE_11__.Dialog, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _components_full_details_full_details_component__WEBPACK_IMPORTED_MODULE_5__.FullDetailsComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent],
    styles: [".container[_ngcontent-%COMP%] {\n  background: url(\"/assets/green 3.png\");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  height: auto;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n  .p-dialog {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0NBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSx1QkFBQTtBQUdKIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6dXJsKCcvYXNzZXRzL2dyZWVuIDMucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnNwaW5uZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuOjpuZy1kZWVwIC5wLWRpYWxvZ3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 53960:
/*!***********************************!*\
  !*** ./src/app/primeng.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   primeNgModule: () => (/* binding */ primeNgModule)
/* harmony export */ });
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/inputtext */ 10873);
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form/form.component */ 37477);
/* harmony import */ var _components_full_details_full_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/full-details/full-details.component */ 70026);
/* harmony import */ var _components_table_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/table/table.component */ 91929);
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ 50424);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ 13173);
/* harmony import */ var _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/summary/summary.component */ 414);
/* harmony import */ var primeng_password__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/password */ 73219);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/radiobutton */ 63313);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/button */ 32947);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/table */ 56192);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/panel */ 16110);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 24987);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/fileupload */ 88285);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/progressspinner */ 17355);
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/progressbar */ 22506);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/toast */ 68313);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/api */ 98026);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/dialog */ 53311);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/tooltip */ 31251);
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/messages */ 79404);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 66401);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-spinner */ 72602);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 61699);





























class primeNgModule {
  static #_ = this.ɵfac = function primeNgModule_Factory(t) {
    return new (t || primeNgModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: primeNgModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [primeng_api__WEBPACK_IMPORTED_MODULE_9__.MessageService],
    imports: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_password__WEBPACK_IMPORTED_MODULE_11__.PasswordModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__.RadioButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, primeng_panel__WEBPACK_IMPORTED_MODULE_17__.PanelModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__.FileUploadModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_21__.ProgressBarModule, primeng_toast__WEBPACK_IMPORTED_MODULE_22__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_24__.TooltipModule, primeng_messages__WEBPACK_IMPORTED_MODULE_25__.MessagesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule.forRoot({
      type: 'ball-scale-multiple'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](primeNgModule, {
    declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_5__.SummaryComponent, _components_form_form_component__WEBPACK_IMPORTED_MODULE_0__.FormComponent, _components_table_table_component__WEBPACK_IMPORTED_MODULE_2__.TableComponent, _components_full_details_full_details_component__WEBPACK_IMPORTED_MODULE_1__.FullDetailsComponent, _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent],
    imports: [primeng_inputtext__WEBPACK_IMPORTED_MODULE_10__.InputTextModule, primeng_password__WEBPACK_IMPORTED_MODULE_11__.PasswordModule, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__.RadioButtonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_14__.ButtonModule, primeng_table__WEBPACK_IMPORTED_MODULE_15__.TableModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, primeng_panel__WEBPACK_IMPORTED_MODULE_17__.PanelModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, primeng_fileupload__WEBPACK_IMPORTED_MODULE_19__.FileUploadModule, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_20__.ProgressSpinnerModule, primeng_progressbar__WEBPACK_IMPORTED_MODULE_21__.ProgressBarModule, primeng_toast__WEBPACK_IMPORTED_MODULE_22__.ToastModule, primeng_dialog__WEBPACK_IMPORTED_MODULE_23__.DialogModule, primeng_tooltip__WEBPACK_IMPORTED_MODULE_24__.TooltipModule, primeng_messages__WEBPACK_IMPORTED_MODULE_25__.MessagesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_26__.NgxSpinnerModule]
  });
})();

/***/ }),

/***/ 19045:
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiService: () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var _models_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/urls */ 84403);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class ApiService {
  constructor(http) {
    this.http = http;
    this.urls = _models_urls__WEBPACK_IMPORTED_MODULE_0__.urls;
  }
  getHomeDetails() {
    return this.http.get(_models_urls__WEBPACK_IMPORTED_MODULE_0__.urls.homeDetails);
  }
  getSummaryDetails(id) {
    return this.http.get(`${_models_urls__WEBPACK_IMPORTED_MODULE_0__.urls.summaryDetails}/${id}`);
  }
  putStatus(id, data) {
    return this.http.put(`${_models_urls__WEBPACK_IMPORTED_MODULE_0__.urls.homeDetails}/${id}`, data);
  }
  static #_ = this.ɵfac = function ApiService_Factory(t) {
    return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ApiService,
    factory: ApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1839:
/*!********************************************!*\
  !*** ./src/app/services/loader.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ 72602);


class LoaderService {
  constructor(spinner) {
    this.spinner = spinner;
    this.loader = false;
  }
  showLoader() {
    this.spinner.show();
    this.loader = true;
  }
  hideLoader() {
    this.spinner.hide();
    this.loader = false;
  }
  loaderValue() {
    return this.loader;
  }
  static #_ = this.ɵfac = function LoaderService_Factory(t) {
    return new (t || LoaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_1__.NgxSpinnerService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: LoaderService,
    factory: LoaderService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 29140:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class StorageService {
  constructor() {
    this.role = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('null');
  }
  storeValue(name) {
    sessionStorage.setItem('username', name);
  }
  getValue() {
    return sessionStorage.getItem('username');
  }
  storeRole(role) {
    sessionStorage.setItem('role', role);
  }
  getRole() {
    return sessionStorage.getItem('role');
  }
  removeValue() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('role');
  }
  static #_ = this.ɵfac = function StorageService_Factory(t) {
    return new (t || StorageService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: StorageService,
    factory: StorageService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 48884:
/*!*********************************************!*\
  !*** ./src/app/services/toaster.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToasterService: () => (/* binding */ ToasterService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 98026);



class ToasterService {
  constructor(messageService) {
    this.messageService = messageService;
    this.toaster$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('null');
  }
  showSuccessToaster() {
    setTimeout(() => {
      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Loan approved successfully'
      });
    }, 100);
  }
  showWaitToaster() {
    setTimeout(() => {
      this.messageService.add({
        severity: 'info',
        summary: 'Wait',
        detail: 'Loan is in progress'
      });
    }, 500);
  }
  showDenyToaster() {
    setTimeout(() => {
      this.messageService.add({
        severity: 'error',
        summary: 'Deny',
        detail: 'Loan Denied'
      });
    }, 500);
  }
  static #_ = this.ɵfac = function ToasterService_Factory(t) {
    return new (t || ToasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ToasterService,
    factory: ToasterService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 52904:
/*!************************************************!*\
  !*** ./src/app/services/update-api.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UpdateApiService: () => (/* binding */ UpdateApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 72513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);


class UpdateApiService {
  constructor() {
    this.updateApiValue = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  static #_ = this.ɵfac = function UpdateApiService_Factory(t) {
    return new (t || UpdateApiService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UpdateApiService,
    factory: UpdateApiService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 14913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 36480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 78629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 35528,
	"./af.js": 35528,
	"./ar": 1036,
	"./ar-dz": 17579,
	"./ar-dz.js": 17579,
	"./ar-kw": 69588,
	"./ar-kw.js": 69588,
	"./ar-ly": 11650,
	"./ar-ly.js": 11650,
	"./ar-ma": 93258,
	"./ar-ma.js": 93258,
	"./ar-sa": 54085,
	"./ar-sa.js": 54085,
	"./ar-tn": 90287,
	"./ar-tn.js": 90287,
	"./ar.js": 1036,
	"./az": 89757,
	"./az.js": 89757,
	"./be": 59620,
	"./be.js": 59620,
	"./bg": 31139,
	"./bg.js": 31139,
	"./bm": 4042,
	"./bm.js": 4042,
	"./bn": 19641,
	"./bn-bd": 19126,
	"./bn-bd.js": 19126,
	"./bn.js": 19641,
	"./bo": 494,
	"./bo.js": 494,
	"./br": 20934,
	"./br.js": 20934,
	"./bs": 26274,
	"./bs.js": 26274,
	"./ca": 45831,
	"./ca.js": 45831,
	"./cs": 92354,
	"./cs.js": 92354,
	"./cv": 79692,
	"./cv.js": 79692,
	"./cy": 58774,
	"./cy.js": 58774,
	"./da": 38955,
	"./da.js": 38955,
	"./de": 21557,
	"./de-at": 24954,
	"./de-at.js": 24954,
	"./de-ch": 81881,
	"./de-ch.js": 81881,
	"./de.js": 21557,
	"./dv": 16475,
	"./dv.js": 16475,
	"./el": 38877,
	"./el.js": 38877,
	"./en-au": 70454,
	"./en-au.js": 70454,
	"./en-ca": 67356,
	"./en-ca.js": 67356,
	"./en-gb": 10456,
	"./en-gb.js": 10456,
	"./en-ie": 28789,
	"./en-ie.js": 28789,
	"./en-il": 85471,
	"./en-il.js": 85471,
	"./en-in": 39664,
	"./en-in.js": 39664,
	"./en-nz": 97672,
	"./en-nz.js": 97672,
	"./en-sg": 80805,
	"./en-sg.js": 80805,
	"./eo": 87390,
	"./eo.js": 87390,
	"./es": 1564,
	"./es-do": 51473,
	"./es-do.js": 51473,
	"./es-mx": 92089,
	"./es-mx.js": 92089,
	"./es-us": 84156,
	"./es-us.js": 84156,
	"./es.js": 1564,
	"./et": 6513,
	"./et.js": 6513,
	"./eu": 7856,
	"./eu.js": 7856,
	"./fa": 2378,
	"./fa.js": 2378,
	"./fi": 22687,
	"./fi.js": 22687,
	"./fil": 80032,
	"./fil.js": 80032,
	"./fo": 46845,
	"./fo.js": 46845,
	"./fr": 8875,
	"./fr-ca": 56425,
	"./fr-ca.js": 56425,
	"./fr-ch": 41746,
	"./fr-ch.js": 41746,
	"./fr.js": 8875,
	"./fy": 67037,
	"./fy.js": 67037,
	"./ga": 11217,
	"./ga.js": 11217,
	"./gd": 37010,
	"./gd.js": 37010,
	"./gl": 51931,
	"./gl.js": 51931,
	"./gom-deva": 64488,
	"./gom-deva.js": 64488,
	"./gom-latn": 8032,
	"./gom-latn.js": 8032,
	"./gu": 34984,
	"./gu.js": 34984,
	"./he": 69090,
	"./he.js": 69090,
	"./hi": 42085,
	"./hi.js": 42085,
	"./hr": 38787,
	"./hr.js": 38787,
	"./hu": 2901,
	"./hu.js": 2901,
	"./hy-am": 59819,
	"./hy-am.js": 59819,
	"./id": 44074,
	"./id.js": 44074,
	"./is": 70715,
	"./is.js": 70715,
	"./it": 31746,
	"./it-ch": 77040,
	"./it-ch.js": 77040,
	"./it.js": 31746,
	"./ja": 3180,
	"./ja.js": 3180,
	"./jv": 34346,
	"./jv.js": 34346,
	"./ka": 65538,
	"./ka.js": 65538,
	"./kk": 79772,
	"./kk.js": 79772,
	"./km": 87905,
	"./km.js": 87905,
	"./kn": 79125,
	"./kn.js": 79125,
	"./ko": 69140,
	"./ko.js": 69140,
	"./ku": 2354,
	"./ku.js": 2354,
	"./ky": 63768,
	"./ky.js": 63768,
	"./lb": 14016,
	"./lb.js": 14016,
	"./lo": 83169,
	"./lo.js": 83169,
	"./lt": 62353,
	"./lt.js": 62353,
	"./lv": 83243,
	"./lv.js": 83243,
	"./me": 52338,
	"./me.js": 52338,
	"./mi": 35555,
	"./mi.js": 35555,
	"./mk": 85794,
	"./mk.js": 85794,
	"./ml": 53151,
	"./ml.js": 53151,
	"./mn": 46458,
	"./mn.js": 46458,
	"./mr": 69165,
	"./mr.js": 69165,
	"./ms": 8680,
	"./ms-my": 87477,
	"./ms-my.js": 87477,
	"./ms.js": 8680,
	"./mt": 79684,
	"./mt.js": 79684,
	"./my": 40285,
	"./my.js": 40285,
	"./nb": 45922,
	"./nb.js": 45922,
	"./ne": 29040,
	"./ne.js": 29040,
	"./nl": 5066,
	"./nl-be": 74460,
	"./nl-be.js": 74460,
	"./nl.js": 5066,
	"./nn": 53693,
	"./nn.js": 53693,
	"./oc-lnc": 88676,
	"./oc-lnc.js": 88676,
	"./pa-in": 92341,
	"./pa-in.js": 92341,
	"./pl": 57416,
	"./pl.js": 57416,
	"./pt": 84344,
	"./pt-br": 30113,
	"./pt-br.js": 30113,
	"./pt.js": 84344,
	"./ro": 72643,
	"./ro.js": 72643,
	"./ru": 61305,
	"./ru.js": 61305,
	"./sd": 96095,
	"./sd.js": 96095,
	"./se": 74486,
	"./se.js": 74486,
	"./si": 58742,
	"./si.js": 58742,
	"./sk": 96722,
	"./sk.js": 96722,
	"./sl": 3345,
	"./sl.js": 3345,
	"./sq": 52416,
	"./sq.js": 52416,
	"./sr": 39450,
	"./sr-cyrl": 50501,
	"./sr-cyrl.js": 50501,
	"./sr.js": 39450,
	"./ss": 32222,
	"./ss.js": 32222,
	"./sv": 9454,
	"./sv.js": 9454,
	"./sw": 19638,
	"./sw.js": 19638,
	"./ta": 96494,
	"./ta.js": 96494,
	"./te": 94435,
	"./te.js": 94435,
	"./tet": 25003,
	"./tet.js": 25003,
	"./tg": 13706,
	"./tg.js": 13706,
	"./th": 16025,
	"./th.js": 16025,
	"./tk": 59780,
	"./tk.js": 59780,
	"./tl-ph": 22068,
	"./tl-ph.js": 22068,
	"./tlh": 39167,
	"./tlh.js": 39167,
	"./tr": 32494,
	"./tr.js": 32494,
	"./tzl": 58707,
	"./tzl.js": 58707,
	"./tzm": 91296,
	"./tzm-latn": 34532,
	"./tzm-latn.js": 34532,
	"./tzm.js": 91296,
	"./ug-cn": 12086,
	"./ug-cn.js": 12086,
	"./uk": 85069,
	"./uk.js": 85069,
	"./ur": 29304,
	"./ur.js": 29304,
	"./uz": 95115,
	"./uz-latn": 97609,
	"./uz-latn.js": 97609,
	"./uz.js": 95115,
	"./vi": 34802,
	"./vi.js": 34802,
	"./x-pseudo": 65605,
	"./x-pseudo.js": 65605,
	"./yo": 88456,
	"./yo.js": 88456,
	"./zh-cn": 23272,
	"./zh-cn.js": 23272,
	"./zh-hk": 9402,
	"./zh-hk.js": 9402,
	"./zh-mo": 48101,
	"./zh-mo.js": 48101,
	"./zh-tw": 40262,
	"./zh-tw.js": 40262
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map