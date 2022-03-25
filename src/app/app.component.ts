import { Component } from '@angular/core';
import { Task } from './task/interface/task';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWFirebaseTodoList';
  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Create a TodoList app',
      description: 'Using Firebase and Angular create a TodoList app!'
    }
  ];
}
