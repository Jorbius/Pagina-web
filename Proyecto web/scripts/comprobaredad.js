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
alert("Fecha introducida incorrecta");
}


  
  
  
 if ( anohoy - anoncto > 18){
  alert ("Eres mayor de edad");
  }
  else if ( anohoy - anoncto < 18){
  alert ("Tienes que ser mayor de edad");  
  }

 else{
       if (mesncto < meshoy){
       alert ("Eres mayor de edad");			
       }
       else{
           if (mesncto== meshoy && diancto < diahoy){
           alert ("Eres mayor de edad");
           }
           else{
               if (mesncto== meshoy && diancto == diahoy){
               alert ("Felicidades, eres mayor de edad");
               }
               else{
               alert ("Tienes que ser mayor de edad");
               }
               }

       }
   }
}