(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-manualDial-manualDial-module"],{

/***/ "./src/app/agent/status/manualDial/call-dialog.html":
/*!**********************************************************!*\
  !*** ./src/app/agent/status/manualDial/call-dialog.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"basic-form-layouts\">\r\n\r\n    <div class=\"row text-left\">\r\n\r\n        <div class=\"col-md-12\">\r\n\r\n            <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                    <div class=\"px-3\">\r\n\r\n                        <form style=\"padding-left:10%\">\r\n\r\n                            <div class=\"form-body\">\r\n\r\n                                <h4 class=\"form-section\" style=\"text-align:center;padding:3%\"><i class=\"ft-user\"></i>\r\n                                    User\r\n                                    Details</h4>\r\n\r\n                                <!--                 <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <span>Name </span>\r\n                                </div>\r\n\r\n                                <div class=\"col\">\r\n                                    <h5> {{data.customerName}}</h5>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <span>Mobile: </span>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <h5>{{data.customerMobNo}}</h5>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <span>CallBackDate: </span>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <h5> {{data.callBackStartTime | date:'shortDate'}}</h5>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <span>Time: </span>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <h5> {{ data.callBackStartTime |  date:'h:mm a'}} - {{ data.callBackEndTime |  date:'h:mm a'}}</h5>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <span>registered: </span>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <h5 *ngIf=\"data.customerId != null\"> Yes</h5>\r\n                                        <h5 *ngIf=\"data.customerId == null\"> No</h5>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                        <div class=\"col-md-6\">\r\n                                            <span>Created At: </span>\r\n                                        </div>\r\n                                        <div class=\"col-md-6\">\r\n                                            <h5> {{data.createdAt | date:'shortDate'}}</h5>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\r\n                                 <span>Notes:</span><br>\r\n                                 <p>{{data.descrptionOnCall}}</p>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n                        </div> -->\r\n\r\n                                <!-- <form style=\"padding-left:10%\"> -->\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"name\" class=\"col-sm-4 col-form-label\">Customer Name</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" [value]=\"data.customerName\" style=\"background-color: white;\"\r\n                                            disabled>\r\n                                            <!-- {{data.customerName}} -->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"mobile\" class=\"col-sm-4 col-form-label\">Mobile </label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"mobile\" [value]=\"data.customerMobNo\" style=\"background-color: white;\"\r\n                                            disabled>\r\n                                            <!-- {{data.customerMobNo}} -->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"callbackDate\" class=\"col-sm-4 col-form-label\">CallBackDate </label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"callbackDate\"  style=\"background-color: white;\"\r\n                                            [value]=\"callbackDate\" disabled>\r\n                                            <!-- {{data.callBackStartTime | date:'shortDate'}} -->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"time\" class=\"col-sm-4 col-form-label\">Time</label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"time\" name=\"time\" style=\"background-color: white;\"\r\n                                            [value]=\"time\"\r\n                                            disabled>\r\n                                            <!-- {{ data.callBackStartTime |  date:'h:mm a'}} - {{ data.callBackEndTime |  date:'h:mm a'}} -->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"registered\" class=\"col-sm-4 col-form-label\">Registered User </label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"registered\" style=\"background-color: white;\"\r\n                                            [value]=\"registered\" disabled>\r\n                                            <!-- <p *ngIf=\"data.customerId != null\"> Yes</p>\r\n                                            <p *ngIf=\"data.customerId == null\"> No</p> -->\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"form-group row\">\r\n                                    <label for=\"createdAt\" class=\"col-sm-4 col-form-label\">Created At </label>\r\n                                    <div class=\"col-sm-8\">\r\n                                        <input type=\"text\" class=\"form-control\" id=\"createdAt\" style=\"background-color: white;\"\r\n                                            [value]=\"createdAt\" disabled>\r\n                                            <!-- {{data.createdAt | date:'shortDate'}} -->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"notes\">Notes</label>\r\n                                    <textarea type=\"text\" style=\"background-color: white;\" rows=\"3\" class=\"form-control\" id=\"notes\" [value]=\"data.descrptionOnCall\" disabled> </textarea>\r\n                                </div>\r\n\r\n                                <!-- <button type=\"submit\" class=\"btn btn-primary\">Submit</button> -->\r\n                            </div>\r\n                        </form>\r\n\r\n                        <div class=\"form-actions\" style=\"padding-bottom: 1%; text-align:center\">\r\n                            <!-- [disabled]=\"!formGroup.valid\" -->\r\n                            <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button mat-danger\"\r\n                            class=\"mat-raised-button mat-primary\" style=\"width:100px\">Close</button>\r\n                        </div>\r\n\r\n                        <!-- </form> -->\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n</section>"

/***/ }),

/***/ "./src/app/agent/status/manualDial/feedback.html":
/*!*******************************************************!*\
  !*** ./src/app/agent/status/manualDial/feedback.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"basic-form-layouts\">\n\n  <div class=\"row text-left\">\n\n    <div class=\"col-md-12\">\n\n      <div class=\"card\">\n        <div class=\"card-content\">\n          <div class=\"px-3\">\n\n            <form [formGroup]=\"formGroup\" style=\"text-align:center\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n              <div class=\"form-body\">\n\n                <h4 class=\"form-section\" style=\"text-align:center;padding:3%\"><i class=\"ft-user\"></i> Feedback</h4>\n\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <mat-form-field>\n                      <mat-label>Caller Number :</mat-label>\n                      <input matInput formControlName=\"customerMobNo\">\n                      <mat-error\n                        *ngIf=\"!formGroup.controls['customerMobNo'].valid && formGroup.controls['customerMobNo'].touched\">\n                        {{ getErrorMobile()}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n\n                  <div class=\"col\">\n                    <mat-form-field>\n                      <mat-label>Caller Name</mat-label>\n                      <input matInput formControlName=\"customerName\">\n                      <mat-error\n                        *ngIf=\"!formGroup.controls['customerName'].valid && formGroup.controls['customerName'].touched\">\n                        {{ getErrorCustomerName()}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <mat-form-field>\n                      <mat-label>Duration</mat-label>\n                      <input matInput formControlName=\"callDuration\" name=\"callDuration\" required disabled>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n\n                    <mat-form-field>\n                      <mat-label>Customer Interested</mat-label>\n                      <mat-select formControlName=\"isCustomerInterested\" name=\"food\" (ngModelChange)=\"onChange(food)\"\n                        required>\n                        <mat-option *ngFor=\"let item of Agent\" [value]=\"item.value\">\n                          {{item.name}}\n                        </mat-option>\n                      </mat-select>\n                      <mat-error\n                        *ngIf=\"!formGroup.controls['isCustomerInterested'].valid && formGroup.controls['isCustomerInterested'].touched\">\n                        {{ getErrorCustomerInterested()}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\n                    <mat-form-field style=\"width:100%\">\n                      <mat-label>Add Remark</mat-label>\n                      <textarea matInput placeholder=\"Leave a comment\" formControlName=\"descrptionOnCall\"\n                        required></textarea>\n                      <mat-error\n                        *ngIf=\"!formGroup.controls['descrptionOnCall'].valid && formGroup.controls['descrptionOnCall'].touched\">\n                        Required field, must be between 5 and 10 characters.\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\n                    <mat-form-field *ngIf=\"select\" style=\"width:100%\">\n                      <mat-label>CallBack Date</mat-label>\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" formControlName=\"startdate\"\n                        required>\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\">\n                      </mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                      <mat-error\n                        *ngIf=\"!formGroup.controls['startdate'].valid && formGroup.controls['startdate'].touched\">\n                        {{ getErrorStartDate()}}\n                      </mat-error>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <mat-form-field *ngIf=\"select\">\n                      <mat-label>Start Time</mat-label>\n                      <input matInput type=\"time\" placeholder=\"Choose start Time\" formControlName=\"callBackStartTime\"\n                        [value]=\"\" required>\n                      <!-- <mat-error\n                        *ngIf=\"!formGroup.controls['customerName'].valid && formGroup.controls['customerName'].touched\">\n                        {{ getErrorCustomerName()}}\n                      </mat-error> -->\n                    </mat-form-field>\n                  </div>\n\n                  <div class=\"col-md-6\">\n                    <mat-form-field *ngIf=\"select\">\n                      <mat-label>End Time</mat-label>\n                      <input matInput type=\"time\" placeholder=\"Choose end Time\" formControlName=\"callBackEndTime\"\n                        [value]=\"\" required>\n                    </mat-form-field>\n                  </div>\n                </div>\n\n              </div>\n\n              <div class=\"form-actions\" style=\"padding:3%\">\n                  <!-- [disabled]=\"!formGroup.valid\" -->\n                <button mat-button  cdkFocusInitial\n                  class=\"mat-raised-button mat-primary\" style=\"width:100px\">Submit</button>\n              </div>\n\n            </form>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</section>"

/***/ }),

