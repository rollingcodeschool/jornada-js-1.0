'use strict'

import { Contacto } from "./Contacto.js";
import { agregarContactoALS } from "../helpers/helpers.js";


export const añadirContacto = (nombre,contrasenia,email) => {
const nuevoContacto = new Contacto(nombre,contrasenia,email);
agregarContactoALS(nuevoContacto);

swal.fire({
    title: 'Éxito',
    text: 'Contacto agregado exitosamente',
    icon: 'success',

});
};