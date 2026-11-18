import { Component, signal } from '@angular/core';

interface Task {
  id: number;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly tasks = signal<Task[]>([
    { id: 1, title: 'Задача 1' },
    { id: 2, title: 'Задача 2' }
  ]);
}
