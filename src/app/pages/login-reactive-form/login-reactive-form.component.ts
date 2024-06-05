import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; // Importe FormGroup, FormBuilder e Validators
import { Router } from '@angular/router';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-login-reactive-form',
  standalone: true,
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
})
export class LoginReactiveFormComponent {
  loginForm: FormGroup; // Declare um FormGroup
  passwordFieldType: string = 'password';
  authentication: boolean = true;

  constructor(private fb: FormBuilder, private router: Router) { 
    this.loginForm = this.fb.group({ 
      cellphone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(15)]], 
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  login() {
    const cellphone = this.loginForm.get('cellphone')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authentication = true;
    if(this.authentication && cellphone.length > 0 && password.length > 0) { 
        this.router.navigate(['/home']);
    }
  }
  }
