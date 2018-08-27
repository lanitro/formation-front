/*LES SELECTEURS JQUERY*/

//--format => $('selecteur');


//--en JS => document.getElementsByTagname('balise'); => en JQ => $('balise');
//--en JS => document.getElementByClassName('classe'); => en JQ => $('.classe');
//--en JS => document.getElementByClassId('Id');       =>en JQ =>$(#id);

//--en JS =>document.queryselector('balise');   => en JQ $('balise');
//--en JS =>document.queryselector('classe');   => en JQ $('.classe');
//--en JS =>document.queryselector('#id');      => en JQ $('#id');

$(function(){
log = e => console.log(e);
log("hello");

//--selection les SPAN
// en JS
log(document.getElementsByTagName('span'));
// en JQuery
log($('span'));

//selectionner le menu par son ID
// en JS
log(document.getElementById('menu'));
// en JQ
log($('menu'));

//selectionner par la classe
// en JS
log(document.getElementsByClassName('Maclasse'));
// en JQ
log($('MaClasse'));

//selectionner un élément de ma page par un attribut
log($('[href="#"]'));
log($('[action="home.php"]'));


});
