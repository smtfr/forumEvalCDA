var sujet=localStorage.getItem(`donnees sujet`);
var Sujet = JSON.parse(sujet);

var sujetAuteur = document.getElementById('sujetAuteur');
var heureSujet = document.getElementById('sujetHeureDate');
var sujetContent = document.getElementById('sujetContent');

sujetAuteur.innerText=`${Sujet.auteur}`;
heureSujet.innerText=`${Sujet.dateDePublication} à ${Sujet.heureDePublication}`;
sujetContent.innerText = `${Sujet.sujet}`;

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
        auteurComm  : localStorage.getItem(User.auteur),
        heureComm   : fullHeure,
        jourComm    : fullDate
    }
    var auteurComm = document.getElementById('auteurComm');
    auteurComm.innerText=`${Comm.auteurComm}`;
    var hourCommentaire = document.getElementById('heureComm');
    hourCommentaire.innerText= `Le ${Comm.fullDate} à ${Comm.fullHeure}`
    var contentComm= document.getElementById('contentComm');
    contentComm.innerText=`${Comm.contenu}`
}
