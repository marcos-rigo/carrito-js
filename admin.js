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
  <td>
  <button class="btn btn-success m-2" data-bs-toggle="modal" data-bs-target="#edit-modal" onclick = "fillFields('${producto.codigo}')">✏</button>
  <button class="btn btn-warning m-2" onclick = "deleteProduct('${producto.codigo}')">❌</button>
  </td>
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

//BORRADO DE PRODUCTOS
const deleteProduct = (codigoARemover) => {
  const productUpdated = productos.filter(
    (producto) => producto.codigo != codigoARemover
  );
  localStorage.setItem("productos", JSON.stringify(productUpdated));
  window.location.reload();
};

// EDITADO DE DATOS
const fillFields = (codigoAEditar) => {
  const producto = productos.find(
    (producto) => producto.codigo == codigoAEditar
  );

  document.getElementById("values-name-edit").value = producto.nombre;
  document.getElementById("values-description-edit").value =
    producto.descripcion;
  document.getElementById("values-price-edit").value = producto.precio;

  document
    .getElementById("edit-form")
    .setAttribute("onsubmit", `editProduct('${producto.codigo}')`);
};

const editProduct = (codigoAEditar) => {
  const name = document.getElementById("values-name-edit").value;
  const description = document.getElementById("values-description-edit").value;
  const price = document.getElementById("values-price-edit").value;

  const productosActualizados = productos.filter(
    (producto) => producto.codigo != codigoAEditar
  );
  const productoActualizado = new Producto(
    name,
    codigoAEditar,
    price,
    description
  );
  productosActualizados.push(productoActualizado);

  localStorage.setItem("productos", JSON.stringify(productosActualizados));
};
