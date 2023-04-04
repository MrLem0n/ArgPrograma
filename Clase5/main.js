//EJERCICIO 1
/*let arrayColores= ["Rojo", "Azul", "Verde", "Celeste" , "Amarillo" ];
for(i=0;i<arrayColores.length;i++)
{
    console.log(arrayColores[i]);
}*/

// EJERCICIO 2

/*let arrayColores= ["Rojo", "Azul", "Verde", "Celeste" , "Amarillo" ];
let variableIndiceDos = arrayColores[2];
console.log(variableIndiceDos);*/

//EJERCICIO 3

/*let arrayColores= ["Rojo", "Azul", "Verde", "Celeste" , "Amarillo" ];
console.log(arrayColores[0]);*/

//EJERCICIO 4

//Math.random() * (max - min) + min;
/*let numeroRandom=Math.random() * (99 - 1) + 1;
console.log(numeroRandom);*/

//EJERCICIO 5

/*
let numeros=[];
let contador=1;
for(i=0;i<10;i++)
{
    numeros[i]=contador;
    contador=contador+1;
    console.log(numeros[i]);
}*/

//EJERCICIO 6

/*let numerosAleatorios=[];
for(i=0;i<10;i++)
{
    numerosAleatorios[i]=Math.random() * (99 - 1) + 1;
    console.log(numerosAleatorios[i]);
}*/

//EJERCICIOS 7

/*let numerosAleatorios=[];
let copiaNumerosAleatorios=[];

for(i=0;i<10;i++)
{
    numerosAleatorios[i]=Math.random() * (99 - 1) + 1;
    console.log(numerosAleatorios[i]);
}
console.log("COPIA");
for(i=0;i<numerosAleatorios.length;i++)
{
    copiaNumerosAleatorios[i]=numerosAleatorios[i];
    console.log(copiaNumerosAleatorios[i]);
}*/

//EJERCICIOS 8
/*
let textoIngresado;
let textoAxuliar;
let bandera=0;

let arrayTextoIngresado=[];
let i=0;

do{

    textoAxuliar=prompt("Ingrese texto","Para conlcuir el ingreso, escriba 'cancelar'");
    if(textoAxuliar!="cancelar")
    {
        if(i===0)
        {
            //alert("ENTRO");
            textoIngresado= textoAxuliar;
            textoIngresado=textoIngresado + " - ";
            i=1;
        }
        else
        {
            textoIngresado= textoIngresado + textoAxuliar + " - ";
        }    
    }
    else
    {
        bandera=1;
    }

}while(bandera!=1);
document.write(textoIngresado + "<br>");

// UTILIZANDO UN ARRAY
i=0;
do{
    if(arrayTextoIngresado.length!=0)
    {
        i=i+1;
    }
    arrayTextoIngresado[i]=prompt("Ingrese texto","Para conlcuir el ingreso, escriba 'cancelar'");

}while(arrayTextoIngresado[i]!="cancelar");
//EL -1 (arrayTextoIngresado.length-1), para no mostrar el cancelar
for(i=0;i<arrayTextoIngresado.length-1;i++)
{
    document.write(arrayTextoIngresado[i] + " - ");
}

*/



