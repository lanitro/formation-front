/*------------------------------------
          LES FONCTIONS
-------------------------------------*/
/**
 * declarer une fonction
 * NB : cette fonction ne retourne aucune valeur
 * et ne prend pas de parametres
 */

 function bonjour() {
     alert('bonjour !');
 }

 /**
  * je vais executer ma fonction "bonjour" et
  * declenche ses instructions.
  */
 bonjour();

 // function nomDeMaFonction( argument 1, argument 2, argument 3) {
     // les instructions
// }

function ditBonjour( prenom, nom) {
    console.log(prenom);
    document.write('bonjour <strong>' + prenom + '' + nom + '</strong> !');
}
// --Executer une fonction avec des arguments
ditBonjour('Hugo', 'LIEGEARD');

/*-----------
exercice;
creez une fonction permettant d'effectuer l'addition
de deux nombres (nb1 et nb2)
------------------------------*/

function addition(nb1, nb2){
    return nb1 + nb2;
}
console.log( addition(10, 5));