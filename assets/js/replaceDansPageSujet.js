var sujet=localStorage.getItem(`donnees sujet`);
var Sujet = JSON.parse(sujet);
var sujetContent = document.getElementById('sujetContent');
var sujetAuteur = document.getElementById('sujetAuteur');
var sujetHeureDate = document.getElementById('sujetHeureDate');

sujetContent.innerText=`${Sujet.sujet}`;
sujetAuteur.innerText=`${Sujet.auteur}`;
sujetHeureDate.innerText=`Le ${Sujet.dateDePublication} à ${Sujet.heureDePublication}`

function addComm(){
    var hour = new Date().getHours();
    if (hour < 10){
        hour = `0${hour}`
    }
    var minutes = new Date().getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`
    }
    var seconds = new Date().getSeconds();
    if (seconds < 10){
        seconds = `0${seconds}`
    }
    var fullHeure = `${hour}:${minutes}:${seconds}`

    var jour = new Date().getDate();
if (jour < 10){
    jour = `0${jour}`
}
var mois = new Date().getMonth();
if (mois < 10){
    mois = `0${mois+1}`
} else{
    mois = mois+1
}
var annee = new Date().getFullYear();
var fullDate = `${jour}/${mois}/${annee}`;
var commContent= prompt();

    var user=localStorage.getItem('données utilisateur');
    var User = JSON.parse(user);
    const Comm = {
        contenu     : commContent,
        auteurComm  : User.prenom,
        heureComm   : fullHeure,
        jourComm    : fullDate
    }
    const node = document.createElement("p");
    node.innerHTML= `<p class='boxComm'>${Comm.contenu}<div class='flex justifyCenter'> Par <span> ${Comm.auteurComm} </span> <br> à <span> <br>${Comm.heureComm}  </span></div></p>`;
    document.querySelector('.containerComms').appendChild(node);
}
