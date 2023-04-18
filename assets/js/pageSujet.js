function pageSujet(){
    var sujet=localStorage.getItem(`donnees sujet`);
    var Sujet = JSON.parse(sujet);
    // JSON.stringify(Sujet);
    location.replace("./pageSujet.html");
    JSON.stringify(Sujet);
}