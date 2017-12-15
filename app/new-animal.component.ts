import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
  <h2>Add another animal</h2>
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

</form>

<button (click)="submitForm(animalSpecies.value, animalName.value, animalAge.value, animalDiet.value, animalLocation.value, animalCaretakers.value, animalSex.value, animalLikes.value, animalDislikes.value)">Add Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(animalSpecies: string, animalName: string, animalAge: number, animalDiet: string, animalLocation: string, animalCaretakers: number, animalSex: string, animalLikes: string, animalDislikes: string){
    let newAnimalToAdd: Animal = new Animal(animalSpecies, animalName, animalAge, animalDiet, animalLocation, animalCaretakers, animalSex, animalLikes, animalDislikes);
    console.log(animalSpecies);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
