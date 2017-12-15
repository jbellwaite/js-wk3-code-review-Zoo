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
var animal_model_1 = require("./animal.model");
var EditAnimalComponent = (function () {
    function EditAnimalComponent() {
        this.doneButtonClickedSender = new core_1.EventEmitter();
    }
    EditAnimalComponent.prototype.doneButtonClicked = function () {
        this.doneButtonClickedSender.emit();
    };
    return EditAnimalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", animal_model_1.Animal)
], EditAnimalComponent.prototype, "childSelectedAnimal", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], EditAnimalComponent.prototype, "doneButtonClickedSender", void 0);
EditAnimalComponent = __decorate([
    core_1.Component({
        selector: 'edit-animal',
        template: "\n  <div *ngIf=\"childSelectedAnimal\">\n  <h3>{{childSelectedAnimal.name}}\n    <input [(ngModel)]=\"childSelectedAnimal.species\">\n    <input [(ngModel)]=\"childSelectedAnimal.name\">\n    <input [(ngModel)]=\"childSelectedAnimal.age\">\n    <input [(ngModel)]=\"childSelectedAnimal.diet\">\n    <input [(ngModel)]=\"childSelectedAnimal.location\">\n    <input [(ngModel)]=\"childSelectedAnimal.caretakers\">\n    <input [(ngModel)]=\"childSelectedAnimal.sex\">\n    <input [(ngModel)]=\"childSelectedAnimal.likes\">\n    <input [(ngModel)]=\"childSelectedAnimal.dislikes\">\n\n    <button (click)=\"doneButtonClicked()\">Done</button>\n  "
    })
], EditAnimalComponent);
exports.EditAnimalComponent = EditAnimalComponent;
//# sourceMappingURL=edit-animal.component.js.map