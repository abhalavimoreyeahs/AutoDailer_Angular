(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-adminDashboard-module"],{

/***/ "./src/app/layout/admin/adminDashboard-routing.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard-routing.ts ***!
  \********************************************************/
/*! exports provided: AdminDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardRoutingModule", function() { return AdminDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminDashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminDashboard.component */ "./src/app/layout/admin/adminDashboard.component.ts");




var routes = [
    {
        path: '',
        component: _adminDashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]
    }
];
var AdminDashboardRoutingModule = /** @class */ (function () {
    function AdminDashboardRoutingModule() {
    }
    AdminDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminDashboardRoutingModule);
    return AdminDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/admin/adminDashboard.component.css":
/*!***********************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\np {\n    font-family: Lato;\n  }\n  table{\n    width: 95%;\n  }\n  #upload_button {\n    display: inline-block;\n  }\n  #upload_button input[type=file] {\n    display:none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluL2FkbWluRGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2FkbWluL2FkbWluRGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnAge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xuICB9XG4gIHRhYmxle1xuICAgIHdpZHRoOiA5NSU7XG4gIH1cbiAgI3VwbG9hZF9idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAjdXBsb2FkX2J1dHRvbiBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/layout/admin/adminDashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mainDiv\" style=\"background-color:#ecf0f5\"> \n  <div class=\"content-wrapper\" style=\"padding: 1.8rem;\">\n   <div class=\"content-header row\">\n   \n   </div>\n   <div class=\"content-body\">\n    <div class=\"row\">\n      <div class=\"col-sm\"> \n          <div class=\"card\">\n              <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#00cc6a, #4cdb96);\">\n                  <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/right.png\" style=\"width: 50px;  height: 40px;\">\n                    </div>\n                      <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                          <h5>Successfully Call Placed</h5>\n                          <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i>{{callPlacedSuccessfully}}</h5>\n                      </div>\n                  </div>\n              </div>\n          </div> </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF425C, #FF7588 );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../assets/ringing.png\" style=\"width: 50px;  height: 40px; transform: rotate(10deg);\">\n                    \n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent Active on Call</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{agentOnCall}}</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n     </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF864A, #FFA87D );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent On Call Back</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{callback}}</h5>\n                    </div>\n                </div>\n            </div>\n        </div> </div>\n     <div class=\"col-sm\"> \n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #11A578, #32EAB2 );\">\n                <div class=\"media align-items-stretch\">\n                  <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                    <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                  </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Agent on Break</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{ agentOnBreak}}</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n       </div>\n    </div>\n    <div class= \"row\" style=\"margin-top:1%\">\n        <div class=\"col-sm\"> \n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right,  #008385, #00E7EB  );\">\n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                          <img src=\"../../assets/—Pngtree—agents_1261867@2x.png\" style=\"width: 50px;  height: 40px;\">                      \n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >                       \n                            <h5>Agents Waiting For Call</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{agentWaitingForCall}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#FF6347, #FF917E);\"> \n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/phone-hang-up@2x.png\" style=\"width: 50px;  height: 40px;\">\n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                            <h5>Call Hangup By Agent</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{hangupSourceAgent}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #1AB0C3, #5AD9E9 );\">\n                    <div class=\"media align-items-stretch\">\n                        <div style=\"width:100px; height:90px\">\n                          <i class=\"material-icons\" style=\"font-size:58px;padding:15% 15% 15% 15%;color:white\">group</i>\n                        </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                            <h5> Call Hangup by Customer</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{hangupSourceCustomer}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n        </div>\n        <div class=\"col-sm\">\n            <div class=\"card\">\n                <div class=\"card-content\" style=\"background-image: linear-gradient( to right,#ef4f4f, #f37b7b  );\">\n                    <div class=\"media align-items-stretch\">\n                      <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                        <img src=\"../../assets/calendar-with-a-clock-time-tools (2)@2x.png\" style=\"width: 50px;  height: 40px;\">\n                      </div>\n                        <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >                        \n                            <h5>Call Failed</h5>\n                            <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> {{callFailed}}</h5>\n                        </div>\n                    </div>\n                </div>\n            </div>  \n        </div>\n    </div>\n    <div class=\"row match-height\" style=\"margin-top:1%\">\n      <div  class=\"col-xl-8 col-lg-12\">\n          <div class=\"card\" style=\"width:100%; height:402px\">\n              <!-- <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Call Status</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div> -->\n\n            \n              <div class=\"chart-container\" style=\"position: relative; height:100%; width:100%; padding:2% 2% 2% 2%\">    \n                  <canvas id=\"doubleBarChart\" style=\"width:100%; height:100% \">{{ BarChart }}</canvas>  \n                </div> \n       \n          </div>  \n    </div>\n    <div  class=\"col-xl-4 col-lg-12\">\n        <!-- <div class=\"card\" style=\"width:100%; height:402px\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Agent Status</h4>\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                <div class=\"heading-elements\">\n                    <ul class=\"list-inline mb-0\">\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"chart-container\" style=\"position: relative; height:100%; width:100%\">    \n                <canvas id=\"canvasDoughnut\" >{{ DoughnutChart }}</canvas>    \n              </div> \n          </div>   -->\n          \n            <div class=\"card\" style=\"height: 387.266px;\">\n                <div class=\"card-content\">\n                    <div>\n                        <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Agent Status</h4>\n                    </div>\n                    <div class=\"card-body sales-growth-chart\">\n                       <!-- //graph <div id=\"monthly-sales\" class=\"height-250\" style=\"position: relative;\"></div> -->\n                       <canvas id=\"canvasDoughnut\" class=\"height-250\" style=\"position: relative;\" >{{ DoughnutChart }}</canvas>   \n                    </div>\n                </div>\n                <!-- <div class=\"card-footer\">\n                    <div class=\"chart-title mb-1 text-center\">\n                        <h6>Total monthly Sales.</h6>\n                    </div>\n                    <div class=\"chart-stats text-center\">\n                        <a href=\"#\" class=\"btn btn-sm btn-primary mr-1\">Statistics <i class=\"ft-bar-chart\"></i></a> <span class=\"text-muted\">for the last year.</span>\n                    </div>\n                </div> -->\n            </div>\n    </div>\n    </div>\n    <div class=\"row match-height\" style=\"margin-top:1%\">\n        <div  class=\"col-xl-4 col-lg-12\">\n            <div class=\"card\" style=\"width:100%; height:402px\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Number of Scheduled Call Being Placed</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div>\n              <div class=\"card-container\" style=\"padding-left: 1rem!important;\">\n                <div id=\"recent-details\" style=\"margin-right:5%\">\n                <!----------------------------------->\n                <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n                  <div class=\"media-left pr-1\">\n                      <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/Calling.png\" style=\"width:50px; height:50px\" >\n                  </div>\n                  <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                      <h5 class=\"list-group-item-heading\">Number PickUp <span class=\"font-medium-4 float-right\">1,0215</span></h5>\n                      <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Call completed</span><span class=\"badge badge-warning ml-1\"></span></p>\n                  </div>\n              </a>\n              <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n                <div class=\"media-left pr-1\">\n                    <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/CallRinging2.png\" style=\"width:50px; height:50px\" >\n                </div>\n                <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                    <h5 class=\"list-group-item-heading\">Being Called <span class=\"font-medium-4 float-right\">19</span></h5>\n                    <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Call Running</span><span class=\"badge badge-warning ml-1\">on the call</span></p>\n                </div>\n            </a>\n            <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n              <div class=\"media-left pr-1\">\n                  <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/WaitingForCall.png\" style=\"width:50px; height:50px\" >\n              </div>\n              <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                  <h5 class=\"list-group-item-heading\">Another Call Back For Customer<span class=\"font-medium-4 float-right\">215</span></h5>\n                  <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Call in the Queue</span><span class=\"badge badge-warning ml-1\">waiting</span></p>\n              </div>\n          </a>\n                <!----------------------------------->\n                </div>\n              </div>\n            </div>  \n      </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n          <div class=\"card\" style=\"width:100%; height:402px\">\n              <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Campaign Running Today</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div>\n              <div class=\"card-container\" style=\"padding-left: 1rem!important;\">\n                <div id=\"recent-details\" style=\"margin-right:5%\">\n                <!----------------------------------->\n                <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n                  <div class=\"media-left pr-1\">\n                      <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/Calling.png\" style=\"width:50px; height:50px\" >\n                  </div>\n                  <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                      <h5 class=\"list-group-item-heading\">Campaign Assigned to Manager <span class=\"font-medium-4 float-right\">215</span></h5>\n                      <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Assigned Campaign</span><span class=\"badge badge-warning ml-1\"></span></p>\n                  </div>\n              </a>\n              <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n                <div class=\"media-left pr-1\">\n                    <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/CallRinging2.png\" style=\"width:50px; height:50px\" >\n                </div>\n                <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                    <h5 class=\"list-group-item-heading\">No of Customer Finished with conference<span class=\"font-medium-4 float-right\">19</span></h5>\n                    <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Call Completed</span><span class=\"badge badge-warning ml-1\"></span></p>\n                </div>\n            </a>\n            <a href=\"#\" class=\"media border-0\" style=\"padding: 1.2rem;   margin-top: 0;\">\n              <div class=\"media-left pr-1\">\n                  <img class=\"media-object avatar avatar-sm rounded-circle\" src=\"../../assets/WaitingForCall.png\" style=\"width:50px; height:50px\" >\n              </div>\n              <div class=\"media-body w-100\" style=\"margin-left: 2%\">\n                  <h5 class=\"list-group-item-heading\">No of Customer remaining for call<span class=\"font-medium-4 float-right\">115</span></h5>\n                  <p class=\"list-group-item-text mb-0\"><span class=\"badge badge-success\">Remaining Customer</span><span class=\"badge badge-warning ml-1\">Pending</span></p>\n              </div>\n          </a>\n                <!----------------------------------->\n                </div>\n              </div>\n            </div>  \n      </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n        <div class=\"card\" style=\"width:100%; height:402px;background-image: linear-gradient( to right,#008385 , #00E7EB );\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Extra field</h4>\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                <div class=\"heading-elements\">\n                    <ul class=\"list-inline mb-0\">\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n          </div>  \n    </div>\n      </div>\n   \n   </div>\n  \n  </div>\n \n </div>\n<!--Old Code-->\n<!-- <div class=\"container-fluid\" style=\"margin-top:5%\">\n  <div class=\"row\">\n    <div class=\"col-sm-2\" >\n              <mat-card class=\"example-card\" style=\"max-width:99%\">\n                  <mat-card-header>               \n                    <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/Calling.png\" style=\"width:100%;height:80px\"></div>\n                      <mat-card-title style=\"margin-left:2px\"><h6><b>Current Active Calls</b></h6></mat-card-title><br><br>\n                    <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>10</b></h4></mat-card-subtitle>\n                  </mat-card-header>               \n                </mat-card>           \n    </div>\n    <div class=\"col-sm-2\">\n        <mat-card class=\"example-card\" style=\"max-width:99%\">\n        <mat-card-header>               \n            <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/BellRinging.png\" style=\"width:100%;height:80px\"></div>\n              <mat-card-title style=\"margin-left:2px\"><h6><b>Call Ringing</b></h6></mat-card-title><br><br>\n            <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>200</b></h4></mat-card-subtitle>\n          </mat-card-header>               \n        </mat-card>\n    </div>\n    <div class=\"col-sm-2\">\n        <mat-card class=\"example-card\" style=\"max-width:99%\">\n            <mat-card-header>               \n              <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/callWaiting1.png\" style=\"width:100%;height:80px\"></div>\n                <mat-card-title ><h6><b>Waiting For Agent</b></h6></mat-card-title><br><br>\n              <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>20</b></h4></mat-card-subtitle>\n            </mat-card-header>               \n          </mat-card>\n    </div>\n    <div class=\"col-sm-2\">\n      <mat-card class=\"example-card\" style=\"max-width:99%\">\n          <mat-card-header>               \n            <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/Ivr.png\" style=\"width:100%;height:80px\"></div>\n              <mat-card-title ><h6><b>Call In IVR</b></h6></mat-card-title><br><br>\n            <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>20</b></h4></mat-card-subtitle>\n          </mat-card-header>               \n        </mat-card>\n  </div>\n  <div class=\"col-sm-2\">\n    <mat-card class=\"example-card\" style=\"max-width:99%\">\n        <mat-card-header>               \n          <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/ManyAgents.png\" style=\"width:100%;height:80px\"></div>\n            <mat-card-title ><h6><b>Agents LoggedIn</b></h6></mat-card-title><br><br>\n          <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>20</b></h4></mat-card-subtitle>\n        </mat-card-header>               \n      </mat-card>\n</div>\n<div class=\"col-sm-2\">\n  <mat-card class=\"example-card\" style=\"max-width:99%\">\n      <mat-card-header>               \n        <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/Chats.png\" style=\"width:100%;height:80px\"></div>\n          <mat-card-title ><h6><b>Chats waiting for Agents</b></h6></mat-card-title><br><br>\n        <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>2</b></h4></mat-card-subtitle>\n      </mat-card-header>               \n    </mat-card>\n</div>\n  \n  </div>\n  <div class=\"row\" style=\"margin-top:2%\">\n    <div class=\"col-sm-2\" >\n              <mat-card class=\"example-card\" style=\"max-width:99%\">\n                  <mat-card-header>               \n                    <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/Agents1.jpg\" style=\"width:100%;height:80px\"></div>\n                      <mat-card-title style=\"margin-left:2px\"><h6><b>Agents in Calls</b></h6></mat-card-title><br><br>\n                    <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>10</b></h4></mat-card-subtitle>\n                  </mat-card-header>               \n                </mat-card>           \n    </div>\n    <div class=\"col-sm-2\">\n        <mat-card class=\"example-card\" style=\"max-width:99%\">\n        <mat-card-header>               \n            <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/WaitingForCall.png\" style=\"width:100%;height:80px\"></div>\n              <mat-card-title style=\"margin-left:2px\"><h6><b>Agent waiting</b></h6></mat-card-title><br><br>\n            <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>15</b></h4></mat-card-subtitle>\n          </mat-card-header>               \n        </mat-card>\n    </div>\n    <div class=\"col-sm-2\">\n        <mat-card class=\"example-card\" style=\"max-width:99%\">\n            <mat-card-header>               \n              <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/CallPaused2.png\" style=\"width:100%;height:80px\"></div>\n                <mat-card-title ><h6><b>Paused Agent</b></h6></mat-card-title><br><br>\n              <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>20</b></h4></mat-card-subtitle>\n            </mat-card-header>               \n          </mat-card>\n    </div>\n    <div class=\"col-sm-2\">\n      <mat-card class=\"example-card\" style=\"max-width:99%\">\n          <mat-card-header>               \n            <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/DeadCall.png\" style=\"width:100%;height:80px\"></div>\n              <mat-card-title ><h6><b>Agents In Dead Calls</b></h6></mat-card-title><br><br>\n            <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>20</b></h4></mat-card-subtitle>\n          </mat-card-header>               \n        </mat-card>\n  </div>\n\n<div class=\"col-sm-2\">\n  <mat-card class=\"example-card\" style=\"max-width:99%\">\n      <mat-card-header>               \n        <div mat-card-avatar class=\"example-header-image\" style=\"width:30%;height:80px\"> <img src=\"../../../assets/AgentsInDispo2.png\" style=\"width:100%;height:80px\"></div>\n          <mat-card-title ><h6><b>Agents In Dispo</b></h6></mat-card-title><br><br>\n        <mat-card-subtitle style=\"margin-top:10%; text-align:center;color:black\"><h4><b>20</b></h4></mat-card-subtitle>\n      </mat-card-header>               \n    </mat-card>\n</div>\n   \n  </div>\n</div> -->\n\n\n<!--------------------------------------------------------------------------------------------->\n\n  <div style=\"margin-left:2%;margin-top:6%;width: 99%\" *ngIf=\"ResultDataSuccess.length!=0\">\n      <label style=\"text-align: center\">Data Saved Successfully</label>\n      <mat-table [dataSource]=\"ResultDataSuccess\" class=\"mat-elevation-z8\">\n          <ng-container matColumnDef=\"S No\">\n              <mat-header-cell *matHeaderCellDef>S No</mat-header-cell>\n              <mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </mat-cell>\n            </ng-container>\n        <ng-container matColumnDef=\"Name\" style=\"margin-left:2%\">\n          <mat-header-cell *matHeaderCellDef><h6><b>Name</b></h6></mat-header-cell>\n          <mat-cell *matCellDef=\"let user\">{{user.Name }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"Age\">\n           <mat-header-cell *matHeaderCellDef><h6><b>Age</b></h6></mat-header-cell>\n           <mat-cell *matCellDef=\"let user\">{{user.Age }}</mat-cell>\n         </ng-container>\n         <ng-container matColumnDef=\"DOB\">\n             <mat-header-cell *matHeaderCellDef><h6><b>DOB</b></h6></mat-header-cell>\n             <mat-cell *matCellDef=\"let user\">{{user.DOB}}</mat-cell>\n           </ng-container>\n           <ng-container matColumnDef=\"Mobile\">\n               <mat-header-cell *matHeaderCellDef><h6><b>Mobile</b></h6></mat-header-cell>\n               <mat-cell *matCellDef=\"let user\">{{user.Mobile}}</mat-cell>\n             </ng-container>\n             <ng-container matColumnDef=\"Domicile\">\n                <mat-header-cell *matHeaderCellDef><h6><b>Domicile</b></h6> </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\">{{user.Domicile}}</mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"City\">\n                  <mat-header-cell *matHeaderCellDef><h6><b>City</b></h6></mat-header-cell>\n                  <mat-cell *matCellDef=\"let user\">{{user.City}}</mat-cell>\n                </ng-container>\n     \n           <mat-header-row *matHeaderRowDef=\"displayData\">\n           </mat-header-row>\n           <mat-row *matRowDef=\"let row; columns: displayData\"></mat-row>\n      </mat-table>\n       </div> \n\n       \n  <div style=\"margin-left:2%;margin-top:6%;width: 99%;\" *ngIf=\"ResultDataFailed.length!=0\">\n     <label style=\"text-align: center\">Duplicate Data </label>\n      <mat-table [dataSource]=\"ResultDataFailed\" class=\"mat-elevation-z8\">\n        \n        <ng-container matColumnDef=\"S No\" style=\"margin-left:2%\">\n          \n                <mat-header-cell *matHeaderCellDef>S No</mat-header-cell>\n                <mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"Name\">\n          <mat-header-cell *matHeaderCellDef><h6><b>Name</b></h6></mat-header-cell>\n          <mat-cell *matCellDef=\"let user\">{{user.Name }}</mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"Age\">\n           <mat-header-cell *matHeaderCellDef><h6><b>Age</b></h6></mat-header-cell>\n           <mat-cell *matCellDef=\"let user\">{{user.Age }}</mat-cell>\n         </ng-container>\n         <ng-container matColumnDef=\"DOB\">\n             <mat-header-cell *matHeaderCellDef><h6><b>DOB</b></h6></mat-header-cell>\n             <mat-cell *matCellDef=\"let user\">{{user.DOB}}</mat-cell>\n           </ng-container>\n           <ng-container matColumnDef=\"Mobile\">\n               <mat-header-cell *matHeaderCellDef><h6><b>Mobile</b></h6></mat-header-cell>\n               <mat-cell *matCellDef=\"let user\">{{user.Mobile}}</mat-cell>\n             </ng-container>\n             <ng-container matColumnDef=\"Domicile\">\n                <mat-header-cell *matHeaderCellDef><h6><b>Domicile</b></h6> </mat-header-cell>\n                <mat-cell *matCellDef=\"let user\">{{user.Domicile}}</mat-cell>\n              </ng-container>\n              <ng-container matColumnDef=\"City\">\n                  <mat-header-cell *matHeaderCellDef><h6><b>City</b></h6></mat-header-cell>\n                  <mat-cell *matCellDef=\"let user\">{{user.City}}</mat-cell>\n                </ng-container>\n     \n           <mat-header-row *matHeaderRowDef=\"displayData\">\n           </mat-header-row>\n           <mat-row *matRowDef=\"let row; columns: displayData\"></mat-row>\n      </mat-table>\n       </div>  \n\n\n       <!----------WORKING------------------------------------------------------------>\n       <!-- <div style=\"margin-left:2%;width: 99%;\">\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"name\">\n              <mat-header-cell *matHeaderCellDef>Name</mat-header-cell>\n              <mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"email\">\n               <mat-header-cell *matHeaderCellDef>Email</mat-header-cell>\n               <mat-cell *matCellDef=\"let user\">{{user.email}}</mat-cell>\n             </ng-container>\n             <ng-container matColumnDef=\"phone\">\n                 <mat-header-cell *matHeaderCellDef>Phone</mat-header-cell>\n                 <mat-cell *matCellDef=\"let user\">{{user.phone}}</mat-cell>\n               </ng-container>\n               <ng-container matColumnDef=\"edit\">\n                   <mat-header-cell *matHeaderCellDef>Edit</mat-header-cell>\n                   <mat-cell *matCellDef=\"let user\">\n                      <button mat-raised-button color=\"primary\" (click)='editTrainer(user)'> Edit\n                        </button>\n                   </mat-cell>\n                 </ng-container>\n         \n               <mat-header-row *matHeaderRowDef=\"displayedColumns\">\n               </mat-header-row>\n               <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n          </mat-table>\n           </div> -->\n\n           <!-------------------------------------------------------------------->\n\n  <!-- WORKING------------------------------------------------>\n  <!-- Testing\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\t\t\t<ng-container matColumnDef=\"name\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> Name </th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\"> {{user.name}} </td>\n\t\t\t</ng-container>\n\t\t\t<ng-container matColumnDef=\"email\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> Email </th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\"> {{user.email}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"phone\">\n          <th mat-header-cell *matHeaderCellDef> Phone </th>\n          <td mat-cell *matCellDef=\"let user\"> {{user.phone}} </td>\n        </ng-container>\n\t\n\t\t\t<ng-container matColumnDef=\"edit\">\n\t\t\t\t<th mat-header-cell *matHeaderCellDef> Edit </th>\n\t\t\t\t<td mat-cell *matCellDef=\"let user\">\n\t\t\t\t\t<button mat-raised-button color=\"primary\" (click)='editTrainer(user)'> Edit\n\t\t\t</button>\n\t\t</td>\n\t</ng-container>\n\t<tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n\t<tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table> -->"

/***/ }),

