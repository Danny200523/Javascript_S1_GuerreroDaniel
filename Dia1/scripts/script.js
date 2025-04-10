///IMPORTACIONES///
import * as menus from './menus.js'

///DEFINIR BOOLEANO///
let booleanito=true;
while(booleanito===true){
///MUESTRA MENU PRINCIPAL///
menus.MenuPrincipal();
///TOMA DE OPCION DEL USUARIO///
let opcion = prompt();
if (opcion==1){
    menus.MenuCamper();
    opccamper=prompt();
    if (opccamper==1){
        menus.SiInscrito();
    }
    else if (opccamper==2){
        menus.MenuInscripcionCamper();
        booleanito=true
    }
}
else if (opcion==2){
    menus.MenuTrainer();
}
else if (opcion==3){
    menus.Menucordinadora();
}
else if (opcion==4){
    booleanito=false;
}
else{
    alert("El Numero que Ingresaste no fue validado ❌")
}
}