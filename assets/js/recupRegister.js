/**
 * @author Simon Muller
 * recupérer les informations du register avec vérif des champs
 */

var btnRegister= document.getElementById('btnCreerCompte');
function recupRegister(){
    localStorage.clear();//on ne veut pas garder d'anciennes inputs dans le local storage
    var regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var regexMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var regexNom=/^[a-zA-Z]+$/;
    var password = document.getElementById('password').value;
    var confirmPw = document.getElementById('confirmPw').value;
    var email = document.getElementById('email').value;
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    // var jour = new Date().getDate();
    // if (jour < 10){
    //     jour = `0${jour}`
    // }
    // var mois = new Date().getMonth();
    // if (mois < 10 ){
    //     mois = `0${mois+1}`
    // } else {
    //     mois = mois+1
    // }
    // var annee = new Date().getFullYear();
    var heure = new Date().getHours();
    if (heure < 10){
        heure = `0${heure}`
    }
    var minutes = new Date().getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`
    }
    var secondes = new Date().getSeconds();
    if (secondes < 10){
        secondes = `0${secondes}`
    }

    const User = {
        adresseMail     : email,
        nom             : nom,
        prenom          : prenom,
        motDePasse      : password
    }// on crée l'objet User
    // on passe à la vérification des champs

    if ((password === confirmPw) && (regexPw.test(password)) && (regexMail.test(email)) && (regexNom.test(nom, prenom))){
        dataUser= localStorage.setItem('données utilisateur',JSON.stringify(User));
    } else if (password != confirmPw){
        event.preventDefault();
        document.getElementById('pwNoMatch').style.display='block';
    } else if (regexNom.test(nom)===false){
        event.preventDefault();
        document.getElementById('nomLettreCheck').style.display='block';
    } else if (regexNom.test(prenom)===false){
        event.preventDefault();
        document.getElementById('prenomLettreCheck').style.display="block";
    } else if (regexMail.test(email)===false) {
        event.preventDefault();
        document.getElementById('emailCheck').style.display='block';
    }
// dataUser= localStorage.setItem('données utilisateur',JSON.stringify(User));
    }

