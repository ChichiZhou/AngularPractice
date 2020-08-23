import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  // 所有的 validator 都在 ./username.validators.ts
  formHezho = new FormGroup({
    // 第一个参数是 formState，也就是 initial value of this form control object
    // 第二个参数是 validator
    usernameHezho: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace,
      ],
      UsernameValidators.shouldBeUnique
    ),
    passowrdHezho: new FormControl('', Validators.required),
  });
  get getUsernameHezho() {
    return this.formHezho.get('usernameHezho');
  }

  get getPasswordHezho() {
    return this.formHezho.get('passowrdHezho');
  }

  login() {
    this.formHezho.setErrors({
      invalidLogin: true,
    });
  }
}
