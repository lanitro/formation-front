/*-------------------------------------------------


          LA DISPONIBILITE DU DOM

----------------------------------------------------

A partir du moment, ou mon DOM, c'est a dire, l'ensemble
de l'arborescence de ma page HTML est completement chargé;
je peux commencer a utiliser JQuery

je vais mettre l'ensemble de mon code dans une fonction ,
qui sera appeler AUTOMATIQUEMENT! Par jQuery lorsque le
DOM sera entierement defini

3 façon de faire:

---------------------------------------------------------*/

jQuery(document).ready(function(){
    //--ici, le DOM est entierement chargé; je peux proceder a mon code
    //..
    //..
    //..
    //..

});
//--2eme methode
$(document).ready(function(){ });
//--3 eme methode
$(function(){
    //....
});

//--4eme methode en ES6
$(()=>{
    alert('bienvenue dans ce cours JQ');

    //-- En JS 
    document.getElementById('texteEnJQ').innerHTML = "<strong>Mon texte en JS</strong>";

    //-- En JQ
    $('texteEnJQ').html("Mon texte en JQ !");
});