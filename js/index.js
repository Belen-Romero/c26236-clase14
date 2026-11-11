document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-productos-fakestore");

  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((prod) => {
        const tarjeta = document.createElement("article");
        const titulo = document.createElement("h4");
        const precio = document.createElement("p");
        const imagen = document.createElement("img");
        const boton = document.createElement("button");

        titulo.textContent = prod.title;
        precio.textContent = `$${prod.price}`;
        imagen.src = prod.image;
        boton.textContent = "Agregar al carrito";

        tarjeta.append(imagen, titulo, precio, boton);

        contenedor.appendChild(tarjeta);
      }),
    );
});
