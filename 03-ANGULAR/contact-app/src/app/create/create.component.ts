import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  nouveauContact: Contact = new Contact();
  @Output() unContactEstCree = new EventEmitter ();
  constructor() { }

  ngOnInit() {
  }

}
// fonction apellé apres le submit du formulaire*/

exportContact()
/**
 lorsque mon formulaire st soumis
 j'emet un evenement qi sera ecouter
 par mon application et qui recuperera
 les données du nouveau contact

 */
 console.log(this.nouveauContact);
