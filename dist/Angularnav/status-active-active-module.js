(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["status-active-active-module"],{

/***/ "./src/app/agent/status/active/active-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/agent/status/active/active-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ActiveRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveRoutingModule", function() { return ActiveRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _active_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./active.component */ "./src/app/agent/status/active/active.component.ts");




var routes = [
    {
        path: '',
        component: _active_component__WEBPACK_IMPORTED_MODULE_3__["ActiveComponent"],
    }
];
var ActiveRoutingModule = /** @class */ (function () {
    function ActiveRoutingModule() {
    }
    ActiveRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ActiveRoutingModule);
    return ActiveRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/status/active/active.component.css":
/*!**********************************************************!*\
  !*** ./src/app/agent/status/active/active.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  background-image: url('autodial_img-1-01.jpeg');\r\n  height: 100%; \r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  opacity: 0.9;\r\n}\r\n.fc-unthemed {\r\n  background: #fcf8e3;\r\n}\r\n.mat-card {\r\ntext-align:center;\r\nwidth:100%;\r\nbackground-color:none;\r\ncolor:white;\r\n}\r\n/* caller id */\r\n.card {\r\n  text-align:center;\r\n  opacity:0.9;\r\n}\r\n/*  dialog box  */\r\n.modal-window {\r\n  position: fixed;\r\n  background-color: rgba(255, 255, 255, 0.25);\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 999;\r\n  opacity: 0;\r\n  pointer-events: none;\r\n  transition: all 0.3s;\r\n}\r\n.modal-window:target {\r\n  opacity: 1;\r\n  pointer-events: auto;\r\n}\r\n.modal-window > div {\r\n  width: 400px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  padding: 2em;\r\n  background: #fff;\r\n}\r\n.modal-window header {\r\n  font-weight: bold;\r\n}\r\n.modal-window h1 {\r\n  font-size: 150%;\r\n  margin: 0 0 15px;\r\n}\r\n.modal-close {\r\n  color: #aaa;\r\n  line-height: 50px;\r\n  font-size: 80%;\r\n  position: absolute;\r\n  right: 0;\r\n  text-align: center;\r\n  top: 0;\r\n  width: 70px;\r\n  text-decoration: none;\r\n}\r\n.modal-close:hover {\r\n  color: black;\r\n}\r\n/* Demo Styles */\r\nhtml, body {\r\n  height: 100%;\r\n}\r\nbody {\r\n  font: 600 12px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\r\n  background-image: linear-gradient(to right, #7f53ac 0, #657ced 100%);\r\n  color: black;\r\n}\r\na {\r\n  color: inherit;\r\n}\r\n.container {\r\n  display: grid;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n}\r\n.modal-window div:not(:last-of-type) {\r\n  margin-bottom: 15px;\r\n}\r\nsmall {\r\n  color: #aaa;\r\n}\r\n.btn {\r\n  background-color: #fff;\r\n  padding: 1em 1.5em;\r\n  border-radius: 3px;\r\n  text-decoration: none;\r\n}\r\n.btn i {\r\n  padding-right: 0.3em;\r\n}\r\n/*   Draggable div for quick notes */\r\n#accordion{\r\n  position: absolute;\r\n  bottom: 10px;\r\n  width: 25%;\r\n  border: 3px solid #673ab7;\r\n  right: 10px;\r\n  background-color: white;\r\n}\r\n.notes{\r\n  background-color: white;\r\n}\r\n/*   */\r\n#mydiv {\r\n  position: absolute;\r\n  z-index: 9;\r\n  background-color: #f1f1f1;\r\n  text-align: center;\r\n  border: 1px solid #d3d3d3;\r\n \r\n}\r\n#mydivheader {\r\n  padding: 10px;\r\n  cursor: move;\r\n  z-index: 10;\r\n  background-color: #2196F3;\r\n  color: #fff;\r\n}\r\n/* angular material */\r\n.example-box {\r\n  width: 400px;\r\n  height: 400px;\r\n  padding: 10px;\r\n  box-sizing: border-box;\r\n  border: solid 1px #ccc;\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  background: #fff;\r\n  border-radius: 4px;\r\n  position: relative;\r\n  z-index: 1;\r\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n.example-box:active {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n.example-handle {\r\n  position: absolute;\r\n  top: 10px;\r\n  right: 10px;\r\n  color: #ccc;\r\n  cursor: move;\r\n  width: 24px;\r\n  height: 24px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL2FjdGl2ZS9hY3RpdmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFrRTtFQUNsRSxZQUFZO0VBQ1osc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsVUFBVTtBQUNWLHFCQUFxQjtBQUNyQixXQUFXO0FBQ1g7QUFFQSxjQUFjO0FBQ2Q7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0FBR0EsaUJBQWlCO0FBQ2pCO0VBQ0UsZUFBZTtFQUNmLDJDQUEyQztFQUMzQyxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWTtFQUNaLFVBQVU7RUFDVixvQkFBb0I7RUFHcEIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtJQUFrSTtFQUNsSSxvRUFBb0U7RUFDcEUsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUdBLG9DQUFvQztBQUNwQztFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFHQSxNQUFNO0FBQ047RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIseUJBQXlCOztBQUUzQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjtBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsdURBQXVEO0VBQ3ZEOzs2Q0FFMkM7QUFDN0M7QUFFQTtFQUNFOztnREFFOEM7QUFDaEQ7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FnZW50L3N0YXR1cy9hY3RpdmUvYWN0aXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9hdXRvZGlhbF9pbWctMS0wMS5qcGVnJyk7XHJcbiAgaGVpZ2h0OiAxMDAlOyBcclxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG9wYWNpdHk6IDAuOTtcclxufVxyXG4uZmMtdW50aGVtZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmY2Y4ZTM7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbnRleHQtYWxpZ246Y2VudGVyO1xyXG53aWR0aDoxMDAlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOm5vbmU7XHJcbmNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4vKiBjYWxsZXIgaWQgKi9cclxuLmNhcmQge1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG9wYWNpdHk6MC45O1xyXG59XHJcblxyXG5cclxuLyogIGRpYWxvZyBib3ggICovXHJcbi5tb2RhbC13aW5kb3cge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgb3BhY2l0eTogMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLm1vZGFsLXdpbmRvdzp0YXJnZXQge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuLm1vZGFsLXdpbmRvdyA+IGRpdiB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgcGFkZGluZzogMmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLm1vZGFsLXdpbmRvdyBoZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5tb2RhbC13aW5kb3cgaDEge1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxuICBtYXJnaW46IDAgMCAxNXB4O1xyXG59XHJcbi5tb2RhbC1jbG9zZSB7XHJcbiAgY29sb3I6ICNhYWE7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgZm9udC1zaXplOiA4MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5tb2RhbC1jbG9zZTpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi8qIERlbW8gU3R5bGVzICovXHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5ib2R5IHtcclxuICBmb250OiA2MDAgMTJweCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBPeHlnZW4tU2FucywgVWJ1bnR1LCBDYW50YXJlbGwsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM3ZjUzYWMgMCwgIzY1N2NlZCAxMDAlKTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuYSB7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLm1vZGFsLXdpbmRvdyBkaXY6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcbnNtYWxsIHtcclxuICBjb2xvcjogI2FhYTtcclxufVxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDFlbSAxLjVlbTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5idG4gaSB7XHJcbiAgcGFkZGluZy1yaWdodDogMC4zZW07XHJcbn1cclxuXHJcblxyXG4vKiAgIERyYWdnYWJsZSBkaXYgZm9yIHF1aWNrIG5vdGVzICovXHJcbiNhY2NvcmRpb257XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMTBweDtcclxuICB3aWR0aDogMjUlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICM2NzNhYjc7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm5vdGVze1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLyogICAqL1xyXG4jbXlkaXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XHJcbiBcclxufVxyXG5cclxuI215ZGl2aGVhZGVyIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICB6LWluZGV4OiAxMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiBhbmd1bGFyIG1hdGVyaWFsICovXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhhbmRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBjb2xvcjogI2NjYztcclxuICBjdXJzb3I6IG1vdmU7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/agent/status/active/active.component.html":
/*!***********************************************************!*\
  !*** ./src/app/agent/status/active/active.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"margin-top:0%\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <!-- <button (click)=\"customCall()\" id=\"btn\">Receive call btn</button> -->\r\n      <button (click)=\"OnCallReceive()\" id=\"btnOnCallReceive\" hidden>Call Pick Up</button>\r\n      <button (click)=\"OnCallReject()\" id=\"btn\" hidden>Reject Call</button>\r\n      <button (click)=\"openDialog()\" id=\"dialogBox\" hidden>Open DialogBox</button>\r\n      <button (click)=\"feedBack()\" id=\"feedBack\">FeedBack Dialog</button>\r\n      <button (click)=\"createEvent()\">Create Event Dialog</button>\r\n      <button (click)=\"hitCallDetail()\" id=\"callDetails\">HitCallDetailAPI</button>\r\n\r\n    </div>\r\n    <div class=\"col-sm-4\" style=\" color:white;margin-top:8%;\">\r\n      <!-- *ngIf=\"callBoolean\" -->\r\n      <div class=\"col\" style=\"display: grid;  justify-content: center;align-items: center;\" *ngIf=\"callBoolean\">\r\n        <h4 style=\"color:white\">Incomming:</h4>\r\n        <h4 style=\"color:white\">{{Number}}</h4><br>\r\n        <h3 style=\"color:white\"> {{ hours | number : '2.0-0' }} : {{ minutes | number : '2.0-0'}} :\r\n          {{seconds | number : '2.0-0'}}</h3>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <!-- <img src=\"../../../../assets/Hangup1.png\" style=\"height:100px; width: 100px\">  -->\r\n            Hangup\r\n          </div>\r\n          <div class=\"col\">\r\n            <!-- <img src=\"../../../../assets/Mic2.png\" style=\"height:100px; width: 100px\"> -->\r\n            Microphone\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-4\" style=\" color:white;margin-top:4%\">\r\n      <div class='app'>\r\n        <div class='app-calendar' *ngIf=\"calendarVisible\">\r\n          <full-calendar #calendar defaultView=\"dayGridMonth\" [header]=\"{\r\n                    left: 'prev,next today',\r\n                    center: 'title',\r\n                    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'\r\n                  }\" [plugins]=\"calendarPlugins\" [weekends]=\"calendarWeekends\" [events]=\"calendarEvents\"\r\n            (dateClick)=\"handleDateClick($event)\"></full-calendar>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- draggable div for notes-->\r\n  <div id=\"accordion\">\r\n    <div class=\"card notes\">\r\n      <div class=\"card-header\">\r\n        <a class=\"card-link\" data-toggle=\"collapse\" href=\"#collapseOne\">\r\n          Quick notes\r\n        </a>\r\n      </div>\r\n      <div id=\"collapseOne\" class=\"collapse\" data-parent=\"#accordion\">\r\n        <div class=\"card-body\" style=\"background-color: white;padding: 0.25rem;\">\r\n          <textarea style=\"height:300px;width:100%;position:relative\" [(ngModel)]=\"notes\" name=\"notes\"> </textarea>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n<input atp-time-picker (click)=\"open()\" value=\"19:00\" />\r\n<button (click)=\"getTalkTime()\" id=\"startTime\" hidden>Start Time</button>\r\n<button (click)=\"end()\" id=\"endTime\" hidden>End time</button>\r\n<button (click)=\"LogOut()\" id=\"logOut\">Logout Plivo</button>"

/***/ }),

/***/ "./src/app/agent/status/active/active.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/agent/status/active/active.component.ts ***!
  \*********************************************************/
/*! exports provided: ActiveComponent, FeedBackComponent, CreateEventComponent, CdkDragDropHandleExample, JpDraggableDialogDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveComponent", function() { return ActiveComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedBackComponent", function() { return FeedBackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEventComponent", function() { return CreateEventComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragDropHandleExample", function() { return CdkDragDropHandleExample; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JpDraggableDialogDirective", function() { return JpDraggableDialogDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs-compat/_esm5/add/observable/interval.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/agent/status/active/my-dialog/my-dialog.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/daygrid */ "./node_modules/@fullcalendar/daygrid/main.js");
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fullcalendar/timegrid */ "./node_modules/@fullcalendar/timegrid/main.js");
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fullcalendar/interaction */ "./node_modules/@fullcalendar/interaction/main.js");
/* harmony import */ var _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var amazing_time_picker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! amazing-time-picker */ "./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! plivo-browser-sdk */ "./node_modules/plivo-browser-sdk/dist/plivo.js");
/* harmony import */ var plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







