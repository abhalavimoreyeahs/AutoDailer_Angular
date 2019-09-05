(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agent-agent-module"],{

/***/ "./src/app/agent/agent-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/agent/agent-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AgentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentRoutingModule", function() { return AgentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _agent_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agent.component */ "./src/app/agent/agent.component.ts");




var routes = [
    {
        path: '',
        component: _agent_component__WEBPACK_IMPORTED_MODULE_3__["AgentComponent"],
        children: [
            { path: '', redirectTo: 'agentDashboard', pathMatch: 'prefix' },
            { path: 'agentDashboard', loadChildren: './agent-dashboard/agent-dashboard.module#AgentDashboardModule' },
            { path: 'call', loadChildren: './calls/call.module#CallModule' },
            { path: 'calendar', loadChildren: './calendar/view.module#ViewModule' },
            // { path: 'callStatus', loadChildren: './callStatus/callStatus.module#CallStatusModule'},
            { path: 'active', loadChildren: './status/active/active.module#ActiveModule' },
            { path: 'break', loadChildren: './status/break/break.module#BreakModule' },
            { path: 'callback', loadChildren: './status/callback/callback.module#CallBackModule' },
            { path: 'manualdial', loadChildren: './status/manualDial/manualDial.module#ManualDialModule' },
            { path: 'training', loadChildren: './status/training/training.module#TrainingModule' },
            { path: 'meetwithcustomer', loadChildren: './status/meetingWithCustomer/customerMeet.module#CustomerMeetModule' },
            //Testing
            { path: 'setting', loadChildren: './setting/setting.module#SettingModule' },
        ]
    }
];
var AgentRoutingModule = /** @class */ (function () {
    function AgentRoutingModule() {
    }
    AgentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AgentRoutingModule);
    return AgentRoutingModule;
}());



/***/ }),

