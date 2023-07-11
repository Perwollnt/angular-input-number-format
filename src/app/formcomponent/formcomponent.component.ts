import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { Component } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent {
  public nameLengh = AppComponent.maxNameLenght;

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      myNumber: [''],
      name: ['']
    });
  }

  public myForm: FormGroup;

  get nameControl() {
    return this.myForm.get('name') as FormControl;
  }
}
