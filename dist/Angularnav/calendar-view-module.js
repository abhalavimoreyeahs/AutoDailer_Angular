(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-view-module"],{

/***/ "./src/app/agent/calendar/calendar/calendar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/agent/calendar/calendar/calendar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.app-top {\n  margin: 0 0 3em;\n}\n\n.app-calendar {\n  margin: 0 auto;\n  max-width: 900px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvY2FsZW5kYXIvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2NhbGVuZGFyL2NhbGVuZGFyL2NhbGVuZGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5hcHAtdG9wIHtcbiAgbWFyZ2luOiAwIDAgM2VtO1xufVxuXG4uYXBwLWNhbGVuZGFyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1heC13aWR0aDogOTAwcHg7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/agent/calendar/calendar/calendar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/agent/calendar/calendar/calendar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class='app'>\n  <div class='app-calendar' *ngIf=\"calendarVisible\">\n    <full-calendar\n      #calendar\n      defaultView=\"dayGridMonth\"\n      [header]=\"{\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'\n      }\"\n      [plugins]=\"calendarPlugins\"\n      [weekends]=\"calendarWeekends\"\n      [events]=\"calendarEvents\"\n      (dateClick)=\"handleDateClick($event)\"\n    ></full-calendar>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/agent/calendar/calendar/calendar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/agent/calendar/calendar/calendar.component.ts ***!
  \***************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5__);





 // for dateClick
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_3___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_4___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_5___default.a];
        this.calendarWeekends = true;
        this.calendarEvents = [
            { title: 'Event Now', start: new Date() }
        ];
    }
    CalendarComponent.prototype.toggleVisible = function () {
        this.calendarVisible = !this.calendarVisible;
    };
    CalendarComponent.prototype.toggleWeekends = function () {
        this.calendarWeekends = !this.calendarWeekends;
    };
    CalendarComponent.prototype.gotoPast = function () {
        var calendarApi = this.calendarComponent.getApi();
        calendarApi.gotoDate('2019-07-12'); // call a method on the Calendar object
    };
    CalendarComponent.prototype.handleDateClick = function (arg) {
        if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
            this.calendarEvents = this.calendarEvents.concat({
                title: 'New Event',
                start: arg.date,
                allDay: arg.allDay
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_2__["FullCalendarComponent"])
    ], CalendarComponent.prototype, "calendarComponent", void 0);
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/agent/calendar/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/agent/calendar/calendar/calendar.component.css")]
        })
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/agent/calendar/view-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/agent/calendar/view-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewRoutingModule", function() { return ViewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view.component */ "./src/app/agent/calendar/view.component.ts");




