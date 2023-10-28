const charlaDatos = JSON.parse(localStorage.getItem("charlaInfo"));
// const modal = document.querySelector('.modal-dialog');
console.log(charlaDatos);

class RenderConfSection {
  constructor(id, imagen, orador, titulo, hora, descripción) {
    this.id = id;
    this.img = imagen;
    this.orador = orador;
    this.titulo = titulo;
    this.hora = hora;
    this.descripción = descripción;
  }
  render(cont) {
    let confSectionContainer = document.createElement("div");
    confSectionContainer.className = "cardConfContainer";
    confSectionContainer.innerHTML = `
    <div class="imgOradorContainer">
      <img src=${this.img} alt=imagen de ${this.orador} class="imgOrador">
      <h4>${this.orador}</h4>
    </div>
    <div class="confInfo">
      <p>${this.descripción}</p>
      <div class="spanContainer">
        <span class="spanHour">${this.hora}</span>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="renderInfoModal(${this.id})">
          Registrarme
        </button>
      </div>
    </div>
    `;
    cont.appendChild(confSectionContainer);
  }
}
const renderInfoModal = (id) => {
  const modalInfo = charlaDatos.find(charla => charla.id === id);
  console.log(modalInfo);
  const modalTitle = document.querySelector(".modal-title");
  modalTitle.innerHTML = modalInfo.título;
  const modalfooter = document.querySelector(".modal-footer");
  modalfooter.innerHTML = `
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
    <button type="button" class="btn btn-primary" onclick="console.log(${id})">Agregar</button>
  `
}

// const renderInfoModal = (id) => {
//   // console.log(typeof charlaDatos);
//   let modalDialog = document.querySelector('main');
//   const modalInfo = charlaDatos.find(charla => charla.id === id);
//   // console.log(modalInfo);
//   const contenidoModal = document.createElement("div")
//   contenidoModal.id = (`modal`);
//   contenidoModal.classList.add("modal", "fade");
//   contenidoModal.setAttribute("tabindex", "-1")
//   contenidoModal.setAttribute("aria-hidden", "true")
//   contenidoModal.innerHTML = `
//   <div class="modal-dialog">
//   <div class="modal-content">
//   <div class="modal-header">
//     <h1 class="modal-title fs-5" id="exampleModalLabel">${modalInfo.título}</h1>
//     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//   </div>
//   <div class="modal-body">
    
//   </div>
//   <div class="modal-footer">
//     <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//     <button type="button" class="btn btn-primary">Save changes</button>
//   </div>
//   </div>
//   </div>

//    `
//     modalDialog.appendChild(contenidoModal);
// }

