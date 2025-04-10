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
    let leng = Object.keys(camp).length;
    for (let i=0;i<leng;i++){
        let rut=prompt("dime tu ruta\n"+
                        "1.Java\n"+
                        "2.NodeJS\n"+
                        "3.NetCore\n"+
                        "EScribelo identico mayus y mins etc etc");
        let skill=prompt("ingrese la skill de la cual quiera ver las notas");
        let campid = parseInt(prompt("ingresa tu id para saber tus notas"));
        if ((camp[rut][skill][i]["ID"])==campid){
            alert("Nota Proyecto: " + (camp[rut][skill][i]["Notas"]["notaProyecto"]))
            alert("Nota Filtro: " + camp[rut][skill][i]["Notas"]["notaFiltro"])
            alert("Nota Trabajos: " + camp[rut][skill][i]["Notas"]["notaTrabajos"])
            alert("Nota Final: " + camp[rut][skill][i]["Notas"]["notaFinal"])
            break;
        };
    }
}