/**
 * @author Simon Muller
 * login depuis le local register
 */
function login(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var user=localStorage.getItem('données utilisateur');
    var User = JSON.parse(user);
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
    var fullHeureCo = `${hour}:${minutes}:${seconds}`
    User.heureDeCo=fullHeureCo;
    
    if ((User.adresseMail==email) && (User.motDePasse==password)){
        dataUser= localStorage.setItem('données utilisateur',JSON.stringify(User));
        location.replace('./forum.html');
    } else {
        event.preventDefault();
        document.getElementById('pasCoPossible').style.display='block';
    }
}