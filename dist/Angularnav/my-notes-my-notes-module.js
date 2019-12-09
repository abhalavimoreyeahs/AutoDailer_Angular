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

module.exports = ".content-header{\r\n    position: relative;\r\n      padding: 15px 15px 0 15px;\r\n      background-color:transparent;\r\n      font:normal\r\n  }\r\n\r\n/*----agnet status ring------*/\r\n\r\n::ng-deep .circle{\r\n  background-color:red;\r\n}\r\n\r\n::ng-deep .ringing{\r\n  border: 3px solid red;\r\n}\r\n\r\n.box{\r\n    position: relative;\r\n      border-radius: 3px;\r\n      background: #ffffff;\r\n      border-top: 3px solid #d2d6de;\r\n      margin-bottom: 20px;\r\n      /* width: 100%; */\r\n      box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n      margin: 1% 1% 1% 1%;\r\n      /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n  }\r\n\r\n.box-header{\r\n    color: #444;\r\n      display: block;\r\n      padding: 10px;\r\n      position: relative;\r\n  }\r\n\r\nsmall{\r\n      font-size: 15px;\r\n        display: inline-block;\r\n        padding-left: 4px;\r\n        font-weight: 300;\r\n        line-height: 1; \r\n        color: #777;\r\n        font-family: sans-serif;\r\n    }\r\n\r\n/*------------------Mat table -----RESPONSIVE-------*/\r\n\r\nbody {\r\n    font-family: 'Covered By Your Grace', cursive;\r\n    line-height: 1.25;\r\n    \r\n  }\r\n\r\n@media screen and (max-width: 960px) {\r\n    .mat-table {\r\n      border: 0;\r\n      vertical-align: middle\r\n    }\r\n  \r\n    .mat-table caption {\r\n      font-size: 1em;\r\n    }\r\n    \r\n  \r\n    .mat-table .mat-row {\r\n      border-bottom: 5px solid #ddd;\r\n      display: block;\r\n    }\r\n    /*\r\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n    */\r\n    .mat-table .mat-cell {\r\n      border-bottom: 1px solid #ddd;\r\n      display: block;\r\n      font-size: 1em;\r\n      text-align: right;\r\n      margin: 2% 2% 2% 2%;\r\n      /* font-weight: bold; */\r\n      height:30px;\r\n      /* margin-bottom: 4%; */\r\n    }\r\n    .mat-table .mat-cell:before {\r\n      /*\r\n      * aria-label has no advantage, it won't be read inside a table\r\n      content: attr(aria-label);\r\n      */\r\n      content: attr(data-label);\r\n      float: left;\r\n      text-transform: uppercase;\r\n      font-weight: normal;\r\n      \r\n      font-size: .85em;\r\n    }\r\n    .mat-table .mat-cell:last-child {\r\n      border-bottom: 0;\r\n    }\r\n      .mat-table .mat-cell:first-child {\r\n      margin-top: 4%;\r\n    }\r\n  }\r\n\r\n.pointer {cursor: pointer;}\r\n\r\n.name:hover{\r\n    color:#673ab7\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvbXktbm90ZXMvbXktbm90ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtNQUNoQix5QkFBeUI7TUFDekIsNEJBQTRCO01BQzVCO0VBQ0o7O0FBRUYsOEJBQThCOztBQUM5QjtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFRTtJQUNFLGtCQUFrQjtNQUNoQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLDZCQUE2QjtNQUM3QixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLHFDQUFxQztNQUNyQyxtQkFBbUI7TUFDbkIsZ0dBQWdHO0VBQ3BHOztBQUVBO0lBQ0UsV0FBVztNQUNULGNBQWM7TUFDZCxhQUFhO01BQ2Isa0JBQWtCO0VBQ3RCOztBQUdFO01BQ0UsZUFBZTtRQUNiLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsdUJBQXVCO0lBQzNCOztBQUNBLHFEQUFxRDs7QUFJdkQ7SUFDRSw2Q0FBNkM7SUFDN0MsaUJBQWlCOztFQUVuQjs7QUFHQTtJQUNFO01BQ0UsU0FBUztNQUNUO0lBQ0Y7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCOzs7SUFHQTtNQUNFLDZCQUE2QjtNQUM3QixjQUFjO0lBQ2hCO0lBQ0E7OztLQUdDO0lBQ0Q7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztNQUNkLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixXQUFXO01BQ1gsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRTs7O09BR0M7TUFDRCx5QkFBeUI7TUFDekIsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixtQkFBbUI7O01BRW5CLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO01BQ0U7TUFDQSxjQUFjO0lBQ2hCO0VBQ0Y7O0FBRUEsVUFBVSxlQUFlLENBQUM7O0FBQzFCO0lBQ0U7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L215LW5vdGVzL215LW5vdGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAwIDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgIGZvbnQ6bm9ybWFsXHJcbiAgfVxyXG5cclxuLyotLS0tYWduZXQgc3RhdHVzIHJpbmctLS0tLS0qL1xyXG46Om5nLWRlZXAgLmNpcmNsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxufVxyXG46Om5nLWRlZXAgLnJpbmdpbmd7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4gIC5ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkMmQ2ZGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICBtYXJnaW46IDElIDElIDElIDElO1xyXG4gICAgICAvKiBib3gtc2hhZG93OiAxcHggMnB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gtaGVhZGVye1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICAgc21hbGx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTsgXHJcbiAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLU1hdCB0YWJsZSAtLS0tLVJFU1BPTlNJVkUtLS0tLS0tKi9cclxuICAgIFxyXG4gIFxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3ZlcmVkIEJ5IFlvdXIgR3JhY2UnLCBjdXJzaXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5tYXQtdGFibGUge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgIH1cclxuICBcclxuICAgIC5tYXQtdGFibGUgY2FwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtcm93IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cclxuICAgICovXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBtYXJnaW46IDIlIDIlIDIlIDIlO1xyXG4gICAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgIC8qIG1hcmdpbi1ib3R0b206IDQlOyAqL1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcclxuICAgICAgLypcclxuICAgICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcclxuICAgICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcclxuICAgICAgKi9cclxuICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIFxyXG4gICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO31cclxuICAubmFtZTpob3ZlcntcclxuICAgIGNvbG9yOiM2NzNhYjdcclxuICB9Il19 */"

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
            //debugger;
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