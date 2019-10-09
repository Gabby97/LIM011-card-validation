import {isValid} from "./validator.js";

// console.log(validator);

// console.log(lunh('6011724110669057'))
const $formulario = document.getElementById("formulario");
const $tarjeta = document.getElementById("num-tarjeta");
const $respuesta = document.getElementById("respuesta");

// let numeros = [];

$formulario.addEventListener("submit", e => {
  e.preventDefault();
  const validTarjeta = $tarjeta.value;

  const resultadoValidacion = isValid(validTarjeta);

  let rutaImagen = '<img src="/img/like.png" alt="like">';
  if (!resultadoValidacion) {
    rutaImagen = '<img src="/img/unlike.png" alt="unlike">';
  }

  $respuesta.innerHTML = rutaImagen //'<img src="/img/like.png" alt="like">';
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