var routes = [
    {
        path: '',
        component: _view_component__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"],
    }
];
var ViewRoutingModule = /** @class */ (function () {
    function ViewRoutingModule() {
    }
    ViewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ViewRoutingModule);
    return ViewRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/calendar/view.component.css":
/*!***************************************************!*\
  !*** ./src/app/agent/calendar/view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    overflow-x: auto;\n    overflow-y: hidden;\n    min-width: 500px;\n}\n \nmat-header-cell {\n    text-align: left;\n    max-width: 300px;\n    max-height: 100px;\n}\n \n.mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n \n/*For calendar*/\n \n.app-top {\n    margin: 0 0 3em;\n  }\n \n.app-calendar {\n    margin: 0 auto;\n    max-width: 900px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvY2FsZW5kYXIvdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztFQUNiOztBQUVBLGVBQWU7O0FBQ2Y7SUFDRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0UsY0FBYztJQUNkLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2NhbGVuZGFyL3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xufVxuIFxubWF0LWhlYWRlci1jZWxsIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLypGb3IgY2FsZW5kYXIqL1xuICAuYXBwLXRvcCB7XG4gICAgbWFyZ2luOiAwIDAgM2VtO1xuICB9XG4gIFxuICAuYXBwLWNhbGVuZGFyIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/agent/calendar/view.component.html":
/*!****************************************************!*\
  !*** ./src/app/agent/calendar/view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:2%\">\n    <!-- Control the column width, and how they should appear on different devices -->\n    <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <!-- <mat-form-field>\n                <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n              </mat-form-field> -->\n         <!-- <div style=\"margin-left:2%;width: 99%;\" class=\"mat-elevation-z8\">\n          <mat-table [dataSource]=\"dataSource\" matSort *ngIf=\"CustomerDetails\">\n              \n  <ng-container matColumnDef=\"select\" style=\"max-width: 50px\">\n    <mat-header-cell *matHeaderCellDef>\n      <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\"\n                    [aria-label]=\"checkboxLabel()\">\n      </mat-checkbox>\n    </mat-header-cell>\n    <mat-cell *matCellDef=\"let row\">\n      <mat-checkbox (click)=\"$event.stopPropagation()\"\n                    (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\"\n                    [aria-label]=\"checkboxLabel(row)\">\n      </mat-checkbox>\n    </mat-cell>\n  </ng-container>\n\n    <ng-container matColumnDef=\"Image\">\n               <mat-header-cell *matHeaderCellDef > Image</mat-header-cell>\n               <mat-cell *matCellDef=\"let user\">\n                    <img src=\"../../../assets/no-photo.png\"  style=\"width:60px;width:60px;margin:5% 5% 5% 5%\"> \n               </mat-cell>\n             </ng-container>\n\n            <ng-container matColumnDef=\"Name\" >\n              <mat-header-cell *matHeaderCellDef mat-sort-header><h5><b> Contact Name </b></h5> </mat-header-cell>    \n              <mat-cell *matCellDef=\"let user\" >\n                 \n                {{user.Name  | titlecase}}\n                </mat-cell>\n            </ng-container>\n         \n             <ng-container matColumnDef=\"Mobile\">\n                 <mat-header-cell *matHeaderCellDef mat-sort-header> <h5><b>Mobile No</b></h5></mat-header-cell>\n                 <mat-cell *matCellDef=\"let user\">{{user.Mobile}}</mat-cell>\n               </ng-container>\n\n               <ng-container matColumnDef=\"Age\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header><h5><b>Age</b></h5></mat-header-cell>\n                    <mat-cell *matCellDef=\"let user\">{{user.Age}}</mat-cell>\n                  </ng-container>\n\n                  <ng-container matColumnDef=\"City\">\n                        <mat-header-cell *matHeaderCellDef mat-sort-header><h5><b>City</b></h5></mat-header-cell>\n                        <mat-cell *matCellDef=\"let user\">{{user.City}}</mat-cell>\n                      </ng-container>\n    \n                      <ng-container matColumnDef=\"Domicile\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header><h5><b>Demicile</b></h5></mat-header-cell>\n                            <mat-cell *matCellDef=\"let user\">{{user.Domicile}}</mat-cell>\n                          </ng-container>\n\n\n               <ng-container matColumnDef=\"Details\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header><h5><b>Call</b></h5></mat-header-cell>\n                <mat-cell *matCellDef=\"let user;let i = index;\">\n                 \n                    <button mat-icon-button color=\"primary\" style=\"color:green;background-color: lightgray\"  (click)=\"redirectToDetails(user.Name, user.Mobile)\">\n                         \n                            <mat-icon> dialer_sip</mat-icon>                       \n                       </button>\n                </mat-cell>\n              </ng-container>\n              \n         \n               <mat-header-row *matHeaderRowDef=\"displayedColumns\">\n               </mat-header-row>\n               <mat-row *matRowDef=\"let row; columns: displayedColumns\" ></mat-row>\n          </mat-table>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n           </div> -->\n          <!----------------------->\n        </div>\n        <div class=\"col-sm-6\">\n            <ejs-schedule [eventSettings]=\"eventData\" [selectedDate]=\"currentDate\" [currentView]=\"newViewMode\">\n            </ejs-schedule>\n            <!-- <app-calendar></app-calendar> -->\n        </div>\n    </div>\n   \n</div>\n\n"

/***/ }),

