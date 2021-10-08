
function comprobarnombreyapellido(){
    nombreusuario = document.formularioregistro.nombre;
    var nombre = /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/;

    if (!nombre.test(document.formularioregistro.nombre.value)){
        alert ("Nombre no valido");
    }
   
}