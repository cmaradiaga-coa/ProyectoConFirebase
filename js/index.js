
window.onload = function() {
    verAutenticacion();
}

function createUser() {

    let email= document.getElementById("txtCorreo").value;
    let password = document.getElementById("txtPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                alert("Se registró correctamente.");
                document.getElementById("btnCancelar").click(); // para cerrar la ventana.
            }).catch(eror => {
                alert("Ocurrió un Error...");
            });
}

function iniciarSesion() {

    let email = document.getElementById("txtCorreoIngresar").value;
    let password = document.getElementById("txtPasswordIngresar").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                // console.log(res); // para ver que propiedades tiene este objeto que devuelve firebase
                document.location.href="/misPrestamos.html"; // Envia a esta pagina

                // Imagen
                if(res.user.photoUrl != null) {
                    document.getElementById("imgFotoUsuario").src=res.user.photoUrl;
                } else {
                    document.getElementById("imgFotoUsuario").src="img/nousuario.jpg";
                }
            }).catch(err => {
                document.getElementById("alertErrorLogueo").style.display="block";
                document.getElementById("alertErrorLogueo").innerHTML = err;
            });
}

