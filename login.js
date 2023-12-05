class User {
  constructor(id, name, age, email, password) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
  }
}

const users = [
  new User(1, "Pedro Perez", 23, "pedroperez@gmail.com", "123456"),
  new User(2, "Manuel Fernandez", 24, "manuel@gmail.com", "1234567"),
  new User(3, "Enzo Costilla", 25, "enzocostilla@gmail.com", "12345678"),
  new User(4, "Daniel Milia", 26, "danielmilia@gmail.com", "123456789"),
  new User(5, "Matias Mata", 27, "matiasmata@gmail.com", "12345678910"),
  new User(6, "Marcos Rigo", 28, "marcosrigo@gmail.com", "1234567891011"),
];

const login = (e) => {
  e.preventDefault();

  // selecciono los inputs del formulario
  const email = document.getElementById("values-email").value;
  const password = document.getElementById("values-password").value;
  const userFound = users.find((user) => user.email == email);
  if (userFound) {
    const isOk = userFound.password == password;
    if (isOk) {
      alert("Ingresó");
    } else {
      alertMessage("Contraseña erronea", "form");
    }
  } else {
    alertMessage("Email incorrecto", "form");
  }
};

function alertMessage(message, queryContainer) {
  let alertMessage = document.createElement("div");

  alertMessage.classList.add("alert", "alert-danger", "mt-3");
  alertMessage.setAttribute("role", "alert");

  alertMessage.innerText = message;

  let container = document.querySelector(queryContainer);

  container.appendChild(alertMessage);

  setTimeout(() => {
    alertMessage.remove();
  }, 2000);
}
