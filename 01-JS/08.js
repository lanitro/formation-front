/*-----------------------------------
        LES CONDITIONS
------------------------------------*/

// var majoriteLegaleFr = 18;

// if( 14 >= majoriteLegaleFr){
//     alert('bienvenue !');
// }

// //--LE ELSE N'EST PAS OBLIGATOIRE !
// else {

//         alert('va voir chez google si...');

// }
/* -------------------------------
             EXERCICE

    Créer une fonction permettant de vérifier l'age d'un visiteur (prompt).
    S'il a la majorité légale, alors je lui souhaite la bienvenue, 
    sinon, je fait une redirection sur Google après lui avoir signalé le soucis.

-------------------------------- */
function acces() {
    var age = parseInt(prompt("entrez votre age"));
    if (age >= 18) {
        alert("bienvenue");

    }
    else {
        document.location.href = "https://www.destrucsaweb.com/langages/javascript/rediriger-une-page-en-javascript.html"
    }
}
acces();

// -- 1. Déclarer la majorité
const MAJORITELEGALEFR = 18;

// -- 2. Vérifier si l'utilisateur est majeur (fonction)
function monUtilisateurEstMajeur(age) {
    if (age >= MAJORITELEGALEFR) {
        return true;
    } else {
        return false;
    }
}

// -- 3. Je demande à l'utilisateur son age
var age = parseInt(prompt("Bonjour, Quel age avez-vous ?", "<Saisissez votre Age>"));

// -- 4. Vérification
if (monUtilisateurEstMajeur(age)) {

    alert("Bienvenue sur mon site internet réservé aux majeurs");
    document.write("0_0 !!!");

} else {
    // -- 5. Redirection
    document.location.href = "http://fr.lmgtfy.com/?q=Majorit%C3%A9+L%C3%A9gale+en+France";

}

/*--------------------------------------------------------------------------------
                        LES OPERATEURS DE COMPARAISON

L'operateur de comparaison "==" signifie : Egal à.
il permet de verifier que 2 variables sont identiques.

L'operateur de comparaison "===" signifie : strictemet Egal à.
il va comparer la valeur, mais aussi le type!

l'operateur "!=" signifie different de 
l'operateur "!==" signifie strictement different de. */

/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen 
d'un email et d'un mot de passe.

Je doit saisir mon email et mon mot de passe afin d'être authentifié sur le site.

En cas d'échec une alert m'informe du problème.
Si tous se passe bien, un message de bienvenue m'accueil.
-------------------------------- */

// // -- BASE DE DONNEES
var email, mdp;

email = "wf3@hl-media.fr";
mdp = "wf3";

// // -- 1. Demander a l'utilisateur son email
var emailUser = prompt("Bonjour, Quel est votre adresse email ?", "<Saisissez votre email>");

var mdpUser = prompt("votre mot de passe ?", "<Saisissez votre mot de passe>");

// -- Exemple SANS les fonctions

// // -- 2. Je vérifie si l'email saisie correspond avec celle dans la BDD
// if ( emailUser === email && mdpUser === mdp ) {

// // -- 3. Tous est ok
// alert("Bienvenue " + emailUser + " !");

// } else {
// // -- 4. Erreur au niveau de l'identification.
// alert("ATTENTION, email / mot de passe incorrect.");
// }

// -- Exemple AVEC une fonction

function login(emailUser, mdpUser) {
    return emailUser === email && mdpUser === mdp;
}

if (login(emailUser, mdpUser)) {
    alert("Bienvenue " + emailUser + " !");
} else {
    alert("ATTENTION, email / mot de passe incorrect.");
}

/*-------------------------------------------------------
    LES OPERATEURS LOGIQUES

----------------------------------------------------------*/
/**
 * l'operateur ET : &&. Si la combinaison email et emailUser
 * correspond, Et la combinaison mdpUser et mdp correspond.
 * 
 *-> dans cette condition, les 2 doivnet OBLIGATOIREMENT
 correspondre pour etre validée
 Ex. if(emailUser === email && mdpUser ===mdp) {...}
 -----------------------------------------------------------

 L'operateur OU : ||. si la combibaison email et emailUser
correspond, ET/OU la combinaison mdpUser et mdp correspond.

--> dans cette condition, au moin l'une des deux doit
correspondre pour etre validée.

Ex. if(emailUser === email || mdpUser ===mdp) {...}
--------------------------------------------------------

L'operateur " ! " : ou encore NOT 
signifie le CONTRAIRE DE.

var monUtilisateurEstApprouve = true;
if( !monUtilisateurEstApprouve) {...}
si mon utilisateur n'est pas approuvé

reviens a ecrire
if(monUtilisateurEstApprouve === false) {...}




 */


