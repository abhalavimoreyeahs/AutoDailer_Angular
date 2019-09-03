(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-break-break-module"],{

/***/ "./src/app/agent/status/break/break-dialogBox.html":
/*!*********************************************************!*\
  !*** ./src/app/agent/status/break/break-dialogBox.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2 mat-dialog-title style=\"text-align: center\">On Break</h2>\r\n<mat-dialog-content style=\"text-align: center\">\r\n        <mat-form-field>\r\n                <mat-label>Change Status</mat-label>\r\n                 <mat-select [(ngModel)]=\"select\" >\r\n                        <mat-option  [value]=\"0\"  [(ngModel)]=\"data.value\" name=\"value\"> Active </mat-option>\r\n                        <mat-option  [value]=\"1\"   [(ngModel)]=\"data.value\" name=\"value\"> Manual </mat-option>\r\n                 </mat-select>\r\n       </mat-form-field>   \r\n        <!-- <div class=\"row\">\r\n                <div class=\"col\" style=\"margin-left:5%\">\r\n                        <mat-form-field>\r\n                                <mat-label>Caller Name</mat-label>\r\n                                <input  matInput  placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.name\" name=\"name\" [value]=\"\" required>                      \r\n                       </mat-form-field><br>\r\n                       <mat-form-field *ngIf=\"select\">\r\n                            <mat-label>CallBack Date</mat-label>\r\n                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data.startdate\"  name=\"startdate\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>   \r\n                    </mat-form-field>                  \r\n                </div>\r\n                <div class=\"col\">                  \r\n                        <mat-form-field>\r\n                                <mat-label>Change Status</mat-label>\r\n                                 <mat-select [(ngModel)]=\"select\" >\r\n                                        <mat-option  [value]=\"0\"> Active </mat-option>\r\n                                        <mat-option  [value]=\"1\"> Manual </mat-option>\r\n                                 </mat-select>\r\n                       </mat-form-field>                            \r\n                </div>\r\n              </div> -->\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\r\n    <!-- <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:100px\">No Thanks</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:100px\">Ok</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/agent/status/break/break-reason.html":
/*!******************************************************!*\
  !*** ./src/app/agent/status/break/break-reason.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h2 mat-dialog-title style=\"text-align: center\">Break Reason</h2>\r\n<mat-dialog-content style=\"text-align:center\">\r\n        <!-- <div class=\"row\"> -->\r\n\r\n                <mat-form-field >\r\n                        <mat-label>Break Reason</mat-label>\r\n                        <input   matInput  placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.reason\" name=\"reason\" [value]=\"\" required>                      \r\n               </mat-form-field> <br>\r\n                <!-- <div class=\"col\" style=\"margin-left:5%\">\r\n                        <mat-form-field>\r\n                                <mat-label>Caller Name</mat-label>\r\n                                <input  matInput  placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.name\" name=\"name\" [value]=\"\" required>                      \r\n                       </mat-form-field><br>\r\n                       <mat-form-field *ngIf=\"select\">\r\n                            <mat-label>CallBack Date</mat-label>\r\n                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data.startdate\"  name=\"startdate\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>   \r\n                    </mat-form-field>                  \r\n                </div>\r\n                <div class=\"col\">                  \r\n                        <mat-form-field>\r\n                                <mat-label>Customer Interested</mat-label>\r\n                                 <mat-select [(ngModel)]=\"select\">\r\n                                        <mat-option  [value]=\"0\"> Active </mat-option>\r\n                                        <mat-option  [value]=\"1\"> Manual </mat-option>\r\n                                 </mat-select>\r\n                       </mat-form-field>                            \r\n                </div> -->\r\n              <!-- </div> -->\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\r\n    <!-- <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:100px\">No Thanks</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:100px\">Submit</button>\r\n</mat-dialog-actions>"

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

module.exports = "body {\r\n  /* background-image: url('../../../../assets/autodial_img-1-01.jpeg');\r\n  background-repeat:no-repeat;\r\n position: relative;\r\n  background-size: 100%;\r\n  background-position-x: 100%;\r\n  background-position-y: 120%;\r\n  height:100%; \r\n opacity: 0.9; */\r\n \r\n  /* Full height */\r\n  height: 100%; \r\n  background-image: url('autodial_img-1-01.jpeg');\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  opacity: 0.9;\r\n}\r\n\r\n.grid-container {\r\n    margin: 20px;\r\n  }\r\n\r\n.dashboard-card {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n  }\r\n\r\n.more-button {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n  }\r\n\r\n.dashboard-card-content {\r\n    text-align: center;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL2JyZWFrL2JyZWFrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTs7Ozs7OztnQkFPYzs7RUFFZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLCtDQUFrRTtFQUNsRSxzQ0FBc0M7RUFDdEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtFQUNkOztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztFQUNiOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWdlbnQvc3RhdHVzL2JyZWFrL2JyZWFrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9hdXRvZGlhbF9pbWctMS0wMS5qcGVnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xyXG4gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAxMjAlO1xyXG4gIGhlaWdodDoxMDAlOyBcclxuIG9wYWNpdHk6IDAuOTsgKi9cclxuIFxyXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiAxMDAlOyBcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9hdXRvZGlhbF9pbWctMS0wMS5qcGVnJyk7XHJcbiAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBvcGFjaXR5OiAwLjk7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3JlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/agent/status/break/break.component.html":
/*!*********************************************************!*\
  !*** ./src/app/agent/status/break/break.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body></body>"

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
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");




//Dialog Box

var BreakComponent = /** @class */ (function () {
    function BreakComponent(breakpointObserver, dialog, service) {
        this.breakpointObserver = breakpointObserver;
        this.dialog = dialog;
        this.service = service;
        this.openReasonDialog();
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var Ojb = { status: "break",
            currentstatus: "notOnCall",
            sipendpoint: agentId
        };
        this.service.sendAgentStatus(Ojb).subscribe(function (data) {
            console.log(data);
        });
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
            console.log('The dialog was closed');
            console.log(result);
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
            _this.openDialog();
        });
    };
    BreakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-break',
            template: __webpack_require__(/*! ./break.component.html */ "./src/app/agent/status/break/break.component.html"),
            styles: [__webpack_require__(/*! ./break.component.css */ "./src/app/agent/status/break/break.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"]])
    ], BreakComponent);
    return BreakComponent;
}());

//Dialog Box
//dialog box 2
var BreakReasonComponent = /** @class */ (function () {
    function BreakReasonComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    BreakReasonComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BreakReasonComponent.prototype.cancel = function () {
    };
    BreakReasonComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
    };
    BreakReasonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'breakReason',
            template: __webpack_require__(/*! ./break-reason.html */ "./src/app/agent/status/break/break-reason.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], BreakReasonComponent);
    return BreakReasonComponent;
}());

//Dialog Box
//dialog box 2
var BreakDialogComponent = /** @class */ (function () {
    function BreakDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    BreakDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    BreakDialogComponent.prototype.cancel = function () {
    };
    BreakDialogComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
    };
    BreakDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'breakDialog',
            template: __webpack_require__(/*! ./break-dialogBox.html */ "./src/app/agent/status/break/break-dialogBox.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
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



/***/ })

}]);
//# sourceMappingURL=status-break-break-module.js.map