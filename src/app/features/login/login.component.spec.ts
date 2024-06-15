import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@auth/auth.service';
import { LoginComponent } from './login.component';
import { RowComponent } from '@layouts/row/row.component';
import { NgxMaskDirective } from 'ngx-mask';
import { CommonModule } from '@angular/common';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthService: jasmine.SpyObj<AuthService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['login']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, RowComponent, NgxMaskDirective, CommonModule],
      providers: [
        { provide: AuthService, useValue: mockAuthService },
        { provide: Router, useValue: mockRouter }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form fields with default values', () => {
    expect(component.cellphone).toBe('');
    expect(component.password).toBe('');
  });

  it('should show alert if cellphone or password is missing', () => {
    spyOn(window, 'alert');

    component.cellphone = '';
    component.password = '';
    component.login();
    expect(window.alert).toHaveBeenCalledWith('Please enter cellphone and password');

    component.cellphone = '12345678901';
    component.password = '';
    component.login();
    expect(window.alert).toHaveBeenCalledWith('Please enter cellphone and password');

    component.cellphone = '';
    component.password = 'password123';
    component.login();
    expect(window.alert).toHaveBeenCalledWith('Please enter cellphone and password');
  });

  it('should call AuthService login method when form is valid and login is called', () => {
    component.cellphone = '12345678901';
    component.password = 'password123';

    mockAuthService.login.and.returnValue(true);

    component.login();

    expect(mockAuthService.login).toHaveBeenCalledWith('12345678901', 'password123');
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/home']);
  });

  it('should alert "Login failed" when login fails', () => {
    spyOn(window, 'alert');
    component.cellphone = '12345678901';
    component.password = 'password123';

    mockAuthService.login.and.returnValue(false);

    component.login();

    expect(mockAuthService.login).toHaveBeenCalledWith('12345678901', 'password123');
    expect(window.alert).toHaveBeenCalledWith('Login failed');
    expect(mockRouter.navigate).not.toHaveBeenCalled();
  });
});
