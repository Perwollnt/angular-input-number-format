import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamelengthDirective } from './directives/namelength.directive';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    NamelengthDirective,
    FormcomponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
