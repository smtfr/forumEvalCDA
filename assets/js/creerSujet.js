var user=localStorage.getItem('données utilisateur');
var User = JSON.parse(user);

function creerSujet(){
    var form = document.querySelector('.formSujet');
    form.style.display='block';

}
function sendSujet(){
    var auteur = `${User.prenom} ${User.nom}`;
    var sujet = document.getElementById('sujet').value;
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
    var heureSujet = `${hour}:${minutes}:${seconds}`
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
    var idSujet = `${jour}${hour}${minutes}${seconds}`;
    const ObjSujet ={
        auteur              : auteur,
        dateDePublication   : fullDate,
        heureDePublication  : heureSujet,
        sujet               : sujet,
        id                  : idSujet
    }
    
    const node = document.createElement("tr");
    node.innerHTML= `<td onclick='pageSujet()'>${ObjSujet.auteur}</td><td onclick='pageSujet()'>${ObjSujet.sujet}</td><td onclick='pageSujet()'>Le ${ObjSujet.dateDePublication} à ${ObjSujet.heureDePublication}</td>`;
    document.getElementById('tBody').appendChild(node);
    dataSujet= localStorage.setItem(`donnees sujet`,JSON.stringify(ObjSujet));

    var form = document.querySelector('.formSujet');
    form.style.display='none';
    

}