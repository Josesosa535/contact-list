let listaContactos = [];
listaContactos = [
  {
    id: 1,
    nombre: "Yessica",
    apellido: "Sotomayor",
    telefono: 3023423212,
    ubicaciones: {
      ciudad: "Cali",
      direccion: "av 5 oeste #19a-36 apto 201",
    },
  },
  {
    id: 2,
    nombre: "Jose",
    apellido: "Sosa",
    telefono: 3023630601,
    ubicaciones: {
      ciudad: "Barrancabermeja",
      direccion: "diag 48 #25-92",
    },
  },
  {
    id: 3,
    nombre: "Martin",
    apellido: "Morales",
    telefono: 3125659966,
    ubicaciones: {
      ciudad: "Bucaramanga",
      direccion: "cra 36 #23-41",
    },
  },
];
function agregarContacto(nombre, apellido, telefono, ciudad, direccion) {
  var contacto = {
    id: listaContactos[listaContactos.length - 1].id + 1,
    nombre: nombre,
    telefono: telefono,
    apellido: apellido,
    ubicaciones: {
      ciudad: ciudad,
      direccion: direccion,
    },
  };
  listaContactos.push(contacto);
}

agregarContacto("Said", "Sosa", "3024440601", "Yondo", "cra 7 #3-4");
agregarContacto("Astrid", "Sosa", "3025550602", "Bogota", "cra 103 #72-70");

const eliminarContacto = (nombre) => {
  for (let contactos of listaContactos) {
    if (contactos.nombre == nombre) {
      listaContactos.splice(contactos.id - 1, 1);
    }
  }
};

eliminarContacto("Said Sosa");

function actualizarContacto(nombre, apellido, telefono, ciudad, direccion) {
  let contacto = listaContactos.find((contacto) => contacto.nombre === nombre);
  contacto.apellido = apellido;
  contacto.telefono = telefono;
  contacto.ubicaciones.ciudad = ciudad;
  contacto.ubicaciones.direccion = direccion;
}
actualizarContacto("Jose", "Petro", 1111111111, "medellin", "poblado");
actualizarContacto("Said", "Morales", 222222222, "Cali", "calle 80");

function mostrarContactos() {
  for (let i = 0; i < listaContactos.length; i++) {
    let contacto = listaContactos[i];
    console.log("id: " + contacto.id);
    console.log("Nombre: " + contacto.nombre);
    console.log("Apellido: " + contacto.apellido);
    console.log("Telefono: " + contacto.telefono);
    console.log("Ciudad: " + contacto.ubicaciones.ciudad);
    console.log("Direccion: " + contacto.ubicaciones.direccion);
    console.log("------------");
  }
}
mostrarContactos();
