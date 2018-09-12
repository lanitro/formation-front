import { Pipe, PipeTransform } from '@angular/core';
import {Task} from '../models/task';

@Pipe({
  name: 'taskFilter',
  pure: false
})
export class TaskFilterPipe implements PipeTransform {

  transform(tasks: Task[], status: boolean): Task[] {
 const filteredTask Task[] =[];
    for (let i = tasks.length; i--;){
      // -- verification dans la console
      console.log(tasks[i]);
      /**
       * je verifie si le "status" de l'une de mes taches (tasks[i])
       * correspond au "status" que je recherche
       */
      if ( tasks[i].status === status ){
        filteredTask.push(tasks[i]);
        return filteredTasks[i];
      }
    }
      return filteredTask;
  }

}