/***/ "./src/app/agent/calendar/view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/agent/calendar/view.component.ts ***!
  \**************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _call_dialog_call_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../call-dialog/call-dialog.component */ "./src/app/agent/call-dialog/call-dialog.component.ts");









var ViewComponent = /** @class */ (function () {
    function ViewComponent(breakpointObserver, service, dialog) {
        this.breakpointObserver = breakpointObserver;
        this.service = service;
        this.dialog = dialog;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.title = 'calender';
        this.currentDate = new Date(2019, 6, 5);
        this.newViewMode = 'Month';
        // dummyData = this.service.getDummyData();
        // displayDummyData = [  'Name', 'Age', 'DOB', 'Mobile', 'Domicile', 'City']
        // data = this.service.getUsers();
        // dataSource = new MatTableDataSource(this.CustomerDetails);
        // displayedColumns = ['select','name','email','phone', 'details','edit', 'delete'];
        this.displayedColumns = ['select', 'Image', 'Name', 'Mobile', 'Age', 'City', 'Domicile', 'Details'];
    }
    ViewComponent.prototype.ngOnInit = function () {
        // this.service.getAllCustomer().subscribe((data)=>{
        //   console.log('data:',data);
        //   this.CustomerDetails = data['message'];
        //   //this.dataSource =this.CustomerDetails;
        //   this.dataSource = new MatTableDataSource(this.CustomerDetails);
        //    // Assign the paginator *after* dataSource is set
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        // })
    };
    // dataSource = this.service.getAllCustomer();
    ViewComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    /** Whether the number of selected elements matches the total number of rows. */
    ViewComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    ViewComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    /** The label for the checkbox on the passed row */
    ViewComponent.prototype.checkboxLabel = function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
    };
    ViewComponent.prototype.redirectToDetails = function (Name, Mobile) {
        // alert(Id);
        this.payload = {
            message: 'Login Error',
            error: 'error',
            name: Name,
            mobile: Mobile,
            image: 'image_url'
        };
        this.openDialog(this.payload);
    };
    ViewComponent.prototype.openDialog = function (payload) {
        console.log(payload);
        var dialogRef = this.dialog.open(_call_dialog_call_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CallDialogComponent"], {
            width: '550px',
            data: { message: payload.message, error: payload.error,
                name: payload.name, mobile: payload.mobile, image: payload.image
            },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], ViewComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], ViewComponent.prototype, "sort", void 0);
    ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/agent/calendar/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/agent/calendar/view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__["AutoDialService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/agent/calendar/view.module.ts":
/*!***********************************************!*\
  !*** ./src/app/agent/calendar/view.module.ts ***!
  \***********************************************/
/*! exports provided: ViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewModule", function() { return ViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./view-routing.module */ "./src/app/agent/calendar/view-routing.module.ts");
/* harmony import */ var _view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view.component */ "./src/app/agent/calendar/view.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @syncfusion/ej2-angular-schedule */ "./node_modules/@syncfusion/ej2-angular-schedule/@syncfusion/ej2-angular-schedule.es5.js");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/agent/calendar/calendar/calendar.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");








//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//For Calendar
//import { CalendarModule } from './calendar/calendar.module';


//For calendar

var ViewModule = /** @class */ (function () {
    function ViewModule() {
    }
    ViewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _view_routing_module__WEBPACK_IMPORTED_MODULE_4__["ViewRoutingModule"],
                _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["ScheduleModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__["FullCalendarModule"],
            ],
            providers: [_syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["AgendaService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["DayService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["WeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["WorkWeekService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["MonthService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["DragAndDropService"], _syncfusion_ej2_angular_schedule__WEBPACK_IMPORTED_MODULE_7__["ResizeService"]],
            declarations: [_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"], _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_8__["CalendarComponent"]]
        })
    ], ViewModule);
    return ViewModule;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-view-module.js.map