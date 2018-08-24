/* -------------------------------------
        LES EVENEMENTS                 
----------------------------------------

les evenements vont me permettre de declencher une 
fonction, c'est a dire une serie d'instructions;
suite a une action de mon utilisateur.

OBJECTIF : etre en mesure de capturer ces evenements
afin d'executer une fonction.

Les evenements : MOUSE (souris)

click      : au clic sur un element ;
dblclic    : au double-clic;
mouseenter : la souris passe au dessus d'un element;
mouseleave : la souris sort de l'element.
mouseover  : au passage de la souris.

cf:  https://developer.mozilla.org/fr/docs/Web/API/MouseEvent
LES Evenements KEYBOARD (clavier)

keyup : une touche du clavier a eté relaché
keydown: une touche est enfoncée

cf: https://developer.mozilla.org/fr/docs/Web/API/KeyboardEvent

les evenements : WINDOW (fenetre)

scroll : defilement de la fenetre;
resize : redimentionnement de la fenetre.

les evenements FORM (formulaire)

change : pour les elements <input>, <select> et <textaera> ;
submit : a l'envoi (soumission) du formulaire;
input  : pour capter la saisie d'un utilisateur sur un champ <input>


-------------LES ECOUTEURS D'EVENEMENTS--------------

pour attacher un evenements a un elements ou autrement dit,
pour declarer un ecouteur d'evenement qui se chargera de
declencher une fonction, je vais utiliser la syntaxe suivante:


-------------------------------------------------*/

var p = document.getElementById('monParagraphe');

function changerLaCouleurEnRouge() {
    p.style.color = "red";

}
p.addEventListener('mouseover', changerLaCouleurEnRouge);

/* -------------------------------------------------------------\
|                       EXERCICE PRATIQUE                       |
| A l'aide de javascript, créez un champ "input" type text avec |
| un ID unique. Affichez ensuite dans une alerte, la saisie de  |
| l'utilisateur.                                                |
|______________________________________________________________*/


// -- Création du champ input
var input = document.createElement('input');
input.type = "text";
input.id = "monID";
input.setAttribute("placeholder", "Saisissez un contenu...");

// -- Ajout dans la page
document.body.appendChild(input);

/**
 * On écoute l'évènement "change" sur le champ "input"
 * et on execute la fonction "displayUserInput"
 */
function displayUserInput() {
    alert(input.value);
}

input.addEventListener('change', displayUserInput);