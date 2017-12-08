"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.animals = [
            new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises"),
            new Animal("Arctic Fox", "Moon", 1, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
            new Animal("Ocelot", "Prince", 12, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Non-rope-based toys"),
        ];
        this.selectedAnimal = null;
        this.youngAnimals = [];
        this.oldAnimals = [];
        this.selectedKind = this.animals[0];
        this.showYoungAnimals = false;
        this.showOldAnimals = false;
    }
    AppComponent.prototype.newKind = function (species, name, age, diet, location, caretakers, sex, likes, dislikes) {
        var newAnimal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
        this.animals.push(newAnimal);
    };
    AppComponent.prototype.viewAnimal = function (clickedAnimal) {
        this.selectedAnimal = clickedAnimal;
    };
    AppComponent.prototype.checkYoungAnimals = function () {
        this.showYoungAnimals = !this.showYoungAnimals;
        this.getYoungAnimals();
    };
    AppComponent.prototype.getYoungAnimals = function () {
        var _this = this;
        this.animals.forEach(function (animal) {
            if (animal.age < 3) {
                _this.youngAnimals.push(animal);
            }
        });
    };
    AppComponent.prototype.checkOldAnimals = function () {
        this.showOldAnimals = !this.showOldAnimals;
        this.getOldAnimals();
    };
    AppComponent.prototype.getOldAnimals = function () {
        var _this = this;
        this.animals.forEach(function (animal) {
            if (animal.age > 10) {
                _this.oldAnimals.push(animal);
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n  <h1>Zoo</h1>\n    <ul>\n    <li (click)=\"viewAnimal(currentAnimal)\" *ngFor=\"let currentAnimal of animals\">{{currentAnimal.species}}</li>\n    </ul>\n\n    <form>\n      <label for=\"animalSpecies\">Enter the animal's species</label>\n      <input type=\"text\" #animalSpecies><br>\n      <label for=\"animalName\">Enter the animal's name</label>\n      <input type=\"text\" #animalName><br>\n      <label for=\"animalAge\">Enter the animal's age</label>\n      <input type=\"number\" #animalAge><br>\n      <label for=\"animalDiet\">Enter the animal's diet</label>\n      <input type=\"text\" #animalDiet><br>\n      <label for=\"animalLocation\">Enter the animal's location</label>\n      <input type=\"text\" #animalLocation><br>\n      <label for=\"animalCaretakers\">Enter the number of caretakers</label>\n      <input type=\"number\" #animalCaretakers><br>\n      <label for=\"animalSex\">Enter the sex of the animal</label>\n      <input type=\"text\" #animalSex><br>\n      <label for=\"animalLikes\">Enter the animal's likes</label>\n      <input type=\"text\" #animalLikes><br>\n      <label for=\"animalDislikes\">Enter the animals dislikes</label>\n      <input type=\"text\" #animalDislikes><br>\n\n      <button (click)=\"newKind(animalSpecies.value, animalName.value, animalAge.value, animalDiet.value, animalLocation.value, animalCaretakers.value, animalSex.value, animalLikes.value, animalDislikes.value )\">Add!</button>\n    </form>\n\n\n    <div class=\"animal-wrapper\" *ngIf=\"selectedAnimal\">\n      <h3>Edit Animal?</h3>\n      <label>Edit Animal Name:</label>\n      <input [(ngModel)]=\"selectedAnimal.species\">\n      <input [(ngModel)]=\"selectedAnimal.name\">\n      <input [(ngModel)]=\"selectedAnimal.age\">\n      <input [(ngModel)]=\"selectedAnimal.diet\">\n      <input [(ngModel)]=\"selectedAnimal.location\">\n      <input [(ngModel)]=\"selectedAnimal.caretakers\">\n      <input [(ngModel)]=\"selectedAnimal.sex\">\n      <input [(ngModel)]=\"selectedAnimal.likes\">\n      <input [(ngModel)]=\"selectedAnimal.dislikes\">\n\n\n      <!--<button (click)=\"editKindAttribute(selectedAnimal.name)\">Edit Animal</button>--->\n\n      <h2>{{selectedAnimal.species}}</h2>\n      <p>{{selectedAnimal.name}}</p>\n      <p>{{selectedAnimal.age}}</p>\n      <p>{{selectedAnimal.diet}}</p>\n      <p>{{selectedAnimal.location}}</p>\n      <p>{{selectedAnimal.caretakers}}</p>\n      <p>{{selectedAnimal.sex}}</p>\n      <p>{{selectedAnimal.likes}}</p>\n      <p>{{selectedAnimal.dislikes}}</p>\n\n    </div>\n    <button (click)=\"checkYoungAnimals()\">Check to see which animals are young animals (<2 years old)</button>\n    <div *ngIf=\"showYoungAnimals\">\n    <ul>\n    <li *ngFor=\"let youngAnimal of youngAnimals\">{{youngAnimal.name}}</li>\n    </ul>\n    </div>\n\n    <button (click)=\"checkOldAnimals()\">Check to see which animals are old animals (<10 years old)</button>\n    <div *ngIf=\"showOldAnimals\">\n    <ul>\n    <li *ngFor=\"let oldAnimal of oldAnimals\">{{oldAnimal.name}}</li>\n    </ul>\n    </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Animal = (function () {
    function Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.diet = diet;
        this.location = location;
        this.caretakers = caretakers;
        this.sex = sex;
        this.likes = likes;
        this.dislikes = dislikes;
    }
    return Animal;
}());
exports.Animal = Animal;
//# sourceMappingURL=app.component.js.map