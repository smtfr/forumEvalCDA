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
}

