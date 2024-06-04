import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-tasks',
  standalone: true,
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css'
})
export class ListTasksComponent {
  @Input() tasks: string[] = [];

  constructor() { }
}
