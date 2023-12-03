class Producto {
  constructor(nombre, codigo, precio, descripcion, imagen) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}

let productos = [
  new Producto(
    "teclado",
    "t1",
    1000,
    "teclado gamer",
    "data:image/jpeg;base64,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"
  ),
  new Producto(
    "mouse",
    "m2",
    700,
    "mouse gamer",
    "data:image/jpeg;base64,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"
  ),
  new Producto(
    "monitor",
    "m3",
    5000,
    "monitor 24pg",
    "data:image/jpeg;base64,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"
  ),
  new Producto(
    "auriculares",
    "a4",
    2000,
    "auriculares beat",
    "data:image/jpeg;base64,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"
  ),
];

let carrito;
let favs;
const favsFromLS = JSON.parse(localStorage.getItem("favs"));
const carritoFromLS = JSON.parse(localStorage.getItem("carrito"));
if (favsFromLS) {
  favs = JSON.parse(localStorage.getItem("favs"));
} else {
  favs = [];
}
if (carritoFromLS) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
  carrito = [];
}

productos.forEach((producto) => {
  const nuevoProducto = document.createElement("div");
  nuevoProducto.id = producto.codigo;
  nuevoProducto.classList.add("card", "my-3");
  nuevoProducto.style.width = "300px";
  nuevoProducto.innerHTML = `

  <img src="${producto.imagen}" class="card-img-top img-fluid" alt="${producto.nombre}">
  <div class="card-body">
    <h5 class="card-title"><a href='http://127.0.0.1:5500/detalle.html#${producto.codigo}'>${producto.nombre}</a></h5>
    <p class="card-text">${producto.descripcion}</p>
    <p><strong>Precio: $${producto.precio}</strong></p>
    <button class="btn btn-primary mt-3" onclick="agregarCarrito(${producto.codigo})">Agregar al Carrito</button>
    <button class="btn btn-primary mt-3" onclick="agregarFavorito(${producto.codigo})">Favorito ❤</button>
  </div>
    `;

  const productosContenedor = document.querySelector("main");

  productosContenedor.appendChild(nuevoProducto);
});

const agregarCarrito = (domProducto) => {
  let producto = productos.find(
    (producto) => producto.codigo == domProducto.id
  );
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  const nuevoProducto = document.createElement("div");
  nuevoProducto.id = producto.codigo + "-cart";
  nuevoProducto.classList.add("card", "my-3");
  nuevoProducto.style.width = "300px";
  nuevoProducto.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p><strong>Precio: $${producto.precio}</strong></p>
        <button class="btn btn-warning" onclick="removeFav('${producto.codigo}-cart')"> ❌ </button>

      </div>
        `;

  const productosContenedor = document.querySelector("#carrito-body");

  productosContenedor.appendChild(nuevoProducto);
};

const getCarrito = () => {
  carrito.forEach((producto) => {
    const nuevoProducto = document.createElement("div");
    nuevoProducto.codigo = producto.codigo + "-cart";
    nuevoProducto.classList.add("card", "my-3");
    nuevoProducto.style.width = "300px";
    nuevoProducto.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.descripcion}</p>
        <p><strong>Precio: $${producto.precio}</strong></p>
        <button class="btn btn-warning" onclick="removeFav('${producto.codigo}-cart')"> ❌ </button>
      </div>
        `;

    const productosContenedor = document.querySelector("#carrito-body");

    productosContenedor.appendChild(nuevoProducto);
  });
};

const agregarFavorito = (domProducto) => {
  let productoAGuardar = productos.find(
    (producto) => producto.codigo == domProducto.id
  );
  favs.push(productoAGuardar);
  localStorage.setItem("favs", JSON.stringify(favs));
};

const removeFav = (codigo) => {
  let productoABorrar = productos.find(
    (producto) => producto.codigo == codigo.slice(0, 2)
  );
  carrito = carrito.filter(
    (producto) => producto.codigo != productoABorrar.codigo
  );
  localStorage.setItem("carrito", JSON.stringify(carrito));
  document.getElementById(codigo).remove();
};

getCarrito();
