(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["onBoardEmployee-employee-module"],{

/***/ "./src/app/layout/onBoardEmployee/employee-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function() { return EmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee.component */ "./src/app/layout/onBoardEmployee/employee.component.ts");




var routes = [
    {
        path: '',
        component: _employee_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeComponent"]
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

/***/ "./src/app/layout/onBoardEmployee/employee.component.css":
/*!***************************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .my-form{\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 80%;\r\n  }\r\n   \r\n  .full-width {\r\n    width: 60%;\r\n  }\r\n   \r\n  .center{\r\n    width: 75%;\r\n    margin: 10px auto;\r\n  }\r\n   \r\n  .main-div{\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L29uQm9hcmRFbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0lBQ0csZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBR0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L29uQm9hcmRFbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5teS1mb3Jte1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAgXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9IFxyXG5cclxuXHJcbiAgLmNlbnRlcntcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/onBoardEmployee/employee.component.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n \r\n<mat-toolbar >\r\n        <div style=\"text-align:center\">\r\n                <span style=\"  display: inline-block;\r\n               \r\n                margin: 10px 10px 0 0;\r\n                padding: 5px 10px\">Register Employee</span>\r\n        </div>\r\n  </mat-toolbar>\r\n  <mat-card class=\"my-card\">      \r\n      <!-- CONTENT HERE -->\r\n  \r\n  <mat-card-content class=\"z-depth center\" flex=\"50\">\r\n    <form class=\"my-form\" [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\r\n       <mat-form-field class=\"full-width\">\r\n              <mat-label>Employee First Name</mat-label>\r\n              <!-- <input  matInput  placeholder=\"Employee First Name\"  [(ngModel)]=\"Employee.firstName\" name=\"firstName\"  required> -->\r\n              <input  matInput  placeholder=\"Employee First Name\"  formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"  required>\r\n              \r\n                <mat-error class=\"error-message\" *ngIf=\"accountDetailsForm.get('email').hasError(validation.type) && (accountDetailsForm.get('email').dirty || accountDetailsForm.get('email').touched)\">{{validation.message}}</mat-error>\r\n       \r\n           </mat-form-field><br>\r\n\r\n           <mat-form-field class=\"full-width\">\r\n              <mat-label>Employee Last Name</mat-label>\r\n              <!-- <input  matInput  placeholder=\"Employee Last Name\"  [(ngModel)]=\"Employee.lastName\" name=\"lastName\"  required> -->\r\n              <input  matInput  placeholder=\"Employee Last Name\"  [(ngModel)]=\"Employee.lastName\" name=\"lastName\"  required>\r\n           </mat-form-field><br>\r\n\r\n           <mat-form-field class=\"full-width\">\r\n              <mat-label>Employee Email</mat-label>\r\n              <input  matInput type=\"email\" placeholder=\"Employee Email\" name=\"email\"  [(ngModel)]=\"Employee.email\" required>\r\n           </mat-form-field><br>\r\n           <!-- <mat-form-field>\r\n                <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" (input)=\"onPasswordInput()\">\r\n                <mat-error *ngIf=\"password.hasError('required')\">Password is required</mat-error>\r\n                <mat-error *ngIf=\"password.hasError('minlength')\">Password must have at least {{minPw}} characters</mat-error>\r\n              </mat-form-field>\r\n            \r\n              <mat-form-field>\r\n                <input matInput type=\"password\" placeholder=\"Confirm password\" formControlName=\"password2\" (input)=\"onPasswordInput()\">\r\n                <mat-error *ngIf=\"password2.hasError('required')\">Please confirm your password</mat-error>\r\n                <mat-error *ngIf=\"password2.invalid && !password2.hasError('required')\">Passwords don't match</mat-error>\r\n              </mat-form-field> -->\r\n              <mat-form-field>\r\n                    <input matInput placeholder=\"New password\" type=\"password\" [(ngModel)]=\"Employee.password\" name=\"password\" required>\r\n                    <mat-error *ngIf=\"myForm.hasError('required', 'password')\">\r\n                        Please enter your newpassword\r\n                    </mat-error>\r\n                </mat-form-field><br>\r\n            \r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"Confirm password\" type=\"password\"  [errorStateMatcher]=\"matcher\">\r\n                      <mat-error *ngIf=\"myForm.hasError('notSame')\">\r\n                        Passwords do not match\r\n                    </mat-error>  \r\n                </mat-form-field><br>\r\n\r\n              <mat-form-field class=\"full-width\">\r\n                    <mat-label>Age</mat-label>\r\n                    <input  matInput  placeholder=\"age\" name=\"age\" [(ngModel)]=\"Employee.age\"  required>\r\n                 </mat-form-field><br>\r\n\r\n              <section class=\"example-section\">\r\n                    <label class=\"example-margin\">Gender:</label>\r\n                    <mat-radio-group name=\"gender\" [(ngModel)]=\"Employee.gender\" required> <!--[(ngModel)]=\"gender\"-->\r\n                      <mat-radio-button class=\"example-margin\" value=\"after\" style=\"margin-left: 5px\" value=\"male\"  >Male</mat-radio-button>\r\n                      <mat-radio-button class=\"example-margin\" value=\"before\" style=\"margin-left: 5px\" value=\"female\"   >Female</mat-radio-button>\r\n                      <mat-radio-button class=\"example-margin\" value=\"before\" style=\"margin-left: 5px\" value=\"other\"  >Other</mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </section>\r\n\r\n                  <mat-form-field class=\"full-width\">\r\n                        <mat-label>Mobile No</mat-label>\r\n                        <input  matInput  placeholder=\"Mobile Number\" name=\"mobile\" [(ngModel)]=\"Employee.mobile\" required>\r\n                     </mat-form-field><br>\r\n\r\n                     <mat-form-field hintLabel=\"select one\">\r\n                            <mat-select placeholder=\"Select Role\" [(ngModel)]=\"Employee.role\" name=\"role\" (ngModelChange)=\"selectRole()\">\r\n                            \r\n                                <mat-option *ngFor=\"let role of roles\" [value]=\"role.id\" >\r\n                                                    {{ role.name }}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            </mat-form-field><br>\r\n\r\n                            <mat-form-field class=\"full-width\" *ngIf=\"AgentBoolean\">\r\n                              <mat-label>Plivo Agent Username</mat-label>\r\n                              <input  matInput  placeholder=\"Plivo Agent User name\" name=\"plivoagentusername\" [(ngModel)]=\"Employee.plivoagentusername\" required>\r\n                           </mat-form-field>\r\n\r\n                           <mat-form-field class=\"full-width\" *ngIf=\"AgentBoolean\">\r\n                            <mat-label>Plivo Agent Password</mat-label>\r\n                            <input  matInput  placeholder=\"Plivo Agent Password\" name=\"plivoagentPassword\" [(ngModel)]=\"Employee.plivoagentPassword\" required>\r\n                         </mat-form-field>\r\n\r\n                         <mat-form-field class=\"full-width\" *ngIf=\"AgentBoolean\">\r\n                          <mat-label>Plivo Agent Alias</mat-label>\r\n                          <input  matInput  placeholder=\"Plivo Agent Alias\" name=\"plivoagnetalias\" [(ngModel)]=\"Employee.plivoagnetalias\" required>\r\n                       </mat-form-field>\r\n\r\n\r\n           <mat-form-field class=\"full-width\">\r\n              <mat-label>Address</mat-label>\r\n              <input  matInput  placeholder=\"Address\" name=\"address\" [(ngModel)]=\"Employee.address\">\r\n           </mat-form-field><br>\r\n\r\n           <mat-form-field class=\"full-width\">\r\n              <mat-label>City</mat-label>\r\n              <input  matInput  placeholder=\"City\"  name=\"city\" [(ngModel)]=\"Employee.city\">\r\n           </mat-form-field>\r\n        \r\n       \r\n          <!-- <mat-form-field>\r\n            <mat-label>Date of Birth</mat-label>\r\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field> -->\r\n\r\n      <mat-card-content>\r\n        <form class=\"my-form\">\r\n           <!--FORM FIELDS-->\r\n        </form>\r\n      </mat-card-content>\r\n      <!-- <mat-card-actions>\r\n        <button mat-raised-button (click)=\"register()\" color=\"primary\">REGISTER</button>\r\n      </mat-card-actions> -->\r\n      <div class=\"form-group\">\r\n        <button class=\"btn btn-primary\">Register</button>\r\n    </div>\r\n    </form>\r\n  </mat-card-content>\r\n    \r\n    <mat-card-actions>\r\n      <!-- REGISTER BUTTON -->\r\n    </mat-card-actions>\r\n  </mat-card>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/onBoardEmployee/employee.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee.component.ts ***!
  \**************************************************************/
/*! exports provided: EmployeeComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function() { return EmployeeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';


var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(formBuilder, service) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.Employee = {};
        this.AgentBoolean = false;
        this.roles = [
            { id: 1, name: 'Admin' },
            { id: 2, name: 'Manager' },
            { id: 3, name: 'Agent' },
        ];
        this.matcher = new MyErrorStateMatcher();
        // this.myForm = this.formBuilder.group({
        //     password: ['', [Validators.required]],
        //     confirmPassword: ['']
        //   }, { validator: this.checkPasswords });
        this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, {
            validator: this.checkPasswords,
        });
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    EmployeeComponent.prototype.selectRole = function () {
        debugger;
        if (this.Employee['role'] == 3) {
            this.AgentBoolean = true;
        }
        else {
            this.AgentBoolean = false;
        }
    };
    EmployeeComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.confirmPassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    EmployeeComponent.prototype.register = function () {
        if (this.registerForm.invalid) {
            return;
        }
        //  this.service.saveEmployee(this.Employee).subscribe((data)=>{
        //      console.log(data);
        //      if(data.success === true){
        //        alert('data successfully saved');
        //      }
        //  })
        //console.log(this.Employee);
    };
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__(/*! ./employee.component.html */ "./src/app/layout/onBoardEmployee/employee.component.html"),
            styles: [__webpack_require__(/*! ./employee.component.css */ "./src/app/layout/onBoardEmployee/employee.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_2__["AutoDialService"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());

var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        var invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    };
    return MyErrorStateMatcher;
}());



/***/ }),

/***/ "./src/app/layout/onBoardEmployee/employee.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/onBoardEmployee/employee.module.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeModule", function() { return EmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-routing.module */ "./src/app/layout/onBoardEmployee/employee-routing.module.ts");
/* harmony import */ var _employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee.component */ "./src/app/layout/onBoardEmployee/employee.component.ts");
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
//# sourceMappingURL=onBoardEmployee-employee-module.js.map