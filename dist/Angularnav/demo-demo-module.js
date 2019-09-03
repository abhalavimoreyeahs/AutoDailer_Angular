(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-demo-module"],{

/***/ "./src/app/layout/demo/demo-routing.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/demo/demo-routing.ts ***!
  \*********************************************/
/*! exports provided: DemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoRoutingModule", function() { return DemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo.component */ "./src/app/layout/demo/demo.component.ts");




var routes = [
    {
        path: '',
        component: _demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"]
    }
];
var DemoRoutingModule = /** @class */ (function () {
    function DemoRoutingModule() {
    }
    DemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DemoRoutingModule);
    return DemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/demo/demo.component.css":
/*!************************************************!*\
  !*** ./src/app/layout/demo/demo.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  td th{\r\n    text-align: center;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2RlbW8vZGVtby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZGVtby9kZW1vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbiAgdGQgdGh7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/demo/demo.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/demo/demo.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\r\n    <h4  style=\"padding-top: 20px; margin-left:20%\"><b>Parent and Child Scheduled Call Details</b></h4>\r\n    \r\n  </div>\r\n  <hr>\r\n  <div class=\"row\">\r\n    \r\n    <!-- <div  class=\"col-6\">\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">First Name</label>\r\n            <input ng-required=\"true\" type=\"text\" class=\"form-control\" id=\"firstname\"  [(ngModel)]=\"people.PeopleFirstName\" placeholder=\"First Name\" >\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Last Name</label>\r\n            <input  type=\"text\" class=\"form-control\" id=\"lastname\"  [(ngModel)]=\"people.PeopleLastName\" placeholder=\"Last Name\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Email</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"email\"  [(ngModel)]=\"people.Email\" placeholder=\"Email\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Password</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"password\"  [(ngModel)]=\"people.Password\" placeholder=\"Password\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Mobile</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"mobile\"  [(ngModel)]=\"people.Mobile\" placeholder=\"Mobile\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"name\">Status</label>\r\n            <input  type=\"text\" class=\"form-control\" id=\"status\"  [(ngModel)]=\"people.status\" placeholder=\"Status\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Select State</label>\r\n          <select id=\"state\" name=\"state\"  class=\"form-control\" [(ngModel)]=\"people.Stateid\"  placeholder=\"Select State\">\r\n              <option *ngFor=\"let state of stateList\" [ngValue]=\"state.Stateid\">\r\n                {{ state.StateName }}\r\n              </option>\r\n            </select>\r\n  \r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"name\">Select City</label>\r\n        <select id=\"city\" name=\"city\" class=\"form-control\" [(ngModel)]=\"people.Cityid\">\r\n            <option *ngFor=\"let city of cityList\" [ngValue]=\"city.Cityid\">\r\n              {{ city.CityName }}\r\n            </option>\r\n          </select>\r\n    </div>\r\n       \r\n    </div>  -->\r\n  \r\n  \r\n    <div  class=\"col-6\" >\r\n        <div>\r\n          <h4>First Scheduled Calls (Parent)</h4>\r\n                <table class=\"table\" style=\"border: 1px solid\">\r\n                        <thead style=\"height: 10%\">\r\n                        <tr>\r\n <th>S.NO</th>\r\n<th>  _id </th> \r\n<th>aLegUUID:       </th>        \r\n<th>isCustomerIntereseted</th> \r\n<th>descrptionOnCall</th> \r\n<th>callBackEndTime</th> \r\n<th>agentid</th> \r\n<th>customerMobNo</th> \r\n<th>callbackStatus</th> \r\n<th>parentid</th> \r\n<th>createdAt</th> \r\n<th>updatedAt</th> \r\n<th>callhangupsource</th> \r\n<th>durationCallEnd</th> \r\n<th>durationCallStart </th> \r\n                          <!-- <th *ngIf=\"isAdminBoolean\">Edit </th>       \r\n                          <th *ngIf=\"isAdminBoolean\">Delete</th> -->\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor =\"let item of parent; index as row\">\r\n                          <th scope=\"row\">{{row + 1}}</th>\r\n                          <!-- <td><img src={{item.productImage}} style=\"width:70px; height:60px\">&nbsp;&nbsp;{{item.name}} </td>\r\n                          <td>{{item.brand}}</td>\r\n                          <td>{{item.quantity}}</td>\r\n                          <td>{{item.price}}</td> -->\r\n<td> {{item._id}}</td>\r\n<td>{{item.aLegUUID}}</td>\r\n<td>{{item.isCustomerIntereseted}}</td>\r\n<td>{{item.descrptionOnCall}}</td>\r\n<td>{{item.callBackEndTime}}</td>\r\n<td>{{item.agentid}}</td>\r\n<td>{{item.customerMobNo}}</td>\r\n<td>{{item.callbackStatus}}</td>\r\n<td>{{item.parentid}}</td>\r\n<td>{{item.createdAt}}</td>\r\n<td>{{item.updatedAt}}</td>\r\n<td>{{item.callhangupsource}}</td>\r\n<td>{{item.durationCallEnd}}</td>\r\n<td>{{item.durationCallStart}}</td>\r\n                          <!-- <td> <button type=\"button\" class=\"btn btn-warning\" *ngIf=\"isAdminBoolean\"  (click)=\"editProduct(item._id)\">Edit</button></td>\r\n                          <td> <button type=\"button\" class=\"btn btn-danger\"  *ngIf=\"isAdminBoolean\" (click)=\"deleteProduct(item._id)\">Delete</button></td> -->\r\n                        </tr>\r\n                        </tbody>\r\n                      </table>\r\n        </div>\r\n        <div>\r\n          <h4>Child Scheduled calls </h4>\r\n                <table class=\"table\" style=\"border: 1px solid\">\r\n                        <thead style=\"height: 10%\">\r\n                        <tr>\r\n <th>S.NO</th>\r\n<th>  _id </th> \r\n<th>descrptionOnCall      </th>        \r\n<th>callBackStartTime</th> \r\n<th>callBackEndTime</th> \r\n\r\n<th>agentid</th> \r\n<th>customerMobNo</th> \r\n<th>callbackStatus</th> \r\n<th>parentid</th> \r\n<th>createdAt</th> \r\n<th>updatedAt</th> \r\n<th>callhangupsource</th> \r\n<th>durationCallEnd</th> \r\n<th>durationCallStart </th> \r\n                          <!-- <th *ngIf=\"isAdminBoolean\">Edit </th>       \r\n                          <th *ngIf=\"isAdminBoolean\">Delete</th> -->\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor =\"let item of child; index as row\">\r\n                          <th scope=\"row\">{{row + 1}}</th>\r\n                          <!-- <td><img src={{item.productImage}} style=\"width:70px; height:60px\">&nbsp;&nbsp;{{item.name}} </td>\r\n                          <td>{{item.brand}}</td>\r\n                          <td>{{item.quantity}}</td>\r\n                          <td>{{item.price}}</td> -->\r\n<td> {{item._id}}</td>\r\n<td>{{item.descrptionOnCall}}</td>\r\n<td>{{item.callBackStartTime}}</td>\r\n<td>{{item.callBackEndTime}}</td>\r\n\r\n<td>{{item.agentid}}</td>\r\n<td>{{item.customerMobNo}}</td>\r\n<td>{{item.callbackStatus}}</td>\r\n<td>{{item.parentid}}</td>\r\n<td>{{item.createdAt}}</td>\r\n<td>{{item.updatedAt}}</td>\r\n<td>{{item.callhangupsource}}</td>\r\n<td>{{item.durationCallEnd}}</td>\r\n<td>{{item.durationCallStart}}</td>\r\n                          <!-- <td> <button type=\"button\" class=\"btn btn-warning\" *ngIf=\"isAdminBoolean\"  (click)=\"editProduct(item._id)\">Edit</button></td>\r\n                          <td> <button type=\"button\" class=\"btn btn-danger\"  *ngIf=\"isAdminBoolean\" (click)=\"deleteProduct(item._id)\">Delete</button></td> -->\r\n                        </tr>\r\n                        </tbody>\r\n                      </table>\r\n        </div>\r\n      \r\n    </div>\r\n    \r\n  </div>\r\n  <!-- <div class=\"row  float-right\">\r\n      <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\" >\r\n        <i class=\"ft-x\"></i> Cancel\r\n      </button>\r\n      <button type=\"button\" class=\"btn btn-raised btn-primary\" (click) = \"onSave()\">\r\n        <i class=\"fa fa-check-square-o\"></i> Save\r\n      </button>\r\n    </div> -->\r\n"

/***/ }),

/***/ "./src/app/layout/demo/demo.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/demo/demo.component.ts ***!
  \***********************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//import { FarmService } from '../../farm.service';

//import { Router } from '@angular/router';

var DemoComponent = /** @class */ (function () {
    function DemoComponent(toastrService, formBuilder, service, router) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.people = {};
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.service.getParentAndChildScheduleCall().subscribe(function (data) {
            console.log(data);
            _this.parent = data['message'];
            _this.child = data['getChilds'];
        });
    };
    DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/layout/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.css */ "./src/app/layout/demo/demo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/layout/demo/demo.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/demo/demo.module.ts ***!
  \********************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo-routing */ "./src/app/layout/demo/demo-routing.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demo.component */ "./src/app/layout/demo/demo.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _demo_routing__WEBPACK_IMPORTED_MODULE_3__["DemoRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_demo_component__WEBPACK_IMPORTED_MODULE_4__["DemoComponent"]]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=demo-demo-module.js.map