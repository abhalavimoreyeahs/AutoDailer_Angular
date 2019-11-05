(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-notes-my-notes-module"],{

/***/ "./src/app/agent/my-notes/my-notes-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/agent/my-notes/my-notes-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MyNotesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNotesRoutingModule", function() { return MyNotesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _my_notes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-notes.component */ "./src/app/agent/my-notes/my-notes.component.ts");




var routes = [
    {
        path: '',
        component: _my_notes_component__WEBPACK_IMPORTED_MODULE_3__["MyNotesComponent"]
    }
];
var MyNotesRoutingModule = /** @class */ (function () {
    function MyNotesRoutingModule() {
    }
    MyNotesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], MyNotesRoutingModule);
    return MyNotesRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/my-notes/my-notes.component.css":
/*!*******************************************************!*\
  !*** ./src/app/agent/my-notes/my-notes.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\r\n    position: relative;\r\n      padding: 15px 15px 0 15px;\r\n      background-color:transparent;\r\n      font:normal\r\n  }\r\n  \r\n  .box{\r\n    position: relative;\r\n      border-radius: 3px;\r\n      background: #ffffff;\r\n      border-top: 3px solid #d2d6de;\r\n      margin-bottom: 20px;\r\n      /* width: 100%; */\r\n      box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n      margin: 1% 1% 1% 1%;\r\n      /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n  }\r\n  \r\n  .box-header{\r\n    color: #444;\r\n      display: block;\r\n      padding: 10px;\r\n      position: relative;\r\n  }\r\n  \r\n  small{\r\n      font-size: 15px;\r\n        display: inline-block;\r\n        padding-left: 4px;\r\n        font-weight: 300;\r\n        line-height: 1; \r\n        color: #777;\r\n        font-family: sans-serif;\r\n    }\r\n  \r\n  /*------------------Mat table -----RESPONSIVE-------*/\r\n  \r\n  body {\r\n    font-family: 'Covered By Your Grace', cursive;\r\n    line-height: 1.25;\r\n    \r\n  }\r\n  \r\n  @media screen and (max-width: 960px) {\r\n    .mat-table {\r\n      border: 0;\r\n      vertical-align: middle\r\n    }\r\n  \r\n    .mat-table caption {\r\n      font-size: 1em;\r\n    }\r\n    \r\n  \r\n    .mat-table .mat-row {\r\n      border-bottom: 5px solid #ddd;\r\n      display: block;\r\n    }\r\n    /*\r\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n    */\r\n    .mat-table .mat-cell {\r\n      border-bottom: 1px solid #ddd;\r\n      display: block;\r\n      font-size: 1em;\r\n      text-align: right;\r\n      margin: 2% 2% 2% 2%;\r\n      /* font-weight: bold; */\r\n      height:30px;\r\n      /* margin-bottom: 4%; */\r\n    }\r\n    .mat-table .mat-cell:before {\r\n      /*\r\n      * aria-label has no advantage, it won't be read inside a table\r\n      content: attr(aria-label);\r\n      */\r\n      content: attr(data-label);\r\n      float: left;\r\n      text-transform: uppercase;\r\n      font-weight: normal;\r\n      \r\n      font-size: .85em;\r\n    }\r\n    .mat-table .mat-cell:last-child {\r\n      border-bottom: 0;\r\n    }\r\n      .mat-table .mat-cell:first-child {\r\n      margin-top: 4%;\r\n    }\r\n  }\r\n  \r\n  .pointer {cursor: pointer;}\r\n  \r\n  .name:hover{\r\n    color:#673ab7\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvbXktbm90ZXMvbXktbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtNQUNoQix5QkFBeUI7TUFDekIsNEJBQTRCO01BQzVCO0VBQ0o7O0VBRUE7SUFDRSxrQkFBa0I7TUFDaEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQiw2QkFBNkI7TUFDN0IsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixxQ0FBcUM7TUFDckMsbUJBQW1CO01BQ25CLGdHQUFnRztFQUNwRzs7RUFFQTtJQUNFLFdBQVc7TUFDVCxjQUFjO01BQ2QsYUFBYTtNQUNiLGtCQUFrQjtFQUN0Qjs7RUFHRTtNQUNFLGVBQWU7UUFDYixxQkFBcUI7UUFDckIsaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsV0FBVztRQUNYLHVCQUF1QjtJQUMzQjs7RUFDQSxxREFBcUQ7O0VBSXZEO0lBQ0UsNkNBQTZDO0lBQzdDLGlCQUFpQjs7RUFFbkI7O0VBR0E7SUFDRTtNQUNFLFNBQVM7TUFDVDtJQUNGOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7O0lBR0E7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztJQUNoQjtJQUNBOzs7S0FHQztJQUNEO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7TUFDZCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIsV0FBVztNQUNYLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0U7OztPQUdDO01BQ0QseUJBQXlCO01BQ3pCLFdBQVc7TUFDWCx5QkFBeUI7TUFDekIsbUJBQW1COztNQUVuQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtNQUNFO01BQ0EsY0FBYztJQUNoQjtFQUNGOztFQUVBLFVBQVUsZUFBZSxDQUFDOztFQUMxQjtJQUNFO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9teS1ub3Rlcy9teS1ub3Rlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICBmb250Om5vcm1hbFxyXG4gIH1cclxuICBcclxuICAuYm94e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDJkNmRlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgbWFyZ2luOiAxJSAxJSAxJSAxJTtcclxuICAgICAgLyogYm94LXNoYWRvdzogMXB4IDJweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50OyAqL1xyXG4gIH1cclxuICBcclxuICAuYm94LWhlYWRlcntcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICBcclxuICAgIHNtYWxse1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7IFxyXG4gICAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgfVxyXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS1NYXQgdGFibGUgLS0tLS1SRVNQT05TSVZFLS0tLS0tLSovXHJcbiAgICBcclxuICBcclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ292ZXJlZCBCeSBZb3VyIEdyYWNlJywgY3Vyc2l2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAubWF0LXRhYmxlIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LXRhYmxlIGNhcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIFxyXG4gIFxyXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdyB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjZGRkO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC8qXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7YmFja2dyb3VuZDogI0NDQ31cclxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XHJcbiAgICAqL1xyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGwge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgbWFyZ2luOiAyJSAyJSAyJSAyJTtcclxuICAgICAgLyogZm9udC13ZWlnaHQ6IGJvbGQ7ICovXHJcbiAgICAgIGhlaWdodDozMHB4O1xyXG4gICAgICAvKiBtYXJnaW4tYm90dG9tOiA0JTsgKi9cclxuICAgIH1cclxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmJlZm9yZSB7XHJcbiAgICAgIC8qXHJcbiAgICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXHJcbiAgICAgIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XHJcbiAgICAgICovXHJcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBcclxuICAgICAgZm9udC1zaXplOiAuODVlbTtcclxuICAgIH1cclxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvaW50ZXIge2N1cnNvcjogcG9pbnRlcjt9XHJcbiAgLm5hbWU6aG92ZXJ7XHJcbiAgICBjb2xvcjojNjczYWI3XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/agent/my-notes/my-notes.component.html":
/*!********************************************************!*\
  !*** ./src/app/agent/my-notes/my-notes.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;width:100%; height:100%;\">\r\n\r\n    <section class=\"content-header\">\r\n      <h2>\r\n        My Notes\r\n        <small>All Feedback Details</small>\r\n      </h2>\r\n    </section>\r\n  \r\n    <div class=\"box\">\r\n  \r\n      <mat-form-field [hideRequiredMarker]=\"true\" class=\"alignment\" style=\"padding-left:1%\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n  \r\n    </div>\r\n  \r\n    <div class=\"example-container box\">\r\n  \r\n      <mat-table [dataSource]=\"dataSource\" matSort>\r\n  \r\n        <ng-container matColumnDef=\"S No\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>S No</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user; let i = index;\" data-label=\"S No\"> {{i+1}} </mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"customerName\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Customer Name</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"customerName\" class=\"pointer name\" href=\"javascript:void(0)\" (click)=\"openCallDetails(user._id)\">{{user.customerName | titlecase }}</mat-cell>\r\n        </ng-container>\r\n  \r\n        <!-- <ng-container matColumnDef=\"startdate\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Start Date</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"startdate\">{{user.startdate | date: 'dd/MMM/yyyy' }}</mat-cell>\r\n        </ng-container> -->\r\n  \r\n        <ng-container matColumnDef=\"customerMobNo\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Customer Number </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"customerMobNo\">{{user.customerMobNo }} </mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"callType\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Call Type </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"callType\">{{user.callType  }} </mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"createdAt\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Created At </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"createdAt\">{{user.createdAt | date: 'yyyy/MM/dd'}}</mat-cell>\r\n        </ng-container>\r\n  \r\n        <ng-container matColumnDef=\"descrptionOnCall\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Notes </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\" data-label=\"descrptionOnCall\"> {{user.descrptionOnCall }} </mat-cell>\r\n        </ng-container>\r\n  \r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n      </mat-table>\r\n  \r\n      <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n    </div>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/agent/my-notes/my-notes.component.ts":
/*!******************************************************!*\
  !*** ./src/app/agent/my-notes/my-notes.component.ts ***!
  \******************************************************/
/*! exports provided: MyNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNotesComponent", function() { return MyNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _popup_parent_calls_popup_parent_calls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../popup-parent-calls/popup-parent-calls.component */ "./src/app/agent/popup-parent-calls/popup-parent-calls.component.ts");






