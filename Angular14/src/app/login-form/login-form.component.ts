import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    } else {
      console.log('Formulaire invalide, ho bah mince alors !');
    }

  }

  userForm = this.fb.group({
    credentials: this.fb.group({
      email: [''],
      password: [''],
    }),
  });

  constructor(private fb: FormBuilder) {}
  
}
