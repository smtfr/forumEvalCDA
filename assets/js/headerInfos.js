var user=localStorage.getItem('données utilisateur');
var User = JSON.parse(user);

var nomHeader = document.getElementById('nomHeader');
var dateHeader = document.getElementById('dateHeader');
var dateCo = document.getElementById('dateCoHeader');

nomHeader.innerText = User.prenom;
dateCo.innerText = User.heureDeCo;

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

dateHeader.innerHTML = `${jour}/${mois}/${annee}`;
