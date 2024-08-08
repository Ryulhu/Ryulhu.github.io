var grupoTarjetas = ["Que me roben el cel [60]", "Que se vomiten [15]", "Que choque el autobus [10]", "Un gordo sentado a mi lado [9]", "Andar con ganas de ir al baño [6]"];

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
