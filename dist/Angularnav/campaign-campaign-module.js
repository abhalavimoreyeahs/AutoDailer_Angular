(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaign-campaign-module"],{

/***/ "./src/app/layout/campaign/campaign-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/campaign/campaign-routing.module.ts ***!
  \************************************************************/
/*! exports provided: CampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignRoutingModule", function() { return CampaignRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _campaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaign.component */ "./src/app/layout/campaign/campaign.component.ts");




var routes = [
    {
        path: '',
        component: _campaign_component__WEBPACK_IMPORTED_MODULE_3__["CampaignComponent"]
    }
];
var CampaignRoutingModule = /** @class */ (function () {
    function CampaignRoutingModule() {
    }
    CampaignRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CampaignRoutingModule);
    return CampaignRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/campaign/campaign.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/campaign/campaign.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-header{\r\n  position: relative;\r\n    padding: 15px 15px 0 15px;\r\n    background-color:transparent;\r\n    font:normal\r\n}\r\n\r\n.box{\r\n  position: relative;\r\n    border-radius: 3px;\r\n    background: #ffffff;\r\n    border-top: 3px solid #d2d6de;\r\n    margin-bottom: 20px;\r\n    /* width: 100%; */\r\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\r\n    margin: 1% 1% 1% 1%;\r\n    /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\r\n}\r\n\r\n.box-header{\r\n  color: #444;\r\n    display: block;\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n\r\nh2{\r\n  margin: 0;\r\n  font-size: 28px;\r\n  font:normal;\r\n  font-weight:normal;\r\n\r\n}\r\n\r\nh3{\r\n  display: inline-block;\r\n  font-size: 18px;\r\n  margin: 0;\r\n  line-height: 1;\r\n  font:normal;\r\n  font-weight:normal;\r\n}\r\n\r\n.pointer {cursor: pointer;}\r\n\r\nh6{\r\n  color:black;\r\n}\r\n\r\n/*For table*/\r\n\r\n/* td{\r\n padding:16px;\r\n}  */\r\n\r\n/*--------View Customer Details---------*/\r\n\r\n.dropbtn {\r\n  background-color:white;\r\n  color: white;\r\n  /* padding: 16px; */\r\n  font-size: 16px;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\n.dropdown-content {\r\n  display: none;\r\n  position: absolute;\r\n  right: 0;\r\n  background-color: #f9f9f9;\r\n  min-width: 160px;\r\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n  z-index: 1;\r\n}\r\n\r\n.dropdown-content a {\r\n  color: black;\r\n  padding: 12px 16px;\r\n  text-decoration: none;\r\n  display: block;\r\n}\r\n\r\n.dropdown-content a:hover {background-color: #f1f1f1;}\r\n\r\n.dropdown:hover .dropdown-content {display: block;}\r\n\r\n.dropdown:hover .dropbtn {color: #f3c99f;}\r\n\r\n/*-------------------------------------*/\r\n\r\nsmall{\r\n  font-size: 15px;\r\n    display: inline-block;\r\n    padding-left: 4px;\r\n    font-weight: 300;\r\n    line-height: 1; \r\n    color: #777;\r\n    font-family: sans-serif;\r\n}\r\n\r\n.my-form{\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 80%;\r\n  }\r\n\r\n.full-width {\r\n    width: 60%;\r\n  }\r\n\r\n.center{\r\n    width: 75%;\r\n    margin: 10px auto;\r\n  }\r\n\r\n.main-div{\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\ntable {\r\n    width: 100%;\r\n    /* margin: 20px 20px 20px 20px;  */\r\n  }\r\n\r\n.add-files-btn {\r\n    float: right;\r\n  }\r\n\r\n:host {\r\n    height: 100%;\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n  }\r\n\r\n.actions {\r\n    justify-content: flex-end;\r\n  }\r\n\r\n.container {\r\n    height: 100%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NhbXBhaWduL2NhbXBhaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7SUFDaEIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QjtBQUNKOztBQUVBO0VBQ0Usa0JBQWtCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixnR0FBZ0c7QUFDcEc7O0FBRUE7RUFDRSxXQUFXO0lBQ1QsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixTQUFTO0VBQ1QsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBQ0EsVUFBVSxlQUFlLENBQUM7O0FBRTFCO0VBQ0UsV0FBVztBQUNiOztBQUVBLFlBQVk7O0FBQ1o7O0lBRUk7O0FBQ0oseUNBQXlDOztBQUN6QztFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLDJCQUEyQix5QkFBeUIsQ0FBQzs7QUFDckQsbUNBQW1DLGNBQWMsQ0FBQzs7QUFDbEQsMEJBQTBCLGNBQWMsQ0FBQzs7QUFDekMsd0NBQXdDOztBQUV4QztFQUNFLGVBQWU7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUdBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxrQ0FBa0M7RUFDcEM7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY2FtcGFpZ24vY2FtcGFpZ24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWhlYWRlcntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxuICAgIGZvbnQ6bm9ybWFsXHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZDJkNmRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIG1hcmdpbjogMSUgMSUgMSUgMSU7XHJcbiAgICAvKiBib3gtc2hhZG93OiAxcHggMnB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7ICovXHJcbn1cclxuXHJcbi5ib3gtaGVhZGVye1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5oMntcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQ6bm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuXHJcbn1cclxuXHJcbmgze1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZvbnQ6bm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxufVxyXG4ucG9pbnRlciB7Y3Vyc29yOiBwb2ludGVyO31cclxuXHJcbmg2e1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4vKkZvciB0YWJsZSovXHJcbi8qIHRke1xyXG4gcGFkZGluZzoxNnB4O1xyXG59ICAqL1xyXG4vKi0tLS0tLS0tVmlldyBDdXN0b21lciBEZXRhaWxzLS0tLS0tLS0tKi9cclxuLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIC8qIHBhZGRpbmc6IDE2cHg7ICovXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTt9XHJcbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7ZGlzcGxheTogYmxvY2s7fVxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2NvbG9yOiAjZjNjOTlmO31cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuXHJcbnNtYWxse1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOyBcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5teS1mb3Jte1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAgXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9IFxyXG5cclxuXHJcbiAgLmNlbnRlcntcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm1haW4tZGl2e1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIG1hcmdpbjogMjBweCAyMHB4IDIwcHggMjBweDsgICovXHJcbiAgfVxyXG5cclxuICAuYWRkLWZpbGVzLWJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/campaign/campaign.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/campaign/campaign.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;\" >\r\n<div style=\"margin-right: 1%;\">\r\n\r\n  <button mat-button (click)=\"addCampaign()\"\r\n    style=\"float: right;background-color:rgb(146, 84, 226); max-width: 200px; max-height: 100px; margin-top:1%; color:white\">\r\n    <mat-icon>add</mat-icon> Add Campaign\r\n  </button>\r\n\r\n  <button mat-button (click)=\"stopAllCampaign()\"\r\n  style=\"float: right;background-color:#ce2b2b; max-width: 200px; max-height: 100px; margin-top:1%;  margin-right: 1%; color:white\">\r\n  <mat-icon>stop</mat-icon> Stop All Campaign\r\n </button>\r\n\r\n</div>\r\n\r\n<div class=\"container\" *ngIf=\"addCampaignBoolean\">\r\n\r\n  <mat-toolbar>\r\n    <div class=\"container-fluid\">\r\n      <span>Campaigns Details</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-card class=\"my-card\">\r\n   \r\n\r\n    <mat-card-content class=\"z-depth center\" flex=\"50\">\r\n      <form>\r\n\r\n        <mat-form-field>\r\n          <mat-label>Campaigns Name</mat-label>\r\n          <input matInput placeholder=\"Campaigns Name\" style=\"max-width: 100px\" [(ngModel)]=\"campingname\"\r\n            name=\"campingname\" [value]=\"\" required>\r\n\r\n\r\n        </mat-form-field>\r\n\r\n        <mat-form-field style=\"margin-left:20%\">\r\n          <mat-label>Start Date</mat-label>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"startdate\" name=\"startdate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field><br>\r\n\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Assign To Manager\" name=\"assignedto\" [(ngModel)]=\"assignedto\">\r\n            <mat-option *ngFor=\"let role of ManagerData\" [value]=\"role.id\">{{ role.email }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      \r\n\r\n        <mat-form-field style=\"margin-left:20%\">\r\n          <mat-label>Select Campaign Members</mat-label>\r\n          <!-- <mat-select multiple name=\"campingmembers\" [(ngModel)]=\"campingmembers\">\r\n            <mat-option *ngFor=\"let customer of CustomerData\" [value]=\"customer.Mobile\">{{customer.Name}}</mat-option> -->\r\n            <mat-select multiple name=\"customerIds\" [(ngModel)]=\"customerIds\">\r\n                <mat-option *ngFor=\"let customer of CustomerData\" [value]=\"customer._id\">{{customer.Name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field><br>\r\n\r\n<div class=\"container\" style=\"margin-top:3%\">\r\n    <div class=\"row\">\r\n \r\n  <div id=\"upload_button\">\r\n      <label>\r\n        <input type=\"file\"  (change)=\"incomingfile($event)\" multiple>\r\n        <!-- <span class=\"btn btn-primary\" style=\"background-color: white;color:black;   width: 100px;\">Select file</span> -->\r\n      </label>\r\n      <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-top:-3%; background-color: white;color:black\" (click)=\"Upload()\">Upload</button>\r\n    </div>\r\n   \r\n  </div>\r\n  <span style=\"margin-left:-13px\"> {{selectedFile}}</span>\r\n</div>\r\n\r\n\r\n\r\n        <mat-card-content style=\"padding:1%\">\r\n          <form class=\"my-form\">\r\n       \r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions style=\" margin:auto;display:block;padding-left: 14%;\">\r\n          <button mat-raised-button (click)=\"SaveAndEdit()\" color=\"primary\"\r\n            style=\"padding:0px 35px 0px 35px\">{{Display}}</button>\r\n          <button mat-raised-button (click)=\"Cancel()\" color=\"bg-danger\"\r\n            style=\"margin-left:12%; padding:0px 35px 0px 35px; background-color:brown\">Cancel</button>\r\n        </mat-card-actions>\r\n\r\n      </form>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions>\r\n    \r\n    </mat-card-actions>\r\n  </mat-card>\r\n\r\n</div>\r\n<!------------------------------------------------------------------------------->\r\n\r\n<section class=\"content-header\" style=\"max-width:50%\" *ngIf=\"!addCampaignBoolean\">\r\n    <h2>\r\n      Campaign Details \r\n      <small>All Campaign</small>\r\n    </h2>\r\n  </section>\r\n\r\n  <div class=\"box\" *ngIf=\"!addCampaignBoolean\">\r\n<div >\r\n  \r\n  <table mat-table matSort [dataSource]=\"CampaignData\" >\r\n    <ng-container matColumnDef=\"S No\">\r\n\r\n      <th mat-header-cell mat-sort-header *matHeaderCellDef><h6>S No </h6></th>\r\n      <td mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"campigname\">\r\n      <th mat-header-cell mat-sort-header *matHeaderCellDef><h6>Campaign Name </h6></th>\r\n      <td mat-cell *matCellDef=\"let user\"> {{user.campingname | titlecase }} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"createdAt\">\r\n        <th mat-header-cell mat-sort-header *matHeaderCellDef><h6> Created At </h6></th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.createdAt | date: 'dd/MMM/yyyy h:mm:ss a'}} </td>\r\n      </ng-container>\r\n   \r\n    <ng-container matColumnDef=\"getCreatedByname\">\r\n      <th mat-header-cell mat-sort-header *matHeaderCellDef><h6> Created By </h6> </th>\r\n      <td mat-cell *matCellDef=\"let user\"> {{user.createdby.users.firstName}} {{user.createdby.users.lastName}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"assignedtoByname\">\r\n      <th mat-header-cell mat-sort-header *matHeaderCellDef><h6> Assigned To</h6></th>\r\n      <td mat-cell *matCellDef=\"let user\"> {{user.assignedto.users.firstName}} {{user.assignedto.users.lastName}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"startdate\">\r\n        <th mat-header-cell  mat-sort-header *matHeaderCellDef><h6> Start Date </h6></th>\r\n        <td mat-cell *matCellDef=\"let user\"> {{user.startdate | date: 'dd/MMM/yyyy h:mm:ss a'}} </td>\r\n      </ng-container>\r\n\r\n    <ng-container matColumnDef=\"campingmembers\">\r\n      <th mat-header-cell mat-sort-header *matHeaderCellDef> <h6>Campaign Members </h6></th>\r\n      <td mat-cell *matCellDef=\"let user\" style=\"padding:16px\">\r\n          <div class=\"dropdown\" style=\"float:left;\">\r\n          <mat-icon class=\"dropbtn\" style=\"color:#EE7600;font-size:30px\">view_headline</mat-icon>\r\n          <div class=\"dropdown-content\" style=\"left:0; margin-left: 30px; margin-top: -30px; padding: 10px; max-height:300px\">\r\n              <tr *ngFor=\"let mem of user.customerId;\">\r\n                  <td>{{mem.Name | titlecase}}  </td> <!--{{mem.Mobile}}-->\r\n                </tr>\r\n            </div>\r\n            </div>\r\n      </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"status\">\r\n      <th mat-header-cell *matHeaderCellDef><h6> Status  </h6></th>\r\n      <td mat-cell *matCellDef=\"let user\">\r\n          <span style=\"color:rgb(30, 36, 30); font-size: 16px\" *ngIf=\"user.campingStatus == undefined || user.campingStatus == null || !user.campingStatus\">Idle</span>\r\n       <span style=\"color:#4CAF50; font-size: 16px\" *ngIf=\"user.campingStatus && user.campingStatus.queueStatus == 0 && user.campingStatus.status == 1\">Running</span>\r\n       <span style=\"color:rgb(228, 128, 15); font-size: 16px\" *ngIf=\"user.campingStatus && user.campingStatus.queueStatus == 0 && user.campingStatus.status == 4\">Stopped</span>\r\n       <span style=\"color:rgb(194, 63, 11); font-size: 16px\"  *ngIf=\"user.campingStatus && user.campingStatus.status == 2\">Queue( {{ user.campingStatus.queueStatus}})</span>\r\n       <span style=\"color:rgb(13, 14, 13); font-size: 16px\" *ngIf=\"user.campingStatus && user.campingStatus.queueStatus == 0 && user.campingStatus.status == 3\">Completed</span>\r\n      </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"action\">\r\n      <th mat-header-cell *matHeaderCellDef><h6> Action  </h6></th>\r\n      <td mat-cell *matCellDef=\"let user\">\r\n        <span *ngIf=\"user.campingStatus == undefined || user.campingStatus == null || !user.campingStatus\">\r\n            <button mat-raised-button style=\"color:white; background-color:#4CAF50; padding:0\" *ngIf=\"user.campingStatus == undefined\" (click)=\"RunCampaign(user._id, undefined)\"> RUN </button>\r\n        </span>\r\n        <span *ngIf=\"user.campingStatus != undefined\">\r\n            <button mat-raised-button style=\"color:white; background-color:rgb(255,165,0); padding:0\" *ngIf=\"user.campingStatus.status == 4\" (click)=\"RunCampaign(user._id, user.campingStatus.status)\"> RESUME </button>\r\n            <button mat-raised-button style=\"color:white; background-color:#4CAF50; padding:0\" *ngIf=\"user.campingStatus.status == 3\" (click)=\"RunCampaign(user._id, user.campingStatus.status)\"> RUN </button>\r\n         <!-- <button mat-raised-button style=\"color:white; background-color:#4CAF50\" *ngIf=\"user.campingStatus == undefined || user.campingStatus == null || !user.campingStatus || user.campingStatus.status == 3 || user.campingStatus.status == 4\" (click)=\"RunCampaign(user._id)\"> RUN </button> -->\r\n         <button mat-raised-button style=\"color:white; background-color:#ce2b2b\" *ngIf=\"user.campingStatus && user.campingStatus.status == 2 || user.campingStatus.status == 1\" (click)=\"StopCampaign(user._id, user.campingStatus.status)\"> STOP </button>\r\n        </span>\r\n         </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"edit\">\r\n      <th mat-header-cell *matHeaderCellDef><h6> Edit  </h6></th>\r\n      <td mat-cell *matCellDef=\"let user\" style=\"min-width: 50px;text-align: center\">\r\n        <!-- <button mat-raised-button color=\"primary\" (click)=\"editCampaign(user._id)\"> \r\n          Edit\r\n         \r\n        </button> -->\r\n     <a class=\"pointer\"> <mat-icon color=\"primary\" (click)=\"editCampaign(user._id)\">edit</mat-icon></a>\r\n      \r\n      </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"delete\">\r\n      <th mat-header-cell *matHeaderCellDef><h6>Delete  </h6></th>\r\n      <td mat-cell *matCellDef=\"let user\" style=\"min-width: 50px;text-align: center\">\r\n        <!-- <button mat-raised-button style=\"color:white;background-color: #ce2b2b\" (click)=\"deleteCampaign(user.campingname)\"> \r\n          Delete\r\n       \r\n        </button> -->\r\n     <a class=\"pointer\">  <mat-icon style=\"color:#ce2b2b;\" (click)=\"deleteCampaign(user._id)\">delete_forever</mat-icon></a>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"tryData\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: tryData;\"></tr>\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n\r\n\r\n  </table>\r\n</div>\r\n</div>\r\n<!---------------------------------------------------------------------------------------->\r\n\r\n</div>\r\n\r\n\r\n<!-------------------------------------Mat Table ------------------------------------->\r\n<!-- <mat-form-field>\r\n  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n<div  class=\"box\">\r\n<mat-table [dataSource]=\"CampaignData\" matSort >\r\n\r\n<ng-container matColumnDef=\"select\" style=\"max-width: 50px\">\r\n<mat-header-cell *matHeaderCellDef>\r\n<mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n      [checked]=\"selection.hasValue() && isAllSelected()\"\r\n      [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\r\n      [aria-label]=\"checkboxLabel()\">\r\n</mat-checkbox>\r\n</mat-header-cell>\r\n<mat-cell *matCellDef=\"let row\">\r\n<mat-checkbox (click)=\"$event.stopPropagation()\"\r\n      (change)=\"$event ? selection.toggle(row) : null\"\r\n      [checked]=\"selection.isSelected(row)\"\r\n      [aria-label]=\"checkboxLabel(row)\">\r\n</mat-checkbox>\r\n</mat-cell>\r\n</ng-container>\r\n\r\n<ng-container matColumnDef=\"S No\">\r\n <mat-header-cell *matHeaderCellDef > S No </mat-header-cell>\r\n <mat-cell *matCellDef=\"let user; let i = index;\">\r\n  {{i+1}}\r\n </mat-cell>\r\n</ng-container>\r\n\r\n<ng-container matColumnDef=\"campigname\">\r\n  <mat-header-cell mat-sort-header *matHeaderCellDef>Campaign Name</mat-header-cell>\r\n  <mat-cell *matCellDef=\"let user\"> {{user.campingname | titlecase }} </mat-cell>\r\n</ng-container>\r\n\r\n\r\n<ng-container matColumnDef=\"startdate\">\r\n    <mat-header-cell  mat-sort-header *matHeaderCellDef><h6> Start Date </h6></mat-header-cell>\r\n    <mat-cell *matCellDef=\"let user\"> {{user.startdate | date: 'dd/MMM/yyyy h:mm:ss a'}} </mat-cell>\r\n  </ng-container>\r\n\r\n\r\n  <ng-container matColumnDef=\"getCreatedByname\">\r\n      <mat-header-cell mat-sort-header *matHeaderCellDef><h6> Created By </h6> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\"> {{user.getCreatedByname}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"assignedtoByname\">\r\n      <mat-header-cell mat-sort-header *matHeaderCellDef><h6> Assigned To</h6></mat-header-cell>\r\n      <mat-cell *matCellDef=\"let user\"> {{user.assignedtoByname}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"createdAt\">\r\n        <mat-header-cell mat-sort-header *matHeaderCellDef><h6> Created At </h6></mat-header-cell>\r\n        <mat-cell *matCellDef=\"let user\"> {{user.createdAt | date: 'dd/MMM/yyyy h:mm:ss a'}} </mat-cell>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"campingmembers\">\r\n          <mat-header-cell mat-sort-header *matHeaderCellDef> <h6>Campaign Members </h6></mat-header-cell>\r\n          <mat-cell *matCellDef=\"let user\">\r\n           \r\n            <mat-row *ngFor=\"let mem of user.campingmembers;\">\r\n              <mat-cell>{{mem}} </mat-cell>\r\n            </mat-row>\r\n          </mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"edit\">\r\n            <mat-header-cell *matHeaderCellDef><h6> Edit  </h6></mat-header-cell>\r\n            <mat-cell *matCellDef=\"let user\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"editCampaign(user._id)\"> Edit\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n          <ng-container matColumnDef=\"delete\">\r\n            <mat-header-cell *matHeaderCellDef><h6>Delete  </h6></mat-header-cell>\r\n            <mat-cell *matCellDef=\"let user\">\r\n              <button mat-raised-button color=\"red\" (click)=\"deleteCampaign(user.campingname)\"> Delete\r\n              </button>\r\n            </mat-cell>\r\n          </ng-container>\r\n\r\n <mat-header-row *matHeaderRowDef=\"tryData1\">\r\n </mat-header-row>\r\n <mat-row *matRowDef=\"let row; columns: tryData1\" ></mat-row>\r\n</mat-table>\r\n<mat-paginator    [length]=\"100\"  [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/layout/campaign/campaign.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/campaign/campaign.component.ts ***!
  \*******************************************************/
/*! exports provided: CampaignComponent, CampingDialogBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignComponent", function() { return CampaignComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampingDialogBox", function() { return CampingDialogBox; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var ts_xlsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ts-xlsx */ "./node_modules/ts-xlsx/lib/main.browser.js");
/* harmony import */ var ts_xlsx__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ts_xlsx__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FarmService } from '../../farm.service';








