///Script encargado de guardar los menus como alertas///
export function MenuPrincipal(){
    alert(  "==============================\n"+
            "=  Bienvenido a Campuslands  =\n"+ 
            "==============================\n"+ 
            "=       ¿Quien eres?         =\n"+ 
            "==============================\n"+
            "=     (1). Camper            =\n"+
            "=     (2). Trainer           =\n"+
            "=     (3). Cordinadora       =\n"+
            "=     (4). Salir             =\n"+
            "==============================\n");
}
///MENU PARA LOS CAMPERS///
export function MenuCamper(){
    alert(  "==============================\n"+
            "=     ¿Estás Inscrito?       =\n"+
            "==============================\n"+
            "=          (1). SI           =\n"+
            "=          (2). NO           =\n"+
            "==============================");
}
///MENU POR SI UN CAMPER NO ESTA INSCRITO///
export function MenuInscripcionCamper(){
    alert(  "==============================\n"+
            "= Lo siento, debes estar inscrito para ingresar  =\n"+
            "==============================");
}
///MENU POR SI UN CAMPER ESTA INSCRITO///
export function SiInscrito(){
    alert(  "============================\n"+
            "=    Bienvenido, Camper     =\n"+
            "============================");
}
///MENU DE TRAINER///
export function MenuTrainer(){
    alert(  "==========================\n"+
            "=   Bienvenido, Trainer   =\n"+
            "==========================\n"+
            "==========================\n"+
            "=   ¿Qué deseas hacer?    =\n"+
            "==========================\n"+
            "=   1. Ver notas          =\n"+
            "=   2. Editar notas       =\n"+
            "=   3. Ver estudiantes    =\n"+
            "==========================");
}
///MENU DE CORDINADORA///
export function Menucordinadora(){
    alert(  "=========================================\n"+
            "=          ¿Qué desea hacer?            =\n"+
            "=========================================\n"+
            "=   (1). Agregar estudiante             =\n"+
            "=   (2). Editar estudiante              =\n"+
            "=   (3). Ver estudiantes                =\n"+
            "=   (4). Eliminar estudiante            =\n"+
            "=   (5). Agregar estudiante a curso     =\n"+
            "=   (6). Agregar nueva ruta de estudio  =\n"+
            "=   (7). Ver menú de reportes           =\n"+
            "=   (8). Volver al menú principal       =\n"+
            "=========================================");
}
///MENU DE REPORTES///
export function MenuReportes(){
    alert(  "==============================================\n"+
            "=             ¿Qué desea hacer?              =\n"+
            "==============================================\n"+
            "= (1). Ver campers en estado inscrito        =\n"+
            "= (2). Ver campers que aprobaron examen inicial =\n"+
            "= (3). Ver trainers                          =\n"+
            "= (4). Mostrar campers con riesgo alto       =\n"+
            "==============================================");
}
