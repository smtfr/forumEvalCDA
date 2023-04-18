function creerSujet(){
    var user=localStorage.getItem('données utilisateur');
    var User = JSON.parse(user);
    var auteur = `${User.prenom} ${User.nom}`;
    var sujet = prompt('De quel sujet voulez vous parler ?');
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
    // var idSujet = `${jour}${hour}${minutes}${seconds}`
const ObjSujet ={
        auteur              : auteur,
        dateDePublication   : fullDate,
        heureDePublication  : heureSujet,
        sujet               : sujet
    }

    const node = document.createElement("tr");
    node.innerHTML= `<td onclick='pageSujet()'>${auteur}</td><td onclick='pageSujet()'>${sujet}</td><td onclick='pageSujet()'>Le ${fullDate} à ${heureSujet}</td>`;
    document.getElementById('tBody').appendChild(node);
    dataSujet= localStorage.setItem(`donnees sujet`,JSON.stringify(ObjSujet));

}