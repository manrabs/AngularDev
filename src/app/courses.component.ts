import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        {{text | summary}}
        
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
    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }

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

    text = `
    Ayy, the blues is now kickin' and dinner is three Michelin
    I don't eat red meat, but still got beef sizzlin' Know that I need discipline
    I keep singin' for all these hoes, they keep listenin'
    Niggas love to bro up with the boy and dap fists-es
    But we are not equivalent, dawg
    I been an only child, don't need siblings
    And I'm past them like the times that he's livin' in, okay
    `

}