/***/ "./src/app/agent/agent.component.css":
/*!*******************************************!*\
  !*** ./src/app/agent/agent.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*code*/\r\n/*------------------------------*/\r\n/*tool bar*/\r\n/*------------------------------*/\r\n.floating-header-div {\r\n    position: fixed;  \r\n    z-index: 999;\r\n    width: 100%;  \r\n  }\r\n/* red pulsating dot*/\r\n.ring-container {\r\n    position: relative;\r\n}\r\n.circle {\r\n    width: 12px;\r\n    height: 12px;\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    top: 23px;\r\n    left: 23px;\r\n}\r\n.ringring {\r\n    border: 3px solid red;\r\n    -webkit-border-radius: 20px;\r\n    height: 22px;\r\n    width: 22px;\r\n    position: absolute;\r\n    left: 18px;\r\n    top: 18px;\r\n    -webkit-animation: pulsate 2s ease-out;\r\n    -webkit-animation-iteration-count: infinite; \r\n    opacity: 0.0\r\n}\r\n@-webkit-keyframes pulsate {\r\n    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}\r\n    50% {opacity: 1.0;}\r\n    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}\r\n}\r\n.example-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\nhr { \r\n    display: block;\r\n    margin-top: 0.5em;\r\n    margin-bottom: 0.5em;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    border-style: inset;\r\n    border-width: 1px;\r\n  }\r\n.mat-nav-list a.active {\r\n    background:rgb(119, 21, 175);\r\n}\r\n.active-link {\r\n    background-color: grey;\r\n}\r\n/* a.hover{\r\n    color:#039be5;\r\n    background-color:gray;\r\n} */\r\na.active{\r\n    color:rgb(44, 153, 11);\r\n    background-color:rgb(238, 65, 50);\r\n}\r\n#btn{\r\n    margin: 2% 2% 2% 2%;\r\n}\r\nbutton.active{\r\n    background-color:mediumpurple;\r\n}\r\n.is-active {\r\n    background-color: red;\r\n    margin:1% 1% 1% 1%;\r\n}\r\n#profile{\r\n    width:200px;\r\n}\r\nbutton:focus, button:active {\r\n    outline: none !important;\r\n    box-shadow: none !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWdlbnQvYWdlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPO0FBQ1AsaUNBQWlDO0FBQ2pDLFdBQVc7QUFDWCxpQ0FBaUM7QUFDakM7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUVGLHFCQUFxQjtBQUNyQjtJQUNJLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkO0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0NBQXNDO0lBQ3RDLDJDQUEyQztJQUMzQztBQUNKO0FBQ0E7SUFDSSxJQUFJLGtDQUFrQyxFQUFFLFlBQVksQ0FBQztJQUNyRCxLQUFLLFlBQVksQ0FBQztJQUNsQixNQUFNLGtDQUFrQyxFQUFFLFlBQVksQ0FBQztBQUMzRDtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLFFBQVE7RUFDVjtBQUdGO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSw0QkFBNEI7QUFDaEM7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUVBOzs7R0FHRztBQUNIO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FnZW50L2FnZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmNvZGUqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi8qdG9vbCBiYXIqL1xyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbi5mbG9hdGluZy1oZWFkZXItZGl2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDsgIFxyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxuICB9XHJcblxyXG4vKiByZWQgcHVsc2F0aW5nIGRvdCovXHJcbi5yaW5nLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIzcHg7XHJcbiAgICBsZWZ0OiAyM3B4O1xyXG59XHJcblxyXG4ucmluZ3Jpbmcge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAxOHB4O1xyXG4gICAgdG9wOiAxOHB4O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNhdGUgMnMgZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlOyBcclxuICAgIG9wYWNpdHk6IDAuMFxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlIHtcclxuICAgIDAlIHstd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4xLCAwLjEpOyBvcGFjaXR5OiAwLjA7fVxyXG4gICAgNTAlIHtvcGFjaXR5OiAxLjA7fVxyXG4gICAgMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTsgb3BhY2l0eTogMC4wO31cclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgICBcclxuXHJcbmhyIHsgXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGJvcmRlci1zdHlsZTogaW5zZXQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICB9XHJcblxyXG4gIC5tYXQtbmF2LWxpc3QgYS5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMTE5LCAyMSwgMTc1KTtcclxufVxyXG5cclxuLmFjdGl2ZS1saW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi8qIGEuaG92ZXJ7XHJcbiAgICBjb2xvcjojMDM5YmU1O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmF5O1xyXG59ICovXHJcbmEuYWN0aXZle1xyXG4gICAgY29sb3I6cmdiKDQ0LCAxNTMsIDExKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIzOCwgNjUsIDUwKTtcclxufVxyXG5cclxuI2J0bntcclxuICAgIG1hcmdpbjogMiUgMiUgMiUgMiU7XHJcbn1cclxuXHJcbmJ1dHRvbi5hY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm1lZGl1bXB1cnBsZTtcclxufVxyXG4uaXMtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIG1hcmdpbjoxJSAxJSAxJSAxJTtcclxufVxyXG5cclxuI3Byb2ZpbGV7XHJcbiAgICB3aWR0aDoyMDBweDtcclxufVxyXG5cclxuYnV0dG9uOmZvY3VzLCBidXR0b246YWN0aXZlIHtcclxuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/agent/agent.component.html":
