import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormcomponentComponent } from './formcomponent/formcomponent.component';
import { NumberformatDirective } from './directives/numberformat.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamelengthDirective } from './directives/namelength.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormcomponentComponent,
    NumberformatDirective,
    NamelengthDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
