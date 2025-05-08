function addCharacter() {
    const personaje = document.getElementById('tt');
    personaje.innerHTML = `<h1>Gestion de Heroes</h1>
        <form>
            <div class="row mb-3">
                <div class="col-6">
                <label for="nameper" class="form-label">Nombre Del Personaje</label>
                <input  type="text" class="form-control" id="nameper" aria-describedby="emailHelp">
              </div>
              <div class="col-6">
                <label for="nameAct" class="form-label">Nombre Del Actor</label>
                <input type="text" class="form-control" id="nameAct" aria-describedby="emailHelp">
              </div>
            </div>
            <div class="row mb-3">
                <div class="col-6">
                <label for="edadAct" class="form-label">Edad Del Actor</label>
                <input type="text" class="form-control" id="edadAct" aria-describedby="emailHelp">
              </div>
              <div class="col-6">
                <label for="ubicacion" class="form-label">Ubicacion</label>
                <input type="text" class="form-control" id="ubicacion" aria-describedby="emailHelp">
              </div>
            </div>
            <div class="row mb-3">
                <div class="col-6">
                <label for="pposter" class="form-label">Poster</label>
                <input  type="text" class="form-control" id="pposter" aria-describedby="emailHelp">
              </div>
              <div class="col-6">
                <label for="datee" class="form-label">Ubicacion</label>
                <input type="date" class="form-control" id="datee" aria-describedby="emailHelp">
              </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                <label for="product" class="form-label">Productora</label>
                <select  class="form-control" id="product" aria-describedby="emailHelp">
                    <option value="MARVEL">MARVEL</option>
                    <option value="DCOMICS">DCOMICS</option>
                </select>
              </div>
            </div>
        </form>
         <div class="Suits">
            <div id="form" class="container my-5 p-5 shadow">
                <table class="table" style="border-top-right-radius: 1vw; border-top-left-radius: 1vw;">
                    <tr class="table-active">
                        <td class="table-secondary">Registro de trajes</td>
                    </tr>
                    <tr>
                        <td>
                            <font color="blue">
                                <h1>Trajes del personaje</h1>
                                <p>En esta seccion podra registrar los nombres de los trajes usados por el actor en cada una de las peliculas</p>
                                <button id="prp" type="button" class="btn btn-warning">+</button>
                                <div id="nss" class="container"></div>
                            </font>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <button id="buttonADD" type="button" class="btn btn-dark">Nuevo Heroe</button>
        <button id="buttonSave" type="button" class="btn btn-primary">Guardar Heroe</button>
        <button id="buttonCancel" type="button" class="btn btn-danger">Cancelar</button>`;
    const pp = document.getElementById('prp');
    pp.addEventListener('click',function suit(){
        const ns = document.getElementById('nss');
        ns.innerHTML += `
        <form>
            <div class="row mb-3">
                <div class="col-12">
                <label for="exampleInputEmail1" class="form-label">Nombre traje</label>
                    <div class="fle">
                        <input  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <button type="button" class="btn btn-danger btn-lg">-</button>
                    <div>
                </div>
            </div>
        </form>`;
    });
    const np = document.getElementById('nameper').value;
    const na = document.getElementById('nameAct').value;
    const ea = document.getElementById('edadAct').value;
    const ub = document.getElementById('ubicacion').value;
    const ppos = document.getElementById('pposter').value;
    const dte = document.getElementById('datee').value;
    const prod = document.getElementById('product').value;
    const newHero = {
        nameCharacter: np,
        nameActor: na,
        edadActor: ea,
        ubicacion: ub,
        poster: ppos,
        date: dte
    };
    async function fetchDataMarvel() {
    const res = await fetch('https://67f91aad094de2fe6ea07a32.mockapi.io/people/project/MARVEL');
        let data = [];
        data = await res.json();
        return data;
    };
    let dataMarvel = fetchDataMarvel();
    async function putData(superero) {
        if (prod==="MARVEL"){
            await fetch(`https://67f91aad094de2fe6ea07a32.mockapi.io/people/project/MARVEL`,{
                method:'PUT',
                headers:{
                    'Content-Type':'application/json'
                        },
                body:JSON.stringify({superero})
                });
            console.log('apea')
            if (!Response.ok){
                console.log("Invalid api")
        }    
        }
        else if (prod==="DCOMICS"){
            await fetch(`https://67f91aad094de2fe6ea07a32.mockapi.io/people/project/DCOMICS`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
                },
            body:JSON.stringify({superero})
            });
            console.log('apea')
            if (!Response.ok){
                console.log("Invalid api")
            }
        }
        };
    const gd = document.getElementById('buttonSave');
    gd.addEventListener('click',function guardar(){
    putData(data);
})
}

const newHero = document.getElementById('buttonADD');
newHero.addEventListener('click', function casa() {
    addCharacter();
})