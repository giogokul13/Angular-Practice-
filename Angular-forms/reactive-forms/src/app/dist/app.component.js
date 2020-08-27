"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var AppComponent = /** @class */ (function () {
    function AppComponent(formbuilder) {
        this.formbuilder = formbuilder;
        this.title = 'reactive-forms';
        // regformgroup = new FormGroup({
        //   uname :new FormControl('gokul'),
        //   password : new FormControl(),
        //   confirmpassword : new FormControl()
        // });
        //loaddata(){
        //   this.regformgroup.setValue({
        //     uname : "gokul",
        //     password : "12234245",
        //     confirmpassword : "1236124634"
        //   })
        // }
        // this.regformgroup.patchValue({
        //   uname : "gokul v 2.0"
        // })
        this.regformgroup = this.formbuilder.group({
            uname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5)]],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]],
            confirmpassword: ['', [forms_1.Validators.required, forms_1.Validators.minLength(8)]]
        });
    }
    Object.defineProperty(AppComponent.prototype, "uname", {
        get: function () {
            return this.regformgroup.get('uname');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "pwd", {
        get: function () {
            return this.regformgroup.get('password');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "pwd1", {
        get: function () {
            return this.regformgroup.get('confirmpassword');
        },
        enumerable: false,
        configurable: true
    });
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
