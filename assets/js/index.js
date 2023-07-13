function calcular() {
    let cantidad = document.querySelector("#cantidad").value;
    let precio = 400000;
    let resultado = Number(cantidad) * Number(precio);

    document.querySelector(".precioTotal").innerHTML = "$" + resultado + ".-";
    document.querySelector(".cantidadTotal").innerHTML = cantidad;

    let color = document.querySelector("#color").value;
    let coloreado = document.querySelector("#coloreando");
    coloreado.style.backgroundColor = color;
}