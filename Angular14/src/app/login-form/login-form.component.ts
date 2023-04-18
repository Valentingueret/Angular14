import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { LoginValidator } from './email-validators';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {

  loginForm = this.fb.group({
    credentials: this.fb.group({
      email: ['', [Validators.required, LoginValidator.email]]
    }),
  });
  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      console.log('Formulaire invalide');
    }

  }

  constructor(private fb: FormBuilder) {}
  
}