/*!********************************************!*\
  !*** ./src/app/agent/agent.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<script type=\"text/javascript\" src=\"https://cdn.plivo.com/sdk/browser/v2/plivo.min.js\"></script>\r\n<!--floating header-->\r\n<div class=\"floating-header-div\">\r\n<mat-toolbar id=\"mainToolbar\" color=\"primary\" class=\"mat-elevation-z6 tbar\">\r\n  <mat-icon (click)=\"onToolbarMenuToggle()\" id=\"toolbarMenu\">menu</mat-icon>\r\n  <h4 style=\"margin-left:1%\"> Auto Dialer </h4>\r\n  <span class=\"toolbar-spacer\"></span>\r\n  <!-- <mat-menu #rootMenu=\"matMenu\">\r\n      <button mat-menu-item [matMenuTriggerFor]=\"subMenu\">Power</button>\r\n      <button mat-menu-item>System settings</button>\r\n    </mat-menu>\r\n    \r\n    <mat-menu #subMenu=\"matMenu\">\r\n      <button mat-menu-item>Shut down</button>\r\n      <button mat-menu-item>Restart</button>\r\n      <button mat-menu-item>Hibernate</button>\r\n    </mat-menu>\r\n    \r\n    <button mat-icon-button [matMenuTriggerFor]=\"rootMenu\">\r\n      <mat-icon>more_vert</mat-icon>\r\n    </button> -->\r\n    <button *ngIf=\"live\" mat-button style=\"margin-top:-60px\">\r\n      <a class=\"ringring\"></a>\r\n       <a class=\"circle\"></a> \r\n  </button>  \r\n  <button mat-button [matMenuTriggerFor]=\"afterMenu\">{{status | titlecase }}</button>\r\n <mat-menu #afterMenu=\"matMenu\" xPosition=\"after\">\r\n   <button mat-menu-item (click)=\"changeStatus('active')\">Active</button>\r\n   <button mat-menu-item (click)=\"changeStatus('callback')\">Callback</button>\r\n   <button mat-menu-item (click)=\"changeStatus('manual dial')\">Manual Dial</button>\r\n   <button mat-menu-item (click)=\"changeStatus('break')\">Break</button>\r\n   <button mat-menu-item (click)=\"changeStatus('training')\">Training</button>\r\n   <button mat-menu-item (click)=\"changeStatus('meeting with customer')\">Meeting With Customer</button>\r\n </mat-menu>\r\n <mat-icon  class=\"toolbar-icon\" matBadge=\"8\" matBadgePosition=\"after\" matBadgeColor=\"warn\" style=\"margin:1%\"> email</mat-icon>\r\n  <mat-icon [matMenuTriggerFor]=\"notification\" class=\"toolbar-icon\" matBadge=\"8\" matBadgePosition=\"after\" matBadgeColor=\"accent\" style=\"margin:1%\">notifications</mat-icon>\r\n \r\n  <img  [matMenuTriggerFor]=\"menu\" src=\"../../assets/men.jpg\" style=\"width:40px; height:40px;border-radius: 50%;margin:1%\">\r\n\r\n    <mat-menu id=\"notification\" #notification=\"matMenu\" style=\"max-height:500px;\">\r\n    <img src=\"../../assets/men.jpg\" style=\"width:50px;height:50px; border-radius: 50%\"> Luv want to be friend with you.   \r\n    </mat-menu>  \r\n  <button mat-icon-button>\r\n      <mat-icon (click)=\"sideNav.toggle()\">apps</mat-icon>\r\n    </button>\r\n  \r\n    <mat-menu #menu=\"matMenu\">\r\n      <button id=\"profile\" mat-menu-item>\r\n          <mat-icon>person</mat-icon>\r\n        <span>My Profile</span>\r\n      </button>\r\n      \r\n      <button id=\"profile\" mat-menu-item >\r\n          <mat-icon>feedback</mat-icon>\r\n        <span>Feedback</span>\r\n      </button>\r\n      <button id=\"profile\" mat-menu-item >\r\n          <mat-icon> live_help</mat-icon>\r\n        <span>Help</span>\r\n      </button>\r\n      <button id=\"profile\" mat-menu-item >\r\n          <mat-icon>settings</mat-icon>\r\n        <span>Settings</span>\r\n      </button>\r\n      <button id=\"profile\" mat-menu-item (click)=\"logOut()\">\r\n        <!-- <mat-icon>exit_to_app</mat-icon> -->\r\n        <mat-icon>power_settings_new</mat-icon>\r\n        <span>Log Out</span>\r\n      </button>\r\n\r\n  </mat-menu>\r\n</mat-toolbar>\r\n<div *ngIf = \"showLoadingindicator\"> Loading...</div>\r\n<!-- <md-progress-bar *ngIf=\"isLoading\" mode=\"indeterminate\" color=\"accent\"></md-progress-bar> -->\r\n</div>\r\n\r\n<mat-sidenav-container id=\"sidenavContainer\" fullscreen style=\"margin-top:50px\">\r\n  <mat-sidenav mode=\"side\" #sidenav id=\"sidenav\" [class.menu-open]=\"isMenuOpen\" [class.menu-close]=\"!isMenuOpen\" opened >\r\n    <mat-list id=\"menus\" >\r\n      <mat-card style=\"font:normal\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar class=\"avatar\"></div>\r\n          <mat-card-title>Ravi Sharma</mat-card-title>\r\n          <mat-card-subtitle style=\"text-align: center\">Agent</mat-card-subtitle>\r\n\r\n        </mat-card-header>\r\n        <hr>\r\n      </mat-card>\r\n      <!-- <mat-list-item>\r\n        \r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" [routerLink]=\"['/agent/calendar']\" id=\"btn\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>date_range</mat-icon>\r\n          Calendar\r\n        </button>\r\n      </mat-list-item> -->\r\n\r\n      <mat-list-item >\r\n        <button class=\"menu-item\" id=\"btn\" mat-flat-button routerLink=\"/agent/agentDashboard\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\">\r\n          <mat-icon>dashboard</mat-icon>\r\n          Dashboard\r\n        </button>\r\n      </mat-list-item >\r\n\r\n   \r\n\r\n      <mat-list-item>\r\n          <button (click)=\"changeStatus('manual dial')\" id=\"btn\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\"\r\n            class=\"menu-item\" mat-flat-button>\r\n            <mat-icon> call</mat-icon>\r\n            Calls\r\n          </button>\r\n        </mat-list-item>\r\n\r\n      <!-- <mat-list-item>\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" (click)=\"viewCampaign()\">\r\n          <mat-icon>list</mat-icon>\r\n          View Assigned Campaign\r\n        </button>\r\n      </mat-list-item> -->\r\n\r\n      <mat-list-item>\r\n        <button class=\"menu-item\" mat-flat-button  id=\"btn\">\r\n          <mat-icon>schedule</mat-icon>\r\n          Scheduled Calls\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <mat-list-item>\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\">\r\n          <mat-icon>shuffle</mat-icon>\r\n          Predictive Dialer\r\n        </button>\r\n      </mat-list-item>\r\n\r\n      <!-- <mat-list-item>\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\" mat-flat-button routerLink=\"/agent/setting\"  routerLinkActive=\"active\" [ngStyle]=\"routerLink?{'background-color': 'mediumpurple'} : {'background-color': 'none'}\"> \r\n          <mat-icon>settings_application</mat-icon>\r\n          Settings\r\n        </button>\r\n      </mat-list-item> -->\r\n      <!-- <mat-list-item>\r\n        <button class=\"menu-item\" mat-flat-button id=\"btn\">\r\n          <mat-icon>feedback</mat-icon>\r\n          FeedBack\r\n        </button>\r\n      </mat-list-item> -->\r\n    </mat-list> \r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content [ngStyle]=\"{ 'margin-left.px': contentMargin }\">\r\n    <!------------------------------------------------------------------->\r\n    <mat-drawer-container class=\"example-container\">\r\n      <mat-drawer #sideNav mode=\"side\" opened=\"false\" [position]=\"nav_position\">\r\n        <!--- Drawer content -->\r\n        Drawer data\r\n      </mat-drawer>\r\n      <mat-drawer-content>\r\n        <!-- <button (click)=\"sideNav.toggle()\" mat-button>Toggle SideNav</button> -->\r\n        <!--------------------------->\r\n        <router-outlet></router-outlet>\r\n        <!-------------------------->\r\n      </mat-drawer-content>\r\n    </mat-drawer-container>\r\n    <!------------------------------------------------------------------->\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n\r\n\r\n\r\n<!-------------------------------Working in place of mat-drawer------------------------------------>\r\n<!-- <mat-sidenav-container class=\"example-container\" >\r\n            <mat-sidenav #sidenav [mode]=\"mode.value\" position=\"end\">\r\n              <p><button mat-button (click)=\"sidenav.toggle()\">Toggle1</button></p>\r\n              <p>\r\n                  <mat-radio-group class=\"example-radio-group\" >\r\n                    <label>Mode:</label>\r\n                    <mat-radio-button value=\"over\">Over</mat-radio-button>\r\n                    <mat-radio-button value=\"side\">Side</mat-radio-button>\r\n                    <mat-radio-button value=\"push\">Push</mat-radio-button>\r\n                  </mat-radio-group>\r\n                </p>\r\n            </mat-sidenav>\r\n          \r\n            <mat-sidenav-content>\r\n              <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\r\n              \r\n              <router-outlet></router-outlet>\r\n            </mat-sidenav-content>\r\n          </mat-sidenav-container> -->"

/***/ }),

