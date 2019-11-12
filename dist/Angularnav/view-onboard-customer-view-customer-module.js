(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-onboard-customer-view-customer-module"],{

/***/ "./src/app/agent/view-onboard-customer/view-customer-routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/agent/view-onboard-customer/view-customer-routing.ts ***!
  \**********************************************************************/
/*! exports provided: ViewCustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomerRoutingModule", function() { return ViewCustomerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-customer.component */ "./src/app/agent/view-onboard-customer/view-customer.component.ts");




var routes = [
    {
        path: '',
        component: _view_customer_component__WEBPACK_IMPORTED_MODULE_3__["ViewCustomerComponent"],
    }
];
var ViewCustomerRoutingModule = /** @class */ (function () {
    function ViewCustomerRoutingModule() {
    }
    ViewCustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ViewCustomerRoutingModule);
    return ViewCustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/view-onboard-customer/view-customer.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/agent/view-onboard-customer/view-customer.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\r\n  position: relative;\r\n    padding: 15px 15px 0 15px;\r\n    background-color:transparent;\r\n    font:normal\r\n}\r\n\r\n/*----agnet status ring------*/\r\n\r\n::ng-deep .circle{\r\nbackground-color:red;\r\n}\r\n\r\n::ng-deep .ringing{\r\nborder: 3px solid red;\r\n}\r\n\r\n.box{\r\n  position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #d2d6de;\r\n    margin-bottom: 20px;\r\n    /* width: 100%; */\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n    margin: 1% 1% 1% 1%;\r\n    /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n}\r\n\r\n.box-header{\r\n  color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\nsmall{\r\n    font-size: 15px;\r\n      display: inline-block;\r\n      padding-left: 4px;\r\n      font-weight: 300;\r\n      line-height: 1; \r\n      color: #777;\r\n      font-family: sans-serif;\r\n  }\r\n\r\n/*------------------Mat table -----RESPONSIVE-------*/\r\n\r\nbody {\r\n  font-family: 'Covered By Your Grace', cursive;\r\n  line-height: 1.25;\r\n  \r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .mat-table {\r\n    border: 0;\r\n    vertical-align: middle\r\n  }\r\n\r\n  .mat-table caption {\r\n    font-size: 1em;\r\n  }\r\n  \r\n\r\n  .mat-table .mat-row {\r\n    border-bottom: 5px solid #ddd;\r\n    display: block;\r\n  }\r\n  /*\r\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n  */\r\n  .mat-table .mat-cell {\r\n    border-bottom: 1px solid #ddd;\r\n    display: block;\r\n    font-size: 1em;\r\n    text-align: right;\r\n    margin: 2% 2% 2% 2%;\r\n    /* font-weight: bold; */\r\n    height:30px;\r\n    /* margin-bottom: 4%; */\r\n  }\r\n  .mat-table .mat-cell:before {\r\n    /*\r\n    * aria-label has no advantage, it won't be read inside a table\r\n    content: attr(aria-label);\r\n    */\r\n    content: attr(data-label);\r\n    float: left;\r\n    text-transform: uppercase;\r\n    font-weight: normal;\r\n    \r\n    font-size: .85em;\r\n  }\r\n  .mat-table .mat-cell:last-child {\r\n    border-bottom: 0;\r\n  }\r\n    .mat-table .mat-cell:first-child {\r\n    margin-top: 4%;\r\n  }\r\n}\r\n\r\n.pointer {cursor: pointer;}\r\n\r\n.name:hover{\r\n  color:#673ab7\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvdmlldy1vbmJvYXJkLWN1c3RvbWVyL3ZpZXctY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtJQUNoQix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCO0FBQ0o7O0FBRUEsOEJBQThCOztBQUM5QjtBQUNBLG9CQUFvQjtBQUNwQjs7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsZ0dBQWdHO0FBQ3BHOztBQUVBO0VBQ0UsV0FBVztJQUNULGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUdFO0lBQ0UsZUFBZTtNQUNiLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXO01BQ1gsdUJBQXVCO0VBQzNCOztBQUNBLHFEQUFxRDs7QUFJdkQ7RUFDRSw2Q0FBNkM7RUFDN0MsaUJBQWlCOztBQUVuQjs7QUFHQTtFQUNFO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOzs7RUFHQTtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0VBQ2hCO0VBQ0E7OztHQUdDO0VBQ0Q7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRTs7O0tBR0M7SUFDRCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0lBQ0U7SUFDQSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUEsVUFBVSxlQUFlLENBQUM7O0FBQzFCO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L3ZpZXctb25ib2FyZC1jdXN0b21lci92aWV3LWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1oZWFkZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBmb250Om5vcm1hbFxyXG59XHJcblxyXG4vKi0tLS1hZ25ldCBzdGF0dXMgcmluZy0tLS0tLSovXHJcbjo6bmctZGVlcCAuY2lyY2xle1xyXG5iYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxufVxyXG46Om5nLWRlZXAgLnJpbmdpbmd7XHJcbmJvcmRlcjogM3B4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuLmJveHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkMmQ2ZGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgbWFyZ2luOiAxJSAxJSAxJSAxJTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLmJveC1oZWFkZXJ7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4gIHNtYWxse1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTsgXHJcbiAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS1NYXQgdGFibGUgLS0tLS1SRVNQT05TSVZFLS0tLS0tLSovXHJcbiAgXHJcblxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb3ZlcmVkIEJ5IFlvdXIgR3JhY2UnLCBjdXJzaXZlO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gIFxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAubWF0LXRhYmxlIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICB9XHJcblxyXG4gIC5tYXQtdGFibGUgY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3cge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLypcclxuICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cclxuICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxyXG4gICovXHJcbiAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDIlIDIlIDIlIDIlO1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDQlOyAqL1xyXG4gIH1cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xyXG4gICAgLypcclxuICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXHJcbiAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xyXG4gICAgKi9cclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgXHJcbiAgICBmb250LXNpemU6IC44NWVtO1xyXG4gIH1cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO31cclxuLm5hbWU6aG92ZXJ7XHJcbiAgY29sb3I6IzY3M2FiN1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/agent/view-onboard-customer/view-customer.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/agent/view-onboard-customer/view-customer.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;width:100%; height:100%;\">\n\n    <section class=\"content-header\">\n        <h2>\n            Agent On Board Customer\n            <small>All Customer</small>\n        </h2>\n    </section>\n\n    <div class=\"box\">\n\n        <mat-form-field [hideRequiredMarker]=\"true\" class=\"alignment\" style=\"padding-left:1%\">\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n\n    </div>\n\n    <div class=\"example-container box\">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n\n            <ng-container matColumnDef=\"S No\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>S No</mat-header-cell>\n                <mat-cell *matCellDef=\"let user; let i = index;\" data-label=\"S No\"> {{i+1}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Name\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Customer Name</mat-header-cell>\n                <mat-cell *matCellDef=\"let user\" data-label=\"Name\" >{{user.Name | titlecase }}</mat-cell>\n            </ng-container>\n\n            <!-- <ng-container matColumnDef=\"startdate\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Start Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"startdate\">{{user.startdate | date: 'dd/MMM/yyyy' }}</mat-cell>\n      </ng-container> -->\n\n            <ng-container matColumnDef=\"Mobile\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Mobile Number </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\" data-label=\"Mobile\">{{user.Mobile }} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Email\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>Email </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\" data-label=\"Email\">{{user.Email }} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"DOB\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header>DOB </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\" data-label=\"DOB\">{{user.DOB | date: 'yyyy/MM/dd'}}</mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"createdAt\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> CreatedAt </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\" data-label=\"createdAt\"> {{user.createdAt | date: 'yyyy/MM/dd'}} </mat-cell>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Address\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Address </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\" data-label=\"Address\"> {{user.Address }} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n        </mat-table>\n\n        <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/agent/view-onboard-customer/view-customer.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/agent/view-onboard-customer/view-customer.component.ts ***!
  \************************************************************************/
/*! exports provided: ViewCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomerComponent", function() { return ViewCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");







var ViewCustomerComponent = /** @class */ (function () {
    function ViewCustomerComponent(service) {
        this.service = service;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.displayedColumns = ['S No', 'Name', 'Mobile', 'Email', 'DOB', 'Address', 'createdAt']; //, 'Start Time', 'End Time'
    }
    ViewCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllAgentCustomer().subscribe(function (data) {
            console.log(data);
            _this.MyCustomer = data['message'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.MyCustomer);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ViewCustomerComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ViewCustomerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], ViewCustomerComponent.prototype, "sort", void 0);
    ViewCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'view-add-customer',
            template: __webpack_require__(/*! ./view-customer.component.html */ "./src/app/agent/view-onboard-customer/view-customer.component.html"),
            styles: [__webpack_require__(/*! ./view-customer.component.css */ "./src/app/agent/view-onboard-customer/view-customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_agent__WEBPACK_IMPORTED_MODULE_2__["AgentService"]])
    ], ViewCustomerComponent);
    return ViewCustomerComponent;
}());



/***/ }),

