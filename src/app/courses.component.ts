import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <button [style.backgroundColor]="isActive ? 'blue': 'black'"class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">Save</button>
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
    email = "me@example.com";

    onKeyUp(){
        console.log(this.email);
    }

    onSave(event: any){
        console.log("<-- number of times button was clicked");
    }

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

}