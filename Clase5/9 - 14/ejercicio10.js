// EJERCICIO 9

function pasajePesos()
{
    let numeroIngresadoPesos = document.getElementById('pesos').value;
    let valorARS=300;
    //numeroIngresadoDolares=parseFloat(numeroIngresadoDolares);
    document.getElementById('usd').value = numeroIngresadoPesos / valorARS;
}