//Dialog Box


//calendar



 // for dateClick
//Time Picker

//Plivo

//interval

//Routing

//Draggable code


var ActiveComponent = /** @class */ (function () {
    function ActiveComponent(router, http, dialog, service, atp, toastrService) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.dialog = dialog;
        this.service = service;
        this.atp = atp;
        this.toastrService = toastrService;
        this.callBoolean = false;
        this.calendarVisible = true;
        this.calendarPlugins = [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_10___default.a, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_11___default.a, _fullcalendar_interaction__WEBPACK_IMPORTED_MODULE_12___default.a];
        this.calendarWeekends = true;
        this.calendarEvents = [
        // { title: 'Avinash Bhalavi', start:  '2019-08-06' , end : '2019-08-07' }, 
        ];
        // Timer 
        this.hours = 0;
        this.seconds = 0;
        this.minutes = 0;
        this.router.events.subscribe(function (ev) {
            if (ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_16__["NavigationEnd"]) { /* Your code goes here on every router change */
                console.log(ev);
                if (localStorage.getItem('endpointID') && localStorage.getItem('csio_auth_data')) {
                    _this.LogOut();
                    localStorage.removeItem('endpointID');
                    localStorage.removeItem('csio_auth_data');
                    console.log('Plivo logout ...', ev.url);
                }
                else if (localStorage.getItem('PlivoLogin')) {
                    _this.LogOut();
                    console.log('else part for logout');
                }
                else {
                    console.log('2 nd else');
                }
            }
        });
        this.initPhone(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
        if (!localStorage.getItem('endpointID') && !localStorage.getItem('csio_auth_data')) {
            this.login(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
        }
        else {
            this.LogOut();
            this.login(localStorage.getItem("PlivoUserId"), localStorage.getItem("PlivoPassword"));
        }
        // this.login("shubham125559174721784","12345");
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var Ojb = {
            status: "active",
            currentstatus: "NotOnCall",
            sipendpoint: agentId
        };
        this.service.sendAgentStatus(Ojb).subscribe(function (data) {
            console.log(data);
        });
        //   setTimeout(() => {
        // this.onIncomingCall('1','2');
        // }, 15000);
    }
    ActiveComponent.prototype.ngOnInit = function () {
        var _this = this;
        var agentId = localStorage.getItem('PlivoUserId');
        agentId = agentId.concat('@phone.plivo.com');
        var data = { agentid: "" + agentId };
        this.service.getScheduledCallForAgent(data).subscribe(function (data) {
            console.log('scheduled calendar:', data);
            var CallSchedule = [];
            for (var i = 0; i < data['message']['length']; i++) {
                CallSchedule.push({
                    id: data['message'][i]['_id'],
                    title: data['message'][i]['customerMobNo'],
                    start: new Date(data['message'][i]['callBackStartTime']),
                    end: new Date(data['message'][i]['callBackEndTime']),
                });
            }
            _this.calendarEvents = CallSchedule;
        });
    };
    ActiveComponent.prototype.autoClick = function () {
        alert('auto Click');
    };
    // on reloading logout agnet from plivo
    ActiveComponent.prototype.unloadHandler = function (event) {
        // this.plivoWebSdk.client && this.plivoWebSdk.client.logout();
        // this.plivoWebSdk.client.logout();
        this.LogOut();
        console.log("Processing beforeunload...");
        // Do more processing...
        event.returnValue = false;
    };
    ActiveComponent.prototype.getTalkTime = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.seconds = 0;
                this.minutes = 0;
                this.hours = 0;
                this.sub = Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["interval"])(1000)
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
    ActiveComponent.prototype.end = function () {
        this.sub.unsubscribe();
    };
    //Calendar  
    ActiveComponent.prototype.toggleVisible = function () {
        this.calendarVisible = !this.calendarVisible;
    };
    ActiveComponent.prototype.toggleWeekends = function () {
        this.calendarWeekends = !this.calendarWeekends;
    };
    ActiveComponent.prototype.gotoPast = function () {
        var calendarApi = this.calendarComponent.getApi();
        calendarApi.gotoDate('2019-07-12'); // call a method on the Calendar object
    };
    ActiveComponent.prototype.handleDateClick = function (arg) {
        this.createEvent(arg.dateStr);
        // if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
        //   this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        //     title: 'New Event',
        //     start: arg.date,
        //     allDay: arg.allDay
        //   })
        // }
    };
    //TimePicker function
    ActiveComponent.prototype.open = function () {
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe(function (time) {
            console.log('time:', time);
        });
    };
    //Plivo Code
    //initialize Plivo
    ActiveComponent.prototype.initPhone = function (username, password) {
        var options = {
            "debug": "DEBUG",
            "permOnClick": true,
            "audioConstraints": { "optional": [{ "googAutoGainControl": false }, { "googEchoCancellation": false }] },
            "enableTracking": true
        };
        this.plivoWebSdk = new plivo_browser_sdk__WEBPACK_IMPORTED_MODULE_14___default.a(options);
        // this.plivoWebSdk.client.on('onWebrtcNotSupported', this.onWebrtcNotSupported);
        this.plivoWebSdk.client.on('onLogin', this.onLogin); // msg not showing //this function gets called when user successfully login/ login failed
        this.plivoWebSdk.client.on('onLogout', this.onLogout); // plivo method not working
        //  this.plivoWebSdk.client.on('onLoginFailed', this.onLoginFailed);
        this.plivoWebSdk.client.on('onCallRemoteRinging', this.onCallRemoteRinging);
        this.plivoWebSdk.client.on('onIncomingCallCanceled', this.onIncomingCallCanceled);
        //  this.plivoWebSdk.client.on('onCallFailed', this.onCallFailed);
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
    ActiveComponent.prototype.login = function (username, password) {
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
    ActiveComponent.prototype.onLogin = function () {
        // alert('successfully login');
        console.log('login successfully');
        localStorage.setItem('PlivoLogin', 'true');
    };
    ActiveComponent.prototype.LogOut = function () {
        //alert('LogOut');
        this.plivoWebSdk.client.logout();
        console.log('logOut function called');
    };
    ActiveComponent.prototype.onLogout = function () {
        //alert('successfully log Out');
        console.log('successfully log Out');
        localStorage.removeItem('PlivoLogin');
        localStorage.removeItem('endpointID');
        localStorage.removeItem('csio_auth_data');
    };
    ActiveComponent.prototype.OnCallReceive = function () {
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
    ActiveComponent.prototype.OnCallReject = function () {
        alert(' call Reject');
        this.plivoWebSdk.client.reject();
    };
    ActiveComponent.prototype.onIncomingCall = function (callerName, extraHeaders) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var str;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                str = callerName;
                str = str.split("@");
                console.log('splitMethod:', str[0]);
                this.callerNumber = this.Call = str[0];
                this.Number = str[0];
                console.log('Call', this.Call);
                console.log(callerName, extraHeaders);
                this.callerName = extraHeaders['X-Ph-Test'];
                localStorage.setItem('Name', this.callerName);
                localStorage.setItem('Number', this.callerNumber);
                console.log('callerName: ', this.callerName);
                $('#btnOnCallReceive').click();
                return [2 /*return*/];
            });
        });
    };
    ActiveComponent.prototype.HangUp = function () {
        //debugger
        if (this.plivoWebSdk.client.callSession) {
            console.log('call hangup');
            this.plivoWebSdk.client.hangup();
        }
        else {
            // callOff();
            alert('no call to HangUp');
        }
    };
    ActiveComponent.prototype.onIncomingCallCanceled = function () {
        //alert('call cancellec');
        console.log('call cancelled ...');
        $('#endTime').click();
        this.callBoolean = false;
        //this.hours = this.minutes = this.seconds = 0;
    };
    // onCallFailed(){
    //   alert('call Failed function');
    //   console.log('call failed function');
    // }
    ActiveComponent.prototype.onCallTerminated = function (hangupInfo, callInfo) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // alert('call terminated');
                $('#endTime').click();
                console.log('call terminated function hangupInfo:', hangupInfo, 'callInfo:', callInfo);
                //await delay(6000);
                this.callBoolean = false;
                // $('#callDetails').click();
                setTimeout(function () {
                    $('#callDetails').click();
                }, 4000);
                return [2 /*return*/];
            });
        });
    };
    ActiveComponent.prototype.hitCallDetail = function () {
        var _this = this;
        debugger;
        this.uuidObject = { uuid: localStorage.getItem('uuid') };
        console.log('sending obj: ', this.uuidObject);
        this.service.getCallDetails(this.uuidObject).subscribe(function (data) {
            console.log('res:', data);
            if (data['success'] == true) {
                var callDuration = data['message'][0]['callDurationwithCustomer'];
                if (data['message'][0]['isCallPIckedUp'] === "normal_clearing") {
                    _this.feedBack(callDuration);
                }
                // else if()
            }
        });
        //  localStorage.removeItem('uuid');
    };
    ActiveComponent.prototype.onCallAnswered = function () {
        // alert('call req to server');
        console.log('call req to server');
    };
    ActiveComponent.prototype.onCalling = function () {
        //alert('on calling');
        console.log('on calling func');
    };
    ActiveComponent.prototype.onCallRemoteRinging = function () {
        //alert('remote ringing');
        $('#startTime').click();
        this.callBoolean = true;
        console.log('remote ringing');
    };
    ActiveComponent.prototype.onMediaConnected = function (UUID) {
        //debugger;
        this.CallUUID = UUID['callUUID'];
        localStorage.setItem('uuid', UUID['callUUID']);
        console.log('media connected', UUID);
        //  this.callerName = UUID['extraHeaders']['X-Ph-Test'];
        //  this.callerNumber = UUID['src'];
        console.log('uuid: ', this.CallUUID);
    };
    ActiveComponent.prototype.onMediaPermission = function () {
        console.log('media permission');
    };
    //Dialog function
    ActiveComponent.prototype.openDialog = function () {
        // debugger;
        console.log(this.Call);
        var dialogRef = this.dialog.open(_my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_8__["MyDialogComponent"], {
            width: '550px',
            data: { number: localStorage.getItem('Number'), name: localStorage.getItem('Name') },
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(result);
        });
    };
    ActiveComponent.prototype.feedBack = function (callDuration) {
        var _this = this;
        var dialogRef = this.dialog.open(FeedBackComponent, {
            width: '650px',
            data: { name: localStorage.getItem('Name'), number: localStorage.getItem('Number'), duration: callDuration, notes: this.notes }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed', result);
            // this.animal = result;
            if (result) {
                _this.calendarEvents = _this.calendarEvents.concat({
                    title: result['name'],
                    start: result['startdate'],
                    allDay: true
                });
            }
            result['DialALegUUID'] = localStorage.getItem('uuid');
            result['isCustomerInterseted'] = "Yes";
            result['descrptionOnCall'] = result['desc'];
            result['callBackStartTime'] = new Date(result['startdate']).getTime();
            result['callBackEndTime'] = new Date(result['startdate']).getTime();
            result['customerMobNo'] = result['number'];
            result['customerName'] = result['name'];
            result['sip'] = "random";
            _this.service.sendCustomerFeedback(result).subscribe(function (data) {
                console.log(data);
                if (data['success'] == 'true') {
                    _this.showToaster();
                }
                localStorage.removeItem('uuid');
            });
        });
    };
    ActiveComponent.prototype.createEvent = function (date) {
        var _this = this;
        var dialogRef = this.dialog.open(CreateEventComponent, {
            width: '650px',
            data: { name: 'Jone Doe', number: '9090876543' },
            disableClose: true
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != undefined) {
                // this.animal = result;
                _this.calendarEvents = _this.calendarEvents.concat({
                    title: result.title,
                    start: result.date,
                    allDay: result.notes
                });
            }
            else {
                console.log('No thanks button clicked');
            }
        });
    };
    //notification
    ActiveComponent.prototype.showToaster = function () {
        this.toastrService.success('Feedback Saved Successfully');
    };
    ActiveComponent.prototype.ErrorSuccess = function () {
        this.toastrService.error('Failed: Unable to Save Campaign');
    };
    ActiveComponent.prototype.infoSuccess = function () {
        this.toastrService.info('info msg', 'Info!');
    };
    ActiveComponent.prototype.warningSuccess = function () {
        this.toastrService.warning('this is warning');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('calendar'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_9__["FullCalendarComponent"])
    ], ActiveComponent.prototype, "calendarComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:beforeunload", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ActiveComponent.prototype, "unloadHandler", null);
    ActiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-active',
            template: __webpack_require__(/*! ./active.component.html */ "./src/app/agent/status/active/active.component.html"),
            styles: [__webpack_require__(/*! ./active.component.css */ "./src/app/agent/status/active/active.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_4__["AutoDialService"], amazing_time_picker__WEBPACK_IMPORTED_MODULE_13__["AmazingTimePickerService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ActiveComponent);
    return ActiveComponent;
}());

