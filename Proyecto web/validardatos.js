function validardatos(){
    function comprobardni();
    function comprobaredad();
    function comprobaremail();
    function comprobartelefono();
    document.formularioregistro.sumbit()


}
function comprobarnombreyapellido(){
    nombreusuario = document.formularioregistro.nombre;
    nombreusuario = document.formularioregistro.apellido1;
    nombreusuario = document.formularioregistro.apellido2;
    var nombre = /(^[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})(\s[A-ZÁÉÍÓÚ]{1}([a-zñáéíóú]+){2,})?$/;

    if (!nombre.test(document.formularioregistro.nombre.value)){
        alert ("Nombre no valido");
    }
    if (!nombre.test(document.formularioregistro.apellido1.value)){
        alert ("1º apellido no valido");
    }
    if (!nombre.test(document.formularioregistro.apellido2.value)){
        alert ("2º apellido no valido");
    }
   
}

function comprobaredad(){

    var fechancto = document.getElementById("fechancto").value.split("/"); 
    var fechavalida = new Date(parseInt(fechancto[2]),parseInt(fechancto[1]-1),parseInt(fechancto[0]));
    var hoy = new Date();
   
    var anoncto = fechavalida.getFullYear();
    var mesncto = fechavalida.getMonth();
    var diancto = fechavalida.getDate();
  
    var anohoy = hoy.getFullYear();
    var meshoy = hoy.getMonth();
    var diahoy = hoy.getDate(); 
    
  
    if (isNaN(fechavalida)){
  alert("Fecha introducida incorrecta. El formato tiene que ser (dd/mm/yyyy)");
  }
  
  
    
    
    
   if ( anohoy - anoncto > 18){
     if ( anohoy - anoncto < 18){
    alert ("Tienes que ser mayor de edad");  
    }
  
   else{
         if (mesncto > meshoy){
         			
             if (mesncto== meshoy && diancto > diahoy){
             

                 if (mesncto !== meshoy && diancto !== diahoy){
                
                 alert ("Tienes que ser mayor de edad");
                 }
                 }
  
         }
     }
    }
}

function comprobartelefono(){
    telefonousuario = document.formularioregistro.telefono;
    var telefono = /^[0-9]{9}$/;

    if (!telefono.test(document.formularioregistro.telefono.value)){
        alert ("Telefono no valido"+telefono);
    }
    
}

function comprobardni(){
    dniusuario = document.formularioregistro.dni;
    var dni = /^[0-9]{8}[A-Z]$/;

    if (!dni.test(document.formularioregistro.dni.value)){
      alert ("Dni no valido"+dni)
    
    }
}
   
function comprobaremail(){
        emailusuario = document.formularioregistro.email;
         var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
    
         if (!email.test(document.formularioregistro.email.value)){
             alert ("Email no valido"+email);
         }
}
        
