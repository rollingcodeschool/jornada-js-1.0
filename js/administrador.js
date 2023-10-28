import {TitlePpal , bodyUser, bodyEvent , createTable, loadEvents, loadUser} from '../helpers/administradorHelpers.js'; 
const location = window.location.pathname; 

if(location.includes("administrador.html")){
    const containerEvent = document.querySelector(".container-administrador"); 
    containerEvent.appendChild(TitlePpal("Eventos")); 
    containerEvent.appendChild(createTable(bodyEvent, "TbodyEvents")); 

    const tbody = document.getElementById("TbodyEvents"); 
    loadEvents(tbody); 
}else {
    const containerUser = document.querySelector(".container-administrador-user");
    containerUser.appendChild(TitlePpal("Usuarios")); 
    containerUser.appendChild(createTable(bodyUser, "TbodyUser")); 
    const tbody = document.getElementById("TbodyUser"); 
    loadUser(tbody);     
}