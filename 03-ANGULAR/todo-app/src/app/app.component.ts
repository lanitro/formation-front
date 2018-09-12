import { Component } from '@angular/core';
import {Task} from 'src/app/shared/models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // -- Notre tableau de taches
  tasks: Task[] = [
    {
      id: 1,
      name: 'faire la vaisselles',
      status: false
    },
    {
      id: 2,
      name: 'sortir les poubelles',
      status: false
    },
    {
      id: 3,
      name: 'sortir ma fiancée',
      status: true
    },
    {
      id: 4,
      name: 'corriger les evaluation',
      status: false
    },
  ];

  /**
   * l'utilisateur viens de
   * terminer une tache
   * @param {Task} task
   */
  taskIsDone(task: Task){
    task.status = true;

  }

  /**
   * lorsque l'utilisateur cree une tache
   * dans "add-task", celle ci est recuperer
   * par "app-component" puis ajouté dans le
   * tableau de taches
   * @param taskFromEvent
   */
  newTask(taskFromEvent: Task){
    this.tasks.push(taskFromEvent);
  }

  /**
   * l'utilisateur viens de supprimer
   * une tache. on la retire du tableau
   * @param task
   */
  removeTask(task: Task) {
 this.tasks.splice(this.tasks.indexOf(task));
  }
}
