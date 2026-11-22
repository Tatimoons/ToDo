import {Routes} from '@angular/router';
import {Home} from './pages/home/home';
import {Tasks} from './pages/tasks/tasks';
import {NewTask} from './pages/new-task/new-task';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'tasks', component: Tasks},
    {path: 'new-task', component: NewTask}
];
