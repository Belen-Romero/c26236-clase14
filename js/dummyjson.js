document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-productos-dummy");
  // Categorias posibles:
  // smartphones
  // laptops
  // fragrances
  // groceries
  // home-decoration
  // furniture
  // tops
  // womens-dresses
  // womens-shoes
  // mens-shirts
  // mens-shoes
  // mens-watches
  // womens-watches
  // womens-bags
  // womens-jewellery
  // sunglasses
  // motorcycle
  //beauty

  //Si se deja vacia y se piden datos al endpoint por categoria, vemos el mensaje de error
  //capturado por el catch 😉
  let categoria = "";

  let urlCategoria = `https://dummyjson.com/products/category/${categoria}`;
  let url = "https://dummyjson.com/products";

  if (categoria) {
    const tituloCategoria = document.createElement("h3");
    tituloCategoria.textContent = `Categoria: ${categoria}`;

    contenedor.appendChild(tituloCategoria);
  }

  //Eligen si pedir todo o filtrar por categoria
  fetch(urlCategoria)
    .then((response) => {
      if (!response.ok) {
        throw new Error("No se pudieron obtener los productos");
      }
      return response.json();
    })
    .then((data) =>
      data.products.forEach((prod) => {
        const tarjeta = document.createElement("article");
        const titulo = document.createElement("h4");
        const precio = document.createElement("p");
        const imagen = document.createElement("img");
        const boton = document.createElement("button");

        titulo.textContent = prod.title;
        precio.textContent = `$${prod.price}`;
        imagen.src = prod.images[0];
        boton.textContent = "Agregar al carrito";

        tarjeta.append(imagen, titulo, precio, boton);

        contenedor.appendChild(tarjeta);
      }),
    )
    .catch((error) => {
      //Ejemplo mostrando un mensaje en caso de error
      const mensajeError = document.createElement("p");
      mensajeError.textContent = error.message;
      mensajeError.style.color = "red";
      contenedor.appendChild(mensajeError);
    });
});
