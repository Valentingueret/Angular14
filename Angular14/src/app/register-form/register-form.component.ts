import { Component } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

interface User {
  username: string;
  email: string;
  password: string;
  street: string;
  postalCode: string;
  city: string;
  
}

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',

})
export class RegisterFormComponent {
  userForm: FormGroup = new FormGroup({});
  registeredUser: User = {
    username: '',
    email: '',
    password: '',
    street: '',
    postalCode: '',
    city: ''
   
  };
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: [''],
      email: [''],
      password: [''],
      street: [''],
      postalCode: [''],
      city: ['']
    });
  }

  onSubmit() {
    this.registeredUser = this.userForm.value;
    this.userForm.reset();
  }
}
