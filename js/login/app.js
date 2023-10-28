'use strict'

import { validarContrasenia, validarEmail } from "../register/validators.js";
import { User, UserWithoutContrasenia } from "./User.js";


const isLogged = JSON.parse(sessionStorage.getItem('isLogged'));
if (isLogged) {

window.location.href = './admin/admin.html';
}


const adminUser = new User('admin@gmail.com', '12349');


const formLogin = document.getElementById('form-login');
const emailInput = document.getElementById('email-login');
const contraseniaInput = document.getElementById('contrasenia-login');
const credentialsAlert = document.getElementById('credentials-alert');


formLogin.addEventListener('submit', (e) => {  e.preventDefault();

  const email = emailInput.value;
  const contrasenia = contraseniaInput.value;

  if (
    validarEmail(email, emailInput) &&
    validarContrasenia(contrasenia, contraseniaInput)
  ) {

    emailInput.classList.remove('is-invalid');
    contraseniaInput.classList.remove('is-invalid');

    if (email === adminUser.email && contrasenia === adminUser.contrasenia) {

      credentialsAlert.classList.add('d-none');

      const loggedUser = new UserWithoutContrasenia('admin@gmail.com');

      sessionStorage.setItem('isLogged', true);
      sessionStorage.setItem('user', JSON.stringify(loggedUser));

      swal.fire({
        title: 'BIENVENIDO',
        timer: 2000,
        imageUrl: '../assets/logos/logo-blanco.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'foto bienvenida rolling code school',
        showConfirmButton: false,
        background: '#202020',
        color: '#f9f9f9',
      })
      .then(() => {
        window.location.href = '../../pages/home.html';
    });
    } else {
      credentialsAlert.classList.remove('d-none');
    }
  }
});
