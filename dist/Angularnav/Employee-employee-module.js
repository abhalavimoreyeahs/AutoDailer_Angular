(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Employee-employee-module"],{

/***/ "./src/app/layout/Employee/employee-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/Employee/employee-routing.module.ts ***!
  \************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "./src/app/layout/Employee/employee.component.ts");




var routes = [
    {
        path: '',
        component: _employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"],
        children: [
            { path: '', redirectTo: 'AllManager', pathMatch: 'prefix' },
            { path: 'AllManager', loadChildren: './AllManager/allmanager.module#AllManagerModule' },
            { path: 'AllAgents', loadChildren: './AllAgent/allagents.module#AllAgentsModule' },
            // { path: 'AgentAssignment', loadChildren: './AssignedAgent/assignedAgent.module#AssignedAgentModule' },
            { path: 'edit', loadChildren: './EditAssignedAgent/editAssignedAgent.module#EditAssignedAgentModule' },
        ]
    }
];
var EmployeeRoutingModule = /** @class */ (function () {
    function EmployeeRoutingModule() {
    }
    EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EmployeeRoutingModule);
    return EmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/Employee/employee.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/Employee/employee.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item {\r\n  margin: 2% 2% 2% 2%;\r\n}\r\n\r\nbutton{\r\n  background-color: #f5f5f5;\r\n  margin: 2% 2% 2% 2%;\r\n}\r\n\r\nbutton.active{\r\n  background-color:mediumpurple;\r\n}\r\n\r\n/* .my-form{\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 80%;\r\n  }\r\n   \r\n  .full-width {\r\n    width: 60%;\r\n  } \r\n\r\n\r\n  .center{\r\n    width: 75%;\r\n    margin: 10px auto;\r\n  }\r\n  \r\n  .main-div{\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  table {\r\n    width: 95%;\r\n    margin: 20px 20px 20px 20px; \r\n  }\r\n\r\n  .add-files-btn {\r\n    float: right;\r\n  }\r\n  \r\n  :host {\r\n    height: 100%;\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .actions {\r\n    justify-content: flex-end;\r\n  }\r\n  \r\n  .container {\r\n    height: 100%;\r\n  } */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E2Q0siLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvRW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1saXN0LWl0ZW0ge1xyXG4gIG1hcmdpbjogMiUgMiUgMiUgMiU7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gIG1hcmdpbjogMiUgMiUgMiUgMiU7XHJcbn1cclxuXHJcbmJ1dHRvbi5hY3RpdmV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjptZWRpdW1wdXJwbGU7XHJcbn1cclxuXHJcbi8qIC5teS1mb3Jte1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAgXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9IFxyXG5cclxuXHJcbiAgLmNlbnRlcntcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4OyBcclxuICB9XHJcblxyXG4gIC5hZGQtZmlsZXMtYnRuIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3Qge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICBcclxuICAuYWN0aW9ucyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9ICovXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/Employee/employee.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/Employee/employee.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar >\r\n  <mat-toolbar-row>\r\n    <!-- <span>Employees</span>\r\n    <span class=\"example-spacer\"></span> -->\r\n    <!-- <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\r\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon> -->\r\n\r\n    <mat-list-item >\r\n    <button  mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee/AllManager']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n      <mat-icon>group</mat-icon>\r\n      Manager\r\n    </button>\r\n  </mat-list-item>\r\n\r\n  <mat-list-item >\r\n    <button  mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee/AllAgents']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n      <mat-icon>group</mat-icon>\r\n      Agent\r\n    </button>\r\n  </mat-list-item>\r\n\r\n  <!-- <mat-list-item >\r\n    <button  mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee/AgentAssignment']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n      <mat-icon>assignment</mat-icon>\r\n      Agent Assignment Module\r\n    </button>\r\n  </mat-list-item> -->\r\n\r\n  <!-- <mat-list-item>\r\n    <button  mat-flat-button id=\"btn\" [routerLink]=\"['/admin/viewEmployee/edit']\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n     \r\n      Edit Assigned Agent\r\n    </button>\r\n  </mat-list-item> -->\r\n\r\n  </mat-toolbar-row>\r\n\r\n  <!-- <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4\" style=\"background-color:lavender;\">.col-sm-4</div>\r\n      <div class=\"col-sm-8\" style=\"background-color:lavenderblush;\">.col-sm-8</div>\r\n    </div>\r\n  </div> -->\r\n</mat-toolbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layout/Employee/employee.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/Employee/employee.component.ts ***!
  \*******************************************************/
/*! exports provided: EmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';



var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(toastrService, formBuilder, service, router) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/layout/Employee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/layout/Employee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/layout/Employee/employee.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/Employee/employee.module.ts ***!
  \****************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/layout/Employee/employee-routing.module.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee.component */ "./src/app/layout/Employee/employee.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var EmployeeModule = /** @class */ (function () {
    function EmployeeModule() {
    }
    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeComponent"]]
        })
    ], EmployeeModule);
    return EmployeeModule;
}());



/***/ })

}]);
//# sourceMappingURL=Employee-employee-module.js.map