//Dialog Box
//dialog box 2
var FeedBackComponent = /** @class */ (function () {
    function FeedBackComponent(atp, dialogRef, data) {
        this.atp = atp;
        this.dialogRef = dialogRef;
        this.data = data;
        this.Agent = [
            { value: 0, name: "Deal done" },
            { value: 1, name: "Introduction calls" },
            { value: 2, name: "Follow up calls" },
            { value: 3, name: "Deal done" },
            { value: 4, name: "Callback" },
            { value: 5, name: "Voicemail" },
            { value: 6, name: "Blacklist" },
            { value: 7, name: "Number does not match" },
            { value: 8, name: "Underage" },
            { value: 9, name: "Duplicate" },
        ];
        console.log('feedback details', data.name, data.number);
        this.callerName = data.name;
        this.callerNumber = data.number;
        this.duration = data.duration;
        this.notes = data.notes;
    }
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
    //select feedback list
    FeedBackComponent.prototype.onChange = function () {
        if (this.selectedValue === 4) {
            this.select = true;
        }
        else {
            this.select = false;
        }
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
            template: __webpack_require__(/*! ./feedback.html */ "./src/app/agent/status/active/feedback.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [amazing_time_picker__WEBPACK_IMPORTED_MODULE_13__["AmazingTimePickerService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object])
    ], FeedBackComponent);
    return FeedBackComponent;
}());

