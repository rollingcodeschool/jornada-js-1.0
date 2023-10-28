const adminLogueado = JSON.parse(localStorage.getItem('adminLogueado')) || false;
const usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')) || false;

const header = document.querySelector("header");

const navbar = () => {
  const user = JSON.parse(localStorage.getItem("userLog")) || undefined;
  return (header.innerHTML = `
  <nav class="navbar navbar-total navbar-expand-lg bg-body-dark navbar-dark">
  <div class="container-fluid">
    <img src="../assets/RC - Studio - 2.png" class="logo-navbar"/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                ${adminLogueado || usuarioLogueado
      ? `
                    <li class="nav-item">
                      ${user}
                    </li>`
      : `
                    <li class="nav-item">
                      <button class="btn btn-primary w-md-100 mb-md-3" href="../pages/login.html">Iniciar Sesión</button>
                    </li>
                `
    }
                ${adminLogueado || usuarioLogueado
      ? ""
      : `
                  <li class="nav-item">
                    <button class="btn btn-danger ms-lg-3 w-md-100" href="../pages/register.html">Regístrate</button>
                  </li>
                `
    }
                ${adminLogueado
      ? `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../pages/administrador.html">Panel de Admin.</a>
                    </li>
                    `
      : ""
    }
                ${usuarioLogueado
      ? `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../index.html"></a>
                    </li>
                    `
      : ""
    }
                ${adminLogueado || usuarioLogueado
      ? `
                    <li class="nav-item">
                      <button class="btn text-white justify-content-md-end" id='closeSession' onclick='localStorage.clear(), window.location.reload()'>Cerrar Sesión</button>
                    </li>
                    `
      : ""
    }
     </ul>
        
    </div>
  </div>
</nav>
`);
};

export default navbar;
