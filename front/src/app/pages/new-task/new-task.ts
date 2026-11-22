import {Component, inject, signal} from '@angular/core';
import {TaskService} from '../../service/task.service';
import {TaskCreateRequest} from '../../model/task.model';
import {finalize} from 'rxjs';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss',
})
export class NewTask {
    private readonly taskService = inject(TaskService);

    protected readonly draftTitle = signal('');
    protected readonly draftDescription = signal('');
    protected readonly isCreatingTask = signal(false);
    protected readonly statusMessage = signal('');


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
                error: () => this.statusMessage.set('Не удалось создать задачу')
            });
    }
}
