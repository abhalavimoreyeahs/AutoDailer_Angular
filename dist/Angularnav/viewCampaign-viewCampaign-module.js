(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewCampaign-viewCampaign-module"],{

/***/ "./src/app/manager/viewCampaign/viewCampaign-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ViewCampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCampaignRoutingModule", function() { return ViewCampaignRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _viewCampaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewCampaign.component */ "./src/app/manager/viewCampaign/viewCampaign.component.ts");




var routes = [
    {
        path: '',
        component: _viewCampaign_component__WEBPACK_IMPORTED_MODULE_3__["ViewCampaignComponent"]
    }
];
var ViewCampaignRoutingModule = /** @class */ (function () {
    function ViewCampaignRoutingModule() {
    }
    ViewCampaignRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ViewCampaignRoutingModule);
    return ViewCampaignRoutingModule;
}());



/***/ }),

/***/ "./src/app/manager/viewCampaign/viewCampaign.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\r\n    position: relative;\r\n      padding: 15px 15px 0 15px;\r\n      background-color:transparent;\r\n      font:normal\r\n  }\r\n  \r\n  .box{\r\n    position: relative;\r\n      border-radius: 3px;\r\n      background: #ffffff;\r\n      border-top: 3px solid #d2d6de;\r\n      margin-bottom: 20px;\r\n      /* width: 100%; */\r\n      box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n      margin: 1% 1% 1% 1%;\r\n      /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n  }\r\n  \r\n  .box-header{\r\n    color: #444;\r\n      display: block;\r\n      padding: 10px;\r\n      position: relative;\r\n  }\r\n  \r\n  h2{\r\n    margin: 0;\r\n    font-size: 28px;\r\n    font:normal;\r\n    font-weight:normal;\r\n  \r\n  }\r\n  \r\n  h3{\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    line-height: 1;\r\n    font:normal;\r\n    font-weight:normal;\r\n  }\r\n  \r\n  small{\r\n    font-size: 15px;\r\n      display: inline-block;\r\n      padding-left: 4px;\r\n      font-weight: 300;\r\n      line-height: 1; \r\n      color: #777;\r\n      font-family: sans-serif;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFuYWdlci92aWV3Q2FtcGFpZ24vdmlld0NhbXBhaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7TUFDaEIseUJBQXlCO01BQ3pCLDRCQUE0QjtNQUM1QjtFQUNKOztFQUVBO0lBQ0Usa0JBQWtCO01BQ2hCLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsNkJBQTZCO01BQzdCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIscUNBQXFDO01BQ3JDLG1CQUFtQjtNQUNuQixnR0FBZ0c7RUFDcEc7O0VBRUE7SUFDRSxXQUFXO01BQ1QsY0FBYztNQUNkLGFBQWE7TUFDYixrQkFBa0I7RUFDdEI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7O0VBRXBCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixTQUFTO0lBQ1QsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO01BQ2IscUJBQXFCO01BQ3JCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLFdBQVc7TUFDWCx1QkFBdUI7RUFDM0IiLCJmaWxlIjoic3JjL2FwcC9tYW5hZ2VyL3ZpZXdDYW1wYWlnbi92aWV3Q2FtcGFpZ24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWhlYWRlcntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgICAgZm9udDpub3JtYWxcclxuICB9XHJcbiAgXHJcbiAgLmJveHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QyZDZkZTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgIG1hcmdpbjogMSUgMSUgMSUgMSU7XHJcbiAgICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDsgKi9cclxuICB9XHJcbiAgXHJcbiAgLmJveC1oZWFkZXJ7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgaDJ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICBmb250Om5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICBcclxuICB9XHJcbiAgXHJcbiAgaDN7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGZvbnQ6bm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gIH1cclxuICBcclxuICBzbWFsbHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7IFxyXG4gICAgICBjb2xvcjogIzc3NztcclxuICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/manager/viewCampaign/viewCampaign.component.html":
/*!******************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"background-color:#ecf0f5;\" >\r\n  <section class=\"content-header\">\r\n    <h2>\r\n      Campaign Details \r\n      <small>All Campaign</small>\r\n    </h2>\r\n  </section>\r\n\r\n  <div class=\"box\" >\r\n    <mat-table [dataSource]=\"AllCompaign\" >       \r\n      <ng-container matColumnDef=\"S No\">\r\n          <mat-header-cell *matHeaderCellDef>S No</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </mat-cell>\r\n        </ng-container>\r\n    <ng-container matColumnDef=\"campingname\">\r\n      <mat-header-cell *matHeaderCellDef>Campaign Name</mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\">{{user.campingname | titlecase }}</mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"startdate\">\r\n       <mat-header-cell *matHeaderCellDef>Start Date</mat-header-cell>\r\n       <mat-cell *matCellDef=\"let user\">{{user.startdate | date: 'dd/MMM/yyyy h:mm:ss a'}}</mat-cell>\r\n     </ng-container>\r\n     <ng-container matColumnDef=\"getCreatedByname\">\r\n         <mat-header-cell *matHeaderCellDef>Created By </mat-header-cell>\r\n         <mat-cell *matCellDef=\"let user\">{{user.getCreatedByname}}</mat-cell>\r\n       </ng-container>\r\n       <ng-container matColumnDef=\"assignedtoByname\">\r\n           <mat-header-cell *matHeaderCellDef>Assigned To </mat-header-cell>\r\n           <mat-cell *matCellDef=\"let user\">{{user.assignedtoByname}}</mat-cell>\r\n         </ng-container>\r\n         <ng-container matColumnDef=\"createdAt\">\r\n            <mat-header-cell *matHeaderCellDef>Created At </mat-header-cell>\r\n            <mat-cell *matCellDef=\"let user\">{{user.createdAt}}</mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"campingmembers\">\r\n              <mat-header-cell *matHeaderCellDef>Campaign Members</mat-header-cell>\r\n              <mat-cell *matCellDef=\"let user\">\r\n                <!-- {{user.campingmembers}} -->\r\n                  <tr *ngFor=\"let mem of user.campingmembers;\">\r\n                      <td>{{mem}} </td>\r\n                    </tr>\r\n              </mat-cell>\r\n            </ng-container>\r\n \r\n       <mat-header-row *matHeaderRowDef=\"displayDummyData\">\r\n       </mat-header-row>\r\n       <mat-row *matRowDef=\"let row; columns: displayDummyData\"></mat-row>\r\n  </mat-table>\r\n\r\n  </div>\r\n</div>\r\n        <div style=\"margin-left:2%;width: 95%;\">\r\n                <!-- <label style=\"text-align: center\"><h3>Assigned Campaign</h3></label>\r\n                <mat-table [dataSource]=\"AllCompaign\" class=\"mat-elevation-z8\">       \r\n                    <ng-container matColumnDef=\"S No\">\r\n                        <mat-header-cell *matHeaderCellDef>S No</mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </mat-cell>\r\n                      </ng-container>\r\n                  <ng-container matColumnDef=\"campingname\">\r\n                    <mat-header-cell *matHeaderCellDef>Campaign Name</mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let user\">{{user.campingname }}</mat-cell>\r\n                  </ng-container>\r\n                  <ng-container matColumnDef=\"startdate\">\r\n                     <mat-header-cell *matHeaderCellDef>Start Date</mat-header-cell>\r\n                     <mat-cell *matCellDef=\"let user\">{{user.startdate | date: 'dd/MMM/yyyy h:mm:ss a'}}</mat-cell>\r\n                   </ng-container>\r\n                   <ng-container matColumnDef=\"getCreatedByname\">\r\n                       <mat-header-cell *matHeaderCellDef>Created By </mat-header-cell>\r\n                       <mat-cell *matCellDef=\"let user\">{{user.getCreatedByname}}</mat-cell>\r\n                     </ng-container>\r\n                     <ng-container matColumnDef=\"assignedtoByname\">\r\n                         <mat-header-cell *matHeaderCellDef>Assigned To </mat-header-cell>\r\n                         <mat-cell *matCellDef=\"let user\">{{user.assignedtoByname}}</mat-cell>\r\n                       </ng-container>\r\n                       <ng-container matColumnDef=\"createdAt\">\r\n                          <mat-header-cell *matHeaderCellDef>Created At </mat-header-cell>\r\n                          <mat-cell *matCellDef=\"let user\">{{user.createdAt}}</mat-cell>\r\n                        </ng-container>\r\n                        <ng-container matColumnDef=\"campingmembers\">\r\n                            <mat-header-cell *matHeaderCellDef>Campaign Members</mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let user\">\r\n                           \r\n                                <tr *ngFor=\"let mem of user.campingmembers;\">\r\n                                    <td>{{mem}} </td>\r\n                                  </tr>\r\n                            </mat-cell>\r\n                          </ng-container>\r\n               \r\n                     <mat-header-row *matHeaderRowDef=\"displayDummyData\">\r\n                     </mat-header-row>\r\n                     <mat-row *matRowDef=\"let row; columns: displayDummyData\"></mat-row>\r\n                </mat-table> -->\r\n                 </div> "

/***/ }),

