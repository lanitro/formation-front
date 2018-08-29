/*------------------------------------------------
           LES SELECTEURS D'ENFANTS JQUERY
-------------------------------------------------*/

$(function(){
     l = e => console.log(e);

     //-- je souhaite selectionner toute les divs de ma page.
     l($('div'));

     //-- je soughaite selectionner la balise nav de ma page.
     l($('#menu'));

     //-- en partant du menu, je souhaite, tous les elements descendant directs (enfants) qui sont dans "nav".
     l($('#menu').children());

     //-- parmis ces descendants uniquement l'element "ul"
     l($('#menu').children("ul"));

     //-- en partany du "ul" je souhaite recuperer tous les elements "li"
     l($('#menu').children("u").find('li'));
     l($('#menu').find('li'));

     //-- je souhaite recuperer UNIQUEMENT le 2 eme element "li"
     l($('#menu').find('li'));

    //-- je souhaite connaitre le voisin immediat de mon "menu"
     l($('#menu').next());
     l($('#menu').next().next()); // le voisin du voisin
     l($('#menu').prev()); // le voisin d'avant
     l($('#menu').parent()); //-- les parents

});
