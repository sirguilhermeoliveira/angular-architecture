import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core'
@Component({
  selector: 'main-button',
  templateUrl: './main-button.component.html',
  styleUrls: ['./main-button.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class MainButtonComponent {
  @Input() title: string = '';
  @Input() isDisabled: boolean | null = false;
  @Input() buttonType: string = 'button'
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    if (!this.isDisabled) {
      this.buttonClick.emit();
    }
  }
}
