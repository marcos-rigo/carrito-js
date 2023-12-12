const userInfo = JSON.parse(localStorage.getItem("user"));
if (!userInfo) {
  window.location.assign(window.location.origin + "/login.html");
} else if (!userInfo.admin) {
  window.location.assign(window.location.origin + "/index.html");
}

const productos = JSON.parse(localStorage.getItem("productos"));

productos.forEach((producto) => {
  const productRow = document.createElement("tr");
  productRow.innerHTML = `
    <th scope="row">${producto.codigo}</th>
  <td>${producto.nombre}</td>
  <td>${producto.descripcion}</td>
  <td>${producto.precio}</td>
    `;
  document.querySelector("tbody").appendChild(productRow);
});
