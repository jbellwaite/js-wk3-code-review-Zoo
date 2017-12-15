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
var NewAnimalComponent = (function () {
    function NewAnimalComponent() {
        this.newAnimalSender = new core_1.EventEmitter();
    }
    NewAnimalComponent.prototype.submitForm = function (animalSpecies, animalName, animalAge, animalDiet, animalLocation, animalCaretakers, animalSex, animalLikes, animalDislikes) {
        var newAnimalToAdd = new animal_model_1.Animal(animalSpecies, animalName, animalAge, animalDiet, animalLocation, animalCaretakers, animalSex, animalLikes, animalDislikes);
        console.log(animalSpecies);
        this.newAnimalSender.emit(newAnimalToAdd);
    };
    return NewAnimalComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], NewAnimalComponent.prototype, "newAnimalSender", void 0);
NewAnimalComponent = __decorate([
    core_1.Component({
        selector: 'new-animal',
        template: "\n  <h2>Add another animal</h2>\n<form>\n  <label for=\"animalSpecies\">Enter the animal's species</label>\n  <input type=\"text\" #animalSpecies><br>\n\n  <label for=\"animalName\">Enter the animal's name</label>\n  <input type=\"text\" #animalName><br>\n\n  <label for=\"animalAge\">Enter the animal's age</label>\n  <input type=\"number\" #animalAge><br>\n\n  <label for=\"animalDiet\">Enter the animal's diet</label>\n  <input type=\"text\" #animalDiet><br>\n\n  <label for=\"animalLocation\">Enter the animal's location</label>\n  <input type=\"text\" #animalLocation><br>\n\n  <label for=\"animalCaretakers\">Enter the number of caretakers</label>\n  <input type=\"number\" #animalCaretakers><br>\n\n  <label for=\"animalSex\">Enter the sex of the animal</label>\n  <input type=\"text\" #animalSex><br>\n\n  <label for=\"animalLikes\">Enter the animal's likes</label>\n  <input type=\"text\" #animalLikes><br>\n\n  <label for=\"animalDislikes\">Enter the animals dislikes</label>\n  <input type=\"text\" #animalDislikes><br>\n\n</form>\n\n<button (click)=\"submitForm(animalSpecies.value, animalName.value, animalAge.value, animalDiet.value, animalLocation.value, animalCaretakers.value, animalSex.value, animalLikes.value, animalDislikes.value)\">Add Animal</button>\n  "
    })
], NewAnimalComponent);
exports.NewAnimalComponent = NewAnimalComponent;
//# sourceMappingURL=new-animal.component.js.map