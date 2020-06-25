import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export function validateCityWithParams(allowedCities: string[]): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {

        if (allowedCities.includes(control.value)) {
            return {};
        }
        else {
            return {
                city: true
            }
        }

    }
}