/* LE CHAINAGE DE METHODE AVEC JQUERY */

$(function(){

console.log($('div'));

//--je cache toute les DIV de ma page HTML
$('div').hide('slow', function(){
   /**
    * la methode hide() de jquery 
    * - est une animation
    * -s'applique sur tous les elements ciblés avec mon selecteurs
    * ====
    * A la fin du hide() on ajoute pour voir une alert()
    * 
    */
$('div').css('background', 'green');
$('div').css('color', 'red');
$('div').show('slow'); 

$('p').hide(1000).css('color', 'blue').css('font-size', '30px').delay(2000).show(500);


});// fin du hide()
alert('fin du hide() !');


}); // -- fin de $()