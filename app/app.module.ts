import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';

import { Animal } from './animal.model';
import { EditAnimalComponent } from './edit-animal.component';
import { NewAnimalComponent } from './new-animal.component';
import { AnimalListComponent } from './animal-list.component';
import { CompletenessPipe } from './completeness.pipe';
import { Completeness2Pipe } from './completeness2.pipe';
// import { OldPipe } from './completeness.pipe';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                Animal,
                AnimalListComponent,
              EditAnimalComponent, NewAnimalComponent,
            CompletenessPipe, Completeness2Pipe],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
