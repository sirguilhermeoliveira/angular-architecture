import { Routes, RouterModule  } from '@angular/router';
import { LoginComponent } from '@pages/login/login.component';
import { LoginReactiveFormComponent } from '@pages/login-reactive-form/login-reactive-form.component';
import { HomeComponent } from '@pages/home/home.component';


export const routes: Routes = [  { path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'login-reactive-form', component: LoginReactiveFormComponent },
{ path: 'home', component: HomeComponent },
 ];

 export const AppRoutingModule = RouterModule.forRoot(routes);