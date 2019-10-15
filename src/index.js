import {isValid} from "./validator.js";

// console.log(validator);

// console.log(lunh('6011724110669057'))
const $formulario = document.getElementById("form-control");
const $tarjeta = document.getElementById("num-tarjeta");
const $respuesta = document.getElementById("respuesta");

$tarjeta.addEventListener("keyup", (e) => {
  let val = e.target.value
  // console.log(e.key)
  if (val.length === 4 || val.length === 9 || val.length === 14 || val.length === 19 ) {
    val = val + ' '
    e.target.value = val;
  }
});
// let numeros = [];
$formulario.addEventListener("submit", e => {
  e.preventDefault();
  const validTarjeta = $tarjeta.value;

  const resultadoValidacion = isValid(validTarjeta);

  let rutaImagen = '<img src="/img/like.png" alt="Valido" class ="like">';
  if (!resultadoValidacion) {
    rutaImagen = '<img src="/img/unlike.png" alt="No válido" class="unlike">';
  }

  $respuesta.innerHTML = rutaImagen;
  $formulario.reset();
}, false);

//metodo Reduce

// const letras = ['H', 'O', 'L', 'A'];
// const palabra = letras.reduce((valor_anterior_retornado, valor_actual) => {
//   return valor_anterior_retornado + valor_actual;
// });
// console.log(palabra);

// //metodo Map

// const misNumeritos = [2, 4, 8, 5];
// const cuadrados = misNumeritos.map((e) => {
//   return e + e;
// });
// console.log(cuadrados);

// operadores Ternarios

// const hija = 'Gabby Acevedo Rojas';
// const resultado = (hija === 'Gabby Acevedo Rojas') // referencia a la condicion de un if
// ? 'Hija de Armando Acevedo y Filomena Rojas' // si la condicion se cumple
// : 'No es hija de estas hermosas personas'; // else -- si la funcion no se cumple

// console.log(resultado);
