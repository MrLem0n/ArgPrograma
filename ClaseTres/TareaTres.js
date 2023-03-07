//ejrcico 1
let mensaje = prompt("ingrese un dato");

 function Datos(mensaje) {

     console.log(typeof(mensaje));
 };

Datos(mensaje);

//ejercicio 2

// let numero1= Number(prompt("ingrese un numero"));

// let numero2= Number(prompt("ingrese un numero"));

// function OperacionMat(numero1, numero2) {

//     var resultado = (numero1 - numero2);

//     console.log(resultado);
    
// };

// OperacionMat(numero1, numero2);

// function Operacion() {

//     let numero=Number(prompt("ingrese un numero"));

//     let numeros=Number(prompt("ingrese otro numero"));
//     var resultado = (numero - numeros);

//     console.log(resultado);
    
// };

// Operacion();

//ejercicio 3
// let a = prompt("ingrese un dato");

// let b = prompt("ingrese otro dato");

// function Intercambio(a,b) {
    
//     let aux; 
//     aux=a;
//     a=b;
//     b=aux; 
     

//      console.log(a,b);
// };

// Intercambio(a,b);

//ejercicio 4

// let ladoCuadrado = Number(prompt("Ingrese la longitud de un lado del cuadrado"));

// function Perimetro (ladoCuadrado) {

//     let perimetro = (ladoCuadrado*4);
//     console.log(perimetro);
// };

// Perimetro(ladoCuadrado);

// function Superficie(ladoCuadrado) {

//     let superficie = (ladoCuadrado*ladoCuadrado);
//     console.log(superficie)
    
// };

// Superficie(ladoCuadrado);

//ejercicio 5

// let temperatura = Number(prompt('ingrese la temperatura en grados farenheit'))

// function Celsius(temperatura) {

//     let tempCelsius = Number((temperatura - 32) * 5/9)

//     console.log(tempCelsius);
    
// };

// Celsius(temperatura);

//ejercicio 6

// let numero;
// let factorial;
// let maximo=10;

// function ingresarNumMax(maximo)
// {
//     let numero;
//     let bandera=0;
//     while(bandera===0)
//     {
//         numero=Number(prompt("Ingresar numero menor a ",maximo,numero));
//         if(numero<=maximo)
//         {
//             bandera=1;
//         }
//         else
//         {
//             alert("ERROR, Recuerde que el maximo es "+ maximo);
//         }
//     }  
//     return numero;  
// }

// numero=ingresarNumMax(maximo);

// function calcularFactorial(numero)
// {
//     let auxiliar=numero;
//     let resultado;
//     let bandera=0;

//     while(auxiliar>1)
//     {
//     auxiliar= auxiliar - 1;
//     if(bandera==0)
//     {
//         resultado=numero*auxiliar;
//         bandera=1;
//     }
//     else
//     {
//         resultado=resultado*auxiliar;
//     }  

//     }
//     return resultado;
// }

// console.log(factorial=calcularFactorial(numero));

//ejercicio 7
//  let texto = prompt("Ingrese un texto");

//  function palindromo(texto) {
    
//     var resultado = texto

//     var  cadenaOriginal= texto.toLowerCase();

//     var letrasEspacios = cadenaOriginal.split("");
//     var cadenaSinEspacios = "";
    
//     for(i in letrasEspacios) {
//       if(letrasEspacios[i] != " ") {
//         cadenaSinEspacios += letrasEspacios[i];
//       }
//     }
  
//     var letras = cadenaSinEspacios.split("");
//     var letrasReves = cadenaSinEspacios.split("").reverse();
  
   
//     var iguales = true;
//     for(i in letras) {
//       if(letras[i] !== letrasReves[i]) {
        
//         iguales = false;

//       }
     
//     }
  
//     if(iguales) {
//       alert(resultado += " es un palíndromo");
//     }
//     else {
//       alert(resultado += " no es un palíndromo");
//     }
  
//     return resultado;
//   }
//   palindromo(texto);
  
 
 

//ej 8

// let minusc = texto.toLowerCase();

// let mayusc = texto.toUpperCase();

// console.log('texto en minuscula:'+minusc);

// console.log('texto en mayusculas:'+mayusc);


//ej 9

// let nota = Number(prompt('ingrese la calificacion del alumno'));

// if (nota < 3) {
    
    
//     console.log('Muy deficiente');

// } else { 
//     if (nota >= 3 && nota <=4) {
    
    
//         console.log('Insuficiente');

