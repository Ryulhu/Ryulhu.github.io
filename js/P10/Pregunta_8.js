var grupoTarjetas = ["Respuesta 1", "Respuesta 2", "Respuesta 3", "Respuesta 4", "Respuesta 5", "Respuesta 6", "Respuesta 7", "Respuesta 8"];

num= 0;


function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  mesa.innerHTML = "";

  grupoTarjetas.forEach(function(elemento) {
    var tarjeta = document.createElement("div");
    
    tarjeta.innerHTML =
        "<div class='tarjeta'><img src='../img/Logo_100.png' width='80' height='80'/>" +
        "<div class='tarjeta__contenido'>" +
        elemento +
        "</div>" +
        "</div>";
    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  this.classList.add("descubierta");
}



reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});
