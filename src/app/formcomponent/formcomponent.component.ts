import { FormBuilder, FormGroup } from "@angular/forms"
import { Component } from '@angular/core';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent {
  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      myNumber: ['']
    });
  }

  public myForm: FormGroup;
}
