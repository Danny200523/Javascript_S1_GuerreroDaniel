// #####################################
// Ejercicios DIA 1
// #####################################

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
////MENU CAMPER////
export function menucamp(){
    alert("================================\n"+
          "=       1.  VER NOTAS          =\n"+
          "================================")
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
///////////////////////////////////////////Datos/////////////////////////////////////////////////////
export let campers={
    "Campers": [
                {
                    "ID": 19392183822,
                    "nombre": "Sofia",
                    "apellido": "Duran",
                    "direccion": "Carrera 45 #12-30",
                    "acudientes": "María González",
                    "#celular": 3101234567,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Programación",
                    "Riesgo": "Bajo",
                    "notainicial": 85,
                    "fechaInicio": "10/01/2024",
                    "fechaFin": "15/11/2024"
                },
                {
                    "ID": 5203779532,
                    "nombre": "Emilio",
                    "apellido": "Martínez",
                    "direccion": "Calle 72 #23-15",
                    "acudientes": "Carlos Martínez",
                    "#celular": 3152345678,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Programación",
                    "Riesgo": "Medio",
                    "notainicial": 68,
                    "fechaInicio": "10/01/2024",
                    "fechaFin": "15/11/2024"
                },
                {
                    "ID": 1000000001,
                    "nombre": "Ana",
                    "apellido": "López",
                    "direccion": "Avenida 30 #45-12",
                    "acudientes": "Luisa Fernández",
                    "#celular": 3203456789,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Programación",
                    "Riesgo": "Bajo",
                    "notainicial": 90,
                    "fechaInicio": "12/02/2024",
                    "fechaFin": "20/12/2024"
                },
                {
                    "ID": 1000000002,
                    "nombre": "Juan",
                    "apellido": "Gómez",
                    "direccion": "Carrera 15 #78-33",
                    "acudientes": "Pedro Gómez",
                    "#celular": 3004567890,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Programación",
                    "Riesgo": "Alto",
                    "notainicial": 55,
                    "fechaInicio": "12/02/2024",
                    "fechaFin": "20/12/2024"
                },
                {
                    "ID": 1000000034,
                    "nombre": "Benjamín",
                    "apellido": "Ríos",
                    "direccion": "Calle 80 #11-45",
                    "acudientes": "Laura Ríos",
                    "#celular": 3015678901,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Programación",
                    "Riesgo": "Bajo",
                    "notainicial": 78,
                    "fechaInicio": "05/03/2024",
                    "fechaFin": "10/01/2025"
                },
                {
                    "ID": 1000000035,
                    "nombre": "Catalina",
                    "apellido": "Medina",
                    "direccion": "Carrera 60 #22-18",
                    "acudientes": "Andrés Medina",
                    "#celular": 3026789012,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Programación",
                    "Riesgo": "Medio",
                    "notainicial": 65,
                    "fechaInicio": "05/03/2024",
                    "fechaFin": "10/01/2025"
                },
                {
                    "ID": 1000000067,
                    "nombre": "Daniel",
                    "apellido": "Ríos",
                    "direccion": "Avenida 5 #33-27",
                    "acudientes": "Patricia Ríos",
                    "#celular": 3037890123,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Programación",
                    "Riesgo": "Bajo",
                    "notainicial": 82,
                    "fechaInicio": "15/04/2024",
                    "fechaFin": "20/02/2025"
                },
                {
                    "ID": 1000000068,
                    "nombre": "Victoria",
                    "apellido": "Morales",
                    "direccion": "Calle 40 #55-10",
                    "acudientes": "Ricardo Morales",
                    "#celular": 3048901234,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Programación",
                    "Riesgo": "Alto",
                    "notainicial": 50,
                    "fechaInicio": "15/04/2024",
                    "fechaFin": "20/02/2025"
                },
                {
                    "ID": 2336809243,
                    "nombre": "Sofía",
                    "apellido": "García",
                    "direccion": "Carrera 25 #14-50",
                    "acudientes": "Jorge García",
                    "#celular": 3059012345,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Matemáticas",
                    "Riesgo": "Bajo",
                    "notainicial": 88,
                    "fechaInicio": "08/01/2024",
                    "fechaFin": "12/11/2024"
                },
                {
                    "ID": 2637447129,
                    "nombre": "Carlos",
                    "apellido": "Díaz",
                    "direccion": "Calle 33 #77-21",
                    "acudientes": "Mónica Díaz",
                    "#celular": 3100123456,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Matemáticas",
                    "Riesgo": "Medio",
                    "notainicial": 62,
                    "fechaInicio": "08/01/2024",
                    "fechaFin": "12/11/2024"
                },
                {
                    "ID": 1000000003,
                    "nombre": "Laura",
                    "apellido": "Martínez",
                    "direccion": "Avenida 68 #9-42",
                    "acudientes": "Fernando Martínez",
                    "#celular": 3111234567,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Matemáticas",
                    "Riesgo": "Bajo",
                    "notainicial": 95,
                    "fechaInicio": "10/02/2024",
                    "fechaFin": "18/12/2024"
                },
                {
                    "ID": 1000000004,
                    "nombre": "Carlos",
                    "apellido": "Rodríguez",
                    "direccion": "Carrera 50 #33-15",
                    "acudientes": "Sara Rodríguez",
                    "#celular": 3122345678,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Matemáticas",
                    "Riesgo": "Alto",
                    "notainicial": 48,
                    "fechaInicio": "10/02/2024",
                    "fechaFin": "18/12/2024"
                },
                {
                    "ID": 9168273911,
                    "nombre": "Pedro",
                    "apellido": "Vargas",
                    "direccion": "Calle 90 #5-28",
                    "acudientes": "Teresa Vargas",
                    "#celular": 3133456789,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Matemáticas",
                    "Riesgo": "Bajo",
                    "notainicial": 75,
                    "fechaInicio": "03/03/2024",
                    "fechaFin": "08/01/2025"
                },
                {
                    "ID": 7453600291,
                    "nombre": "Ana",
                    "apellido": "Ramírez",
                    "direccion": "Carrera 10 #40-22",
                    "acudientes": "Alberto Ramírez",
                    "#celular": 3144567890,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Matemáticas",
                    "Riesgo": "Medio",
                    "notainicial": 60,
                    "fechaInicio": "03/03/2024",
                    "fechaFin": "08/01/2025"
                },
                {
                    "ID": 1000000069,
                    "nombre": "David",
                    "apellido": "Ortiz",
                    "direccion": "Avenida 20 #12-35",
                    "acudientes": "Claudia Ortiz",
                    "#celular": 3155678901,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Matemáticas",
                    "Riesgo": "Bajo",
                    "notainicial": 80,
                    "fechaInicio": "12/04/2024",
                    "fechaFin": "17/02/2025"
                },
                {
                    "ID": 1000000070,
                    "nombre": "María",
                    "apellido": "Cruz",
                    "direccion": "Calle 55 #18-40",
                    "acudientes": "Roberto Cruz",
                    "#celular": 3166789012,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Matemáticas",
                    "Riesgo": "Alto",
                    "notainicial": 45,
                    "fechaInicio": "12/04/2024",
                    "fechaFin": "17/02/2025"
                },
                {
                    "ID": 1049291388,
                    "nombre": "Danny",
                    "apellido": "Guerrero",
                    "direccion": "Carrera 35 #25-12",
                    "acudientes": "Luisa Guerrero",
                    "#celular": 3177890123,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Inglés",
                    "Riesgo": "Bajo",
                    "notainicial": 92,
                    "fechaInicio": "05/01/2024",
                    "fechaFin": "10/11/2024"
                },
                {
                    "ID": 1097099391,
                    "nombre": "Santiago",
                    "apellido": "Aguilar",
                    "direccion": "Calle 105 #15d-27",
                    "acudientes": "Sandra Aguilar",
                    "#celular": 3188901234,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Inglés",
                    "Riesgo": "Medio",
                    "notainicial": 70,
                    "fechaInicio": "05/01/2024",
                    "fechaFin": "10/11/2024"
                },
                {
                    "ID": 1000000032,
                    "nombre": "Thiago",
                    "apellido": "Campos",
                    "direccion": "Avenida 40 #8-33",
                    "acudientes": "Marcela Campos",
                    "#celular": 3199012345,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Inglés",
                    "Riesgo": "Bajo",
                    "notainicial": 85,
                    "fechaInicio": "08/02/2024",
                    "fechaFin": "15/12/2024"
                },
                {
                    "ID": 1000000033,
                    "nombre": "Florencia",
                    "apellido": "Fuentes",
                    "direccion": "Carrera 22 #11-19",
                    "acudientes": "Javier Fuentes",
                    "#celular": 3200123456,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Inglés",
                    "Riesgo": "Alto",
                    "notainicial": 52,
                    "fechaInicio": "08/02/2024",
                    "fechaFin": "15/12/2024"
                },
                {
                    "ID": 1000000065,
                    "nombre": "Samuel",
                    "apellido": "Mendoza",
                    "direccion": "Calle 60 #30-45",
                    "acudientes": "Patricia Mendoza",
                    "#celular": 3211234567,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Inglés",
                    "Riesgo": "Bajo",
                    "notainicial": 78,
                    "fechaInicio": "01/03/2024",
                    "fechaFin": "05/01/2025"
                },
                {
                    "ID": 1000000066,
                    "nombre": "Emma",
                    "apellido": "Guerrero",
                    "direccion": "Carrera 8 #17-50",
                    "acudientes": "Ricardo Guerrero",
                    "#celular": 3222345678,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Inglés",
                    "Riesgo": "Medio",
                    "notainicial": 65,
                    "fechaInicio": "01/03/2024",
                    "fechaFin": "05/01/2025"
                },
                {
                    "ID": 5389517512,
                    "nombre": "Gabriela",
                    "apellido": "García",
                    "direccion": "Avenida 15 #20-10",
                    "acudientes": "Alejandro García",
                    "#celular": 3233456789,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Inglés",
                    "Riesgo": "Bajo",
                    "notainicial": 88,
                    "fechaInicio": "10/04/2024",
                    "fechaFin": "15/02/2025"
                },
                {
                    "ID": 3542795317,
                    "nombre": "Lucía",
                    "apellido": "Martínez",
                    "direccion": "Calle 25 #35-17",
                    "acudientes": "Sergio Martínez",
                    "#celular": 3244567890,
                    "Estado": {
                        "Aprobado": false,
                        "Cursando": true,
                        "En proceso de ingreso": false,
                        "Expulsado": false,
                        "Graduado": false,
                        "Inscrito": true,
                        "Retirado": false
                    },
                    "Curso": "Inglés",
                    "Riesgo": "Alto",
                    "notainicial": 47,
                    "fechaInicio": "10/04/2024",
                    "fechaFin": "15/02/2025"
                }
            ]
        }
export let HorariosCursos={
        "Horarios": {
          "HorarioA": {
            "P1": [
              { "ID": 19392183822, "nombre": "Sofia", "apellido": "Duran" },
              { "ID": 5203779532, "nombre": "Emilio", "apellido": "Martínez" }
            ],
            "M1": [
              { "ID": 2336809243, "nombre": "Sofía", "apellido": "García" },
              { "ID": 2637447129, "nombre": "Carlos", "apellido": "Díaz" }
            ],
            "J1": [
              { "ID": 1049291388, "nombre": "Danny", "apellido": "Guerrero" },
              { "ID": 1097099391, "nombre": "Santiago", "apellido": "Aguilar" }
            ]
          },
          "HorarioB": {
            "P2": [
              { "ID": 1000000001, "nombre": "Ana", "apellido": "López" },
              { "ID": 1000000002, "nombre": "Juan", "apellido": "Gómez" }
            ],
            "M2": [
              { "ID": 1000000003, "nombre": "Laura", "apellido": "Martínez" },
              { "ID": 1000000004, "nombre": "Carlos", "apellido": "Rodríguez" }
            ],
            "J2": [
              { "ID": 1000000032, "nombre": "Thiago", "apellido": "Campos" },
              { "ID": 1000000033, "nombre": "Florencia", "apellido": "Fuentes" }
            ]
          },
          "HorarioC": {
            "P3": [
              { "ID": 1000000034, "nombre": "Benjamín", "apellido": "Ríos" },
              { "ID": 1000000035, "nombre": "Catalina", "apellido": "Medina" }
            ],
            "M3": [
              { "ID": 9168273911, "nombre": "Pedro", "apellido": "Vargas" },
              { "ID": 7453600291, "nombre": "Ana", "apellido": "Ramírez" }
            ],
            "J3": [
              { "ID": 1000000065, "nombre": "Samuel", "apellido": "Mendoza" },
              { "ID": 1000000066, "nombre": "Emma", "apellido": "Guerrero" }
            ]
          },
          "HorarioD": {
            "P4": [
              { "ID": 1000000067, "nombre": "Daniel", "apellido": "Ríos" },
              { "ID": 1000000068, "nombre": "Victoria", "apellido": "Morales" }
            ],
            "M4": [
              { "ID": 1000000069, "nombre": "David", "apellido": "Ortiz" },
              { "ID": 1000000070, "nombre": "María", "apellido": "Cruz" }
            ],
            "J4": [
              { "ID": 5389517512, "nombre": "Gabriela", "apellido": "García" },
              { "ID": 3542795317, "nombre": "Lucía", "apellido": "Martínez" }
            ]
          }
        }
}
export let Rutas={
    "Java": {
        "Intro": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 66,
                    "notaFiltro": 22,
                    "notaTrabajos": 86,
                    "notaFinal": 22.8
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 48,
                    "notaFiltro": 32,
                    "notaTrabajos": 53,
                    "notaFinal": 26.3
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 28,
                    "notaFiltro": 11,
                    "notaTrabajos": 2,
                    "notaFinal": 73.0
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 9,
                    "notaFiltro": 52,
                    "notaTrabajos": 95,
                    "notaFinal": 22.5
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 87,
                    "notaFiltro": 46,
                    "notaTrabajos": 57,
                    "notaFinal": 52.0
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 36,
                    "notaFiltro": 54,
                    "notaTrabajos": 58,
                    "notaFinal": 27.6
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 62,
                    "notaFiltro": 68,
                    "notaTrabajos": 53,
                    "notaFinal": 74.8
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 4,
                    "notaFiltro": 49,
                    "notaTrabajos": 56,
                    "notaFinal": 27.3
                }
            }
        ],
        "Python": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 81,
                    "notaFiltro": 67,
                    "notaTrabajos": 12,
                    "notaFinal": 24.2
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 43,
                    "notaFiltro": 12,
                    "notaTrabajos": 48,
                    "notaFinal": 59.3
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 61,
                    "notaFiltro": 37,
                    "notaTrabajos": 68,
                    "notaFinal": 27.8
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 2,
                    "notaFiltro": 99,
                    "notaTrabajos": 63,
                    "notaFinal": 21.3
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 44,
                    "notaFiltro": 33,
                    "notaTrabajos": 44,
                    "notaFinal": 55.9
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 4,
                    "notaFiltro": 95,
                    "notaTrabajos": 44,
                    "notaFinal": 40.1
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 63,
                    "notaFiltro": 45,
                    "notaTrabajos": 99,
                    "notaFinal": 39.1
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 43,
                    "notaFiltro": 15,
                    "notaTrabajos": 98,
                    "notaFinal": 88.7
                }
            }
        ],
        "Html/css": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 97,
                    "notaFiltro": 41,
                    "notaTrabajos": 38,
                    "notaFinal": 29.5
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 11,
                    "notaFiltro": 42,
                    "notaTrabajos": 95,
                    "notaFinal": 97.3
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 41,
                    "notaFiltro": 64,
                    "notaTrabajos": 41,
                    "notaFinal": 82.3
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 83,
                    "notaFiltro": 80,
                    "notaTrabajos": 28,
                    "notaFinal": 59.7
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 53,
                    "notaFiltro": 36,
                    "notaTrabajos": 51,
                    "notaFinal": 67.3
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 88,
                    "notaFiltro": 23,
                    "notaTrabajos": 11,
                    "notaFinal": 39.9
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 87,
                    "notaFiltro": 23,
                    "notaTrabajos": 77,
                    "notaFinal": 74.6
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 36,
                    "notaFiltro": 56,
                    "notaTrabajos": 33,
                    "notaFinal": 38.9
                }
            }
        ],
        "Scrum": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 66,
                    "notaFiltro": 2,
                    "notaTrabajos": 54,
                    "notaFinal": 61.5
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 94,
                    "notaFiltro": 48,
                    "notaTrabajos": 2,
                    "notaFinal": 47.8
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 82,
                    "notaFiltro": 24,
                    "notaTrabajos": 78,
                    "notaFinal": 26.1
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 31,
                    "notaFiltro": 8,
                    "notaTrabajos": 5,
                    "notaFinal": 28.7
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 24,
                    "notaFiltro": 1,
                    "notaTrabajos": 89,
                    "notaFinal": 97.0
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 94,
                    "notaFiltro": 80,
                    "notaTrabajos": 7,
                    "notaFinal": 44.3
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 56,
                    "notaFiltro": 48,
                    "notaTrabajos": 31,
                    "notaFinal": 66.0
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 48,
                    "notaFiltro": 92,
                    "notaTrabajos": 20,
                    "notaFinal": 72.0
                }
            }
        ],
        "Git": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 30,
                    "notaFiltro": 16,
                    "notaTrabajos": 49,
                    "notaFinal": 35.6
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 3,
                    "notaFiltro": 66,
                    "notaTrabajos": 71,
                    "notaFinal": 52.9
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 0,
                    "notaFiltro": 15,
                    "notaTrabajos": 32,
                    "notaFinal": 83.9
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 59,
                    "notaFiltro": 60,
                    "notaTrabajos": 41,
                    "notaFinal": 31.8
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 61,
                    "notaFiltro": 0,
                    "notaTrabajos": 85,
                    "notaFinal": 84.1
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 17,
                    "notaFiltro": 81,
                    "notaTrabajos": 2,
                    "notaFinal": 65.2
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 36,
                    "notaFiltro": 0,
                    "notaTrabajos": 22,
                    "notaFinal": 29.5
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 58,
                    "notaFiltro": 82,
                    "notaTrabajos": 4,
                    "notaFinal": 30.5
                }
            }
        ],
        "Javascript": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 21,
                    "notaFiltro": 17,
                    "notaTrabajos": 5,
                    "notaFinal": 95.2
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 100,
                    "notaFiltro": 52,
                    "notaTrabajos": 83,
                    "notaFinal": 81.1
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 97,
                    "notaFiltro": 83,
                    "notaTrabajos": 57,
                    "notaFinal": 38.0
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 77,
                    "notaFiltro": 29,
                    "notaTrabajos": 50,
                    "notaFinal": 87.4
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 92,
                    "notaFiltro": 92,
                    "notaTrabajos": 46,
                    "notaFinal": 24.0
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 68,
                    "notaFiltro": 56,
                    "notaTrabajos": 87,
                    "notaFinal": 85.8
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 14,
                    "notaFiltro": 98,
                    "notaTrabajos": 57,
                    "notaFinal": 58.3
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 35,
                    "notaFiltro": 89,
                    "notaTrabajos": 86,
                    "notaFinal": 71.8
                }
            }
        ],
        "Introback": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 60,
                    "notaFiltro": 30,
                    "notaTrabajos": 22,
                    "notaFinal": 34.8
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 24,
                    "notaFiltro": 94,
                    "notaTrabajos": 89,
                    "notaFinal": 66.5
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 5,
                    "notaFiltro": 16,
                    "notaTrabajos": 37,
                    "notaFinal": 39.1
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 48,
                    "notaFiltro": 74,
                    "notaTrabajos": 87,
                    "notaFinal": 81.0
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 6,
                    "notaFiltro": 75,
                    "notaTrabajos": 24,
                    "notaFinal": 92.3
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 2,
                    "notaFiltro": 75,
                    "notaTrabajos": 95,
                    "notaFinal": 70.9
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 61,
                    "notaFiltro": 12,
                    "notaTrabajos": 9,
                    "notaFinal": 53.8
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 7,
                    "notaFiltro": 6,
                    "notaTrabajos": 96,
                    "notaFinal": 83.0
                }
            }
        ],
        "Introbbdd": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 5,
                    "notaFiltro": 51,
                    "notaTrabajos": 62,
                    "notaFinal": 95.4
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 57,
                    "notaFiltro": 32,
                    "notaTrabajos": 42,
                    "notaFinal": 23.3
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 61,
                    "notaFiltro": 89,
                    "notaTrabajos": 48,
                    "notaFinal": 68.3
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 16,
                    "notaFiltro": 55,
                    "notaTrabajos": 84,
                    "notaFinal": 30.3
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 14,
                    "notaFiltro": 69,
                    "notaTrabajos": 45,
                    "notaFinal": 31.5
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 99,
                    "notaFiltro": 27,
                    "notaTrabajos": 22,
                    "notaFinal": 46.9
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 62,
                    "notaFiltro": 14,
                    "notaTrabajos": 57,
                    "notaFinal": 77.3
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 25,
                    "notaFiltro": 99,
                    "notaTrabajos": 74,
                    "notaFinal": 77.1
                }
            }
        ],
        "Mysql": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 35,
                    "notaFiltro": 86,
                    "notaTrabajos": 14,
                    "notaFinal": 50.3
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 73,
                    "notaFiltro": 24,
                    "notaTrabajos": 42,
                    "notaFinal": 43.0
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 99,
                    "notaFiltro": 26,
                    "notaTrabajos": 91,
                    "notaFinal": 86.0
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 9,
                    "notaFiltro": 10,
                    "notaTrabajos": 17,
                    "notaFinal": 44.1
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 20,
                    "notaFiltro": 95,
                    "notaTrabajos": 0,
                    "notaFinal": 99.4
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 92,
                    "notaFiltro": 23,
                    "notaTrabajos": 11,
                    "notaFinal": 30.4
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 50,
                    "notaFiltro": 47,
                    "notaTrabajos": 42,
                    "notaFinal": 51.7
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 50,
                    "notaFiltro": 87,
                    "notaTrabajos": 50,
                    "notaFinal": 80.7
                }
            }
        ],
        "Java": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 48,
                    "notaFiltro": 4,
                    "notaTrabajos": 66,
                    "notaFinal": 59.4
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 3,
                    "notaFiltro": 16,
                    "notaTrabajos": 60,
                    "notaFinal": 37.1
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 63,
                    "notaFiltro": 54,
                    "notaTrabajos": 33,
                    "notaFinal": 29.7
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 9,
                    "notaFiltro": 43,
                    "notaTrabajos": 72,
                    "notaFinal": 90.6
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 70,
                    "notaFiltro": 8,
                    "notaTrabajos": 56,
                    "notaFinal": 78.4
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 89,
                    "notaFiltro": 22,
                    "notaTrabajos": 18,
                    "notaFinal": 50.3
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 29,
                    "notaFiltro": 89,
                    "notaTrabajos": 96,
                    "notaFinal": 72.4
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 61,
                    "notaFiltro": 61,
                    "notaTrabajos": 37,
                    "notaFinal": 77.6
                }
            }
        ],
        "Postgrsql": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 81,
                    "notaFiltro": 27,
                    "notaTrabajos": 33,
                    "notaFinal": 86.6
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 8,
                    "notaFiltro": 4,
                    "notaTrabajos": 95,
                    "notaFinal": 89.6
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 50,
                    "notaFiltro": 77,
                    "notaTrabajos": 7,
                    "notaFinal": 36.5
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 36,
                    "notaFiltro": 98,
                    "notaTrabajos": 62,
                    "notaFinal": 90.3
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 40,
                    "notaFiltro": 57,
                    "notaTrabajos": 44,
                    "notaFinal": 68.6
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 92,
                    "notaFiltro": 80,
                    "notaTrabajos": 17,
                    "notaFinal": 64.7
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 50,
                    "notaFiltro": 68,
                    "notaTrabajos": 11,
                    "notaFinal": 39.7
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 92,
                    "notaFiltro": 29,
                    "notaTrabajos": 94,
                    "notaFinal": 64.1
                }
            }
        ],
        "Springboot": [
            {
                "nombre": "Sofia",
                "ID": 19392183822,
                "Notas": {
                    "notaProyecto": 27,
                    "notaFiltro": 13,
                    "notaTrabajos": 62,
                    "notaFinal": 88.6
                }
            },
            {
                "nombre": "Emilio",
                "ID": 5203779532,
                "Notas": {
                    "notaProyecto": 35,
                    "notaFiltro": 27,
                    "notaTrabajos": 84,
                    "notaFinal": 21.5
                }
            },
            {
                "nombre": "Ana",
                "ID": 1000000001,
                "Notas": {
                    "notaProyecto": 17,
                    "notaFiltro": 35,
                    "notaTrabajos": 15,
                    "notaFinal": 48.1
                }
            },
            {
                "nombre": "Juan",
                "ID": 1000000002,
                "Notas": {
                    "notaProyecto": 7,
                    "notaFiltro": 43,
                    "notaTrabajos": 6,
                    "notaFinal": 84.1
                }
            },
            {
                "nombre": "Benjamín",
                "ID": 1000000034,
                "Notas": {
                    "notaProyecto": 55,
                    "notaFiltro": 31,
                    "notaTrabajos": 59,
                    "notaFinal": 22.7
                }
            },
            {
                "nombre": "Catalina",
                "ID": 1000000035,
                "Notas": {
                    "notaProyecto": 22,
                    "notaFiltro": 46,
                    "notaTrabajos": 38,
                    "notaFinal": 88.5
                }
            },
            {
                "nombre": "Daniel",
                "ID": 1000000067,
                "Notas": {
                    "notaProyecto": 67,
                    "notaFiltro": 87,
                    "notaTrabajos": 80,
                    "notaFinal": 66.7
                }
            },
            {
                "nombre": "Victoria",
                "ID": 1000000068,
                "Notas": {
                    "notaProyecto": 82,
                    "notaFiltro": 24,
                    "notaTrabajos": 23,
                    "notaFinal": 73.8
                }
            }
        ]
    },
    "NodeJS": {
        "Intro": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 38,
                    "notaFiltro": 21,
                    "notaTrabajos": 53,
                    "notaFinal": 27.2
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 27,
                    "notaFiltro": 96,
                    "notaTrabajos": 60,
                    "notaFinal": 77.5
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 30,
                    "notaFiltro": 89,
                    "notaTrabajos": 64,
                    "notaFinal": 80.5
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 66,
                    "notaFiltro": 53,
                    "notaTrabajos": 66,
                    "notaFinal": 86.1
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 44,
                    "notaFiltro": 41,
                    "notaTrabajos": 46,
                    "notaFinal": 95.6
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 92,
                    "notaFiltro": 60,
                    "notaTrabajos": 68,
                    "notaFinal": 29.7
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 74,
                    "notaFiltro": 66,
                    "notaTrabajos": 40,
                    "notaFinal": 35.9
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 5,
                    "notaFiltro": 21,
                    "notaTrabajos": 87,
                    "notaFinal": 83.1
                }
            }
        ],
        "Python": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 27,
                    "notaFiltro": 99,
                    "notaTrabajos": 75,
                    "notaFinal": 89.5
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 63,
                    "notaFiltro": 38,
                    "notaTrabajos": 56,
                    "notaFinal": 31.7
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 29,
                    "notaFiltro": 70,
                    "notaTrabajos": 12,
                    "notaFinal": 67.1
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 2,
                    "notaFiltro": 23,
                    "notaTrabajos": 23,
                    "notaFinal": 49.3
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 18,
                    "notaFiltro": 88,
                    "notaTrabajos": 47,
                    "notaFinal": 95.2
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 42,
                    "notaFiltro": 21,
                    "notaTrabajos": 82,
                    "notaFinal": 32.2
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 21,
                    "notaFiltro": 50,
                    "notaTrabajos": 59,
                    "notaFinal": 77.8
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 2,
                    "notaFiltro": 6,
                    "notaTrabajos": 91,
                    "notaFinal": 37.0
                }
            }
        ],
        "Html/css": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 17,
                    "notaFiltro": 24,
                    "notaTrabajos": 25,
                    "notaFinal": 30.4
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 17,
                    "notaFiltro": 34,
                    "notaTrabajos": 27,
                    "notaFinal": 63.8
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 56,
                    "notaFiltro": 62,
                    "notaTrabajos": 90,
                    "notaFinal": 81.6
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 17,
                    "notaFiltro": 79,
                    "notaTrabajos": 9,
                    "notaFinal": 46.8
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 72,
                    "notaFiltro": 81,
                    "notaTrabajos": 98,
                    "notaFinal": 67.7
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 58,
                    "notaFiltro": 99,
                    "notaTrabajos": 0,
                    "notaFinal": 20.1
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 3,
                    "notaFiltro": 93,
                    "notaTrabajos": 3,
                    "notaFinal": 57.2
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 27,
                    "notaFiltro": 66,
                    "notaTrabajos": 94,
                    "notaFinal": 69.7
                }
            }
        ],
        "Scrum": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 56,
                    "notaFiltro": 18,
                    "notaTrabajos": 18,
                    "notaFinal": 78.2
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 38,
                    "notaFiltro": 2,
                    "notaTrabajos": 31,
                    "notaFinal": 33.8
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 81,
                    "notaFiltro": 63,
                    "notaTrabajos": 95,
                    "notaFinal": 44.8
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 1,
                    "notaFiltro": 81,
                    "notaTrabajos": 43,
                    "notaFinal": 40.7
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 15,
                    "notaFiltro": 92,
                    "notaTrabajos": 78,
                    "notaFinal": 64.7
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 85,
                    "notaFiltro": 36,
                    "notaTrabajos": 69,
                    "notaFinal": 35.4
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 72,
                    "notaFiltro": 36,
                    "notaTrabajos": 24,
                    "notaFinal": 65.0
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 17,
                    "notaFiltro": 22,
                    "notaTrabajos": 52,
                    "notaFinal": 55.7
                }
            }
        ],
        "Git": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 63,
                    "notaFiltro": 82,
                    "notaTrabajos": 70,
                    "notaFinal": 57.4
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 24,
                    "notaFiltro": 98,
                    "notaTrabajos": 25,
                    "notaFinal": 76.3
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 20,
                    "notaFiltro": 26,
                    "notaTrabajos": 7,
                    "notaFinal": 32.9
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 44,
                    "notaFiltro": 35,
                    "notaTrabajos": 8,
                    "notaFinal": 39.6
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 20,
                    "notaFiltro": 86,
                    "notaTrabajos": 60,
                    "notaFinal": 28.9
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 58,
                    "notaFiltro": 47,
                    "notaTrabajos": 39,
                    "notaFinal": 76.5
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 42,
                    "notaFiltro": 35,
                    "notaTrabajos": 1,
                    "notaFinal": 55.9
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 16,
                    "notaFiltro": 20,
                    "notaTrabajos": 49,
                    "notaFinal": 80.6
                }
            }
        ],
        "Javascript1": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 8,
                    "notaFiltro": 41,
                    "notaTrabajos": 73,
                    "notaFinal": 28.5
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 33,
                    "notaFiltro": 91,
                    "notaTrabajos": 95,
                    "notaFinal": 74.5
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 2,
                    "notaFiltro": 4,
                    "notaTrabajos": 68,
                    "notaFinal": 99.8
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 75,
                    "notaFiltro": 24,
                    "notaTrabajos": 36,
                    "notaFinal": 58.8
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 98,
                    "notaFiltro": 19,
                    "notaTrabajos": 100,
                    "notaFinal": 99.6
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 89,
                    "notaFiltro": 27,
                    "notaTrabajos": 60,
                    "notaFinal": 37.4
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 88,
                    "notaFiltro": 84,
                    "notaTrabajos": 21,
                    "notaFinal": 35.6
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 56,
                    "notaFiltro": 25,
                    "notaTrabajos": 83,
                    "notaFinal": 89.9
                }
            }
        ],
        "Introback": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 27,
                    "notaFiltro": 68,
                    "notaTrabajos": 37,
                    "notaFinal": 78.6
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 89,
                    "notaFiltro": 58,
                    "notaTrabajos": 61,
                    "notaFinal": 59.1
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 99,
                    "notaFiltro": 34,
                    "notaTrabajos": 90,
                    "notaFinal": 73.4
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 32,
                    "notaFiltro": 62,
                    "notaTrabajos": 25,
                    "notaFinal": 96.8
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 97,
                    "notaFiltro": 82,
                    "notaTrabajos": 94,
                    "notaFinal": 45.3
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 70,
                    "notaFiltro": 24,
                    "notaTrabajos": 50,
                    "notaFinal": 65.7
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 90,
                    "notaFiltro": 63,
                    "notaTrabajos": 34,
                    "notaFinal": 47.4
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 63,
                    "notaFiltro": 76,
                    "notaTrabajos": 49,
                    "notaFinal": 49.0
                }
            }
        ],
        "Introbbdd": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 63,
                    "notaFiltro": 64,
                    "notaTrabajos": 44,
                    "notaFinal": 28.6
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 25,
                    "notaFiltro": 7,
                    "notaTrabajos": 78,
                    "notaFinal": 41.5
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 19,
                    "notaFiltro": 34,
                    "notaTrabajos": 100,
                    "notaFinal": 75.7
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 25,
                    "notaFiltro": 66,
                    "notaTrabajos": 4,
                    "notaFinal": 77.8
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 13,
                    "notaFiltro": 4,
                    "notaTrabajos": 84,
                    "notaFinal": 81.6
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 45,
                    "notaFiltro": 55,
                    "notaTrabajos": 24,
                    "notaFinal": 58.7
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 32,
                    "notaFiltro": 73,
                    "notaTrabajos": 28,
                    "notaFinal": 72.0
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 81,
                    "notaFiltro": 28,
                    "notaTrabajos": 53,
                    "notaFinal": 69.4
                }
            }
        ],
        "Mongodb": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 57,
                    "notaFiltro": 30,
                    "notaTrabajos": 93,
                    "notaFinal": 72.5
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 13,
                    "notaFiltro": 66,
                    "notaTrabajos": 80,
                    "notaFinal": 66.5
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 18,
                    "notaFiltro": 34,
                    "notaTrabajos": 14,
                    "notaFinal": 93.3
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 29,
                    "notaFiltro": 50,
                    "notaTrabajos": 61,
                    "notaFinal": 31.2
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 56,
                    "notaFiltro": 67,
                    "notaTrabajos": 88,
                    "notaFinal": 85.1
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 95,
                    "notaFiltro": 37,
                    "notaTrabajos": 30,
                    "notaFinal": 21.9
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 72,
                    "notaFiltro": 1,
                    "notaTrabajos": 85,
                    "notaFinal": 57.1
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 83,
                    "notaFiltro": 10,
                    "notaTrabajos": 44,
                    "notaFinal": 46.0
                }
            }
        ],
        "Javascript2": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 71,
                    "notaFiltro": 66,
                    "notaTrabajos": 88,
                    "notaFinal": 52.0
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 34,
                    "notaFiltro": 50,
                    "notaTrabajos": 77,
                    "notaFinal": 37.4
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 80,
                    "notaFiltro": 21,
                    "notaTrabajos": 87,
                    "notaFinal": 33.4
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 54,
                    "notaFiltro": 21,
                    "notaTrabajos": 20,
                    "notaFinal": 79.0
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 17,
                    "notaFiltro": 87,
                    "notaTrabajos": 2,
                    "notaFinal": 77.9
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 69,
                    "notaFiltro": 41,
                    "notaTrabajos": 37,
                    "notaFinal": 40.8
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 52,
                    "notaFiltro": 41,
                    "notaTrabajos": 63,
                    "notaFinal": 74.8
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 39,
                    "notaFiltro": 96,
                    "notaTrabajos": 29,
                    "notaFinal": 80.3
                }
            }
        ],
        "Mysql": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 55,
                    "notaFiltro": 99,
                    "notaTrabajos": 40,
                    "notaFinal": 84.1
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 55,
                    "notaFiltro": 90,
                    "notaTrabajos": 23,
                    "notaFinal": 43.9
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 20,
                    "notaFiltro": 64,
                    "notaTrabajos": 76,
                    "notaFinal": 58.9
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 27,
                    "notaFiltro": 49,
                    "notaTrabajos": 31,
                    "notaFinal": 88.3
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 66,
                    "notaFiltro": 37,
                    "notaTrabajos": 92,
                    "notaFinal": 90.0
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 13,
                    "notaFiltro": 42,
                    "notaTrabajos": 12,
                    "notaFinal": 44.2
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 52,
                    "notaFiltro": 76,
                    "notaTrabajos": 74,
                    "notaFinal": 49.3
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 59,
                    "notaFiltro": 72,
                    "notaTrabajos": 61,
                    "notaFinal": 27.2
                }
            }
        ],
        "Express": [
            {
                "nombre": "Sofía",
                "ID": 2336809243,
                "Notas": {
                    "notaProyecto": 44,
                    "notaFiltro": 100,
                    "notaTrabajos": 31,
                    "notaFinal": 58.2
                }
            },
            {
                "nombre": "Carlos",
                "ID": 2637447129,
                "Notas": {
                    "notaProyecto": 33,
                    "notaFiltro": 29,
                    "notaTrabajos": 24,
                    "notaFinal": 32.8
                }
            },
            {
                "nombre": "Laura",
                "ID": 1000000003,
                "Notas": {
                    "notaProyecto": 25,
                    "notaFiltro": 14,
                    "notaTrabajos": 44,
                    "notaFinal": 40.2
                }
            },
            {
                "nombre": "Carlos",
                "ID": 1000000004,
                "Notas": {
                    "notaProyecto": 96,
                    "notaFiltro": 93,
                    "notaTrabajos": 19,
                    "notaFinal": 50.2
                }
            },
            {
                "nombre": "Pedro",
                "ID": 9168273911,
                "Notas": {
                    "notaProyecto": 56,
                    "notaFiltro": 42,
                    "notaTrabajos": 73,
                    "notaFinal": 20.7
                }
            },
            {
                "nombre": "Ana",
                "ID": 7453600291,
                "Notas": {
                    "notaProyecto": 82,
                    "notaFiltro": 79,
                    "notaTrabajos": 5,
                    "notaFinal": 61.4
                }
            },
            {
                "nombre": "David",
                "ID": 1000000069,
                "Notas": {
                    "notaProyecto": 82,
                    "notaFiltro": 5,
                    "notaTrabajos": 51,
                    "notaFinal": 54.0
                }
            },
            {
                "nombre": "María",
                "ID": 1000000070,
                "Notas": {
                    "notaProyecto": 63,
                    "notaFiltro": 29,
                    "notaTrabajos": 57,
                    "notaFinal": 68.7
                }
            }
        ]
    },
    "NetCore": {
        "Intro": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 85,
                    "notaFiltro": 90,
                    "notaTrabajos": 73,
                    "notaFinal": 67.5
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 37,
                    "notaFiltro": 54,
                    "notaTrabajos": 41,
                    "notaFinal": 39.9
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 77,
                    "notaFiltro": 6,
                    "notaTrabajos": 82,
                    "notaFinal": 45.8
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 42,
                    "notaFiltro": 45,
                    "notaTrabajos": 71,
                    "notaFinal": 32.7
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 18,
                    "notaFiltro": 29,
                    "notaTrabajos": 23,
                    "notaFinal": 21.8
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 99,
                    "notaFiltro": 71,
                    "notaTrabajos": 60,
                    "notaFinal": 48.0
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 42,
                    "notaFiltro": 24,
                    "notaTrabajos": 51,
                    "notaFinal": 50.2
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 51,
                    "notaFiltro": 49,
                    "notaTrabajos": 40,
                    "notaFinal": 91.7
                }
            }
        ],
        "Python": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 33,
                    "notaFiltro": 92,
                    "notaTrabajos": 81,
                    "notaFinal": 44.8
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 44,
                    "notaFiltro": 54,
                    "notaTrabajos": 34,
                    "notaFinal": 87.2
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 7,
                    "notaFiltro": 77,
                    "notaTrabajos": 66,
                    "notaFinal": 76.7
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 13,
                    "notaFiltro": 86,
                    "notaTrabajos": 49,
                    "notaFinal": 81.8
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 74,
                    "notaFiltro": 94,
                    "notaTrabajos": 63,
                    "notaFinal": 63.0
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 92,
                    "notaFiltro": 77,
                    "notaTrabajos": 81,
                    "notaFinal": 33.0
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 72,
                    "notaFiltro": 87,
                    "notaTrabajos": 60,
                    "notaFinal": 72.7
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 77,
                    "notaFiltro": 36,
                    "notaTrabajos": 39,
                    "notaFinal": 39.9
                }
            }
        ],
        "Html/css": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 56,
                    "notaFiltro": 82,
                    "notaTrabajos": 53,
                    "notaFinal": 67.7
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 80,
                    "notaFiltro": 15,
                    "notaTrabajos": 99,
                    "notaFinal": 86.0
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 43,
                    "notaFiltro": 92,
                    "notaTrabajos": 8,
                    "notaFinal": 72.5
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 63,
                    "notaFiltro": 24,
                    "notaTrabajos": 25,
                    "notaFinal": 77.1
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 70,
                    "notaFiltro": 50,
                    "notaTrabajos": 61,
                    "notaFinal": 38.4
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 11,
                    "notaFiltro": 12,
                    "notaTrabajos": 86,
                    "notaFinal": 77.0
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 35,
                    "notaFiltro": 56,
                    "notaTrabajos": 78,
                    "notaFinal": 56.6
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 50,
                    "notaFiltro": 34,
                    "notaTrabajos": 63,
                    "notaFinal": 42.3
                }
            }
        ],
        "Scrum": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 1,
                    "notaFiltro": 47,
                    "notaTrabajos": 87,
                    "notaFinal": 59.5
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 80,
                    "notaFiltro": 36,
                    "notaTrabajos": 27,
                    "notaFinal": 20.9
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 33,
                    "notaFiltro": 62,
                    "notaTrabajos": 92,
                    "notaFinal": 68.5
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 13,
                    "notaFiltro": 79,
                    "notaTrabajos": 67,
                    "notaFinal": 44.1
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 65,
                    "notaFiltro": 32,
                    "notaTrabajos": 19,
                    "notaFinal": 52.8
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 0,
                    "notaFiltro": 41,
                    "notaTrabajos": 18,
                    "notaFinal": 98.0
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 45,
                    "notaFiltro": 73,
                    "notaTrabajos": 92,
                    "notaFinal": 25.2
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 66,
                    "notaFiltro": 49,
                    "notaTrabajos": 82,
                    "notaFinal": 22.7
                }
            }
        ],
        "Git": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 30,
                    "notaFiltro": 82,
                    "notaTrabajos": 62,
                    "notaFinal": 65.4
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 65,
                    "notaFiltro": 7,
                    "notaTrabajos": 81,
                    "notaFinal": 70.2
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 20,
                    "notaFiltro": 4,
                    "notaTrabajos": 35,
                    "notaFinal": 49.7
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 97,
                    "notaFiltro": 72,
                    "notaTrabajos": 7,
                    "notaFinal": 56.4
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 5,
                    "notaFiltro": 24,
                    "notaTrabajos": 59,
                    "notaFinal": 52.4
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 49,
                    "notaFiltro": 46,
                    "notaTrabajos": 50,
                    "notaFinal": 23.5
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 27,
                    "notaFiltro": 38,
                    "notaTrabajos": 74,
                    "notaFinal": 24.7
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 98,
                    "notaFiltro": 90,
                    "notaTrabajos": 65,
                    "notaFinal": 43.7
                }
            }
        ],
        "Javascript": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 28,
                    "notaFiltro": 73,
                    "notaTrabajos": 92,
                    "notaFinal": 22.3
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 11,
                    "notaFiltro": 1,
                    "notaTrabajos": 65,
                    "notaFinal": 71.3
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 44,
                    "notaFiltro": 65,
                    "notaTrabajos": 87,
                    "notaFinal": 47.5
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 9,
                    "notaFiltro": 16,
                    "notaTrabajos": 2,
                    "notaFinal": 51.0
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 58,
                    "notaFiltro": 85,
                    "notaTrabajos": 79,
                    "notaFinal": 21.3
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 54,
                    "notaFiltro": 68,
                    "notaTrabajos": 58,
                    "notaFinal": 94.7
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 41,
                    "notaFiltro": 82,
                    "notaTrabajos": 37,
                    "notaFinal": 29.5
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 64,
                    "notaFiltro": 18,
                    "notaTrabajos": 36,
                    "notaFinal": 21.2
                }
            }
        ],
        "Introback": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 34,
                    "notaFiltro": 94,
                    "notaTrabajos": 9,
                    "notaFinal": 87.7
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 26,
                    "notaFiltro": 7,
                    "notaTrabajos": 40,
                    "notaFinal": 28.0
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 74,
                    "notaFiltro": 61,
                    "notaTrabajos": 43,
                    "notaFinal": 30.5
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 45,
                    "notaFiltro": 73,
                    "notaTrabajos": 49,
                    "notaFinal": 71.0
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 59,
                    "notaFiltro": 60,
                    "notaTrabajos": 19,
                    "notaFinal": 44.5
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 91,
                    "notaFiltro": 22,
                    "notaTrabajos": 56,
                    "notaFinal": 26.6
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 16,
                    "notaFiltro": 9,
                    "notaTrabajos": 17,
                    "notaFinal": 85.5
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 79,
                    "notaFiltro": 9,
                    "notaTrabajos": 90,
                    "notaFinal": 32.3
                }
            }
        ],
        "Introbbdd": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 24,
                    "notaFiltro": 47,
                    "notaTrabajos": 14,
                    "notaFinal": 52.8
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 71,
                    "notaFiltro": 11,
                    "notaTrabajos": 11,
                    "notaFinal": 74.8
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 45,
                    "notaFiltro": 70,
                    "notaTrabajos": 69,
                    "notaFinal": 64.8
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 98,
                    "notaFiltro": 3,
                    "notaTrabajos": 80,
                    "notaFinal": 83.8
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 92,
                    "notaFiltro": 5,
                    "notaTrabajos": 39,
                    "notaFinal": 21.0
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 51,
                    "notaFiltro": 13,
                    "notaTrabajos": 53,
                    "notaFinal": 47.0
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 39,
                    "notaFiltro": 9,
                    "notaTrabajos": 98,
                    "notaFinal": 87.3
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 96,
                    "notaFiltro": 95,
                    "notaTrabajos": 5,
                    "notaFinal": 28.5
                }
            }
        ],
        "Mysql": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 30,
                    "notaFiltro": 75,
                    "notaTrabajos": 30,
                    "notaFinal": 79.6
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 79,
                    "notaFiltro": 17,
                    "notaTrabajos": 71,
                    "notaFinal": 55.2
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 66,
                    "notaFiltro": 9,
                    "notaTrabajos": 16,
                    "notaFinal": 51.6
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 22,
                    "notaFiltro": 48,
                    "notaTrabajos": 32,
                    "notaFinal": 23.2
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 84,
                    "notaFiltro": 5,
                    "notaTrabajos": 99,
                    "notaFinal": 98.5
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 85,
                    "notaFiltro": 21,
                    "notaTrabajos": 51,
                    "notaFinal": 48.6
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 8,
                    "notaFiltro": 82,
                    "notaTrabajos": 85,
                    "notaFinal": 97.0
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 95,
                    "notaFiltro": 51,
                    "notaTrabajos": 0,
                    "notaFinal": 28.2
                }
            }
        ],
        "C##": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 48,
                    "notaFiltro": 13,
                    "notaTrabajos": 11,
                    "notaFinal": 48.4
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 57,
                    "notaFiltro": 100,
                    "notaTrabajos": 13,
                    "notaFinal": 70.0
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 35,
                    "notaFiltro": 19,
                    "notaTrabajos": 65,
                    "notaFinal": 70.4
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 76,
                    "notaFiltro": 42,
                    "notaTrabajos": 34,
                    "notaFinal": 68.4
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 83,
                    "notaFiltro": 38,
                    "notaTrabajos": 15,
                    "notaFinal": 59.1
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 61,
                    "notaFiltro": 40,
                    "notaTrabajos": 2,
                    "notaFinal": 28.0
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 32,
                    "notaFiltro": 38,
                    "notaTrabajos": 76,
                    "notaFinal": 96.9
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 49,
                    "notaFiltro": 89,
                    "notaTrabajos": 51,
                    "notaFinal": 86.0
                }
            }
        ],
        "Postgrsql": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 76,
                    "notaFiltro": 6,
                    "notaTrabajos": 74,
                    "notaFinal": 91.9
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 70,
                    "notaFiltro": 95,
                    "notaTrabajos": 58,
                    "notaFinal": 40.3
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 59,
                    "notaFiltro": 38,
                    "notaTrabajos": 37,
                    "notaFinal": 57.6
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 20,
                    "notaFiltro": 61,
                    "notaTrabajos": 23,
                    "notaFinal": 27.7
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 48,
                    "notaFiltro": 60,
                    "notaTrabajos": 38,
                    "notaFinal": 92.3
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 12,
                    "notaFiltro": 60,
                    "notaTrabajos": 26,
                    "notaFinal": 71.7
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 22,
                    "notaFiltro": 23,
                    "notaTrabajos": 69,
                    "notaFinal": 59.3
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 66,
                    "notaFiltro": 28,
                    "notaTrabajos": 0,
                    "notaFinal": 64.5
                }
            }
        ],
        ".Netcore": [
            {
                "nombre": "Danny",
                "ID": 1049291388,
                "Notas": {
                    "notaProyecto": 24,
                    "notaFiltro": 17,
                    "notaTrabajos": 9,
                    "notaFinal": 50.7
                }
            },
            {
                "nombre": "Santiago",
                "ID": 1097099391,
                "Notas": {
                    "notaProyecto": 10,
                    "notaFiltro": 16,
                    "notaTrabajos": 21,
                    "notaFinal": 86.2
                }
            },
            {
                "nombre": "Thiago",
                "ID": 1000000032,
                "Notas": {
                    "notaProyecto": 8,
                    "notaFiltro": 11,
                    "notaTrabajos": 5,
                    "notaFinal": 95.1
                }
            },
            {
                "nombre": "Florencia",
                "ID": 1000000033,
                "Notas": {
                    "notaProyecto": 33,
                    "notaFiltro": 2,
                    "notaTrabajos": 52,
                    "notaFinal": 44.2
                }
            },
            {
                "nombre": "Samuel",
                "ID": 1000000065,
                "Notas": {
                    "notaProyecto": 89,
                    "notaFiltro": 17,
                    "notaTrabajos": 21,
                    "notaFinal": 40.9
                }
            },
            {
                "nombre": "Emma",
                "ID": 1000000066,
                "Notas": {
                    "notaProyecto": 91,
                    "notaFiltro": 39,
                    "notaTrabajos": 43,
                    "notaFinal": 26.4
                }
            },
            {
                "nombre": "Gabriela",
                "ID": 5389517512,
                "Notas": {
                    "notaProyecto": 30,
                    "notaFiltro": 31,
                    "notaTrabajos": 97,
                    "notaFinal": 45.6
                }
            },
            {
                "nombre": "Lucía",
                "ID": 3542795317,
                "Notas": {
                    "notaProyecto": 4,
                    "notaFiltro": 70,
                    "notaTrabajos": 62,
                    "notaFinal": 91.0
                }
            }
        ]
    }
}
export let Trainers={
    "Trainers":[
        {"Nombre":"Pedro",
         "Jornada":"FullTime",
         "Ruta":"Java"},

        {"Nombre":"Jolver",
         "Jornada":"FullTime",
         "Ruta":"NodeJS"},

        {"Nombre":"Miguel",
         "Jornada":"FullTime",
         "Ruta":".NET"}
]
}

//Desarrollado por : Daniel Guerrero - T.I. 1.049.291.388