/***/ "./src/app/agent/status/manualDial/manualDial-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/agent/status/manualDial/manualDial-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: ManualDialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualDialRoutingModule", function() { return ManualDialRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manualDial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manualDial.component */ "./src/app/agent/status/manualDial/manualDial.component.ts");




var routes = [
    {
        path: '',
        component: _manualDial_component__WEBPACK_IMPORTED_MODULE_3__["ManualDialComponent"],
    }
];
var ManualDialRoutingModule = /** @class */ (function () {
    function ManualDialRoutingModule() {
    }
    ManualDialRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManualDialRoutingModule);
    return ManualDialRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/status/manualDial/manualDial.component.css":
/*!******************************************************************!*\
  !*** ./src/app/agent/status/manualDial/manualDial.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  .container-fluid {\n    background-image: url('autodial_img-1-01.jpeg');\n    height: 100%; \n    /* Center and scale the image nicely */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 0.9;\n  }\n  .fc-unthemed {\n    background: #fcf8e3;\n}\n  /*----agnet status ring------*/\n  ::ng-deep .circle{\n  background-color: #FFA500;\n}\n  ::ng-deep .ringing{\n  border: 3px solid #FFA500;\n}\n  /*Dialler*/\n  .digit,\n.digit {\n  float: left;\n  padding: 10px 30px; /* 10px 30px*/\n  width: 80px; \n  font-size: 2rem;\n  cursor: pointer;\n}\n  .sub {\n  font-size: 0.2rem;\n  color: grey;\n}\n  .container {\n  background-color:white;\n  color: black;\n  width: 315px;\n  padding: 20px;\n  margin: 30px auto;\n  height: 480px;\n  text-align: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  border-radius: 2%;\n}\n  #usr {\n  font-family: \"Exo\";\n font-size: 1rem;\n font-weight: bold;\n}\n  #output {\n  /* font-family: \"Exo\";\n  font-size: 2rem;\n  height: 40px;\n  font-weight: bold; */\n  /* color: #1976d2; */\n  color:black;\n  background-color:white;\n}\n  #call {\n  display: inline-block;\n  background-color: #66bb6a;\n  padding: 4px 30px;\n  margin: 5%;\n  color: white;\n  border-radius: 4px;\n  float: left; \n  cursor: pointer;\n}\n  .cursor{\n  cursor: pointer;\n}\n  .botrow {\n  margin: 0  auto;\n  width: 320px; \n  clear: both;\n  text-align: center;\n  font-family: 'Exo';\n}\n  .digit:active,\n.dig:active {\n  background-color: #e6e6e6;\n}\n  .digit:hover {\n  background-color: #81c784;\n  border-radius: 100%;\n}\n  .dig {\n  float: left;\n  padding: 10px 25px;\n  margin: 10px;\n  width: 30px;\n  cursor: pointer;\n}\n  /*   Draggable div for quick notes */\n  #accordion{\n  position: absolute;\n  bottom: 10px;\n  width: 25%;\n  border: 3px solid #673ab7;\n  right: 10px;\n  background-color: white;\n}\n  .notes{\n  background-color: white;\n}\n  /*   */\n  #mydiv {\n  position: absolute;\n  z-index: 9;\n  background-color: #f1f1f1;\n  text-align: center;\n  border: 1px solid #d3d3d3;\n \n}\n  #mydivheader {\n  padding: 10px;\n  cursor: move;\n  z-index: 10;\n  background-color: #2196F3;\n  color: #fff;\n}\n  /* Mat table*/\n  /* mat-table{\n  width: 100%;\n  table-layout: fixed;\n}\n\nmat-header-cell, mat-cell{\n  overflow: hidden;\n  width: 200px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n} */\n  mat-table{\n  max-height: 500px;\n  overflow-y: scroll;\n}\n  ::ng-deep .mat-cell{\n  height: 80px;\n  /* flex: 0 0 150px; */\n}\n  .mat-header-cell {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n  .mat-cell {\n  /* text-align: center; */\n  -webkit-box-pack:center;\n          justify-content:center;\n}\n  ::ng-deep .mat-column-Description{\n   /* width:20px; */\n   -webkit-box-flex: 1rem;\n           flex: 1rem;\n  min-width: 1rem;\n}\n  ::ng-deep .mat-column-CallBackStartTime{\n  /* width:20px; */\n  -webkit-box-flex: 2rem;\n          flex: 2rem;\n min-width: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL21hbnVhbERpYWwvbWFudWFsRGlhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLCtDQUFrRTtJQUNsRSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsbUJBQW1CO0FBQ3ZCO0VBQ0EsOEJBQThCO0VBRTlCO0VBQ0UseUJBQXlCO0FBQzNCO0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7RUFFQSxVQUFVO0VBQ1Y7O0VBRUUsV0FBVztFQUNYLGtCQUFrQixFQUFFLGFBQWE7RUFDakMsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0VBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNEVBQTRFO0VBQzVFLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0Usa0JBQWtCO0NBQ25CLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7RUFFQTtFQUNFOzs7c0JBR29CO0VBQ3BCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0VBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtFQUVBO0VBQ0UsZUFBZTtBQUNqQjtFQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtFQUVBOztFQUVFLHlCQUF5QjtBQUMzQjtFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtFQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7RUFFQSxvQ0FBb0M7RUFDcEM7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtFQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0VBR0EsTUFBTTtFQUNOO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7QUFFM0I7RUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7RUFHQSxhQUFhO0VBQ2I7Ozs7Ozs7Ozs7R0FVRztFQUVIO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtFQUNBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2QjtFQUNBO0VBQ0UsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6QjtFQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7RUFFQTtHQUNHLGdCQUFnQjtHQUNoQixzQkFBVTtXQUFWLFVBQVU7RUFDWCxlQUFlO0FBQ2pCO0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQVU7VUFBVixVQUFVO0NBQ1gsZUFBZTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L3N0YXR1cy9tYW51YWxEaWFsL21hbnVhbERpYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9hdXRvZGlhbF9pbWctMS0wMS5qcGVnJyk7XG4gICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICAuZmMtdW50aGVtZWQge1xuICAgIGJhY2tncm91bmQ6ICNmY2Y4ZTM7XG59XG4vKi0tLS1hZ25ldCBzdGF0dXMgcmluZy0tLS0tLSovXG5cbjo6bmctZGVlcCAuY2lyY2xle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBNTAwO1xufVxuOjpuZy1kZWVwIC5yaW5naW5ne1xuICBib3JkZXI6IDNweCBzb2xpZCAjRkZBNTAwO1xufVxuXG4vKkRpYWxsZXIqL1xuLmRpZ2l0LFxuLmRpZ2l0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDEwcHggMzBweDsgLyogMTBweCAzMHB4Ki9cbiAgd2lkdGg6IDgwcHg7IFxuICBmb250LXNpemU6IDJyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnN1YiB7XG4gIGZvbnQtc2l6ZTogMC4ycmVtO1xuICBjb2xvcjogZ3JleTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDMxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW46IDMwcHggYXV0bztcbiAgaGVpZ2h0OiA0ODBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsIDAsIDAsIDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMjIpO1xuICBib3JkZXItcmFkaXVzOiAyJTtcbn1cbiN1c3Ige1xuICBmb250LWZhbWlseTogXCJFeG9cIjtcbiBmb250LXNpemU6IDFyZW07XG4gZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNvdXRwdXQge1xuICAvKiBmb250LWZhbWlseTogXCJFeG9cIjtcbiAgZm9udC1zaXplOiAycmVtO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xuICAvKiBjb2xvcjogIzE5NzZkMjsgKi9cbiAgY29sb3I6YmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XG59XG5cbiNjYWxsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xuICBwYWRkaW5nOiA0cHggMzBweDtcbiAgbWFyZ2luOiA1JTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZsb2F0OiBsZWZ0OyBcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3Vyc29ye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5ib3Ryb3cge1xuICBtYXJnaW46IDAgIGF1dG87XG4gIHdpZHRoOiAzMjBweDsgXG4gIGNsZWFyOiBib3RoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnRXhvJztcbn1cblxuLmRpZ2l0OmFjdGl2ZSxcbi5kaWc6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmRpZ2l0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxYzc4NDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLmRpZyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogICBEcmFnZ2FibGUgZGl2IGZvciBxdWljayBub3RlcyAqL1xuI2FjY29yZGlvbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM2NzNhYjc7XG4gIHJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5ub3Rlc3tcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cblxuLyogICAqL1xuI215ZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiA5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG4gXG59XG5cbiNteWRpdmhlYWRlciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGN1cnNvcjogbW92ZTtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5cbi8qIE1hdCB0YWJsZSovXG4vKiBtYXQtdGFibGV7XG4gIHdpZHRoOiAxMDAlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxuXG5tYXQtaGVhZGVyLWNlbGwsIG1hdC1jZWxse1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMjAwcHg7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufSAqL1xuXG5tYXQtdGFibGV7XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG46Om5nLWRlZXAgLm1hdC1jZWxse1xuICBoZWlnaHQ6IDgwcHg7XG4gIC8qIGZsZXg6IDAgMCAxNTBweDsgKi9cbn1cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdC1jZWxsIHtcbiAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jb2x1bW4tRGVzY3JpcHRpb257XG4gICAvKiB3aWR0aDoyMHB4OyAqL1xuICAgZmxleDogMXJlbTtcbiAgbWluLXdpZHRoOiAxcmVtO1xufVxuXG46Om5nLWRlZXAgLm1hdC1jb2x1bW4tQ2FsbEJhY2tTdGFydFRpbWV7XG4gIC8qIHdpZHRoOjIwcHg7ICovXG4gIGZsZXg6IDJyZW07XG4gbWluLXdpZHRoOiAycmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/agent/status/manualDial/manualDial.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/agent/status/manualDial/manualDial.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <link href=\"https://fonts.googleapis.com/css?family=Exo\" rel=\"stylesheet\">\n  <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\">\n  <div class=\"container-fluid\" >\n    <div class=\"row\">\n        <div class=\"col-sm-4\" >\n            <div class=\"row\">\n                <div class=\"col\" style=\"margin-top: 15%;  margin-left: 20%;\">\n                <h4 style=\"color:white\">Phone Status: {{phoneStatus}}.. </h4>\n                <h4 style=\"color:white\">Call Status: {{callStatus}} </h4>\n                \n                </div>\n                <div class=\"w-100\"></div>\n                <div class=\"col\">\n     <!--------------------------------------------------------------------------->\n     <div class=\"container\" >\n      <div class=\"form-group\">\n    \n        <input type=\"text\" class=\"form-control\" id=\"output\" value=\"MobileNumber\" [(ngModel)]=\"MobileNumber\" placeholder=\"+91801XXXXXXX\" style=\"text-align:center\">\n      </div>\n    <div class=\"row\" style=\"margin:0 0 0 0\">\n      <div class=\"digit\" id=\"one\" (click)=\"pushNumbers(1)\"><h4><b>1</b></h4></div>\n      <div class=\"digit\" id=\"two\" (click)=\"pushNumbers(2)\"><h4><b>2</b></h4>\n        <div class=\"sub\"><h6>ABC</h6></div>\n      </div>\n      <div class=\"digit\" id=\"three\" (click)=\"pushNumbers(3)\"><h4><b>3</b></h4>\n        <div class=\"sub\"><h6>DEF</h6></div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin:0 0 0 0\">\n      <div class=\"digit\" id=\"four\" (click)=\"pushNumbers(4)\"><h4><b>4</b></h4>\n        <div class=\"sub\"><h6>GHI</h6></div>\n      </div>\n      <div class=\"digit\" id=\"five\" (click)=\"pushNumbers(5)\"><h4><b>5</b></h4>\n        <div class=\"sub\"><h6>JKL</h6></div>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers(6)\"><h4><b>6</b></h4>\n        <div class=\"sub\"><h6>MNO</h6></div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin:0 0 0 0\">\n      <div class=\"digit\" (click)=\"pushNumbers(7)\"><h4><b>7</b></h4>\n        <div class=\"sub\"><h6>PQRS</h6></div>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers(8)\"><h4><b>8</b></h4>\n        <div class=\"sub\"><h6>TUV</h6></div>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers(9)\"><h4><b>9</b></h4>\n        <div class=\"sub\"><h6>WXYZ</h6></div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin:0 0 0 0\">\n      <div class=\"digit\" (click)=\"pushNumbers('*')\"><h4>*</h4>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers(0)\"><h4><b>0</b></h4>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers('#')\"><h4>#</h4>\n      </div>\n    </div>\n    <div class=\"botrow\"><i class=\"fa fa-star-o dig\" aria-hidden=\"true\"></i>\n      <div id=\"call\" (click)=\"makeCall()\"><i class=\"fa fa-phone\" aria-hidden=\"true\" ></i></div>\n      <i class=\"fa fa-long-arrow-left dig\" aria-hidden=\"true\" (click)=\"removeNumber()\" style=\"margin-left:-1%\"></i>\n    </div>\n</div>\n     <!--------------------------------------------------------------------------->\n      </div>\n      </div>\n    </div>\n      <div class=\"col-sm-2\" style=\"margin-top:11%\">\n        <!-- <h4 style=\"margin-top:20%;color:white\"> Call Connecting to ..... +919713246990 </h4> -->\n        <div class=\"row\" style=\"display: grid;  justify-content: center;align-items: center;\">\n          <div class=\"col\" >\n           <h4 style=\"color:white\">Outgoing:</h4>\n           <h4 style=\"color:white\">{{phoneNo}}</h4><br>\n           <h3 style=\"color:white\"> {{ hours | number : '2.0-0' }} : {{ minutes | number : '2.0-0'}} : {{seconds | number : '2.0-0'}}</h3>\n           <div class=\"row\" style=\"margin-top:25px\">\n              <div class=\"col\">\n              <!-- <img src=\"../../../../assets/Hangup.png\" style=\"height:50px; width: 50px\">  -->\n              <img src=\"../../../../assets/EndCall1.png\" style=\"height:50px; width: 50px\" class=\"cursor\" (click)=\"HangUp()\"> \n                  <!-- Hangup -->\n              </div>\n              <div class=\"col\">\n                  <img src=\"../../../../assets/Microphone.png\" style=\"height:50px; width: 30px\" class=\"cursor\">\n                  <!-- Microphone -->\n              </div>\n            </div>\n          </div>\n         \n          <div class=\"w-100\"></div>\n          <div class=\"col\"></div>\n          \n        </div>\n      </div>\n      <div class=\"col-sm-6\" style=\" color:white; margin-top:5%\">\n        <!------>\n        <div  >\n          <mat-table [dataSource]=\"dataSource\" matSort >\n                <!-- Checkbox Column -->\n  <ng-container matColumnDef=\"select\" style=\"max-width: 50px\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </mat-cell>\n  </ng-container>\n\n            <ng-container matColumnDef=\"CustomerName\" >\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b> Caller Name </b> </mat-header-cell>    \n              <mat-cell *matCellDef=\"let user\" style=\"text-align:left;justify-content: left;\">\n                    <!-- <img src=\"../../../assets/men.jpg\"  style=\"width:40px;width:40px;margin:5% 5% 5% 5%\">  -->\n                {{user.data.customerName  | titlecase}}\n                </mat-cell>\n            </ng-container>\n\n             <ng-container matColumnDef=\"CallBackStartTime\">\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Start Time</b></mat-header-cell>\n                 <mat-cell *matCellDef=\"let user\">{{user.data.callBackStartTime | date:'shortDate'}} <br>\n                    {{user.data.callBackStartTime |  date:'h:mm a'}} - {{user.data.callBackEndTime | date:'h:mm a'}}</mat-cell>\n               </ng-container>\n\n               <!-- <ng-container matColumnDef=\"CallBackEndTime\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header><b>End Time</b></mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.data.callBackEndTime | date:'h:mm a'}}</mat-cell>\n                  </ng-container> -->\n\n                  <ng-container matColumnDef=\"CreatedAt\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Created At</b></mat-header-cell>\n                        <mat-cell *matCellDef=\"let user\">{{user.data.createdAt | date:'h:mm a'}}</mat-cell>\n                      </ng-container>\n    \n                      <ng-container matColumnDef=\"Description\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Notes</b></mat-header-cell>\n                        <mat-cell *matCellDef=\"let user;let i = index;\" style=\"text-align:left;justify-content: left;\" (click)=\"CustomerDetials(user.data._id)\">{{(user.data.descrptionOnCall.length>39)? (user.data.descrptionOnCall | slice:0:39)+'..':(user.data.descrptionOnCall)}}</mat-cell>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"Details\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Details</b></mat-header-cell>\n                        <mat-cell *matCellDef=\"let user; let i = index;\" (click)=\"CustomerDetials(i)\"><mat-icon> notes</mat-icon></mat-cell>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"CustomerMobileNo\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Caller No</b></mat-header-cell>\n                            <mat-cell *matCellDef=\"let user\">{{user.data.customerMobNo}}</mat-cell>\n                          </ng-container>\n\n\n               <ng-container matColumnDef=\"Call\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header><b>Call</b></mat-header-cell>\n                <mat-cell *matCellDef=\"let user;let i = index;\">\n                    <!-- <button mat-icon-button color=\"primary\" (click)=\"redirectToDetails()\">\n                        <mat-icon class=\"mat-18\">reorder</mat-icon>\n                    </button> -->\n                    <button mat-icon-button color=\"primary\" style=\"color:green;background-color: lightgray\"  (click)=\"redirectToCall(user.data._id, user.data.customerId, user.data.customerName, user.data.customerMobNo)\">\n                            <!-- <mat-icon class=\"mat-18\">reorder</mat-icon> -->\n                            <!-- <mat-icon> call</mat-icon> -->\n                            <mat-icon> dialer_sip</mat-icon>                       \n                       </button>\n                </mat-cell>\n              </ng-container>\n            \n         \n               <mat-header-row *matHeaderRowDef=\"displayedColumns\">\n               </mat-header-row>\n               <mat-row *matRowDef=\"let row; columns: displayedColumns\" ></mat-row>\n          </mat-table>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n           </div>\n <!------->\n      </div>\n    </div>\n      <!-- draggable div for notes-->\n  <div id=\"accordion\">\n    <div class=\"card notes\">\n      <div class=\"card-header\" style=\"text-align: center;\">\n        <a class=\"card-link\" data-toggle=\"collapse\" href=\"#collapseOne\">\n          Quick notes\n        </a>\n      </div>\n      <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\n        <div class=\"card-body\" style=\"background-color: white;padding: 0.25rem;\">\n          <textarea style=\"height:150px;width:100%;position:relative\" [(ngModel)]=\"notes\" name=\"notes\"> </textarea>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n  </div>\n  <button (click)=\"getTimer()\" id=\"getTime\" hidden>Check timer</button>\n  <button (click)=\"pickUpTimeFunc()\" id=\"pickUpTime\" hidden>Pick up Time</button>\n  <button (click)=\"callEndTimeFunc()\" id=\"callEndTime\" hidden>Call End Time</button>\n\n  <button (click)=\"HangUp()\" hidden>Call Terminate</button>\n  <button (click)=\"getTalkTime()\" id=\"startTime\" hidden>Start Time</button>\n  <button (click)=\"end()\" id=\"endTime\" hidden>End time</button>\n  <button (click)=\"feedBack()\" id=\"feedBack\" hidden>FeedBack</button>\n  <button (click)=\"clearTime()\" id=\"clearTime\" hidden>ClearTime</button>\n"

/***/ }),

