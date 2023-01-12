//Crear inicio de sessio de la pagina web

function iniciarSessio(){
    var user, pass;
    user = document.getElementById("username").value;
    pass = document.getElementById("passwordd").value;

    if(user == "admin" && pass == "admin"){
        window.location = "index.html";
    }
}
