const validarCampo = (exprecion, input, campo) => {
  if (exprecion.test(input.value)) {
    document.querySelector(`#${campo}`).classList.add("input-correcto");
    document.querySelector(`#${campo}`).classList.remove("input-incorrecto");
    campos[campo] = true
  } else {
    document.querySelector(`#${campo}`).classList.add("input-incorrecto");
    document.querySelector(`#${campo}`).classList.remove("input-correcto");
    campos[campo] = false
  }
};

const validarPass = () => {
  const pass1 = document.getElementById("pass");
  const pass2 = document.getElementById("pass2");

  if (pass1.value !== pass2.value) {
    document.querySelector(`#pass2`).classList.add("input-incorrecto");
    document.querySelector(`#pass2`).classList.remove("input-correcto");
  } else {
    document.querySelector(`#pass2`).classList.add("input-correcto");
    document.querySelector(`#pass2`).classList.remove("input-incorrecto");
  }
};
