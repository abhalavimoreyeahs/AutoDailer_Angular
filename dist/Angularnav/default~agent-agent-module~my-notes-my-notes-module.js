(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~agent-agent-module~my-notes-my-notes-module"],{

/***/ "./src/app/agent/popup-parent-calls/popup-parent-calls.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/agent/popup-parent-calls/popup-parent-calls.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\r\n    position: relative;\r\n      padding: 15px 15px 0 15px;\r\n      background-color:transparent;\r\n      font:normal\r\n  }\r\n  \r\n  .box{\r\n    position: relative;\r\n      border-radius: 3px;\r\n      background: #ffffff;\r\n      border-top: 3px solid #d2d6de;\r\n      margin-bottom: 20px;\r\n      /* width: 100%; */\r\n      box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n      margin: 1% 1% 1% 1%;\r\n      /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n  }\r\n  \r\n  .box-header{\r\n    color: #444;\r\n      display: block;\r\n      padding: 10px;\r\n      position: relative;\r\n  }\r\n  \r\n  small{\r\n      font-size: 15px;\r\n        display: inline-block;\r\n        padding-left: 4px;\r\n        font-weight: 300;\r\n        line-height: 1; \r\n        color: #777;\r\n        font-family: sans-serif;\r\n    }\r\n  \r\n  /*------------------Mat table -----RESPONSIVE-------*/\r\n  \r\n  body {\r\n    font-family: 'Covered By Your Grace', cursive;\r\n    line-height: 1.25;\r\n    \r\n  }\r\n  \r\n  @media screen and (max-width: 960px) {\r\n    .mat-table {\r\n      border: 0;\r\n      vertical-align: middle\r\n    }\r\n  \r\n    .mat-table caption {\r\n      font-size: 1em;\r\n    }\r\n    \r\n  \r\n    .mat-table .mat-row {\r\n      border-bottom: 5px solid #ddd;\r\n      display: block;\r\n    }\r\n    /*\r\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n    */\r\n    .mat-table .mat-cell {\r\n      border-bottom: 1px solid #ddd;\r\n      display: block;\r\n      font-size: 1em;\r\n      text-align: right;\r\n      margin: 2% 2% 2% 2%;\r\n      /* font-weight: bold; */\r\n      height:30px;\r\n      /* margin-bottom: 4%; */\r\n    }\r\n    .mat-table .mat-cell:before {\r\n      /*\r\n      * aria-label has no advantage, it won't be read inside a table\r\n      content: attr(aria-label);\r\n      */\r\n      content: attr(data-label);\r\n      float: left;\r\n      text-transform: uppercase;\r\n      font-weight: normal;\r\n      \r\n      font-size: .85em;\r\n    }\r\n    .mat-table .mat-cell:last-child {\r\n      border-bottom: 0;\r\n    }\r\n      .mat-table .mat-cell:first-child {\r\n      margin-top: 4%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvcG9wdXAtcGFyZW50LWNhbGxzL3BvcHVwLXBhcmVudC1jYWxscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO01BQ2hCLHlCQUF5QjtNQUN6Qiw0QkFBNEI7TUFDNUI7RUFDSjs7RUFFQTtJQUNFLGtCQUFrQjtNQUNoQixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLDZCQUE2QjtNQUM3QixtQkFBbUI7TUFDbkIsaUJBQWlCO01BQ2pCLHFDQUFxQztNQUNyQyxtQkFBbUI7TUFDbkIsZ0dBQWdHO0VBQ3BHOztFQUVBO0lBQ0UsV0FBVztNQUNULGNBQWM7TUFDZCxhQUFhO01BQ2Isa0JBQWtCO0VBQ3RCOztFQUdFO01BQ0UsZUFBZTtRQUNiLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxXQUFXO1FBQ1gsdUJBQXVCO0lBQzNCOztFQUNBLHFEQUFxRDs7RUFJdkQ7SUFDRSw2Q0FBNkM7SUFDN0MsaUJBQWlCOztFQUVuQjs7RUFHQTtJQUNFO01BQ0UsU0FBUztNQUNUO0lBQ0Y7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCOzs7SUFHQTtNQUNFLDZCQUE2QjtNQUM3QixjQUFjO0lBQ2hCO0lBQ0E7OztLQUdDO0lBQ0Q7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztNQUNkLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsbUJBQW1CO01BQ25CLHVCQUF1QjtNQUN2QixXQUFXO01BQ1gsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRTs7O09BR0M7TUFDRCx5QkFBeUI7TUFDekIsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixtQkFBbUI7O01BRW5CLGdCQUFnQjtJQUNsQjtJQUNBO01BQ0UsZ0JBQWdCO0lBQ2xCO01BQ0U7TUFDQSxjQUFjO0lBQ2hCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9wb3B1cC1wYXJlbnQtY2FsbHMvcG9wdXAtcGFyZW50LWNhbGxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMTVweCAwIDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICAgIGZvbnQ6bm9ybWFsXHJcbiAgfVxyXG4gIFxyXG4gIC5ib3h7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkMmQ2ZGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgICBtYXJnaW46IDElIDElIDElIDElO1xyXG4gICAgICAvKiBib3gtc2hhZG93OiAxcHggMnB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gtaGVhZGVye1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gICAgc21hbGx7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTsgXHJcbiAgICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICB9XHJcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLU1hdCB0YWJsZSAtLS0tLVJFU1BPTlNJVkUtLS0tLS0tKi9cclxuICAgIFxyXG4gIFxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3ZlcmVkIEJ5IFlvdXIgR3JhY2UnLCBjdXJzaXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5tYXQtdGFibGUge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgIH1cclxuICBcclxuICAgIC5tYXQtdGFibGUgY2FwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtcm93IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cclxuICAgICovXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBtYXJnaW46IDIlIDIlIDIlIDIlO1xyXG4gICAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgIC8qIG1hcmdpbi1ib3R0b206IDQlOyAqL1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6YmVmb3JlIHtcclxuICAgICAgLypcclxuICAgICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcclxuICAgICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcclxuICAgICAgKi9cclxuICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIFxyXG4gICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/agent/popup-parent-calls/popup-parent-calls.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/agent/popup-parent-calls/popup-parent-calls.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"javascript:void(0)\">\n  <mat-icon style=\"float:right;margin-top:0%;margin-right:0%;color:lightgray\" (click)=\"onNoClick()\">clear\n  </mat-icon>\n</a>\n<div style=\"width:100%; height:100%;\" *ngIf=\"boolean\">\n\n    <section class=\"content-header\" style=\"text-align: center;margin-right:3%\" >\n      <h2> Parent Child Call Details </h2>\n    </section>\n\n    <div class=\"example-container box\">\n\n      <mat-table [dataSource]=\"dataSource1\" matSort>\n\n        <ng-container matColumnDef=\"S No\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>S No</mat-header-cell>\n          <mat-cell *matCellDef=\"let user; let i = index;\" data-label=\"S No\"> {{i+1}} </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"customerName\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Customer Name</mat-header-cell>\n          <mat-cell *matCellDef=\"let user\" data-label=\"customerName\">\n            {{user.customerName | titlecase }}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"customerMobNo\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Customer Number </mat-header-cell>\n          <mat-cell *matCellDef=\"let user\" data-label=\"customerMobNo\">{{user.customerMobNo }} </mat-cell>\n        </ng-container>\n        <!-- \n      <ng-container matColumnDef=\"callType\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Call Type </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"callType\">{{user.callType  }} </mat-cell>\n      </ng-container> -->\n\n        <ng-container matColumnDef=\"createdAt\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Created At </mat-header-cell>\n          <mat-cell *matCellDef=\"let user\" data-label=\"createdAt\">{{user.createdAt | date: 'MMMM d, y'}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"descrptionOnCall\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Notes </mat-header-cell>\n          <mat-cell *matCellDef=\"let user\" data-label=\"descrptionOnCall\"> {{user.descrptionOnCall }} </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns1\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns1\"></mat-row>\n      </mat-table>\n\n      <!-- <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator> -->\n    </div>\n    <div>\n      <h4> Child Scheduled Calls </h4>\n    </div>\n    <div class=\"example-container box\">\n\n      <mat-table [dataSource]=\"dataSource2\" matSort>\n\n        <!-- \n      <ng-container matColumnDef=\"callType\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Call Type </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" data-label=\"callType\">{{user.callType  }} </mat-cell>\n      </ng-container> -->\n\n        <ng-container matColumnDef=\"createdAt\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Created At </mat-header-cell>\n          <mat-cell *matCellDef=\"let user\" data-label=\"createdAt\">{{user.createdAt | date: 'MMMM d, y'}}</mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"callBackStartTime\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Start Time</mat-header-cell>\n          <mat-cell *matCellDef=\"let user\" data-label=\"callBackStartTime\">{{user.callBackStartTime | date: 'h:mm a'}}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"callBackEndTime\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header>End Time </mat-header-cell>\n          <mat-cell *matCellDef=\"let user\" data-label=\"callBackEndTime\">{{user.callBackEndTime | date: 'h:mm a'}}\n          </mat-cell>\n        </ng-container>\n\n        <ng-container matColumnDef=\"descrptionOnCall\">\n          <mat-header-cell *matHeaderCellDef mat-sort-header> Notes </mat-header-cell>\n          <mat-cell *matCellDef=\"let user\" data-label=\"descrptionOnCall\"> {{user.descrptionOnCall }} </mat-cell>\n        </ng-container>\n\n        <mat-header-row *matHeaderRowDef=\"displayedColumns2\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns2\"></mat-row>\n      </mat-table>\n\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 15]\"></mat-paginator>\n    </div>\n    <div style=\"float:right;margin-right:1%\">\n      <!-- <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:100px\">Submit</button> -->\n      <button mat-button  cdkFocusInitial class=\"mat-raised-button\" (click)=\"onNoClick()\" style=\"width:100px;background-color: darkred;color:white\">Cancel</button>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/agent/popup-parent-calls/popup-parent-calls.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/agent/popup-parent-calls/popup-parent-calls.component.ts ***!
  \**************************************************************************/
/*! exports provided: PopupParentCallsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupParentCallsComponent", function() { return PopupParentCallsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");




//Mat table 




var PopupParentCallsComponent = /** @class */ (function () {
    function PopupParentCallsComponent(agentService, dialogRef, data) {
        this.agentService = agentService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.displayedColumns1 = ['S No', 'customerName', 'customerMobNo', 'createdAt', 'descrptionOnCall'];
        this.displayedColumns2 = ['createdAt', 'callBackStartTime', 'callBackEndTime', 'descrptionOnCall'];
        this.boolean = false;
        console.log("id:", data.documentId);
        this.id = data.documentId;
    }
    PopupParentCallsComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PopupParentCallsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agentService.getCallRelatedRecords(this.id).subscribe(function (data) {
            _this.boolean = true;
            console.log(data);
            // this.MyNotes = data['message'];
            _this.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data['message']);
            _this.dataSource2 = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](data['getChilds']);
            _this.dataSource2.paginator = _this.paginator;
            _this.dataSource2.sort = _this.sort;
        }, function (err) {
            //debugger
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], PopupParentCallsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], PopupParentCallsComponent.prototype, "sort", void 0);
    PopupParentCallsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup-parent-calls',
            template: __webpack_require__(/*! ./popup-parent-calls.component.html */ "./src/app/agent/popup-parent-calls/popup-parent-calls.component.html"),
            styles: [__webpack_require__(/*! ./popup-parent-calls.component.css */ "./src/app/agent/popup-parent-calls/popup-parent-calls.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_agent__WEBPACK_IMPORTED_MODULE_3__["AgentService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PopupParentCallsComponent);
    return PopupParentCallsComponent;
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
    AgentService.prototype.getAgentSingleCustomer = function (id) {
        //debugger;
        return this.http.get(this.apiURL + ("/v0.1/getAgentSingleCustomer?empId=" + id));
    };
    AgentService.prototype.updateAgentCustomer = function (id, data) {
        //debugger;
        return this.http.put(this.apiURL + ("/v0.1/updateAgentCustomer?id=" + id), data);
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
//# sourceMappingURL=default~agent-agent-module~my-notes-my-notes-module.js.map