// hit all campaign 

var observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["interval"])(100000);
//Dialog Box

var CampaignComponent = /** @class */ (function () {
    function CampaignComponent(toastrService, formBuilder, service, router, dialog) {
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.dialog = dialog;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_8__["SelectionModel"](true, []);
        this.Campaigns = {};
        this.Display = 'Save';
        this.spans = [];
        this.f_firstPanel = false;
        this.f_secondPanel = true;
        this.selectedFile = '';
        this.addCampaignBoolean = false;
        this.Manager = [
            { id: 12, name: 'Manager 1' },
            { id: 112, name: 'Manager 2' },
            { id: 19, name: 'Manager 3' },
            { id: 151, name: 'Manager 4' },
        ];
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.toppingList = ['Customer 1', 'Customer 2', 'Customer 3', 'Customer 4'];
        this.dummyData = this.service.getDummyData();
        this.displayDummyData = ['Name', 'Age', 'DOB', 'Mobile', 'Domicile', 'City'];
        this.try = this.service.getDummyCampaign();
        this.tryData = ['S No', 'campigname', 'createdAt', 'getCreatedByname', 'assignedtoByname', 'startdate', 'campingmembers', 'status', 'action', 'edit', 'delete'];
        this.tryData1 = ['select', 'S No', 'campigname', 'startdate', 'getCreatedByname', 'assignedtoByname', 'createdAt', 'campingmembers', 'edit', 'delete'];
        this.hitAPI();
    }
    CampaignComponent.prototype.getRowSpan = function (col, index) {
        return this.spans[index] && this.spans[index][col];
    };
    CampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.f_firstPanel = true;
        this.service.getAllCampaign().subscribe(function (data) {
            console.log(data);
            _this.CampaignData = data['message'];
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.CampaignData);
            // Assign the paginator *after* dataSource is set
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        });
        this.service.getAllCustomer().subscribe(function (data) {
            _this.CustomerData = data['message'];
        });
        this.service.getAllManagers().subscribe(function (data) {
            _this.ManagerData = data['message'];
            console.log(data['message']);
        });
    };
    CampaignComponent.prototype.hitAPI = function () {
        var _this = this;
        var subscription = observable.subscribe(function (x) {
            console.log('x:', x);
            _this.service.getAllCampaign().subscribe(function (data) {
                console.log(data);
                _this.CampaignData = data['message'];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](_this.CampaignData);
                // Assign the paginator *after* dataSource is set
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
    };
    CampaignComponent.prototype.addCampaign = function () {
        this.addCampaignBoolean = !this.addCampaignBoolean;
    };
    CampaignComponent.prototype.editCampaign = function (id) {
        this.service.setEditId(id);
        this.router.navigate(['/admin/editCampaign']);
    };
    CampaignComponent.prototype.deleteCampaign = function (campingId) {
        this.DeleteCampaign = campingId;
        this.openDialog();
        // this.dataToDelete= { campingname:campingName }  
        // this.service.deleteCampaign(this.dataToDelete).subscribe((data)=>{             
        //     this.ngOnInit();
        // })
    };
    CampaignComponent.prototype.Cancel = function () {
        this.Campaigns = {};
        this.startdate = '';
        this.campingname = '';
        this.assignedto = '';
        this.campingmembers = '';
        this.addCampaignBoolean = false;
    };
    CampaignComponent.prototype.incomingfile = function (event) {
        this.file = event.target.files[0];
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            this.selectedFile = this.uploadForm.get('profile').value.name;
            console.log(this.uploadForm.get('profile').value);
        }
    };
    CampaignComponent.prototype.Upload = function () {
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
            var workbook = ts_xlsx__WEBPACK_IMPORTED_MODULE_10__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(ts_xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].sheet_to_json(worksheet, { raw: true }));
            _this.ExcelArray = ts_xlsx__WEBPACK_IMPORTED_MODULE_10__["utils"].sheet_to_json(worksheet, { raw: true });
            // this.SaveAndEdit(this.ExcelArray);
        };
        fileReader.readAsArrayBuffer(this.file);
    };
    CampaignComponent.prototype.SaveAndEdit = function (data) {
        var _this = this;
        debugger;
        this.addCampaignBoolean = !this.addCampaignBoolean; //hiding campaign reg box
        this.Campaigns = {}; //clearing data
        if (data == null || data == undefined || !data) {
            this.startdate;
            console.log(new Date(this.startdate).getTime());
            if (this.ExcelArray != null && this.ExcelArray != undefined) {
                this.Campaigns = {
                    startdate: new Date(this.startdate).getTime(),
                    campingname: this.campingname,
                    assignedto: this.assignedto,
                    campingmembers: this.campingmembers,
                    CustomerData: this.ExcelArray,
                    excelupload: true
                };
            }
            else {
                this.Campaigns = {
                    startdate: new Date(this.startdate).getTime(),
                    campingname: this.campingname,
                    customerIds: this.customerIds,
                    assignedto: this.assignedto,
                    campingmembers: this.campingmembers,
                    CustomerData: this.ExcelArray,
                    excelupload: false
                };
            }
            this.service.createCampaign(this.Campaigns).subscribe(function (data) {
                console.log(data);
                if (data.sucess == true) {
                    _this.showToaster();
                    _this.ngOnInit();
                }
                else {
                    _this.ErrorSuccess();
                }
            });
        }
        else if (data) {
            debugger;
            this.Campaigns = {
                startdate: new Date(this.startdate).getTime(),
                campingname: this.campingname,
                assignedto: this.assignedto,
                campingmembers: this.campingmembers,
                campingid: this.campingid,
                excelupload: false
            };
            this.service.editCampaign(this.Campaigns).subscribe(function (data) {
                alert('Edit successfully');
                console.log(data);
                _this.ngOnInit();
            });
        }
    };
    // dataSource = this.service.getAllCustomer();
    CampaignComponent.prototype.applyFilter = function (filterValue) {
        alert('working');
        this.dataSource.data.filter = filterValue.trim().toLowerCase();
    };
    /** Whether the number of selected elements matches the total number of rows. */
    CampaignComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    CampaignComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    CampaignComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
    };
    //notification
    CampaignComponent.prototype.showToaster = function () {
        this.toastrService.success('Campaign Saved Successful');
    };
    CampaignComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed: Unable to Save Campaign');
    };
    CampaignComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    CampaignComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('this is warning');
    };
    CampaignComponent.prototype.showSuccessfullyDeletedCampaign = function () {
        this.toastrService.success('Campaign Deleted Successfully');
    };
    //Dialog function
    CampaignComponent.prototype.openDialog = function () {
        var _this = this;
        console.log();
        var dialogRef = this.dialog.open(CampingDialogBox, {
            width: '450px',
            //data: { data: 'ok'},
            data: { message: 'Do you really want to delete this records? This process cannot be undone.', button: "Delete" }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result) {
                _this.dataToDelete = { campingId: _this.DeleteCampaign };
                _this.service.deleteCampaign(_this.dataToDelete).subscribe(function (data) {
                    debugger;
                    console.log(data);
                    _this.showSuccessfullyDeletedCampaign();
                    _this.ngOnInit();
                });
            }
        });
    };
    // Run A Campaign
    CampaignComponent.prototype.RunCampaign = function (campaignId, campaignStatus) {
        var _this = this;
        var camping = { campingId: campaignId, status: campaignStatus };
        this.service.run_Campaign(camping).subscribe(function (data) {
            console.log(data);
            _this.toastrService.success('Campaign Running Successfully');
            _this.ngOnInit();
        });
    };
    // Stop A Campaign
    CampaignComponent.prototype.StopCampaign = function (campaignId, campaignStatus) {
        var _this = this;
        var camping = { campingId: campaignId, status: campaignStatus };
        this.service.stop_Campaign(camping).subscribe(function (data) {
            console.log(data);
            _this.toastrService.success('Campaign Stopped Successfully');
            _this.ngOnInit();
        });
    };
    //Stop All campaign
    CampaignComponent.prototype.stopAllCampaign = function () {
        this.DialogToStopAllCampaign();
        // let camping={campingId:'allCamping'};
        // this.service.stop_All_Campaign(camping).subscribe((data)=>{
        //   console.log(data)
        // })
    };
    //Dialog function
    CampaignComponent.prototype.DialogToStopAllCampaign = function () {
        var _this = this;
        console.log();
        var dialogRef = this.dialog.open(CampingDialogBox, {
            width: '450px',
            //data: { data: 'ok'},
            data: { alert: 'Warning !!', message: 'Do you really want to stop all Running Campaign and Campaign in Queue? This process cannot be undone.', button: 'STOP' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
            if (result) {
                var camping = { campingId: 'allCamping' };
                _this.service.stop_All_Campaign(camping).subscribe(function (data) {
                    console.log(data);
                    _this.toastrService.success('All Campaign stopped successfully');
                    _this.ngOnInit();
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], CampaignComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"])
    ], CampaignComponent.prototype, "sort", void 0);
    CampaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-campaign',
            template: __webpack_require__(/*! ./campaign.component.html */ "./src/app/layout/campaign/campaign.component.html"),
            styles: [__webpack_require__(/*! ./campaign.component.css */ "./src/app/layout/campaign/campaign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]])
    ], CampaignComponent);
    return CampaignComponent;
}());

//Draggable Dialog code
var CampingDialogBox = /** @class */ (function () {
    function CampingDialogBox(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CampingDialogBox.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CampingDialogBox = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'deleteCampaignDialogBox',
            template: __webpack_require__(/*! ./deleteCampaignDialogBox.html */ "./src/app/layout/campaign/deleteCampaignDialogBox.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogRef"], Object])
    ], CampingDialogBox);
    return CampingDialogBox;
}());



