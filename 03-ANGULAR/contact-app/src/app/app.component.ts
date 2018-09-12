/**
 * pour declarer une classe comme composant de
 * notre application, on importe "component" via
 * @angular/core
 */
import { Component } from '@angular/core';
import {variable} from '@angular/compiler/src/output/output_ast';

class Contact {
  id: number;
  name: string;
  username: string;
  email: string;
  adresse?: object;
  phone?: number;
  website?: string;
  company?: object;
}

/**
 * @component est ce qu'on appel un decorateur.
 * il va nous permettre de definir 3 parametres
 * essentiels a notre application...
 */
@Component({
  /**
   * le selecteur (selector) determine la
   * maniere dont le composant sera affiché
   * dans notre HTML: <app-root></app-root>;
   * vous devez OBLIGATOIREMENT avoir la balise
   * d'ouverture et de fermeture.
   */
  selector: 'app-root',
  /**
   * "templateUrl" ou "template" est la
   * partie visible du composant. c'est
   * ce qui s'affiche a l'ecran lorsque
   * le composant est utilisé.
   */
  templateUrl: './app.component.html',
  // template: `
    // <h1>{{title}}</h1>
  // `,
  styleUrls: ['./app.component.css']
  // styles: [`
  // h1 { color: red;}
  // `]
})
/**
 * la classe contient les données du composant,
 * mais aussi, son comportement (ce qu'il fait).
 */

export class AppComponent {

  // -- declaration d'une variable
  title = 'gestion de mes contacts';

// -- declaration d'un objet
  unContact = {
    id: 1,
    name: 'Hugo LIEGEARD',
    username: 'hugo liegard',
    email: 'hugo.liegard@lepoles.org',
  };

  // Tableau de Contacts
  mesContacts = [

    {
      id: 1,
      name: 'Elies KEDIM',
      username: 'Kedim Elies',
      email: 'elieskedim1@gmail.com'
    },
    {
      id: 2,
      name: 'Luc JOINVIL',
      username: 'luc joinvil',
      email: 'luc.joinvil@lepoles.com'
    },

    {

      id: 3,
      name: 'jhordan SINVRY',
      username: 'jhordan sinvry',
      email: 'jsinvry@gmail.com'
    },

    {
      id: 4,
      name: 'Layla LAHCENE',
      username: 'layla lahcene',
      email: 'laylaµ.lahvene@lepoles.org'
    },
  ];
  showContact(contactCliqueParMonUtilisateur){
    this.contactActif = contactCliqueParMonUtilisateur
  }
}
/*
*Je peux afficher le contenu de ma variable*/
