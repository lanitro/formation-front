/*-----------------------
    LA CONCATENATION
------------------------*/

var DebutDePhrase = "aujourd'hui";
var DateDuJour = new Date();
var SuiteDePhrase =", sont present";
var NombreDeStagiaire = 10;
var FinDePhrase = "apprenant. <br>";


/**
 * nous souhaitons maintenant, grace a la concatenation
 * afficher le tout en une phrase sur notre page
 */
document.write(DebutDePhrase + DateDuJour.getDate() + '/' + (DateDuJour.getMonth()+ 1) +'/' +DateDuJour.getFullYear() +
SuiteDePhrase + NombreDeStagiaire  + FinDePhrase  );