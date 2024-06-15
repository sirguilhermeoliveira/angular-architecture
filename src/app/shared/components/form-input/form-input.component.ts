import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, NgxMaskDirective],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true,
    }
  ]
})
export class FormInputComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() mask: string = '';
  @Input() placeholder: string = '';
  @Input() minlength: number = 0;
  @Input() maxlength: number | null = null;
  @Input() required: boolean = false;

  value: string = '';
  isPasswordVisible: boolean = false;

  ngOnInit(): void {
    this.isPasswordVisible = this.type === 'password';
  }


  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Lógica personalizada para desabilitar o estado, se necessário
  }
  onInputChange(value: any): void {
    this.value = value;
    this.onChange(this.value);
  }

  onBlur(): void {
    this.onTouched();
  }

  togglePasswordVisibility(): void {
    this.type = (this.type === 'password') ? 'text' : 'password';
  }
}
