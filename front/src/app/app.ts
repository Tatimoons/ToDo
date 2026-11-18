import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('todo-front');
  description = 'Здесь будут мои задачи';

  showEmptyMessage() {
    this.description = 'Пока задач нет';
  }
}
