

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
      <li class="nav-item">
                 <a class="nav-link active text-white" aria-current="page" href="../index.html">Inicio</a>
              </li>
                ${
                  user
                    ? `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../index.html">${user.userName}</a>
                    </li>`
                    : `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../pages/login.html">Iniciar Sesión</a>
                    </li>
                `
                }
                ${
                  user
                    ? ""
                    : `
                  <li class="nav-item">
                    <a class="nav-link text-white" href="../pages/register.html">Regístrate</a>
                  </li>
                `
                }
                ${
                  user?.role === "Admin"
                    ? `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../pages/administrador.html">Panel de Admin.</a>
                    </li>
                    `
                    : ""
                }
                ${
                  user?.role === "User"
                    ? `
                    <li class="nav-item">
                      <a class="nav-link text-white" href="../index.html"></a>
                    </li>
                    `
                    : ""
                }
                ${
                  user
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
//   return (header.innerHTML = `
//   <nav class="navbar navbar-total navbar-expand-lg navbar-dark fixed-top fw-bold p-3">
//   <div class="section-main">
//         <div class="container-fluid d-flex justify-content-sta align-items-center">
      
//         </div>
//       </div>
//     <div class="container-fluid">
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <label for="menu">
//         <img src="../assets/RC - Studio - 2.png" alt="menu" class="logo-navbar">
//       <label/>
//       <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
//         <ul class="navbar-nav">
//           <li class="nav-item">
//             <a class="nav-link active text-white" aria-current="page" href="">Inicio</a>
//           </li>
//           ${
//             user
//               ? `
//               <li class="nav-item">
//                 <a class="nav-link text-white" href="">${user.userName}</a>
//               </li>`
//               : `
//               <li class="nav-item">
//                 <a class="nav-link text-white" href="">Login</a>
//               </li>
//           `
//           }
//           ${
//             user
//               ? ""
//               : `
//             <li class="nav-item">
//               <a class="nav-link text-white" href="../pages/register.html">Register</a>
//             </li>
//           `
//           }
//           ${
//             user?.role === "ADMIN"
//               ? `
//               <li class="nav-item">
//                 <a class="nav-link text-white" href="../pages/administrador.html">Panel de Admin.</a>
//               </li>
//               `
//               : ""
//           }
//           ${
//             user?.role === "USER"
//               ? `
//               <li class="nav-item">
//                 <a class="nav-link text-white" href="../index.html"></a>
//               </li>
//               `
//               : ""
//           }
//           ${
//             user
//               ? `
//               <li class="nav-item">
//                 <button class="btn text-white justify-content-md-end" id='closeSession' onclick='localStorage.clear(), window.location.reload()'>CERRAR SESION</button>
//               </li>
//               `
//               : ""
//           }
//         </ul>
//       </div>
//     </div>
//   </nav>`);
// };

export default navbar;
