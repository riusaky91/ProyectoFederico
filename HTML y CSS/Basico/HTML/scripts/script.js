
/*LOS DATOS SON GUARDADOS COMO PAREJAS DE CLAVE VALOR LOCAL STORAGE*/

/*Guardar un valor*/

localStorage.setItem("clave1","valor1");

/*Obteniendo un valor */

alert(localStorage.getItem("clave1"));

/*Removiendo un valor */

localStorage.removeItem("clave1");

/*Remover todos los valores*/

localStorage.clear();


/*EN SESSION STORAGE ES SIMILAR SIN EMBARGO SE CAMBIA EL LOCAL POR SESSION*/


navigator.geolocation.getCurrentPosition();


/*CANVAS*/

var can = document.getElementById("canvas1");//obtenemos el elemnto del Html
var ctx = can.getContext("2d");//tomamos el elemento para dibujar sobre el  
ctx.fillRect(0,0,20,20);//Genera un rectangulo