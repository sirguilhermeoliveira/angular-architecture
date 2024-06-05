import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RowComponent } from '@components/global/row/row.component';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-login-reactive-form',
  standalone: true,
  imports: [FormsModule, RowComponent, NgxMaskDirective, CommonModule],
  templateUrl: './login-reactive-form.component.html',
  styleUrl: './login-reactive-form.component.css'
})


export class LoginReactiveFormComponent {
  title = 'Login';
  cellphone: string | undefined;
  password: string | undefined;
  passwordFieldType: string = 'password';
  authentication: boolean = true;
  
  constructor(private router: Router) {}

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }

  login() {
    this.cellphone = '';
    this.password = '';
    this.authentication = true;
    if(this.authentication){
        this.router.navigate(['/home']);
    }
  }
}
