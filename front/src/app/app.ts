import { Component, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  private readonly httpClient = inject(HttpClient);
  protected readonly tasks = signal<Task[]>([]);

  loadTasks(url: string) {
    const request = this.httpClient.get<Task[]>(url);

    request.subscribe(receivedTasks => {
      this.tasks.set(receivedTasks);
    });
  }
}
