const userInfo = JSON.parse(localStorage.getItem("user"));
if (!userInfo) {
  window.location.assign(window.location.origin + "/login.html");
} else if (!userInfo.admin) {
  window.location.assign(window.location.origin + "/index.html");
}

const productos = JSON.parse(localStorage.getItem("productos"));

class Producto {
  constructor(nombre, codigo, precio, descripcion, imagen) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}

productos.forEach((producto) => {
  const productRow = document.createElement("tr");
  productRow.innerHTML = `
    <th scope="row">${producto.codigo}</th>
  <td>${producto.nombre}</td>
  <td>${producto.descripcion}</td>
  <td>${producto.precio}</td>
  <td>Acciones</td>

    `;
  document.querySelector("tbody").appendChild(productRow);
});

//AGREGANDO UN PRODUCTO EN EL CRUD
const addProduct = () => {
  const name = document.getElementById("values-name-product").value;
  const description = document.getElementById(
    "values-description-product"
  ).value;
  const price = document.getElementById("values-price-product").value;

  const newProduct = new Producto(
    name,
    new Date().getTime(),
    price,
    description
  );

  productos.push(newProduct);

  localStorage.setItem("productos", JSON.stringify(productos));
};
