/* -------------------------------------------------------
               LE DOM

le DOM est une interface de developpement en JS pour HTML.
grace au DOM, je vais etre en mesure d'acceder ou modifier 
mon code HTML.

L'objet "document" : c'est le point d'entrée vers mon contenu 
HTML.

chaque page chargé dans mon navigateur a un objet "document".
--------------------------------------------------------*/

/**
 * comment faire pour recuperer 
 * les differentes informations de ma page HTML?
 */

 /*----------------------------------------------------------
 ---------------------document.getElementById
 document.getElementById() est une fonction qui 
 va permettre de recuperer un element HTML a 
 partir de son identifiant unique : ID
 -----------------------------------------------------*/

 let bonjour = document.getElementById('bonjour');
 console.log(bonjour);

 /*-----------------------------------------------------
              document.getElementsByClassName
--------------------------------------------------------
 document.getElementsByClassName() : c'est une 
 focntion qui va permettre de recuprerer un ou plusieurs
 elements (une liste) HTML a partir de leur classe.
 -----------------------------------------------------*/

 const contenu = document.getElementsByClassName('contenu');
 console.log(contenu);

 //--- Me renvoi un tableau JS avec mes elements HTML.


/* --------------------------------------------
             document.getElementsByTagname  
document.getElementsByTagname(): c'est une
 focntion qui va permettre de recuprerer un ou plusieurs
 elements (une liste) HTML a partir de leur balise.
 ------------------------------------------------------*/

const contenu = document.getElementsByTagName('p');
console.log(p);

// NOTA BENE :https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
