(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/add/observable/interval.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].interval = rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"];
//# sourceMappingURL=interval.js.map

/***/ }),

/***/ "./src/app/agent/call-dialog/call-dialog.component.css":
/*!*************************************************************!*\
  !*** ./src/app/agent/call-dialog/call-dialog.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2NhbGwtZGlhbG9nL2NhbGwtZGlhbG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/agent/call-dialog/call-dialog.component.html":
/*!**************************************************************!*\
  !*** ./src/app/agent/call-dialog/call-dialog.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>Caller Details</h2>\n<mat-dialog-content>\n  <!-- <p style=\"color:red\">{{data.message}}</p>\n  <p style=\"color:red\">{{data.name}}</p>\n  <p style=\"color:red\">{{data.mobile}}</p> -->\n  <!-- <div>\n      <img src=\"../../../assets/men.jpg\" style=\"width:100px;height: 100px;\">\n      <p>  {{data.name}} </p>\n      <p>   {{data.mobile}}</p>\n     \n  </div> -->\n  <div class=\"container-fluid\">\n \n      <div class=\"row\">\n        <div class=\"col-sm-4\">   <img src=\"../../../assets/no-photo.png\" style=\"width:100px;height: 100px;\"></div>\n        <div class=\"col-sm-8\">\n            <h3>  {{data.name | titlecase}} </h3>\n            <h3>   {{data.mobile}}</h3>\n            <h3></h3>\n            <h3></h3>\n        </div>\n      </div>\n    </div>\n\n</mat-dialog-content>\n<mat-dialog-actions align=\"center\">\n        <div class=\"row\" style=\"width:100%;height: 60px; margin-top: 5%;\">\n          <div class=\"col-sm-6\" style=\"width:50%;height:100%\">   \n        <button mat-button matDialogClose=\"cancel\" color=\"primary\" style=\"background-color: rgb(231, 71, 71);height:10%;width:100%;height:80%; color: white\">Cancel</button>\n          </div>\n          <div class=\"col-sm-6\" style=\"width:50%;height:100%\">\n              <button mat-button matDialogClose=\"confirm\" color=\"primary\" (click)=\"ok()\" style=\"background-color: rgb(66, 165, 66);height:80%;width:100%; color: white\">Call</button>\n          </div>\n        </div>\n  <!-- <button mat-button matDialogClose=\"cancel\" color=\"primary\" style=\"background-color: red;\">Cancel</button>\n  <button mat-button matDialogClose=\"confirm\" color=\"primary\" (click)=\"ok()\" style=\"background-color: rgb(29, 196, 29);\">Call</button> -->\n</mat-dialog-actions>\n\n<!-- <mat-card class=\"example-card\">\n    <mat-card-header>\n  \n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n   \n    </mat-card-content>\n    <mat-card-actions>\n      <div class=\"container\">\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n      </div>\n    </mat-card-actions>\n  </mat-card> -->"

/***/ }),

/***/ "./src/app/agent/call-dialog/call-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/agent/call-dialog/call-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: CallDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallDialogComponent", function() { return CallDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var CallDialogComponent = /** @class */ (function () {
    function CallDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CallDialogComponent.prototype.ngOnInit = function () {
    };
    CallDialogComponent.prototype.cancel = function () {
    };
    CallDialogComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
    };
    CallDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-call-dialog',
            template: __webpack_require__(/*! ./call-dialog.component.html */ "./src/app/agent/call-dialog/call-dialog.component.html"),
            styles: [__webpack_require__(/*! ./call-dialog.component.css */ "./src/app/agent/call-dialog/call-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], CallDialogComponent);
    return CallDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map