/***/ "./src/app/agent/view-onboard-customer/view-customer.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/agent/view-onboard-customer/view-customer.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewCustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCustomerModule", function() { return ViewCustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_customer_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-customer-routing */ "./src/app/agent/view-onboard-customer/view-customer-routing.ts");
/* harmony import */ var _view_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-customer.component */ "./src/app/agent/view-onboard-customer/view-customer.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);







// import { ToastrModule } from 'ngx-toastr';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var ViewCustomerModule = /** @class */ (function () {
    function ViewCustomerModule() {
    }
    ViewCustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _view_customer_routing__WEBPACK_IMPORTED_MODULE_4__["ViewCustomerRoutingModule"],
            ],
            declarations: [_view_customer_component__WEBPACK_IMPORTED_MODULE_5__["ViewCustomerComponent"]]
        })
    ], ViewCustomerModule);
    return ViewCustomerModule;
}());



/***/ }),

/***/ "./src/app/shared/services/agent.ts":
/*!******************************************!*\
  !*** ./src/app/shared/services/agent.ts ***!
  \******************************************/
/*! exports provided: AgentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentService", function() { return AgentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");




var AgentService = /** @class */ (function () {
    function AgentService(http) {
        this.http = http;
        this.apiURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL;
    }
    AgentService.prototype.sendAgentStatus = function (data) {
        return this.http.put(this.apiURL + '/v0.1/agentCurrentStatus', data);
    };
    AgentService.prototype.getCallDetails = function (uuid) {
        return this.http.post(this.apiURL + '/v0.1/getInfoaftercallTerminated', uuid);
    };
    AgentService.prototype.sendCustomerFeedback = function (feedback) {
        return this.http.post(this.apiURL + '/v0.1/AgentSubmitFeedback', feedback);
    };
    AgentService.prototype.getScheduledCallForAgent = function (agentId) {
        return this.http.get(this.apiURL + ("/v0.1/getScheduleCallForAgent?agentid=" + agentId['agentid']));
    };
    AgentService.prototype.getMyAllNotes = function () {
        return this.http.get(this.apiURL + '/v0.1/getAgentNotes');
    };
    AgentService.prototype.setAgentStatusTime = function (data) {
        return this.http.post(this.apiURL + '/v0.1/saveAgentStatusTime', data);
    };
    // Agent Dashboard 
    AgentService.prototype.getAgentCallStatus = function (data) {
        return this.http.post(this.apiURL + '/v0.1/getIndividualAgentCallDetails', data);
    };
    AgentService.prototype.addCustomerByAgent = function (data) {
        return this.http.post(this.apiURL + '/v0.1/addCustomer', data);
    };
    AgentService.prototype.getCallRelatedRecords = function (data) {
        return this.http.get(this.apiURL + ("/v0.1/getParentAndChildScheduleCalls?recordid=" + data));
    };
    AgentService.prototype.getAllAgentCustomer = function () {
        return this.http.get(this.apiURL + '/v0.1/getAllAgentCustomer');
    };
    AgentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AgentService);
    return AgentService;
}());



/***/ })

}]);
//# sourceMappingURL=view-onboard-customer-view-customer-module.js.map