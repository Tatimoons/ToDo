import {Component, signal, inject} from '@angular/core';
import {Task, TaskCreateRequest} from './model/task.model';
import {TaskService} from './service/task.service';
import {finalize} from 'rxjs';

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
    protected readonly isCreatingTask = signal(false);
    protected readonly statusMessage = signal('');
    protected readonly taskListError = signal('');

    loadTasks() {
        this.taskListError.set('');

        const request = this.taskService.getTasks();

        request.subscribe({
            next: (receivedTasks) => this.tasks.set(receivedTasks),
            error: () => this.taskListError.set('Не удалось загрузить список задач')
        });
    }

    createTask(title: string, description: string) {
        this.isCreatingTask.set(true);
        this.statusMessage.set('');

        const requestBody: TaskCreateRequest = {
            title: title
        }

        if (description !== '') {
            requestBody.description = description;
        }

        this.taskService.createTask(requestBody)
            .pipe(finalize(() => this.isCreatingTask.set(false)))
            .subscribe({
                next: () => this.loadTasks(),
                error: () => this.statusMessage.set('Не удалось создать задачу')
            });
    }
}
