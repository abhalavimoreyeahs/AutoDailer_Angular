(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AllManager-allmanager-module"],{

/***/ "./src/app/layout/Employee/AllManager/allmanager-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/layout/Employee/AllManager/allmanager-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AllManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllManagerRoutingModule", function() { return AllManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allmanager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allmanager.component */ "./src/app/layout/Employee/AllManager/allmanager.component.ts");




var routes = [
    {
        path: '',
        component: _allmanager_component__WEBPACK_IMPORTED_MODULE_3__["AllManagerComponent"]
    }
];
var AllManagerRoutingModule = /** @class */ (function () {
    function AllManagerRoutingModule() {
    }
    AllManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AllManagerRoutingModule);
    return AllManagerRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/Employee/AllManager/allmanager.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/layout/Employee/AllManager/allmanager.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  .actions {\r\n    justify-content: flex-end;\r\n  }\r\n  \r\n  .container {\r\n    height: 100%;\r\n  }\r\n  \r\n  .active-list-item {\r\n    color: #3F51B5 !important; /* Note: You could also use a custom theme */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L0VtcGxveWVlL0FsbE1hbmFnZXIvYWxsbWFuYWdlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUIsRUFBRSw0Q0FBNEM7RUFDekUiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvRW1wbG95ZWUvQWxsTWFuYWdlci9hbGxtYW5hZ2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgLmFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuYWN0aXZlLWxpc3QtaXRlbSB7XHJcbiAgICBjb2xvcjogIzNGNTFCNSAhaW1wb3J0YW50OyAvKiBOb3RlOiBZb3UgY291bGQgYWxzbyB1c2UgYSBjdXN0b20gdGhlbWUgKi9cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/layout/Employee/AllManager/allmanager.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/Employee/AllManager/allmanager.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 style=\"color:black\">Manager Data</h3>\r\n"

/***/ }),

/***/ "./src/app/layout/Employee/AllManager/allmanager.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/Employee/AllManager/allmanager.component.ts ***!
  \********************************************************************/
/*! exports provided: AllManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllManagerComponent", function() { return AllManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");



//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';



var AllManagerComponent = /** @class */ (function () {
    function AllManagerComponent(toastrService, formBuilder, service, router) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
    }
    AllManagerComponent.prototype.ngOnInit = function () {
    };
    AllManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allmanager',
            template: __webpack_require__(/*! ./allmanager.component.html */ "./src/app/layout/Employee/AllManager/allmanager.component.html"),
            styles: [__webpack_require__(/*! ./allmanager.component.css */ "./src/app/layout/Employee/AllManager/allmanager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllManagerComponent);
    return AllManagerComponent;
}());



/***/ }),

/***/ "./src/app/layout/Employee/AllManager/allmanager.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/Employee/AllManager/allmanager.module.ts ***!
  \*****************************************************************/
/*! exports provided: AllManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllManagerModule", function() { return AllManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _allmanager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./allmanager-routing.module */ "./src/app/layout/Employee/AllManager/allmanager-routing.module.ts");
/* harmony import */ var _allmanager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allmanager.component */ "./src/app/layout/Employee/AllManager/allmanager.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");







var AllManagerModule = /** @class */ (function () {
    function AllManagerModule() {
    }
    AllManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _allmanager_routing_module__WEBPACK_IMPORTED_MODULE_3__["AllManagerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_allmanager_component__WEBPACK_IMPORTED_MODULE_4__["AllManagerComponent"]]
        })
    ], AllManagerModule);
    return AllManagerModule;
}());



/***/ })

}]);
//# sourceMappingURL=AllManager-allmanager-module.js.map