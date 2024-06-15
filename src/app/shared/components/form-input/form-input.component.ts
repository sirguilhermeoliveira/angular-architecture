import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule, NgxMaskDirective]
})
export class FormInputComponent {
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() mask: string = '';
  @Input() placeholder: string = '';
  @Input() ngModel: string = '';
  @Input() ngModelChange: (value: any) => void = () => {};
  @Input() minlength: number = 0;
  @Input() maxlength: number = 0;
  @Input() required: boolean = false;
}