/***/ "./src/app/agent/agent.component.ts":
/*!******************************************!*\
  !*** ./src/app/agent/agent.component.ts ***!
  \******************************************/
/*! exports provided: AgentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentComponent", function() { return AgentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autoDialer.service */ "./src/app/autoDialer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");






var AgentComponent = /** @class */ (function () {
    function AgentComponent(toastrService, _router, service) {
        var _this = this;
        this.toastrService = toastrService;
        this._router = _router;
        this.service = service;
        this.nav_position = 'end';
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('side'); //over side 
        this.live = false;
        this.status = 'Status'; //Agent Status
        this.f_firstPanel = false;
        this.isMenuOpen = true;
        this.contentMargin = 240;
        this.Status = [
            { value: '0', viewValue: 'Active' },
            { value: '1', viewValue: 'Callback' },
            { value: '2', viewValue: 'Manual dial' },
            { value: '3', viewValue: 'Break' },
            { value: '4', viewValue: 'Training' },
            { value: '5', viewValue: 'Meeting with customer' }
        ];
        this.showLoadingindicator = true;
        this._router.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.showLoadingindicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                setTimeout(function () {
                    _this.showLoadingindicator = false;
                }, 2000);
            }
        });
    }
    AgentComponent.prototype.ngOnInit = function () {
        this.userName = this.service.getUserName();
        console.log(this.userName);
        this.f_firstPanel = true;
    };
    AgentComponent.prototype.receiveCollapsed = function ($event) {
        this.collapedSideBar = $event;
    };
    AgentComponent.prototype.onToolbarMenuToggle = function () {
        console.log('On toolbar toggled', this.isMenuOpen);
        this.isMenuOpen = !this.isMenuOpen;
        if (!this.isMenuOpen) {
            this.contentMargin = 70;
        }
        else {
            this.contentMargin = 240;
        }
    };
    //logOut
    AgentComponent.prototype.logOut = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('PlivoUserId');
        localStorage.removeItem('PlivoPassword');
        this._router.navigate(['/login']);
    };
    AgentComponent.prototype.changeStatus = function (status) {
        this.status = status;
        if (status == 'active') {
            this.live = true;
            this._router.navigate(['/agent/active']);
        }
        else if (status == 'callback') {
            this.live = true;
            this._router.navigate(['/agent/callback']);
        }
        else if (status == 'manual dial') {
            this.live = true;
            this._router.navigate(['/agent/manualdial']);
        }
        else if (status == 'break') {
            this.live = false;
            this._router.navigate(['/agent/break']);
        }
        else if (status == 'training') {
            this.live = false;
            this._router.navigate(['/agent/training']);
        }
        else if (status == 'meeting with customer') {
            this.live = false;
            this._router.navigate(['/agent/meetwithcustomer']);
        }
    };
    AgentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-agent',
            template: __webpack_require__(/*! ./agent.component.html */ "./src/app/agent/agent.component.html"),
            styles: [__webpack_require__(/*! ./agent.component.css */ "./src/app/agent/agent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _autoDialer_service__WEBPACK_IMPORTED_MODULE_3__["AutoDialService"]])
    ], AgentComponent);
    return AgentComponent;
}());



