import { Component } from '@angular/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@Component({
  selector: 'app-module',
  template: `<h1>App Module Works<h1>
  `
})

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
