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
    menus.MenuCamper();
    let opccamper = prompt();
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

  } else if (opcion == 2) {
    menus.MenuTrainer();
    let opctrainer = prompt();
    if (opctrainer == 1) {
      //Ver notas
    } else if (opctrainer == 2) {
      //Editar notas
    } else if (opctrainer == 3) {
      //Ver estudiantes
    }

  } else if (opcion == 3) {
    menus.Menucordinadora();
    let opccor = prompt();
    if (opccor == 1) {
      //Agregar estudiante
    } else if (opccor == 2) {
      //Editar estudiante
    } else if (opccor == 3) {
      //Ver estudiantes
    } else if (opccor == 4) {
      //Eliminar estudiante
    } else if (opccor == 5) {
      //Agregar estudiante a curso
    } else if (opccor == 6) {
      //Agregar nueva ruta de estudio
    } else if (opccor == 7) {
      //Ver menú de reportes
    } else if (opccor == 8) {
      //Volver al menú principal
    }

  } else if (opcion == 4) {
    booleanito = false;
  } else {
    alert("El Numero que Ingresaste no fue validado ❌");
  }
}
