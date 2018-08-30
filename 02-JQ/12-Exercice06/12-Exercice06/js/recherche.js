/*

OBJECTIF : A partir d'une liste de contacts, être en mesure de récupérer un contact et d'afficher le détail de ses informations.

CONSIGNE :

	// Un internaute doit pouvoir rechercher un contact sur la base de son Username, Email, Phone ou Name
	// Le résultat des membres correspondant s'affiche ensuite dans une liste en dessous du champ de recherche.

    ETAPE 1. Mettre en Place le HTML et le CSS nécessaire pour rechercher un contact.
        Ex. Un champ input-text, et/ou un bouton pour lancer la recherche.
        
    ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username.
    
    ETAPE 3. Afficher en HTML et CSS uniquement les informations de base : Nom, Prénom, Email, Téléphone.
    
    
*/


/* ETAPE 2. Récupérer le Flux JSON : https://jsonplaceholder.typicode.com/users et être en mesure de récupérer la fiche d'un utilisateur par rapport a son username. */

// -- Chargement du DOM ...
$(function () {
   
    //--1. ecoutez la saisi de l'utilisateur
    $('#search').on('change', function(){
        // --2. recuperation de la valeur saisie 
        const search = $(this).val();
        console.log(search);
        //--3.recuperer la liste des contacts depuis l'API
        $('.resultat').slideUp()
        $ajax('https://jsonplaceholder.typicode.com/users')
        .done(function(users){
            console.log(users);
            // --4. on parcours le tableau  d'utilisateurs
            $('resultat').empty();
            for(let i= 0; i <user.lenght; i++){
                //console.log(users[i]);
                // --5. Recuperations de l'utilisateur
                var user = user[i];
                // --6. je filtre mon tableau.
                if(search === user.username || search === user.name || search === user.email ||
                search === user.phone){
                    $(`
                    <div class="membre">
                            <div class="membre_informations">
                                <p>Nom Complet : ${user.name}</p>
                                <p>Username : ${user.username}</p>
                                <p>Email : ${user.email}</p>
                                <p>Téléphone : ${user.phone}</p>
                            </div>
                        </div>`

                    ).appendTo($('.resultat'));

            
                    
                }// fin du if
               
            }  // fin du for() 
            $('.resultat').unmark().mark(search);
            $('.resultat').slidedown();  
        }); // -- fin du ajax 


    }); //--fin du search


});// fin du function


