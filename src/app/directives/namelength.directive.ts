import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Directive({
  selector: '[appNamelength]'
})
export class NamelengthDirective {
  @Input('appNameLength') limit: number = AppComponent.maxNameLenght;

  private innerValue: any;
  private onChange!: (_: any) => void;
  private onTouched!: () => void;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    if (value.length > this.limit) {
      this.el.nativeElement.value = value.slice(0, this.limit);
    }
  }
}