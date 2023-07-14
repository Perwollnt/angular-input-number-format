import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms"
import { Component, OnInit } from '@angular/core';
import { AppComponent } from "../app.component";
import { FormElementFormatter } from "../formatters/FormElementFormatter";

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {

  public nameLengh = AppComponent.maxNameLenght;
  el: FormElementFormatter = new FormElementFormatter();

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      myNumber: [''],
      name: ['', Validators.maxLength(20)]
    });
  }
  ngOnInit(): void {
    this.el.addFormElement(this.myForm.get("name")!);

    this.myForm.get("name")?.valueChanges.subscribe((val: string) => {
      //console.log(this.el.formatNumber(val.replaceAll(",", "")));
      val = val.replaceAll(",", "");
      
      
      this.myForm.get("myNumber")?.setValue(this.el.formatNumber(val), { emitEvent: false })
    })

  }

  public myForm: FormGroup;

  get nameControl() {
    return this.myForm.get('name') as FormControl;
  }


}