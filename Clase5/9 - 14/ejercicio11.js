function pasajeAfahrenheit()
{
    let centigrados= document.getElementById('centigrados').value;
    let fahrenheit= (centigrados*9/5) + 32;
    document.getElementById('fahrenheit').value=fahrenheit;
}