import { Routes, RouterModule  } from '@angular/router';
import { LoginComponent } from '@features/login/login.component';
import { LoginReactiveFormComponent } from '@features/login-reactive-form/login-reactive-form.component';
import { HomeComponent } from '@features/home/home.component';
import { AuthGuard } from '@auth/auth.guard';


export const routes: Routes = [  { path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'login-reactive-form', component: LoginReactiveFormComponent },
{ path: 'home', component: HomeComponent, canActivate:[AuthGuard] },
 ];

 export const AppRoutingModule = RouterModule.forRoot(routes);