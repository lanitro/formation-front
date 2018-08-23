/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    {
        prenom: "Hugo",
        nom: "LIEGEARD",
        moyenne: {
            francais: 4,
            math: 6,
            physique: 18
        }
    },
    {
        prenom: "Luc",
        nom: "JOINVIL",
        moyenne: {
            francais: 4,
            math: 5,
            physique: 16,
            eps: 18,
            chimie: 17
        }
    },
    {
        prenom: "Layla",
        nom: "LAHCENE",
        moyenne: {
            francais: 17,
            math: 2,
            physique: 10,
            svt: 18,
            arabe: 10
        }
    },
    {
        prenom: "Alpha",
        nom: "DIALLO",
        moyenne: {
            francais: 12,
            math: 8,
            physique: 14,
            philo: 5,
            eps: 19
        }
    },
    {
        prenom: "Elies",
        nom: "KEDIM",
        moyenne: {
            francais: 2,
            math: 18,
            physique: 17,
            informatique: 15
        }
    }
];
for (let i = 0; i < PremierTrimestre.length; i++) {
    document.write("<h3>" + PremierTrimestre[i].prenom +"</h3>")
}