document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedor = document.querySelector('.opciones');
    async function fetchData(){
        const res = await fetch('https://68027bc10a99cb7408e9bb67.mockapi.io/tareas')
        data = await res.json();
        return data;
    }
    function displayCapsula(capsula){
        datosContenedor.innerHTML=``;
        data.forEach(cap => {
            const  capDiv = document.createElement(`div`);
            if (cap.status === "On hold"){
                capDiv.innerHTML = `<div class="capsula">
                <div class="infotext">
                    <p class="text_task">${cap.task}</p>
                </div>
                <div class="botones">
                    <div class="terminado"><img class="terminado_img" src="./storage/img/like.png" data-id="${cap.id}" alt=""></div>
                    <div class="eliminado"><img class="eliminado_img" src="./storage/img/delete.png" data-id="${cap.id}" alt=""></div>
                </div>
            </div>
            <br/><br/>`;
            datosContenedor.appendChild(capDiv)
            }
        });
    }

    fetchData().then(data=>{
        displayCapsula(data);
    })
})