import { Component } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { Animal } from './animal.model';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';

@Component({
  selector: 'app-root',
  template: `
  <h1>Zoo</h1>
  <div class="current-list">
  <h2>Current List of Animals</h2>
  <h4>Click to see details</h4>
    <ul>
    <li (click)="viewAnimal(currentAnimal)" *ngFor="let currentAnimal of masterAnimalsList">{{currentAnimal.species}}</li>
    </ul>
  </div>

    <div class="animal-wrapper" *ngIf="selectedAnimal">

      <div class="large-wrapper">
        <div class="list">
          <h2>Species: {{selectedAnimal.species}}</h2>
          <h3>Name: {{selectedAnimal.name}}</h3>
          <p>Age: {{selectedAnimal.age}}</p>
          <p>Diet: {{selectedAnimal.diet}}</p>
          <p>Location: {{selectedAnimal.location}}</p>
          <p>Number of Caretakers: {{selectedAnimal.caretakers}}</p>
          <p>Sex: {{selectedAnimal.sex}}</p>
          <p>Likes: {{selectedAnimal.likes}}</p>
          <p>Dislikes: {{selectedAnimal.dislikes}}</p>
        </div>
      </div>

        <h3>Edit Animal?</h3>

        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
    </div>

    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>

  `
})

export class AppComponent {
  masterAnimalsList: Animal[] = [
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises"),
    new Animal("Arctic Fox", "Moon", 1, "Carnivore", "Northern Trail", 5, "Female", "Cool shade", "Loud noises"),
    new Animal("Ocelot", "Prince", 12, "Carnivore", "Tropical Rain Forest Building", 6, "Male", "Laying in the sunshine", "Non-rope-based toys"),
  ];

  selectedAnimal = null;
  selectedKind: Animal = this.masterAnimalsList[0];
  addAnAnimal = null;

  viewAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  editAnimal(clickedAnimal) {
      this.selectedAnimal = clickedAnimal;
    }

    finishedEditing() {
   this.selectedAnimal = null;
 }

addAnimal(newAnimalFromChild: Animal) {
  this.masterAnimalsList.push(newAnimalFromChild);
}



}
