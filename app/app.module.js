"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var animal_model_1 = require("./animal.model");
var edit_animal_component_1 = require("./edit-animal.component");
var new_animal_component_1 = require("./new-animal.component");
var animal_list_component_1 = require("./animal-list.component");
var completeness_pipe_1 = require("./completeness.pipe");
var completeness2_pipe_1 = require("./completeness2.pipe");
// import { OldPipe } from './completeness.pipe';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule],
        declarations: [app_component_1.AppComponent,
            animal_model_1.Animal,
            animal_list_component_1.AnimalListComponent,
            edit_animal_component_1.EditAnimalComponent, new_animal_component_1.NewAnimalComponent,
            completeness_pipe_1.CompletenessPipe, completeness2_pipe_1.Completeness2Pipe],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map