import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.css',
  standalone: true
})
export class ListTasksComponent {
  @Input() tasks: string[] = [];

  constructor() { }
}
