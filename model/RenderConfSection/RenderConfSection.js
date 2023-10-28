class RenderConfSection {
  constructor (imagen, orador, titulo, hora, descripción) {
    this.img = imagen;
    this.orador = orador;
    this.titulo = titulo;
    this.hora = hora;
    this.descripción = descripción;
  }
  render (cont) { 
    let confSectionContainer = document.createElement('div');
    confSectionContainer.className = 'cardConfContainer';
    confSectionContainer.innerHTML = `
    <div class="imgOrador">
      <img src=${this.img} alt=imagen de ${this.orador}>
      <h2>${this.orador}</h2>
    </div>
    <div class="confInfo">
      <p>${this.descripción}</p>
      <span>${this.hora}</span>
    </div>
    `
    cont.appendChild(confSectionContainer)
  }
}