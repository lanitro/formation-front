// alert('mon fichier JS fonctionne !');

// Deux slash pour un faire un commentairre uniligne

/*

Ici, je peux faire un commentaire
sur plusieurs lignes.

RACCOURCI:
SHIFT + ALT + A


*/

// --1 : declarer une variables JS
var Prenom;

// --2 : affecter une valeur
Prenom = "Mohamed";

// --3 : afficher la valeur de ma variable dans la console
console.log(Prenom);

/*--------------------------------------
----------LES TYPES DE VARIABLES--------
---------------------------------------*/
console.log(typeof Prenom);

//-- Declaration et affectation d'un nombre.

var Age = 40;

//-- Connaitre son type
console.log(typeof Age);

/*----------------------------------------
          LA PORTEE DES VARIABLES

Les variables declarées directement a la racine du fichier
JS sont appelés: variable GLOBALES.

elles sont disponibles dans l'ensemble de votre document,
y compris dans les fonctions

###

les variables declarees a l'interieur d'une fonction sont
appelees : variables LOCALES.

elles sont disponibles uniquement dans le scope de la fonction.
*/

//-- les variables de type FLOAT
var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

//--Les Booleens (VRAI / FAUX)
var unBoolean = false; // true
console.log(unBoolean);
console.log(typeof unBoolean);

//--Les constantes
/**
 * la declaration CONST permet de creer une constante accessible
 * UNIQUEMENT en lecture. sa valeur ne pourra pas etre modifiée
 * par des reaffectation ulterieures. une constante ne peut pas
 * etre declaree a nouveau....
 */
const HOST = "localhost";
const USER = "root";
const PASSWORD = "mysql";

//je ne peux pas faire cela...
//USER = "Hugo";
//TypeError : Assignement to constant variable.

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/**
 * la fonction parseInt () pour retourner un Entier
 * a partir de mon string.
 */

 unNombre = parseInt(unNombre);
 console.log(unNombre);
 console.log(typeof unNombre);

 // Pour convertir un Float
 unNombre = "12.55";
 unNombre = parseFloat(unNombre);
 console.log(unNombre);
 console.log(typeof unNombre);

 //-- pour convertir un nombre en string
 unNombre = 10;
 var monString = unNombre.toString();
 console.log(monString);
 console.log(typeof monString);