/***/ "./src/app/manager/viewCampaign/viewCampaign.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCampaignComponent", function() { return ViewCampaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { FarmService } from '../../farm.service';


var ViewCampaignComponent = /** @class */ (function () {
    function ViewCampaignComponent(toastrService, formBuilder, service) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.ViewCompaignboolean = false;
        this.AllCompaign = [];
        // dummyData = this.service.getDummyData();
        this.dummyData = this.AllCompaign;
        this.displayDummyData = ['S No', 'campingname', 'startdate', 'getCreatedByname', 'assignedtoByname', 'createdAt', 'campingmembers'];
    }
    ViewCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.campaignAssignedToManager().subscribe(function (data) {
            if (data['success'] === true) {
                _this.ViewCompaignboolean = true;
                _this.AllCompaign = data['message'];
            }
            console.log(data);
        });
    };
    // viewCampaign(){
    //     alert('msg');
    //     this.service.campaignAssignedToManager().subscribe((data)=>{
    //         if(data['success']=== true){
    //           this.ViewCompaignboolean = true;
    //           this.AllCompaign = data['message'];
    //         }
    //         console.log(data);
    //     })
    // }
    //notification
    ViewCampaignComponent.prototype.showToaster = function () {
        this.toastrService.success('Data Saved Successfully');
    };
    ViewCampaignComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed to save Data');
    };
    ViewCampaignComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    ViewCampaignComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('warning : Duplicate Data');
    };
    ViewCampaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewCampaign',
            template: __webpack_require__(/*! ./viewCampaign.component.html */ "./src/app/manager/viewCampaign/viewCampaign.component.html"),
            styles: [__webpack_require__(/*! ./viewCampaign.component.css */ "./src/app/manager/viewCampaign/viewCampaign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"]])
    ], ViewCampaignComponent);
    return ViewCampaignComponent;
}());



/***/ }),

/***/ "./src/app/manager/viewCampaign/viewCampaign.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/manager/viewCampaign/viewCampaign.module.ts ***!
  \*************************************************************/
/*! exports provided: ViewCampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCampaignModule", function() { return ViewCampaignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _viewCampaign_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewCampaign-routing.module */ "./src/app/manager/viewCampaign/viewCampaign-routing.module.ts");
/* harmony import */ var _viewCampaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewCampaign.component */ "./src/app/manager/viewCampaign/viewCampaign.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var ViewCampaignModule = /** @class */ (function () {
    function ViewCampaignModule() {
    }
    ViewCampaignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _viewCampaign_routing_module__WEBPACK_IMPORTED_MODULE_3__["ViewCampaignRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_viewCampaign_component__WEBPACK_IMPORTED_MODULE_4__["ViewCampaignComponent"]]
        })
    ], ViewCampaignModule);
    return ViewCampaignModule;
}());



/***/ })

}]);
//# sourceMappingURL=viewCampaign-viewCampaign-module.js.map