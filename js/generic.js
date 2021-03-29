// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAJhB2DjN8T3sjTp_O8ehlmzvG1O5AOKAI",
    authDomain: "proyectofirebase-79d05.firebaseapp.com",
    projectId: "proyectofirebase-79d05",
    storageBucket: "proyectofirebase-79d05.appspot.com",
    messagingSenderId: "853593654323",
    appId: "1:853593654323:web:daee604675f4b04f298f46",
    measurementId: "G-H8QHHTTTK1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics;

function verAutenticacion(){
  firebase.auth().onAuthStateChanged(res => {
    if(res == null) {  // no hay sesion activa, no esta logueado
        document.getElementById("itemSalir").style.display="none";
        document.getElementById("itemTipoLibro").style.display="none";
        document.getElementById("itemLibro").style.display="none";
        document.getElementById("itemPrestamos").style.display="none";
        document.getElementById("itemRegistro").style.display="inline-block";

        if(document.getElementById("divRedes")) {
          document.getElementById("divRedes").style.visibility="visible";
          document.getElementById("divDatosUsu").style.visibility="hidden";
        }
        
    } else {
      document.getElementById("itemSalir").style.display="inline-block";
      document.getElementById("itemTipoLibro").style.display="inline-block";
      document.getElementById("itemLibro").style.display="inline-block";
      document.getElementById("itemPrestamos").style.display="inline-block";
      document.getElementById("itemRegistro").style.display="none";

      if(document.getElementById("divRedes")) {
        document.getElementById("divRedes").style.visibility="hidden";
        document.getElementById("divDatosUsu").style.visibility="visible";
      }
      
      if(res.displayName != null) {
        document.getElementById("lblNombreUsuario").innerHTML = "Bienvenido " + res.displayName;
      }
      else {
        document.getElementById("lblNombreUsuario").innerHTML = "Bienvenido " + res.email;
      }
    }
  });
}


function Salir() {
    firebase.auth().signOut()
            .then(res => {
              document.location.href="/";
            }).cathc(error => {
              alert(error);
            })
}
