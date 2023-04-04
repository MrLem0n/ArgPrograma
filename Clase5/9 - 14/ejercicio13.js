function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  let intentos=0;
  function juegoUnoCinco()
  {
    let numeroIngresado= document.getElementById('numeroIngresado').value;
    let numeroSecreto= getRandomInt(0, 5);

    if(numeroIngresado===numeroSecreto && intentos<2)
    {
        document.getElementById("resultado").value="GANASTE";
        intentos=intentos+1;
        document.getElementById("secreto").value=numeroSecreto;
    }
    else
    {
        if((numeroIngresado>5 || numeroIngresado<0 )||numeroIngresado!=numeroSecreto && intentos<2 )
        {
            document.getElementById("resultado").value="ERROR, Recuerde ingresar un numero entre 0 y 5";
            intentos=intentos+1;
            document.getElementById("secreto").value=numeroSecreto;
        }
        else
        {
            document.getElementById("resultado").value="PERDISTE";
            document.getElementById("secreto").value=numeroSecreto;
            alert("PERDISTE, Recarga e intenta nuevamente");
        }
    }
    document.getElementById("intentos").value=intentos;
  }
 






//document.getElementById("intentos")=3;
/*function juegoUnoCinco()
{
    //EL VALUE SOLO LO USO PARA OBTENER UN VALOR, NO CUANDO LO PASO
    let numeroIngresado= document.getElementById('numeroIngresado').value;
    numeroIngresado= parseInt(numeroIngresado);
    let intentos=3;
    let numeroSecreto= getRandomInt(0, 5);
    console.log("NUMERO SECRETO RANDOM",numeroSecreto);
    console.log("NUMERO INGRESADO",numeroIngresado);
    
   do{
   // document.getElementById("intentos").value=intentos;
       alert("ENTRE AL DO WHILE");
        if(numeroIngresado===numeroSecreto)
        {
            document.getElementById("resultado").value="GANASTE";
            //alert("gASNTES");
        }
        else
        {
            if(numeroIngresado>5 || numeroIngresado<0)
            {
                document.getElementById("resultado").value="ERROR, Recuerde ingresar un numero entre 0 y 5";
            }
        }
        intentos=intentos-1;
        document.getElementById("intentos").value=intentos;
    }while(intentos>0 && document.getElementById("resultado")!="GANASTE");

    if(document.getElementById("resultado").value!="GANASTE")
    {
        document.getElementById("resultado").value="PERDISTE";
    }
};*/
//http://127.0.0.1:5500/Clase5/ejercicio13.html