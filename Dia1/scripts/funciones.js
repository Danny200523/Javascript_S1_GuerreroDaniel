import * as campers from "./menus.js";
///FUNCIONES DE CAMPER///
///FUNCION DE INSCRIPCION///
export function inscripcion() {
  let datoscamp = [];
  let id = prompt("Ingrese su numero de documento");
  let nombre = prompt("Ingrese sus dos nombres");
  let apellido = prompt("Ingrese sus dos apellidos");
  let dir = prompt("ingrese la direccion de su vivienda");
  let acu = prompt("ingrese el nombre de su acudiente");
  let tel = prompt("ingrese su numero de telefono");
  let estado={
    "Aprobado": false,
    "Cursando": false,
    "En proceso de ingreso": false,
    "Expulsado": false,
    "Graduado": false,
    "Inscrito": true,
    "Retirado": false
  };
  datoscamp.push({ 
    "ID": id, 
    "nombre": nombre, 
    "apellido":apellido, 
    "direccion":dir,
    "acudiente":acu,
    "telefono":tel,
    "estado":estado,
    "curso":""});
}
////FUNCION VER NOTAS////
export function vernotas(){
    let camp=campers.Rutas;
    for (let i=1;i<length.camp;i++){
        let rut=prompt("dime tu ruta\n"+
                        "1.Java\n"+
                        "2.NodeJS\n"+
                        "3.NetCore\n"+
                        "EScribelo identico mayus y mins etc etc");
        let skill=prompt("ingrese la skill de la cual quiera ver las notas");
        let campid=prompt("ingresa tu id para saber tus notas");
        if ((camp[rut][skill][i]["ID"])==campid){
            alert(camp[rut][skill][i]["Notas"]["notaProyecto"])
            alert(camp[rut][skill][i]["Notas"]["notaFiltro"])
            alert(camp[rut][skill][i]["Notas"]["notaTrabajos"])
            alert(camp[rut][skill][i]["Notas"]["notaFinal"])
        };
    }
}