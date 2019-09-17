(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/layout/component/nav/nav.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/component/nav/nav.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb21wb25lbnQvbmF2L25hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/layout/component/nav/nav.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/component/nav/nav.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/component/nav/nav.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/component/nav/nav.component.ts ***!
  \*******************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(translate, router) {
        var _this = this;
        this.translate = translate;
        this.router = router;
        this.collapsedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        this.router.events.subscribe(function (val) {
            if (val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] &&
                window.innerWidth <= 992 &&
                _this.isToggled()) {
                _this.toggleSidebar();
            }
        });
    }
    NavComponent.prototype.ngOnInit = function () {
        this.isActive = false;
        this.collapsed = false;
        this.showMenu = '';
        this.pushRightClass = 'push-right';
    };
    NavComponent.prototype.eventCalled = function () {
        this.isActive = !this.isActive;
    };
    NavComponent.prototype.addExpandClass = function (element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
    };
    NavComponent.prototype.toggleCollapsed = function () {
        this.collapsed = !this.collapsed;
        this.collapsedEvent.emit(this.collapsed);
    };
    NavComponent.prototype.isToggled = function () {
        var dom = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    };
    NavComponent.prototype.toggleSidebar = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    };
    NavComponent.prototype.rltAndLtr = function () {
        var dom = document.querySelector('body');
        dom.classList.toggle('rtl');
    };
    NavComponent.prototype.changeLang = function (language) {
        this.translate.use(language);
    };
    NavComponent.prototype.onLoggedout = function () {
        localStorage.removeItem('isLoggedin');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NavComponent.prototype, "collapsedEvent", void 0);
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/layout/component/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/layout/component/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");




