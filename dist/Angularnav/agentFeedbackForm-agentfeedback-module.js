(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agentFeedbackForm-agentfeedback-module"],{

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: AgentFeedbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFeedbackRoutingModule", function() { return AgentFeedbackRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agentfeedback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agentfeedback.component */ "./src/app/agent/agentFeedbackForm/agentfeedback.component.ts");




var routes = [
    {
        path: '',
        component: _agentfeedback_component__WEBPACK_IMPORTED_MODULE_3__["AgentFeedbackComponent"]
    }
];
var AgentFeedbackRoutingModule = /** @class */ (function () {
    function AgentFeedbackRoutingModule() {
    }
    AgentFeedbackRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AgentFeedbackRoutingModule);
    return AgentFeedbackRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  .example-form {\r\n    min-width: 250px;\r\n    max-width: 100%;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n  \r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWdlbnRGZWVkYmFja0Zvcm0vYWdlbnRmZWVkYmFjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0VBRUU7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2FnZW50RmVlZGJhY2tGb3JtL2FnZW50ZmVlZGJhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIC5leGFtcGxlLWZvcm0ge1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgXHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- \r\n<div>\r\n<form class=\"example-form\">\r\n    <mat-form-field class=\"example-full-width\" [color]=\"primary\" appearance=\"outline\">\r\n      <input matInput placeholder=\"Favorite food\" value=\"Sushi\">\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field class=\"example-full-width\"  [color]=\"primary\" appearance=\"outline\">\r\n      <textarea matInput placeholder=\"Leave a comment\" style=\"height:200px\"></textarea>\r\n    </mat-form-field>\r\n  </form>\r\n</div> -->\r\n<div class=\"container\">\r\n\r\n<mat-card >\r\n    <mat-card-header >\r\n      <mat-card-title><h2><b>Feedback</b></h2></mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n       \r\n        <form class=\"example-form\">\r\n            <mat-form-field class=\"example-full-width\" [color]=\"primary\" appearance=\"outline\">\r\n              <input matInput placeholder=\"Title\" value=\"\" style=\"font-size: 1.2rem;\">\r\n            </mat-form-field>\r\n          \r\n            <mat-form-field class=\"example-full-width\"  [color]=\"primary\" appearance=\"outline\">\r\n              <textarea matInput placeholder=\"Leave a comment\" style=\"height:200px;font-size: 1rem\" ></textarea>\r\n            </mat-form-field>\r\n          </form>\r\n     \r\n   \r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button  color=\"primary\" style=\"margin-left: 185px; padding:0% 7%\">Submit</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n</div>"

/***/ }),

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback.component.ts ***!
  \********************************************************************/
/*! exports provided: AgentFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFeedbackComponent", function() { return AgentFeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





//Dialog Box

var AgentFeedbackComponent = /** @class */ (function () {
    function AgentFeedbackComponent(toastrService, formBuilder, service, dialog) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.dialog = dialog;
    }
    AgentFeedbackComponent.prototype.ngOnInit = function () {
        //   this.service.getAgentFeedbackData().subscribe((data)=>{
        //       console.log(data);
        //       this.AgentData = data['message'];
        //       this.dataSource = new MatTableDataSource(this.AgentData);
        //       Assign the paginator *after* dataSource is set
        //       this.dataSource.paginator = this.paginator;
        //       this.dataSource.sort = this.sort;
        //   })
    };
    //notification
    AgentFeedbackComponent.prototype.showToaster = function () {
        this.toastrService.success('Data Saved Successfully');
    };
    AgentFeedbackComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed to save Data');
    };
    AgentFeedbackComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    AgentFeedbackComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('warning : Duplicate Data');
    };
    AgentFeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agentfeedback',
            template: __webpack_require__(/*! ./agentfeedback.component.html */ "./src/app/agent/agentFeedbackForm/agentfeedback.component.html"),
            styles: [__webpack_require__(/*! ./agentfeedback.component.css */ "./src/app/agent/agentFeedbackForm/agentfeedback.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_agent__WEBPACK_IMPORTED_MODULE_2__["AgentService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AgentFeedbackComponent);
    return AgentFeedbackComponent;
}());



/***/ }),

/***/ "./src/app/agent/agentFeedbackForm/agentfeedback.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/agent/agentFeedbackForm/agentfeedback.module.ts ***!
  \*****************************************************************/
/*! exports provided: AgentFeedbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentFeedbackModule", function() { return AgentFeedbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agentfeedback_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agentfeedback-routing.module */ "./src/app/agent/agentFeedbackForm/agentfeedback-routing.module.ts");
/* harmony import */ var _agentfeedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agentfeedback.component */ "./src/app/agent/agentFeedbackForm/agentfeedback.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var AgentFeedbackModule = /** @class */ (function () {
    function AgentFeedbackModule() {
    }
    AgentFeedbackModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _agentfeedback_routing_module__WEBPACK_IMPORTED_MODULE_3__["AgentFeedbackRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            entryComponents: [
                _agentfeedback_component__WEBPACK_IMPORTED_MODULE_4__["AgentFeedbackComponent"]
            ],
            declarations: [_agentfeedback_component__WEBPACK_IMPORTED_MODULE_4__["AgentFeedbackComponent"]]
        })
    ], AgentFeedbackModule);
    return AgentFeedbackModule;
}());



/***/ })

}]);
//# sourceMappingURL=agentFeedbackForm-agentfeedback-module.js.map