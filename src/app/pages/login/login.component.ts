import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loging',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'Login';
  username: string = '';
  password: string = '';
  authentication: boolean = true;
  
  constructor(private router: Router) {}

  login() {
    console.log(this.username);
    console.log(this.password);
    this.username = '';
    this.password = '';
    this.authentication = true;
    if(this.authentication){
        this.router.navigate(['/home']);
    }
  }
}
