import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appFormattedNumber]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NumberformatDirective),
      multi: true
    }
  ]
})
export class NumberformatDirective implements ControlValueAccessor {
  private innerValue: any;
  private onChange!: (_: any) => void;
  private onTouched!: () => void;

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const numericValue = value.replace(/\D/g, ''); // Remove non-numeric characters
    this.innerValue = numericValue;
    this.onChange(this.innerValue);
    this.el.nativeElement.value = this.formatNumber(numericValue);
  }

  formatNumber(value: string): string {
    const parts = value.split('');
    const formattedParts = [];

    while (parts.length > 0) {
      formattedParts.unshift(parts.splice(-3).join(''));
    }

    return formattedParts.join(' ');
  }

  writeValue(value: any) {
    this.innerValue = value;
    this.el.nativeElement.value = this.formatNumber(value);
  }

  registerOnChange(fn: (_: any) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.el.nativeElement.disabled = isDisabled;
  }
}
