import {Component} from '@angular/core';
import {Header} from './layout/header/header';
import {Sidebar} from './layout/sidebar/sidebar';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    imports: [
        Header,
        Sidebar,
        RouterOutlet
    ],
    styleUrl: './app.scss'
})
export class App {}
