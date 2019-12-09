(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agent-dashboard-agent-dashboard-module"],{

/***/ "./src/app/agent/agent-dashboard/agent-dashboard-routing.ts":
/*!******************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard-routing.ts ***!
  \******************************************************************/
/*! exports provided: AgentDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentDashboardRoutingModule", function() { return AgentDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agent-dashboard.component */ "./src/app/agent/agent-dashboard/agent-dashboard.component.ts");




var routes = [
    {
        path: '',
        component: _agent_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AgentDashboardComponent"],
    }
];
var AgentDashboardRoutingModule = /** @class */ (function () {
    function AgentDashboardRoutingModule() {
    }
    AgentDashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AgentDashboardRoutingModule);
    return AgentDashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n  font-family: 'Open Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;\n}\n/*----agnet status ring------*/\n::ng-deep .circle{\n  background-color:red;\n}\n::ng-deep .ringing{\n  border: 3px solid red;\n}\na {\n  color: #009C9F;\n  background-color: transparent;\n}\n.grid-container {\n    margin: 20px;\n  }\n.dashboard-card {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n  }\n.more-button {\n    position: absolute;\n    top: 5px;\n    right: 10px;\n  }\n.dashboard-card-content {\n    text-align: center;\n  }\n.card-header {\n    padding: .75rem 1.25rem;\n    margin-bottom: 0;\n   background-color: rgb(255, 255, 255);\n    border-bottom: 1px solid rgba(0,0,0,.125);\n}\n.card-body {\n  -webkit-box-flex: 1;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n.card-title{\n  text-align: left;\n}\ntr {\n    display: table-row;\n    vertical-align: inherit;\n    border-color: inherit;\n}\n.table thead th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #E3EBF3;\n    border-top: 1px solid #E3EBF3;\n}\n.table td {\n    padding: .75rem 2rem;\n  }\n.table th {\n    padding: .75rem 2rem;\n  }\n.progress.progress-sm {\n    height: .5rem;\n}\n/* .height-250 {\n  height: 250px!important;\n} */\nh3 {\n  font-size: 1.51rem;\n  font-weight: normal;\n}\n/* 2nd card*/\n.primary {\n  color: #00B5B8!important;\n}\n.danger {\n  color: #FF7588!important;\n}\n.success {\n  color: #16D39A!important;\n}\n.warning {\n  color: #FFA87D!important;\n}\n.bg-primary {\n  background-color: #00B5B8!important;\n}\n.bg-danger {\n  background-color: #FF7588!important;\n}\n.bg-success {\n  background-color: #16D39A!important;\n}\n.bg-warning {\n  background-color: #FFA87D!important;\n}\n/* distance b/W number and line */\n.progress.progress-sm {\n  height: .5rem;\n}\nmat-icon{\n  width: 50px;\n  height: 50px;\n  font-weight: 1rem;\n  font-size: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWdlbnQtZGFzaGJvYXJkL2FnZW50LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkdBQTZHO0FBQy9HO0FBQ0EsOEJBQThCO0FBQzlCO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7QUFFQTtJQUNJLFlBQVk7RUFDZDtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0VBQ2I7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtHQUNqQixvQ0FBb0M7SUFDbkMseUNBQXlDO0FBQzdDO0FBRUE7RUFDRSxtQkFBbUI7RUFJbkIsY0FBYztFQUNkLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6QjtBQUVFO0lBQ0Usc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyw2QkFBNkI7QUFDakM7QUFFRTtJQUNFLG9CQUFvQjtFQUN0QjtBQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCO0FBRUE7SUFDRSxhQUFhO0FBQ2pCO0FBQ0E7O0dBRUc7QUFFSDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFHQSxZQUFZO0FBQ1o7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFFQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2FnZW50LWRhc2hib2FyZC9hZ2VudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCwnU2Vnb2UgVUknLFJvYm90bywnSGVsdmV0aWNhIE5ldWUnLEFyaWFsLHNhbnMtc2VyaWY7XG59XG4vKi0tLS1hZ25ldCBzdGF0dXMgcmluZy0tLS0tLSovXG46Om5nLWRlZXAgLmNpcmNsZXtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG59XG46Om5nLWRlZXAgLnJpbmdpbmd7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjMDA5QzlGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLmdyaWQtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cbiAgXG4gIC5kYXNoYm9hcmQtY2FyZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGJvdHRvbTogMTVweDtcbiAgfVxuICBcbiAgLm1vcmUtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1cHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIC5kYXNoYm9hcmQtY2FyZC1jb250ZW50IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLXdlYmtpdC1mbGV4OiAxIDEgYXV0bztcbiAgLW1vei1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLmNhcmQtdGl0bGV7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4gIHRyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1yb3c7XG4gICAgdmVydGljYWwtYWxpZ246IGluaGVyaXQ7XG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG4gIC50YWJsZSB0aGVhZCB0aCB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0UzRUJGMztcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0UzRUJGMztcbn1cblxuICAudGFibGUgdGQge1xuICAgIHBhZGRpbmc6IC43NXJlbSAycmVtO1xuICB9XG4gIFxuICAudGFibGUgdGgge1xuICAgIHBhZGRpbmc6IC43NXJlbSAycmVtO1xuICB9XG5cbiAgLnByb2dyZXNzLnByb2dyZXNzLXNtIHtcbiAgICBoZWlnaHQ6IC41cmVtO1xufVxuLyogLmhlaWdodC0yNTAge1xuICBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDtcbn0gKi9cblxuaDMge1xuICBmb250LXNpemU6IDEuNTFyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cblxuLyogMm5kIGNhcmQqL1xuLnByaW1hcnkge1xuICBjb2xvcjogIzAwQjVCOCFpbXBvcnRhbnQ7XG59XG4uZGFuZ2VyIHtcbiAgY29sb3I6ICNGRjc1ODghaW1wb3J0YW50O1xufVxuLnN1Y2Nlc3Mge1xuICBjb2xvcjogIzE2RDM5QSFpbXBvcnRhbnQ7XG59XG4ud2FybmluZyB7XG4gIGNvbG9yOiAjRkZBODdEIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCNUI4IWltcG9ydGFudDtcbn1cbi5iZy1kYW5nZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NTg4IWltcG9ydGFudDtcbn1cbi5iZy1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2RDM5QSFpbXBvcnRhbnQ7XG59XG4uYmctd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkE4N0QhaW1wb3J0YW50O1xufVxuXG4vKiBkaXN0YW5jZSBiL1cgbnVtYmVyIGFuZCBsaW5lICovXG4ucHJvZ3Jlc3MucHJvZ3Jlc3Mtc20ge1xuICBoZWlnaHQ6IC41cmVtO1xufVxuXG5tYXQtaWNvbntcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDFyZW07XG4gIGZvbnQtc2l6ZTogNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainDiv\" style=\"background-color:#ecf0f5\"> \n  <div class=\"content-wrapper\" style=\"padding: 1.8rem;\">\n   <div class=\"content-header row\">\n   \n   </div>\n   <div class=\"content-body\">\n    <div class=\"row\">\n      <div class=\"col-sm\"> \n          <div class=\"card\">\n              <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #008385, #00E7EB );\">\n                  <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../../assets/calendar-with-a-clock-time-tools (2)@2x.png\" style=\"width: 50px;  height: 40px; \">\n                    </div>\n                      <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                          <h5>Today's Scheduled Calls</h5>\n                          <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 0</h5>\n                      </div>\n                  </div>\n              </div>\n          </div> </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF425C, #FF7588 );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                    \n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Call Attended</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 0</h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n     </div>\n     <div class=\"col-sm\">\n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF864A, #FFA87D );\">\n                <div class=\"media align-items-stretch\">\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                      <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\n                    </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Manual Dial</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 0</h5>\n                    </div>\n                </div>\n            </div>\n        </div> </div>\n     <div class=\"col-sm\"> \n        <div class=\"card\">\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #11A578, #32EAB2 );\">\n                <div class=\"media align-items-stretch\">\n                  <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\n                    <img src=\"../../../assets/campaign1.png\" style=\"width: 50px;  height: 40px;\">\n                  </div>\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\n                        <h5>Today's Campaign</h5>\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> </h5>\n                    </div>\n                </div>\n            </div>\n        </div>\n       </div>\n    </div>\n    \n    <div class=\"row match-height\" style=\"margin-top:1%\">\n    \n    <div  class=\"col-xl-8 col-lg-12\">\n      <div class=\"card\" style=\"height: 402px;\">\n        <div class=\"card-header border-0\" >\n            <h4 class=\"card-title\" style=\"font-weight:normal\"> Active Call Status</h4>\n            <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n            <div class=\"heading-elements\">\n                <ul class=\"list-inline mb-0\">\n                    <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"card-content\">\n            <div  class=\"table-responsive  position-relative ps ps--active-y\">\n                <table class=\"table mb-0\">\n                    <!-- <thead>\n                        <tr>\n                            <th>Call Type</th>\n                            <th>Call Value</th>\n                            <th>Call status rate</th>\n                        </tr>\n                    </thead> -->\n                    <tbody>\n                        <tr>\n                            <td>Call Attended</td>\n                            <td>{{ ActiveCallStatus.totalCalls }}</td>\n                            <td class=\"text-center font-small-2\">100% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                              <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 100%;background-color: #16D39A!important;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Successful Calls</td>\n                            <td>{{ ActiveCallStatus.successfulCalls }}</td>\n                            <td class=\"text-center font-small-2\">{{ActiveCallStatusPercentage.successfulCalls | number : '1.2-2' }}% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                                <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width.%]=\"ActiveCallStatusPercentage.successfulCalls\" style=\"background-color: #16D39A!important;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>UnsuccessFul Calls</td>\n                            <td>{{ ActiveCallStatus.unsuccessfulCalls }}</td>\n                            <td class=\"text-center font-small-2\">{{ActiveCallStatusPercentage.unsuccessfulCalls | number : '1.2-2' }}% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                              <div class=\"progress-bar bg-warning\" role=\"progressbar\" [style.width.%]=\"ActiveCallStatusPercentage.unsuccessfulCalls\" style=\"background-color: #FFA87D!important; \" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>No Answer</td>\n                            <td> {{ ActiveCallStatus.noAnswer }}</td>\n                            <td class=\"text-center font-small-2\">{{ActiveCallStatusPercentage.noAnswer | number : '1.2-2' }}% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                                <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width.%]=\"ActiveCallStatusPercentage.noAnswer\" style=\"background-color: #ffc107!important;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>Call Busy</td>\n                            <td>{{ ActiveCallStatus.callBusy }}</td>\n                            <td class=\"text-center font-small-2\">{{ActiveCallStatusPercentage.callBusy | number : '1.2-2' }}% \n                            <div class=\"progress progress-sm mt-1 mb-0\">\n                              <div class=\"progress-bar bg-warning\" role=\"progressbar\" [style.width.%]=\"ActiveCallStatusPercentage.callBusy\" style=\"background-color: #FFA87D!important; \" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                            </div>\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n        <div class=\"card\" style=\"width:100%; height:402px\">\n            <div class=\"card-header\" style=\"background-color: none;\">\n                <h4 class=\"card-title\" style=\"font-weight:normal\">Call Status</h4>\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                <div class=\"heading-elements\">\n                    <ul class=\"list-inline mb-0\">\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"card-content\">\n           \n                <!-- <div class=\"table-responsive\">\n                    <table id=\"recent-orders\" class=\"table table-hover mb-0 ps-container ps-theme-default\" style=\"font-size: 1rem; font-weight: 400;  line-height: 1.45;\">\n                        <thead>\n                            <tr>\n                                <th>SKU</th>\n                                <th>Status</th>\n                                <th>Call</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td class=\"text-truncate\">Call Attended</td>\n                                <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                                <td class=\"text-truncate\">27</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-truncate\">Call Disconnected</td>\n                                <td class=\"text-truncate\"><span class=\"badge badge-warning\"></span></td>\n                                <td class=\"text-truncate\">06</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-truncate\">Call answered</td>\n                                <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                                <td class=\"text-truncate\">15</td>\n                            </tr>\n                            <tr>\n                                <td class=\"text-truncate\">Call Unanswered</td>\n\n                                <td class=\"text-truncate\"><span class=\"badge badge-success\"></span></td>\n                                <td class=\"text-truncate\">7</td>\n                            </tr>\n                    \n                        </tbody>\n                    </table>\n                </div> -->\n            </div>\n        </div>\n    </div>\n    </div>\n    <!----------------------------------------------------------------------------------------------------------------------------->\n    <div class=\"row\" style=\"margin-top:1%\">\n        <div class=\"col-xl-3 col-lg-6 col-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"media\">\n                            <div class=\"media-body text-left w-100\">\n                                <h3 class=\"primary\">0 hours</h3>\n                                <span>Active Time</span>\n                            </div>\n                            <div class=\"media-right media-middle\">\n                                <i class=\"icon-user-follow primary font-large-2 float-right\"></i>\n                            </div>\n                        </div>\n                        <div class=\"progress progress-sm mt-1 mb-0\">\n                          <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"media\">\n                            <div class=\"media-body text-left w-100\">\n                                <h3 class=\"danger\">0 Hours</h3>\n                                <span>Login Time</span>\n                            </div>\n                            <div class=\"media-right media-middle\">\n                                <i class=\"icon-social-dropbox danger font-large-2 float-right\"></i>\n                            </div>                        \n                        </div>\n                        <div class=\"progress progress-sm mt-1 mb-0\">\n                          <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"media\">\n                            <div class=\"media-body text-left w-100\">\n                                <h3 class=\"success\">0 Hours</h3>\n                                <span>Talk Time</span>\n                            </div>\n                            <div class=\"media-right media-middle\">\n                                <!-- <i class=\"icon-layers success font-large-2 float-right\"></i> -->\n                                <mat-icon style=\"color:#16D39A\">phone_in_talk</mat-icon>\n                            </div>                        \n                        </div>\n                        <div class=\"progress progress-sm mt-1 mb-0\">\n                          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xl-3 col-lg-6 col-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"media\">\n                            <div class=\"media-body text-left w-100\">\n                                <h3 class=\"warning\">0 Hours</h3>\n                                <span>Waiting Time</span>\n                            </div>\n                            <div class=\"media-right media-middle\">\n                                <!-- <i class=\"icon-globe warning font-large-2 float-right\"></i> -->\n                                <mat-icon style=\"color: #FFA87D;\">timelapse</mat-icon>\n                            </div>                        \n                        </div>\n                        <div class=\"progress progress-sm mt-1 mb-0\">\n                          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 35%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!----------------------------------------------------------------------------------------------------------------------------->\n    <!-- <div class=\"row match-height\" style=\"margin-top:1%\">\n        <div  class=\"col-xl-4 col-lg-12\">\n            <div class=\"card\" style=\"width:100%; height:402px\">\n                <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Number of Scheduled Call Being Placed</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div>\n              \n            </div>  \n      </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n          <div class=\"card\" style=\"width:100%; height:402px\">\n              <div class=\"card-header\">\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Campaign Running Today</h4>\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                  <div class=\"heading-elements\">\n                      <ul class=\"list-inline mb-0\">\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                      </ul>\n                  </div>\n              </div>\n            \n            </div>  \n      </div>\n      <div  class=\"col-xl-4 col-lg-12\">\n        <div class=\"card\" style=\"width:100%; height:402px;\">\n            <div class=\"card-header\">\n                <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Extra field</h4>\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\n                <div class=\"heading-elements\">\n                    <ul class=\"list-inline mb-0\">\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\n                    </ul>\n                </div>\n            </div>\n          </div>  \n    </div>\n      </div> -->\n   \n   </div>\n  \n  </div>\n \n </div>\n"

/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AgentDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentDashboardComponent", function() { return AgentDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _shared_services_agent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/agent */ "./src/app/shared/services/agent.ts");





var AgentDashboardComponent = /** @class */ (function () {
    function AgentDashboardComponent(breakpointObserver, service) {
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        /** Based on the screen size, switch from standard to one column per row */
        this.ActiveCallStatus = { totalCalls: 0, successfulCalls: 0, unsuccessfulCalls: 0, noAnswer: 0, callBusy: 0 };
        this.ActiveCallStatusPercentage = { successfulCalls: 0, unsuccessfulCalls: 0, noAnswer: 0, callBusy: 0 };
        this.cards = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var matches = _a.matches;
            if (matches) {
                return [
                    { title: 'Card 1', cols: 1, rows: 1 },
                    { title: 'Card 2', cols: 1, rows: 1 },
                    { title: 'Card 3', cols: 1, rows: 1 },
                    { title: 'Card 4', cols: 1, rows: 1 }
                ];
            }
            return [
                { title: 'Card 1', cols: 2, rows: 1 },
                { title: 'Card 2', cols: 1, rows: 1 },
                { title: 'Card 3', cols: 1, rows: 2 },
                { title: 'Card 4', cols: 1, rows: 1 }
            ];
        }));
        this.AgentStatus = [
            { value: '0', name: 'Active' },
            { value: '1', name: 'Callback' },
            { value: '2', name: 'Manual Dial' },
            { value: '3', name: 'Break' },
            { value: '4', name: 'Training' },
            { value: '5', name: 'Meeting With Customer' }
        ];
    }
    AgentDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var data = { agentPlivoId: agentId };
        this.service.getAgentCallStatus(data).subscribe(function (data) {
            //debugger;
            console.log(data);
            if (data['success'] == true) {
                _this.ActiveCallStatus.totalCalls = data['message']['totalCalls'];
                _this.ActiveCallStatus.successfulCalls = data['message']['successful'];
                _this.ActiveCallStatus.unsuccessfulCalls = data['message']['unsuccssful'];
                _this.ActiveCallStatus.noAnswer = data['message']['noAnswer'];
                _this.ActiveCallStatus.callBusy = data['message']['callBusy'];
                // Call Status in percentage
                _this.ActiveCallStatusPercentage.successfulCalls = ((_this.ActiveCallStatus.successfulCalls * 100) / _this.ActiveCallStatus.totalCalls);
                _this.ActiveCallStatusPercentage.unsuccessfulCalls = ((_this.ActiveCallStatus.unsuccessfulCalls * 100) / _this.ActiveCallStatus.totalCalls);
                _this.ActiveCallStatusPercentage.noAnswer = ((_this.ActiveCallStatus.noAnswer * 100) / _this.ActiveCallStatus.totalCalls);
                _this.ActiveCallStatusPercentage.callBusy = ((_this.ActiveCallStatus.callBusy * 100) / _this.ActiveCallStatus.totalCalls);
            }
        });
    };
    AgentDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent-dashboard',
            template: __webpack_require__(/*! ./agent-dashboard.component.html */ "./src/app/agent/agent-dashboard/agent-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./agent-dashboard.component.css */ "./src/app/agent/agent-dashboard/agent-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"], _shared_services_agent__WEBPACK_IMPORTED_MODULE_4__["AgentService"]])
    ], AgentDashboardComponent);
    return AgentDashboardComponent;
}());



/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: AgentDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentDashboardModule", function() { return AgentDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agent_dashboard_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agent-dashboard-routing */ "./src/app/agent/agent-dashboard/agent-dashboard-routing.ts");
/* harmony import */ var _agent_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agent-dashboard.component */ "./src/app/agent/agent-dashboard/agent-dashboard.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var AgentDashboardModule = /** @class */ (function () {
    function AgentDashboardModule() {
    }
    AgentDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _agent_dashboard_routing__WEBPACK_IMPORTED_MODULE_4__["AgentDashboardRoutingModule"]
            ],
            declarations: [_agent_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AgentDashboardComponent"]]
        })
    ], AgentDashboardModule);
    return AgentDashboardModule;
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
//# sourceMappingURL=agent-dashboard-agent-dashboard-module.js.map