function comprobartelefono(){
    telefonousuario = document.formularioregistro.telefonousur;
    var telefono = /^[0-9]{9}$/;

    if (!telefono.test(document.formularioregistro.telefonousur.value)){
        alert ("Caca");
    }
    else {
     alert ("Siuuu");
    }
}