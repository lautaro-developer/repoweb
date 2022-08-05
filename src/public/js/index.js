const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("#form input");

const exReg = {
  nombre: /^[a-z0-9\-\_]{4,15}$/,
  usuario: /^[a-z0-9\-\_]{6,10}$/,
  password: /^[a-z0-9\!\(\)\%\!\"\#]{6,15}$/,
  password2: /^[a-z0-9\!\(\)\%\!\"\#]{6,15}$/,
  edad: /^\d{1,3}$/,
};
const campos = {
  nombre: false,
  usuario: false,
  password: false,
  edad: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(exReg.nombre, e.target, "nombre");
      break;
    case "usuario":
      validarCampo(exReg.usuario, e.target, "usuario");
      break;
    case "pass":
      validarCampo(exReg.password, e.target, "pass");
      validarPass();
      break;
    case "pass2":
      validarPass();
      break;
    case "age":
      validarCampo(exReg.edad, e.target, "age");
      break;
  }
};

/**
 *
 * @param {Object} exprecion se le da una exprecion regular
 * @param {string} input se le da el name del input
 * @param {*} campo
 */

inputs.forEach((i) => {
  i.addEventListener("keyup", validarFormulario);
  i.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  //e.preventDefault();

  if (campos.nombre && campos.usuario && campos.password && campos.edad) {
    formulario.reset();
  }

  //mostrar los terminos

  //--------------------
});
