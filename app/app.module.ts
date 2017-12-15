import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
// import { AddAnimalComponent } from './add.component';
import { Animal } from './animal.model';
import { AnimalEditComponent } from './edit.component';
import { EditAnimalComponent } from './edit-animal.component';

@NgModule({
  imports: [ BrowserModule,
            FormsModule ],
  declarations: [ AppComponent,
                  // AddAnimalComponent,
                Animal,
                AnimalEditComponent,
              EditAnimalComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
