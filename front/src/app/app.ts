import { Component, signal, inject } from '@angular/core';
import { Task, TaskCreateRequest } from './model/task.model';
import {TaskService} from './service/task.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss'
})
export class App {
    private readonly taskService = inject(TaskService);

    protected readonly tasks = signal<Task[]>([]);
    protected readonly draftTitle = signal('');
    protected readonly draftDescription = signal('');

    loadTasks() {
        const request = this.taskService.getTasks();

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

        this.taskService.createTask(requestBody).subscribe(() => {
            this.loadTasks();
        })
    }
}
