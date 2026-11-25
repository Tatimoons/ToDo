import {Component, input, output} from '@angular/core';

@Component({
    selector: 'app-text-field',
    imports: [],
    templateUrl: './text-field.html',
    styleUrl: './text-field.scss',
})
export class TextField {
    readonly value = input('');
    readonly valueChange = output<string>();
}
