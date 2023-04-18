function creerSujet(){
    var user=localStorage.getItem('données utilisateur');
    var User = JSON.parse(user);
    var tBody = document.getElementById('tBody');
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

    const node = document.createElement("tr");
    node.innerHTML= `<td>${auteur}</td><td>${sujet}</td><td>Le ${jour}/${mois}/${annee} à ${heureSujet}</td>`;
    document.getElementById('tBody').appendChild(node);

}