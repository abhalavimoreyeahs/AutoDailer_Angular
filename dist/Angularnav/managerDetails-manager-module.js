(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["managerDetails-manager-module"],{

/***/ "./src/app/layout/managerDetails/assignAgent.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/managerDetails/assignAgent.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <section id=\"basic-form-layouts\">\r\n    <div class=\"row text-left\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"content-header\"> </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row text-left\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n\r\n          <div class=\"card-content\">\r\n            <div class=\"px-3\">\r\n              <form class=\"form\">\r\n                <div class=\"form-body\">\r\n                  <h4 class=\"form-section\"><i class=\"ft-user\"></i> Manager Info</h4>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n        \r\n                      <mat-form-field>\r\n                        <mat-label>Manger Name</mat-label>\r\n                        <input  matInput  placeholder=\"Caller Name\"   name=\"name\" value=\"Annop Jain\" disabled>   \r\n                                           \r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n            \r\n                      <mat-form-field>\r\n                        <mat-label>E-mail</mat-label>\r\n                        <input  matInput  placeholder=\"email\"  name=\"email\" value=\"anoop@moreyeahs.in\" disabled>                             \r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n          \r\n                      <mat-form-field>\r\n                        <mat-label>Running Campaign</mat-label>\r\n                        <input  matInput  placeholder=\"Running Campaing\"   name=\"runningCampaign\" value=\"1\" disabled>                             \r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                  \r\n                      <mat-form-field>\r\n                        <mat-label>Stopped Campaign</mat-label>\r\n                        <input  matInput  placeholder=\"Stopped Campaign\"   name=\"StoppedCampaign\" value=\"0\" disabled>                             \r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n               \r\n                      <mat-form-field>\r\n                        <mat-label>Campaign in Queue</mat-label>\r\n                        <input  matInput  placeholder=\"Campaign in Queue\"   name=\"campaignInQueue\" value=\"1\" disabled>                             \r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n             \r\n                      <mat-form-field>\r\n                        <mat-label>Campaign Completed</mat-label>\r\n                        <input  matInput  placeholder=\"Campaign Completed\"   name=\"campaignCompleted\" value=\"5\" disabled>                             \r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n  \r\n                  <h4 class=\"form-section\"><i class=\"ft-file-text\"></i> Assign Agent</h4>\r\n  \r\n            \r\n  \r\n                  <div class=\"row\">\r\n          \r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"form-group\">\r\n                        <label for=\"projectinput6\">Available Agent</label>\r\n                        <select id=\"projectinput6\" name=\"budget\" class=\"form-control\">\r\n                          <option value=\"0\" selected=\"\" disabled=\"\">Agent</option>\r\n                          <option value=\"1\">Shruit</option>\r\n                          <option value=\"2\">Ravi</option>\r\n                          <option value=\"3\">Shivam</option>\r\n                          <option value=\"4\">Raj</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n  \r\n         \r\n                  <mat-form-field style=\"width:100%\">\r\n                    <mat-label>Add Remark</mat-label>\r\n                    <textarea matInput placeholder=\"Leave a comment\"  name=\"comment\" value=\"\" required></textarea>                           \r\n                  </mat-form-field>\r\n                </div>\r\n  \r\n                <div class=\"form-actions\">\r\n                  <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\">\r\n                    <i class=\"ft-x\"></i> Cancel\r\n                  </button>\r\n                  <button type=\"button\" class=\"btn btn-raised btn-raised btn-primary\">\r\n                    <i class=\"fa fa-check-square-o\"></i> Save\r\n                  </button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n</section>   -->\r\n\r\n<!------------------------------------------------------------------------------>\r\n\r\n\r\n\r\n<!-- <h2 mat-dialog-title style=\"text-align: center\">FeedBack</h2> -->\r\n\r\n<mat-dialog-content style=\"justify-content: center;\">\r\n  <div class=\"px-3\">\r\n    <form class=\"form\">\r\n      <div class=\"form-body\">\r\n        <h4 class=\"form-section\"><i class=\"ft-user\"></i> Manager Info</h4>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n\r\n            <mat-form-field>\r\n              <mat-label>Manger Name</mat-label>\r\n              <input  matInput  placeholder=\"Caller Name\"   name=\"name\" value=\"Annop Jain\" disabled>   \r\n                                 \r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n  \r\n            <mat-form-field>\r\n              <mat-label>E-mail</mat-label>\r\n              <input  matInput  placeholder=\"email\"  name=\"email\" value=\"anoop@moreyeahs.in\" disabled>                             \r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n\r\n            <mat-form-field>\r\n              <mat-label>Running Campaign</mat-label>\r\n              <input  matInput  placeholder=\"Running Campaing\"   name=\"runningCampaign\" value=\"1\" disabled>                             \r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n        \r\n            <mat-form-field>\r\n              <mat-label>Stopped Campaign</mat-label>\r\n              <input  matInput  placeholder=\"Stopped Campaign\"   name=\"StoppedCampaign\" value=\"0\" disabled>                             \r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n     \r\n            <mat-form-field>\r\n              <mat-label>Campaign in Queue</mat-label>\r\n              <input  matInput  placeholder=\"Campaign in Queue\"   name=\"campaignInQueue\" value=\"1\" disabled>                             \r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n   \r\n            <mat-form-field>\r\n              <mat-label>Campaign Completed</mat-label>\r\n              <input  matInput  placeholder=\"Campaign Completed\"   name=\"campaignCompleted\" value=\"5\" disabled>                             \r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n\r\n        <h4 class=\"form-section\"><i class=\"ft-file-text\"></i> Assign Agent</h4>\r\n\r\n  \r\n\r\n        <div class=\"row\">\r\n\r\n          <div class=\"col-md-12\">\r\n            <div class=\"form-group\">\r\n              <label for=\"projectinput6\">Available Agent</label>\r\n              <select id=\"projectinput6\" name=\"budget\" class=\"form-control\">\r\n                <option value=\"0\" selected=\"\" disabled=\"\">Agent</option>\r\n                <option value=\"1\">Shruit</option>\r\n                <option value=\"2\">Ravi</option>\r\n                <option value=\"3\">Shivam</option>\r\n                <option value=\"4\">Raj</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <mat-form-field style=\"width:100%\">\r\n          <mat-label>Add Remark</mat-label>\r\n          <textarea matInput placeholder=\"Leave a comment\"  name=\"comment\" value=\"\" required></textarea>                           \r\n        </mat-form-field>\r\n      </div>\r\n\r\n      <div class=\"form-actions\">\r\n        <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\">\r\n          <i class=\"ft-x\"></i> Cancel\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-raised btn-raised btn-primary\">\r\n          <i class=\"fa fa-check-square-o\"></i> Save\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\r\n   \r\n    <!-- <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:100px\">Ok</button> -->\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/layout/managerDetails/manager-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/managerDetails/manager-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ManagerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerRoutingModule", function() { return ManagerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager.component */ "./src/app/layout/managerDetails/manager.component.ts");




var routes = [
    {
        path: '',
        component: _manager_component__WEBPACK_IMPORTED_MODULE_3__["ManagerComponent"]
    }
];
var ManagerRoutingModule = /** @class */ (function () {
    function ManagerRoutingModule() {
    }
    ManagerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManagerRoutingModule);
    return ManagerRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/managerDetails/manager.component.css":
/*!*************************************************************!*\
  !*** ./src/app/layout/managerDetails/manager.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\r\n    position: relative;\r\n      padding: 15px 15px 0 15px;\r\n      background-color:transparent;\r\n      font:normal\r\n  }\r\n  \r\n  .box{\r\n    position: relative;\r\n      border-radius: 3px;\r\n      background: #ffffff;\r\n      border-top: 3px solid #d2d6de;\r\n      margin-bottom: 20px;\r\n      /* width: 100%; */\r\n      box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n      margin: 1% 1% 1% 1%;\r\n      /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n  }\r\n  \r\n  .box-header{\r\n    color: #444;\r\n      display: block;\r\n      padding: 10px;\r\n      position: relative;\r\n  }\r\n  \r\n  h2{\r\n    margin: 0;\r\n    font-size: 28px;\r\n    font:normal;\r\n    font-weight:normal;\r\n  \r\n  }\r\n  \r\n  h3{\r\n    display: inline-block;\r\n    font-size: 18px;\r\n    margin: 0;\r\n    line-height: 1;\r\n    font:normal;\r\n    font-weight:normal;\r\n  }\r\n  \r\n  .pointer {cursor: pointer;}\r\n  \r\n  h6{\r\n    color:black;\r\n  }\r\n  \r\n  /*For table*/\r\n  \r\n  /* td{\r\n   padding:16px;\r\n  }  */\r\n  \r\n  tr{\r\n    height:58px;\r\n }\r\n  \r\n  small{\r\n    font-size: 15px;\r\n      display: inline-block;\r\n      padding-left: 4px;\r\n      font-weight: 300;\r\n      line-height: 1; \r\n      color: #777;\r\n      font-family: sans-serif;\r\n  }\r\n  \r\n  .my-form{\r\n      min-width: 150px;\r\n      max-width: 500px;\r\n      width: 80%;\r\n    }\r\n  \r\n  .full-width {\r\n      width: 60%;\r\n    }\r\n  \r\n  .center{\r\n      width: 75%;\r\n      margin: 10px auto;\r\n    }\r\n  \r\n  .main-div{\r\n      height: 100vh;\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n    }\r\n  \r\n  table {\r\n      width: 100%;\r\n      /* margin: 20px 20px 20px 20px;  */\r\n    }\r\n  \r\n  .add-files-btn {\r\n      float: right;\r\n    }\r\n  \r\n  :host {\r\n      height: 100%;\r\n      display: flex;\r\n      flex: 1;\r\n      flex-direction: column;\r\n    }\r\n  \r\n  .actions {\r\n      justify-content: flex-end;\r\n    }\r\n  \r\n  .container {\r\n      height: 100%;\r\n    }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21hbmFnZXJEZXRhaWxzL21hbmFnZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtNQUNoQix5QkFBeUI7TUFDekIsNEJBQTRCO01BQzVCO0VBQ0o7O0VBRUE7SUFDRSxrQkFBa0I7TUFDaEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQiw2QkFBNkI7TUFDN0IsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixxQ0FBcUM7TUFDckMsbUJBQW1CO01BQ25CLGdHQUFnRztFQUNwRzs7RUFFQTtJQUNFLFdBQVc7TUFDVCxjQUFjO01BQ2QsYUFBYTtNQUNiLGtCQUFrQjtFQUN0Qjs7RUFFQTtJQUNFLFNBQVM7SUFDVCxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjs7RUFFcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFNBQVM7SUFDVCxjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7RUFDQSxVQUFVLGVBQWUsQ0FBQzs7RUFFMUI7SUFDRSxXQUFXO0VBQ2I7O0VBRUEsWUFBWTs7RUFDWjs7TUFFSTs7RUFDTDtJQUNHLFdBQVc7Q0FDZDs7RUFFQztJQUNFLGVBQWU7TUFDYixxQkFBcUI7TUFDckIsaUJBQWlCO01BQ2pCLGdCQUFnQjtNQUNoQixjQUFjO01BQ2QsV0FBVztNQUNYLHVCQUF1QjtFQUMzQjs7RUFFQTtNQUNJLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsVUFBVTtJQUNaOztFQUVBO01BQ0UsVUFBVTtJQUNaOztFQUdBO01BQ0UsVUFBVTtNQUNWLGlCQUFpQjtJQUNuQjs7RUFFQTtNQUNFLGFBQWE7TUFDYixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtJQUNyQjs7RUFFQTtNQUNFLFdBQVc7TUFDWCxrQ0FBa0M7SUFDcEM7O0VBRUE7TUFDRSxZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLE9BQU87TUFDUCxzQkFBc0I7SUFDeEI7O0VBRUE7TUFDRSx5QkFBeUI7SUFDM0I7O0VBRUE7TUFDRSxZQUFZO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWFuYWdlckRldGFpbHMvbWFuYWdlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVye1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICBmb250Om5vcm1hbFxyXG4gIH1cclxuICBcclxuICAuYm94e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDJkNmRlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAvKiB3aWR0aDogMTAwJTsgKi9cclxuICAgICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgbWFyZ2luOiAxJSAxJSAxJSAxJTtcclxuICAgICAgLyogYm94LXNoYWRvdzogMXB4IDJweCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50OyAqL1xyXG4gIH1cclxuICBcclxuICAuYm94LWhlYWRlcntcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICBoMntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGZvbnQ6bm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6bm9ybWFsO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBoM3tcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udDpub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbiAgfVxyXG4gIC5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gIFxyXG4gIGg2e1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC8qRm9yIHRhYmxlKi9cclxuICAvKiB0ZHtcclxuICAgcGFkZGluZzoxNnB4O1xyXG4gIH0gICovXHJcbiB0cntcclxuICAgIGhlaWdodDo1OHB4O1xyXG4gfVxyXG4gIFxyXG4gIHNtYWxse1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTsgXHJcbiAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLm15LWZvcm17XHJcbiAgICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAuZnVsbC13aWR0aCB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICB9IFxyXG4gIFxyXG4gIFxyXG4gICAgLmNlbnRlcntcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYWluLWRpdntcclxuICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAvKiBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7ICAqL1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmFkZC1maWxlcy1idG4ge1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIDpob3N0IHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYWN0aW9ucyB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/layout/managerDetails/manager.component.html":
/*!**************************************************************!*\
  !*** ./src/app/layout/managerDetails/manager.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;\">\r\n\r\n    <section class=\"content-header\" style=\"max-width:50%\">\r\n        <h2>\r\n            Manager\r\n            <small>All Managers</small>\r\n        </h2>\r\n    </section>\r\n\r\n    <div class=\"box\">\r\n        <div>\r\n\r\n            <table mat-table matSort [dataSource]=\"ManagerData\" style=\"width:100%\">\r\n                <ng-container matColumnDef=\"S No\">\r\n\r\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\r\n                        <h6>S No </h6>\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\r\n                        <h6>Manager Name </h6>\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let user\"> {{user.users.firstName | titlecase }} {{user.users.lastName | titlecase }}</td>\r\n                </ng-container>\r\n                <ng-container matColumnDef=\"email\">\r\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\r\n                        <h6> Email </h6>\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let user\"> {{user.users.email}} </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"associatedCampaign\">\r\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\r\n                        <h6> Associated Campaign </h6>\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let user\"> {{user.associatedCampaign}}\r\n                       </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"agents\">\r\n                    <th mat-header-cell mat-sort-header *matHeaderCellDef>\r\n                        <h6> Assigned Agent </h6>\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let user\"> 0</td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"removeAgent\">\r\n                    <th mat-header-cell *matHeaderCellDef>\r\n                        <h6> Remove Agent </h6>\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let user\" style=\"min-width: 50px;text-align: center\">\r\n                        <button mat-raised-button style=\"color:#ce2b2b;\">  Remove Agent  </button>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"assignAgent\">\r\n                    <th mat-header-cell *matHeaderCellDef>\r\n                        <h6> Assign Agent </h6>\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let user\" style=\"min-width: 50px;text-align: center\">\r\n                        <button mat-raised-button color=\"primary\" (click)=\"assignAgent(user._id)\">  Assign Agent  </button>\r\n                 \r\n                    </td>\r\n                </ng-container>\r\n  \r\n                <tr mat-header-row *matHeaderRowDef=\"manager\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: manager;\"></tr>\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n\r\n            </table>\r\n        </div>\r\n    </div>\r\n  \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/managerDetails/manager.component.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/managerDetails/manager.component.ts ***!
  \************************************************************/
/*! exports provided: ManagerComponent, AssignAgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignAgentComponent", function() { return AssignAgentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/admin.service */ "./src/app/shared/services/admin.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");








//Dialog Box

var ManagerComponent = /** @class */ (function () {
    function ManagerComponent(toastrService, formBuilder, service, dialog) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.dialog = dialog;
        this.manager = ['S No', 'name', 'email', 'associatedCampaign', 'agents', 'removeAgent', 'assignAgent'];
    }
    ManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getManagerDetails().subscribe(function (data) {
            console.log(data);
            _this.ManagerData = data['data'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.ManagerData);
            // Assign the paginator *after* dataSource is set
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
    };
    ManagerComponent.prototype.assignAgent = function (managerId) {
        var _this = this;
        this.service.getAvailabelAgent().subscribe(function (data) {
            console.log('available agent', data);
            _this.AvailableAgent = data;
        });
        this.service.getSingleManagerDetails(managerId).subscribe(function (data) {
            console.log('manager Details', data);
            _this.ManagerDetails = data;
            if (_this.ManagerDetails.success == true) {
                var running = 0;
                var queue = 0;
                var stop_1 = 0;
                var completed = 0;
                var idle = 0;
                var managerName = void 0;
                var managerEmail = void 0;
                if (_this.ManagerDetails.getManager) {
                    if (_this.ManagerDetails.getManager[0].users) {
                        managerName = _this.ManagerDetails.getManager[0].users.firstName + "  " + _this.ManagerDetails.getManager[0].users.lastName;
                        managerEmail = _this.ManagerDetails.getManager[0].users.email;
                    }
                }
                if (_this.ManagerDetails.campaignDetails.length > 0) {
                    for (var i = 0; i < _this.ManagerDetails.campaignDetails.length; i++) {
                        if (_this.ManagerDetails.campaignDetails.campingStatus != undefined) { //ManagerHistory
                            if (_this.ManagerDetails.campaignDetails.campingStatus.status == 1) {
                                running++;
                            }
                            else if (_this.ManagerDetails.campaignDetails.campingStatus.status == 2) {
                                queue++;
                            }
                            else if (_this.ManagerDetails.campaignDetails.campingStatus.status == 3) {
                                stop_1++;
                            }
                            else if (_this.ManagerDetails.campaignDetails.campingStatus.status == 4) {
                                completed++;
                            }
                        }
                        else {
                            idle++;
                        }
                    }
                    // obj
                    _this.ManagerHistory = {
                        ManagerName: managerName,
                        ManagerEmail: managerEmail,
                        Running: running,
                        Queue: queue,
                        Stop: stop_1,
                        Completed: completed,
                        Idle: idle
                    };
                }
            }
            _this.openDialog(_this.AvailableAgent, _this.ManagerHistory);
        });
    };
    ManagerComponent.prototype.openDialog = function (agent, manager) {
        var dialogRef = this.dialog.open(AssignAgentComponent, {
            width: '650px',
            data: { Agent: agent, Manager: manager }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], ManagerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"])
    ], ManagerComponent.prototype, "sort", void 0);
    ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agentToManager',
            template: __webpack_require__(/*! ./manager.component.html */ "./src/app/layout/managerDetails/manager.component.html"),
            styles: [__webpack_require__(/*! ./manager.component.css */ "./src/app/layout/managerDetails/manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], ManagerComponent);
    return ManagerComponent;
}());

// assign Agent to manager dialog Box
var AssignAgentComponent = /** @class */ (function () {
    function AssignAgentComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log('feedback details', data.name, data.number);
    }
    AssignAgentComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AssignAgentComponent.prototype.cancel = function () {
    };
    AssignAgentComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
    };
    AssignAgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'assignAgent',
            template: __webpack_require__(/*! ./assignAgent.component.html */ "./src/app/layout/managerDetails/assignAgent.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogRef"], Object])
    ], AssignAgentComponent);
    return AssignAgentComponent;
}());



/***/ }),

/***/ "./src/app/layout/managerDetails/manager.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/layout/managerDetails/manager.module.ts ***!
  \*********************************************************/
/*! exports provided: ManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerModule", function() { return ManagerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _manager_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager-routing.module */ "./src/app/layout/managerDetails/manager-routing.module.ts");
/* harmony import */ var _manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manager.component */ "./src/app/layout/managerDetails/manager.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var ManagerModule = /** @class */ (function () {
    function ManagerModule() {
    }
    ManagerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _manager_routing_module__WEBPACK_IMPORTED_MODULE_3__["ManagerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            entryComponents: [
                _manager_component__WEBPACK_IMPORTED_MODULE_4__["AssignAgentComponent"]
            ],
            declarations: [_manager_component__WEBPACK_IMPORTED_MODULE_4__["ManagerComponent"], _manager_component__WEBPACK_IMPORTED_MODULE_4__["AssignAgentComponent"]]
        })
    ], ManagerModule);
    return ManagerModule;
}());



/***/ })

}]);
//# sourceMappingURL=managerDetails-manager-module.js.map