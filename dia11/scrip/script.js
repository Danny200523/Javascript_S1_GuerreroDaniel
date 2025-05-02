const api = 'https://68027bc10a99cb7408e9bb67.mockapi.io/users';
const lista = document.getElementById('lista');
const formulario = document.getElementById('formulario');
const form = document.getElementById('form');

window.onload = function() {
    cargarUsuarios();
    
    document.getElementById('nuevo').onclick = function() {
        form.reset();
        document.getElementById('id').value = '';
        formulario.style.display = 'block';
    };
    
    document.getElementById('cancelar').onclick = function() {
        formulario.style.display = 'none';
    };
    
    form.onsubmit = function(e) {
        e.preventDefault();
        
        let id = document.getElementById('id').value;
        let nombre = document.getElementById('nombre').value;
        let datos = { name: nombre };
        
        // Código simplificado en lugar del operador ternario
        let url = api;
        let metodo = 'POST';
        
        if (id) {
            url = api + '/' + id;
            metodo = 'PUT';
        }
        
        fetch(url, {
            method: metodo,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        })
        .then(function(res) {
            formulario.style.display = 'none';
            cargarUsuarios();
        })
        .catch(function(err) {
            alert('No se pudo guardar');
        });
    };
};

function cargarUsuarios() {
    fetch(api)
        .then(function(res) {
            return res.json();
        })
        .then(function(datos) {
            if (datos.length === 0) {
                lista.innerHTML = 'No hay usuarios registrados';
                return;
            }
            
            let tabla = '<table border="1">';
            tabla += '<tr><th>ID</th><th>Nombre</th><th>Acciones</th></tr>';
            
            for (let i = 0; i < datos.length; i++) {
                let user = datos[i];
                tabla += '<tr>';
                tabla += '<td>' + user.id + '</td>';
                tabla += '<td>' + (user.name || 'Sin nombre') + '</td>';
                tabla += '<td>';
                tabla += '<button onclick="editar(\'' + user.id + '\', \'' + user.name + '\')">Editar</button> ';
                tabla += '<button onclick="eliminar(\'' + user.id + '\')">Eliminar</button>';
                tabla += '</td>';
                tabla += '</tr>';
            }
            
            tabla += '</table>';
            lista.innerHTML = tabla;
        })
        .catch(function(err) {
            lista.innerHTML = 'Error al cargar los datos';
        });
}

function editar(id, nombre) {
    document.getElementById('id').value = id;
    document.getElementById('nombre').value = nombre;
    formulario.style.display = 'block';
}

function eliminar(id) {
    if (confirm('¿Seguro que quieres eliminar este usuario?')) {
        fetch(api + '/' + id, { 
            method: 'DELETE' 
        })
        .then(function() {
            cargarUsuarios();
        })
        .catch(function() {
            alert('Error al eliminar');
        });
    }
}