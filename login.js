class User {
  constructor(id, name, age, email, password, admin) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.password = password;
    this.admin = admin;
  }
}

let users;
if (localStorage.getItem("users")) {
  users = JSON.parse(localStorage.getItem("users"));
} else {
  users = [
    new User(1, "Pedro Perez", 23, "pedroperez@gmail.com", "123456", true),
    new User(2, "Manuel Fernandez", 24, "manuel@gmail.com", "1234567", true),
    new User(
      3,
      "Enzo Costilla",
      25,
      "enzocostilla@gmail.com",
      "12345678",
      true
    ),
    new User(4, "Daniel Milia", 26, "danielmilia@gmail.com", "123456789", true),
    new User(5, "Matias Mata", 27, "matiasmata@gmail.com", "12345678910", true),
    new User(
      6,
      "Marcos Rigo",
      28,
      "marcosrigo@gmail.com",
      "1234567891011",
      true
    ),
  ];
  localStorage.setItem("users", JSON.stringify(users));
}

const login = (e) => {
  e.preventDefault();

  // selecciono los inputs del formulario
  const email = document.getElementById("values-email-login").value;
  const password = document.getElementById("values-password-login").value;

  const userFound = users.find((user) => user.email == email);
  if (userFound && userFound.password == password) {
    localStorage.setItem("user", JSON.stringify(userFound));
    window.location.assign(window.location.origin + "/index.html");
  } else {
    alertMessage("Email incorrecto", "form");
  }

  //ESTA ES OTRA MANERA DE DAR ACCESO
  // if (userFound) {
  //   const isOk = userFound.password == password;
  //   if (isOk) {
  //     window.location.assign(window.location.origin + "/index.html");
  //   } else {
  //     alertMessage("Contraseña erronea", "form");
  //   }
  // } else {
  //   alertMessage("Email incorrecto", "form");
  // }
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

const register = (e) => {
  e.preventDefault();
  const name = document.getElementById("values-name").value;
  const age = document.getElementById("values-age").value;
  const email = document.getElementById("values-email").value;
  const password = document.getElementById("values-password").value;
  const password2 = document.getElementById("values-password-2").value;

  const newId = new Date().getTime();
  const newUser = new User(newId, name, age, email, password, false);

  const errors = validateFieldsRegister(
    name && age && email && password,
    password2
  );
  if (Object.keys(errors).length == 0) {
    //ACTUALIZACION EN LOCALSTORAGE
    const usersLS = JSON.parse(localStorage.getItem("users"));
    usersLS.push(newUser);
    localStorage.setItem("users", JSON.stringify(usersLS));

    window.location.assign(window.location.origin + "/index.html");
  } else {
    Object.values(errors).map((error) => {
      alertMessage("El formato es inválido", "#register-body");
    });
  }
};

const validateFieldsRegister = (name, age, email, password, password2) => {
  let errors = {};
  const nameOk = /^[a-zA-Z]*$/.test(name);
  if (!nameOk) errors.name = "El nombre ha sido escrito mal";
  const ageOk = /^\d+$/.test(age);
  if (!ageOk) errors.age = "La edad ha sido escrita mal";
  const emailOk =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    );
  if (!emailOk) errors.email = "El email ha sido escrito mal";
  const passOk =
    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password) &&
    password == password2;
  if (!passOk) errors.password = "La contraseña ha sido escrita mal";
  return errors;
};

// EXPRESION REGULAR PARA CONTRASEÑA
// ^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$
// La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
// NO puede tener otros símbolos.
// Ejemplo:
// w3Unpocodet0d0

// EXPRESION REGULAR PARA EMAIL
// ^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$
// Ejemplo:
// foo-bar.baz@example.com

// EXPRESION REGULAR PARA TEXTO
// ^[a-zA-Z]*$
