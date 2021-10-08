function comprobardni(){
    dniusuario = document.formularioregistro.dni;
    var dni = /^[0-9]{8}[A-Z]$/;

    if (!dni.test(document.formularioregistro.dni.value)){
      alert ("Dni no valido")
       return true;
    }
    else {
    
     return false;
    }
}