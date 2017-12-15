"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animal_model_1 = require("./animal.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterAnimalsList = [
            new animal_model_1.Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises"),
            new animal_model_1.Animal("Arctic Fox", "Moon", 1, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
            new animal_model_1.Animal("Ocelot", "Prince", 12, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Non-rope-based toys"),
        ];
        this.selectedAnimal = null;
        this.selectedKind = this.masterAnimalsList[0];
        this.addAnAnimal = null;
    }
    AppComponent.prototype.viewAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    AppComponent.prototype.addAnimal = function (newAnimalFromChild) {
        this.masterAnimalsList.push(newAnimalFromChild);
    };
    AppComponent.prototype.editAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedAnimal = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <h1>Zoo</h1>\n  <div class=\"current-list\">\n  <h2>Current List of Animals</h2>\n  <h4>Click to see details</h4>\n    <ul>\n    <li (click)=\"viewAnimal(currentAnimal)\" *ngFor=\"let currentAnimal of masterAnimalsList\">{{currentAnimal.species}}</li>\n    </ul>\n  </div>\n\n    <div class=\"animal-wrapper\" *ngIf=\"selectedAnimal\">\n\n      <div class=\"large-wrapper\">\n        <div class=\"list\">\n          <h2>Species: {{selectedAnimal.species}}</h2>\n          <h3>Name: {{selectedAnimal.name}}</h3>\n          <p>Age: {{selectedAnimal.age}}</p>\n          <p>Diet: {{selectedAnimal.diet}}</p>\n          <p>Location: {{selectedAnimal.location}}</p>\n          <p>Number of Caretakers: {{selectedAnimal.caretakers}}</p>\n          <p>Sex: {{selectedAnimal.sex}}</p>\n          <p>Likes: {{selectedAnimal.likes}}</p>\n          <p>Dislikes: {{selectedAnimal.dislikes}}</p>\n        </div>\n      </div>\n\n        <h3>Edit Animal?</h3>\n\n        <edit-animal [childSelectedAnimal]=\"selectedAnimal\" (doneButtonClickedSender)=\"finishedEditing()\"></edit-animal>\n    </div>\n\n  "
        // <animal-edit [childAnimalEdit]="masterAnimalsList" (clickSender)="editAnimal($event)"></animal-edit>
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map