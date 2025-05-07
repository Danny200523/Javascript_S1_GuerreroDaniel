function addCharacter() {
    const personaje = document.getElementById('form');
    personaje.innerHTML = `<h1>Gestion de Heroes</h1>
        <form>
            <div class="row mb-3">
                <div class="col-6">
                <label for="exampleInputEmail1" class="form-label">Nombre Del Personaje</label>
                <input  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="col-6">
                <label for="exampleInputEmail1" class="form-label">Nombre Del Actor</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
            </div>
            <div class="row mb-3">
                <div class="col-6">
                <label for="exampleInputEmail1" class="form-label">Edad Del Actor</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="col-6">
                <label for="exampleInputEmail1" class="form-label">Ubicacion</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
            </div>
            <div class="row mb-3">
                <div class="col-6">
                <label for="exampleInputEmail1" class="form-label">Poster</label>
                <input  type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
              <div class="col-6">
                <label for="exampleInputEmail1" class="form-label">Ubicacion</label>
                <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              </div>
            </div>
            <div class="row mb-3">
                <div class="col-12">
                <label for="exampleInputEmail1" class="form-label">Productora</label>
                <select  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <option value="1">MARVEL</option>
                    <option value="2">DC</option>
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
        this.innerHTML=``;
        ns.innerHTML = this.innerHTML+`
        <div id="form" class="container my-5 p-5">
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
        </form>
        </div>`;
    })
};
const newHero = document.getElementById('buttonADD');
newHero.addEventListener('click', function casa() {
    addCharacter();
})