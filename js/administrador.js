const container = document.querySelector(".container-administrador"); 
function TitlePpal (text) {
    const title = document.createElement("h3"); 
    title.innerText = `Administador de ${text}`; 
    title.classList = "text-center"
    return title; 
}

container.appendChild(TitlePpal("Usuarios")) ; 