//For Mat table






var MyNotesComponent = /** @class */ (function () {
    function MyNotesComponent(toastrService, formBuilder, service, router, dialog) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.displayedColumns = ['S No', 'customerName', 'customerMobNo', 'callType', 'createdAt', 'descrptionOnCall']; //, 'Start Time', 'End Time'
    }
    MyNotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMyAllNotes().subscribe(function (data) {
            console.log(data);
            _this.MyNotes = data['message'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.MyNotes);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    MyNotesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    //dialog box
    MyNotesComponent.prototype.openCallDetails = function (id) {
        var dialogRef = this.dialog.open(_popup_parent_calls_popup_parent_calls_component__WEBPACK_IMPORTED_MODULE_11__["PopupParentCallsComponent"], {
            width: '50%',
            data: { documentId: id },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            debugger;
            console.log(result);
            if (result != undefined) {
            }
            else {
                console.log('No thanks button clicked');
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], MyNotesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"])
    ], MyNotesComponent.prototype, "sort", void 0);
    MyNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-notes',
            template: __webpack_require__(/*! ./my-notes.component.html */ "./src/app/agent/my-notes/my-notes.component.html"),
            styles: [__webpack_require__(/*! ./my-notes.component.css */ "./src/app/agent/my-notes/my-notes.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _shared_services_agent__WEBPACK_IMPORTED_MODULE_3__["AgentService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialog"]])
    ], MyNotesComponent);
    return MyNotesComponent;
}());



/***/ }),

/***/ "./src/app/agent/my-notes/my-notes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/agent/my-notes/my-notes.module.ts ***!
  \***************************************************/
/*! exports provided: MyNotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyNotesModule", function() { return MyNotesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_notes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-notes-routing.module */ "./src/app/agent/my-notes/my-notes-routing.module.ts");
/* harmony import */ var _my_notes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-notes.component */ "./src/app/agent/my-notes/my-notes.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var MyNotesModule = /** @class */ (function () {
    function MyNotesModule() {
    }
    MyNotesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _my_notes_routing_module__WEBPACK_IMPORTED_MODULE_4__["MyNotesRoutingModule"]
            ],
            declarations: [_my_notes_component__WEBPACK_IMPORTED_MODULE_5__["MyNotesComponent"]]
        })
    ], MyNotesModule);
    return MyNotesModule;
}());



/***/ })

}]);
//# sourceMappingURL=my-notes-my-notes-module.js.map