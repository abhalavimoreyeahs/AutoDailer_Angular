(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-break-break-module"],{

/***/ "./src/app/agent/status/break/break-dialogBox.html":
/*!*********************************************************!*\
  !*** ./src/app/agent/status/break/break-dialogBox.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 mat-dialog-title style=\"text-align: center\">On Break</h2>\n<mat-dialog-content style=\"text-align: center\">\n        <mat-form-field>\n                <mat-label>Change Status</mat-label>\n                 <mat-select [(ngModel)]=\"select\" >\n                        <mat-option  [value]=\"0\"  [(ngModel)]=\"data.value\" name=\"value\"> Active </mat-option>\n                        <mat-option  [value]=\"1\"   [(ngModel)]=\"data.value\" name=\"value\"> Manual </mat-option>\n                 </mat-select>\n       </mat-form-field>   \n        <!-- <div class=\"row\">\n                <div class=\"col\" style=\"margin-left:5%\">\n                        <mat-form-field>\n                                <mat-label>Caller Name</mat-label>\n                                <input  matInput  placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.name\" name=\"name\" [value]=\"\" required>                      \n                       </mat-form-field><br>\n                       <mat-form-field *ngIf=\"select\">\n                            <mat-label>CallBack Date</mat-label>\n                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data.startdate\"  name=\"startdate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>   \n                    </mat-form-field>                  \n                </div>\n                <div class=\"col\">                  \n                        <mat-form-field>\n                                <mat-label>Change Status</mat-label>\n                                 <mat-select [(ngModel)]=\"select\" >\n                                        <mat-option  [value]=\"0\"> Active </mat-option>\n                                        <mat-option  [value]=\"1\"> Manual </mat-option>\n                                 </mat-select>\n                       </mat-form-field>                            \n                </div>\n              </div> -->\n</mat-dialog-content>\n\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\n    <!-- <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:100px\">No Thanks</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:100px\">Ok</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/agent/status/break/break-reason.html":
/*!******************************************************!*\
  !*** ./src/app/agent/status/break/break-reason.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"javascript:void(0)\">\n        <mat-icon style=\"float:right;margin-top:-3%;margin-right:-3%;color:lightgray\" (click)=\"onNoClick()\">clear\n        </mat-icon>\n</a>\n<h2 mat-dialog-title style=\"text-align: center\">Break Reason</h2>\n<mat-dialog-content style=\"text-align:center\">\n        <!-- <div class=\"row\"> -->\n\n        <mat-form-field>\n                <!-- <mat-label>Break Reason</mat-label>\n                        <input   matInput  placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.reason\" name=\"reason\" [value]=\"\" required>  -->\n\n                <mat-label>Break Reason</mat-label>\n\n                <mat-select [(ngModel)]=\"data.reason\" name=\"reason\" required>\n                        <mat-option *ngFor=\"let item of Break\" [value]=\"item.value\">\n                                {{item.name}}\n                        </mat-option>\n                </mat-select>\n        </mat-form-field> <br>\n\n</mat-dialog-content>\n\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\n        <!-- <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:100px\">No Thanks</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\n        <button mat-button (click)=\"ok()\" cdkFocusInitial class=\"mat-raised-button mat-primary\"\n                style=\"width:100px\">Submit</button>\n</mat-dialog-actions>\n\n<!-------------------------------------NEW CODE ------------------------------------>"

/***/ }),

/***/ "./src/app/agent/status/break/break-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/agent/status/break/break-routing.module.ts ***!
  \************************************************************/
/*! exports provided: BreakRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakRoutingModule", function() { return BreakRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _break_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./break.component */ "./src/app/agent/status/break/break.component.ts");




