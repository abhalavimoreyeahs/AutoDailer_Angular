(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-manualDial-manualDial-module"],{

/***/ "./src/app/agent/status/manualDial/feedback.html":
/*!*******************************************************!*\
  !*** ./src/app/agent/status/manualDial/feedback.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title style=\"text-align: center\">FeedBack</h2>\r\n\r\n<mat-dialog-content style=\"justify-content: center;\">\r\n    <div style=\"margin-left:5%\">\r\n        <!-- <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <label>Caller Name :</label>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <p> {{callerName}} </p>\r\n                                    <input  matInput   style=\"max-width: 100px\" [(ngModel)]=\"data.name\" name=\"name\" [value]=\"callerName\" disabled>  \r\n                                </div>\r\n                </div> -->\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <label>Caller Number :</label>\r\n            </div>\r\n            <div class=\"col\">\r\n                <!-- <p> {{callerNumber}} </p> -->\r\n                <input matInput style=\"max-width: 100px\" [(ngModel)]=\"data.customerMobNo\" name=\"customerMobNo\" disabled>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <label>Call Start Time :</label>\r\n            </div>\r\n            <div class=\"col\">\r\n                <!-- <p> {{duration}} </p> -->\r\n                <input matInput style=\"max-width: 100px\" [(ngModel)]=\"data.durationCallStart\" name=\"durationCallStart\"\r\n                    disabled>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col\">\r\n                <label>Call End Time :</label>\r\n            </div>\r\n            <div class=\"col\">\r\n                <!-- <p> {{callerNumber}} </p> -->\r\n                <input matInput style=\"max-width: 100px\" [(ngModel)]=\"data.durationCallEnd\" name=\"durationCallEnd\" disabled>\r\n            </div>\r\n        </div>\r\n    \r\n        <br />\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n        <div class=\"col\" style=\"margin-left:5%\">\r\n            <mat-form-field>\r\n                <mat-label>Caller Name</mat-label>\r\n                <input matInput placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.name\" name=\"name\"\r\n                    [value]=\"\" required>\r\n\r\n            </mat-form-field><br>\r\n            <mat-form-field *ngIf=\"select\">\r\n                <mat-label>CallBack Date</mat-label>\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data.startdate\"\r\n                    name=\"startdate\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"select\">\r\n                <mat-label>Start Time</mat-label>\r\n                <!-- <input type=\"time\" id=\"input\" class=\"form-control\" value=\"13:00\" mdbInput> -->\r\n                <input matInput   type=\"time\" placeholder=\"Choose start Time\" \r\n                    name=\"callBackStartTime\" [(ngModel)]=\"data.callBackStartTime\" [value]=\"\">\r\n\r\n            </mat-form-field>\r\n        </div>\r\n        <div class=\"col\">\r\n            <mat-form-field>\r\n                <mat-label>Customer Interested</mat-label>\r\n                <mat-select [(ngModel)]=\"data.ischeduldedCallBack\" (ngModelChange)=\"selectIsScheduledCallBack($event)\">\r\n                    <mat-option [value]=\"false\"> No </mat-option>\r\n                    <mat-option [value]=\"true\"> Yes </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"select\">\r\n                <mat-label>Add Description</mat-label>\r\n\r\n                <textarea matInput cdkTextareaAutosize #autosize=\"cdkTextareaAutosize\" placeholder=\"Customer Interest\"\r\n                    style=\"max-width: 300px\" [(ngModel)]=\"data.descrptionOnCall\" name=\"descrptionOnCall\" [value]=\"\" required></textarea>\r\n                <!-- cdkAutosizeMinRows=\"1\"  cdkAutosizeMaxRows=\"5\" -->\r\n            </mat-form-field>\r\n            <mat-form-field *ngIf=\"select\">\r\n                <mat-label>End Time</mat-label>\r\n                <input matInput type=\"time\" placeholder=\"Choose end Time\" name=\"callBackEndTime\"\r\n                    [(ngModel)]=\"data.callBackEndTime\" [value]=\"\">\r\n\r\n            </mat-form-field>\r\n\r\n        </div>\r\n    </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\r\n    <!-- <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button> -->\r\n    <!-- <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n    <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Save</button> -->\r\n    <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:100px\">No Thanks</button>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\"\r\n        style=\"width:100px\">Ok</button>\r\n</mat-dialog-actions>"

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

module.exports = "\r\n  .container-fluid {\r\n    background-image: url('autodial_img-1-01.jpeg');\r\n    height: 100%; \r\n    /* Center and scale the image nicely */\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    opacity: 0.9;\r\n  }\r\n  .fc-unthemed {\r\n    background: #fcf8e3;\r\n}\r\n  /*Dialler*/\r\n  .digit,\r\n.digit {\r\n  float: left;\r\n  padding: 10px 30px; /* 10px 30px*/\r\n  width: 80px; \r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n}\r\n  .sub {\r\n  font-size: 0.2rem;\r\n  color: grey;\r\n}\r\n  .container {\r\n  background-color:white;\r\n  color: black;\r\n  width: 315px;\r\n  padding: 20px;\r\n  margin: 30px auto;\r\n  height: 480px;\r\n  text-align: center;\r\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\r\n  border-radius: 2%;\r\n}\r\n  #usr {\r\n  font-family: \"Exo\";\r\n font-size: 1rem;\r\n font-weight: bold;\r\n}\r\n  #output {\r\n  /* font-family: \"Exo\";\r\n  font-size: 2rem;\r\n  height: 40px;\r\n  font-weight: bold; */\r\n  /* color: #1976d2; */\r\n  color:black;\r\n  background-color:white;\r\n}\r\n  #call {\r\n  display: inline-block;\r\n  background-color: #66bb6a;\r\n  padding: 4px 30px;\r\n  margin: 5%;\r\n  color: white;\r\n  border-radius: 4px;\r\n  float: left; \r\n  cursor: pointer;\r\n}\r\n  .botrow {\r\n  margin: 0  auto;\r\n  width: 320px; \r\n  clear: both;\r\n  text-align: center;\r\n  font-family: 'Exo';\r\n}\r\n  .digit:active,\r\n.dig:active {\r\n  background-color: #e6e6e6;\r\n}\r\n  .digit:hover {\r\n  background-color: #81c784;\r\n  border-radius: 100%;\r\n}\r\n  .dig {\r\n  float: left;\r\n  padding: 10px 25px;\r\n  margin: 10px;\r\n  width: 30px;\r\n  cursor: pointer;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL21hbnVhbERpYWwvbWFudWFsRGlhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7RUFDRTtJQUNFLCtDQUFrRTtJQUNsRSxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsbUJBQW1CO0FBQ3ZCO0VBR0EsVUFBVTtFQUNWOztFQUVFLFdBQVc7RUFDWCxrQkFBa0IsRUFBRSxhQUFhO0VBQ2pDLFdBQVc7RUFDWCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjtFQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtFQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDRFQUE0RTtFQUM1RSxpQkFBaUI7QUFDbkI7RUFDQTtFQUNFLGtCQUFrQjtDQUNuQixlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCO0VBRUE7RUFDRTs7O3NCQUdvQjtFQUNwQixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4QjtFQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7QUFDakI7RUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7RUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7RUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYWdlbnQvc3RhdHVzL21hbnVhbERpYWwvbWFudWFsRGlhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9hdXRvZGlhbF9pbWctMS0wMS5qcGVnJyk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IFxyXG4gICAgLyogQ2VudGVyIGFuZCBzY2FsZSB0aGUgaW1hZ2UgbmljZWx5ICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICB9XHJcbiAgLmZjLXVudGhlbWVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmY2Y4ZTM7XHJcbn1cclxuXHJcblxyXG4vKkRpYWxsZXIqL1xyXG4uZGlnaXQsXHJcbi5kaWdpdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4OyAvKiAxMHB4IDMwcHgqL1xyXG4gIHdpZHRoOiA4MHB4OyBcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uc3ViIHtcclxuICBmb250LXNpemU6IDAuMnJlbTtcclxuICBjb2xvcjogZ3JleTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDMxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgaGVpZ2h0OiA0ODBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcclxuICBib3JkZXItcmFkaXVzOiAyJTtcclxufVxyXG4jdXNyIHtcclxuICBmb250LWZhbWlseTogXCJFeG9cIjtcclxuIGZvbnQtc2l6ZTogMXJlbTtcclxuIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4jb3V0cHV0IHtcclxuICAvKiBmb250LWZhbWlseTogXCJFeG9cIjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gIC8qIGNvbG9yOiAjMTk3NmQyOyAqL1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbiNjYWxsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2YmI2YTtcclxuICBwYWRkaW5nOiA0cHggMzBweDtcclxuICBtYXJnaW46IDUlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7IFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJvdHJvdyB7XHJcbiAgbWFyZ2luOiAwICBhdXRvO1xyXG4gIHdpZHRoOiAzMjBweDsgXHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtZmFtaWx5OiAnRXhvJztcclxufVxyXG5cclxuLmRpZ2l0OmFjdGl2ZSxcclxuLmRpZzphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbn1cclxuXHJcbi5kaWdpdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgxYzc4NDtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG59XHJcblxyXG4uZGlnIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAxMHB4IDI1cHg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/agent/status/manualDial/manualDial.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/agent/status/manualDial/manualDial.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <link href=\"https://fonts.googleapis.com/css?family=Exo\" rel=\"stylesheet\">\r\n  <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n  <div class=\"container-fluid\" >\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-4\" >\r\n            <div class=\"row\">\r\n                <div class=\"col\" style=\"margin-top: 15%;  margin-left: 20%;\">\r\n                <h4 style=\"color:white\">Phone Status: {{phoneStatus}}.. </h4>\r\n                <h4 style=\"color:white\">Call Status: {{callStatus}} </h4>\r\n                \r\n                </div>\r\n                <div class=\"w-100\"></div>\r\n                <div class=\"col\">\r\n     <!--------------------------------------------------------------------------->\r\n     <div class=\"container\" >\r\n      <div class=\"form-group\">\r\n    \r\n        <input type=\"text\" class=\"form-control\" id=\"output\" value=\"MobileNumber\" [(ngModel)]=\"MobileNumber\" placeholder=\"+91801XXXXXXX\">\r\n      </div>\r\n    <div class=\"row\" style=\"margin:0 0 0 0\">\r\n      <div class=\"digit\" id=\"one\" (click)=\"pushNumbers(1)\"><h4><b>1</b></h4></div>\r\n      <div class=\"digit\" id=\"two\" (click)=\"pushNumbers(2)\"><h4><b>2</b></h4>\r\n        <div class=\"sub\"><h6>ABC</h6></div>\r\n      </div>\r\n      <div class=\"digit\" id=\"three\" (click)=\"pushNumbers(3)\"><h4><b>3</b></h4>\r\n        <div class=\"sub\"><h6>DEF</h6></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin:0 0 0 0\">\r\n      <div class=\"digit\" id=\"four\" (click)=\"pushNumbers(4)\"><h4><b>4</b></h4>\r\n        <div class=\"sub\"><h6>GHI</h6></div>\r\n      </div>\r\n      <div class=\"digit\" id=\"five\" (click)=\"pushNumbers(5)\"><h4><b>5</b></h4>\r\n        <div class=\"sub\"><h6>JKL</h6></div>\r\n      </div>\r\n      <div class=\"digit\" (click)=\"pushNumbers(6)\"><h4><b>6</b></h4>\r\n        <div class=\"sub\"><h6>MNO</h6></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin:0 0 0 0\">\r\n      <div class=\"digit\" (click)=\"pushNumbers(7)\"><h4><b>7</b></h4>\r\n        <div class=\"sub\"><h6>PQRS</h6></div>\r\n      </div>\r\n      <div class=\"digit\" (click)=\"pushNumbers(8)\"><h4><b>8</b></h4>\r\n        <div class=\"sub\"><h6>TUV</h6></div>\r\n      </div>\r\n      <div class=\"digit\" (click)=\"pushNumbers(9)\"><h4><b>9</b></h4>\r\n        <div class=\"sub\"><h6>WXYZ</h6></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\" style=\"margin:0 0 0 0\">\r\n      <div class=\"digit\" (click)=\"pushNumbers('*')\"><h4>*</h4>\r\n      </div>\r\n      <div class=\"digit\" (click)=\"pushNumbers(0)\"><h4><b>0</b></h4>\r\n      </div>\r\n      <div class=\"digit\" (click)=\"pushNumbers('#')\"><h4>#</h4>\r\n      </div>\r\n    </div>\r\n    <div class=\"botrow\"><i class=\"fa fa-star-o dig\" aria-hidden=\"true\"></i>\r\n      <div id=\"call\" (click)=\"makeCall()\"><i class=\"fa fa-phone\" aria-hidden=\"true\" ></i></div>\r\n      <i class=\"fa fa-long-arrow-left dig\" aria-hidden=\"true\" (click)=\"removeNumber()\" style=\"margin-left:-1%\"></i>\r\n    </div>\r\n</div>\r\n     <!--------------------------------------------------------------------------->\r\n      </div>\r\n      </div>\r\n    </div>\r\n      <div class=\"col-sm-2\" style=\"margin-top:11%\">\r\n        <!-- <h4 style=\"margin-top:20%;color:white\"> Call Connecting to ..... +919713246990 </h4> -->\r\n        <div class=\"row\" style=\"display: grid;  justify-content: center;align-items: center;\">\r\n          <div class=\"col\" >\r\n           <h4 style=\"color:white\">Outgoing:</h4>\r\n           <h4 style=\"color:white\">{{phoneNo}}</h4><br>\r\n           <h3 style=\"color:white\"> {{ hours | number : '2.0-0' }} : {{ minutes | number : '2.0-0'}} : {{seconds | number : '2.0-0'}}</h3>\r\n           <div class=\"row\">\r\n              <div class=\"col\">\r\n              <!-- <img src=\"../../../../assets/Hangup1.png\" style=\"height:100px; width: 100px\">  -->\r\n                  Hangup\r\n              </div>\r\n              <div class=\"col\">\r\n                  <!-- <img src=\"../../../../assets/Mic2.png\" style=\"height:100px; width: 100px\"> -->\r\n                  Microphone\r\n              </div>\r\n            </div>\r\n          </div>\r\n         \r\n          <div class=\"w-100\"></div>\r\n          <div class=\"col\">col</div>\r\n          \r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-6\" style=\" color:white; margin-top:5%\">\r\n        <!------>\r\n        <div  >\r\n          <mat-table [dataSource]=\"dataSource\" matSort >\r\n                <!-- Checkbox Column -->\r\n  <ng-container matColumnDef=\"select\" style=\"max-width: 50px\">\r\n    <mat-header-cell *matHeaderCellDef>\r\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n                    [aria-label]=\"checkboxLabel()\">\r\n      </mat-checkbox>\r\n    </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let row\">\r\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\r\n                    (change)=\"$event ? selection.toggle(row) : null\"\r\n                    [checked]=\"selection.isSelected(row)\"\r\n                    [aria-label]=\"checkboxLabel(row)\">\r\n      </mat-checkbox>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n            <ng-container matColumnDef=\"CustomerName\" >\r\n              <mat-header-cell *matHeaderCellDef mat-sort-header><b> Contact Name </b> </mat-header-cell>    \r\n              <mat-cell *matCellDef=\"let user\" >\r\n                    <!-- <img src=\"../../../assets/men.jpg\"  style=\"width:40px;width:40px;margin:5% 5% 5% 5%\">  -->\r\n                {{user.data.name  | titlecase}}\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n             <ng-container matColumnDef=\"CallBackStartTime\">\r\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Start Time</b></mat-header-cell>\r\n                 <mat-cell *matCellDef=\"let user\">{{user.data.callBackStartTime | date:'short'}}</mat-cell>\r\n               </ng-container>\r\n\r\n               <ng-container matColumnDef=\"CallBackEndTime\">\r\n                    <mat-header-cell *matHeaderCellDef mat-sort-header><b>End Time</b></mat-header-cell>\r\n                    <mat-cell *matCellDef=\"let user\">{{user.data.callBackEndTime | date:'h:mm a'}}</mat-cell>\r\n                  </ng-container>\r\n\r\n                  <ng-container matColumnDef=\"CreatedAt\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Created At</b></mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let user\">{{user.data.createdAt | date:'h:mm a'}}</mat-cell>\r\n                      </ng-container>\r\n    \r\n                      <ng-container matColumnDef=\"Description\">\r\n                        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Description On Call</b></mat-header-cell>\r\n                        <mat-cell *matCellDef=\"let user\">{{user.data.descrptionOnCall}}</mat-cell>\r\n                      </ng-container>\r\n\r\n                      <ng-container matColumnDef=\"CustomerMobileNo\">\r\n                            <mat-header-cell *matHeaderCellDef mat-sort-header><b>Mobile No</b></mat-header-cell>\r\n                            <mat-cell *matCellDef=\"let user\">{{user.data.customerMobNo}}</mat-cell>\r\n                          </ng-container>\r\n\r\n\r\n               <ng-container matColumnDef=\"Call\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header><b>Call</b></mat-header-cell>\r\n                <mat-cell *matCellDef=\"let user;let i = index;\">\r\n                    <!-- <button mat-icon-button color=\"primary\" (click)=\"redirectToDetails()\">\r\n                        <mat-icon class=\"mat-18\">reorder</mat-icon>\r\n                    </button> -->\r\n                    <button mat-icon-button color=\"primary\" style=\"color:green;background-color: lightgray\"  (click)=\"redirectToCall(user.data._id, user.data.customerMobNo)\">\r\n                            <!-- <mat-icon class=\"mat-18\">reorder</mat-icon> -->\r\n                            <!-- <mat-icon> call</mat-icon> -->\r\n                            <mat-icon> dialer_sip</mat-icon>                       \r\n                       </button>\r\n                </mat-cell>\r\n              </ng-container>\r\n            \r\n         \r\n               <mat-header-row *matHeaderRowDef=\"displayedColumns\">\r\n               </mat-header-row>\r\n               <mat-row *matRowDef=\"let row; columns: displayedColumns\" ></mat-row>\r\n          </mat-table>\r\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n           </div>\r\n <!------->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <button (click)=\"getTimer()\" id=\"getTime\">Check timer</button>\r\n  <button (click)=\"pickUpTimeFunc()\" id=\"pickUpTime\">Pick up Time</button>\r\n  <button (click)=\"callEndTimeFunc()\" id=\"callEndTime\">Call End Time</button>\r\n\r\n  <button (click)=\"HangUp()\">Call Terminate</button>\r\n  <button (click)=\"getTalkTime()\" id=\"startTime\" >Start Time</button>\r\n  <button (click)=\"end()\" id=\"endTime\">End time</button>\r\n  <button (click)=\"feedBack()\" id=\"feedBack\">FeedBack</button>\r\n"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! plivo-browser-sdk */ "./node_modules/plivo-browser-sdk/dist/plivo.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_13__);






 // for dateClick


//interval

//serive

//Dialog Box

//Time Picker

//Plivo

var ManualDialComponent = /** @class */ (function () {
    function ManualDialComponent(breakpointObserver, service, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.dialog = dialog;
        this.displayedColumns = ['CustomerName', 'CallBackStartTime', 'CallBackEndTime', 'CreatedAt', 'Description', 'CustomerMobileNo', 'Call'];
        this.callBoolean = false;
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_5___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_6___default.a];
        this.calendarWeekends = true;
        this.calendarEvents = [
            { title: 'Avinash Bhalavi', start: new Date() }
        ];
        this.callStatus = "Idle";
        this.phoneStatus = "Not Ready";
        this.phoneNo = "";
        //Dial Pad
        //For Mobile Number
        this.MobileNumber = '';
        //calculate Second Min and Hours
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
        this.initPhone(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
        // if(!localStorage.getItem('endpointID') && !localStorage.getItem('csio_auth_data')){
        //   this.login(localStorage.getItem("PlivoUserId"),localStorage.getItem("PlivoPassword"));
        // }else{
        //  // this.logOut();
        //   this.login(localStorage.getItem("PlivoUserId"),localStorage.getItem("PlivoPassword"));
        // }
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var Ojb = { status: "manual",
            currentstatus: "NotOnCall",
            sipendpoint: agentId
        };
        this.service.sendAgentStatus(Ojb).subscribe(function (data) {
            console.log(data);
        });
    }
    ManualDialComponent.prototype.ngOnInit = function () {
        var _this = this;
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var data = { agentid: "" + agentId };
        this.service.getScheduledCallForAgent(data).subscribe(function (data) {
            console.log('scheduled calendar:', data);
            var CallSchedule = [];
            for (var i = 0; i < data['message']['length']; i++) {
                if (data['message'][i]['callBackStartTime']) {
                    if (new Date(data['message'][i]['callBackStartTime']).getTime() >= new Date().setHours(0, 0, 0, 0)) {
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
    };
    ManualDialComponent.prototype.pushNumbers = function (number) {
        this.MobileNumber = this.MobileNumber.concat(number);
    };
    ManualDialComponent.prototype.removeNumber = function () {
        this.MobileNumber = this.MobileNumber.slice(0, -1);
    };
    ManualDialComponent.prototype.call = function () {
        ////alert(this.MobileNumber);
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
                this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["interval"])(1000)
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
    ManualDialComponent.prototype.redirectToCall = function (id, number) {
        console.log('id:', id, 'mobile NO:', number);
        this.MobileNumber = number;
        this.recordId = id;
    };
    ManualDialComponent.prototype.getTimer = function () {
        console.log("hours: " + this.hours + " minutes: " + this.minutes + " seconds: " + this.seconds);
        this.time = ((this.hours * 60 * 60) + (this.minutes * 60) + this.seconds);
        $('#pickUpTime').click();
    };
    ManualDialComponent.prototype.pickUpTimeFunc = function () {
        console.log('time', "hours: " + this.hours + " minutes: " + this.minutes + " seconds: " + this.seconds);
        this.pickUpTime = ((this.hours * 60 * 60) + (this.minutes * 60) + this.seconds);
        console.log('pickUp:', this.pickUpTime);
    };
    ManualDialComponent.prototype.callEndTimeFunc = function () {
        console.log('time', "hours: " + this.hours + " minutes: " + this.minutes + " seconds: " + this.seconds);
        this.callEndTime = ((this.hours * 60 * 60) + (this.minutes * 60) + this.seconds);
        console.log('callEndTime:', this.callEndTime);
    };
    ManualDialComponent.prototype.end = function () {
        this.sub.unsubscribe();
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
        this.plivoWebSdk = new plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_13___default.a(options);
        // this.plivoWebSdk.client.on('onWebrtcNotSupported', this.onWebrtcNotSupported);
        this.plivoWebSdk.client.on('onLogin', this.onLogin); // msg not showing //this function gets called when user successfully login/ login failed
        //  this.plivoWebSdk.client.on('onLogout', this.onLogout); // plivo method not working
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
        // //alert('successfully login');
        console.log('login successfully');
    };
    ManualDialComponent.prototype.logOut = function () {
        //alert('LogOut');
        this.plivoWebSdk.client.logOut();
    };
    ManualDialComponent.prototype.makeCall = function () {
        //var dest = document.getElementById('number')
        ////alert(this.MobileNumber);
        this.phoneNo = this.MobileNumber;
        var dest = this.MobileNumber;
        console.log(dest);
        var extraHeaders = { 'X-PH-Test1': 'test1', 'X-PH-Test2': 'test2' };
        this.plivoWebSdk.client.call(dest, extraHeaders);
    };
    // onLogout(){
    //   //alert('successfully log Out');
    // }
    ManualDialComponent.prototype.OnCallReceive = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.plivoWebSdk.client.answer()];
                    case 1:
                        _a.sent();
                        $('#dialogBox').click();
                        return [2 /*return*/];
                }
            });
        });
    };
    ManualDialComponent.prototype.OnCallReject = function () {
        //alert(' call Reject');
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
        if (this.plivoWebSdk.client.callSession) {
            console.log('call hangup');
            $('#endTime').click();
            this.plivoWebSdk.client.hangup();
        }
        else {
            // callOff();
            //alert('no call to HangUp');
        }
    };
    ManualDialComponent.prototype.onIncomingCallCanceled = function () {
        //alert('call cancellec');
        $('#endTime').click();
        console.log('call cancelled ...');
    };
    ManualDialComponent.prototype.onCallFailed = function () {
        //alert('call Failed function');
        $('#endTime').click();
        console.log('call failed function');
    };
    ManualDialComponent.prototype.onCallTerminated = function (hangupInfo, callInfo) {
        //alert('call terminated');
        this.callStatus = "Idle";
        $('#endTime').click();
        // this.dialog.closeAll();
        console.log('call terminated function hangupInfo:', hangupInfo, 'callInfo:', callInfo);
        $('#callEndTime').click();
        console.log('Call End Time: hours:', this.callEndTime);
        //this.feedBack(5);
        $('#feedBack').click();
    };
    ManualDialComponent.prototype.onCallAnswered = function () {
        ////alert('call req to server');
        // time when user pickup the call
        $('#pickUpTime').click();
        console.log('time when user pickup the call: hours', this.pickUpTime);
        console.log('call req to server');
    };
    ManualDialComponent.prototype.onCalling = function () {
        ////alert('on calling');
        console.log('on calling func:----------------------->');
    };
    ManualDialComponent.prototype.onCallRemoteRinging = function () {
        ////alert('remote ringing');
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
        var dialogRef = this.dialog.open(FeedBackComponent, {
            width: '650px',
            data: { recordid: this.recordId, customerMobNo: this.MobileNumber, agentid: localStorage.getItem("PlivoUserId"), durationCallStart: this.pickUpTime, durationCallEnd: this.callEndTime, callhangupsource: 'calle' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            console.log(result);
            _this.service.sendManualCallFeedBack(result).subscribe(function (data) {
                console.log(data);
                if (data['success'] == 'true') {
                    // this.showToaster();
                }
                // localStorage.removeItem('uuid');
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_3__["FullCalendarComponent"])
    ], ManualDialComponent.prototype, "calendarComponent", void 0);
    ManualDialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manualDial',
            template: __webpack_require__(/*! ./manualDial.component.html */ "./src/app/agent/status/manualDial/manualDial.component.html"),
            styles: [__webpack_require__(/*! ./manualDial.component.css */ "./src/app/agent/status/manualDial/manualDial.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_10__["AutoDialService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"]])
    ], ManualDialComponent);
    return ManualDialComponent;
}());

//-------------------------------------------------------------------------------
//Dialog Box
//dialog box 2
var FeedBackComponent = /** @class */ (function () {
    // notes;
    function FeedBackComponent(atp, dialogRef, data) {
        this.atp = atp;
        this.dialogRef = dialogRef;
        this.data = data;
        this.select = false;
        console.log('feedback details', data);
        //  this.callerName = data.name;
        //  this.callerNumber  =data.number;
        //  this.duration = data.duration ;
        //  this.notes = data.notes;
    }
    FeedBackComponent.prototype.selectIsScheduledCallBack = function () {
        this.select = !this.select;
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
    //TimePicker function
    FeedBackComponent.prototype.startTime = function () {
        var _this = this;
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe(function (time) {
            console.log('time:', time);
            _this.callBackStartTime = time;
        });
    };
    FeedBackComponent.prototype.endTime = function () {
        var _this = this;
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe(function (time) {
            console.log('time:', time);
            _this.callBackEndTime = time;
        });
    };
    FeedBackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feedback',
            template: __webpack_require__(/*! ./feedback.html */ "./src/app/agent/status/manualDial/feedback.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [amazing_time_picker__WEBPACK_IMPORTED_MODULE_12__["AmazingTimePickerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogRef"], Object])
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