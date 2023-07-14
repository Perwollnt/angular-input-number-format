import { AbstractControl, FormGroup } from "@angular/forms";
import { DecimalPipe } from "@angular/common";
import { inject } from "@angular/core";

export class FormElementFormatter {
    private formElements: AbstractControl[] = [];

    private decimalPipe: DecimalPipe = inject(DecimalPipe);

    addFormElement(formControl: AbstractControl): void {
        this.formElements.push(formControl);

        formControl.valueChanges.subscribe((value) => {
            value = value.replaceAll(" ", "").replaceAll(",", "");
            const numericValue = Number(value);
            if (!isNaN(numericValue)) {
                // Do something based on the value
                let formatted = this.formatNumber(value);
                //console.log(formatted);
                console.log(formatted);
                
                
                formControl.setValue(formatted, { emitEvent: false })
                
            }
            
        });
    }

    public formatNumber(value: string): string {
        // const parts = value.split('');
        // const formattedParts = [];
    
        // while (parts.length > 0) {
        //   formattedParts.unshift(parts.splice(-3).join(''));
        // }
    
        // return formattedParts.join(',');
        
        return this.decimalPipe.transform(value, "1.0-2") as string;
        
    
    }
}