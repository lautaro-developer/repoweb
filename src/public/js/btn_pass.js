export const btn_pass = document.getElementById("btn-pass").addEventListener("click", () => {
  const pass1 = document.getElementById("pass");
  const pass2 = document.getElementById("pass2");
  if (pass1.type === "password" && pass2.type === "password") {
    pass1.type = "text";
    pass2.type = "text";
  } else {
    pass1.type = "password";
    pass2.type = "password";
  }

  let btn_pass = document.getElementById("btn-pass");
  if (btn_pass.innerHTML == "Ver contraseña") {
    btn_pass.innerHTML = "Ocultar contraseña";
  } else {
    btn_pass.innerHTML = "Ver contraseña";
  }
});
