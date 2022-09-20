import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'LoginValidation';
  registerForm!: FormGroup;
  submitted = false;
 
  constructor(private formBuilder: FormBuilder) {}
 
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5),Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{5,12}$')]],
      confirm_password: ['', [Validators.required]]
    }, { 
      validator: ConfirmedValidator('password', 'confirm_password')
    });
  }
 
  onSubmit() {
    this.submitted = true;
 
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
      alert('Incorrect username or password');
      return;
    }
 
    alert('SUCCESS!!');
  }
}