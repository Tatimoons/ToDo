import {Component, inject, signal} from '@angular/core';
import {TaskService} from '../../service/task.service';
import {Task} from '../../model/task.model';

@Component({
  selector: 'app-tasks',
  imports: [],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss',
})
export class Tasks {
    private readonly taskService = inject(TaskService);

    protected readonly tasks = signal<Task[]>([]);
    protected readonly taskListError = signal('');

    loadTasks() {
        this.taskListError.set('');

        const request = this.taskService.getTasks();

        request.subscribe({
            next: (receivedTasks) => this.tasks.set(receivedTasks),
            error: () => this.taskListError.set('Не удалось загрузить список задач')
        });
    }
}
