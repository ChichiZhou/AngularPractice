import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  // 这个和 Validators.required 作用是一样的，都是用来检验输入的值
  // 这里注意，传入参数是 AbstractControl (也就是一个 formcontrol object)
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  // 使用 async validation
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    // resolve 和 reject 都是 takes value and return void
    // resolve and reject are functions
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'hezho') resolve({ shouldBeUnique: true });
        else resolve(null);
      }, 2000);
    });
  }
}
