/* --
    Votre mission, que vous devez accepter !
    Réaliser une fonction permettant à un internaute de :
        - Saisir son Prénom dans un Prompt
        - Retourner à l'Utilisateur : Bonjour [PRENOM], Quel age as-tu ?
        - Saisir son Age
        - Retourner à l'Utilisateur : Tu est donc né en [ANNEE DE NAISSANCE].
        - Afficher ensuite un récapitulatif dans la page.
        Bonjour [PRENOM], tu as [AGE] ! 
-- */
var prenom = prompt('saisi ton prenom');
alert('bonjour' + ' ' +prenom + ' ' + 'quel age as-tu');
var age = prompt ('saisi ton age');
var annee = parseInt(prompt(2018 - age));
alert(age);

//-1 Initialisation des variables
var objetDate = new Date();
var anneeActuelle = objetDate.getFullYear();
//-2 creation d'une fonction
function identity(){


//-3 je demande a l'utilisateur son prenom
var prenom = prompt("hello ! what is your name?","<saisir votre prenom>");
console.log(prenom);
console.log(typeof prenom);
//-4 je lui demande son age
var age = parsenInt(prompt("hello" + prenom + "! how old are you?", "<saisir votre age>"));
console.log(age);
console.log(typeof age);

//-5 deduire son année de naissance et l'afficher dans une alerte
var anneeDeNaissance = anneeActuelle - age;
alert("amazing ! so you wher born in" +anneeDeNaissance);

//-6 recapitulatif dans la page
document.write("hello" + prenom + "you're" + age + "years old !");
}
//-7 executer la fonction
identity();