//Draggable Dialog code
var CreateEventComponent = /** @class */ (function () {
    function CreateEventComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CreateEventComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateEventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'createEvent-dialog',
            template: __webpack_require__(/*! ./createEvent.html */ "./src/app/agent/status/active/createEvent.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogRef"], Object])
    ], CreateEventComponent);
    return CreateEventComponent;
}());

// notes div
var CdkDragDropHandleExample = /** @class */ (function () {
    function CdkDragDropHandleExample() {
    }
    CdkDragDropHandleExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-drag-drop-handle-example',
            template: __webpack_require__(/*! ./cdk-drag-drop-handle-example.html */ "./src/app/agent/status/active/cdk-drag-drop-handle-example.html"),
        })
    ], CdkDragDropHandleExample);
    return CdkDragDropHandleExample;
}());

//Dragabble code
var JpDraggableDialogDirective = /** @class */ (function () {
    function JpDraggableDialogDirective(_elementRef, _zone, _cd) {
        this._elementRef = _elementRef;
        this._zone = _zone;
        this._cd = _cd;
        this._delta = { x: 0, y: 0 };
        this._offset = { x: 0, y: 0 };
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__["Subject"]();
        this._isResized = false;
    }
    JpDraggableDialogDirective.prototype.ngOnInit = function () {
        this._elementRef.nativeElement.style.cursor = 'default';
        this._handle = this._elementRef.nativeElement.parentElement.parentElement.parentElement;
        this._target = this._elementRef.nativeElement.parentElement.parentElement.parentElement;
        this._container = this._elementRef.nativeElement.parentElement.parentElement;
        this._container.style.resize = 'both';
        this._container.style.overflow = 'hidden';
        this._setupEvents();
    };
    JpDraggableDialogDirective.prototype.ngOnDestroy = function () {
        if (!!this._destroy$ && !this._destroy$.closed) {
            this._destroy$.next();
            this._destroy$.complete();
        }
    };
    JpDraggableDialogDirective.prototype._setupEvents = function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            var mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["fromEvent"])(_this._handle, 'mousedown');
            var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["fromEvent"])(document, 'mousemove');
            var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["fromEvent"])(document, 'mouseup');
            var mousedrag$ = mousedown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (event) {
                var startX = event.clientX;
                var startY = event.clientY;
                var rectX = _this._container.getBoundingClientRect();
                if (
                // if the user is clicking on the bottom-right corner, he will resize the dialog
                startY > rectX.bottom - 15 &&
                    startY <= rectX.bottom &&
                    startX > rectX.right - 15 &&
                    startX <= rectX.right) {
                    _this._isResized = true;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_15__["of"])(null);
                }
                return mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (innerEvent) {
                    innerEvent.preventDefault();
                    _this._delta = {
                        x: innerEvent.clientX - startX,
                        y: innerEvent.clientY - startY,
                    };
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(mouseup$));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this._destroy$));
            mousedrag$.subscribe(function () {
                if (_this._delta.x === 0 && _this._delta.y === 0) {
                    return;
                }
                _this._translate();
            });
            mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this._destroy$)).subscribe(function () {
                if (_this._isResized) {
                    _this._handle.style.width = 'auto';
                }
                _this._offset.x += _this._delta.x;
                _this._offset.y += _this._delta.y;
                _this._delta = { x: 0, y: 0 };
                _this._cd.markForCheck();
            });
        });
    };
    JpDraggableDialogDirective.prototype._translate = function () {
        var _this = this;
        // this._target.style.left = `${this._offset.x + this._delta.x}px`;
        // this._target.style.top = `${this._offset.y + this._delta.y}px`;
        // this._target.style.position = 'relative';
        requestAnimationFrame(function () {
            _this._target.style.transform = "\n        translate(" + (_this._offset.x + _this._delta.x) + "px,\n                  " + (_this._offset.y + _this._delta.y) + "px)\n      ";
        });
    };
    JpDraggableDialogDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appJpDraggableDialog]',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], JpDraggableDialogDirective);
    return JpDraggableDialogDirective;
}());



