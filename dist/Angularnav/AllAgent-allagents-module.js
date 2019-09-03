(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AllAgent-allagents-module"],{

/***/ "./src/app/layout/Employee/AllAgent/allagents-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/Employee/AllAgent/allagents-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: AllAgentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAgentsRoutingModule", function() { return AllAgentsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allagents_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allagents.component */ "./src/app/layout/Employee/AllAgent/allagents.component.ts");




var routes = [
    {
        path: '',
        component: _allagents_component__WEBPACK_IMPORTED_MODULE_3__["AllAgentsComponent"]
    }
];
var AllAgentsRoutingModule = /** @class */ (function () {
    function AllAgentsRoutingModule() {
    }
    AllAgentsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AllAgentsRoutingModule);
    return AllAgentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/Employee/AllAgent/allagents.component.css":
/*!******************************************************************!*\
  !*** ./src/app/layout/Employee/AllAgent/allagents.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "background{\r\n  background-color: #ecf0f5;\r\n}\r\n.content-header{\r\n  position: relative;\r\n    padding: 15px 15px 0 15px;\r\n    background-color:transparent;\r\n    font:normal\r\n}\r\n.box{\r\n  position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #d2d6de;\r\n    margin-bottom: 20px;\r\n    /* width: 100%; */\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n    margin: 1% 1% 1% 1%;\r\n    /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n}\r\n.box-header{\r\n  color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\nbutton{\r\n margin:2% 2% 2% 2%;\r\n}\r\n.actions {\r\n    justify-content: flex-end;\r\n  }\r\n.container {\r\n    height: 100%;\r\n  }\r\n.active-list-item {\r\n    color: #3F51B5 !important; /* Note: You could also use a custom theme */\r\n  }\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n    margin-left:2%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0VtcGxveWVlL0FsbEFnZW50L2FsbGFnZW50cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7SUFDaEIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QjtBQUNKO0FBRUE7RUFDRSxrQkFBa0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLGdHQUFnRztBQUNwRztBQUVBO0VBQ0UsV0FBVztJQUNULGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7QUFFRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSx5QkFBeUIsRUFBRSw0Q0FBNEM7RUFDekU7QUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9FbXBsb3llZS9BbGxBZ2VudC9hbGxhZ2VudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJhY2tncm91bmR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjBmNTtcclxufVxyXG4uY29udGVudC1oZWFkZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBmb250Om5vcm1hbFxyXG59XHJcblxyXG4uYm94e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QyZDZkZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICBtYXJnaW46IDElIDElIDElIDElO1xyXG4gICAgLyogYm94LXNoYWRvdzogMXB4IDJweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4uYm94LWhlYWRlcntcclxuICBjb2xvcjogIzQ0NDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gbWFyZ2luOjIlIDIlIDIlIDIlO1xyXG59XHJcblxyXG4gIC5hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZS1saXN0LWl0ZW0ge1xyXG4gICAgY29sb3I6ICMzRjUxQjUgIWltcG9ydGFudDsgLyogTm90ZTogWW91IGNvdWxkIGFsc28gdXNlIGEgY3VzdG9tIHRoZW1lICovXHJcbiAgfVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDoyJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/layout/Employee/AllAgent/allagents.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/Employee/AllAgent/allagents.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;\">\r\n    <mat-form-field>\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n      </mat-form-field>\r\n      \r\n <div class=\"box\" >\r\n  <mat-table [dataSource]=\"dataSource\" matSort *ngIf=\"AgentsDetails\">\r\n     \r\n<!-- <ng-container matColumnDef=\"Image\">\r\n       <mat-header-cell *matHeaderCellDef > Image</mat-header-cell>\r\n       <mat-cell *matCellDef=\"let user\">\r\n            <img src=\"../../../assets/no-photo.png\"  style=\"width:60px;width:60px;margin:5% 5% 5% 5%\"> \r\n       </mat-cell>\r\n     </ng-container> -->\r\n     <ng-container matColumnDef=\"S No\">\r\n\r\n        <mat-header-cell *matHeaderCellDef><b>S No</b></mat-header-cell>\r\n        <mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </mat-cell>\r\n      </ng-container>\r\n\r\n    <ng-container matColumnDef=\"firstName\" >\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header><b> First Name </b> </mat-header-cell>    \r\n      <mat-cell *matCellDef=\"let user\" >\r\n            <!-- <img src=\"../../../assets/men.jpg\"  style=\"width:40px;width:40px;margin:5% 5% 5% 5%\">  -->\r\n        {{user.users.firstName  | titlecase}}\r\n        </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"email\">\r\n       <mat-header-cell *matHeaderCellDef mat-sort-header><b>Email Address</b></mat-header-cell>\r\n       <mat-cell *matCellDef=\"let user\">{{user.users.email}}</mat-cell>\r\n     </ng-container>\r\n\r\n     <ng-container matColumnDef=\"lastName\">\r\n         <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Last Name</b></mat-header-cell>\r\n         <mat-cell *matCellDef=\"let user\">{{user.users.lastName  | titlecase}}</mat-cell>\r\n       </ng-container>\r\n\r\n       <ng-container matColumnDef=\"details\">\r\n            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Details</b></mat-header-cell>\r\n            <mat-cell *matCellDef=\"let user\">no data</mat-cell>\r\n          </ng-container>\r\n\r\n       <ng-container matColumnDef=\"edit\">\r\n           <mat-header-cell *matHeaderCellDef><b>Edit</b></mat-header-cell>\r\n           <mat-cell *matCellDef=\"let user\">\r\n            <button mat-icon-button color=\"accent\" (click)=\"redirectToUpdate()\">\r\n                <mat-icon class=\"mat-18\">system_update</mat-icon>\r\n            </button>\r\n           </mat-cell>\r\n         </ng-container>\r\n         <ng-container matColumnDef=\"delete\">\r\n            <mat-header-cell *matHeaderCellDef><b>Delete</b></mat-header-cell>\r\n            <mat-cell *matCellDef=\"let user\">\r\n                <button mat-icon-button color=\"warn\" (click)=\"redirectToDelete()\">\r\n                    <mat-icon class=\"mat-18\">delete</mat-icon>\r\n                </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n \r\n       <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n       </mat-header-row>\r\n       <mat-row *matRowDef=\"let row; columns: displayedColumns\" ></mat-row>\r\n  </mat-table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n   </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/layout/Employee/AllAgent/allagents.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/Employee/AllAgent/allagents.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllAgentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAgentsComponent", function() { return AllAgentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");




//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';








var AllAgentsComponent = /** @class */ (function () {
    function AllAgentsComponent(toastrService, formBuilder, service, router, breakpointObserver, dialog) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__["SelectionModel"](true, []);
        // mat table
        this.displayedColumns = ['S No', 'firstName', 'lastName', 'email', 'details', 'edit', 'delete'];
    }
    AllAgentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllAgents().subscribe(function (data) {
            console.log('data:', data);
            _this.AgentsDetails = data['message'];
            //this.dataSource =this.CustomerDetails;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.AgentsDetails);
            // Assign the paginator *after* dataSource is set
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    // dataSource = this.service.getAllCustomer();
    AllAgentsComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    /** Whether the number of selected elements matches the total number of rows. */
    AllAgentsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    AllAgentsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginator"])
    ], AllAgentsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"])
    ], AllAgentsComponent.prototype, "sort", void 0);
    AllAgentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allagents',
            template: __webpack_require__(/*! ./allagents.component.html */ "./src/app/layout/Employee/AllAgent/allagents.component.html"),
            styles: [__webpack_require__(/*! ./allagents.component.css */ "./src/app/layout/Employee/AllAgent/allagents.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], AllAgentsComponent);
    return AllAgentsComponent;
}());



/***/ }),

/***/ "./src/app/layout/Employee/AllAgent/allagents.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/Employee/AllAgent/allagents.module.ts ***!
  \**************************************************************/
/*! exports provided: AllAgentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllAgentsModule", function() { return AllAgentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _allagents_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allagents-routing.module */ "./src/app/layout/Employee/AllAgent/allagents-routing.module.ts");
/* harmony import */ var _allagents_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allagents.component */ "./src/app/layout/Employee/AllAgent/allagents.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");







var AllAgentsModule = /** @class */ (function () {
    function AllAgentsModule() {
    }
    AllAgentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _allagents_routing_module__WEBPACK_IMPORTED_MODULE_3__["AllAgentsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_allagents_component__WEBPACK_IMPORTED_MODULE_4__["AllAgentsComponent"]]
        })
    ], AllAgentsModule);
    return AllAgentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=AllAgent-allagents-module.js.map