/***/ "./src/app/agent/status/manualDial/manualDial.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/agent/status/manualDial/manualDial.component.ts ***!
  \*****************************************************************/
/*! exports provided: ManualDialComponent, FeedBackComponent, CallComponent, CreateEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualDialComponent", function() { return ManualDialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackComponent", function() { return FeedBackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallComponent", function() { return CallComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! plivo-browser-sdk */ "./node_modules/plivo-browser-sdk/dist/plivo.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






 // for dateClick

// mat table






//toastr

//interval

//serive

//Dialog Box

//Time Picker
// import { AmazingTimePickerService } from 'amazing-time-picker';
//Plivo

//Routing

var ManualDialComponent = /** @class */ (function () {
    function ManualDialComponent(agentService, toastrService, router, breakpointObserver, service, dialog) {
        var _this = this;
        this.agentService = agentService;
        this.toastrService = toastrService;
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['CustomerName', 'CustomerMobileNo', 'CallBackStartTime', 'Description', 'Call'];
        this.callBoolean = false;
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6___default.a];
        this.calendarWeekends = true;
        this.calendarEvents = [
            { title: 'Avinash Bhalavi', start: new Date() }
        ];
        this.callStatus = "Idle";
        this.phoneStatus = "";
        this.phoneNo = "";
        //Dial Pad
        //For Mobile Number
        this.MobileNumber = '';
        //calculate Second Min and Hours
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        // this.router.events.subscribe((ev) => {
        //   if (ev instanceof NavigationEnd) { /* Your code goes here on every router change */
        //    console.log(ev);
        //  if(localStorage.getItem('endpointID') && localStorage.getItem('csio_auth_data')){
        //    //debugger;
        //   this.logOut();
        //   localStorage.removeItem('endpointID');
        //   localStorage.removeItem('csio_auth_data');
        //  // console.log('Plivo logout ...',ev.url);
        //  }else if(localStorage.getItem('PlivoLogin')) {
        //   this.logOut();
        //   console.log('else part for logout');
        //  }else{
        //    console.log('2 nd else');
        //  }
        //   }
        // });
        console.log(this.router.url);
        this.router.navigateByUrl(this.router.url).then(function (e) {
            _this.phoneStatus = "Not Ready";
            //-----------------------------------uccomment it------------------------------------//
            _this.initPhone(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
            if (!localStorage.getItem('endpointID') && !localStorage.getItem('csio_auth_data')) {
                // setTimeout(()=>{
                console.log('login is initiated');
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["delay"])(2000),
                    _this.login(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
                // }, 5000); 
            }
            else {
                // this.logOut();
                //setTimeout(()=>{
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["delay"])(2000),
                    console.log('login is initiated');
                _this.login(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
                //}, 5000); 
            }
            //-----------------------------------uccomment it------------------------------------//
            var agentId = localStorage.getItem('PlivoUserId');
            agentId = agentId.concat('@phone.plivo.com');
            var Ojb = {
                status: "manual",
                currentstatus: "NotOnCall",
                sipendpoint: agentId,
                reason: null
            };
            // set agent status time
            //  let statusChange = {status: "manual"}
            //  this.agentService.setAgentStatusTime(statusChange).subscribe((data)=>{
            //      console.log(data);
            //  })
            _this.service.sendAgentStatus(Ojb).subscribe(function (data) {
                console.log(data);
            });
            //----------------------------------------------------------
            // agentId =  localStorage.getItem('PlivoUserId');
            // agentId = agentId.concat('@phone.plivo.com');
            var startTime = new Date().setHours(0, 0, 0, 0);
            var endTime = new Date().setHours(23, 59, 59, 59);
            var data = { agentid: "" + agentId, startTime: startTime, endTime: endTime };
            _this.service.getScheduledCallForAgent(data).subscribe(function (data) {
                //debugger;
                console.log('scheduled calendar:', data);
                var CallSchedule = [];
                for (var i = 0; i < data['message']['length']; i++) {
                    if (data['message'][i]['callBackStartTime']) {
                        if (new Date(parseInt(data['message'][i]['callBackStartTime'])).getTime() >= new Date().setHours(0, 0, 0, 0)) {
                            CallSchedule.push({
                                data: data['message'][i]
                            });
                        }
                    }
                }
                _this.calendarEvents = CallSchedule;
                console.log('display:', CallSchedule);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableDataSource"](CallSchedule);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
    }
    // this.router.navigateByUrl(this.router.url).then(e=>{
    // this.dslkflks()
    //   })
    //   ngOnInitFuncion() {
    //     this.router.navigate(['/agent/manualdial'])
    // //---------------------plivo login------------------------
    //     }
    ManualDialComponent.prototype.ngOnDestroy = function () {
        this.logOut();
    };
    // on reloading logout agnet from plivo
    ManualDialComponent.prototype.unloadHandler = function (event) {
        // this.plivoWebSdk.client && this.plivoWebSdk.client.logout();
        // this.plivoWebSdk.client.logout();
        this.logOut();
        console.log("Processing beforeunload...");
        // Do more processing...
        event.returnValue = false;
    };
    ManualDialComponent.prototype.pushNumbers = function (number) {
        this.MobileNumber = this.MobileNumber.concat(number);
    };
    ManualDialComponent.prototype.removeNumber = function () {
        this.MobileNumber = this.MobileNumber.slice(0, -1);
    };
    ManualDialComponent.prototype.call = function () {
        //////alert(this.MobileNumber);
        console.log(this.MobileNumber);
        this.phoneNo = this.MobileNumber;
        this.callStatus = "On Call";
    };
    //Calendar  
    ManualDialComponent.prototype.toggleVisible = function () {
        this.calendarVisible = !this.calendarVisible;
    };
    ManualDialComponent.prototype.toggleWeekends = function () {
        this.calendarWeekends = !this.calendarWeekends;
    };
    ManualDialComponent.prototype.gotoPast = function () {
        var calendarApi = this.calendarComponent.getApi();
        calendarApi.gotoDate('2019-07-12'); // call a method on the Calendar object
    };
    ManualDialComponent.prototype.handleDateClick = function (arg) {
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.calendarEvents = this.calendarEvents.concat({
                title: 'New Event',
                start: arg.date,
                allDay: arg.allDay
            });
        }
    };
    ManualDialComponent.prototype.getTalkTime = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.seconds = 0;
                this.minutes = 0;
                this.hours = 0;
                this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["interval"])(1000)
                    .subscribe(function (val) {
                    _this.seconds += 1;
                    if (_this.seconds > 60) {
                        _this.seconds = 0;
                        _this.minutes += 1;
                    }
                    if (_this.minutes > 60) {
                        _this.minutes = 0;
                        _this.hours += 1;
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ManualDialComponent.prototype.redirectToCall = function (id, customerId, name, number) {
        console.log('id:', id, 'mobile NO:', number);
        this.MobileNumber = number;
        this.customerName = name;
        this.customerId = customerId;
        this.recordId = id;
    };
    ManualDialComponent.prototype.getTimer = function () {
        console.log("hours: " + this.hours + " minutes: " + this.minutes + " seconds: " + this.seconds);
        this.time = ((this.hours * 60 * 60) + (this.minutes * 60) + this.seconds);
        $('#pickUpTime').click();
    };
    ManualDialComponent.prototype.pickUpTimeFunc = function () {
        //debugger;
        console.log('time', "hours: " + this.hours + " minutes: " + this.minutes + " seconds: " + this.seconds);
        this.pickUpTime = ((this.hours * 60 * 60) + (this.minutes * 60) + this.seconds);
        localStorage.setItem('callStartTime', "" + this.pickUpTime);
        console.log('pickUp:', this.pickUpTime);
    };
    ManualDialComponent.prototype.callEndTimeFunc = function () {
        //debugger;
        console.log('time', "hours: " + this.hours + " minutes: " + this.minutes + " seconds: " + this.seconds);
        this.callEndTime = ((this.hours * 60 * 60) + (this.minutes * 60) + this.seconds);
        console.log('callEndTime:', this.callEndTime);
        localStorage.setItem('callEndTime', "" + this.callEndTime);
    };
    ManualDialComponent.prototype.end = function () {
        //debugger;
        this.callEndTime = ((this.hours * 60 * 60) + (this.minutes * 60) + this.seconds);
        console.log('callEndTime:', this.callEndTime);
        localStorage.setItem('callEndTime', "" + this.callEndTime);
        this.callDuration = (parseInt(localStorage.getItem('callEndTime')) - parseInt(localStorage.getItem('callStartTime')));
        localStorage.setItem('callDuration', "" + this.callDuration);
        this.sub.unsubscribe();
    };
    ManualDialComponent.prototype.clearTime = function () {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    };
    //Plivo Code
    //initialize Plivo
    ManualDialComponent.prototype.initPhone = function (username, password) {
        var options = {
            "debug": "DEBUG",
            "permOnClick": true,
            "audioConstraints": { "optional": [{ "googAutoGainControl": false }, { "googEchoCancellation": false }] },
            "enableTracking": true
        };
        this.plivoWebSdk = new plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_18___default.a(options);
        // this.plivoWebSdk.client.on('onWebrtcNotSupported', this.onWebrtcNotSupported);
        this.plivoWebSdk.client.on('onLogin', this.onLogin); // msg not showing //this function gets called when user successfully login/ login failed
        this.plivoWebSdk.client.on('onLogout', this.onLogout); // plivo method not working
        //  this.plivoWebSdk.client.on('onLoginFailed', this.onLoginFailed);
        this.plivoWebSdk.client.on('onCallRemoteRinging', this.onCallRemoteRinging);
        this.plivoWebSdk.client.on('onIncomingCallCanceled', this.onIncomingCallCanceled);
        this.plivoWebSdk.client.on('onCallFailed', this.onCallFailed);
        this.plivoWebSdk.client.on('onCallAnswered', this.onCallAnswered); // req send to server 
        this.plivoWebSdk.client.on('onMediaConnected', this.onMediaConnected);
        this.plivoWebSdk.client.on('onCallTerminated', this.onCallTerminated);
        this.plivoWebSdk.client.on('onCalling', this.onCalling);
        this.plivoWebSdk.client.on('onIncomingCall', this.onIncomingCall); // when incomming call trigger this function is called
        this.plivoWebSdk.client.on('onMediaPermission', this.onMediaPermission);
        //  this.plivoWebSdk.client.on('mediaMetrics', this.mediaMetrics);
        //  this.plivoWebSdk.client.on('audioDeviceChange',this.audioDeviceChange);
        this.plivoWebSdk.client.setRingTone(true);
        this.plivoWebSdk.client.setRingToneBack(true);
        console.log('initPhone ready!');
    };
    ManualDialComponent.prototype.login = function (username, password) {
        // username = 'shubham125559174721784';
        // password = ' 12345';
        if (username && password) {
            var data = this.plivoWebSdk.client.login(username, password);
            console.log('login:', data);
            // $('#sipUserName').html('sip:'+username+'@'+ this.plivoWebSdk.client.phone.configuration.hostport_params);
            // document.querySelector('title').innerHTML=username;
        }
        else {
            console.error('username/password missing!');
        }
    };
    ManualDialComponent.prototype.onLogin = function () {
        //alert('plivo successfully login');
        this.phoneStatus = "Ready";
        console.log('login successfully');
        localStorage.setItem('PlivoLogin', 'true');
        //this.showToaster('Plivo Login Successfully')
        //this.toastrService.success('Campaign Saved Successful');
    };
    ManualDialComponent.prototype.logOut = function () {
        ////alert('LogOut');
        this.plivoWebSdk.client.logout();
    };
    ManualDialComponent.prototype.onLogout = function () {
        ////alert('successfully log Out');
        console.log('successfully log Out');
        localStorage.removeItem('PlivoLogin');
        localStorage.removeItem('endpointID');
        localStorage.removeItem('csio_auth_data');
    };
    ManualDialComponent.prototype.makeCall = function () {
        //var dest = document.getElementById('number')
        //////alert(this.MobileNumber);
        this.phoneNo = this.MobileNumber;
        var dest = this.MobileNumber;
        console.log(dest);
        var extraHeaders = { 'X-PH-Test1': 'test1', 'X-PH-Test2': 'test2' };
        this.plivoWebSdk.client.call(dest, extraHeaders);
    };
    // onLogout(){
    //   ////alert('successfully log Out');
    // }
    ManualDialComponent.prototype.OnCallReceive = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.plivoWebSdk.client.answer()];
                    case 1:
                        _a.sent();
                        this.callStatus = "OnCall";
                        $('#dialogBox').click();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManualDialComponent.prototype.OnCallReject = function () {
        //debugger;
        ////alert(' call Reject');
        this.callStatus = "Not OnCall";
        this.plivoWebSdk.client.reject();
    };
    ManualDialComponent.prototype.onIncomingCall = function (callerName, extraHeaders) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var str;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                str = callerName;
                str = str.split("@");
                console.log('splitMethod:', str[0]);
                this.Call = str[0];
                this.Number = str[0];
                console.log('Call', this.Call);
                $('#btnOnCallReceive').click();
                console.log(callerName, extraHeaders);
                return [2 /*return*/];
            });
        });
    };
    ManualDialComponent.prototype.HangUp = function () {
        ////alert('calling'); //working
        //debugger;
        if (this.plivoWebSdk.client.callSession) {
            console.log('call hangup');
            $('#endTime').click();
            this.plivoWebSdk.client.hangup();
            this.callStatus = "Not OnCall";
            this.phoneNo = "";
        }
        else {
            // callOff();
            this.callStatus = "Not OnCall";
            this.phoneNo = "";
            //alert('no call to HangUp');
        }
    };
    ManualDialComponent.prototype.onIncomingCallCanceled = function () {
        ////alert('call cancellec');
        //debugger;
        $('#endTime').click();
        console.log('call cancelled ...');
        $('#feedBack').click();
    };
    ManualDialComponent.prototype.onCallFailed = function () {
        ////alert('call Failed function');
        //debugger;
        $('#endTime').click();
        this.callStatus = "Not OnCall";
        console.log('call failed function');
        $('#feedBack').click();
    };
    ManualDialComponent.prototype.onCallTerminated = function (hangupInfo, callInfo) {
        //debugger;
        ////alert('call terminated');
        this.callStatus = "Idle";
        $('#endTime').click();
        // this.dialog.closeAll();
        console.log('call terminated function hangupInfo:', hangupInfo, 'callInfo:', callInfo);
        console.log('Call End Time: hours:', this.callEndTime);
        //this.feedBack(5);
        //debugger;
        //this.callDuration = (<any>this.callEndTime - <any>this.pickUpTime); 
        $('#feedBack').click();
    };
    ManualDialComponent.prototype.onCallAnswered = function () {
        //////alert('call req to server');
        // time when user pickup the call
        $('#pickUpTime').click();
        console.log('time when user pickup the call: hours', this.pickUpTime);
        console.log('call req to server');
    };
    ManualDialComponent.prototype.onCalling = function () {
        //////alert('on calling');
        console.log('on calling func:----------------------->');
    };
    ManualDialComponent.prototype.onCallRemoteRinging = function () {
        //////alert('remote ringing');
        this.callBoolean = true;
        $('#startTime').click();
        console.log('when end user get call from Auto Dialler');
    };
    ManualDialComponent.prototype.onMediaConnected = function (callUUID) {
        ////debugger;
        console.log('media connected', callUUID);
        //get time
    };
    ManualDialComponent.prototype.onMediaPermission = function () {
        console.log('media permission');
    };
    // feedBack
    ManualDialComponent.prototype.feedBack = function (callDuration) {
        var _this = this;
        //debugger;
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var dialogRef = this.dialog.open(FeedBackComponent, {
            width: '650px',
            data: {
                recordid: this.recordId, customerId: this.customerId, customerName: this.customerName, customerMobNo: this.MobileNumber,
                agentid: agentId, durationCallStart: this.pickUpTime, durationCallEnd: this.callEndTime, descrptionOnCall: this.notes,
                callhangupsource: 'calle', callDuration: localStorage.getItem('callDuration')
            },
            disableClose: true
        });
        //debugger
        dialogRef.afterClosed().subscribe(function (result) {
            _this.MobileNumber = "";
            //debugger;
            localStorage.removeItem('callStartTime');
            localStorage.removeItem('callEndTime');
            $('#clearTime').click();
            _this.phoneNo = "";
            console.log('The dialog was closed', result);
            if (result['startdate']) {
                if (result['callBackEndTime'] && result['callBackStartTime']) {
                    var startDate = result['callBackStartTime'].split(':');
                    var endDate = result['callBackEndTime'].split(':');
                    result['callBackStartTime'] = new Date(result['startdate'].getFullYear(), result['startdate'].getMonth(), result['startdate'].getDate()).setHours(parseInt(startDate[0]), parseInt(startDate[1]), 0);
                    result['callBackEndTime'] = new Date(result['startdate'].getFullYear(), result['startdate'].getMonth(), result['startdate'].getDate()).setHours(parseInt(endDate[0]), parseInt(endDate[1]), 0);
                    result['callScheduledForWholeDay'] = false;
                }
                else {
                    result['callBackStartTime'] = new Date(result['startdate']).getTime();
                    result['callBackEndTime'] = new Date(result['startdate']).setHours(23, 59, 59);
                    result['callScheduledForWholeDay'] = true;
                }
            }
            console.log(result);
            if (result) { // if result is not undef then api hit
                _this.service.sendManualCallFeedBack(result).subscribe(function (data) {
                    //debugger;
                    console.log(data);
                    if (data['success'] == true) {
                        _this.notes = '';
                        _this.showToaster('Feedback Saved Successfully');
                        // this.showToaster();
                    }
                    // localStorage.removeItem('uuid');
                });
            }
        });
    };
    //see customer Details POPup
    ManualDialComponent.prototype.CustomerDetials = function (arrayIndex) {
        var _this = this;
        //debugger;
        var userData = this.dataSource['filteredData'].filter(function (itm) {
            return itm.data._id == arrayIndex;
        });
        ;
        //  var filter = campaignDetails.filter(function (itm) {
        //   return itm.assignedto == id;
        // });
        console.log(this.Call);
        //  const dialogRef = this.dialog.open(CallComponent, {
        //    width: '550px',
        //    data: userData,
        //    disableClose: true 
        //  });
        //  dialogRef.afterClosed().subscribe(result => {
        //    console.log('The dialog was closed');
        //    console.log(result);
        //  });
        var dialogRef = this.dialog.open(CreateEventComponent, {
            width: '650px',
            data: userData[0]['data'],
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            //debugger;
            console.log(result);
            if (result != undefined) {
                // this.animal = result;
                _this.calendarEvents = _this.calendarEvents.concat({
                    title: result.title,
                    start: result.date,
                    allDay: result.notes
                });
            }
            else {
                console.log('No thanks button clicked');
            }
        });
    };
    //notification
    ManualDialComponent.prototype.showToaster = function (msg) {
        this.toastrService.success(msg);
    };
    ManualDialComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed: Unable to Save Campaign');
    };
    ManualDialComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    ManualDialComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('this is warning');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"])
    ], ManualDialComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__["MatSort"])
    ], ManualDialComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__["FullCalendarComponent"])
    ], ManualDialComponent.prototype, "calendarComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:beforeunload", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ManualDialComponent.prototype, "unloadHandler", null);
    ManualDialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manualDial',
            template: __webpack_require__(/*! ./manualDial.component.html */ "./src/app/agent/status/manualDial/manualDial.component.html"),
            styles: [__webpack_require__(/*! ./manualDial.component.css */ "./src/app/agent/status/manualDial/manualDial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_agent__WEBPACK_IMPORTED_MODULE_12__["AgentService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_16__["AutoDialService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialog"]])
    ], ManualDialComponent);
    return ManualDialComponent;
}());