/***/ "./src/app/layout/admin/adminDashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ts_xlsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ts-xlsx */ "./node_modules/ts-xlsx/lib/main.browser.js");
/* harmony import */ var ts_xlsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ts_xlsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_6__);


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//import { AutoDialService } from '../../autoDialer.service';



//For piechart

var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(toastrService, formBuilder, service) {
        var _this = this;
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        //dataSource = new UserDataSource(this.service);
        this.dataSource = this.service.getUsers();
        this.displayedColumns = ['name', 'email', 'phone', 'edit'];
        this.dummyData = this.service.getDummyData();
        this.displayData = ['S No', 'Name', 'Age', 'DOB', 'Mobile', 'Domicile', 'City'];
        this.callInfoLabel = [];
        this.callInfoData = [];
        //chart
        this.Status = ['Active', 'Manual Dial', 'Callback', 'Break', 'Training', 'Meeting with customer'];
        this.data = [8, 5, 1, 3, 2, 0];
        this.Color = ['rgb(0, 227, 150)', 'rgb(0, 143, 251)', 'rgb(254, 176, 25)', 'rgb(255, 69, 96)', 'rgb(119, 93, 208)', '#DEB887'];
        this.DoughnutChart = [];
        this.BarChart = [];
        this.LineChart = [];
        this.CustomLine = [];
        this.DataTable = [];
        this.ResultDataSuccess = [];
        this.ResultDataFailed = [];
        this.selectedFile = '';
        this.service.getAgentDashboardDetails().subscribe(function (data) {
            console.log('agent Details:', data);
            _this.agentOnBreak = data['getBreak'];
            _this.agentWaitingForCall = data['getNotOnCall'];
            _this.agentOnCall = data['getOnCalldata'];
            _this.callback = data['callback'];
            _this.hangupSourceAgent = data['hangupSourceAgnet'];
            _this.hangupSourceCustomer = data['hangupSourceCustomer'];
            _this.callFailed = data['notPickedUpFromCamping'];
            _this.callPlacedSuccessfully = data['pickedUpCallFromCamping'];
        });
        //this.getCallInfo();
    }
    AdminDashboardComponent.prototype.getCallInfo = function () {
        var _this = this;
        var data = { week: true };
        this.service.getAdminDashboardCallInfo(data).subscribe(function (data) {
            console.log('Dashboard:', data);
            if (data['success'] == true) {
                for (var i = 0; i < data['ArrayData'].length; i++) {
                    _this.callInfoLabel.push(data['ArrayData'][i]['day']);
                    _this.callInfoData.push(data['ArrayData'][i]['count']);
                    debugger;
                }
            }
            console.log('Label:', _this.callInfoLabel);
            console.log('Data:', _this.callInfoData);
        });
    };
    AdminDashboardComponent.prototype.ngOnInit = function () {
        this.uploadForm = this.formBuilder.group({
            profile: ['']
        });
        this.getCallInfo();
        //charts
        this.DoughnutChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('canvasDoughnut', {
            type: 'doughnut',
            data: {
                labels: this.Status,
                datasets: [
                    {
                        data: this.data,
                        borderColor: 'white',
                        backgroundColor: this.Color,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: true, position: 'right',
                    labels: { fontColor: 'rgb(0,0,0)' }
                },
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: false }],
                },
            }
        });
        //Bar Graph
        this.BarChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('canvasBar', {
            type: 'bar',
            data: {
                labels: this.Status,
                datasets: [
                    {
                        data: this.data,
                        borderColor: 'white',
                        backgroundColor: this.Color,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: true },
                scales: {
                    xAxes: [{ display: true, stacked: true,
                            barPercentage: 0.5,
                            barThickness: 15,
                            maxBarThickness: 15,
                            minBarLength: 2,
                            gridLines: {
                                // offsetGridLines: false //true
                                display: false,
                            } }],
                    yAxes: [{ display: true, stacked: true,
                            //  ticks: { precision:0 }//to replace decimal values from y-axis
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 10
                            },
                            gridLines: {
                                //   drawBorder: false,
                                display: false,
                            }
                        }],
                },
                //--------------------------
                tooltips: {
                    enabled: true
                },
                hover: {
                    animationDuration: 1
                },
                animation: {
                    duration: 1,
                    onComplete: function () {
                        var chartInstance = this.chart, ctx = chartInstance.ctx;
                        ctx.textAlign = 'center';
                        ctx.fillStyle = "rgb(211,211,211)";
                        ctx.textBaseline = 'bottom';
                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];
                                ctx.fillText(data, bar._model.x, bar._model.y - 5);
                            });
                        });
                    }
                }
                //--------------------------  
            },
        });
        //For line graph
        this.LineChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('canvasLine', {
            type: 'line',
            data: {
                labels: this.Status,
                datasets: [
                    {
                        data: this.data,
                        borderColor: 'white',
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: { display: true },
                scales: {
                    xAxes: [{ display: false }],
                    yAxes: [{ display: true }],
                }
            },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'top',
                    formatter: Math.round,
                    font: {
                        weight: 'bold'
                    }
                }
            }
        });
        //-----------------------
        this.CustomLine = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('myChart', {
            type: 'line',
            data: {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [
                    {
                        data: [8, 5, 1, 3, 2, 0, 12, 9, 3, 21, 19, 11, 15, 18, 19],
                        borderColor: '#00AEFF',
                        fill: false
                    },
                    {
                        data: [7, 6, 2, 5, 0, 2, 5, 9, 3, 12, 14, 5, 17, 12, 5, 14, 15],
                        borderColor: '#FF0000',
                        fill: false,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                            display: true,
                            gridLines: {
                                display: false,
                            },
                        }],
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 5,
                                stepValue: 5,
                                max: 20
                            },
                            gridLines: {
                                drawBorder: false,
                            },
                        }],
                }
            }
        });
        //----------------------------------------------
        this.BarChart = new chart_js__WEBPACK_IMPORTED_MODULE_6__["Chart"]('doubleBarChart', {
            type: 'bar',
            data: {
                labels: ["September 1", "SAugust 31", "August 30", "August 29", "August 28", "August 27", "August 26"],
                datasets: [
                    {
                        label: "InBound Call",
                        backgroundColor: "#00AEFF",
                        data: [0, 2, 2, 1, 2, 0, 9],
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                barValueSpacing: 20,
                title: {
                    display: true,
                    text: 'Call Status'
                },
                scales: {
                    xAxes: [{ display: true,
                            barPercentage: 2,
                            barThickness: 15,
                            maxBarThickness: 15,
                            minBarLength: 2,
                            gridLines: {
                                // offsetGridLines: false //true
                                display: false,
                            } }],
                    yAxes: [{ display: true,
                            //  ticks: { precision:0 }//to replace decimal values from y-axis
                            ticks: {
                                beginAtZero: true,
                            },
                            gridLines: {
                            //   drawBorder: false,
                            //  display: false,
                            }
                        }],
                },
            }
        });
    };
    //file uploading code
    AdminDashboardComponent.prototype.onFileSelect = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            this.selectedFile = this.uploadForm.get('profile').value.name;
            console.log(this.uploadForm.get('profile').value);
        }
    };
    AdminDashboardComponent.prototype.onSubmit = function () {
        var _this = this;
        this.selectedFile = '';
        var formData = new FormData();
        formData.append('file', this.uploadForm.get('profile').value);
        console.log(formData);
        this.service.excelUploading(formData).subscribe(function (data) {
            if (data.sucess == true) {
                if (data.data.length != 0) {
                    _this.showToaster();
                }
                else if (data.data.length == 0) {
                    _this.warningSuccess();
                }
                console.log(data);
                _this.ResultDataSuccess = data.data;
                _this.ResultDataFailed = data.duplicateData;
            }
            else {
                console.log(data);
                _this.ErrorSuccess();
            }
        });
    };
    //notification
    AdminDashboardComponent.prototype.showToaster = function () {
        this.toastrService.success('Data Saved Successfully');
    };
    AdminDashboardComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed to save Data');
    };
    AdminDashboardComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    AdminDashboardComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('warning : Duplicate Data');
    };
    //Excel file
    // arrayBuffer:any;
    // file:File;
    AdminDashboardComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            this.selectedFile = this.uploadForm.get('profile').value.name;
            console.log(this.uploadForm.get('profile').value);
        }
    };
    AdminDashboardComponent.prototype.Upload = function () {
        var _this = this;
        this.selectedFile = '';
        var fileReader = new FileReader();
        fileReader.onload = function (e) {
            _this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(_this.arrayBuffer);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = ts_xlsx__WEBPACK_IMPORTED_MODULE_5__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(ts_xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(worksheet, { raw: true }));
            _this.ExcelArray = ts_xlsx__WEBPACK_IMPORTED_MODULE_5__["utils"].sheet_to_json(worksheet, { raw: true });
            _this.sendExcelFile(_this.ExcelArray);
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    AdminDashboardComponent.prototype.sendExcelFile = function (excelFile) {
        var _this = this;
        this.ExcelFileObj = {
            CustomerData: excelFile
        };
        alert('file sending');
        this.service.excelUploading(this.ExcelFileObj).subscribe(function (data) {
            if (data.sucess == true) {
                if (data.data.length != 0) {
                    _this.showToaster();
                }
                else if (data.data.length == 0) {
                    _this.warningSuccess();
                }
                console.log(data);
                _this.ResultDataSuccess = data.data;
                _this.ResultDataFailed = data.duplicateData;
            }
            else {
                console.log(data);
                _this.ErrorSuccess();
            }
        });
    };
    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminDashboard',
            template: __webpack_require__(/*! ./adminDashboard.component.html */ "./src/app/layout/admin/adminDashboard.component.html"),
            styles: [__webpack_require__(/*! ./adminDashboard.component.css */ "./src/app/layout/admin/adminDashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}());



/***/ }),

/***/ "./src/app/layout/admin/adminDashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/admin/adminDashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardModule", function() { return AdminDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _adminDashboard_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminDashboard-routing */ "./src/app/layout/admin/adminDashboard-routing.ts");
/* harmony import */ var _adminDashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./adminDashboard.component */ "./src/app/layout/admin/adminDashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var AdminDashboardModule = /** @class */ (function () {
    function AdminDashboardModule() {
    }
    AdminDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _adminDashboard_routing__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_adminDashboard_component__WEBPACK_IMPORTED_MODULE_4__["AdminDashboardComponent"]]
        })
    ], AdminDashboardModule);
    return AdminDashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=admin-adminDashboard-module.js.map