/***/ }),

/***/ "./src/app/layout/campaign/campaign.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/campaign/campaign.module.ts ***!
  \****************************************************/
/*! exports provided: CampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignModule", function() { return CampaignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaign-routing.module */ "./src/app/layout/campaign/campaign-routing.module.ts");
/* harmony import */ var _campaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campaign.component */ "./src/app/layout/campaign/campaign.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var CampaignModule = /** @class */ (function () {
    function CampaignModule() {
    }
    CampaignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _campaign_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            entryComponents: [_campaign_component__WEBPACK_IMPORTED_MODULE_4__["CampaignComponent"], _campaign_component__WEBPACK_IMPORTED_MODULE_4__["CampingDialogBox"]],
            declarations: [_campaign_component__WEBPACK_IMPORTED_MODULE_4__["CampaignComponent"], _campaign_component__WEBPACK_IMPORTED_MODULE_4__["CampingDialogBox"]]
        })
    ], CampaignModule);
    return CampaignModule;
}());



/***/ }),

/***/ "./src/app/layout/campaign/deleteCampaignDialogBox.html":
/*!**************************************************************!*\
  !*** ./src/app/layout/campaign/deleteCampaignDialogBox.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"text-align:center;display: flex;justify-content: center;\">\r\n    <img src=\"../../../assets/DeleteIcon.png\" style=\"width:100px; height:100px\">\r\n</div> -->\r\n<a href=\"javascript:void(0)\"><mat-icon style=\"float:right;margin-top:-3%;margin-right:-3%;color:lightgray\" (click)=\"onNoClick()\" >clear</mat-icon></a>\r\n<h1 mat-dialog-title style=\"text-align: center; margin-top:3%;font-weight: normal;\">Are you sure?</h1>\r\n\r\n<mat-dialog-content style=\"text-align: center\">\r\n        <h6 style=\"color:grey;margin:4%; font-weight: normal;\">{{data.message}}</h6>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;margin:5%\">\r\n\r\n    <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:130px;color:white ;background-color:#a8a8a8\">Cancel</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:130px; background-color:rgb(221, 107, 85)\">{{data.button}}</button>\r\n</mat-dialog-actions>\r\n"

/***/ })

}]);
//# sourceMappingURL=campaign-campaign-module.js.map