import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <button [style.backgroundColor]="isActive ? 'blue': 'black'"class="btn btn-primary" [class.active]="isActive">Save</button>
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
    `
})
export class CoursesComponent{
    title = "List of courses";
    courses;
    isActive = false;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }
}