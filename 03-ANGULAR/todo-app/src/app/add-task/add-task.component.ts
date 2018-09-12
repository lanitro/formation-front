import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  // La tache a creer
  task: Task = new Task();

  @Output() newTaskEvent = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
