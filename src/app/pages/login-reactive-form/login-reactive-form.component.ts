import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'; // Importe FormGroup, FormBuilder e Validators
import { Router } from '@angular/router';
import { AuthService } from '@auth/auth.service';
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

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { 
    this.loginForm = this.fb.group({ 
      cellphone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(15)]], 
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }

  login() {
    const cellphone = this.loginForm.get('cellphone')?.value;
    const password = this.loginForm.get('password')?.value;
    const isAuthenticated = this.authService.login(cellphone, password);
    if(isAuthenticated) { 
      this.router.navigate(['/home']);
    } else{
      alert("Login Failed")
    }
  }
  }
