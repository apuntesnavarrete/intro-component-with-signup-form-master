let ingreso = document.getElementById("correo");

let error_name = document.getElementsByClassName("caution")[0];
let error_lastname = document.getElementsByClassName("caution")[1];
let error_email = document.getElementsByClassName("caution")[2];
let error_password = document.getElementsByClassName("caution")[3];


let input_name = document.getElementsByClassName("main_input")[0];
let input_lastName = document.getElementsByClassName("main_input")[1];
let input_email = document.getElementsByClassName("main_input")[2];
let input_password = document.getElementsByClassName("main_input")[3];



const expresiones = {
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

input_name.addEventListener("keyup", (e) => {
    let texto = e.target.value;
    console.log(texto);
    if (expresiones.correo.test(texto)) {
      console.log("nombre correcto")
      error_name.style.visibility = "hidden";
    } else {
      console.log("nombre incorrecto")
      error_name.style.visibility = "visible";

    }
  });


input_lastName.addEventListener("keyup", (e) => {
    let texto = e.target.value;
    console.log(texto);
    if (expresiones.correo.test(texto)) {
      console.log("apeido correcto")
      error_lastname.style.visibility = "hidden";
    } else {
      console.log("apedio incorrecto")
      error_lastname.style.visibility = "visible";

    }
  });


input_email.addEventListener("keyup", (e) => {
  let texto = e.target.value;
  console.log(texto);
  if (expresiones.correo.test(texto)) {
    console.log("correo correcto")
    error_email.style.visibility = "hidden";
  } else {
    console.log("correo incorrecto")
    error_email.style.visibility = "visible";

  }
});

input_password.addEventListener("keyup", (e) => {
    let texto = e.target.value;
    console.log(texto);
    if (expresiones.correo.test(texto)) {
      console.log("password correcto")
      error_password.style.visibility = "hidden";
    } else {
      console.log("password incorrecto")
      error_password.style.visibility = "visible";
    }
  });