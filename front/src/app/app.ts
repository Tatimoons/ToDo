import { Component, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Task {
    id: number;
    title: string;
}

interface TaskCreateRequest {
    title: string;
    description?: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    private readonly httpClient = inject(HttpClient);

    protected readonly tasks = signal<Task[]>([]);
    protected readonly draftTitle = signal('');
    protected readonly draftDescription = signal('');

    loadTasks(url: string) {
        const request = this.httpClient.get<Task[]>(url);

        request.subscribe(receivedTasks => {
            this.tasks.set(receivedTasks);
        });
    }

    createTask(title: string, description: string) {
        const requestBody: TaskCreateRequest = {
            title: title
        }

        if (description !== '') {
            requestBody.description = description;
        }

        this.httpClient.post<Task>('/tasks', requestBody).subscribe(() => {
            this.loadTasks('/tasks');
        })
    }
}
