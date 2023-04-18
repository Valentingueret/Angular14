import { AbstractControl, Validators, ValidationErrors } from '@angular/forms';

export class LoginValidator {

  static email(control: AbstractControl): ValidationErrors | null {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const valid = emailRegex.test(control.value);

    const errors = {
      email: {
        rules: 'Doit être un email valide'
      }
    };

    return !valid ? errors : null;
  }

}