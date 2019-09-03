(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manager-manager-module"],{

/***/ "./src/app/manager/manager-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/manager/manager-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRoutingModule", function() { return ManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager.component */ "./src/app/manager/manager.component.ts");




var routes = [
    {
        path: '',
        component: _manager_component__WEBPACK_IMPORTED_MODULE_3__["ManagerComponent"],
        children: [
            { path: '', redirectTo: 'managerDashboard', pathMatch: 'prefix' },
            { path: 'managerDashboard', loadChildren: './manager-dashboard/manager-dashboard.module#ManagerDashboardModule' },
            { path: 'viewCampaign', loadChildren: './viewCampaign/viewCampaign.module#ViewCampaignModule' },
        ]
    }
];
var ManagerRoutingModule = /** @class */ (function () {
    function ManagerRoutingModule() {
    }
    ManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManagerRoutingModule);
    return ManagerRoutingModule;
}());



/***/ }),

/***/ "./src/app/manager/manager.component.css":
/*!***********************************************!*\
  !*** ./src/app/manager/manager.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    width: 100%;\r\n  }\r\n\r\n  .add-files-btn {\r\n    float: right;\r\n  }\r\n\r\n  :host {\r\n    height: 100%;\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n  }\r\n\r\n  .actions {\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .container {\r\n    height: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlci9tYW5hZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2VyL21hbmFnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1maWxlcy1idG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/manager/manager.component.html":
/*!************************************************!*\
  !*** ./src/app/manager/manager.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar id=\"mainToolbar\" color=\"primary\" style=\"max-height:64px\">\r\n  <mat-icon (click)=\"onToolbarMenuToggle()\" id=\"toolbarMenu\">menu</mat-icon>\r\n  <h4 style=\"margin-left:1%\"> Auto Dialer </h4>\r\n        <span class=\"toolbar-spacer\"></span>\r\n        <mat-icon  class=\"toolbar-icon\" matBadge=\"8\" matBadgePosition=\"after\" matBadgeColor=\"warn\" style=\"margin:1%\"> email</mat-icon>\r\n        <mat-icon [matMenuTriggerFor]=\"notification\" class=\"toolbar-icon\" matBadge=\"8\" matBadgePosition=\"after\" matBadgeColor=\"accent\" style=\"margin:1%\">notifications</mat-icon>\r\n       \r\n        <img  [matMenuTriggerFor]=\"menu\" src=\"../../assets/men.jpg\" style=\"width:40px; height:40px;border-radius: 50%;margin:1%\">\r\n      \r\n          <mat-menu id=\"notification\" #notification=\"matMenu\" style=\"max-height:500px;\">\r\n          <img src=\"../../assets/men.jpg\" style=\"width:50px;height:50px; border-radius: 50%\"> Luv want to be friend with you.   \r\n          </mat-menu>  \r\n        <button mat-icon-button>\r\n            <mat-icon (click)=\"sideNav.toggle()\">apps</mat-icon>\r\n          </button>\r\n        \r\n          <mat-menu #menu=\"matMenu\">\r\n            <button id=\"profile\" mat-menu-item>\r\n                <mat-icon>person</mat-icon>\r\n              <span>My Profile</span>\r\n            </button>\r\n            \r\n            <button id=\"profile\" mat-menu-item >\r\n                <mat-icon>feedback</mat-icon>\r\n              <span>Feedback</span>\r\n            </button>\r\n            <button id=\"profile\" mat-menu-item >\r\n                <mat-icon> live_help</mat-icon>\r\n              <span>Help</span>\r\n            </button>\r\n            <button id=\"profile\" mat-menu-item >\r\n                <mat-icon>settings</mat-icon>\r\n              <span>Settings</span>\r\n            </button>\r\n            <button id=\"profile\" mat-menu-item (click)=\"logOut()\">\r\n              <!-- <mat-icon>exit_to_app</mat-icon> -->\r\n              <mat-icon>power_settings_new</mat-icon>\r\n              <span>Log Out</span>\r\n            </button>\r\n      \r\n        </mat-menu>\r\n       \r\n      </mat-toolbar>\r\n      \r\n      <mat-sidenav-container\r\n        id=\"sidenavContainer\"\r\n       fullscreen>\r\n        <mat-sidenav\r\n          mode=\"side\"\r\n          #sidenav\r\n          id=\"sidenav\"\r\n          [class.menu-open]=\"isMenuOpen\"\r\n          [class.menu-close]=\"!isMenuOpen\"\r\n          opened>\r\n          \r\n          <mat-list id=\"menus\">\r\n            <mat-card>\r\n              <mat-card-header>\r\n                <div \r\n                  mat-card-avatar \r\n                  class=\"avatar\"></div>\r\n      \r\n                <mat-card-title>Anoop Jain Manager</mat-card-title>\r\n                <mat-card-subtitle>Internal</mat-card-subtitle>\r\n              </mat-card-header>\r\n            </mat-card>\r\n            <mat-list-item >\r\n              <button  class=\"menu-item\" mat-flat-button [routerLink]=\"['/manager/managerDashboard']\" routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n                <mat-icon>dashboard</mat-icon>\r\n              Dashboard</button>\r\n            </mat-list-item>     \r\n      <mat-list-item>\r\n        <button  class=\"menu-item\" mat-flat-button  [routerLink]=\"['/manager/viewCampaign']\" routerLinkActive=\"active-list-item\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>view_list</mat-icon>\r\n          View Campaign\r\n       </button>\r\n      </mat-list-item>\r\n\r\n              <mat-list-item>\r\n                  <button \r\n                  class=\"menu-item\"\r\n                    mat-flat-button>\r\n                    <mat-icon>settings_application</mat-icon>\r\n                  Settings</button>\r\n                </mat-list-item>\r\n      \r\n          </mat-list>\r\n        </mat-sidenav>\r\n      \r\n        <mat-sidenav-content    [ngStyle]=\"{ 'margin-left.px': contentMargin }\" >\r\n\r\n      \r\n        \r\n        <router-outlet></router-outlet>\r\n      \r\n        </mat-sidenav-content>\r\n      \r\n      </mat-sidenav-container>\r\n    \r\n      \r\n      \r\n      \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    \r\n    "

/***/ }),

