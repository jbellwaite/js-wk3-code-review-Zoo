"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AnimalListComponent = (function () {
    function AnimalListComponent() {
        this.clickSender = new core_1.EventEmitter();
        this.youngAnimals = [];
        this.oldAnimals = [];
        this.showYoungAnimals = false;
        this.showOldAnimals = false;
    }
    AnimalListComponent.prototype.showOld = function () {
        console.log(this.childAnimalList);
    };
    AnimalListComponent.prototype.checkYoungAnimals = function () {
        this.showYoungAnimals = !this.showYoungAnimals;
    };
    AnimalListComponent.prototype.checkOldAnimals = function () {
        this.showOldAnimals = !this.showOldAnimals;
    };
    return AnimalListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AnimalListComponent.prototype, "childAnimalList", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AnimalListComponent.prototype, "clickSender", void 0);
AnimalListComponent = __decorate([
    core_1.Component({
        selector: 'animal-list',
        template: "\n  <button (click)=\"checkYoungAnimals()\">Check to see which animals are young animals (<2 years old)</button>\n    <div *ngIf=\"showYoungAnimals\">\n      <ul>\n        <li *ngFor=\"let currentAnimal of childAnimalList | completeness\">{{currentAnimal.name}}</li>\n      </ul>\n    </div>\n\n    <button (click)=\"checkOldAnimals()\">Check to see which animals are old animals (>10 years old)</button>\n      <div *ngIf=\"showOldAnimals\">\n        <ul>\n          <li  *ngFor=\"let currentAnimal of childAnimalList | completeness2\">{{currentAnimal.name}}</li>\n        </ul>\n      </div>\n\n  "
    })
], AnimalListComponent);
exports.AnimalListComponent = AnimalListComponent;
//# sourceMappingURL=animal-list.component.js.map