// } else {
//     if (nota === 5 || nota ===6) {
    
//             console.log('Suficiente');
            

        
//     } else {
//     if (nota === 7) {
    
//         console.log('Bien');

//     } else {
//         if (nota === 8) {

//             console.log('Notable');


//         } else {
//             if (nota >= 9 && nota <=10) {


//                 console.log('Sobresaliente');
//             } else{

//                 alert("ingrese un dato valido");
//             }
            
//         }
        
//     }
        
//     }
    
// }
    
// };

// 10)
//EJERCICIO 10
/*
let mes;
mes= prompt("Ingrese mes para saber cuanto dias tiene.",mes );

function calcularDiasMes(mes)
{
    mesIngresado=mes.toLowerCase();
    if(mesIngresado=== "febrero")
    {
        alert("El mes tiene 28 dias");
    }
    else
    {
        if(mesIngresado==="abril"  mesIngresado==="junio"  mesIngresado==="septiembre"  mesIngresado==="noviembre")
        {
            alert("El mes tiene 30 dias")
        }
        else
        {
            if(mesIngresado==="enero"  mesIngresado==="marzo"  mesIngresado==="mayo"  mesIngresado==="julio"  
            mesIngresado==="agosto"  mesIngresado==="octubre" || mesIngresado==="diciembre")
            {
                alert("El mes tiene 31 dias");
            }
            else
            {
                alert("ERROR, Ingrese mes valido");
            }
        }
    }
}
calcularDiasMes(mes);*/

//11)

//EJERCICIO 11
// let numero;
// let maximo=10;

// function ingresarNumMax(maximo)
// {
//     let numero;
//     let bandera=0;
//     while(bandera===0)
//     {
//         numero=Number(prompt("Ingresar numero menor a ",maximo,numero));
//         if(numero<=maximo)
//         {
//             bandera=1;
//         }
//         else
//         {
//             alert("ERROR, Recuerde que el maximo es "+ maximo);
//         }
//     }  
//     return numero;  
// }

// numero=ingresarNumMax(maximo);
// let arrayNumero=[];


// function crearArray(numero){    let arrayAuxliar=[];
    

//    for(i=1; i<=numero ; i++)
//    {
//        arrayAuxliar[i]=i;
//        let arrayStr= arrayAuxliar.toString();
       
//        console.log(arrayStr);
       
//    }
//    return arrayAuxliar};
   
//    arrayNumero= crearArray(numero);

//    function crearArray(numero)
//    {
//        let arrayAuxliar=[];
//        let i;
   
//        for(i=0;i<=numero;i++)
//        {
//            arrayAuxliar[i]=i;
//        }
//        return arrayAuxliar;
//    }
//    arrayNumero= crearArray(numero)
   
//    for(i=1; i<=numero; i++)
//    {
//        for(j=1; j<=i; j++)
//        {
//           document.write(arrayNumero[j]);
//        }
//        document.write("<br>");
//        arrayNumero[i+1];
//    }

//function mostrarArray(numero , arrayNumero)
//{
    // for(i=1;i<=numero;i++)
    // {
        
    //     for(j=1;j<=numero;j++)
    //     {
    //         console.log(arrayNumero[i]);
    //     }
    // }
//}

//12) Generar una función donde ingresen dos números, el primero corresponde a la
// cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
// colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
// disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consol

// let stock = Number(prompt("ingrese numero de stock"));

// let cajas = Number( prompt("Ingrese el numero de bultos que podrian entrar en una caja"));

// let cajaLlena;

// function calcularCajas (stock,cajas) {

//    let cajasLlenas = stock/cajas;

//    console.log('Cantidad de cajas llenas: '+parseInt(cajasLlenas));

// };

// calcularCajas(stock,cajas);


// function bultosSobrantes (stock,cajas) {

//     let bultosSincaja = stock%cajas;
 
//     console.log('Cantidad de cajas llenas: '+bultosSincaja);
 
//  };

// bultosSobrantes(stock,cajas);

//13)

// let codigo = prompt( 'ingrese el codigo del articulo deseado (0-5 = Fiesta, 6-10 = Focus');

// function descuento(codigo) {
//     if (codigo >= 0 && codigo <= 5) {

//         console.log("el descuento aplicable es del 5%")
        
//     } else {
    
//         if (codigo>=6 && codigo >=10) {
    
//             console.log("el descuento aplicable es del 10%")
            
//         } else {
    
//             alert('El codigo ingresado no es valido')
//         }
        
//     };
// };

// descuento(codigo);
