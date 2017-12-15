import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Animal[]) {
    let output: Animal[] = [];
    for(let i = 0; i<input.length; i++){
      if(input[i].age < 3 ) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
