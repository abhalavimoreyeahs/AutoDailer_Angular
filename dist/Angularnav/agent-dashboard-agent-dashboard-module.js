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

module.exports = "body{\r\n  font-family: 'Open Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;\r\n}\r\n\r\na {\r\n  color: #009C9F;\r\n  background-color: transparent;\r\n}\r\n\r\n.grid-container {\r\n    margin: 20px;\r\n  }\r\n\r\n.dashboard-card {\r\n    position: absolute;\r\n    top: 15px;\r\n    left: 15px;\r\n    right: 15px;\r\n    bottom: 15px;\r\n  }\r\n\r\n.more-button {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 10px;\r\n  }\r\n\r\n.dashboard-card-content {\r\n    text-align: center;\r\n  }\r\n\r\n.card-header {\r\n    padding: .75rem 1.25rem;\r\n    margin-bottom: 0;\r\n   background-color: rgb(255, 255, 255);\r\n    border-bottom: 1px solid rgba(0,0,0,.125);\r\n}\r\n\r\n.card-body {\r\n  flex: 1 1 auto;\r\n  padding: 1rem;\r\n}\r\n\r\n.card-title{\r\n  text-align: left;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\n.table thead th {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #E3EBF3;\r\n    border-top: 1px solid #E3EBF3;\r\n}\r\n\r\n.table td {\r\n    padding: .75rem 2rem;\r\n  }\r\n\r\n.table th {\r\n    padding: .75rem 2rem;\r\n  }\r\n\r\n.progress.progress-sm {\r\n    height: .5rem;\r\n}\r\n\r\n/* .height-250 {\r\n  height: 250px!important;\r\n} */\r\n\r\nh3 {\r\n  font-size: 1.51rem;\r\n  font-weight: normal;\r\n}\r\n\r\n/* 2nd card*/\r\n\r\n.primary {\r\n  color: #00B5B8!important;\r\n}\r\n\r\n.danger {\r\n  color: #FF7588!important;\r\n}\r\n\r\n.success {\r\n  color: #16D39A!important;\r\n}\r\n\r\n.warning {\r\n  color: #FFA87D!important;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #00B5B8!important;\r\n}\r\n\r\n.bg-danger {\r\n  background-color: #FF7588!important;\r\n}\r\n\r\n.bg-success {\r\n  background-color: #16D39A!important;\r\n}\r\n\r\n.bg-warning {\r\n  background-color: #FFA87D!important;\r\n}\r\n\r\n/* distance b/W number and line */\r\n\r\n.progress.progress-sm {\r\n  height: .5rem;\r\n}\r\n\r\nmat-icon{\r\n  width: 50px;\r\n  height: 50px;\r\n  font-weight: 1rem;\r\n  font-size: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWdlbnQtZGFzaGJvYXJkL2FnZW50LWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkdBQTZHO0FBQy9HOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7RUFDYjs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFDQTtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7R0FDakIsb0NBQW9DO0lBQ25DLHlDQUF5QztBQUM3Qzs7QUFFQTtFQUtFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFRTtJQUNFLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0FBQ2pDOztBQUVFO0lBQ0Usb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0Usb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsYUFBYTtBQUNqQjs7QUFDQTs7R0FFRzs7QUFFSDtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBR0EsWUFBWTs7QUFDWjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQSxpQ0FBaUM7O0FBQ2pDO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2FnZW50LWRhc2hib2FyZC9hZ2VudC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHl7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LCdTZWdvZSBVSScsUm9ib3RvLCdIZWx2ZXRpY2EgTmV1ZScsQXJpYWwsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMwMDlDOUY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXNoYm9hcmQtY2FyZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBsZWZ0OiAxNXB4O1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICBib3R0b206IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb3JlLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuZGFzaGJvYXJkLWNhcmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xMjUpO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gIC13ZWJraXQtZmxleDogMSAxIGF1dG87XHJcbiAgLW1vei1ib3gtZmxleDogMTtcclxuICAtbXMtZmxleDogMSAxIGF1dG87XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuLmNhcmQtdGl0bGV7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4gIHRyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4gIC50YWJsZSB0aGVhZCB0aCB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFM0VCRjM7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI0UzRUJGMztcclxufVxyXG5cclxuICAudGFibGUgdGQge1xyXG4gICAgcGFkZGluZzogLjc1cmVtIDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAuNzVyZW0gMnJlbTtcclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy5wcm9ncmVzcy1zbSB7XHJcbiAgICBoZWlnaHQ6IC41cmVtO1xyXG59XHJcbi8qIC5oZWlnaHQtMjUwIHtcclxuICBoZWlnaHQ6IDI1MHB4IWltcG9ydGFudDtcclxufSAqL1xyXG5cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMS41MXJlbTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuLyogMm5kIGNhcmQqL1xyXG4ucHJpbWFyeSB7XHJcbiAgY29sb3I6ICMwMEI1QjghaW1wb3J0YW50O1xyXG59XHJcbi5kYW5nZXIge1xyXG4gIGNvbG9yOiAjRkY3NTg4IWltcG9ydGFudDtcclxufVxyXG4uc3VjY2VzcyB7XHJcbiAgY29sb3I6ICMxNkQzOUEhaW1wb3J0YW50O1xyXG59XHJcbi53YXJuaW5nIHtcclxuICBjb2xvcjogI0ZGQTg3RCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iZy1wcmltYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCNUI4IWltcG9ydGFudDtcclxufVxyXG4uYmctZGFuZ2VyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3NTg4IWltcG9ydGFudDtcclxufVxyXG4uYmctc3VjY2VzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2RDM5QSFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnLXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkE4N0QhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBkaXN0YW5jZSBiL1cgbnVtYmVyIGFuZCBsaW5lICovXHJcbi5wcm9ncmVzcy5wcm9ncmVzcy1zbSB7XHJcbiAgaGVpZ2h0OiAuNXJlbTtcclxufVxyXG5cclxubWF0LWljb257XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/agent/agent-dashboard/agent-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/agent/agent-dashboard/agent-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainDiv\" style=\"background-color:#ecf0f5\"> \r\n  <div class=\"content-wrapper\" style=\"padding: 1.8rem;\">\r\n   <div class=\"content-header row\">\r\n   \r\n   </div>\r\n   <div class=\"content-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\"> \r\n          <div class=\"card\">\r\n              <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #008385, #00E7EB );\">\r\n                  <div class=\"media align-items-stretch\">\r\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\r\n                      <img src=\"../../../assets/calendar-with-a-clock-time-tools (2)@2x.png\" style=\"width: 50px;  height: 40px; \">\r\n                    </div>\r\n                      <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\r\n                          <h5>Today's Scheduled Calls</h5>\r\n                          <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div> </div>\r\n     <div class=\"col-sm\">\r\n        <div class=\"card\">\r\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF425C, #FF7588 );\">\r\n                <div class=\"media align-items-stretch\">\r\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\r\n                      <img src=\"../../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\r\n                    \r\n                    </div>\r\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\r\n                        <h5>Call Attended</h5>\r\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 25</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n     </div>\r\n     <div class=\"col-sm\">\r\n        <div class=\"card\">\r\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #FF864A, #FFA87D );\">\r\n                <div class=\"media align-items-stretch\">\r\n                    <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\r\n                      <img src=\"../../assets/call-back@2x.png\" style=\"width: 50px;  height: 40px;\">\r\n                    </div>\r\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\r\n                        <h5>Manual Dial</h5>\r\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i> 28</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> </div>\r\n     <div class=\"col-sm\"> \r\n        <div class=\"card\">\r\n            <div class=\"card-content\" style=\"background-image: linear-gradient( to right, #11A578, #32EAB2 );\">\r\n                <div class=\"media align-items-stretch\">\r\n                  <div style=\"width:100px; height:90px; padding: 5% 5% 5% 5%;\">\r\n                    <img src=\"../../../assets/campaign1.png\" style=\"width: 50px;  height: 40px;\">\r\n                  </div>\r\n                    <div style=\"margin-top: 5%;   margin-left: 2%;    color: white;    font-family: sans-serif;\" >\r\n                        <h5>Today's Campaign</h5>\r\n                        <h5 class=\"text-bold-400 mb-0\"><i class=\"ft-plus\"></i>Social Media Campaign</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n       </div>\r\n    </div>\r\n    \r\n    <div class=\"row match-height\" style=\"margin-top:1%\">\r\n    \r\n    <div  class=\"col-xl-8 col-lg-12\">\r\n      <div class=\"card\" style=\"height: 402px;\">\r\n        <div class=\"card-header border-0\" >\r\n            <h4 class=\"card-title\" style=\"font-weight:normal\">Call Status</h4>\r\n            <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\r\n            <div class=\"heading-elements\">\r\n                <ul class=\"list-inline mb-0\">\r\n                    <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        <div class=\"card-content\">\r\n            <div  class=\"table-responsive  position-relative ps ps--active-y\">\r\n                <table class=\"table mb-0\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th>Call Type</th>\r\n                            <th>Call Value</th>\r\n                            <th>Call status rate</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td>Call Attended</td>\r\n                            <td>28</td>\r\n                            <td class=\"text-center font-small-2\">85% \r\n                            <div class=\"progress progress-sm mt-1 mb-0\">\r\n                              <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 95%;background-color: #16D39A!important;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Call Disconnected</td>\r\n                            <td>5</td>\r\n                            <td class=\"text-center font-small-2\">75% \r\n                            <div class=\"progress progress-sm mt-1 mb-0\">\r\n                                <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 55%;background-color: #FFA87D!important;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                              \r\n                            </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Call answered</td>\r\n                            <td>18</td>\r\n                            <td class=\"text-center font-small-2\">65% \r\n                            <div class=\"progress progress-sm mt-1 mb-0\">\r\n                                <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 85%; background-color: #16D39A!important;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>Call Unanswered</td>\r\n                            <td>5</td>\r\n                            <td class=\"text-center font-small-2\">35% \r\n                            <div class=\"progress progress-sm mt-1 mb-0\">\r\n                              <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 45%; background-color: #FFA87D!important; \" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                            </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    <div class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\" style=\"width:100%; height:402px\">\r\n            <div class=\"card-header\" style=\"background-color: none;\">\r\n                <h4 class=\"card-title\" style=\"font-weight:normal\">Call Status</h4>\r\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\r\n                <div class=\"heading-elements\">\r\n                    <ul class=\"list-inline mb-0\">\r\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-content\">\r\n                <div class=\"card-body\">\r\n                    <p>Total paid invoices 240, unpaid 150. <span class=\"float-right\"><a href=\"project-summary.html\" target=\"_blank\">Invoice Summary <i class=\"ft-arrow-right\"></i></a></span></p>\r\n                </div>\r\n                <div class=\"table-responsive\">\r\n                    <table id=\"recent-orders\" class=\"table table-hover mb-0 ps-container ps-theme-default\" style=\"font-size: 1rem; font-weight: 400;  line-height: 1.45;\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>SKU</th>\r\n                                <!-- <th>Invoice#</th> -->\r\n                                <!-- <th>Customer Name</th> -->\r\n                                <th>Status</th>\r\n                                <th>Call</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td class=\"text-truncate\">Call Attended</td>\r\n                                <!-- <td class=\"text-truncate\"><a href=\"#\">INV-001001</a></td> -->\r\n                                <!-- <td class=\"text-truncate\">Elizabeth W.</td> -->\r\n                                <td class=\"text-truncate\"><span class=\"badge badge-success\">Paid</span></td>\r\n                                <td class=\"text-truncate\">27</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-truncate\">Call Disconnected</td>\r\n                                <!-- <td class=\"text-truncate\"><a href=\"#\">INV-01112</a></td> -->\r\n                                <!-- <td class=\"text-truncate\">Doris R.</td> -->\r\n                                <td class=\"text-truncate\"><span class=\"badge badge-warning\">Overdue</span></td>\r\n                                <td class=\"text-truncate\">06</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-truncate\">Call answered</td>\r\n                                <!-- <td class=\"text-truncate\"><a href=\"#\">INV-001012</a></td> -->\r\n                                <!-- <td class=\"text-truncate\">Andrew D.</td> -->\r\n                                <td class=\"text-truncate\"><span class=\"badge badge-success\">Paid</span></td>\r\n                                <td class=\"text-truncate\">15</td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td class=\"text-truncate\">Call Unanswered</td>\r\n                                <!-- <td class=\"text-truncate\"><a href=\"#\">INV-001401</a></td> -->\r\n                                <!-- <td class=\"text-truncate\">Megan S.</td> -->\r\n                                <td class=\"text-truncate\"><span class=\"badge badge-success\">Paid</span></td>\r\n                                <td class=\"text-truncate\">7</td>\r\n                            </tr>\r\n                    \r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    <!----------------------------------------------------------------------------------------------------------------------------->\r\n    <div class=\"row\" style=\"margin-top:1%\">\r\n        <div class=\"col-xl-3 col-lg-6 col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body text-left w-100\">\r\n                                <h3 class=\"primary\">10 hours</h3>\r\n                                <span>Active Time</span>\r\n                            </div>\r\n                            <div class=\"media-right media-middle\">\r\n                                <i class=\"icon-user-follow primary font-large-2 float-right\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"progress progress-sm mt-1 mb-0\">\r\n                          <div class=\"progress-bar bg-primary\" role=\"progressbar\" style=\"width: 80%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6 col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body text-left w-100\">\r\n                                <h3 class=\"danger\">8 Hours</h3>\r\n                                <span>Login Time</span>\r\n                            </div>\r\n                            <div class=\"media-right media-middle\">\r\n                                <i class=\"icon-social-dropbox danger font-large-2 float-right\"></i>\r\n                            </div>                        \r\n                        </div>\r\n                        <div class=\"progress progress-sm mt-1 mb-0\">\r\n                          <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 40%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6 col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body text-left w-100\">\r\n                                <h3 class=\"success\">7 Hours</h3>\r\n                                <span>Talk Time</span>\r\n                            </div>\r\n                            <div class=\"media-right media-middle\">\r\n                                <!-- <i class=\"icon-layers success font-large-2 float-right\"></i> -->\r\n                                <mat-icon style=\"color:#16D39A\">phone_in_talk</mat-icon>\r\n                            </div>                        \r\n                        </div>\r\n                        <div class=\"progress progress-sm mt-1 mb-0\">\r\n                          <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 60%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-xl-3 col-lg-6 col-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-content\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"media\">\r\n                            <div class=\"media-body text-left w-100\">\r\n                                <h3 class=\"warning\">1.3 Hours</h3>\r\n                                <span>Waiting Time</span>\r\n                            </div>\r\n                            <div class=\"media-right media-middle\">\r\n                                <!-- <i class=\"icon-globe warning font-large-2 float-right\"></i> -->\r\n                                <mat-icon style=\"color: #FFA87D;\">timelapse</mat-icon>\r\n                            </div>                        \r\n                        </div>\r\n                        <div class=\"progress progress-sm mt-1 mb-0\">\r\n                          <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 35%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!----------------------------------------------------------------------------------------------------------------------------->\r\n    <div class=\"row match-height\" style=\"margin-top:1%\">\r\n        <div  class=\"col-xl-4 col-lg-12\">\r\n            <div class=\"card\" style=\"width:100%; height:402px\">\r\n                <div class=\"card-header\">\r\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Number of Scheduled Call Being Placed</h4>\r\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\r\n                  <div class=\"heading-elements\">\r\n                      <ul class=\"list-inline mb-0\">\r\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n              \r\n            </div>  \r\n      </div>\r\n      <div  class=\"col-xl-4 col-lg-12\">\r\n          <div class=\"card\" style=\"width:100%; height:402px\">\r\n              <div class=\"card-header\">\r\n                  <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Campaign Running Today</h4>\r\n                  <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\r\n                  <div class=\"heading-elements\">\r\n                      <ul class=\"list-inline mb-0\">\r\n                          <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                          <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                      </ul>\r\n                  </div>\r\n              </div>\r\n            \r\n            </div>  \r\n      </div>\r\n      <div  class=\"col-xl-4 col-lg-12\">\r\n        <div class=\"card\" style=\"width:100%; height:402px;\">\r\n            <div class=\"card-header\">\r\n                <h4 class=\"card-title\" style=\"font-family: sans-serif; font-weight: none; color: gray;\">Extra field</h4>\r\n                <a class=\"heading-elements-toggle\"><i class=\"fa fa-ellipsis-v font-medium-3\"></i></a>\r\n                <div class=\"heading-elements\">\r\n                    <ul class=\"list-inline mb-0\">\r\n                        <li><a data-action=\"reload\"><i class=\"ft-rotate-cw\"></i></a></li>\r\n                        <li><a data-action=\"expand\"><i class=\"ft-maximize\"></i></a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n          </div>  \r\n    </div>\r\n      </div>\r\n   \r\n   </div>\r\n  \r\n  </div>\r\n \r\n </div>\r\n"

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




var AgentDashboardComponent = /** @class */ (function () {
    function AgentDashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        /** Based on the screen size, switch from standard to one column per row */
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
    AgentDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent-dashboard',
            template: __webpack_require__(/*! ./agent-dashboard.component.html */ "./src/app/agent/agent-dashboard/agent-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./agent-dashboard.component.css */ "./src/app/agent/agent-dashboard/agent-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
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



/***/ })

}]);
//# sourceMappingURL=agent-dashboard-agent-dashboard-module.js.map