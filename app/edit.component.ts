import {Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-edit',
  template: `<button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>


  `
})

export class AnimalEditComponent {
@Input() childAnimalEdit: Animal[];
@Output() clickSender = new EventEmitter();

editButtonHasBeenClicked(animalToEdit: Animal) {
  this.clickSender.emit(animalToEdit);
  console.log("something happened");
}
}
