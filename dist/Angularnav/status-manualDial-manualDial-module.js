(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-manualDial-manualDial-module"],{

/***/ "./src/app/agent/status/manualDial/feedback.html":
/*!*******************************************************!*\
  !*** ./src/app/agent/status/manualDial/feedback.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!---------------------------------------------------------------------------------------------------------->\n <section id=\"basic-form-layouts\">\n    <div class=\"row text-left\">\n      <div class=\"col-sm-12\">\n        <div class=\"content-header\" style=\"text-align:center\">\n        <!-- <h2> Feedback </h2> -->\n        </div>\n      </div>\n    </div>\n    <div class=\"row text-left\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-content\">\n            <div class=\"px-3\">\n              <form class=\"form\" style=\"text-align:center\">\n                <div class=\"form-body\">\n                  <h4 class=\"form-section\" style=\"text-align:center;padding:3%\" ><i class=\"ft-user\"></i> Feedback</h4>\n                  <div class=\"row\">\n                        <div class=\"col\">\n              \n                          <mat-form-field>\n                            <mat-label>Caller Number :</mat-label>\n                       \n                            <input matInput  [(ngModel)]=\"data.customerMobNo\" name=\"customerMobNo\" required>                \n                          </mat-form-field>\n                        </div>\n                        <div class=\"col\">\n                \n                          <mat-form-field>\n                            <mat-label>Caller Name</mat-label>\n                          \n                            <input matInput placeholder=\"Caller Name\"  [(ngModel)]=\"data.customerName\" name=\"customerName\" [value]=\"\" required>\n                          </mat-form-field>\n                        </div>\n                      </div>\n                      <div class=\"row\">\n                            <div class=\"col-md-6\">\n                  \n                              <mat-form-field>\n                                <mat-label>Duration</mat-label>\n                                <input matInput  [(ngModel)]=\"data.callDuration\" name=\"callDuration\" required disabled>                       \n                              </mat-form-field>\n                            </div>\n                            <div class=\"col-md-6\">\n                          \n                            <mat-form-field>\n                                    <mat-label>Customer Interested</mat-label>\n                                    \n                                     <mat-select [(ngModel)]=\"data.isCustomerInterested\" name=\"food\" (ngModelChange)=\"onChange($event)\" required>\n                                        <mat-option *ngFor=\"let item of Agent\" [value]=\"item.value\">\n                                          {{item.name}}\n                                        </mat-option>\n                                      </mat-select>\n                           </mat-form-field>\n                            </div>\n                          </div>\n<!--             \n                  <div class=\"row\">\n                    <div class=\"col-md-6\">\n               \n                      <mat-form-field>\n                        <mat-label>Campaign in Queue</mat-label>\n                        <input  matInput  placeholder=\"Campaign in Queue\"   name=\"campaignInQueue\" value=\"1\" disabled>                             \n                      </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6\">\n             \n                      <mat-form-field>\n                        <mat-label>Campaign Completed</mat-label>\n                        <input  matInput  placeholder=\"Campaign Completed\"   name=\"campaignCompleted\" value=\"5\" disabled>                             \n                      </mat-form-field>\n                    </div>\n                  </div> -->\n  \n                  <!-- <h4 class=\"form-section\"><i class=\"ft-file-text\"></i> Assign Agent</h4> -->\n  \n            \n<!--   \n                  <div class=\"row\">\n          \n                    <div class=\"col-md-12\">\n                      <div class=\"form-group\">\n                        <label for=\"projectinput6\">Available Agent</label>\n                        <select id=\"projectinput6\" name=\"budget\" class=\"form-control\">\n                          <option value=\"0\" selected=\"\" disabled=\"\">Agent</option>\n                          <option value=\"1\">Shruit</option>\n                          <option value=\"2\">Ravi</option>\n                          <option value=\"3\">Shivam</option>\n                          <option value=\"4\">Raj</option>\n                        </select>\n                      </div>\n                    </div>\n                  </div> -->\n  \n                  <div class=\"row\">\n                      <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\n                  <mat-form-field style=\"width:100%\">\n                    <mat-label>Add Remark</mat-label>\n                    <textarea matInput placeholder=\"Leave a comment\"   [(ngModel)]=\"data.descrptionOnCall\" name=\"descrptionOnCall\" value=\"\" required></textarea>                           \n                  </mat-form-field>\n                </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-md-12\" style=\"padding-left:10%; padding-right:10%\">\n                            <mat-form-field *ngIf=\"select\" style=\"width:100%\">\n                                    <mat-label>CallBack Date</mat-label>\n                                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data.startdate\"  name=\"startdate\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker></mat-datepicker>   \n                            </mat-form-field> \n                </div>\n                </div>\n\n                  <div class=\"row\">\n                        <div class=\"col-md-6\">\n                                <mat-form-field *ngIf=\"select\">\n                                        <mat-label>Start Time</mat-label>\n                                      \n                                        <input matInput   type=\"time\" placeholder=\"Choose start Time\" \n                                            name=\"callBackStartTime\" [(ngModel)]=\"data.callBackStartTime\" [value]=\"\">\n                        \n                                </mat-form-field>\n                        </div>\n                        <div class=\"col-md-6\">\n                      \n                                <mat-form-field *ngIf=\"select\">\n                                        <mat-label>End Time</mat-label>\n                                        <input matInput type=\"time\" placeholder=\"Choose end Time\" name=\"callBackEndTime\"\n                                            [(ngModel)]=\"data.callBackEndTime\" [value]=\"\">\n                        \n                                    </mat-form-field>\n                        </div>\n                 </div>\n                </div>\n  \n                <div class=\"form-actions\" style=\"padding:3%\">\n                        <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\"\n                        style=\"width:100px\">Submit</button>\n                  <!-- <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\">\n                    <i class=\"ft-x\"></i> Cancel\n                  </button>\n                  <button type=\"button\" class=\"btn btn-raised btn-raised btn-primary\">\n                    <i class=\"fa fa-check-square-o\"></i> Save\n                  </button> -->\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n</section>   \n\n<!----------------------------------------------OLD CODE--------------------------------->\n<!-- <h2 mat-dialog-title style=\"text-align: center\">FeedBack</h2>\n<mat-dialog-content style=\"justify-content: center;\">\n        <div class=\"px-3\">\n          <form class=\"form\">\n            <div class=\"form-body\">\n              \n              <div class=\"row\">\n                <div class=\"col\">\n      \n                  <mat-form-field>\n                    <mat-label>Caller Number :</mat-label>\n               \n                    <input matInput style=\"max-width: 100px\" [(ngModel)]=\"data.customerMobNo\" name=\"customerMobNo\" required>                \n                  </mat-form-field>\n                </div>\n                <div class=\"col\">\n        \n                  <mat-form-field>\n                    <mat-label>Caller Name</mat-label>\n                  \n                    <input matInput placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.name\" name=\"name\" [value]=\"\" required>\n                  </mat-form-field>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-6\">\n      \n                  <mat-form-field>\n                    <mat-label>Duration</mat-label>\n                    <input matInput style=\"max-width: 100px\" [(ngModel)]=\"data.durationCallStart\" name=\"durationCallStart\" required>                       \n                  </mat-form-field>\n                </div>\n                <div class=\"col-md-6\">\n              \n                <mat-form-field>\n                        <mat-label>Customer Interested</mat-label>\n                        \n                         <mat-select [(ngModel)]=\"data.customerInterested\" name=\"food\" (ngModelChange)=\"onChange($event)\">\n                            <mat-option *ngFor=\"let item of Agent\" [value]=\"item.value\">\n                              {{item.name}}\n                            </mat-option>\n                          </mat-select>\n               </mat-form-field>\n                </div>\n              </div>\n\n              <mat-form-field >\n                    <mat-label> Description</mat-label>\n    \n                    <textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" placeholder=\"Customer Interest\"\n                        style=\"max-width: 300px\" [(ngModel)]=\"data.descrptionOnCall\" name=\"descrptionOnCall\" [value]=\"\" required></textarea>\n\n             </mat-form-field>\n         \n             <div class=\"row\">\n                    <div class=\"col-md-6\">\n                            <mat-form-field *ngIf=\"select\">\n                                    <mat-label>Start Time</mat-label>\n                                  \n                                    <input matInput   type=\"time\" placeholder=\"Choose start Time\" \n                                        name=\"callBackStartTime\" [(ngModel)]=\"data.callBackStartTime\" [value]=\"\">\n                    \n                            </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6\">\n                  \n                            <mat-form-field *ngIf=\"select\">\n                                    <mat-label>End Time</mat-label>\n                                    <input matInput type=\"time\" placeholder=\"Choose end Time\" name=\"callBackEndTime\"\n                                        [(ngModel)]=\"data.callBackEndTime\" [value]=\"\">\n                    \n                                </mat-form-field>\n                    </div>\n             </div>\n\n            </div>\n \n          </form>\n        </div>\n      </mat-dialog-content>\n      \n      <mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\n            <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\"\n            style=\"width:100px\">Submit</button>\n    </mat-dialog-actions>\n       -->"

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

module.exports = "\n  .container-fluid {\n    background-image: url('autodial_img-1-01.jpeg');\n    height: 100%; \n    /* Center and scale the image nicely */\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 0.9;\n  }\n  .fc-unthemed {\n    background: #fcf8e3;\n}\n  /*----agnet status ring------*/\n  ::ng-deep .circle{\n  background-color: #FFA500;\n}\n  ::ng-deep .ringing{\n  border: 3px solid #FFA500;\n}\n  /*Dialler*/\n  .digit,\n.digit {\n  float: left;\n  padding: 10px 30px; /* 10px 30px*/\n  width: 80px; \n  font-size: 2rem;\n  cursor: pointer;\n}\n  .sub {\n  font-size: 0.2rem;\n  color: grey;\n}\n  .container {\n  background-color:white;\n  color: black;\n  width: 315px;\n  padding: 20px;\n  margin: 30px auto;\n  height: 480px;\n  text-align: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  border-radius: 2%;\n}\n  #usr {\n  font-family: \"Exo\";\n font-size: 1rem;\n font-weight: bold;\n}\n  #output {\n  /* font-family: \"Exo\";\n  font-size: 2rem;\n  height: 40px;\n  font-weight: bold; */\n  /* color: #1976d2; */\n  color:black;\n  background-color:white;\n}\n  #call {\n  display: inline-block;\n  background-color: #66bb6a;\n  padding: 4px 30px;\n  margin: 5%;\n  color: white;\n  border-radius: 4px;\n  float: left; \n  cursor: pointer;\n}\n  .cursor{\n  cursor: pointer;\n}\n  .botrow {\n  margin: 0  auto;\n  width: 320px; \n  clear: both;\n  text-align: center;\n  font-family: 'Exo';\n}\n  .digit:active,\n.dig:active {\n  background-color: #e6e6e6;\n}\n  .digit:hover {\n  background-color: #81c784;\n  border-radius: 100%;\n}\n  .dig {\n  float: left;\n  padding: 10px 25px;\n  margin: 10px;\n  width: 30px;\n  cursor: pointer;\n}\n  /*   Draggable div for quick notes */\n  #accordion{\n  position: absolute;\n  bottom: 10px;\n  width: 25%;\n  border: 3px solid #673ab7;\n  right: 10px;\n  background-color: white;\n}\n  .notes{\n  background-color: white;\n}\n  /*   */\n  #mydiv {\n  position: absolute;\n  z-index: 9;\n  background-color: #f1f1f1;\n  text-align: center;\n  border: 1px solid #d3d3d3;\n \n}\n  #mydivheader {\n  padding: 10px;\n  cursor: move;\n  z-index: 10;\n  background-color: #2196F3;\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL21hbnVhbERpYWwvbWFudWFsRGlhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLCtDQUFrRTtJQUNsRSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsbUJBQW1CO0FBQ3ZCO0VBQ0EsOEJBQThCO0VBRTlCO0VBQ0UseUJBQXlCO0FBQzNCO0VBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7RUFFQSxVQUFVO0VBQ1Y7O0VBRUUsV0FBVztFQUNYLGtCQUFrQixFQUFFLGFBQWE7RUFDakMsV0FBVztFQUNYLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0VBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0VBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNEVBQTRFO0VBQzVFLGlCQUFpQjtBQUNuQjtFQUNBO0VBQ0Usa0JBQWtCO0NBQ25CLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7RUFFQTtFQUNFOzs7c0JBR29CO0VBQ3BCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsc0JBQXNCO0FBQ3hCO0VBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtFQUVBO0VBQ0UsZUFBZTtBQUNqQjtFQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtFQUVBOztFQUVFLHlCQUF5QjtBQUMzQjtFQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtFQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7QUFDakI7RUFFQSxvQ0FBb0M7RUFDcEM7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHVCQUF1QjtBQUN6QjtFQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0VBR0EsTUFBTTtFQUNOO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHlCQUF5Qjs7QUFFM0I7RUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hZ2VudC9zdGF0dXMvbWFudWFsRGlhbC9tYW51YWxEaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvYXV0b2RpYWxfaW1nLTEtMDEuanBlZycpO1xuICAgIGhlaWdodDogMTAwJTsgXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBvcGFjaXR5OiAwLjk7XG4gIH1cbiAgLmZjLXVudGhlbWVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmNmOGUzO1xufVxuLyotLS0tYWduZXQgc3RhdHVzIHJpbmctLS0tLS0qL1xuXG46Om5nLWRlZXAgLmNpcmNsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQTUwMDtcbn1cbjo6bmctZGVlcCAucmluZ2luZ3tcbiAgYm9yZGVyOiAzcHggc29saWQgI0ZGQTUwMDtcbn1cblxuLypEaWFsbGVyKi9cbi5kaWdpdCxcbi5kaWdpdCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7IC8qIDEwcHggMzBweCovXG4gIHdpZHRoOiA4MHB4OyBcbiAgZm9udC1zaXplOiAycmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdWIge1xuICBmb250LXNpemU6IDAuMnJlbTtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAzMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAzMHB4IGF1dG87XG4gIGhlaWdodDogNDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbiAgYm9yZGVyLXJhZGl1czogMiU7XG59XG4jdXNyIHtcbiAgZm9udC1mYW1pbHk6IFwiRXhvXCI7XG4gZm9udC1zaXplOiAxcmVtO1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4jb3V0cHV0IHtcbiAgLyogZm9udC1mYW1pbHk6IFwiRXhvXCI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDsgKi9cbiAgLyogY29sb3I6ICMxOTc2ZDI7ICovXG4gIGNvbG9yOmJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xufVxuXG4jY2FsbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcbiAgcGFkZGluZzogNHB4IDMwcHg7XG4gIG1hcmdpbjogNSU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBmbG9hdDogbGVmdDsgXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1cnNvcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYm90cm93IHtcbiAgbWFyZ2luOiAwICBhdXRvO1xuICB3aWR0aDogMzIwcHg7IFxuICBjbGVhcjogYm90aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ0V4byc7XG59XG5cbi5kaWdpdDphY3RpdmUsXG4uZGlnOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG59XG5cbi5kaWdpdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWM3ODQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cbi5kaWcge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweCAyNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qICAgRHJhZ2dhYmxlIGRpdiBmb3IgcXVpY2sgbm90ZXMgKi9cbiNhY2NvcmRpb257XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMjUlO1xuICBib3JkZXI6IDNweCBzb2xpZCAjNjczYWI3O1xuICByaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4ubm90ZXN7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5cbi8qICAgKi9cbiNteWRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuIFxufVxuXG4jbXlkaXZoZWFkZXIge1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IG1vdmU7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICBjb2xvcjogI2ZmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/agent/status/manualDial/manualDial.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/agent/status/manualDial/manualDial.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <link href=\"https://fonts.googleapis.com/css?family=Exo\" rel=\"stylesheet\">\n  <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\">\n  <div class=\"container-fluid\" >\n    <div class=\"row\">\n        <div class=\"col-sm-4\" >\n            <div class=\"row\">\n                <div class=\"col\" style=\"margin-top: 15%;  margin-left: 20%;\">\n                <h4 style=\"color:white\">Phone Status: {{phoneStatus}}.. </h4>\n                <h4 style=\"color:white\">Call Status: {{callStatus}} </h4>\n                \n                </div>\n                <div class=\"w-100\"></div>\n                <div class=\"col\">\n     <!--------------------------------------------------------------------------->\n     <div class=\"container\" >\n      <div class=\"form-group\">\n    \n        <input type=\"text\" class=\"form-control\" id=\"output\" value=\"MobileNumber\" [(ngModel)]=\"MobileNumber\" placeholder=\"+91801XXXXXXX\" style=\"text-align:center\">\n      </div>\n    <div class=\"row\" style=\"margin:0 0 0 0\">\n      <div class=\"digit\" id=\"one\" (click)=\"pushNumbers(1)\"><h4><b>1</b></h4></div>\n      <div class=\"digit\" id=\"two\" (click)=\"pushNumbers(2)\"><h4><b>2</b></h4>\n        <div class=\"sub\"><h6>ABC</h6></div>\n      </div>\n      <div class=\"digit\" id=\"three\" (click)=\"pushNumbers(3)\"><h4><b>3</b></h4>\n        <div class=\"sub\"><h6>DEF</h6></div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin:0 0 0 0\">\n      <div class=\"digit\" id=\"four\" (click)=\"pushNumbers(4)\"><h4><b>4</b></h4>\n        <div class=\"sub\"><h6>GHI</h6></div>\n      </div>\n      <div class=\"digit\" id=\"five\" (click)=\"pushNumbers(5)\"><h4><b>5</b></h4>\n        <div class=\"sub\"><h6>JKL</h6></div>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers(6)\"><h4><b>6</b></h4>\n        <div class=\"sub\"><h6>MNO</h6></div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin:0 0 0 0\">\n      <div class=\"digit\" (click)=\"pushNumbers(7)\"><h4><b>7</b></h4>\n        <div class=\"sub\"><h6>PQRS</h6></div>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers(8)\"><h4><b>8</b></h4>\n        <div class=\"sub\"><h6>TUV</h6></div>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers(9)\"><h4><b>9</b></h4>\n        <div class=\"sub\"><h6>WXYZ</h6></div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin:0 0 0 0\">\n      <div class=\"digit\" (click)=\"pushNumbers('*')\"><h4>*</h4>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers(0)\"><h4><b>0</b></h4>\n      </div>\n      <div class=\"digit\" (click)=\"pushNumbers('#')\"><h4>#</h4>\n      </div>\n    </div>\n    <div class=\"botrow\"><i class=\"fa fa-star-o dig\" aria-hidden=\"true\"></i>\n      <div id=\"call\" (click)=\"makeCall()\"><i class=\"fa fa-phone\" aria-hidden=\"true\" ></i></div>\n      <i class=\"fa fa-long-arrow-left dig\" aria-hidden=\"true\" (click)=\"removeNumber()\" style=\"margin-left:-1%\"></i>\n    </div>\n</div>\n     <!--------------------------------------------------------------------------->\n      </div>\n      </div>\n    </div>\n      <div class=\"col-sm-2\" style=\"margin-top:11%\">\n        <!-- <h4 style=\"margin-top:20%;color:white\"> Call Connecting to ..... +919713246990 </h4> -->\n        <div class=\"row\" style=\"display: grid;  justify-content: center;align-items: center;\">\n          <div class=\"col\" >\n           <h4 style=\"color:white\">Outgoing:</h4>\n           <h4 style=\"color:white\">{{phoneNo}}</h4><br>\n           <h3 style=\"color:white\"> {{ hours | number : '2.0-0' }} : {{ minutes | number : '2.0-0'}} : {{seconds | number : '2.0-0'}}</h3>\n           <div class=\"row\" style=\"margin-top:25px\">\n              <div class=\"col\">\n              <!-- <img src=\"../../../../assets/Hangup.png\" style=\"height:50px; width: 50px\">  -->\n              <img src=\"../../../../assets/EndCall1.png\" style=\"height:50px; width: 50px\" class=\"cursor\" (click)=\"HangUp()\"> \n                  <!-- Hangup -->\n              </div>\n              <div class=\"col\">\n                  <img src=\"../../../../assets/Microphone.png\" style=\"height:50px; width: 30px\" class=\"cursor\">\n                  <!-- Microphone -->\n              </div>\n            </div>\n          </div>\n         \n          <div class=\"w-100\"></div>\n          <div class=\"col\"></div>\n          \n        </div>\n      </div>\n      <div class=\"col-sm-6\" style=\" color:white; margin-top:5%\">\n        <!------>\n        <div  >\n          <mat-table [dataSource]=\"dataSource\" matSort >\n                <!-- Checkbox Column -->\n  <ng-container matColumnDef=\"select\" style=\"max-width: 50px\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </mat-cell>\n  </ng-container>\n\n            <ng-container matColumnDef=\"CustomerName\" >\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b> Caller Name </b> </mat-header-cell>    \n              <mat-cell *matCellDef=\"let user\" >\n                    <!-- <img src=\"../../../assets/men.jpg\"  style=\"width:40px;width:40px;margin:5% 5% 5% 5%\">  -->\n                {{user.data.customerName  | titlecase}}\n                </mat-cell>\n            </ng-container>\n\n             <ng-container matColumnDef=\"CallBackStartTime\">\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Start Time</b></mat-header-cell>\n                 <mat-cell *matCellDef=\"let user\">{{user.data.callBackStartTime | date:'short'}}</mat-cell>\n               </ng-container>\n\n               <ng-container matColumnDef=\"CallBackEndTime\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header><b>End Time</b></mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.data.callBackEndTime | date:'h:mm a'}}</mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"CreatedAt\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Created At</b></mat-header-cell>\n                        <mat-cell *matCellDef=\"let user\">{{user.data.createdAt | date:'h:mm a'}}</mat-cell>\n                      </ng-container>\n    \n                      <ng-container matColumnDef=\"Description\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Description On Call</b></mat-header-cell>\n                        <mat-cell *matCellDef=\"let user\">{{user.data.descrptionOnCall}}</mat-cell>\n                      </ng-container>\n\n                      <ng-container matColumnDef=\"CustomerMobileNo\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Caller No</b></mat-header-cell>\n                            <mat-cell *matCellDef=\"let user\">{{user.data.customerMobNo}}</mat-cell>\n                          </ng-container>\n\n\n               <ng-container matColumnDef=\"Call\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header><b>Call</b></mat-header-cell>\n                <mat-cell *matCellDef=\"let user;let i = index;\">\n                    <!-- <button mat-icon-button color=\"primary\" (click)=\"redirectToDetails()\">\n                        <mat-icon class=\"mat-18\">reorder</mat-icon>\n                    </button> -->\n                    <button mat-icon-button color=\"primary\" style=\"color:green;background-color: lightgray\"  (click)=\"redirectToCall(user.data._id, user.data.customerId, user.data.customerName, user.data.customerMobNo)\">\n                            <!-- <mat-icon class=\"mat-18\">reorder</mat-icon> -->\n                            <!-- <mat-icon> call</mat-icon> -->\n                            <mat-icon> dialer_sip</mat-icon>                       \n                       </button>\n                </mat-cell>\n              </ng-container>\n            \n         \n               <mat-header-row *matHeaderRowDef=\"displayedColumns\">\n               </mat-header-row>\n               <mat-row *matRowDef=\"let row; columns: displayedColumns\" ></mat-row>\n          </mat-table>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n           </div>\n <!------->\n      </div>\n    </div>\n      <!-- draggable div for notes-->\n  <div id=\"accordion\">\n    <div class=\"card notes\">\n      <div class=\"card-header\" style=\"text-align: center;\">\n        <a class=\"card-link\" data-toggle=\"collapse\" href=\"#collapseOne\">\n          Quick notes\n        </a>\n      </div>\n      <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\n        <div class=\"card-body\" style=\"background-color: white;padding: 0.25rem;\">\n          <textarea style=\"height:150px;width:100%;position:relative\" [(ngModel)]=\"notes\" name=\"notes\"> </textarea>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n  </div>\n  <button (click)=\"getTimer()\" id=\"getTime\" hidden>Check timer</button>\n  <button (click)=\"pickUpTimeFunc()\" id=\"pickUpTime\" hidden>Pick up Time</button>\n  <button (click)=\"callEndTimeFunc()\" id=\"callEndTime\" hidden>Call End Time</button>\n\n  <button (click)=\"HangUp()\" hidden>Call Terminate</button>\n  <button (click)=\"getTalkTime()\" id=\"startTime\" hidden>Start Time</button>\n  <button (click)=\"end()\" id=\"endTime\" hidden>End time</button>\n  <button (click)=\"feedBack()\" id=\"feedBack\" hidden>FeedBack</button>\n  <button (click)=\"clearTime()\" id=\"clearTime\" hidden>ClearTime</button>\n"

/***/ }),

