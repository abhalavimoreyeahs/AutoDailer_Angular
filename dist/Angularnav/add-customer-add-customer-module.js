(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-customer-add-customer-module"],{

/***/ "./src/app/agent/add-customer/add-customer-routing.ts":
/*!************************************************************!*\
  !*** ./src/app/agent/add-customer/add-customer-routing.ts ***!
  \************************************************************/
/*! exports provided: AddCustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerRoutingModule", function() { return AddCustomerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _add_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-customer.component */ "./src/app/agent/add-customer/add-customer.component.ts");




var routes = [
    {
        path: '',
        component: _add_customer_component__WEBPACK_IMPORTED_MODULE_3__["AddCustomerComponent"],
    }
];
var AddCustomerRoutingModule = /** @class */ (function () {
    function AddCustomerRoutingModule() {
    }
    AddCustomerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AddCustomerRoutingModule);
    return AddCustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/add-customer/add-customer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/agent/add-customer/add-customer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wide{\r\n    width: 65%;\r\n}\r\n\r\n/*----agnet status ring------*/\r\n\r\n::ng-deep .circle{\r\n    background-color:red;\r\n  }\r\n\r\n::ng-deep .ringing{\r\n    border: 3px solid red;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWRkLWN1c3RvbWVyL2FkZC1jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBLDhCQUE4Qjs7QUFDNUI7SUFDRSxvQkFBb0I7RUFDdEI7O0FBQ0E7SUFDRSxxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9hZGQtY3VzdG9tZXIvYWRkLWN1c3RvbWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2lkZXtcclxuICAgIHdpZHRoOiA2NSU7XHJcbn1cclxuXHJcbi8qLS0tLWFnbmV0IHN0YXR1cyByaW5nLS0tLS0tKi9cclxuICA6Om5nLWRlZXAgLmNpcmNsZXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLnJpbmdpbmd7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZWQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/agent/add-customer/add-customer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/agent/add-customer/add-customer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color: #ecf0f5;\">\n<div class=\"container\" style=\"padding:2% 2% 2% 2%;background-color:  #fff;\">\n    <form class=\"form\" style=\"text-align:center\">\n        <div class=\"form-body\">\n          <h4 class=\"form-section\" style=\"text-align:center;padding:3%\" ><i class=\"ft-user\"></i> Add Customer</h4>\n          <div class=\"row\">\n                <div class=\"col\">\n      \n                  <mat-form-field class=\"wide\">\n                    <mat-label>Customer Name :</mat-label>\n               \n                    <input matInput [(ngModel)]=\"addCustomer.name\" name=\"name\" required>                \n                  </mat-form-field>\n                </div>\n                <div class=\"col\">\n        \n                  <mat-form-field class=\"wide\">\n                    <mat-label>Customer Phone Number</mat-label>\n                  \n                    <input matInput placeholder=\"Caller Name\"  [(ngModel)]=\"addCustomer.mobile\" name=\"mobile\" [value]=\"\" required>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                    <div class=\"col-md-6\">\n          \n                      <mat-form-field class=\"wide\">\n                        <mat-label>Date of Birth</mat-label>\n                        <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"addCustomer.dob\" name=\"dob\" placeholder=\"Choose a date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>                     \n                      </mat-form-field >\n                    </div>\n                    <div class=\"col-md-6\">\n                  \n                    <mat-form-field class=\"wide\">\n                            <mat-label>Address</mat-label>\n                            <input matInput  [(ngModel)]=\"addCustomer.address\" name=\"address\" required >  \n                             <!-- <mat-select  (ngModelChange)=\"onChange($event)\" required>\n                                <mat-option *ngFor=\"let item of Agent\" [value]=\"item.value\">\n                                  {{item.name}}\n                                </mat-option>\n                              </mat-select> -->\n                   </mat-form-field>\n                    </div>\n                  </div>\n\n          <div class=\"row\">\n              <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\n          <mat-form-field style=\"width:100%\">\n            <mat-label>Email</mat-label>\n            <input matInput [(ngModel)]=\"addCustomer.email\" name=\"email\" required >  \n            <!-- <textarea matInput placeholder=\"Leave a comment\"   value=\"\" required></textarea>                            -->\n          </mat-form-field>\n        </div>\n          </div>\n  \n        <div class=\"row\">\n            <div class=\"col\">\n  \n              <mat-form-field class=\"wide\">\n                <mat-label>Last contacted :</mat-label>\n           \n                <input matInput [(ngModel)]=\"addCustomer.lastContacted\" name=\"lastContacted\" required>                \n              </mat-form-field>\n            </div>\n            <div class=\"col\">\n    \n              <mat-form-field class=\"wide\">\n                <mat-label>Last Customer Status</mat-label>\n              \n                <mat-select [(ngModel)]=\"addCustomer.lastCustomerStatus\" name=\"lastCustomerStatus\"  required>\n                    <mat-option *ngFor=\"let item of Agent\" [value]=\"item.value\">\n                      {{item.name}}\n                    </mat-option>\n                  </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <div class=\"row\">\n              <div class=\"col\">\n    \n                <mat-form-field class=\"wide\">\n                  <mat-label>Registration Status :</mat-label>\n             \n                  <mat-select  [(ngModel)]=\"addCustomer.registrationStatus\" name=\"registrationStatus\" required>\n                      <mat-option *ngFor=\"let item of RegistrationStatus\" [value]=\"item.value\">\n                        {{item.name}}\n                      </mat-option>\n                    </mat-select>           \n                </mat-form-field>\n              </div>\n              <div class=\"col\">\n      \n                <mat-form-field class=\"wide\">\n                  <mat-label>Success Rate Potential</mat-label>\n                  <mat-select  [(ngModel)]=\"addCustomer.successRate\" name=\"successRate\" required>\n                      <mat-option *ngFor=\"let item of SuccessRate\" [value]=\"item.value\">\n                        {{item.name}}\n                      </mat-option>\n                    </mat-select>\n                  <!-- <input matInput placeholder=\"Caller Name\"  [value]=\"\" required> -->\n                </mat-form-field>\n              </div>\n            </div>\n         \n        </div>\n\n        <div class=\"form-actions\" style=\"padding:3%\">\n                <button mat-button  cdkFocusInitial class=\"mat-raised-button mat-primary\"\n                style=\"width:100px\" (click)=\"submit()\">Submit</button>\n        \n        </div>\n      </form>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/agent/add-customer/add-customer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/agent/add-customer/add-customer.component.ts ***!
  \**************************************************************/
/*! exports provided: AddCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerComponent", function() { return AddCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddCustomerComponent = /** @class */ (function () {
    function AddCustomerComponent(agentService, toastrService, router) {
        this.agentService = agentService;
        this.toastrService = toastrService;
        this.router = router;
        this.addCustomer = {};
        this.Agent = [
            { value: 0, name: "Deal done" },
            { value: 1, name: "Introduction calls" },
            { value: 2, name: "Follow up calls" },
            //{value:3, name: "Deal done"},
            { value: 3, name: "Callback" },
            { value: 4, name: "Voicemail" },
            { value: 5, name: "Blacklist" },
            { value: 6, name: "Number does not match" },
            { value: 7, name: "Underage" },
            { value: 8, name: "Duplicate" },
        ];
        this.SuccessRate = [
            { value: 0, name: "low" },
            { value: 1, name: "medium" },
            { value: 2, name: "high" } //low medium high
        ];
        this.RegistrationStatus = [
            { value: 0, name: "lead" },
            { value: 1, name: "demo" },
            { value: 2, name: "real" }
        ];
    }
    AddCustomerComponent.prototype.ngOnInit = function () {
    };
    AddCustomerComponent.prototype.submit = function () {
        var _this = this;
        //alert('submit')
        console.log(this.addCustomer);
        this.agentService.addCustomerByAgent(this.addCustomer).subscribe(function (data) {
            console.log(data);
            _this.showToaster(); //myonboardCustomers
            _this.router.navigate(["/agent/myonboardCustomers"]);
            _this.addCustomer = {};
        });
    };
    //notification
    AddCustomerComponent.prototype.showToaster = function () {
        this.toastrService.success('Data saved Successfully');
    };
    AddCustomerComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('unsuccessful');
    };
    AddCustomerComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    AddCustomerComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('this is warning');
    };
    AddCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-customer',
            template: __webpack_require__(/*! ./add-customer.component.html */ "./src/app/agent/add-customer/add-customer.component.html"),
            styles: [__webpack_require__(/*! ./add-customer.component.css */ "./src/app/agent/add-customer/add-customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_agent__WEBPACK_IMPORTED_MODULE_2__["AgentService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AddCustomerComponent);
    return AddCustomerComponent;
}());



/***/ }),

/***/ "./src/app/agent/add-customer/add-customer.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/agent/add-customer/add-customer.module.ts ***!
  \***********************************************************/
/*! exports provided: AddCustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCustomerModule", function() { return AddCustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_customer_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-customer-routing */ "./src/app/agent/add-customer/add-customer-routing.ts");
/* harmony import */ var _add_customer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-customer.component */ "./src/app/agent/add-customer/add-customer.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);







// import { ToastrModule } from 'ngx-toastr';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var AddCustomerModule = /** @class */ (function () {
    function AddCustomerModule() {
    }
    AddCustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _add_customer_routing__WEBPACK_IMPORTED_MODULE_4__["AddCustomerRoutingModule"],
            ],
            declarations: [_add_customer_component__WEBPACK_IMPORTED_MODULE_5__["AddCustomerComponent"]]
        })
    ], AddCustomerModule);
    return AddCustomerModule;
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
//# sourceMappingURL=add-customer-add-customer-module.js.map