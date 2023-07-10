import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFormattedNumber]'
})
export class NumberformatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, ''); // Remove non-numeric characters
    input.value = this.formatNumber(value);
  }

  formatNumber(value: string): string {
    const parts = value.split('');
    const formattedParts = [];

    while (parts.length > 0) {
      formattedParts.unshift(parts.splice(-3).join(''));
    }

    return formattedParts.join(' ');
  }
}