//-------------------------------------------------------------------------------
//Dialog Box
//dialog box 2
var FeedBackComponent = /** @class */ (function () {
    // notes;
    function FeedBackComponent(dialogRef, data, formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = formBuilder;
        this.select = false;
        this.Agent = [
            { value: 0, name: "Deal done" },
            { value: 1, name: "Introduction calls" },
            { value: 2, name: "Follow up calls" },
            { value: 3, name: "Callback" },
            { value: 4, name: "Voicemail" },
            { value: 5, name: "Blacklist" },
            { value: 6, name: "Number does not match" },
            { value: 7, name: "Underage" },
            { value: 8, name: "Duplicate" },
        ];
        console.log('feedback details', data);
        //  this.callerName = data.name;
        //  this.callerNumber  =data.number;
        //  this.duration = data.duration ;
        //  this.notes = data.notes;
    }
    FeedBackComponent.prototype.ngOnInit = function () {
        this.createForm();
        this.setChangeValidate();
        this.setValue();
    };
    FeedBackComponent.prototype.createForm = function () {
        var mobileregex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
        this.formGroup = this.formBuilder.group({
            'customerMobNo': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            'customerName': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].minLength(3)]],
            'callDuration': [{ value: null }, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]],
            'descrptionOnCall': [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].maxLength(100)]],
            'isCustomerInterested': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required],
            'ischeduldedCallBack': [null],
            'startdate': [null],
            'callBackStartTime': [null],
            'callBackEndTime': [null]
        });
    };
    FeedBackComponent.prototype.setChangeValidate = function () {
        var _this = this;
        //debugger;
        this.formGroup.get('isCustomerInterested').valueChanges.subscribe(function (isCustomerInterested) {
            if (isCustomerInterested == '1' || isCustomerInterested == '2' || isCustomerInterested == '3' || isCustomerInterested == '4') {
                //let dateregex: RegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/
                _this.formGroup.get('startdate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]);
                _this.formGroup.get('callBackStartTime').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]);
                _this.formGroup.get('callBackEndTime').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_13__["Validators"].required]);
            }
            else {
                //this.formGroup.get('startdate').setValidators([null]);
                _this.formGroup.get('startdate').clearValidators();
                //this.formGroup.get('callBackStartTime').setValidators([null]);
                _this.formGroup.get('callBackStartTime').clearValidators();
                //this.formGroup.get('callBackEndTime').setValidators([null]);
                _this.formGroup.get('callBackEndTime').clearValidators();
                //setting value null
                _this.formGroup.get('startdate').setValue(null);
                _this.formGroup.get('callBackStartTime').setValue(null);
                _this.formGroup.get('callBackStartTime').setValue(null);
            }
            _this.formGroup.get('startdate').updateValueAndValidity();
            _this.formGroup.get('callBackStartTime').updateValueAndValidity();
            _this.formGroup.get('callBackEndTime').updateValueAndValidity();
        });
    };
    FeedBackComponent.prototype.setValue = function () {
        //debugger;
        this.formGroup.get('customerMobNo').setValue(this.data['customerMobNo']);
        this.formGroup.get('customerName').setValue(this.data['customerName']);
        this.formGroup.get('callDuration').setValue(this.data['callDuration']);
        this.formGroup.get('descrptionOnCall').setValue(this.data['descrptionOnCall']);
        //descrptionOnCall
        //this.formGroup.setValue({customerMobNo: 1020120120, customerName: 'Avinash' });
    };
    FeedBackComponent.prototype.getErrorMobile = function () {
        return this.formGroup.get('customerMobNo').hasError('required') ? 'Field is required' : '';
        // this.formGroup.get('customerMobNo').hasError('pattern') ? 'Not a valid mobile no' :'';
        // this.formGroup.get('customerMobNo').hasError('alreadyInUse') ? 'This mobile number is already in use' : '';
    };
    FeedBackComponent.prototype.getErrorCustomerName = function () {
        return this.formGroup.get('customerName').hasError('required') ? 'Field is required' : //minLength
            this.formGroup.get('customerName').hasError('minlength') ? 'Customer Name must be at least 5 characters long.' : '';
    };
    FeedBackComponent.prototype.getErrorCallDuration = function () {
        return this.formGroup.get('customerName').hasError('required') ? 'Field is required' : '';
    };
    FeedBackComponent.prototype.getErrorCustomerInterested = function () {
        return this.formGroup.get('isCustomerInterested').hasError('required') ? 'Field is required' : '';
    };
    FeedBackComponent.prototype.getErrorStartDate = function () {
        return this.formGroup.get('startdate').hasError('required') ? 'Field is required' :
            this.formGroup.get('startdate').hasError('pattern') ? 'Not a valid date' : '';
    };
    //select feedback list
    FeedBackComponent.prototype.onChange = function () {
        if (this.formGroup.value['isCustomerInterested'] == 3 || this.formGroup.value['isCustomerInterested'] === 2 || this.formGroup.value['isCustomerInterested'] === 1 || this.formGroup.value['isCustomerInterested'] === 4) {
            this.select = true;
            // this.formGroup.value['ischeduldedCallBack'] = true;
            this.formGroup.get('ischeduldedCallBack').setValue(true);
            this.setChangeValidate();
        }
        else {
            this.select = false;
            this.formGroup.get('ischeduldedCallBack').setValue(false);
            //  this.formGroup.value['ischeduldedCallBack']  = false;
            this.setChangeValidate();
        }
    };
    // onNoClick(): void {
    //   this.dialogRef.close();
    //   localStorage.removeItem('Number'),
    //   localStorage.removeItem('Name')
    // }
    // cancel(){
    //   localStorage.removeItem('Number'),
    //   localStorage.removeItem('Name')
    // }
    // ok(){
    //   this.dialogRef.close("can pass string");
    //   //save the doc
    //   localStorage.removeItem('Number'),
    //   localStorage.removeItem('Name')
    // }
    FeedBackComponent.prototype.onSubmit = function (data) {
        //debugger;
        if (!this.formGroup.valid) {
            return;
        }
        //assigning all values to data 
        this.data['customerMobNo'] = data['customerMobNo'];
        this.data['customerName'] = data['customerName'];
        this.data['callDuration'] = data['callDuration'];
        this.data['descrptionOnCall'] = data['descrptionOnCall'];
        this.data['isCustomerInterested'] = data['isCustomerInterested'];
        this.data['ischeduldedCallBack'] = data['ischeduldedCallBack'];
        if (data['isCustomerInterested'] === 1 || data['isCustomerInterested'] === 2 || data['isCustomerInterested'] === 3 || data['isCustomerInterested'] === 4) {
            this.data['startdate'] = data['startdate'];
            this.data['callBackStartTime'] = data['callBackStartTime'];
            this.data['callBackEndTime'] = data['callBackEndTime'];
        }
        console.log(this.data);
        this.dialogRef.close(this.data);
        localStorage.removeItem('Number'),
            localStorage.removeItem('Name');
    };
    FeedBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feedback',
            template: __webpack_require__(/*! ./feedback.html */ "./src/app/agent/status/manualDial/feedback.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormBuilder"]])
    ], FeedBackComponent);
    return FeedBackComponent;
}());