/***/ "./src/app/agent/status/manualDial/manualDial.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/agent/status/manualDial/manualDial.component.ts ***!
  \*****************************************************************/
/*! exports provided: ManualDialComponent, FeedBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualDialComponent", function() { return ManualDialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackComponent", function() { return FeedBackComponent; });
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/services/agent */ "./src/app/shared/services/agent.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! plivo-browser-sdk */ "./node_modules/plivo-browser-sdk/dist/plivo.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






 // for dateClick




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
        this.displayedColumns = ['CustomerName', 'CustomerMobileNo', 'CallBackStartTime', 'CallBackEndTime', 'Description', 'Call'];
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
        //    debugger;
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
            _this.initPhone(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
            if (!localStorage.getItem('endpointID') && !localStorage.getItem('csio_auth_data')) {
                // setTimeout(()=>{
                console.log('login is initiated');
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(2000),
                    _this.login(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
                // }, 5000); 
            }
            else {
                // this.logOut();
                //setTimeout(()=>{
                Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["delay"])(2000),
                    console.log('login is initiated');
                _this.login(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
                //}, 5000); 
            }
            var agentId = localStorage.getItem('PlivoUserId');
            agentId = agentId.concat('@phone.plivo.com');
            var Ojb = { status: "manual",
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
                debugger;
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
                this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_12__["interval"])(1000)
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
        debugger;
        console.log('time', "hours: " + this.hours + " minutes: " + this.minutes + " seconds: " + this.seconds);
        this.pickUpTime = ((this.hours * 60 * 60) + (this.minutes * 60) + this.seconds);
        localStorage.setItem('callStartTime', "" + this.pickUpTime);
        console.log('pickUp:', this.pickUpTime);
    };
    ManualDialComponent.prototype.callEndTimeFunc = function () {
        debugger;
        console.log('time', "hours: " + this.hours + " minutes: " + this.minutes + " seconds: " + this.seconds);
        this.callEndTime = ((this.hours * 60 * 60) + (this.minutes * 60) + this.seconds);
        console.log('callEndTime:', this.callEndTime);
        localStorage.setItem('callEndTime', "" + this.callEndTime);
    };
    ManualDialComponent.prototype.end = function () {
        debugger;
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
        this.plivoWebSdk = new plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_15___default.a(options);
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
        debugger;
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
        debugger;
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
        debugger;
        $('#endTime').click();
        console.log('call cancelled ...');
        $('#feedBack').click();
    };
    ManualDialComponent.prototype.onCallFailed = function () {
        ////alert('call Failed function');
        debugger;
        $('#endTime').click();
        this.callStatus = "Not OnCall";
        console.log('call failed function');
        $('#feedBack').click();
    };
    ManualDialComponent.prototype.onCallTerminated = function (hangupInfo, callInfo) {
        debugger;
        ////alert('call terminated');
        this.callStatus = "Idle";
        $('#endTime').click();
        // this.dialog.closeAll();
        console.log('call terminated function hangupInfo:', hangupInfo, 'callInfo:', callInfo);
        console.log('Call End Time: hours:', this.callEndTime);
        //this.feedBack(5);
        debugger;
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
        //debugger;
        console.log('media connected', callUUID);
        //get time
    };
    ManualDialComponent.prototype.onMediaPermission = function () {
        console.log('media permission');
    };
    // feedBack
    ManualDialComponent.prototype.feedBack = function (callDuration) {
        var _this = this;
        debugger;
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var dialogRef = this.dialog.open(FeedBackComponent, {
            width: '650px',
            data: { recordid: this.recordId, customerId: this.customerId, customerName: this.customerName, customerMobNo: this.MobileNumber,
                agentid: agentId, durationCallStart: this.pickUpTime, durationCallEnd: this.callEndTime, descrptionOnCall: this.notes,
                callhangupsource: 'calle', callDuration: localStorage.getItem('callDuration') },
            disableClose: true
        });
        debugger;
        dialogRef.afterClosed().subscribe(function (result) {
            _this.MobileNumber = "";
            debugger;
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
            debugger;
            console.log(result);
            if (result) { // if result is not undef then api hit
                _this.service.sendManualCallFeedBack(result).subscribe(function (data) {
                    console.log(data);
                    if (data['success'] == 'true') {
                        _this.notes = '';
                        // this.showToaster();
                    }
                    // localStorage.removeItem('uuid');
                });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_agent__WEBPACK_IMPORTED_MODULE_10__["AgentService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_13__["AutoDialService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialog"]])
    ], ManualDialComponent);
    return ManualDialComponent;
}());

//-------------------------------------------------------------------------------
//Dialog Box
//dialog box 2
var FeedBackComponent = /** @class */ (function () {
    // notes;
    function FeedBackComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.select = false;
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
        console.log('feedback details', data);
        //  this.callerName = data.name;
        //  this.callerNumber  =data.number;
        //  this.duration = data.duration ;
        //  this.notes = data.notes;
    }
    //select feedback list
    FeedBackComponent.prototype.onChange = function () {
        if (this.data['isCustomerInterested'] == 3 || this.data['isCustomerInterested'] === 2 || this.data['isCustomerInterested'] === 1 || this.data['isCustomerInterested'] === 4) {
            this.select = true;
            this.data['ischeduldedCallBack'] = true;
        }
        else {
            this.select = false;
            this.data['ischeduldedCallBack'] = false;
        }
    };
    FeedBackComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        localStorage.removeItem('Number'),
            localStorage.removeItem('Name');
    };
    FeedBackComponent.prototype.cancel = function () {
        localStorage.removeItem('Number'),
            localStorage.removeItem('Name');
    };
    FeedBackComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
        localStorage.removeItem('Number'),
            localStorage.removeItem('Name');
    };
    FeedBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feedback',
            template: __webpack_require__(/*! ./feedback.html */ "./src/app/agent/status/manualDial/feedback.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogRef"], Object])
    ], FeedBackComponent);
    return FeedBackComponent;
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
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _manualDial_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManualDialRoutingModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_7__["FullCalendarModule"]
            ],
            entryComponents: [
                _manualDial_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"],
            ],
            declarations: [_manualDial_component__WEBPACK_IMPORTED_MODULE_5__["ManualDialComponent"], _manualDial_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"]]
        })
    ], ManualDialModule);
    return ManualDialModule;
}());



/***/ })

}]);
//# sourceMappingURL=status-manualDial-manualDial-module.js.map