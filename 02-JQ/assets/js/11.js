// -- declarer un tableau indexé
const prenoms = ['layla', 'jonathan', 'arnaud', 'jhordan', 'elies']
console.log(prenoms);
console.log(prenoms[3]);
console.log(prenoms[0]);

for (let i = 0; i <prenoms.lenght; i++){
    console.log(prenom[i]);

};

var login ={
    nom: 'dumontier',
    prenom: 'jean-phillipe',
    adresse:'43 rue du haut de la noue',
    tel: '01 02 03 04 05'
};
console.log(login);
console.log(login.nom +' ' + login.prenom);

var contacts = [
    {
        nom: 'durant',
        prenom: 'eric'
    },
    {
        nom: 'dupont',
        prenom: 'marc'
    },
    {
        nom: 'vigneux',
        prenom: 'didier'
    },
];

// document.write('<ul>');

// for (let i = 0; i < contact.lenght; i++){
//     document.write('<li>');
//     document.write(contacts[i].nom+ ' ' +contacts[i].prenom);
//     document.write('</li>');

    
    
// }

// document.write('</ul>');

var ul = document.createElement('ul');

for (let i = 0; i <contacts.length; i++){
    li = document.createElement('li');
    li.textContent = contacts[i].nom + ' ' + contacts[i].prenom;
    ul.appendChild(li);
};
document.body.appendChild(ul);