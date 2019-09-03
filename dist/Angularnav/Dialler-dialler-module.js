(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Dialler-dialler-module"],{

/***/ "./src/app/agent/calls/Dialler/dialler-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DiallerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiallerRoutingModule", function() { return DiallerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialler.component */ "./src/app/agent/calls/Dialler/dialler.component.ts");




var routes = [
    {
        path: '',
        component: _dialler_component__WEBPACK_IMPORTED_MODULE_3__["DiallerComponent"],
    }
];
var DiallerRoutingModule = /** @class */ (function () {
    function DiallerRoutingModule() {
    }
    DiallerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DiallerRoutingModule);
    return DiallerRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/calls/Dialler/dialler.component.css":
/*!***********************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Dialler code*/\r\n\r\n\r\n.row {\r\n    margin: 0 auto;\r\n    width: 250px;\r\n    clear: both;\r\n    text-align: center;\r\n    font-family: 'Exo';\r\n  }\r\n\r\n\r\n.digit,\r\n  .digit {\r\n    float: left;\r\n    padding: 10px 30px; /* 10px 30px*/\r\n    width: 80px; \r\n    font-size: 2rem;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.sub {\r\n    font-size: 0.8rem;\r\n    color: grey;\r\n  }\r\n\r\n\r\n.container {\r\n    background-color: white;\r\n    width: 320px;\r\n    padding: 20px;\r\n    margin: 30px auto;\r\n    height: 480px;\r\n    text-align: center;\r\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  }\r\n\r\n\r\n#usr {\r\n    font-family: \"Exo\";\r\n   font-size: 1rem;\r\n   font-weight: bold;\r\n  }\r\n\r\n\r\n#output {\r\n    font-family: \"Exo\";\r\n    font-size: 2rem;\r\n    height: 40px;\r\n    font-weight: bold;\r\n    color: #1976d2;\r\n  }\r\n\r\n\r\n#call {\r\n    display: inline-block;\r\n    background-color: #66bb6a;\r\n    padding: 4px 30px;\r\n    margin: 10px;\r\n    color: white;\r\n    border-radius: 4px;\r\n    float: left;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n.botrow {\r\n    margin: 0  auto;\r\n    margin-left: 5%;\r\n    width: 320px; \r\n    clear: both;\r\n    text-align: center;\r\n    font-family: 'Exo';\r\n  }\r\n\r\n\r\n.digit:active,\r\n  .dig:active {\r\n    background-color: #e6e6e6;\r\n  }\r\n\r\n\r\n#call:hover {\r\n    background-color: #81c784;\r\n  }\r\n\r\n\r\n.dig {\r\n    float: left;\r\n    padding: 10px 25px;\r\n    margin: 10px;\r\n    width: 30px;\r\n    cursor: pointer;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvY2FsbHMvRGlhbGxlci9kaWFsbGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCOzs7QUFHaEI7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOzs7QUFFQTs7SUFFRSxXQUFXO0lBQ1gsa0JBQWtCLEVBQUUsYUFBYTtJQUNqQyxXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7RUFDakI7OztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7O0FBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiw0RUFBNEU7RUFDOUU7OztBQUNBO0lBQ0Usa0JBQWtCO0dBQ25CLGVBQWU7R0FDZixpQkFBaUI7RUFDbEI7OztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7OztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7RUFDakI7OztBQUVBO0lBQ0UsZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7OztBQUVBOztJQUVFLHlCQUF5QjtFQUMzQjs7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7OztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9jYWxscy9EaWFsbGVyL2RpYWxsZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIERpYWxsZXIgY29kZSovXHJcblxyXG5cclxuLnJvdyB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdFeG8nO1xyXG4gIH1cclxuICBcclxuICAuZGlnaXQsXHJcbiAgLmRpZ2l0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4OyAvKiAxMHB4IDMwcHgqL1xyXG4gICAgd2lkdGg6IDgwcHg7IFxyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuc3ViIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICB9XHJcbiAgI3VzciB7XHJcbiAgICBmb250LWZhbWlseTogXCJFeG9cIjtcclxuICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgI291dHB1dCB7XHJcbiAgICBmb250LWZhbWlseTogXCJFeG9cIjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMxOTc2ZDI7XHJcbiAgfVxyXG4gIFxyXG4gICNjYWxsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NmJiNmE7XHJcbiAgICBwYWRkaW5nOiA0cHggMzBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAuYm90cm93IHtcclxuICAgIG1hcmdpbjogMCAgYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHdpZHRoOiAzMjBweDsgXHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnRXhvJztcclxuICB9XHJcbiAgXHJcbiAgLmRpZ2l0OmFjdGl2ZSxcclxuICAuZGlnOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gIH1cclxuICBcclxuICAjY2FsbDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFjNzg0O1xyXG4gIH1cclxuICBcclxuICAuZGlnIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/agent/calls/Dialler/dialler.component.html":
/*!************************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Exo\" rel=\"stylesheet\">\r\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n<div class=\"container\" style=\"margin-left:2%\">\r\n  <!-- <div id=\"output\">{{MobileNumber}}</div> -->\r\n  <div class=\"form-group\">\r\n    \r\n      <input type=\"text\" class=\"form-control\" id=\"output\" value=\"MobileNumber\" [(ngModel)]=\"MobileNumber\" placeholder=\"+91801XXXXXXX\">\r\n    </div>\r\n  <div class=\"row\" >\r\n    <div class=\"digit\" id=\"one\" (click)=\"pushNumbers(1)\"><h4><b>1</b></h4></div>\r\n    <div class=\"digit\" id=\"two\" (click)=\"pushNumbers(2)\"><h4><b>2</b></h4>\r\n      <div class=\"sub\"><h5>ABC</h5></div>\r\n    </div>\r\n    <div class=\"digit\" id=\"three\" (click)=\"pushNumbers(3)\"><h4><b>3</b></h4>\r\n      <div class=\"sub\"><h5>DEF</h5></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"digit\" id=\"four\" (click)=\"pushNumbers(4)\"><h4><b>4</b></h4>\r\n      <div class=\"sub\"><h5>GHI</h5></div>\r\n    </div>\r\n    <div class=\"digit\" id=\"five\" (click)=\"pushNumbers(5)\"><h4><b>5</b></h4>\r\n      <div class=\"sub\"><h5>JKL</h5></div>\r\n    </div>\r\n    <div class=\"digit\" (click)=\"pushNumbers(6)\"><h4><b>6</b></h4>\r\n      <div class=\"sub\"><h5>MNO</h5></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"digit\" (click)=\"pushNumbers(7)\"><h4><b>7</b></h4>\r\n      <div class=\"sub\"><h5>PQRS</h5></div>\r\n    </div>\r\n    <div class=\"digit\" (click)=\"pushNumbers(8)\"><h4><b>8</b></h4>\r\n      <div class=\"sub\"><h5>TUV</h5></div>\r\n    </div>\r\n    <div class=\"digit\" (click)=\"pushNumbers(9)\"><h4><b>9</b></h4>\r\n      <div class=\"sub\"><h5>WXYZ</h5></div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"digit\" (click)=\"pushNumbers('*')\"><h4>*</h4>\r\n    </div>\r\n    <div class=\"digit\" (click)=\"pushNumbers(0)\"><h4><b>0</b></h4>\r\n    </div>\r\n    <div class=\"digit\" (click)=\"pushNumbers('#')\"><h4>#</h4>\r\n    </div>\r\n  </div>\r\n  <div class=\"botrow\"><i class=\"fa fa-star-o dig\" aria-hidden=\"true\"></i>\r\n    <div id=\"call\" style=\"margin-left: 5%;\" (click)=\"call()\"><i class=\"fa fa-phone\" aria-hidden=\"true\" ></i></div>\r\n    <i class=\"fa fa-long-arrow-left dig\" aria-hidden=\"true\" style=\"margin-left: 1%;\" (click)=\"removeNumber()\"></i>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/agent/calls/Dialler/dialler.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler.component.ts ***!
  \**********************************************************/
/*! exports provided: DiallerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiallerComponent", function() { return DiallerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");





var DiallerComponent = /** @class */ (function () {
    function DiallerComponent(breakpointObserver, service, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.dialog = dialog;
        //For Mobile Number
        this.MobileNumber = '';
    }
    DiallerComponent.prototype.ngOnInit = function () {
    };
    DiallerComponent.prototype.pushNumbers = function (number) {
        this.MobileNumber = this.MobileNumber.concat(number);
    };
    DiallerComponent.prototype.removeNumber = function () {
        this.MobileNumber = this.MobileNumber.slice(0, -1);
    };
    DiallerComponent.prototype.call = function () {
        alert(this.MobileNumber);
        console.log(this.MobileNumber);
    };
    DiallerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dialler',
            template: __webpack_require__(/*! ./dialler.component.html */ "./src/app/agent/calls/Dialler/dialler.component.html"),
            styles: [__webpack_require__(/*! ./dialler.component.css */ "./src/app/agent/calls/Dialler/dialler.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], DiallerComponent);
    return DiallerComponent;
}());



/***/ }),

/***/ "./src/app/agent/calls/Dialler/dialler.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/agent/calls/Dialler/dialler.module.ts ***!
  \*******************************************************/
/*! exports provided: DiallerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiallerModule", function() { return DiallerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dialler_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialler-routing.module */ "./src/app/agent/calls/Dialler/dialler-routing.module.ts");
/* harmony import */ var _dialler_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialler.component */ "./src/app/agent/calls/Dialler/dialler.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);








//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var DiallerModule = /** @class */ (function () {
    function DiallerModule() {
    }
    DiallerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _dialler_routing_module__WEBPACK_IMPORTED_MODULE_4__["DiallerRoutingModule"],
                _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["ScheduleModule"]
            ],
            providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["AgendaService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["DragAndDropService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["ResizeService"]],
            declarations: [_dialler_component__WEBPACK_IMPORTED_MODULE_5__["DiallerComponent"]]
        })
    ], DiallerModule);
    return DiallerModule;
}());



/***/ })

}]);
//# sourceMappingURL=Dialler-dialler-module.js.map