var routes = [
    {
        path: '',
        component: _break_component__WEBPACK_IMPORTED_MODULE_3__["BreakComponent"],
    }
];
var BreakRoutingModule = /** @class */ (function () {
    function BreakRoutingModule() {
    }
    BreakRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BreakRoutingModule);
    return BreakRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/status/break/break.component.css":
/*!********************************************************!*\
  !*** ./src/app/agent/status/break/break.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  /* background-image: url('../../../../assets/autodial_img-1-01.jpeg');\n  background-repeat:no-repeat;\n position: relative;\n  background-size: 100%;\n  background-position-x: 100%;\n  background-position-y: 120%;\n  height:100%; \n opacity: 0.9; */\n \n  /* Full height */\n  height: 100%; \n  background-image: url('autodial_img-1-01.jpeg');\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  opacity: 0.9;\n}\n\n/*----agnet status ring------*/\n\n::ng-deep .circle{\n  background-color: gray;\n}\n\n::ng-deep .ringing{\n  border: 3px solid gray;\n}\n\n.grid-container {\n    margin: 20px;\n  }\n\n.dashboard-card {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n  }\n\n.more-button {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n  }\n\n.dashboard-card-content {\n    text-align: center;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL2JyZWFrL2JyZWFrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTs7Ozs7OztnQkFPYzs7RUFFZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLCtDQUFrRTtFQUNsRSxzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBLDhCQUE4Qjs7QUFFOUI7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9zdGF0dXMvYnJlYWsvYnJlYWsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9hdXRvZGlhbF9pbWctMS0wMS5qcGVnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcbiBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDEyMCU7XG4gIGhlaWdodDoxMDAlOyBcbiBvcGFjaXR5OiAwLjk7ICovXG4gXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIGhlaWdodDogMTAwJTsgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2F1dG9kaWFsX2ltZy0xLTAxLmpwZWcnKTtcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgb3BhY2l0eTogMC45O1xufVxuXG4vKi0tLS1hZ25ldCBzdGF0dXMgcmluZy0tLS0tLSovXG5cbjo6bmctZGVlcCAuY2lyY2xle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuOjpuZy1kZWVwIC5yaW5naW5ne1xuICBib3JkZXI6IDNweCBzb2xpZCBncmF5O1xufVxuXG4uZ3JpZC1jb250YWluZXIge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICBcbiAgLmRhc2hib2FyZC1jYXJkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgcmlnaHQ6IDE1cHg7XG4gICAgYm90dG9tOiAxNXB4O1xuICB9XG4gIFxuICAubW9yZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDVweDtcbiAgICByaWdodDogMTBweDtcbiAgfVxuICBcbiAgLmRhc2hib2FyZC1jYXJkLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/agent/status/break/break.component.html":
/*!*********************************************************!*\
  !*** ./src/app/agent/status/break/break.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <div style=\"display: flex;\n    justify-content: center;\n    align-items: center;width:100%; height: 100%\">\n    <h2 style=\"color:honeydew\"> Break</h2>\n\n   </div>\n</body>"

/***/ }),

/***/ "./src/app/agent/status/break/break.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/agent/status/break/break.component.ts ***!
  \*******************************************************/
/*! exports provided: BreakComponent, BreakReasonComponent, BreakDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakComponent", function() { return BreakComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakReasonComponent", function() { return BreakReasonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakDialogComponent", function() { return BreakDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





//Dialog Box

var BreakComponent = /** @class */ (function () {
    function BreakComponent(agentService, breakpointObserver, dialog, service) {
        this.agentService = agentService;
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.service = service;
        this.openReasonDialog();
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var Ojb = { status: "break",
            currentstatus: "notOnCall",
            sipendpoint: agentId,
            reason: null
        };
        //  let statusChange = {status: "break"}
        //  this.agentService.setAgentStatusTime(statusChange).subscribe((data)=>{
        //      console.log(data);
        //  })
        this.service.sendAgentStatus(Ojb).subscribe(function (data) {
            console.log(data);
        });
        // this.service.sendAgentStatus(Ojb).subscribe((data)=>{
        //   console.log(data);
        // })
    }
    //Dialog function
    BreakComponent.prototype.openDialog = function () {
        console.log(this.Call);
        var dialogRef = this.dialog.open(BreakDialogComponent, {
            width: '550px',
            data: { number: this.Number },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //debugger;
            console.log('The dialog was closed');
        });
    };
    //Break Reason
    //Dialog function
    BreakComponent.prototype.openReasonDialog = function () {
        var _this = this;
        console.log(this.Call);
        var dialogRef = this.dialog.open(BreakReasonComponent, {
            width: '550px',
            data: { number: this.Number },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            var agentId = localStorage.getItem('PlivoUserId');
            agentId = agentId.concat('@phone.plivo.com');
            var Ojb = { status: "break",
                currentstatus: "notOnCall",
                sipendpoint: agentId,
                reason: result['reason']
            };
            _this.service.sendAgentStatus(Ojb).subscribe(function (data) {
                console.log(data);
            });
            // this.openDialog();
        });
    };
    BreakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-break',
            template: __webpack_require__(/*! ./break.component.html */ "./src/app/agent/status/break/break.component.html"),
            styles: [__webpack_require__(/*! ./break.component.css */ "./src/app/agent/status/break/break.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_agent__WEBPACK_IMPORTED_MODULE_4__["AgentService"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"]])
    ], BreakComponent);
    return BreakComponent;
}());

