import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task, TaskCreateRequest} from '../model/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {
    private readonly httpClient = inject(HttpClient);

    getTasks() {
        return this.httpClient.get<Task[]>('/api/tasks');
    }

    createTask(requestBody: TaskCreateRequest) {
        return this.httpClient.post<Task>('/api/tasks', requestBody);
    }
}
