import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/auth.service';
import { LoginReactiveFormComponent } from './login-reactive-form.component';
import { NgxMaskDirective } from 'ngx-mask';
import { CommonModule } from '@angular/common';

describe('LoginReactiveFormComponent', () => {
  let component: LoginReactiveFormComponent;
  let fixture: ComponentFixture<LoginReactiveFormComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginReactiveFormComponent],
      imports: [CommonModule, ReactiveFormsModule, NgxMaskDirective],
      providers: [
        FormBuilder,
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with default values', () => {
    const loginForm = component.loginForm;
    expect(loginForm).toBeDefined();
    expect(loginForm.get('cellphone')?.value).toBe('');
    expect(loginForm.get('password')?.value).toBe('');
  });

  it('should validate the form controls', () => {
    const loginForm = component.loginForm;
    const cellphone = loginForm.get('cellphone');
    const password = loginForm.get('password');

    cellphone?.setValue('');
    password?.setValue('');
    expect(cellphone?.valid).toBeFalsy();
    expect(password?.valid).toBeFalsy();

    cellphone?.setValue('12345678901');
    password?.setValue('password123');
    expect(cellphone?.valid).toBeTruthy();
    expect(password?.valid).toBeTruthy();
  });

  it('should call AuthService login method when form is valid and login is called', () => {
    const loginForm = component.loginForm;
    loginForm.get('cellphone')?.setValue('12345678901');
    loginForm.get('password')?.setValue('password123');

    mockAuthService.login.and.returnValue(true);

    component.login();

    expect(mockAuthService.login).toHaveBeenCalledWith('12345678901', 'password123');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should alert "Login Failed" when login fails', () => {
    spyOn(window, 'alert');
    const loginForm = component.loginForm;
    loginForm.get('cellphone')?.setValue('12345678901');
    loginForm.get('password')?.setValue('password123');

    mockAuthService.login.and.returnValue(false);

    component.login();

    expect(mockAuthService.login).toHaveBeenCalledWith('12345678901', 'password123');
    expect(window.alert).toHaveBeenCalledWith('Login Failed');
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});