//Dialog Box
//dialog box 2
var BreakReasonComponent = /** @class */ (function () {
    function BreakReasonComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.Break = [
            { value: 0, name: "regular break" },
            { value: 1, name: "meeting with customer" },
            { value: 2, name: "training" },
            { value: 3, name: "occasional break" }
        ];
    }
    BreakReasonComponent.prototype.onNoClick = function () {
        ////alert('alert called noclick');
        this.dialogRef.close();
    };
    BreakReasonComponent.prototype.cancel = function () {
        ////alert('alert called cancel');
    };
    BreakReasonComponent.prototype.ok = function () {
        if (this.data['reason'] != null) {
            this.dialogRef.close(this.data);
        }
        else {
            //alert('Please select reaon');
        }
        //save the doc
    };
    BreakReasonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'breakReason',
            template: __webpack_require__(/*! ./break-reason.html */ "./src/app/agent/status/break/break-reason.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], BreakReasonComponent);
    return BreakReasonComponent;
}());

//Dialog Box
//dialog box 2
var BreakDialogComponent = /** @class */ (function () {
    function BreakDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.Break = [
            { value: 0, name: "regular break" },
            { value: 1, name: "meeting with customer" },
            { value: 2, name: "training" },
            { value: 3, name: "occasional break" }
        ];
    }
    BreakDialogComponent.prototype.onNoClick = function () {
        //alert('alert called');
        this.dialogRef.close();
    };
    BreakDialogComponent.prototype.cancel = function () {
        //alert('alert called');
    };
    BreakDialogComponent.prototype.ok = function () {
        if (this.data['reason']) {
            this.dialogRef.close("can pass string");
        }
        else {
            //alert('Please select reaon');
        }
        //save the doc
    };
    BreakDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'breakDialog',
            template: __webpack_require__(/*! ./break-dialogBox.html */ "./src/app/agent/status/break/break-dialogBox.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"], Object])
    ], BreakDialogComponent);
    return BreakDialogComponent;
}());



/***/ }),

/***/ "./src/app/agent/status/break/break.module.ts":
/*!****************************************************!*\
  !*** ./src/app/agent/status/break/break.module.ts ***!
  \****************************************************/
/*! exports provided: BreakModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakModule", function() { return BreakModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _break_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./break-routing.module */ "./src/app/agent/status/break/break-routing.module.ts");
/* harmony import */ var _break_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./break.component */ "./src/app/agent/status/break/break.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var BreakModule = /** @class */ (function () {
    function BreakModule() {
    }
    BreakModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _break_routing_module__WEBPACK_IMPORTED_MODULE_4__["BreakRoutingModule"],
            ],
            entryComponents: [
                _break_component__WEBPACK_IMPORTED_MODULE_5__["BreakComponent"], _break_component__WEBPACK_IMPORTED_MODULE_5__["BreakDialogComponent"], _break_component__WEBPACK_IMPORTED_MODULE_5__["BreakReasonComponent"]
            ],
            declarations: [_break_component__WEBPACK_IMPORTED_MODULE_5__["BreakComponent"], _break_component__WEBPACK_IMPORTED_MODULE_5__["BreakDialogComponent"], _break_component__WEBPACK_IMPORTED_MODULE_5__["BreakReasonComponent"]]
        })
    ], BreakModule);
    return BreakModule;
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
//# sourceMappingURL=status-break-break-module.js.map