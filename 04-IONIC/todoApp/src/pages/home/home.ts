import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Task} from '../../model/task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  /**
   * gestion des dates
   */
date: Date = new Date();

  /**
   * affichage d'un formulaire;
   */


  /**
   * l'affiche
   */
  /**creation d'une tache
   *
   */
tasks= new Task();

  /**
   * Liste des taches
   */
  tasks: Task[] = [
    {
      id: 1,
      name: 'faire une sieste 15min',
      status: false
    },

    {
      id: 2,
      name: 'boire de l\'eau',
      status: true
    },
    {
      id: 3,
      name: 'promener le chien',
      status: false
    },
    {
      id: 4,
      name: 'donner a manger au poisson',
      status: false
    },
    {
      id: 5,
      name: 'payer les impots',
      status: false
    },
  ];

  /**
   * declencher l'enregistrement
   * d'une nouvelle tache
   */

  saveTask() {
    /**
     * je verifie si l'utilisateur a bien
     * saisi un "name" avant d'enregistrer.
     */
    if (undefined ! == this.task.name){

      /**attribution d'un id*/
      this.task.id = Date.now();


    //-- ajouter de la tache dans le tableau
    this.tasks.push(this.task);
    //-- reinitialisation
    this.active = false;
    setTimeout(()=> this.active = true, 0);
    this.task = new Task();
    }
  }

  /**
   * declenche l'enregistrement
   * lors de la pression sur la
   * touche "enter"
   * @param key
   */
  enterSave(key: string) {
    if (key === "Enter"){
      this.saveTask();
    }

  }

  deleteTask(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task),deleteCount1)
  }
}