/***/ }),

/***/ "./src/app/agent/status/active/active.module.ts":
/*!******************************************************!*\
  !*** ./src/app/agent/status/active/active.module.ts ***!
  \******************************************************/
/*! exports provided: ActiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveModule", function() { return ActiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _active_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./active-routing.module */ "./src/app/agent/status/active/active-routing.module.ts");
/* harmony import */ var _active_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./active.component */ "./src/app/agent/status/active/active.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _my_dialog_my_dialog_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./my-dialog/my-dialog.module */ "./src/app/agent/status/active/my-dialog/my-dialog.module.ts");
/* harmony import */ var _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./my-dialog/my-dialog.component */ "./src/app/agent/status/active/my-dialog/my-dialog.component.ts");
/* harmony import */ var _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fullcalendar/angular */ "./node_modules/@fullcalendar/angular/fesm5/fullcalendar-angular.js");







//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//dialog box


//for calendar
 //For Calendar
var ActiveModule = /** @class */ (function () {
    function ActiveModule() {
    }
    ActiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                // BrowserAnimationsModule,
                _my_dialog_my_dialog_module__WEBPACK_IMPORTED_MODULE_8__["MyDialogModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _active_routing_module__WEBPACK_IMPORTED_MODULE_4__["ActiveRoutingModule"],
                _fullcalendar_angular__WEBPACK_IMPORTED_MODULE_10__["FullCalendarModule"]
            ],
            entryComponents: [
                _my_dialog_my_dialog_component__WEBPACK_IMPORTED_MODULE_9__["MyDialogComponent"],
                _active_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"],
                _active_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"]
            ],
            declarations: [_active_component__WEBPACK_IMPORTED_MODULE_5__["ActiveComponent"], _active_component__WEBPACK_IMPORTED_MODULE_5__["FeedBackComponent"], _active_component__WEBPACK_IMPORTED_MODULE_5__["CreateEventComponent"]]
        })
    ], ActiveModule);
    return ActiveModule;
}());



/***/ }),

/***/ "./src/app/agent/status/active/cdk-drag-drop-handle-example.html":
/*!***********************************************************************!*\
  !*** ./src/app/agent/status/active/cdk-drag-drop-handle-example.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-box\" cdkDrag>\r\n\r\n    <textarea style=\"width:100%; height:100%\"></textarea>\r\n    <div class=\"example-handle\" cdkDragHandle>\r\n      <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\r\n        <path d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\"></path>\r\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\r\n      </svg>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/agent/status/active/createEvent.html":
/*!******************************************************!*\
  !*** ./src/app/agent/status/active/createEvent.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title style=\"text-align: center\">Schedule Call</h2>\r\n\r\n<mat-dialog-content>\r\n        <div class=\"row\">\r\n                <div class=\"col\" style=\"margin-left:5%\">\r\n                        <mat-form-field>\r\n                                <mat-label>Caller Name</mat-label>\r\n                                <input  matInput  placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.name\" name=\"name\" [value]=\"\" required>                      \r\n                       </mat-form-field><br>\r\n                       <mat-form-field >\r\n                            <mat-label>CallBack Date</mat-label>\r\n                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data.startdate\"  name=\"startdate\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>   \r\n                    </mat-form-field>                  \r\n                </div>\r\n                <div class=\"col\">\r\n                       \r\n                        <mat-form-field>\r\n                            <mat-label>Caller Number</mat-label>\r\n                            <input  matInput  placeholder=\"Caller Number\" style=\"max-width: 100px\" [(ngModel)]=\"data.number\" name=\"number\" [value]=\"\" required>\r\n                                <!-- <mat-label>Customer Interested</mat-label>\r\n                                 <mat-select [(ngModel)]=\"select\">\r\n                                        <mat-option  [value]=\"0\"> No </mat-option>\r\n                                        <mat-option  [value]=\"1\"> Yes </mat-option>\r\n                                 </mat-select> -->\r\n                       </mat-form-field>\r\n                        <mat-form-field *ngIf=\"select\">\r\n                                <mat-label>Add Note</mat-label>                          \r\n                                <textarea matInput  cdkTextareaAutosize  #autosize=\"cdkTextareaAutosize\" \r\n                                placeholder=\"Customer Interest\" style=\"max-width: 300px\" [(ngModel)]=\"data.desc\" name=\"desc\" [value]=\"\" required></textarea>\r\n                                <!-- cdkAutosizeMinRows=\"1\"  cdkAutosizeMaxRows=\"5\" -->\r\n                            </mat-form-field>\r\n                </div>\r\n              </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\r\n\r\n    <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:100px\">No Thanks</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:100px\">Ok</button>\r\n</mat-dialog-actions>\r\n\r\n<!-- <h1 mat-dialog-title appJpDraggableDialog>Add Event</h1>\r\n<div mat-dialog-content>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.title\" placeholder=\"Title\"><br>\r\n  </mat-form-field><br>\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"data.notes\" placeholder=\"Comments\">\r\n  </mat-form-field>\r\n  \r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button>\r\n</div> -->"

/***/ }),

