var grupoTarjetas = ["Colombia [65]", "Panama [55]", "venezuela [45]", "peru [35]", "japon [25]", "españa [15]", "mongolia [10]", "argentina [5]"];

num= 0;


function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  mesa.innerHTML = "";

  grupoTarjetas.forEach(function(elemento) {
    var tarjeta = document.createElement("div");
    
    tarjeta.innerHTML =
        "<div class='tarjeta'><img src='img/logo.jpg' width='80' height='80'/>" +
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
