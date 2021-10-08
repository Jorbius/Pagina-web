function comprobaremail(){
    emailusuario = document.formularioregistro.emailusur;
     var email = /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;

     if (!email.test(document.formularioregistro.emailusur.value)){
         alert ("Caca");
     }
     else {
      alert ("Siuuu");
     }
 }