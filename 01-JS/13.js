/*--------------------------------------------------
          LA MANIPULATION DES CONTENUS     
---------------------------------------------------*/


l = e => console.log(e);

// -- je souhaite recuperer mon liens google... comment proceder?

const google =  document.getElementById('google');
l(google);

//--maintenant, je souhaite acceder aux informations de ce lien...

//---A  : le liens vers lequel pointe la balise
l(google.href);

//--B l'ID de la balise
l(google.id);

//--C la classe de la balise
l(google.className);
 
//--D le texte de la balise
l(google.textContent);


/**
 * maintenant je souhaite modifier le texte de mon lien
 * 
 */
google.textContent = "mon lien vers GooOoooOOOgle !";

/*----------------------------------------------------------
                  AJOUTER UN ELEMENT
--------------------------------------------------------*/

/**
 * nous allons proceder en deux etapes:
 * 1. la fonction documentcreateElement() va permettre
 * de generer un nouvel element dans le DOM ; que je
 * pourrais modifier par la suite avec des methodes
 * que nous venons de voir.....
 * 
 * PS: Ce nouvel element est placer en memoire!
 * 
 * 2. L'ajouter a la page 
 * 
 */

 //--definition de l'element
 var span = document.createElement('span');

 // si je souahite lui donner un ID
 span.id ="monSpan";

 //--Si je souhaite lui attribuer du contenu
 span.textContent = "Mon beau texte en JS !";

 //--je lajoute a la page
 google.appendChild(span);

 /* -------------------------------
            EXERCICE
En partant du travail déjà réalisé sur la page.
Créez directement dans la page une balise <h1></h1> ayant comme contenu : 
"Titre de mon Article".

Dans cette balise, vous créerez un lien vers une url de votre choix.
BONUS : Ce lien sera de couleur Rouge et non souligné.
-------------------------------- */

var h1 = document.createElement('h1');
var a = document.createElement('a');
a.textContent = "le poleS c'est genial !"
a.href ="#"
h1.appendChild(a);
document.body.appendChild(h1);
a.style.color ="red";
a.style.textDecoration = "none";
 