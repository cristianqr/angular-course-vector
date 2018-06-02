import {AbstractControl} from '@angular/forms';
export class CustomValidatorService {
  static ageValidator (control: AbstractControl) {
    if (!control || !control.value) {
      return null;
    }

    const ageRegEx = /^[0-9]{1,2}$/;
    if (!ageRegEx.test(control.value)) {
      return {
        ageValidator: true
      };
    } else {
      return null;
    }
  }
}
