// #####################################
// Ejercicios DIA 1
// #####################################

///IMPORTACIONES///
import * as menus from './menus.js';
import * as funciones from './funciones.js';
///DEFINIR BOOLEANO///
let booleanito = true;
while (booleanito === true) {
  ///MUESTRA MENU PRINCIPAL///
  menus.MenuPrincipal();
  ///TOMA DE OPCION DEL USUARIO///
  let opcion = prompt();

  if (opcion == 1) {
    ////INGRESA A LA OPCION CAMPER///
    menus.MenuCamper();
    let opccamper = prompt();
    ////PRUEBA LAS OPCIONES POSIBLES///
    if (opccamper == 1) {
        menus.SiInscrito();
        menus.menucamp();
        let opcca=prompt();
        if(opcca==1){
            funciones.vernotas();
        }
        else {
            alert("EL numero que ingreso es incorrecto")
        };
    } else if (opccamper == 2) {
      menus.MenuInscripcionCamper();
      funciones.inscripcion();
      alert("inscripcion satisfactoria");
    }
////INGRESA A LA OPCION TRAINER////
  } else if (opcion == 2) {
    menus.MenuTrainer();
    let opctrainer = prompt();
    if (opctrainer == 1) {
      funciones.vernotastrai();
    } else if (opctrainer == 2) {
      funciones.editarnota();
      alert("La nota ha sido actualizada satisfactoriamente")
    } else if (opctrainer == 3) {
      funciones.verestudiantes();
    };

  } else if (opcion == 3) {
    menus.Menucordinadora();
    let opccor = prompt();
    if (opccor == 1) {
      funciones.aggcamper();
      alert("Camper registrado satisfactoriamente")
    } else if (opccor == 2) {
      funciones.editcamper();
      alert("Camper editado con exito")
    } else if (opccor == 3) {
      funciones.verestudiantes();
    } else if (opccor == 4) {
      funciones.eliminarcamper();
      alert("Se elimino al camper satisfactoriamente");
    } else if (opccor == 5) {
      //Agregar nueva ruta de estudio
    } else if (opccor == 6) {
      //Ver menú de reportes
    } else if (opccor == 7) {
      //Volver al menú principal
    };

  } else if (opcion == 4) {
    booleanito = false;
    alert("Gracias por usar nustra plataforma 😊")
  } else {
    alert("El Numero que Ingresaste no fue validado ❌");
  };
}

//Desarrollado por : Daniel Guerrero - T.I. 1.049.291.388