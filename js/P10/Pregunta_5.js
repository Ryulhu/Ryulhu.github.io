var grupoTarjetas = ["El Perro [35]", "El gato[25]", "Su pc/Consola [21]", "La manuela [19]"];

num= 0;

let winaudio = new Audio('../sonidos/carta.mp3');


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
  winaudio.play();
}



reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});
