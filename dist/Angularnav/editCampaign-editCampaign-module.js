(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editCampaign-editCampaign-module"],{

/***/ "./src/app/layout/editCampaign/editCampaign-routing.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign-routing.ts ***!
  \*************************************************************/
/*! exports provided: EditCampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCampaignRoutingModule", function() { return EditCampaignRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editCampaign_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editCampaign.component */ "./src/app/layout/editCampaign/editCampaign.component.ts");




var routes = [
    {
        path: '',
        component: _editCampaign_component__WEBPACK_IMPORTED_MODULE_3__["EditCampaignComponent"]
    }
];
var EditCampaignRoutingModule = /** @class */ (function () {
    function EditCampaignRoutingModule() {
    }
    EditCampaignRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EditCampaignRoutingModule);
    return EditCampaignRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/editCampaign/editCampaign.component.css":
/*!****************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-form{\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 80%;\r\n  }\r\n   \r\n  .full-width {\r\n    width: 60%;\r\n  }\r\n   \r\n  .center{\r\n    width: 75%;\r\n    margin: 10px auto;\r\n  }\r\n   \r\n  .main-div{\r\n    height: 100vh;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n   \r\n  table {\r\n    width: 80%;\r\n    margin: 20px 20px 20px 20px; \r\n  }\r\n   \r\n  .add-files-btn {\r\n    float: right;\r\n  }\r\n   \r\n  :host {\r\n    height: 100%;\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n  }\r\n   \r\n  .actions {\r\n    justify-content: flex-end;\r\n  }\r\n   \r\n  .container {\r\n    height: 100%;\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2VkaXRDYW1wYWlnbi9lZGl0Q2FtcGFpZ24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUdBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFVBQVU7SUFDViwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZWRpdENhbXBhaWduL2VkaXRDYW1wYWlnbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWZvcm17XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gICBcclxuICAuZnVsbC13aWR0aCB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH0gXHJcblxyXG5cclxuICAuY2VudGVye1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIG1hcmdpbjogMTBweCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubWFpbi1kaXZ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggMjBweCAyMHB4IDIwcHg7IFxyXG4gIH1cclxuXHJcbiAgLmFkZC1maWxlcy1idG4ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICA6aG9zdCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/editCampaign/editCampaign.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 10%\">\r\n\r\n  <mat-toolbar>\r\n    <div class=\"container-fluid\">\r\n      <span> Edit Campaigns Details</span>\r\n    </div>\r\n  </mat-toolbar>\r\n  <mat-card class=\"my-card\" style=\"max-height:60%\">\r\n\r\n    <mat-card-content class=\"z-depth center\" flex=\"50\">\r\n      <form>\r\n\r\n        <mat-form-field>\r\n          <mat-label>Campaigns Name</mat-label>\r\n          <input matInput placeholder=\"Campaigns Name\" style=\"max-width: 100px\" [(ngModel)]=\"campingname\"\r\n            name=\"campingname\" [value]=\"\" required>\r\n\r\n\r\n        </mat-form-field>\r\n\r\n        <mat-form-field style=\"margin-left:20%\">\r\n          <mat-label>Start Date</mat-label>\r\n          <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"startdate\" name=\"startdate\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n        </mat-form-field><br>\r\n\r\n\r\n        <mat-form-field>\r\n          <mat-select placeholder=\"Assign To Manager\" name=\"assignedto\" [(ngModel)]=\"assignedto\">\r\n            <mat-option *ngFor=\"let role of ManagerData\" [value]=\"role.id\">{{ role.email }}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n        <!--(selectionChange)=\"educationLevelChangeAction(education_level)\"-->\r\n\r\n        <mat-form-field style=\"margin-left:20%\">\r\n          <mat-label>Select Campaign Members</mat-label>\r\n          <mat-select multiple name=\"customerId\" [(ngModel)]=\"customerId\">\r\n            <mat-option *ngFor=\"let customer of CustomerData\" [value]=\"customer._id\">{{customer.Name}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field><br>\r\n\r\n\r\n        <mat-card-content style=\"padding:1%\">\r\n          <form class=\"my-form\">\r\n            <!--FORM FIELDS-->\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-card-actions style=\" margin:auto;display:block;padding-left: 14%;\">\r\n          <button mat-raised-button (click)=\"Edit()\" color=\"primary\" style=\"padding:0px 35px 0px 35px\">Edit</button>\r\n          <button mat-raised-button (click)=\"Cancel()\" color=\"bg-danger\"\r\n            style=\"margin-left:12%; padding:0px 35px 0px 35px\">Cancel</button>\r\n        </mat-card-actions>\r\n\r\n      </form>\r\n    </mat-card-content>\r\n\r\n    <mat-card-actions>\r\n      <!-- REGISTER BUTTON -->\r\n    </mat-card-actions>\r\n  </mat-card>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/editCampaign/editCampaign.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign.component.ts ***!
  \***************************************************************/
/*! exports provided: EditCampaignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCampaignComponent", function() { return EditCampaignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");


//import { FormBuilder, FormGroup, Validators } from '@angular/forms';


//import { FarmService } from '../../farm.service';

//import { Router } from '@angular/router';

var EditCampaignComponent = /** @class */ (function () {
    function EditCampaignComponent(toastrService, formBuilder, service, router) {
        var _this = this;
        this.toastrService = toastrService;
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.Campaigns = {};
        this.customerId = [];
        this.EditId = this.service.getEditId();
        console.log('Edit Id:', this.EditId);
        if (this.EditId) {
            //    this.service.getAllManagers().subscribe((data)=>{
            this.data = {
                campingId: this.EditId
            };
            this.service.getSingleCampaign(this.data).subscribe(function (data) {
                debugger;
                console.log('data:', data);
                _this.startdate = new Date(data['message'][0]['startdate']);
                _this.campingname = data['message'][0]['campingname'];
                _this.assignedto = data['message'][0]['assignedto']['_id'];
                //this.campingmembers = data['message'][0]['campingmembers'];
                if (data['message'][0]['customerId']) {
                    for (var i = 0; i < data['message'][0]['customerId'].length; i++) {
                        _this.customerId.push(data['message'][0]['customerId'][i]['_id']);
                    }
                }
                console.log('customerId', _this.customerId);
                _this.campingid = data['message'][0]['_id'];
                //this.displayAssaignedManager = data['message'][0]['assignedtoByname'];
                // this.startdate = data['message']['startdate'];
            });
        }
    }
    EditCampaignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAllManagers().subscribe(function (data) {
            _this.ManagerData = data['message'];
            console.log(data['message']);
        });
        this.service.getAllCustomer().subscribe(function (data) {
            _this.CustomerData = data['message'];
        });
    };
    EditCampaignComponent.prototype.Edit = function () {
        var _this = this;
        debugger;
        this.Campaigns = {
            startdate: new Date(this.startdate).getTime(),
            campingname: this.campingname,
            assignedto: this.assignedto,
            customerId: this.customerId,
            campingid: this.campingid
        };
        this.service.editCampaign(this.Campaigns).subscribe(function (data) {
            console.log(data);
            if (data['success'] == true) {
                _this.showToaster();
                _this.router.navigate(['/admin/campaign']);
            }
            else {
                _this.ErrorSuccess();
                //   alert('sth went wrong');
            }
        });
    };
    EditCampaignComponent.prototype.Cancel = function () {
        this.Campaigns = {};
        this.router.navigate(['/admin/campaign']);
    };
    //notification
    EditCampaignComponent.prototype.showToaster = function () {
        this.toastrService.success('Campaign Edited Successful');
    };
    EditCampaignComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed: Unable to Save');
    };
    EditCampaignComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    EditCampaignComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('this is warning');
    };
    EditCampaignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editCampaign',
            template: __webpack_require__(/*! ./editCampaign.component.html */ "./src/app/layout/editCampaign/editCampaign.component.html"),
            styles: [__webpack_require__(/*! ./editCampaign.component.css */ "./src/app/layout/editCampaign/editCampaign.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__["AutoDialService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditCampaignComponent);
    return EditCampaignComponent;
}());



/***/ }),

/***/ "./src/app/layout/editCampaign/editCampaign.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/editCampaign/editCampaign.module.ts ***!
  \************************************************************/
/*! exports provided: EditCampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCampaignModule", function() { return EditCampaignModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _editCampaign_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editCampaign-routing */ "./src/app/layout/editCampaign/editCampaign-routing.ts");
/* harmony import */ var _editCampaign_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editCampaign.component */ "./src/app/layout/editCampaign/editCampaign.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");







var EditCampaignModule = /** @class */ (function () {
    function EditCampaignModule() {
    }
    EditCampaignModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _editCampaign_routing__WEBPACK_IMPORTED_MODULE_3__["EditCampaignRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]],
            declarations: [_editCampaign_component__WEBPACK_IMPORTED_MODULE_4__["EditCampaignComponent"]]
        })
    ], EditCampaignModule);
    return EditCampaignModule;
}());



/***/ })

}]);
//# sourceMappingURL=editCampaign-editCampaign-module.js.map