import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: "completeness2",
  pure: false
})

export class Completeness2Pipe implements PipeTransform {
  transform(input: Animal[]) {
    let output: Animal[] = [];
    for(let i = 0; i<input.length; i++){
      if(input[i].age >10 ) {
        output.push(input[i]);
      }
    }
    return output;
  }

}
