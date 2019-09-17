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

module.exports = ".content-header{\r\n  position: relative;\r\n    padding: 15px 15px 0 15px;\r\n    background-color:transparent;\r\n    font:normal\r\n}\r\n\r\n.box{\r\n  position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #d2d6de;\r\n    margin-bottom: 20px;\r\n    /* width: 100%; */\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n    margin: 1% 1% 1% 1%;\r\n    /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n}\r\n\r\n.box-header{\r\n  color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\nsmall{\r\n    font-size: 15px;\r\n      display: inline-block;\r\n      padding-left: 4px;\r\n      font-weight: 300;\r\n      line-height: 1; \r\n      color: #777;\r\n      font-family: sans-serif;\r\n  }\r\n\r\n/*------------------Mat table -----RESPONSIVE-------*/\r\n\r\nbody {\r\n  font-family: 'Covered By Your Grace', cursive;\r\n  line-height: 1.25;\r\n  \r\n}\r\n\r\n@media screen and (max-width: 960px) {\r\n  .mat-table {\r\n    border: 0;\r\n    vertical-align: middle\r\n  }\r\n\r\n  .mat-table caption {\r\n    font-size: 1em;\r\n  }\r\n  \r\n\r\n  .mat-table .mat-row {\r\n    border-bottom: 5px solid #ddd;\r\n    display: block;\r\n  }\r\n  /*\r\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n  */\r\n  .mat-table .mat-cell {\r\n    border-bottom: 1px solid #ddd;\r\n    display: block;\r\n    font-size: 1em;\r\n    text-align: right;\r\n    margin: 2% 2% 2% 2%;\r\n    /* font-weight: bold; */\r\n    height:30px;\r\n    /* margin-bottom: 4%; */\r\n  }\r\n  .mat-table .mat-cell:before {\r\n    /*\r\n    * aria-label has no advantage, it won't be read inside a table\r\n    content: attr(aria-label);\r\n    */\r\n    content: attr(data-label);\r\n    float: left;\r\n    text-transform: uppercase;\r\n    font-weight: normal;\r\n    \r\n    font-size: .85em;\r\n  }\r\n  .mat-table .mat-cell:last-child {\r\n    border-bottom: 0;\r\n  }\r\n    .mat-table .mat-cell:first-child {\r\n    margin-top: 4%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0Fzc2lnbmVkQWdlbnQvYXNzaWduZWRBZ2VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0lBQ2hCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUI7QUFDSjs7QUFFQTtFQUNFLGtCQUFrQjtJQUNoQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxtQkFBbUI7SUFDbkIsZ0dBQWdHO0FBQ3BHOztBQUVBO0VBQ0UsV0FBVztJQUNULGNBQWM7SUFDZCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUdFO0lBQ0UsZUFBZTtNQUNiLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsZ0JBQWdCO01BQ2hCLGNBQWM7TUFDZCxXQUFXO01BQ1gsdUJBQXVCO0VBQzNCOztBQUNBLHFEQUFxRDs7QUFJdkQ7RUFDRSw2Q0FBNkM7RUFDN0MsaUJBQWlCOztBQUVuQjs7QUFHQTtFQUNFO0lBQ0UsU0FBUztJQUNUO0VBQ0Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOzs7RUFHQTtJQUNFLDZCQUE2QjtJQUM3QixjQUFjO0VBQ2hCO0VBQ0E7OztHQUdDO0VBQ0Q7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRTs7O0tBR0M7SUFDRCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7O0lBRW5CLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0lBQ0U7SUFDQSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvQXNzaWduZWRBZ2VudC9hc3NpZ25lZEFnZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1oZWFkZXJ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbiAgICBmb250Om5vcm1hbFxyXG59XHJcblxyXG4uYm94e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QyZDZkZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICBtYXJnaW46IDElIDElIDElIDElO1xyXG4gICAgLyogYm94LXNoYWRvdzogMXB4IDJweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50OyAqL1xyXG59XHJcblxyXG4uYm94LWhlYWRlcntcclxuICBjb2xvcjogIzQ0NDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuXHJcbiAgc21hbGx7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOyBcclxuICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLU1hdCB0YWJsZSAtLS0tLVJFU1BPTlNJVkUtLS0tLS0tKi9cclxuICBcclxuXHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogJ0NvdmVyZWQgQnkgWW91ciBHcmFjZScsIGN1cnNpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NjBweCkge1xyXG4gIC5tYXQtdGFibGUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZVxyXG4gIH1cclxuXHJcbiAgLm1hdC10YWJsZSBjYXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLm1hdC10YWJsZSAubWF0LXJvdyB7XHJcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAvKlxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XHJcbiAgKi9cclxuICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG1hcmdpbjogMiUgMiUgMiUgMiU7XHJcbiAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogNCU7ICovXHJcbiAgfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsOmJlZm9yZSB7XHJcbiAgICAvKlxyXG4gICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcclxuICAgIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XHJcbiAgICAqL1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBcclxuICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1jZWxsOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpmaXJzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0JTtcclxuICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/AssignedAgent/assignedAgent.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/AssignedAgent/assignedAgent.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;width:100%; height:100%;\">\r\n  <div style=\"margin-right: 1%;\">\r\n\r\n    <button mat-button (click)=\"manager()\"\r\n      style=\"float: right;background-color:rgb(146, 84, 226); max-width: 200px; max-height: 100px; margin-top:1%; color:white\">\r\n      <mat-icon>add</mat-icon> Assign Agent\r\n    </button>\r\n\r\n  </div>\r\n\r\n  <section class=\"content-header\" style=\"max-width:50%\">\r\n    <h2>\r\n      Manager\r\n      <small>Agent assigned to Managers</small>\r\n    </h2>\r\n  </section>\r\n\r\n  <div class=\"box\">\r\n\r\n    <mat-form-field [hideRequiredMarker]=\"true\" class=\"alignment\" style=\"padding-left:1%\">\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n\r\n  </div>\r\n\r\n  <div class=\"example-container box\">\r\n\r\n    <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n      <ng-container matColumnDef=\"S No\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> S No. </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let user; let i = index;\" data-label=\"S No\"> {{i+1}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"assignToManager\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Manager </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" data-label=\"assignToManager\"> {{row.assignToManager}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"agent\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Agent </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" data-label=\"agent\"> {{row.agent}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"assignedByadmin\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Assigned By Admin </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" data-label=\"assignedByadmin\"> {{row.assignedByadmin}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"createdAt\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Created At </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" data-label=\"createdAt\"> {{row.createdAt | date: 'dd/MMM/yyyy h:mm:ss a'}}\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"remark\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Remark </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let row\" data-label=\"remark\"> {{row.remark}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </mat-row>\r\n    </mat-table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n\r\n</div>"

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
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");



//import { AutoDialService } from '../../autoDialer.service';



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
        this.displayedColumns = ['S No', 'assignToManager', 'agent', 'assignedByadmin', 'createdAt', 'remark'];
    }
    AssignedAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllAssignedAgent().subscribe(function (data) {
            _this.AllAssignedAgents = data['message'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.AllAssignedAgents);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        this.service.getAllManagers().subscribe(function (data) {
            _this.Manager = data['message'];
        });
        this.M_firstPanel = true;
        this.f_firstPanel = true;
    };
    AssignedAgentComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    AssignedAgentComponent.prototype.getAgent = function () {
        //this.dataSource=[];
        if (this.managerId) {
            // this.object = { managerid : this.managerId }
            // this.service.getAllAssignedAgent(this.object).subscribe((data)=>{
            //     this.dataSource = new MatTableDataSource(data['message']);
            //     this.f_secondPanel = true;
            // })
        }
    };
    //-------------------------------------------------------------------
    AssignedAgentComponent.prototype.manager = function () {
        alert('manager calling');
        this.router.navigate(['/admin/manager']);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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