/***/ "./src/app/agent/status/active/feedback.html":
/*!***************************************************!*\
  !*** ./src/app/agent/status/active/feedback.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<h2 mat-dialog-title style=\"text-align: center\">FeedBack</h2>\r\n\r\n<mat-dialog-content style=\"justify-content: center;\">\r\n                <div >\r\n                <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <label>Caller Name :</label>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <p> {{callerName}} </p>\r\n                                 \r\n                                </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <label>Caller Number :</label>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <p> {{callerNumber}} </p>\r\n                                </div>\r\n                </div>\r\n                <!-- <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <label>Call Star Time :</label>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <p> 2019-07-25 11:13:43 </p>\r\n                                </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <label>Call End Time :</label>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <p> 2019-07-25 11:13:54 </p>\r\n                                </div>\r\n                </div> -->\r\n                <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                    <label>Duration of call :</label>\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <p> {{duration}} </p>\r\n                                </div>\r\n                </div><br />\r\n        </div>\r\n        <div class=\"row\">\r\n               \r\n                <div class=\"col\" style=\"margin-left:5%\">\r\n                        <mat-form-field>\r\n                                <mat-label>Caller Name</mat-label>\r\n                                <input  matInput  placeholder=\"Caller Name\" style=\"max-width: 100px\" [(ngModel)]=\"data.name\" name=\"name\" [value]=\"\" required>   \r\n                                                   \r\n                       </mat-form-field><br>\r\n                       <mat-form-field *ngIf=\"select\">\r\n                            <mat-label>CallBack Date</mat-label>\r\n                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"data.startdate\"  name=\"startdate\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\" (click)=\"selectDate(startdate)\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>   \r\n                    </mat-form-field>     \r\n                    <mat-form-field *ngIf=\"select\">\r\n                        <mat-label>Start Time</mat-label>\r\n                        <input matInput atp-time-picker placeholder=\"Choose start Time\" (click)=\"startTime()\" name=\"callBackStartTime\" [(ngModel)]=\"data.callBackStartTime\" [value]=\"callBackStartTime\">  \r\n                        <!-- <input [owlDateTimeTrigger]=\"dt4\" [owlDateTime]=\"dt4\" >\r\n                        <owl-date-time [pickerType]=\"'timer'\" #dt4></owl-date-time>                                        -->\r\n                </mat-form-field>               \r\n                </div>\r\n                <div class=\"col\">\r\n                        <mat-form-field>\r\n                                <mat-label>Customer Interested</mat-label>\r\n                                 <!-- <mat-select [(ngModel)]=\"select\">\r\n                                        <mat-option  [value]=\"0\"> No </mat-option>\r\n                                        <mat-option  [value]=\"1\"> Yes </mat-option>\r\n                                 </mat-select> -->\r\n                                 <mat-select [(ngModel)]=\"selectedValue\" name=\"food\" (ngModelChange)=\"onChange($event)\">\r\n                                    <mat-option *ngFor=\"let item of Agent\" [value]=\"item.value\">\r\n                                      {{item.name}}\r\n                                    </mat-option>\r\n                                  </mat-select>\r\n                       </mat-form-field>\r\n                        <mat-form-field *ngIf=\"select\">\r\n                                <mat-label>Add Description</mat-label>\r\n                                <!-- <textarea  matInput  placeholder=\"Customer Interest\" style=\"max-width: 100px\" [(ngModel)]=\"data.desc\" name=\"desc\" [value]=\"\" required>    </textarea>                   -->\r\n                                <!-- <mat-icon>edit</mat-icon> -->\r\n                                <textarea matInput  cdkTextareaAutosize  #autosize=\"cdkTextareaAutosize\" \r\n                                placeholder=\"Customer Interest\" style=\"max-width: 300px\" [(ngModel)]=\"data.notes\" name=\"notes\" [value]=\"\" required></textarea>\r\n                                <!-- cdkAutosizeMinRows=\"1\"  cdkAutosizeMaxRows=\"5\" -->\r\n                            </mat-form-field>\r\n                            <mat-form-field *ngIf=\"select\">\r\n                                <mat-label>End Time</mat-label>\r\n                                <input matInput atp-time-picker placeholder=\"Choose end Time\" (click)=\"endTime()\" name=\"callBackEndTime\" [(ngModel)]=\"data.callBackEndTime\" [value]=\"callBackEndTime\">                                         \r\n                                <!-- <input [owlDateTimeTrigger]=\"dt5\" [owlDateTime]=\"dt5\"  matInput atp-time-picker placeholder=\"Choose end Time\" (click)=\"endTime()\" name=\"callBackEndTime\" [(ngModel)]=\"data.callBackEndTime\" [value]=\"callBackEndTime\">\r\n                                <owl-date-time [pickerType]=\"'timer'\" #dt4></owl-date-time> -->\r\n                            </mat-form-field> \r\n                                \r\n                </div>\r\n              </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions style=\"text-align:center;display: flex;justify-content: center;\">\r\n    <!-- <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial>Ok</button> -->\r\n    <!-- <button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\r\n    <button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Save</button> -->\r\n    <!-- <button mat-button (click)=\"onNoClick()\" class=\"mat-raised-button\" style=\"width:100px\">No Thanks</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->\r\n    <button mat-button [mat-dialog-close]=\"data\" cdkFocusInitial class=\"mat-raised-button mat-primary\" style=\"width:100px\">Ok</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/agent/status/active/my-dialog/my-dialog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/agent/status/active/my-dialog/my-dialog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.card {\r\n    text-align:center;\r\n    opacity:0.9;\r\n  }\r\n  \r\n/*phone ringing*/\r\n  \r\n.Phone {\r\n    position: relative;\r\n    display: block;\r\n    margin: 0;\r\n    width: 1em;\r\n    height: 1em;\r\n    font-size: 25vmin;\r\n    background-color: #673ab7;\r\n    border-radius: 0.5em;\r\n    box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\r\n    -webkit-transform: translate3d(0, 0, 0) scale(1);\r\n            transform: translate3d(0, 0, 0) scale(1);\r\n  }\r\n  \r\n.Phone::before, .Phone::after {\r\n    position: absolute;\r\n    content: \"\";\r\n  }\r\n  \r\n.Phone::before {\r\n    top: 0;\r\n    left: 0;\r\n    width: 1em;\r\n    height: 1em;\r\n    background-color: rgba(255, 255, 255, 0.1);\r\n    border-radius: 100%;\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0) scale(0);\r\n            transform: translate3d(0, 0, 0) scale(0);\r\n  }\r\n  \r\n.Phone::after {\r\n    top: 0.25em;\r\n    left: 0.25em;\r\n    width: 0.5em;\r\n    height: 0.5em;\r\n    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTYuNiAxMC44YzEuNCAyLjggMy44IDUuMSA2LjYgNi42bDIuMi0yLjJjLjMtLjMuNy0uNCAxLS4yIDEuMS40IDIuMy42IDMuNi42LjUgMCAxIC40IDEgMVYyMGMwIC41LS41IDEtMSAxLTkuNCAwLTE3LTcuNi0xNy0xNyAwLS42LjQtMSAxLTFoMy41Yy41IDAgMSAuNCAxIDEgMCAxLjIuMiAyLjUuNiAzLjYuMS40IDAgLjctLjIgMWwtMi4zIDIuMnoiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=);\r\n    background-position: 50% 50%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n  \r\n.Phone.is-animating {\r\n    -webkit-animation: phone-outer 3000ms infinite;\r\n            animation: phone-outer 3000ms infinite;\r\n  }\r\n  \r\n.Phone.is-animating::before {\r\n    -webkit-animation: phone-inner 3000ms infinite;\r\n            animation: phone-inner 3000ms infinite;\r\n  }\r\n  \r\n.Phone.is-animating::after {\r\n    -webkit-animation: phone-icon 3000ms infinite;\r\n            animation: phone-icon 3000ms infinite;\r\n  }\r\n  \r\n@-webkit-keyframes phone-outer {\r\n    0% {\r\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\r\n              transform: translate3d(0, 0, 0) scale(1);\r\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\r\n    }\r\n    33.3333% {\r\n      -webkit-transform: translate3d(0, 0, 0) scale(1.1);\r\n              transform: translate3d(0, 0, 0) scale(1.1);\r\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0.1), 0em 0.05em 0.1em rgba(0, 0, 0, 0.5);\r\n    }\r\n    66.6666% {\r\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\r\n              transform: translate3d(0, 0, 0) scale(1);\r\n      box-shadow: 0 0 0 0.5em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\r\n    }\r\n    100% {\r\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\r\n              transform: translate3d(0, 0, 0) scale(1);\r\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\r\n    }\r\n  }\r\n  \r\n@keyframes phone-outer {\r\n    0% {\r\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\r\n              transform: translate3d(0, 0, 0) scale(1);\r\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\r\n    }\r\n    33.3333% {\r\n      -webkit-transform: translate3d(0, 0, 0) scale(1.1);\r\n              transform: translate3d(0, 0, 0) scale(1.1);\r\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0.1), 0em 0.05em 0.1em rgba(0, 0, 0, 0.5);\r\n    }\r\n    66.6666% {\r\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\r\n              transform: translate3d(0, 0, 0) scale(1);\r\n      box-shadow: 0 0 0 0.5em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\r\n    }\r\n    100% {\r\n      -webkit-transform: translate3d(0, 0, 0) scale(1);\r\n              transform: translate3d(0, 0, 0) scale(1);\r\n      box-shadow: 0 0 0 0em rgba(52, 152, 219, 0), 0em 0.05em 0.1em rgba(0, 0, 0, 0.2);\r\n    }\r\n  }\r\n  \r\n@-webkit-keyframes phone-inner {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\r\n              transform: translate3d(0, 0, 0) scale(0);\r\n    }\r\n    33.3333% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0, 0, 0) scale(0.9);\r\n              transform: translate3d(0, 0, 0) scale(0.9);\r\n    }\r\n    66.6666% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\r\n              transform: translate3d(0, 0, 0) scale(0);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\r\n              transform: translate3d(0, 0, 0) scale(0);\r\n    }\r\n  }\r\n  \r\n@keyframes phone-inner {\r\n    0% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\r\n              transform: translate3d(0, 0, 0) scale(0);\r\n    }\r\n    33.3333% {\r\n      opacity: 1;\r\n      -webkit-transform: translate3d(0, 0, 0) scale(0.9);\r\n              transform: translate3d(0, 0, 0) scale(0.9);\r\n    }\r\n    66.6666% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\r\n              transform: translate3d(0, 0, 0) scale(0);\r\n    }\r\n    100% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, 0, 0) scale(0);\r\n              transform: translate3d(0, 0, 0) scale(0);\r\n    }\r\n  }\r\n  \r\n@-webkit-keyframes phone-icon {\r\n    0% {\r\n      -webkit-transform: translate3d(0em, 0, 0);\r\n              transform: translate3d(0em, 0, 0);\r\n    }\r\n    2% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    4% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    6% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    8% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    10% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    12% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    14% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    16% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    18% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    20% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    22% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    24% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    26% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    28% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    30% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    32% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    34% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    36% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    38% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    40% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    42% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    44% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    46% {\r\n      -webkit-transform: translate3d(0em, 0, 0);\r\n              transform: translate3d(0em, 0, 0);\r\n    }\r\n  }\r\n  \r\n@keyframes phone-icon {\r\n    0% {\r\n      -webkit-transform: translate3d(0em, 0, 0);\r\n              transform: translate3d(0em, 0, 0);\r\n    }\r\n    2% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    4% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    6% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    8% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    10% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    12% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    14% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    16% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    18% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    20% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    22% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    24% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    26% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    28% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    30% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    32% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    34% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    36% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    38% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    40% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    42% {\r\n      -webkit-transform: translate3d(0.01em, 0, 0);\r\n              transform: translate3d(0.01em, 0, 0);\r\n    }\r\n    44% {\r\n      -webkit-transform: translate3d(-0.01em, 0, 0);\r\n              transform: translate3d(-0.01em, 0, 0);\r\n    }\r\n    46% {\r\n      -webkit-transform: translate3d(0em, 0, 0);\r\n              transform: translate3d(0em, 0, 0);\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvc3RhdHVzL2FjdGl2ZS9teS1kaWFsb2cvbXktZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0VBQ2I7O0FBRUYsZ0JBQWdCOztBQUNoQjtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZ0ZBQWdGO0lBQ2hGLGdEQUF3QztZQUF4Qyx3Q0FBd0M7RUFDMUM7O0FBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiOztBQUNBO0lBQ0UsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1YsV0FBVztJQUNYLDBDQUEwQztJQUMxQyxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGdEQUF3QztZQUF4Qyx3Q0FBd0M7RUFDMUM7O0FBQ0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsK2FBQSthO0lBQy9hLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLHVDQUErQjtZQUEvQiwrQkFBK0I7RUFDakM7O0FBQ0E7SUFDRSw4Q0FBc0M7WUFBdEMsc0NBQXNDO0VBQ3hDOztBQUNBO0lBQ0UsOENBQXNDO1lBQXRDLHNDQUFzQztFQUN4Qzs7QUFDQTtJQUNFLDZDQUFxQztZQUFyQyxxQ0FBcUM7RUFDdkM7O0FBQ0E7SUFDRTtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7TUFDeEMsZ0ZBQWdGO0lBQ2xGO0lBQ0E7TUFDRSxrREFBMEM7Y0FBMUMsMENBQTBDO01BQzFDLGtGQUFrRjtJQUNwRjtJQUNBO01BQ0UsZ0RBQXdDO2NBQXhDLHdDQUF3QztNQUN4QyxrRkFBa0Y7SUFDcEY7SUFDQTtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7TUFDeEMsZ0ZBQWdGO0lBQ2xGO0VBQ0Y7O0FBakJBO0lBQ0U7TUFDRSxnREFBd0M7Y0FBeEMsd0NBQXdDO01BQ3hDLGdGQUFnRjtJQUNsRjtJQUNBO01BQ0Usa0RBQTBDO2NBQTFDLDBDQUEwQztNQUMxQyxrRkFBa0Y7SUFDcEY7SUFDQTtNQUNFLGdEQUF3QztjQUF4Qyx3Q0FBd0M7TUFDeEMsa0ZBQWtGO0lBQ3BGO0lBQ0E7TUFDRSxnREFBd0M7Y0FBeEMsd0NBQXdDO01BQ3hDLGdGQUFnRjtJQUNsRjtFQUNGOztBQUNBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsZ0RBQXdDO2NBQXhDLHdDQUF3QztJQUMxQztJQUNBO01BQ0UsVUFBVTtNQUNWLGtEQUEwQztjQUExQywwQ0FBMEM7SUFDNUM7SUFDQTtNQUNFLFVBQVU7TUFDVixnREFBd0M7Y0FBeEMsd0NBQXdDO0lBQzFDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsZ0RBQXdDO2NBQXhDLHdDQUF3QztJQUMxQztFQUNGOztBQWpCQTtJQUNFO01BQ0UsVUFBVTtNQUNWLGdEQUF3QztjQUF4Qyx3Q0FBd0M7SUFDMUM7SUFDQTtNQUNFLFVBQVU7TUFDVixrREFBMEM7Y0FBMUMsMENBQTBDO0lBQzVDO0lBQ0E7TUFDRSxVQUFVO01BQ1YsZ0RBQXdDO2NBQXhDLHdDQUF3QztJQUMxQztJQUNBO01BQ0UsVUFBVTtNQUNWLGdEQUF3QztjQUF4Qyx3Q0FBd0M7SUFDMUM7RUFDRjs7QUFDQTtJQUNFO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQztFQUNGOztBQXpFQTtJQUNFO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UsNENBQW9DO2NBQXBDLG9DQUFvQztJQUN0QztJQUNBO01BQ0UsNkNBQXFDO2NBQXJDLHFDQUFxQztJQUN2QztJQUNBO01BQ0UseUNBQWlDO2NBQWpDLGlDQUFpQztJQUNuQztFQUNGIiwiZmlsZSI6InNyYy9hcHAvYWdlbnQvc3RhdHVzL2FjdGl2ZS9teS1kaWFsb2cvbXktZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5jYXJkIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgb3BhY2l0eTowLjk7XHJcbiAgfVxyXG4gIFxyXG4vKnBob25lIHJpbmdpbmcqL1xyXG4uUGhvbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICBmb250LXNpemU6IDI1dm1pbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDBlbSByZ2JhKDUyLCAxNTIsIDIxOSwgMCksIDBlbSAwLjA1ZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcclxuICB9XHJcbiAgLlBob25lOjpiZWZvcmUsIC5QaG9uZTo6YWZ0ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICB9XHJcbiAgLlBob25lOjpiZWZvcmUge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBoZWlnaHQ6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwKTtcclxuICB9XHJcbiAgLlBob25lOjphZnRlciB7XHJcbiAgICB0b3A6IDAuMjVlbTtcclxuICAgIGxlZnQ6IDAuMjVlbTtcclxuICAgIHdpZHRoOiAwLjVlbTtcclxuICAgIGhlaWdodDogMC41ZW07XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQXlOQ0F5TkNJK1BIQmhkR2dnWkQwaVRUWXVOaUF4TUM0NFl6RXVOQ0F5TGpnZ015NDRJRFV1TVNBMkxqWWdOaTQyYkRJdU1pMHlMakpqTGpNdExqTXVOeTB1TkNBeExTNHlJREV1TVM0MElESXVNeTQySURNdU5pNDJMalVnTUNBeElDNDBJREVnTVZZeU1HTXdJQzQxTFM0MUlERXRNU0F4TFRrdU5DQXdMVEUzTFRjdU5pMHhOeTB4TnlBd0xTNDJMalF0TVNBeExURm9NeTQxWXk0MUlEQWdNU0F1TkNBeElERWdNQ0F4TGpJdU1pQXlMalV1TmlBekxqWXVNUzQwSURBZ0xqY3RMaklnTVd3dE1pNHpJREl1TW5vaUlHWnBiR3c5SWlObVptWm1abVlpTHo0OEwzTjJaejQ9KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XHJcbiAgfVxyXG4gIC5QaG9uZS5pcy1hbmltYXRpbmcge1xyXG4gICAgYW5pbWF0aW9uOiBwaG9uZS1vdXRlciAzMDAwbXMgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5QaG9uZS5pcy1hbmltYXRpbmc6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IHBob25lLWlubmVyIDMwMDBtcyBpbmZpbml0ZTtcclxuICB9XHJcbiAgLlBob25lLmlzLWFuaW1hdGluZzo6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uOiBwaG9uZS1pY29uIDMwMDBtcyBpbmZpbml0ZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBwaG9uZS1vdXRlciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDBlbSByZ2JhKDUyLCAxNTIsIDIxOSwgMCksIDBlbSAwLjA1ZW0gMC4xZW0gcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG4gICAgMzMuMzMzMyUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDEuMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDBlbSByZ2JhKDUyLCAxNTIsIDIxOSwgMC4xKSwgMGVtIDAuMDVlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgICA2Ni42NjY2JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuNWVtIHJnYmEoNTIsIDE1MiwgMjE5LCAwKSwgMGVtIDAuMDVlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgxKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMGVtIHJnYmEoNTIsIDE1MiwgMjE5LCAwKSwgMGVtIDAuMDVlbSAwLjFlbSByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgcGhvbmUtaW5uZXIge1xyXG4gICAgMCUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDApO1xyXG4gICAgfVxyXG4gICAgMzMuMzMzMyUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDAuOSk7XHJcbiAgICB9XHJcbiAgICA2Ni42NjY2JSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgc2NhbGUoMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSBzY2FsZSgwKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBwaG9uZS1pY29uIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwZW0sIDAsIDApO1xyXG4gICAgfVxyXG4gICAgMiUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuMDFlbSwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICA0JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuMDFlbSwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICA2JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC4wMWVtLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDglIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC4wMWVtLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDEwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC4wMWVtLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDEyJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuMDFlbSwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAxNCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuMDFlbSwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAxNiUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjAxZW0sIDAsIDApO1xyXG4gICAgfVxyXG4gICAgMTglIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjAxZW0sIDAsIDApO1xyXG4gICAgfVxyXG4gICAgMjAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC4wMWVtLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDIyJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC4wMWVtLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDI0JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuMDFlbSwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAyNiUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuMDFlbSwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAyOCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjAxZW0sIDAsIDApO1xyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjAxZW0sIDAsIDApO1xyXG4gICAgfVxyXG4gICAgMzIlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC4wMWVtLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDM0JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMC4wMWVtLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDM2JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTAuMDFlbSwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICAzOCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAuMDFlbSwgMCwgMCk7XHJcbiAgICB9XHJcbiAgICA0MCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjAxZW0sIDAsIDApO1xyXG4gICAgfVxyXG4gICAgNDIlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLjAxZW0sIDAsIDApO1xyXG4gICAgfVxyXG4gICAgNDQlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC4wMWVtLCAwLCAwKTtcclxuICAgIH1cclxuICAgIDQ2JSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMGVtLCAwLCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/agent/status/active/my-dialog/my-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/agent/status/active/my-dialog/my-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  >\n          \n    <div class=\"card\" style=\"background-color:none; margin-left:5%\">\n      <div class=\"card-body\">\n        <h4>Be Ready connecting with ...</h4>\n        <br>\n        <h2 class=\"card-title\">{{CallerName }}</h2>\n        <br>\n        <h4 class=\"card-subtitle mb-2 text-muted\">{{CallerNumber}}</h4>\n      \n        <div style=\"margin-top:10%;margin-bottom:10% \">\n          <i class=\"Phone is-animating\" style=\"margin-left:25%\"></i>\n        </div> \n        <!-- <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->\n        <!-- <a href=\"#\" class=\"card-link\">Card link</a>\n        <a href=\"#\" class=\"card-link\">Another link</a> -->\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/agent/status/active/my-dialog/my-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/agent/status/active/my-dialog/my-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: MyDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogComponent", function() { return MyDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MyDialogComponent = /** @class */ (function () {
    function MyDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        debugger;
        console.log('Number:', this.data.number, 'Name:', this.data.name);
        this.CallerName = data.name;
        this.CallerNumber = data.number;
    }
    MyDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.ok();
        }, 30000);
    };
    MyDialogComponent.prototype.cancel = function () {
    };
    MyDialogComponent.prototype.ok = function () {
        this.dialogRef.close("can pass string");
        //save the doc
    };
    MyDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-dialog',
            template: __webpack_require__(/*! ./my-dialog.component.html */ "./src/app/agent/status/active/my-dialog/my-dialog.component.html"),
            styles: [__webpack_require__(/*! ./my-dialog.component.css */ "./src/app/agent/status/active/my-dialog/my-dialog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MyDialogComponent);
    return MyDialogComponent;
}());



/***/ }),

/***/ "./src/app/agent/status/active/my-dialog/my-dialog.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/agent/status/active/my-dialog/my-dialog.module.ts ***!
  \*******************************************************************/
/*! exports provided: MyDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDialogModule", function() { return MyDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./my-dialog.component */ "./src/app/agent/status/active/my-dialog/my-dialog.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);






//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var MyDialogModule = /** @class */ (function () {
    function MyDialogModule() {
    }
    MyDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ],
            declarations: [_my_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MyDialogComponent"]]
        })
    ], MyDialogModule);
    return MyDialogModule;
}());



/***/ })

}]);
//# sourceMappingURL=status-active-active-module.js.map