/***/ }),

/***/ "./src/app/agent/agent.module.ts":
/*!***************************************!*\
  !*** ./src/app/agent/agent.module.ts ***!
  \***************************************/
/*! exports provided: AgentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentModule", function() { return AgentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _agent_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agent-routing.module */ "./src/app/agent/agent-routing.module.ts");
/* harmony import */ var _agent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agent.component */ "./src/app/agent/agent.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _call_dialog_call_dialog_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./call-dialog/call-dialog.module */ "./src/app/agent/call-dialog/call-dialog.module.ts");
/* harmony import */ var _call_dialog_call_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./call-dialog/call-dialog.component */ "./src/app/agent/call-dialog/call-dialog.component.ts");










//for angular calender scheduler
// import { SidebarComponent } from './components/sidebar/sidebar.component';
// import { HeaderComponent } from './components/header/header.component';
//for calling


var AgentModule = /** @class */ (function () {
    function AgentModule() {
    }
    AgentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _agent_routing_module__WEBPACK_IMPORTED_MODULE_6__["AgentRoutingModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _call_dialog_call_dialog_module__WEBPACK_IMPORTED_MODULE_10__["CallDialogModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"]
            ],
            entryComponents: [
                _call_dialog_call_dialog_component__WEBPACK_IMPORTED_MODULE_11__["CallDialogComponent"],
            ],
            declarations: [_agent_component__WEBPACK_IMPORTED_MODULE_7__["AgentComponent"]]
        })
    ], AgentModule);
    return AgentModule;
}());



/***/ }),

/***/ "./src/app/agent/call-dialog/call-dialog.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/agent/call-dialog/call-dialog.module.ts ***!
  \*********************************************************/
/*! exports provided: CallDialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallDialogModule", function() { return CallDialogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _call_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call-dialog.component */ "./src/app/agent/call-dialog/call-dialog.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_6__);






//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

var CallDialogModule = /** @class */ (function () {
    function CallDialogModule() {
    }
    CallDialogModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                //      BrowserAnimationsModule,
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            ],
            declarations: [_call_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CallDialogComponent"]]
        })
    ], CallDialogModule);
    return CallDialogModule;
}());



/***/ })

}]);
//# sourceMappingURL=agent-agent-module.js.map