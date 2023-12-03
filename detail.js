const id = window.location.hash.slice(1);

const productos = JSON.parse(localStorage.getItem("productos"));

const producto = productos.find((producto) => producto.codigo == id);

const productDetail = document.createElement("div");

productDetail.codigo = producto.codigo;

productDetail.classList.add("row");

productDetail.innerHTML = `
<div class="col">
<img
  src="${producto.imagen}"
  alt="${producto.nombre}"
  class="img-detalle"
/>
</div>
<div class="col">
<div class="row">
  <div class="col"><h1>${producto.nombre}</h1></div>
</div>
<div class="row">
  <div class="col">${producto.descripcion}</div>
  <div class="col">${producto.precio}</div>
</div>
</div>
`;

const productoContenedor = document.querySelector("#producto-container");

productoContenedor.appendChild(productDetail);
