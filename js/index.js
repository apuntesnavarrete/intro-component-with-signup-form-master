let ingreso = document.getElementById("correo");

let name_iconError = document.getElementsByClassName("input-icon")[0];
let Lastname_iconError = document.getElementsByClassName("input-icon")[1];
let email_iconError = document.getElementsByClassName("input-icon")[2];
let passsword_iconError = document.getElementsByClassName("input-icon")[3];


let error_name = document.getElementsByClassName("caution")[0];
let error_lastname = document.getElementsByClassName("caution")[1];
let error_email = document.getElementsByClassName("caution")[2];
let error_password = document.getElementsByClassName("caution")[3];


let input_name = document.getElementsByClassName("main_input")[0];
let input_lastName = document.getElementsByClassName("main_input")[1];
let input_email = document.getElementsByClassName("main_input")[2];
let input_password = document.getElementsByClassName("main_input")[3];



const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

input_name.addEventListener("keyup", (e) => {
    let texto = e.target.value;
    console.log(texto);
    if (expresiones.nombre.test(texto)) {
      console.log("nombre correcto")
      error_name.style.visibility = "hidden";
      name_iconError.style.display = "none";
      input_name.style.border = "0.5px solid var(--Grayish-Blue)"
    } else {
      console.log("nombre incorrecto")
      error_name.style.visibility = "visible";
      name_iconError.style.display = "block"
      input_name.style.border = "0.5px solid var(--Red)"

    }
  });


input_lastName.addEventListener("keyup", (e) => {
    let texto = e.target.value;
    console.log(texto);
    if (expresiones.nombre.test(texto)) {
      console.log("apeido correcto")
      error_lastname.style.visibility = "hidden";
      Lastname_iconError.style.display = "none"
      input_lastName.style.border = "0.5px solid var(--Grayish-Blue)"


    } else {
      console.log("apedio incorrecto")
      error_lastname.style.visibility = "visible";
      Lastname_iconError.style.display = "block"
      input_lastName.style.border = "0.5px solid var(--Red)"

    }
  });


input_email.addEventListener("keyup", (e) => {
  let texto = e.target.value;
  console.log(texto);
  if (expresiones.correo.test(texto)) {
    console.log("correo correcto")
    error_email.style.visibility = "hidden";
    email_iconError.style.display = "none"
    input_email.style.border = "0.5px solid var(--Grayish-Blue)"


  } else {
    console.log("correo incorrecto")
    error_email.style.visibility = "visible";
    email_iconError.style.display = "block"
    input_email.style.border = "0.5px solid var(--Red)"

  }
});

input_password.addEventListener("keyup", (e) => {
    let texto = e.target.value;
    console.log(texto);
    if (expresiones.password.test(texto)) {
      console.log("password correcto")
      error_password.style.visibility = "hidden";
      passsword_iconError.style.display = "none";
      input_password.style.border = "0.5px solid var(--Grayish-Blue)";


    } else {
      console.log("password incorrecto")
      error_password.style.visibility = "visible";
      passsword_iconError.style.display = "block";
      input_password.style.border = "0.5px solid var(--Red)";


    }
  });