/***/ "./src/app/manager/manager.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manager/manager.component.ts ***!
  \**********************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autoDialer.service */ "./src/app/autoDialer.service.ts");




var ManagerComponent = /** @class */ (function () {
    function ManagerComponent(_router, service) {
        var _this = this;
        this._router = _router;
        this.service = service;
        this.ViewCompaignboolean = false;
        this.AllCompaign = [];
        // for chart
        this.BarChart = [];
        this.isMenuOpen = true;
        this.contentMargin = 240;
        // dummyData = this.service.getDummyData();
        this.dummyData = this.AllCompaign;
        this.displayDummyData = ['S No', 'campingname', 'startdate', 'getCreatedByname', 'assignedtoByname', 'createdAt', 'campingmembers'];
        this.showLoadingindicator = true;
        this._router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.showLoadingindicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                setTimeout(function () {
                    _this.showLoadingindicator = false;
                }, 2000);
            }
        });
    }
    ManagerComponent.prototype.ngOnInit = function () { };
    ManagerComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    ManagerComponent.prototype.onToolbarMenuToggle = function () {
        //   console.log('On toolbar toggled', this.isMenuOpen);
        this.isMenuOpen = !this.isMenuOpen;
        if (!this.isMenuOpen) {
            this.contentMargin = 70;
        }
        else {
            this.contentMargin = 240;
        }
    };
    ManagerComponent.prototype.viewCampaign = function () {
        var _this = this;
        alert('msg');
        this.service.campaignAssignedToManager().subscribe(function (data) {
            if (data['success'] === true) {
                _this.ViewCompaignboolean = true;
                _this.AllCompaign = data['message'];
            }
            console.log(data);
        });
    };
    //logOut
    ManagerComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        this._router.navigate(['/login']);
    };
    ManagerComponent.prototype.call = function () {
        alert('working');
        this._router.navigate(['/manager/managerDashboard']);
    };
    ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager',
            template: __webpack_require__(/*! ./manager.component.html */ "./src/app/manager/manager.component.html"),
            styles: [__webpack_require__(/*! ./manager.component.css */ "./src/app/manager/manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"]])
    ], ManagerComponent);
    return ManagerComponent;
}());



/***/ }),

/***/ "./src/app/manager/manager.module.ts":
/*!*******************************************!*\
  !*** ./src/app/manager/manager.module.ts ***!
  \*******************************************/
/*! exports provided: ManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _manager_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manager-routing.module */ "./src/app/manager/manager-routing.module.ts");
/* harmony import */ var _manager_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");









// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
var ManagerModule = /** @class */ (function () {
    function ManagerModule() {
    }
    ManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _manager_routing_module__WEBPACK_IMPORTED_MODULE_6__["ManagerRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            declarations: [_manager_component__WEBPACK_IMPORTED_MODULE_7__["ManagerComponent"]]
        })
    ], ManagerModule);
    return ManagerModule;
}());



/***/ })

}]);
//# sourceMappingURL=manager-manager-module.js.map