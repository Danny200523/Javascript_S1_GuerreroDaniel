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
                
                let url = id ? `${api}/${id}` : api;
                let metodo = id ? 'PUT' : 'POST';
                
                fetch(url, {
                    method: metodo,
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                })
                .then(res => {
                    formulario.style.display = 'none';
                    cargarUsuarios();
                })
                .catch(err => alert('No se pudo guardar'));
            };
        };
        
        function cargarUsuarios() {
            fetch(api)
                .then(res => res.json())
                .then(datos => {
                    if (datos.length === 0) {
                        lista.innerHTML = 'No hay usuarios registrados';
                        return;
                    }
                    
                    let tabla = '<table border="1">';
                    tabla += '<tr><th>ID</th><th>Nombre</th><th>Acciones</th></tr>';
                    
                    datos.forEach(user => {
                        tabla += `<tr>
                            <td>${user.id}</td>
                            <td>${user.name || 'Sin nombre'}</td>
                            <td>
                                <button onclick="editar('${user.id}', '${user.name}')">Editar</button>
                                <button onclick="eliminar('${user.id}')">Eliminar</button>
                            </td>
                        </tr>`;
                    });
                    
                    tabla += '</table>';
                    lista.innerHTML = tabla;
                })
                .catch(err => {
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
                fetch(`${api}/${id}`, { method: 'DELETE' })
                    .then(() => cargarUsuarios())
                    .catch(() => alert('Error al eliminar'));
            }
        }