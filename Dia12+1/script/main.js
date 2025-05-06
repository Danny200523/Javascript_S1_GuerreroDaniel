document.addEventListener('DOMContentLoaded',()=>{
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('newTask');

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
            else if(cap.status === "Ready"){
                capDiv.innerHTML = `<div class="capsula">
                <div class="infotext">
                    <p style="opacity: 0.5; text-decoration: line-through;" class="text_task">${cap.task}</p>
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
        document.querySelectorAll('.terminado').forEach(button=>{
            button.addEventListener('click',botoncompletado);
        })
    }

    async function botoncompletado(event){
        const id = event.target.getAttribute('data-id')
        await fetch(`https://68027bc10a99cb7408e9bb67.mockapi.io/tareas${id}`,{
            method:'PUT',
            Headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                status:'Ready'
            })
        });
        const data = await fetchData();
        displayCapsula(data);
    }

    async function botoneliminado(event){
        const id = event.target.getAttribute('data-id');
        console.log(id)
        await fetch(`https://68027bc10a99cb7408e9bb67.mockapi.io/tareas${id}`,{
        method:'DELETE'
        });
        const data = await fetchData();
        displayCapsula(data);
    }

    async function addNewTask(){
        const task = taskInput.value;
        if(task.trim()===''){
            return true;
        }
        else{
            await fetch(`https://66df3340de4426916ee3dd7e.mockapi.io/tareas/`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    task,status:'On hold'
                })

            });
            taskInput.value='';
            const data = await fetchData();
            displayCapsula(data);
        }
    }

    addTaskButton.addEventListener('click',addNewTask);
    fetchData().then(data=>{
        console.log(data);
        displayCapsula(data);
    })
})