import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';
import { AppComponent } from './app.component';

@Component({
  selector: 'animal-list',
  template: `
  <button (click)="checkYoungAnimals()">Check to see which animals are young animals (<2 years old)</button>
    <div *ngIf="showYoungAnimals">
      <ul>
        <li *ngFor="let currentAnimal of childAnimalList | completeness">{{currentAnimal.name}}</li>
      </ul>
    </div>

    <button (click)="checkOldAnimals()">Check to see which animals are old animals (>10 years old)</button>
      <div *ngIf="showOldAnimals">
        <ul>
          <li  *ngFor="let currentAnimal of childAnimalList | completeness2">{{currentAnimal.name}}</li>
        </ul>
      </div>

  `
})

export class AnimalListComponent {
@Input() childAnimalList: Animal[];
@Output() clickSender = new EventEmitter();

youngAnimals: Animal[] = [];
oldAnimals: Animal[] = [];
showYoungAnimals: boolean = false;
showOldAnimals: boolean = false;

showOld(){
  console.log(this.childAnimalList);
}

checkYoungAnimals(){
   this.showYoungAnimals = !this.showYoungAnimals;
 }

 checkOldAnimals(){
  this.showOldAnimals = !this.showOldAnimals;
}

}
