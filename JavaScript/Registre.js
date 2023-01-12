//Crear inicio de sessio de la pagina web
function CrearSessio(){
 <script>

document.addEventListener('DOMContentLoaded', function () {(function () {


    const sessionstore = sessionStorage;
    const usuario = document.getElementById("name");
    const password = document.getElementById("password");

    function Register(){
        alert("ALERT!");
        sessionstore.setItem("usuario", usuario.value);
        sessionstore.setItem("contrasenya", password.value);
        alert("Usuario registrado");
    }
})  });
</script>
}