//Dialog box pop up user code
// @Component({
//   selector: 'call-dialog',
//   templateUrl: 'call-dialog.html',
// })
// export class CallComponent {
//   constructor(
//     public dialogRef: MatDialogRef<CallComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any) { }
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }
var CallComponent = /** @class */ (function () {
    function CallComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log('user Details', data);
    }
    CallComponent.prototype.ngOnInit = function () {
    };
    CallComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'call-dialog',
            template: __webpack_require__(/*! ./call-dialog.html */ "./src/app/agent/status/manualDial/call-dialog.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogRef"], Object])
    ], CallComponent);
    return CallComponent;
}());

//Draggable Dialog code
var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log('data:', data);
        // this.data = data1;
        this.createdAt = new Date(data['createdAt']).toLocaleDateString();
        this.time = new Date(parseInt(data['callBackStartTime'])).toLocaleTimeString() + " to " + new Date(parseInt(data['callBackEndTime'])).toLocaleTimeString();
        this.callbackDate = new Date(parseInt(data['callBackStartTime'])).toLocaleDateString();
        this.registered = data['customerId'] != null ? "Yes" : "No";
        // console.log('after manupulation',this.data);
    }
    CreateEventComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'createEvent-dialog',
            template: __webpack_require__(/*! ./call-dialog.html */ "./src/app/agent/status/manualDial/call-dialog.html"),
            styles: ["::ng-deep .form-control:disabled .form-control{   background-color: #e9ecef;  opacity: 1; }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogRef"], Object])
    ], CreateEventComponent);
    return CreateEventComponent;
}());



