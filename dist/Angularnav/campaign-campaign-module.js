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

module.exports = ".content-header{\n  position: relative;\n    padding: 15px 15px 0 15px;\n    background-color:transparent;\n    font:normal\n}\n\n.box{\n  position: relative;\n    border-radius: 3px;\n    background: #ffffff;\n    border-top: 3px solid #d2d6de;\n    margin-bottom: 20px;\n    /* width: 100%; */\n    box-shadow: 0 1px 1px rgba(0,0,0,0.1);\n    margin: 1% 1% 1% 1%;\n    /* box-shadow: 1px 2px 4px 1px rgba(0, 0, 0, 0.2),0 2px 10px 0 rgba(0, 0, 0, 0.12) !important; */\n}\n\n.box-header{\n  color: #444;\n    display: block;\n    padding: 10px;\n    position: relative;\n}\n\nh2{\n  margin: 0;\n  font-size: 28px;\n  font:normal;\n  font-weight:normal;\n\n}\n\nh3{\n  display: inline-block;\n  font-size: 18px;\n  margin: 0;\n  line-height: 1;\n  font:normal;\n  font-weight:normal;\n}\n\n.pointer {cursor: pointer;}\n\nh6{\n  color:black;\n}\n\n/*For table*/\n\n/* td{\n padding:16px;\n}  */\n\n/*--------View Customer Details---------*/\n\n.dropbtn {\n  background-color:white;\n  color: white;\n  /* padding: 16px; */\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  right: 0;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown-content a:hover {background-color: #f1f1f1;}\n\n.dropdown:hover .dropdown-content {display: block;}\n\n.dropdown:hover .dropbtn {color: #f3c99f;}\n\n/*-------------------------------------*/\n\nsmall{\n  font-size: 15px;\n    display: inline-block;\n    padding-left: 4px;\n    font-weight: 300;\n    line-height: 1; \n    color: #777;\n    font-family: sans-serif;\n}\n\n.my-form{\n    min-width: 150px;\n    max-width: 500px;\n    width: 80%;\n  }\n\n.full-width {\n    width: 60%;\n  }\n\n.center{\n    width: 75%;\n    margin: 10px auto;\n  }\n\n.main-div{\n    height: 100vh;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n  }\n\ntable {\n    width: 100%;\n    /* margin: 20px 20px 20px 20px;  */\n  }\n\n.add-files-btn {\n    float: right;\n  }\n\n:host {\n    height: 100%;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-flex: 1;\n            flex: 1;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n\n.actions {\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n  }\n\n.container {\n    height: 100%;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NhbXBhaWduL2NhbXBhaWduLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7SUFDaEIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QjtBQUNKOztBQUVBO0VBQ0Usa0JBQWtCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixnR0FBZ0c7QUFDcEc7O0FBRUE7RUFDRSxXQUFXO0lBQ1QsY0FBYztJQUNkLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixTQUFTO0VBQ1QsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBQ0EsVUFBVSxlQUFlLENBQUM7O0FBRTFCO0VBQ0UsV0FBVztBQUNiOztBQUVBLFlBQVk7O0FBQ1o7O0lBRUk7O0FBRUoseUNBQXlDOztBQUN6QztFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1QyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBLDJCQUEyQix5QkFBeUIsQ0FBQzs7QUFDckQsbUNBQW1DLGNBQWMsQ0FBQzs7QUFDbEQsMEJBQTBCLGNBQWMsQ0FBQzs7QUFDekMsd0NBQXdDOztBQUV4QztFQUNFLGVBQWU7SUFDYixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztBQUVBO0lBQ0UsVUFBVTtFQUNaOztBQUdBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGFBQWE7SUFDYixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsa0NBQWtDO0VBQ3BDOztBQUVBO0lBQ0UsWUFBWTtFQUNkOztBQUVBO0lBQ0UsWUFBWTtJQUNaLG9CQUFhO0lBQWIsYUFBYTtJQUNiLG1CQUFPO1lBQVAsT0FBTztJQUNQLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0VBQ3hCOztBQUVBO0lBQ0UscUJBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jYW1wYWlnbi9jYW1wYWlnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtaGVhZGVye1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDAgMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIGZvbnQ6bm9ybWFsXG59XG5cbi5ib3h7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICBib3JkZXItdG9wOiAzcHggc29saWQgI2QyZDZkZTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgbWFyZ2luOiAxJSAxJSAxJSAxJTtcbiAgICAvKiBib3gtc2hhZG93OiAxcHggMnB4IDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjIpLDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7ICovXG59XG5cbi5ib3gtaGVhZGVye1xuICBjb2xvcjogIzQ0NDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaDJ7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250Om5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6bm9ybWFsO1xuXG59XG5cbmgze1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udDpub3JtYWw7XG4gIGZvbnQtd2VpZ2h0Om5vcm1hbDtcbn1cbi5wb2ludGVyIHtjdXJzb3I6IHBvaW50ZXI7fVxuXG5oNntcbiAgY29sb3I6YmxhY2s7XG59XG5cbi8qRm9yIHRhYmxlKi9cbi8qIHRke1xuIHBhZGRpbmc6MTZweDtcbn0gICovXG5cbi8qLS0tLS0tLS1WaWV3IEN1c3RvbWVyIERldGFpbHMtLS0tLS0tLS0qL1xuLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIC8qIHBhZGRpbmc6IDE2cHg7ICovXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIG1pbi13aWR0aDogMTYwcHg7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xuICB6LWluZGV4OiAxO1xufVxuXG4uZHJvcGRvd24tY29udGVudCBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7fVxuLmRyb3Bkb3duOmhvdmVyIC5kcm9wZG93bi1jb250ZW50IHtkaXNwbGF5OiBibG9jazt9XG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge2NvbG9yOiAjZjNjOTlmO31cbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbnNtYWxse1xuICBmb250LXNpemU6IDE1cHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7IFxuICAgIGNvbG9yOiAjNzc3O1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4ubXktZm9ybXtcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuICAgXG4gIC5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogNjAlO1xuICB9IFxuXG5cbiAgLmNlbnRlcntcbiAgICB3aWR0aDogNzUlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICB9XG4gIFxuICAubWFpbi1kaXZ7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogbWFyZ2luOiAyMHB4IDIwcHggMjBweCAyMHB4OyAgKi9cbiAgfVxuXG4gIC5hZGQtZmlsZXMtYnRuIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gIH1cbiAgXG4gIDpob3N0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgXG4gIC5hY3Rpb25zIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/campaign/campaign.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/campaign/campaign.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background-color:#ecf0f5;\" >\n  <div style=\"margin-right: 1%;\">\n  \n    <button mat-button (click)=\"addCampaign()\"\n      style=\"float: right;background-color:rgb(146, 84, 226); max-width: 200px; max-height: 100px; margin-top:1%; color:white\">\n      <mat-icon>add</mat-icon> Add Campaign\n    </button>\n  \n    <button mat-button (click)=\"stopAllCampaign()\"\n    style=\"float: right;background-color:#ce2b2b; max-width: 200px; max-height: 100px; margin-top:1%;  margin-right: 1%; color:white\">\n    <mat-icon>stop</mat-icon> Stop All Campaign\n   </button>\n  \n  </div>\n  \n  <div class=\"container\" *ngIf=\"addCampaignBoolean\">\n  \n    <mat-toolbar>\n      <div class=\"container-fluid\">\n        <span>Campaigns Details</span>\n      </div>\n    </mat-toolbar>\n    <mat-card class=\"my-card\">\n     \n  \n      <mat-card-content class=\"z-depth center\" flex=\"50\">\n        <form>\n  \n          <mat-form-field>\n            <mat-label>Campaigns Name</mat-label>\n            <input matInput placeholder=\"Campaigns Name\" style=\"width: 100%\" [(ngModel)]=\"campingname\"\n              name=\"campingname\" [value]=\"\" required>\n  \n  \n          </mat-form-field>\n  \n          <mat-form-field style=\"margin-left:20%\">\n            <mat-label>Start Date</mat-label>\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"startdate\" name=\"startdate\">\n            <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field><br>\n  \n  \n          <mat-form-field>\n            <mat-select placeholder=\"Assign To Manager\" name=\"assignedto\" [(ngModel)]=\"assignedto\">\n              <mat-option *ngFor=\"let role of ManagerData\" [value]=\"role.id\">{{ role.email }}</mat-option>\n            </mat-select>\n          </mat-form-field>\n        \n  \n          <mat-form-field style=\"margin-left:20%\">\n            <mat-label>Select Campaign Members</mat-label>\n            <!-- <mat-select multiple name=\"campingmembers\" [(ngModel)]=\"campingmembers\">\n              <mat-option *ngFor=\"let customer of CustomerData\" [value]=\"customer.Mobile\">{{customer.Name}}</mat-option> -->\n              <mat-select multiple name=\"customerIds\" [(ngModel)]=\"customerIds\">\n                  <mat-option *ngFor=\"let customer of CustomerData\" [value]=\"customer._id\">{{customer.Name}}</mat-option>\n            </mat-select>\n          </mat-form-field><br>\n  \n  <div class=\"container\" style=\"margin-top:3%\">\n      <div class=\"row\">\n   \n    <div id=\"upload_button\">\n        <label>\n          <input type=\"file\"  (change)=\"incomingfile($event)\" multiple>\n          <!-- <span class=\"btn btn-primary\" style=\"background-color: white;color:black;   width: 100px;\">Select file</span> -->\n        </label>\n        <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-top:-3%; background-color: white;color:black\" (click)=\"Upload()\">Upload</button>\n      </div>\n     \n    </div>\n    <span style=\"margin-left:-13px\"> {{selectedFile}}</span>\n  </div>\n  \n  \n  \n          <mat-card-content style=\"padding:1%\">\n            <form class=\"my-form\">\n         \n            </form>\n          </mat-card-content>\n          <mat-card-actions style=\" margin:auto;display:block;padding-left: 14%;\">\n            <button mat-raised-button (click)=\"SaveAndEdit()\" color=\"primary\"\n              style=\"padding:0px 35px 0px 35px\">{{Display}}</button>\n            <button mat-raised-button (click)=\"Cancel()\" color=\"bg-danger\"\n              style=\"margin-left:12%; padding:0px 35px 0px 35px; background-color:brown\">Cancel</button>\n          </mat-card-actions>\n  \n        </form>\n      </mat-card-content>\n  \n      <mat-card-actions>\n      \n      </mat-card-actions>\n    </mat-card>\n  \n  </div>\n  <!------------------------------------------------------------------------------->\n  \n  <section class=\"content-header\" style=\"max-width:50%\" *ngIf=\"!addCampaignBoolean\">\n      <h2>\n        Campaign Details \n        <small>All Campaign</small>\n      </h2>\n    </section>\n  \n    <div class=\"box\" *ngIf=\"!addCampaignBoolean\">\n  <div >\n    \n    <table mat-table matSort [dataSource]=\"CampaignData\" >\n      <ng-container matColumnDef=\"S No\">\n  \n        <th mat-header-cell mat-sort-header *matHeaderCellDef><h6>S No </h6></th>\n        <td mat-cell *matCellDef=\"let user; let i = index;\"> {{i+1}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"campigname\">\n        <th mat-header-cell mat-sort-header *matHeaderCellDef><h6>Campaign Name </h6></th>\n        <td mat-cell *matCellDef=\"let user\"> {{user.campingname | titlecase }} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"createdAt\">\n          <th mat-header-cell mat-sort-header *matHeaderCellDef><h6> Created At </h6></th>\n          <td mat-cell *matCellDef=\"let user\"> {{user.createdAt | date: 'dd/MMM/yyyy h:mm:ss a'}} </td>\n        </ng-container>\n     \n      <ng-container matColumnDef=\"getCreatedByname\">\n        <th mat-header-cell mat-sort-header *matHeaderCellDef><h6> Created By </h6> </th>\n        <td mat-cell *matCellDef=\"let user\"> {{user.createdby.users.firstName}} {{user.createdby.users.lastName}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"assignedtoByname\">\n        <th mat-header-cell mat-sort-header *matHeaderCellDef><h6> Assigned To</h6></th>\n        <td mat-cell *matCellDef=\"let user\"> {{user.assignedto.users.firstName}} {{user.assignedto.users.lastName}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"startdate\">\n          <th mat-header-cell  mat-sort-header *matHeaderCellDef><h6> Start Date </h6></th>\n          <td mat-cell *matCellDef=\"let user\"> {{user.startdate | date: 'dd/MMM/yyyy h:mm:ss a'}} </td>\n        </ng-container>\n  \n      <ng-container matColumnDef=\"campingmembers\">\n        <th mat-header-cell mat-sort-header *matHeaderCellDef> <h6>Campaign Members </h6></th>\n        <td mat-cell *matCellDef=\"let user\" style=\"padding:16px\">\n            <div class=\"dropdown\" style=\"float:left;\">\n            <mat-icon class=\"dropbtn\" style=\"color:#EE7600;font-size:30px\">view_headline</mat-icon>\n            <div class=\"dropdown-content\" style=\"left:0; margin-left: 30px; margin-top: -30px; padding: 10px; max-height:300px\">\n                <tr *ngFor=\"let mem of user.customerId;\">\n                    <td>{{mem.Name | titlecase}}  </td> <!--{{mem.Mobile}}-->\n                  </tr>\n              </div>\n              </div>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef><h6> Status  </h6></th>\n        <td mat-cell *matCellDef=\"let user\">\n            <span style=\"color:rgb(30, 36, 30); font-size: 16px\" *ngIf=\"user.campingStatus == undefined || user.campingStatus == null || !user.campingStatus\">Idle</span>\n         <span style=\"color:#4CAF50; font-size: 16px\" *ngIf=\"user.campingStatus && user.campingStatus.queueStatus == 0 && user.campingStatus.status == 1\">Running</span>\n         <span style=\"color:rgb(228, 128, 15); font-size: 16px\" *ngIf=\"user.campingStatus && user.campingStatus.queueStatus == 0 && user.campingStatus.status == 4\">Stopped</span>\n         <span style=\"color:rgb(194, 63, 11); font-size: 16px\"  *ngIf=\"user.campingStatus && user.campingStatus.status == 2\">Queue( {{ user.campingStatus.queueStatus}})</span>\n         <span style=\"color:rgb(13, 14, 13); font-size: 16px\" *ngIf=\"user.campingStatus && user.campingStatus.queueStatus == 0 && user.campingStatus.status == 3\">Completed</span>\n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef><h6> Action  </h6></th>\n        <td mat-cell *matCellDef=\"let user\">\n          <span *ngIf=\"user.campingStatus == undefined || user.campingStatus == null || !user.campingStatus\">\n              <button mat-raised-button style=\"color:white; background-color:#4CAF50; padding:0\" *ngIf=\"user.campingStatus == undefined\" (click)=\"RunCampaign(user._id, undefined)\"> RUN </button>\n          </span>\n          <span *ngIf=\"user.campingStatus != undefined\">\n              <button mat-raised-button style=\"color:white; background-color:rgb(255,165,0); padding:0\" *ngIf=\"user.campingStatus.status == 4\" (click)=\"RunCampaign(user._id, user.campingStatus.status)\"> RESUME </button>\n              <button mat-raised-button style=\"color:white; background-color:#4CAF50; padding:0\" *ngIf=\"user.campingStatus.status == 3\" (click)=\"RunCampaign(user._id, user.campingStatus.status)\"> RUN </button>\n           <!-- <button mat-raised-button style=\"color:white; background-color:#4CAF50\" *ngIf=\"user.campingStatus == undefined || user.campingStatus == null || !user.campingStatus || user.campingStatus.status == 3 || user.campingStatus.status == 4\" (click)=\"RunCampaign(user._id)\"> RUN </button> -->\n           <button mat-raised-button style=\"color:white; background-color:#ce2b2b\" *ngIf=\"user.campingStatus && user.campingStatus.status == 2 || user.campingStatus.status == 1\" (click)=\"StopCampaign(user._id, user.campingStatus.status)\"> STOP </button>\n          </span>\n           </td>\n      </ng-container>\n  \n      <ng-container matColumnDef=\"edit\">\n        <th mat-header-cell *matHeaderCellDef><h6> Edit  </h6></th>\n        <td mat-cell *matCellDef=\"let user\" style=\"min-width: 50px;text-align: center\">\n          <!-- <button mat-raised-button color=\"primary\" (click)=\"editCampaign(user._id)\"> \n            Edit\n           \n          </button> -->\n       <a class=\"pointer\"> <mat-icon color=\"primary\" (click)=\"editCampaign(user._id)\">edit</mat-icon></a>\n        \n        </td>\n      </ng-container>\n      <ng-container matColumnDef=\"delete\">\n        <th mat-header-cell *matHeaderCellDef><h6>Delete  </h6></th>\n        <td mat-cell *matCellDef=\"let user\" style=\"min-width: 50px;text-align: center\">\n          <!-- <button mat-raised-button style=\"color:white;background-color: #ce2b2b\" (click)=\"deleteCampaign(user.campingname)\"> \n            Delete\n         \n          </button> -->\n       <a class=\"pointer\">  <mat-icon style=\"color:#ce2b2b;\" (click)=\"deleteCampaign(user._id)\">delete_forever</mat-icon></a>\n        </td>\n      </ng-container>\n      <tr mat-header-row *matHeaderRowDef=\"tryData\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: tryData;\"></tr>\n      <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  \n  \n    </table>\n  </div>\n  </div>\n  <!---------------------------------------------------------------------------------------->\n  \n  </div>\n  \n  \n  <!-------------------------------------Mat Table ------------------------------------->\n  <!-- <mat-form-field>\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n  <div  class=\"box\">\n  <mat-table [dataSource]=\"CampaignData\" matSort >\n  <ng-container matColumnDef=\"select\" style=\"max-width: 50px\">\n  <mat-header-cell *matHeaderCellDef>\n  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n        [checked]=\"selection.hasValue() && isAllSelected()\"\n        [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n        [aria-label]=\"checkboxLabel()\">\n  </mat-checkbox>\n  </mat-header-cell>\n  <mat-cell *matCellDef=\"let row\">\n  <mat-checkbox (click)=\"$event.stopPropagation()\"\n        (change)=\"$event ? selection.toggle(row) : null\"\n        [checked]=\"selection.isSelected(row)\"\n        [aria-label]=\"checkboxLabel(row)\">\n  </mat-checkbox>\n  </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"S No\">\n   <mat-header-cell *matHeaderCellDef > S No </mat-header-cell>\n   <mat-cell *matCellDef=\"let user; let i = index;\">\n    {{i+1}}\n   </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"campigname\">\n    <mat-header-cell mat-sort-header *matHeaderCellDef>Campaign Name</mat-header-cell>\n    <mat-cell *matCellDef=\"let user\"> {{user.campingname | titlecase }} </mat-cell>\n  </ng-container>\n  <ng-container matColumnDef=\"startdate\">\n      <mat-header-cell  mat-sort-header *matHeaderCellDef><h6> Start Date </h6></mat-header-cell>\n      <mat-cell *matCellDef=\"let user\"> {{user.startdate | date: 'dd/MMM/yyyy h:mm:ss a'}} </mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"getCreatedByname\">\n        <mat-header-cell mat-sort-header *matHeaderCellDef><h6> Created By </h6> </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\"> {{user.getCreatedByname}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"assignedtoByname\">\n        <mat-header-cell mat-sort-header *matHeaderCellDef><h6> Assigned To</h6></mat-header-cell>\n        <mat-cell *matCellDef=\"let user\"> {{user.assignedtoByname}} </mat-cell>\n      </ng-container>\n      <ng-container matColumnDef=\"createdAt\">\n          <mat-header-cell mat-sort-header *matHeaderCellDef><h6> Created At </h6></mat-header-cell>\n          <mat-cell *matCellDef=\"let user\"> {{user.createdAt | date: 'dd/MMM/yyyy h:mm:ss a'}} </mat-cell>\n        </ng-container>\n        <ng-container matColumnDef=\"campingmembers\">\n            <mat-header-cell mat-sort-header *matHeaderCellDef> <h6>Campaign Members </h6></mat-header-cell>\n            <mat-cell *matCellDef=\"let user\">\n             \n              <mat-row *ngFor=\"let mem of user.campingmembers;\">\n                <mat-cell>{{mem}} </mat-cell>\n              </mat-row>\n            </mat-cell>\n          </ng-container>\n          <ng-container matColumnDef=\"edit\">\n              <mat-header-cell *matHeaderCellDef><h6> Edit  </h6></mat-header-cell>\n              <mat-cell *matCellDef=\"let user\">\n                <button mat-raised-button color=\"primary\" (click)=\"editCampaign(user._id)\"> Edit\n                </button>\n              </mat-cell>\n            </ng-container>\n            <ng-container matColumnDef=\"delete\">\n              <mat-header-cell *matHeaderCellDef><h6>Delete  </h6></mat-header-cell>\n              <mat-cell *matCellDef=\"let user\">\n                <button mat-raised-button color=\"red\" (click)=\"deleteCampaign(user.campingname)\"> Delete\n                </button>\n              </mat-cell>\n            </ng-container>\n   <mat-header-row *matHeaderRowDef=\"tryData1\">\n   </mat-header-row>\n   <mat-row *matRowDef=\"let row; columns: tryData1\" ></mat-row>\n  </mat-table>\n  <mat-paginator    [length]=\"100\"  [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n  </div> -->"

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
    CampaignComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CampaignComponent.prototype.hitAPI = function () {
        var _this = this;
        this.subscription = observable.subscribe(function (x) {
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
        //debugger;
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
            //debugger;
            this.Campaigns = {
                startdate: new Date(this.startdate).getTime(),
                campingname: this.campingname,
                assignedto: this.assignedto,
                campingmembers: this.campingmembers,
                campingid: this.campingid,
                excelupload: false
            };
            this.service.editCampaign(this.Campaigns).subscribe(function (data) {
                //alert('Edit successfully');
                console.log(data);
                _this.ngOnInit();
            });
        }
    };
    // dataSource = this.service.getAllCustomer();
    CampaignComponent.prototype.applyFilter = function (filterValue) {
        //alert('working');
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
                    //debugger;
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
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _campaign_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
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

module.exports = "<!-- <div style=\"text-align:center;display: flex;justify-content: center;\">\n    <img src=\"../../../assets/DeleteIcon.png\" style=\"width:100px; height:100px\">\n</div> -->\n<a href=\"javascript:void(0)\"><mat-icon style=\"float:right;margin-top:-3%;margin-right:-3%;color:lightgray\" (click)=\"onNoClick()\" >clear</mat-icon></a>\n<h1 mat-dialog-title style=\"text-align: center; margin-top:3%;font-weight: normal;\">Are you sure?</h1>\n\n<mat-dialog-content style=\"text-align: center\">\n        <h6 style=\"color:grey;margin:4%; font-weight: normal;\">{{data.message}}</h6>\n</mat-dialog-content>\n\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;margin:5%\">\n\n    <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:130px;color:white ;background-color:#a8a8a8\">Cancel</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:130px; background-color:rgb(221, 107, 85)\">{{data.button}}</button>\n</mat-dialog-actions>\n"

/***/ })

}]);
//# sourceMappingURL=campaign-campaign-module.js.map