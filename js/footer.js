const footer = document.querySelector("footer");

const myFooter = () => {
  const user = JSON.parse(localStorage.getItem("userLog")) || undefined;
  return (footer.innerHTML = `<section class="container-fluid p-3 mt-5 footer ">
  <article class="row justify-content-between" id="cuerpoFooter">
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5">Rolling Conf</p>
      <ul>
        <li>General Paz </li>
        <li>Teléfono: + 38 1</li>
        <li>Email:</li>
      </ul>
    </aside>
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5">Navegación</p>
      <ul>
        <li><a href="#">Quienes Somos</a></li>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Contactanos</a></li>
        <li><a href="#">Nuestra Historia</a></li>
      </ul>
    </aside>
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5">Legal</p>
      <ul>
        <li><a href="#">Términos y condiciones</a></li>
        <li><a href="#">Política de privacidad</a></li>
        
      </ul>
    </aside>
    <aside class="col-xl-3 col-sm-3 col-md-3">
      <p class="h5">Redes Sociales</p>
      <ul>
        <li>
        <a href="./error404.html" class="img-redessociales"><img src="./img/Redes-sociales/facebook.png" alt="Logo3" width="80" height="80" class="rounded-circle" />
      </a>
        </li>
        <a href="./error404.html" class="img-redessociales"><img src="./img/Redes-sociales/youtube.png" alt="Logo3" width="80" height="80" class="rounded-circle" />
        <li>
        <a href="./error404.html" class="img-redessociales"><img src="./img/Redes-sociales/instagram.png" alt="Logo3" width="80" height="80" class="rounded-circle" />
        </li>
      </ul>
    </aside>
  </article>
  <article class="row text-white" id="copyrightFooter">
    <p class="h6 text-center">&copy; 2023 Todos los derechos reservados.</p>
  </article>
</section>`);
};

export default myFooter;