var routes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'adminDashboard', pathMatch: 'prefix' },
            { path: 'adminDashboard', loadChildren: './admin/adminDashboard.module#AdminDashboardModule' },
            { path: 'addEmployee', loadChildren: './onBoardEmployee/employee.module#EmployeeModule' },
            { path: 'addCustomer', loadChildren: './onBoardCustomer/customer.module#CustomerModule' },
            { path: 'viewEmployee', loadChildren: './Employee/employee.module#EmployeeModule' },
            { path: 'AgentAssignment', loadChildren: './AssignedAgent/assignedAgent.module#AssignedAgentModule' },
            { path: 'campaign', loadChildren: './campaign/campaign.module#CampaignModule' },
            { path: 'editCampaign', loadChildren: './editCampaign/editCampaign.module#EditCampaignModule' },
            { path: 'demoRoute', loadChildren: './demo/demo.module#DemoModule' },
            { path: 'manager', loadChildren: './managerDetails/manager.module#ManagerModule' },
            { path: 'customer', loadChildren: './viewCustomer/customer.module#CustomerModule' },
            { path: 'callInfo', loadChildren: './callInfo/callInfo.module#CallInfoModule' },
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidenav-container {\r\n  position: relative;\r\n  z-index: -1 !important;\r\n  box-shadow: 0 0 0 0 !important;\r\n}\r\n\r\n/* #mat-toolbar {\r\n  position: relative;\r\n  z-index: -12;\r\n} */\r\n\r\n.example-toolbar {\r\n  padding: 0 14px;\r\n}\r\n\r\n.tbar {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  z-index: 2;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\n.add-files-btn {\r\n    float: right;\r\n  }\r\n\r\n:host {\r\n    height: 100%;\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n  }\r\n\r\n.actions {\r\n    justify-content: flex-end;\r\n  }\r\n\r\n.container {\r\n    height: 100%;\r\n  }\r\n\r\n.active-list-item {\r\n    color: #3F51B5 !important; /* Note: You could also use a custom theme */\r\n  }\r\n\r\n#btn{\r\n  margin: 2% 2% 2% 2%;\r\n}\r\n\r\nbutton.active{\r\n  background-color:mediumpurple;\r\n}\r\n\r\n.is-active {\r\n  background-color: red;\r\n  margin:1% 1% 1% 1%;\r\n}\r\n\r\n@media screen and (max-width: 700px) and (min-width: 400px) { \r\n  .heading-left { left: -0.5%; }\r\n}\r\n\r\n#profile{\r\n  width:200px;\r\n}\r\n\r\nbutton:focus, button:active {\r\n  outline: none !important;\r\n  box-shadow: none !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7OztHQUdHOztBQUNIO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSx5QkFBeUIsRUFBRSw0Q0FBNEM7RUFDekU7O0FBR0Y7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCLFdBQVcsRUFBRTtBQUMvQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lkZW5hdi1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAtMSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogI21hdC10b29sYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogLTEyO1xyXG59ICovXHJcbi5leGFtcGxlLXRvb2xiYXIge1xyXG4gIHBhZGRpbmc6IDAgMTRweDtcclxufVxyXG5cclxuLnRiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hZGQtZmlsZXMtYnRuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5hY3RpdmUtbGlzdC1pdGVtIHtcclxuICAgIGNvbG9yOiAjM0Y1MUI1ICFpbXBvcnRhbnQ7IC8qIE5vdGU6IFlvdSBjb3VsZCBhbHNvIHVzZSBhIGN1c3RvbSB0aGVtZSAqL1xyXG4gIH1cclxuXHJcbiAgXHJcbiNidG57XHJcbiAgbWFyZ2luOiAyJSAyJSAyJSAyJTtcclxufVxyXG5cclxuYnV0dG9uLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOm1lZGl1bXB1cnBsZTtcclxufVxyXG4uaXMtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luOjElIDElIDElIDElO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkgYW5kIChtaW4td2lkdGg6IDQwMHB4KSB7IFxyXG4gIC5oZWFkaW5nLWxlZnQgeyBsZWZ0OiAtMC41JTsgfVxyXG59XHJcblxyXG4jcHJvZmlsZXtcclxuICB3aWR0aDoyMDBweDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzLCBidXR0b246YWN0aXZlIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-progress-bar *ngIf=\"!loading\" mode=\"determinate\" value=\"100\"></mat-progress-bar>\r\n<mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar> -->\r\n<mat-toolbar id=\"mainToolbar\" class=\"mat-elevation-z6 tbar\" color=\"primary\">\r\n  <mat-icon (click)=\"onToolbarMenuToggle()\" id=\"toolbarMenu\">menu</mat-icon>\r\n  <h4 style=\"margin-left:1%\"> Auto Dialer </h4>\r\n  <span class=\"toolbar-spacer\"></span>\r\n\r\n  <mat-icon  class=\"toolbar-icon\" matBadge=\"5\" matBadgePosition=\"after\" matBadgeColor=\"warn\" style=\"margin:1%\"> email</mat-icon>\r\n  <mat-icon [matMenuTriggerFor]=\"notification\" class=\"toolbar-icon\" matBadge=\"12\" matBadgePosition=\"after\" matBadgeColor=\"accent\" style=\"margin:1%\">notifications</mat-icon>\r\n\r\n  <mat-icon class=\"toolbar-icon\" matBadge=\"3\" matBadgePosition=\"after\" matBadgeColor=\"warn\" style=\"margin:1%\">flag</mat-icon>\r\n \r\n  <img  [matMenuTriggerFor]=\"menu\" src=\"../../assets/men.jpg\" style=\"width:40px; height:40px;border-radius: 50%;margin:1%\">\r\n\r\n  <mat-icon  class=\"toolbar-icon\" >more_vert</mat-icon>\r\n\r\n    <mat-menu id=\"notification\" #notification=\"matMenu\" style=\"max-height:500px;\">\r\n    <img src=\"../../assets/men.jpg\" style=\"width:50px;height:50px; border-radius: 50%\"> Luv want to be friend with you.   \r\n    </mat-menu>  \r\n\r\n\r\n  \r\n  <mat-menu #menu=\"matMenu\">\r\n    <button id=\"profile\" mat-menu-item>\r\n        <mat-icon>person</mat-icon>\r\n      <span>My Profile</span>\r\n    </button>\r\n    \r\n    <button id=\"profile\" mat-menu-item >\r\n        <mat-icon>feedback</mat-icon>\r\n      <span>Feedback</span>\r\n    </button>\r\n    <button id=\"profile\" mat-menu-item >\r\n        <mat-icon> live_help</mat-icon>\r\n      <span>Help</span>\r\n    </button>\r\n    <button id=\"profile\" mat-menu-item >\r\n        <mat-icon>settings</mat-icon>\r\n      <span>Settings</span>\r\n    </button>\r\n    <button id=\"profile\" mat-menu-item (click)=\"logOut()\">\r\n      <!-- <mat-icon>exit_to_app</mat-icon> -->\r\n      <mat-icon>power_settings_new</mat-icon>\r\n      <span>Log Out</span>\r\n    </button>\r\n\r\n  </mat-menu>\r\n \r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"md-elevation-z15\" id=\"sidenavContainer\" fullscreen>\r\n\r\n  <mat-sidenav mode=\"side\" #sidenav id=\"sidenav\"  [class.menu-open]=\"isMenuOpen\" [class.menu-close]=\"!isMenuOpen\" opened>\r\n\r\n    <mat-list id=\"menus\">\r\n      <mat-card>\r\n        <mat-card-header>\r\n          <div mat-card-avatar class=\"avatar\"></div>\r\n\r\n          <mat-card-title>{{userName}}</mat-card-title>\r\n          <mat-card-subtitle>Admin</mat-card-subtitle>\r\n        </mat-card-header>\r\n      </mat-card>\r\n      <mat-list-item>\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/adminDashboard']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>dashboard</mat-icon>\r\n          Dashboard\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item  >\r\n      <button class=\"menu-item\" mat-flat-button  id=\"btn\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n        <mat-icon>trending_up</mat-icon>\r\n        Statistics\r\n      </button>\r\n    </mat-list-item>\r\n    \r\n\r\n      <mat-list-item >\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/campaign']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>view_list</mat-icon>\r\n          <!-- <a [routerLink]=\"['/employee']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\r\n                <span>Add Employee</span>\r\n            </a> -->\r\n          View Campaign\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item >\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/addCustomer']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>person_add</mat-icon>\r\n          <!-- <a [routerLink]=\"['/employee']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\r\n                <span>Add Employee</span>\r\n            </a> -->\r\n          Add Customer\r\n        </button>\r\n      </mat-list-item>\r\n      \r\n      <mat-list-item >\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/addEmployee']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>person_add</mat-icon>\r\n          <!-- <a [routerLink]=\"['/employee']\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\r\n                <i class=\"fa fa-fw fa-bar-chart-o\"></i>&nbsp;\r\n                <span>Add Employee</span>\r\n            </a> -->\r\n          On Board Employee\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item >\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>group</mat-icon>\r\n          View Employee\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item >\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/customer']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>group</mat-icon>\r\n          View Customer\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item >\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/callInfo']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon> call</mat-icon>\r\n          View Calls Details\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item >\r\n          <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/AgentAssignment']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n            <mat-icon>assignment</mat-icon>\r\n            Agent Assignment\r\n          </button>\r\n        </mat-list-item>\r\n      <!-- <mat-list-item>\r\n        <button class=\"menu-item\" mat-flat-button>\r\n          <mat-icon>group</mat-icon>\r\n          Agents\r\n        </button>\r\n      </mat-list-item> -->\r\n\r\n      <mat-list-item routerLinkActive=\"active-list-item\">\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/admin/demoRoute']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>work</mat-icon>\r\n          Project\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item routerLinkActive=\"active-list-item\" id=\"btn\">\r\n        <button class=\"menu-item\" mat-flat-button>\r\n          <mat-icon>settings_application</mat-icon>\r\n          Settings\r\n        </button>\r\n      </mat-list-item>\r\n\r\n    </mat-list>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content [ngStyle]=\"{ 'margin-left.px': contentMargin }\">\r\n     \r\n\r\n   <!--     <mat-progress-bar mode=\"determinate\" [value]=\"progress\"></mat-progress-bar> -->\r\n  \r\n    <router-outlet></router-outlet>\r\n\r\n  </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var LayoutComponent = /** @class */ (function () {
    function LayoutComponent(toastrService, _router, service) {
        // this.showLoadingindicator = true;
        // this._router.events.subscribe((routerEvent:Event )=>{
        //     if(routerEvent instanceof NavigationStart){
        //         this.showLoadingindicator = true;
        var _this = this;
        this.toastrService = toastrService;
        this._router = _router;
        this.service = service;
        this.progress = 10;
        this.loading = false;
        this.isMenuOpen = true;
        this.contentMargin = 240;
        //     }
        //     if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        //         setTimeout( () => { this.showLoadingindicator = false; }, 3000 );
        //     }
        // })
        //second loading
        this._router.events.subscribe(function (event) {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]: {
                    _this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]: {
                    setTimeout(function () {
                        _this.loading = false;
                    }, 2000);
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    LayoutComponent.prototype.ngOnInit = function () {
        this.userName = this.service.getUserName();
        console.log(this.userName);
    };
    LayoutComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    LayoutComponent.prototype.onToolbarMenuToggle = function () {
        console.log('On toolbar toggled', this.isMenuOpen);
        this.isMenuOpen = !this.isMenuOpen;
        if (!this.isMenuOpen) {
            this.contentMargin = 70;
        }
        else {
            this.contentMargin = 240;
        }
    };
    //logOut
    LayoutComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        this.showToaster();
        this._router.navigate(['/login']);
    };
    LayoutComponent.prototype.showToaster = function () {
        this.toastrService.success('LogOut Successful');
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"]])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/nav/nav.component */ "./src/app/layout/component/nav/nav.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");











// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_6__["LayoutRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"]
            ],
            declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map