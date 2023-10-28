import {event, users} from '../helpers/helpDB.js'; 
const events = JSON.parse(localStorage.getItem("listEvents")) || event; 
const user = JSON.parse(localStorage.getItem("listUsers"))  || users; 
function TitlePpal (text) {
    const title = document.createElement("h3"); 
    title.innerText = `Administador de ${text}`; 
    title.classList = "text-center"
    return title; 
}
const bodyUser = ["ID", "Nombre y Apellido", "Correo", "Rol", "Operaciones"];
const bodyEvent = ["ID", "Imagen", "Titulo", "Descripción", "Hora", "Orador",  "Asistentes", "Operaciones"]; 
function createTable(titles, id){
    const container = document.createElement("article"); 
    container.classList = "row my-4 d-flex justify-content-center table-responsive mx-1"; 
    const table = document.createElement("table"); 
    table.classList = "text-center table table-hover"; 
    const thead = document.createElement("thead"); 
    for (let index = 0; index < titles.length; index++) {
        const element = titles[index];
        const th = document.createElement("th"); 
        th.scope = "col"; 
        th.innerText = element; 
        thead.appendChild(th); 
    }
    table.appendChild(thead); 
    const tbody = document.createElement("tbody"); 
    tbody.id = `${id}`; 
    table.appendChild(tbody); 
    container.appendChild(table); 
    return container;
}
function loadEvents(bodyTable){
    events?.forEach(event => {
        if(event.estado){
            let row = document.createElement('tr');

            let column = document.createElement("td");
            column.setAttribute('scope', 'row');
            column.innerText = event.id;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.imagen;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.título;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.descripción;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.hora;
            row.appendChild(column);

            column = document.createElement("td");
            column.innerText = event.orador;
            row.appendChild(column);



            column = document.createElement("td");
            column.innerText = event.asistentes.length;
            row.appendChild(column);

            column = document.createElement("td");
          
            let buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = `<i class="bi bi-trash3-fill"></i>`;
            buttonDelete.className = 'btn btn-danger mx-1';
            buttonDelete.id = 'btnEliminarUsuario';
            buttonDelete.addEventListener('click', (event) => {
           let fila = event.target.parentNode.parentNode.parentNode,
                idUsuario = fila.getElementsByTagName('td')[0].innerText;
              //eliminarUsuario(idUsuario, fila);
            });
            column.appendChild(buttonDelete);
          
            let buttonUpdate = document.createElement("button");
            buttonUpdate.innerHTML = `<i class="bi bi-pencil-square"></i>`;
            buttonUpdate.className = 'btn btn-warning ';
            buttonUpdate.id = 'btnModificarUsuario';
            buttonUpdate.addEventListener('click', (event) => {
              const fila = event.target.parentNode.parentNode.parentNode,
                idUsuario = fila.getElementsByTagName('td')[0].innerText,
                estadoUsuario = {
                  rolUsuario: fila.getElementsByTagName('td')[4].innerText,
                  estadoUsuario: fila.getElementsByTagName('td')[5].innerText
                }
             // localStorage.setItem("idUsuarioModificar", JSON.stringify(idUsuario));
              //cargarEstadoUsuario(idUsuario, estadoUsuario);
            });
            buttonUpdate.setAttribute('data-bs-toggle', 'modal');
            buttonUpdate.setAttribute('data-bs-target', '#modificarUsuarioModal');
            column.appendChild(buttonUpdate);
          
            row.appendChild(column);
            bodyTable.appendChild(row);
        }
    });
}
function loadUser(bodyTable) {
    user?.forEach(u => {
        if(u.estado){
            let row = document.createElement('tr');

            let column = document.createElement("td");
            column.setAttribute('scope', 'row');
            column.innerText = u.id;
            row.appendChild(column);
          
            column = document.createElement("td");
            column.innerText = u.nombre;
            row.appendChild(column);
          
            column = document.createElement("td");
            column.innerText = u.email;
            row.appendChild(column);
          
          
            column = document.createElement("td");
            column.innerText = u.rol;
            row.appendChild(column);
          
          
            column = document.createElement("td");
          
            let buttonDelete = document.createElement("button");
            buttonDelete.innerHTML = `<i class="bi bi-trash3-fill"></i>`;
            buttonDelete.className = 'btn btn-danger mx-1';
            buttonDelete.id = 'btnEliminarUsuario';
            buttonDelete.addEventListener('click', (event) => {
           let fila = event.target.parentNode.parentNode.parentNode,
                idUsuario = fila.getElementsByTagName('td')[0].innerText;
              //eliminarUsuario(idUsuario, fila);
            });
            column.appendChild(buttonDelete);
          
            let buttonUpdate = document.createElement("button");
            buttonUpdate.innerHTML = `<i class="bi bi-pencil-square"></i>`;
            buttonUpdate.className = 'btn btn-warning ';
            buttonUpdate.id = 'btnModificarUsuario';
            buttonUpdate.addEventListener('click', (event) => {
              const fila = event.target.parentNode.parentNode.parentNode,
                idUsuario = fila.getElementsByTagName('td')[0].innerText,
                estadoUsuario = {
                  rolUsuario: fila.getElementsByTagName('td')[4].innerText,
                  estadoUsuario: fila.getElementsByTagName('td')[5].innerText
                }
             // localStorage.setItem("idUsuarioModificar", JSON.stringify(idUsuario));
              //cargarEstadoUsuario(idUsuario, estadoUsuario);
            });
            buttonUpdate.setAttribute('data-bs-toggle', 'modal');
            buttonUpdate.setAttribute('data-bs-target', '#modificarUsuarioModal');
            column.appendChild(buttonUpdate);
          
            row.appendChild(column);
            bodyTable.appendChild(row);
        }

    });
}
export {
    TitlePpal,
    bodyUser,bodyEvent,
    createTable,
    loadEvents,
    loadUser
}