(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/time.service */ "./src/app/services/time.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class AddComponent {
    constructor(service, time, router) {
        this.service = service;
        this.time = time;
        this.router = router;
        this.disabled = true;
        this.newTask = '';
        this.throttleTimeConfig = {
            leading: false,
            trailing: true
        };
    }
    ngOnInit() {
        const input = document.querySelector('#el');
        const input2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(input, 'input');
        input2
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(1000, rxjs__WEBPACK_IMPORTED_MODULE_2__["asyncScheduler"], this.throttleTimeConfig))
            .subscribe(() => {
            this.newTask.length !== 0 ? this.disabled = false : this.disabled = true;
        });
    }
    add() {
        let next = false;
        if (this.newTask === '') {
            this.disabled = true;
            return;
        }
        for (let i = 0; i < this.newTask.length; i++) {
            if (this.newTask.charAt(i) === ' ') {
                continue;
            }
            else {
                next = true;
                break;
            }
        }
        if (next === false) {
            this.newTask = '';
            alert('You have to write something!');
            return;
        }
        const tab = this.time.getTime();
        let quanity = 1;
        let newTaskCopy = this.newTask;
        const tasks2 = this.service.tasks;
        for (let i = 0; i <= tasks2.length; i++) {
            if (newTaskCopy === tasks2[i]) {
                quanity++;
                newTaskCopy = `${this.newTask}(${quanity})`;
                i = 0;
            }
        }
        if (quanity > 1) {
            this.newTask = newTaskCopy;
        }
        tasks2.push(this.newTask);
        const created2 = this.service.created;
        created2.push(`${tab[0]}/${tab[1]} ${tab[2]}:${tab[3]}:${tab[4]}`);
        const task = ({
            tasks: tasks2,
            created: created2,
        });
        this.service.addTask(task).subscribe();
        this.newTask = '';
        this.disabled = true;
    }
    logOut() {
        this.service.logOut().subscribe((response) => {
            if (response) {
                this.router.navigate(['/']);
                location.reload();
            }
        });
    }
}
AddComponent.ɵfac = function AddComponent_Factory(t) { return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_time_service__WEBPACK_IMPORTED_MODULE_4__["Time"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddComponent, selectors: [["app-add"]], decls: 8, vars: 2, consts: [["type", "button", "id", "log_out", 1, "btn", "btn-info", 3, "click"], [1, "input-group", "mb-3"], ["type", "text", "id", "el", "placeholder", "Write...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]], template: function AddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_Template_button_click_0_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add task to your list: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_Template_input_ngModelChange_5_listener($event) { return ctx.newTask = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_Template_button_click_6_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.newTask);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-add',
                templateUrl: './add.component.html',
                styleUrls: ['./add.component.scss']
            }]
    }], function () { return [{ type: _services_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"] }, { type: _services_time_service__WEBPACK_IMPORTED_MODULE_4__["Time"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");







const routes = [
    { path: '', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'todo', component: _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"] },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _done_done_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./done/done.component */ "./src/app/done/done.component.ts");
/* harmony import */ var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./to-do/to-do.component */ "./src/app/to-do/to-do.component.ts");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/time.service */ "./src/app/services/time.service.ts");
/* harmony import */ var _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/upper-case.pipe */ "./src/app/pipes/upper-case.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tasks/tasks.component */ "./src/app/tasks/tasks.component.ts");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_time_service__WEBPACK_IMPORTED_MODULE_7__["Time"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _done_done_component__WEBPACK_IMPORTED_MODULE_5__["DoneComponent"],
        _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_6__["ToDoComponent"],
        _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"],
        _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"],
        _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
        _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
        _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__["TasksComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _done_done_component__WEBPACK_IMPORTED_MODULE_5__["DoneComponent"],
                    _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_6__["ToDoComponent"],
                    _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"],
                    _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"],
                    _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
                    _register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                    _tasks_tasks_component__WEBPACK_IMPORTED_MODULE_13__["TasksComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
                ],
                providers: [_services_time_service__WEBPACK_IMPORTED_MODULE_7__["Time"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/done/done.component.ts":
/*!****************************************!*\
  !*** ./src/app/done/done.component.ts ***!
  \****************************************/
/*! exports provided: DoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoneComponent", function() { return DoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pipes/upper-case.pipe */ "./src/app/pipes/upper-case.pipe.ts");






function DoneComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} }
function DoneComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Empty list\n");
} }
const _c0 = function (a0, a1) { return { "odd": a0, "even": a1 }; };
function DoneComponent_ng_template_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "upperCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const odd_r8 = ctx.odd;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, odd_r8, !odd_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r7 + 1, ". ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, task_r6), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.doneObj.finished[i_r7]);
} }
function DoneComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DoneComponent_ng_template_7_li_1_Template, 6, 9, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.doneObj.doneTasks);
} }
class DoneComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.doneObj = {
            doneTasks: [],
            finished: []
        };
        this.disabled = true;
        this.empty = true;
    }
    ngOnInit() {
        this.service.checkUser().subscribe((response) => {
            if (response !== 'is') {
                this.router.navigate(['/']);
            }
            else {
                return;
            }
        });
        this.service.getTask().subscribe((response) => {
            this.doneObj = response;
            this.service.doneTasks = this.doneObj.doneTasks;
            this.service.finished = this.doneObj.finished;
            this.doneObj.finished.length > 0 ? this.disabled = false : this.disabled = true;
        });
        this.service.changeDisable().subscribe((response) => this.disabled = response);
    }
    removeAll() {
        this.service.removeAll().subscribe(() => {
            this.doneObj.doneTasks = this.service.doneTasks;
            this.doneObj.finished = this.service.finished;
        });
    }
}
DoneComponent.ɵfac = function DoneComponent_Factory(t) { return new (t || DoneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DoneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoneComponent, selectors: [["app-done"]], decls: 9, vars: 4, consts: [["type", "button", 1, "btn", "btn-danger", 3, "disabled", "click"], ["class", "done", 4, "ngIf", "ngIfThen", "ngIfElse"], ["empty", ""], ["list", ""], [1, "done"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["appButton", "", 1, "smaller"]], template: function DoneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoneComponent_Template_button_click_0_listener() { return ctx.removeAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Remove all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Done tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DoneComponent_div_4_Template, 1, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DoneComponent_ng_template_5_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DoneComponent_ng_template_7_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.doneObj.doneTasks.length > 0)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvbmUvZG9uZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DoneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-done',
                templateUrl: './done.component.html',
                styleUrls: ['./done.component.scss']
            }]
    }], function () { return [{ type: _services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/upper-case.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/upper-case.pipe.ts ***!
  \******************************************/
/*! exports provided: UpperCasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpperCasePipe", function() { return UpperCasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class UpperCasePipe {
    transform(value, ...args) {
        if (value.charAt(0) !== ' ') {
            // tslint:disable-next-line: no-unused-expression
            return value.charAt(0).toUpperCase() + value.slice(1);
        }
        else {
            for (let i = 1; i <= value.length; i++) {
                if (value.charAt(i) === ' ') {
                    continue;
                }
                else {
                    return value.slice(0, i - 1) + value.charAt(i).toUpperCase() + value.slice(i + 1);
                }
            }
        }
    }
}
UpperCasePipe.ɵfac = function UpperCasePipe_Factory(t) { return new (t || UpperCasePipe)(); };
UpperCasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "upperCase", type: UpperCasePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpperCasePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'upperCase'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class RegisterComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.login = '';
        this.password = '';
    }
    signUp() {
        if ((this.login.length !== 0) && (this.password.length !== 0)) {
            const model = ({
                login: this.login,
                password: this.password
            });
            this.service.signUp(model).subscribe((response) => {
                this.login = '';
                this.password = '';
                if (response === 'occupied') {
                    alert('This login is occupied!');
                }
                else {
                    this.router.navigate(['/todo']);
                }
            });
        }
        else {
            alert('Provide your details!');
            return;
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]])], decls: 20, vars: 2, consts: [[1, "header"], ["src", "../../assets/img/app.png"], [1, "form"], ["id", "green"], ["id", "blue"], ["type", "text", "maxlength", "25", 3, "ngModel", "ngModelChange"], ["type", "password", "maxlength", "25", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-success", 3, "click"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Join us and keep your daily tasks in our app!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_12_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_18_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign Up!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss'],
                providers: [_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]]
            }]
    }], function () { return [{ type: _services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AccountService {
    constructor(http) {
        this.http = http;
    }
    signUp(client) {
        return this.http.post('/api/register', client, {
            responseType: 'text'
        });
    }
    signIn(client) {
        return this.http.post('/api/signIn', client, {
            responseType: 'text'
        });
    }
    register() {
        return this.http.get('/register', {
            responseType: 'text'
        });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/service.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/service.service.ts ***!
  \*********************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class ServiceService {
    constructor(http) {
        this.http = http;
        this.tasks = null;
        this.created = null;
        this.doneTasks = null;
        this.finished = null;
        this.sub = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    checkUser() {
        return this.http.get('/api/checkUser', {
            responseType: 'text'
        });
    }
    getTask() {
        return this.http.get('/api/tasks');
    }
    addTask(task) {
        this.tasks = task.tasks;
        this.created = task.created;
        return this.http.post('/api/saveTask', task);
    }
    finishTask(task) {
        this.doneTasks = task.doneTasks;
        this.finished = task.finished;
        this.disable = false;
        this.sub.next(this.disable);
        return this.http.post('/api/finishTask', task);
    }
    removeTask(task, created) {
        this.tasks = this.tasks.filter((e) => e !== task);
        this.created = this.created.filter((e) => e !== created);
        const remove = {
            tasks: this.tasks,
            created: this.created
        };
        return this.http.post('/api/remove', remove);
    }
    removeAll() {
        this.doneTasks = [];
        this.finished = [];
        this.disable = true;
        this.sub.next(this.disable);
        return this.http.get('api/removeAll');
    }
    logOut() {
        return this.http.get('api/logOut', {
            responseType: 'text'
        });
    }
    changeDisable() {
        return this.sub.asObservable();
    }
}
ServiceService.ɵfac = function ServiceService_Factory(t) { return new (t || ServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceService, factory: ServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/time.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/time.service.ts ***!
  \******************************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
class Time {
    constructor() {
        this.tab = [];
    }
    getTime() {
        const date = new Date();
        const day = date.getDate().toString();
        const month = 1 + date.getMonth();
        const hour = date.getHours().toString();
        const min = date.getMinutes().toString();
        const sec = date.getSeconds().toString();
        this.tab = [day, month.toString(), hour, min, sec];
        this.tab.forEach((val, index) => {
            val.length < 2 ? this.tab[index] = '0' + val : val = val;
        });
        return this.tab;
    }
}


/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class SignInComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.login = '';
        this.password = '';
    }
    signIn() {
        const model = ({
            login: this.login,
            password: this.password
        });
        this.service.signIn(model).subscribe(response => {
            if (response === 'empty') {
                alert(`There is no such an user: ${this.login}`);
                this.login = '';
                this.password = '';
            }
            else {
                this.router.navigate(['/todo']);
            }
        });
    }
    register() {
        this.login = '';
        this.password = '';
        this.service.register().subscribe(response => {
            if (response) {
                this.router.navigate(['/register']);
            }
        });
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]])], decls: 22, vars: 2, consts: [[1, "header"], ["src", "../../assets/img/app.png"], [1, "form"], ["id", "green"], ["id", "blue"], ["type", "text", "maxlength", "25", 3, "ngModel", "ngModelChange"], ["type", "password", "maxlength", "25", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Join us and keep your daily tasks in our app!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Sign");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Login: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_12_listener($event) { return ctx.login = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Password: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SignInComponent_Template_input_ngModelChange_16_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_18_listener() { return ctx.signIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_20_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss'],
                providers: [_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]]
            }]
    }], function () { return [{ type: _services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../to-do/to-do.component */ "./src/app/to-do/to-do.component.ts");
/* harmony import */ var _done_done_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../done/done.component */ "./src/app/done/done.component.ts");





class TasksComponent {
    constructor() { }
    ngOnInit() {
    }
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 3, vars: 0, template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-to-do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-done");
    } }, directives: [_add_add_component__WEBPACK_IMPORTED_MODULE_1__["AddComponent"], _to_do_to_do_component__WEBPACK_IMPORTED_MODULE_2__["ToDoComponent"], _done_done_component__WEBPACK_IMPORTED_MODULE_3__["DoneComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tasks',
                templateUrl: './tasks.component.html',
                styleUrls: ['./tasks.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/to-do/to-do.component.ts":
/*!******************************************!*\
  !*** ./src/app/to-do/to-do.component.ts ***!
  \******************************************/
/*! exports provided: ToDoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToDoComponent", function() { return ToDoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/service.service */ "./src/app/services/service.service.ts");
/* harmony import */ var _services_time_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/time.service */ "./src/app/services/time.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/upper-case.pipe */ "./src/app/pipes/upper-case.pipe.ts");







function ToDoComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 3);
} }
function ToDoComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, " Empty list\n");
} }
const _c0 = function (a0, a1) { return { "odd": a0, "even": a1 }; };
function ToDoComponent_ng_template_5_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "upperCase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_ng_template_5_li_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const task_r6 = ctx.$implicit; const i_r7 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.finish(task_r6, ctx_r9.taskObj.created[i_r7]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Finish");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToDoComponent_ng_template_5_li_1_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const task_r6 = ctx.$implicit; const i_r7 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.remove(task_r6, ctx_r11.taskObj.created[i_r7]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const odd_r8 = ctx.odd;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, odd_r8, !odd_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", i_r7 + 1, ". ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, task_r6), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.taskObj.created[i_r7].slice(0, 0 - 3));
} }
function ToDoComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToDoComponent_ng_template_5_li_1_Template, 11, 9, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.taskObj.tasks);
} }
class ToDoComponent {
    constructor(service, time, router) {
        this.service = service;
        this.time = time;
        this.router = router;
        this.taskObj = {
            tasks: [],
            created: []
        };
    }
    ngOnInit() {
        this.service.checkUser().subscribe((response) => {
            if (response !== 'is') {
                this.router.navigate(['/']);
            }
            else {
                return;
            }
        });
        this.service.getTask().subscribe((response) => {
            this.taskObj = response;
            this.service.tasks = this.taskObj.tasks;
            this.service.created = this.taskObj.created;
        });
    }
    remove(task, created) {
        this.service.removeTask(task, created).subscribe();
        this.taskObj.tasks = this.service.tasks;
        this.taskObj.created = this.service.created;
    }
    finish(task2, created2) {
        this.remove(task2, created2);
        const tab = this.time.getTime();
        const doneTasks2 = this.service.doneTasks;
        doneTasks2.push(task2);
        const finished2 = this.service.finished;
        finished2.push(`${created2.slice(0, -3)} - ${tab[0]}/${tab[1]} ${tab[2]}:${tab[3]}`);
        const finishedTask = ({
            doneTasks: doneTasks2,
            finished: finished2
        });
        this.service.finishTask(finishedTask).subscribe();
    }
}
ToDoComponent.ɵfac = function ToDoComponent_Factory(t) { return new (t || ToDoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_time_service__WEBPACK_IMPORTED_MODULE_2__["Time"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ToDoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToDoComponent, selectors: [["app-to-do"]], decls: 7, vars: 3, consts: [["class", "toDo", 4, "ngIf", "ngIfThen", "ngIfElse"], ["empty", ""], ["list", ""], [1, "toDo"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], [1, "description"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]], template: function ToDoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tasks to do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToDoComponent_div_2_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToDoComponent_ng_template_3_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToDoComponent_ng_template_5_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.taskObj.tasks.length > 0)("ngIfThen", _r3)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_pipes_upper_case_pipe__WEBPACK_IMPORTED_MODULE_5__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvLWRvL3RvLWRvLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToDoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-to-do',
                templateUrl: './to-do.component.html',
                styleUrls: ['./to-do.component.scss']
            }]
    }], function () { return [{ type: _services_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"] }, { type: _services_time_service__WEBPACK_IMPORTED_MODULE_2__["Time"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/blazejkania/Desktop/angular/my-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map