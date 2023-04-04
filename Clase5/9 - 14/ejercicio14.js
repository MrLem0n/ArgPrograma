const nombreInput = document.getElementById("nombreInput");
const agregarBtn = document.getElementById("agregarBtn");
const nombresLista = document.getElementById("nombresLista");
const nombres = [];

agregarBtn.addEventListener("click", () => {
  const nombre = nombreInput.value.trim();
  if (nombre !== "") {
    nombres.push(nombre);
    nombresLista.innerHTML = "";
    nombres.forEach(nombre => {
      const li = document.createElement("li");
      li.textContent = nombre;
      nombresLista.appendChild(li);
    });
    nombreInput.value = "";
  }
});
