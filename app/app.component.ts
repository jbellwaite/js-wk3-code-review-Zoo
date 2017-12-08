import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Zoo</h1>
    <ul>
    <li (click)="viewAnimal(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.species}}</li>
    </ul>

    <form>
      <label for="animalSpecies">Enter the animal's species</label>
      <input type="text" #animalSpecies><br>
      <label for="animalName">Enter the animal's name</label>
      <input type="text" #animalName><br>
      <label for="animalAge">Enter the animal's age</label>
      <input type="number" #animalAge><br>
      <label for="animalDiet">Enter the animal's diet</label>
      <input type="text" #animalDiet><br>
      <label for="animalLocation">Enter the animal's location</label>
      <input type="text" #animalLocation><br>
      <label for="animalCaretakers">Enter the number of caretakers</label>
      <input type="number" #animalCaretakers><br>
      <label for="animalSex">Enter the sex of the animal</label>
      <input type="text" #animalSex><br>
      <label for="animalLikes">Enter the animal's likes</label>
      <input type="text" #animalLikes><br>
      <label for="animalDislikes">Enter the animals dislikes</label>
      <input type="text" #animalDislikes><br>

      <button (click)="newKind(animalSpecies.value, animalName.value, animalAge.value, animalDiet.value, animalLocation.value, animalCaretakers.value, animalSex.value, animalLikes.value, animalDislikes.value )">Add!</button>
    </form>


    <div class="animal-wrapper" *ngIf="selectedAnimal">
      <h3>Edit Animal?</h3>
      <label>Edit Animal Name:</label>
      <input [(ngModel)]="selectedAnimal.species">
      <input [(ngModel)]="selectedAnimal.name">
      <input [(ngModel)]="selectedAnimal.age">
      <input [(ngModel)]="selectedAnimal.diet">
      <input [(ngModel)]="selectedAnimal.location">
      <input [(ngModel)]="selectedAnimal.caretakers">
      <input [(ngModel)]="selectedAnimal.sex">
      <input [(ngModel)]="selectedAnimal.likes">
      <input [(ngModel)]="selectedAnimal.dislikes">


      <!--<button (click)="editKindAttribute(selectedAnimal.name)">Edit Animal</button>--->

      <h2>{{selectedAnimal.species}}</h2>
      <p>{{selectedAnimal.name}}</p>
      <p>{{selectedAnimal.age}}</p>
      <p>{{selectedAnimal.diet}}</p>
      <p>{{selectedAnimal.location}}</p>
      <p>{{selectedAnimal.caretakers}}</p>
      <p>{{selectedAnimal.sex}}</p>
      <p>{{selectedAnimal.likes}}</p>
      <p>{{selectedAnimal.dislikes}}</p>

    </div>
    <button (click)="checkYoungAnimals()">Check to see which animals are young animals (<2 years old)</button>
    <div *ngIf="showYoungAnimals">
    <ul>
    <li *ngFor="let youngAnimal of youngAnimals">{{youngAnimal.name}}</li>
    </ul>
    </div>

    <button (click)="checkOldAnimals()">Check to see which animals are old animals (<10 years old)</button>
    <div *ngIf="showOldAnimals">
    <ul>
    <li *ngFor="let oldAnimal of oldAnimals">{{oldAnimal.name}}</li>
    </ul>
    </div>
  `
})

export class AppComponent {
  animals: Animal[] = [
    new Animal("Northwest Black Tailed Deer", "Tinkerbell", 8, "Herbivore", "Northern Trail", 2, "Female", "Delicate roots and leaves", "Loud noises"),
  ];
  selectedAnimal = null;
  youngAnimals: Animal[] = []
  oldAnimals: Animal[] = []
  selectedKind: Animal = this.animals[0];
  showYoungAnimals: boolean = false;
  showOldAnimals: boolean = false;

  newKind(species, name, age, diet, location, caretakers, sex, likes, dislikes) {
    let newAnimal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.animals.push(newAnimal);
  }

  viewAnimal(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  checkYoungAnimals(){
    this.showYoungAnimals = !this.showYoungAnimals;
    this.getYoungAnimals();
  }

  getYoungAnimals() {
    this.animals.forEach((animal) => {
      if (animal.age < 3) {
        this.youngAnimals.push(animal);
      } else{
      alert("There are no animals that are younger than 2 years old");
    }
    })
  }

  checkOldAnimals(){
    this.showOldAnimals = !this.showOldAnimals;
    this.getOldAnimals();
  }

  getOldAnimals() {
    this.animals.forEach((animal) => {
      if (animal.age < 10) {
        this.oldAnimals.push(animal);
      } else{
      alert("There are no animals that are older than 10 years old");
    }
    })
  }

}

export class Animal {
  constructor(
    public species: string,
    public name: string,
    public age: number,
    public diet: string,
    public location: string,
    public caretakers: number,
    public sex: string,
    public likes: string,
    public dislikes: string){}
}
