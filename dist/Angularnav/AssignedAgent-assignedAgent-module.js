(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AssignedAgent-assignedAgent-module"],{

/***/ "./src/app/layout/AssignedAgent/assignedAgent-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AssignedAgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedAgentRoutingModule", function() { return AssignedAgentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _assignedAgent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignedAgent.component */ "./src/app/layout/AssignedAgent/assignedAgent.component.ts");




var routes = [
    {
        path: '',
        component: _assignedAgent_component__WEBPACK_IMPORTED_MODULE_3__["AssignedAgentComponent"]
    }
];
var AssignedAgentRoutingModule = /** @class */ (function () {
    function AssignedAgentRoutingModule() {
    }
    AssignedAgentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AssignedAgentRoutingModule);
    return AssignedAgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/AssignedAgent/assignedAgent.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\r\n  position: relative;\r\n    padding: 15px 15px 0 15px;\r\n    background-color:transparent;\r\n    font:normal\r\n}\r\n\r\n.box{\r\n  position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #d2d6de;\r\n    margin-bottom: 20px;\r\n    /* width: 100%; */\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n    margin: 1% 1% 1% 1%;\r\n    /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n}\r\n\r\n.box-header{\r\n  color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\nh2{\r\n  margin: 0;\r\n  font-size: 28px;\r\n  font:normal;\r\n  font-weight:normal;\r\n\r\n}\r\n\r\nh3{\r\n  display: inline-block;\r\n  font-size: 18px;\r\n  margin: 0;\r\n  line-height: 1;\r\n  font:normal;\r\n  font-weight:normal;\r\n}\r\n\r\nsmall{\r\n  font-size: 15px;\r\n    display: inline-block;\r\n    padding-left: 4px;\r\n    font-weight: 300;\r\n    line-height: 1; \r\n    color: #777;\r\n    font-family: sans-serif;\r\n}\r\n\r\nmd-select {\r\n  background-color: white;   \r\n  color: black;\r\n  border : 1px solid #666666;\r\n\r\n}\r\n\r\n.mat-form-field-appearance-outline .mat-form-field-outline-start \r\n.alignment{\r\nborder-top-left-radius: 0px;\r\nborder-top-right-radius: 0px;\r\nborder-bottom-right-radius: 0px;\r\nborder-bottom-left-radius: 0px;\r\n}\r\n\r\n/* \r\ntable, th, td {\r\n  border: 1px solid #f4f4f4;\r\n} */\r\n\r\n/* button{\r\n margin:2% 2% 2% 2%;\r\n}\r\n\r\n  .actions {\r\n    justify-content: flex-end;\r\n  }\r\n  \r\n  .container {\r\n    height: 100%;\r\n  }\r\n\r\n  .active-list-item {\r\n    color: #3F51B5 !important; \r\n  } */\r\n\r\ntable{\r\n    width:100%\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0Fzc2lnbmVkQWdlbnQvYXNzaWduZWRBZ2VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0lBQ2hCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsZ0dBQWdHO0FBQ3BHOztBQUVBO0VBQ0UsV0FBVztJQUNULGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsU0FBUztFQUNULGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtJQUNiLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWiwwQkFBMEI7O0FBRTVCOztBQUVBOztBQUVBLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsK0JBQStCO0FBQy9CLDhCQUE4QjtBQUM5Qjs7QUFDQTs7O0dBR0c7O0FBRUg7Ozs7Ozs7Ozs7Ozs7O0tBY0s7O0FBRUg7SUFDRTtFQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L0Fzc2lnbmVkQWdlbnQvYXNzaWduZWRBZ2VudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAwIDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgZm9udDpub3JtYWxcclxufVxyXG5cclxuLmJveHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNkMmQ2ZGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgbWFyZ2luOiAxJSAxJSAxJSAxJTtcclxuICAgIC8qIGJveC1zaGFkb3c6IDFweCAycHggNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDsgKi9cclxufVxyXG5cclxuLmJveC1oZWFkZXJ7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmgye1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udDpub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG5cclxufVxyXG5cclxuaDN7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZm9udDpub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG59XHJcblxyXG5zbWFsbHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTsgXHJcbiAgICBjb2xvcjogIzc3NztcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5tZC1zZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgIFxyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXIgOiAxcHggc29saWQgIzY2NjY2NjtcclxuXHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQgXHJcbi5hbGlnbm1lbnR7XHJcbmJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcclxuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcclxuYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4O1xyXG59XHJcbi8qIFxyXG50YWJsZSwgdGgsIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xyXG59ICovXHJcblxyXG4vKiBidXR0b257XHJcbiBtYXJnaW46MiUgMiUgMiUgMiU7XHJcbn1cclxuXHJcbiAgLmFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlLWxpc3QtaXRlbSB7XHJcbiAgICBjb2xvcjogIzNGNTFCNSAhaW1wb3J0YW50OyBcclxuICB9ICovXHJcblxyXG4gIHRhYmxle1xyXG4gICAgd2lkdGg6MTAwJVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/layout/AssignedAgent/assignedAgent.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n <div style=\"background-color:#ecf0f5;width:100%; height:100%;\" >\r\n\r\n  <section class=\"content-header\">\r\n    <h2>\r\n      Manager \r\n      <small>Agent assigned to Managers</small>\r\n    </h2>\r\n    <!-- <ol class=\"breadcrumb\">\r\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n      <li><a href=\"#\">Tables</a></li>\r\n      <li class=\"active\">Data tables</li>\r\n    </ol> -->\r\n  </section>\r\n\r\n<div class=\"box\" >\r\n <!-- <div class=\"box-header\">\r\n  <h3 class=\"box-title\">Agent Assigned to manager</h3>\r\n</div>  -->\r\n\r\n\r\n<!-- <mat-form-field style=\"padding-left:1%\">\r\n  <mat-label> Select Manager</mat-label>\r\n  <mat-select [(ngModel)]=\"managerId\" (ngModelChange)=\"getAgent($event)\">\r\n    <mat-option *ngFor=\"let manager of Manager\" [value]=\"manager.id\">\r\n      {{manager.email}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field> -->\r\n<mat-form-field appearance=\"outline\" [hideRequiredMarker]=\"true\" class=\"alignment\" style=\"padding-left:1%\">\r\n<mat-label> Select Manager</mat-label>\r\n<mat-select [(ngModel)]=\"managerId\" (ngModelChange)=\"getAgent($event)\">\r\n  <mat-option *ngFor=\"let manager of Manager\" [value]=\"manager.id\">\r\n    {{manager.email}}\r\n  </mat-option>\r\n</mat-select>\r\n</mat-form-field>\r\n\r\n</div>\r\n\r\n<div class=\"box\" >\r\n<table mat-table [dataSource]=\"dataSource\" style=\"border: gray\">\r\n    \r\n  <!-- <ng-container matColumnDef=\"select\" style=\"max-width: 50px\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                    [aria-label]=\"checkboxLabel()\">\r\n      </mat-checkbox>\r\n    </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\">\r\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selection.toggle(row) : null\"\r\n                    [checked]=\"selection.isSelected(row)\"\r\n                    [aria-label]=\"checkboxLabel(row)\">\r\n      </mat-checkbox>\r\n    </mat-cell>\r\n  </ng-container> -->\r\n\r\n  <ng-container matColumnDef=\"S No\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:100px\">S No.</th>\r\n      <td mat-cell *matCellDef=\"let user; let i = index;\" style=\"width:100px\"> {{i+1}} </td>\r\n    </ng-container>\r\n\r\n    <!-- <ng-container matColumnDef=\"img\">\r\n        <th mat-header-cell *matHeaderCellDef></th>\r\n        <td mat-cell *matCellDef=\"let user;\"> \r\n        <img src=\"../../../assets/men.jpg\" style=\"width:50px;height:50px;margin:1% 1% 1% 1%; border-radius: 50%\">  \r\n        </td>\r\n      </ng-container> -->\r\n    <ng-container matColumnDef=\"firstName\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"text-align: center\">First Name </th>\r\n      <td mat-cell *matCellDef=\"let element;\" style=\"text-align: center\"> \r\n          <img src=\"../../../assets/men.jpg\" style=\"width:50px;height:50px;margin:1% 1% 1% 1%; border-radius: 50%\">  &nbsp;&nbsp;\r\n         {{element.users.firstName}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"lastName\">\r\n        <th mat-header-cell *matHeaderCellDef>Last Name </th>\r\n        <td mat-cell *matCellDef=\"let element;\"> {{element.users.lastName}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"email\">\r\n          <th mat-header-cell *matHeaderCellDef>Email </th>\r\n          <td mat-cell *matCellDef=\"let element;\"> {{element.users.email}} </td>\r\n        </ng-container>\r\n\r\n<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n</div> \r\n \r\n </div>\r\n \r\n\r\n \r\n <mat-form-field appearance=\"outline\" [hideRequiredMarker]=\"true\" \r\nclass=\"alignment\">\r\n<mat-label>Email Address</mat-label>\r\n\r\n<input type=\"text\" matInput placeholder=\"Enter email address\">\r\n\r\n<mat-icon matPrefix >email</mat-icon>\r\n</mat-form-field>\r\n\r\n\r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n \r\n <!-- <mat-accordion>\r\n      <mat-expansion-panel [expanded]='f_firstPanel' [disabled]='!f_firstPanel'>\r\n          <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                Select Manager\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                Agent Assignment\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n        \r\n            <h4>Select Manager</h4>\r\n      <mat-form-field>\r\n        <mat-label>Manager</mat-label>\r\n        <mat-select [(ngModel)]=\"managerId\" (ngModelChange)=\"getAgent($event)\">\r\n          <mat-option *ngFor=\"let manager of Manager\" [value]=\"manager.id\">\r\n            {{manager.email}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      </mat-expansion-panel>\r\n        <mat-expansion-panel [expanded]='f_secondPanel' [disabled]='!f_secondPanel'>\r\n        <mat-expansion-panel-header>\r\n            <mat-panel-title>List of Agents</mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <table mat-table [dataSource]=\"dataSource\" >\r\n    \r\n              <ng-container matColumnDef=\"S No\">\r\n                  <th mat-header-cell *matHeaderCellDef>S No.</th>\r\n                  <td mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </td>\r\n                </ng-container>\r\n            \r\n                <ng-container matColumnDef=\"img\">\r\n                    <th mat-header-cell *matHeaderCellDef></th>\r\n                    <td mat-cell *matCellDef=\"let user;\"> \r\n                    <img src=\"../../../assets/no-photo.png\" style=\"width:50px;height:50px;margin:1% 1% 1% 1%\">  \r\n                    </td>\r\n                  </ng-container>\r\n                <ng-container matColumnDef=\"firstName\">\r\n                  <th mat-header-cell *matHeaderCellDef>First Name </th>\r\n                  <td mat-cell *matCellDef=\"let element;\"> {{element.users.firstName}} </td>\r\n                </ng-container>\r\n        \r\n                <ng-container matColumnDef=\"lastName\">\r\n                    <th mat-header-cell *matHeaderCellDef>Last Name </th>\r\n                    <td mat-cell *matCellDef=\"let element;\"> {{element.users.lastName}} </td>\r\n                  </ng-container>\r\n        \r\n                  <ng-container matColumnDef=\"email\">\r\n                      <th mat-header-cell *matHeaderCellDef>Email </th>\r\n                      <td mat-cell *matCellDef=\"let element;\"> {{element.users.email}} </td>\r\n                    </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n    \r\n    <br>\r\n    <div style=\"margin: auto\">\r\n    <button mat-raised-button color=\"primary\" style=\"margin: 30px\" (click)=\"editTrainer()\">Edit</button>\r\n    <button mat-raised-button color=\"primary\" style=\"margin: 30px\" (click)=\"cancelEdit()\">Cancel</button>\r\n    </div>\r\n        </mat-expansion-panel>\r\n    </mat-accordion> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/AssignedAgent/assignedAgent.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent.component.ts ***!
  \*****************************************************************/
/*! exports provided: AssignedAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedAgentComponent", function() { return AssignedAgentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");






//For Mat table




var AssignedAgentComponent = /** @class */ (function () {
    function AssignedAgentComponent(toastrService, formBuilder, service, router) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        // Flags that control the expansion panel
        this.f_firstPanel = false;
        this.M_firstPanel = false;
        this.f_secondPanel = false;
        this.displayedColumns = ['S No', 'firstName', 'lastName', 'email'];
    }
    AssignedAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllManagers().subscribe(function (data) {
            _this.Manager = data['message'];
        });
        this.M_firstPanel = true;
        this.f_firstPanel = true;
    };
    AssignedAgentComponent.prototype.getAgent = function () {
        var _this = this;
        this.dataSource = [];
        if (this.managerId) {
            this.object = { managerid: this.managerId };
            this.service.getAssaignedAgentToManager(this.object).subscribe(function (data) {
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](data['message']);
                _this.f_secondPanel = true;
            });
        }
    };
    //-------------------------------------------------------------------------------
    AssignedAgentComponent.prototype.editTrainer = function () {
        // this.selectedTrainer = trainer; 
        this.f_firstPanel = false;
        this.f_secondPanel = true;
    };
    AssignedAgentComponent.prototype.cancelEdit = function () {
        this.f_firstPanel = true;
        this.f_secondPanel = false;
    };
    AssignedAgentComponent.prototype.finishEdit = function () {
        this.f_firstPanel = true;
        this.f_secondPanel = false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], AssignedAgentComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"])
    ], AssignedAgentComponent.prototype, "sort", void 0);
    AssignedAgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignedAgent',
            template: __webpack_require__(/*! ./assignedAgent.component.html */ "./src/app/layout/AssignedAgent/assignedAgent.component.html"),
            styles: [__webpack_require__(/*! ./assignedAgent.component.css */ "./src/app/layout/AssignedAgent/assignedAgent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AssignedAgentComponent);
    return AssignedAgentComponent;
}());



/***/ }),

/***/ "./src/app/layout/AssignedAgent/assignedAgent.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent.module.ts ***!
  \**************************************************************/
/*! exports provided: AssignedAgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedAgentModule", function() { return AssignedAgentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _assignedAgent_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assignedAgent-routing.module */ "./src/app/layout/AssignedAgent/assignedAgent-routing.module.ts");
/* harmony import */ var _assignedAgent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assignedAgent.component */ "./src/app/layout/AssignedAgent/assignedAgent.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var AssignedAgentModule = /** @class */ (function () {
    function AssignedAgentModule() {
    }
    AssignedAgentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _assignedAgent_routing_module__WEBPACK_IMPORTED_MODULE_3__["AssignedAgentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_assignedAgent_component__WEBPACK_IMPORTED_MODULE_4__["AssignedAgentComponent"]]
        })
    ], AssignedAgentModule);
    return AssignedAgentModule;
}());



/***/ })

}]);
//# sourceMappingURL=AssignedAgent-assignedAgent-module.js.map