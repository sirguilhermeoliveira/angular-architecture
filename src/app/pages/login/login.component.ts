import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/auth.service';
import { RowComponent } from '@components/global/row/row.component';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RowComponent, NgxMaskDirective, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class Login {
  title = 'Login';
  cellphone: string = '';
  password: string = '';
  passwordFieldType: string = 'password';
  
  constructor(private router: Router, private authService: AuthService) {}

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  login() {
    if (this.cellphone && this.password) {
      const isAuthenticated = this.authService.login(this.cellphone, this.password);
      if (isAuthenticated) {
        this.router.navigate(['/home']); 
      } else {
        alert('Login failed');
      }
    } else {
      alert('Please enter cellphone and password');
    }
}
}