/***/ }),

/***/ "./src/app/agent/status/manualDial/manualDial.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/agent/status/manualDial/manualDial.module.ts ***!
  \**************************************************************/
/*! exports provided: ManualDialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualDialModule", function() { return ManualDialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _manualDial_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manualDial-routing.module */ "./src/app/agent/status/manualDial/manualDial-routing.module.ts");
/* harmony import */ var _manualDial_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manualDial.component */ "./src/app/agent/status/manualDial/manualDial.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_8__);







 //For Calendar

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var ManualDialModule = /** @class */ (function () {
    function ManualDialModule() {
    }
    ManualDialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _manualDial_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManualDialRoutingModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__["FullCalendarModule"]
            ],
            entryComponents: [
                _manualDial_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"],
                _manualDial_component__WEBPACK_IMPORTED_MODULE_5__["CallComponent"],
                _manualDial_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"]
            ],
            declarations: [_manualDial_component__WEBPACK_IMPORTED_MODULE_5__["ManualDialComponent"], _manualDial_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"], _manualDial_component__WEBPACK_IMPORTED_MODULE_5__["CallComponent"], _manualDial_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"]],
        })
    ], ManualDialModule);
    return ManualDialModule;
}());



/***/ })

}]);
//# sourceMappingURL=status-manualDial-manualDial-module.js.map