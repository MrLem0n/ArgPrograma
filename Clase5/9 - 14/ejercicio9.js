// EJERCICIO 9

function pasajePesos()
{
    let numeroIngresadoDolares = document.getElementById('usd').value;
    let valorARS=300;
    //numeroIngresadoDolares=parseFloat(numeroIngresadoDolares);
    document.getElementById('pesos').value = valorARS * numeroIngresadoDolares;
}

