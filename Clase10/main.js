// $(function(){
//     $("#boton").click(function(){
//         $(".mono").hide();
    
//     })
//     $("#boton2").click(function(){
//         $(".mono").css({"color" : "red"});
    
//     })
     
    
// });
// Ejercicio 1
// Generar un array de 10 números aleatorios entre 1 y 100
const numbers = [];
for (let i = 0; i < 10; i++) {
  numbers.push(Math.floor(Math.random() * 100) + 1);
}

// Ordenar el array de números
numbers.sort(function(a, b) {
  return a - b;
});

// Obtener la lista HTML y crear los elementos de lista
const list = document.createElement('ul');
for (let i = 0; i < numbers.length; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = numbers[i];
  list.appendChild(listItem);
}

// Agregar la lista al documento HTML
document.body.appendChild(list);

//Ejercicio 2

//declaro el array
const array = [1, 2, 3, 4, 5, 6];

//a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla:


let i = 0;

while (i < array.length) {
  console.log(array[i]);
  i++;
}

//b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla:



for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla:

array.forEach((element) => {
    console.log(element);
  });

//d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno:


const newArray = array.map((element) => element + 1);

console.log(newArray);

//e.Generar una copia de un array pero con todos los elementos incrementados en 1:

const newArray2 = [...array].map((element) => element + 1);

console.log(newArray2);

//f. Calcular el promedio:

const sum = array.reduce((acc, cur) => acc + cur, 0);
const average = sum / array.length;

console.log(average);

//3


const squaredNumbers = array.map((number) => number ** 2);

console.log(squaredNumbers);

//4

const numeritos = [1, -4, 12, 0, -3, 29, -150];
const suma = numeritos.reduce((acc, cur) => {
  if (cur > 0) {
    return acc + cur;
  }
  return acc;
}, 0);

console.log(suma);

//5
//a
const nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
let resultletras = nombres.filter((name) => name.length >= 6);

console.log(resultletras);

//b 
let nombresConM = nombres.filter((name) => name.startsWith("M"));

console.log(nombresConM);
//c
nombres.sort();
console.log(nombres);
//d
let iniciales = nombres.map((name) => name.charAt(0));

console.log(iniciales);

//e
let nombresMayusc = nombres.map((name) => name.toUpperCase());

console.log(nombresMayusc);
//f
let comienzaConJ = false;

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i].startsWith("J")) {
    comienzaConJ = true;
    break;
  }
}

if (comienzaConJ) {
  console.log("Al menos uno de los nombres comienza con J");
} else {
  console.log("Ninguno de los nombres comienza con J");
}

//6
let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

let colorUsuario = prompt("Ingresa un color:");

if (colores.includes(colorUsuario)) {
  console.log(`El color ${colorUsuario} está en el array.`);
} else {
  console.log(`El color ${colorUsuario} no está en el array.`);
}

//7
function numerosPares(arreglo) {
    let resultado = [];

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
        resultado.push(arreglo[i]);}
    }

    return resultado;
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = numerosPares(numeros);
console.log(pares);

//8

function palabrasVocales(arreglo) {
    let resultado = [];
  
    for (let i = 0; i < arreglo.length; i++) {
      let primeraLetra = arreglo[i][0].toLowerCase();
  
      if (primeraLetra === "a" || primeraLetra === "e" || primeraLetra === "i" || primeraLetra === "o" || primeraLetra === "u") {
        resultado.push(arreglo[i]);
      }
    }
  
    return resultado;
  }

//9
Array.prototype.intercambiar = function(indice1, indice2) {
    let elemento1 = this[indice1];
    let elemento2 = this[indice2];
  
    this.splice(indice1, 1, elemento2);
    this.splice(indice2, 1, elemento1);
  
    return this;
  };

//10
$(document).ready(function(){
  $("#primer-párrafo").click(function(){
     alert("Haz hecho click en el primer párrafo");
  });


  //11
$("tr").mousedown(function() {
  $(this).css("background-color", "#f00");
});

$("tr").mouseup(function() {
  $(this).css("background-color", "");
});
//12
$("li").click(function() {
  $(this).hide();
});
//14
$("#boton1").click(function(){
  $(".noticia1").css("font-size","24px");
});
$("#boton2").click(function(){
  $(".noticia2").css("font-size", "24px");
});
$("#boton3").click(function(){
  $(".noticia3").css("font-size", "24px");
});

$("#btn-cambiar").click(function(){
  $("table:eq(0) td").text("-");
});

// Seleccionar el enlace por su ID
var link = $('#myLink');
  
// Agregar un evento 'click' al primer botón para cambiar el enlace y su texto
$('#btn1').click(function() {
  link.attr('href', 'https://www.ejemplo1.com');
  link.text('Ejemplo 1');
});

// Agregar un evento 'click' al segundo botón para cambiar el enlace y su texto
$('#btn2').click(function() {
  link.attr('href', 'https://www.ejemplo2.com');
  link.text('Ejemplo 2');
});

// Agregar un evento 'click' al tercer botón para cambiar el enlace y su texto
$('#btn3').click(function() {
  link.attr('href', 'https://www.ejemplo3.com');
  link.text('Ejemplo 3');
});

//17
$('strong').click(function() {
  $(this).hide();
});

//18 y 19
$('td').hover(function() {
  $(this).css('background-color', 'yellow');
}, function() {
  $(this).css('background-color', '');
});

//20
var isBig = true;

			$("#myDiv").dblclick(function() {
				if (isBig) {
					$(this).css({
						"width": "250px",
						"height": "250px",
						"top": "50%",
						"left": "50%",
						"transform": "translate(-50%, -50%)"
					});
					isBig = false;
				} else {
					$(this).css({
						"width": "800px",
						"height": "70px",
						"top": "50%",
						"left": "50%",
						"transform": "translate(-50%, -50%)"
					});
					isBig = true;
				}
			});

//21
// Ocultar el nuevo contenido al principio
$("#new-content").hide();

// Agregar un evento de doble clic al contenedor
$("#container").dblclick(function() {
  // Ocultar lentamente el contenedor actual
  $(this).fadeOut("slow", function() {
    // Mostrar lentamente el nuevo contenido una vez que se haya ocultado completamente el contenedor actual
    $("#new-content").fadeIn("slow");
  });
});

//22
$('#mySelect').change(function() {
  var selectedValue = $(this).val();
  console.log(selectedValue);
});


//23
$('.external-link').click(function(event) {
  event.preventDefault(); // Evita que el link se abra en una nueva página
  console.log($(this).attr('href')); // Muestra el valor del atributo href del link en la consola
});

//24
$("#my-form").submit(function(event) {
  // Prevenir que se envíe el formulario
  event.preventDefault();
  
  // Mostrar el mensaje de respuesta
  $("#response").text("El formulario fue enviado.");
});

});
