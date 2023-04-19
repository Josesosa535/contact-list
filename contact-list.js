let listaContactos = [];
listaContactos = [
  {
    id: 1,
    nombre: "Yessica Sotomayor",
    telefono: 3023423212,
  },
  {
    id: 2,
    nombre: "Jose Sosa",
    telefono: 3023630601,
  },
  {
    id: 3,
    nombre: "Martin Morales",
    telefono: 3125659966,
  },
];
function agregarContacto(nombre, telefono) {
  var contacto = {
    id: listaContactos[listaContactos.length - 1].id + 1,
    nombre: nombre,
    telefono: telefono,
  };
  listaContactos.push(contacto);
}

agregarContacto("Said Sosa", "3024440601");
agregarContacto("Astrid Sosa", "3025550602");

const eliminarContacto = (nombre) => {
  for (let contactos of listaContactos) {
    if (contactos.nombre == nombre) {
      listaContactos.splice(contactos.id - 1, 1);
    }
  }
};

eliminarContacto("Said Sosa");

function mostrarContactos() {
  for (let i = 0; i < listaContactos.length; i++) {
    let contacto = listaContactos[i];
    console.log("id: " + contacto.id);
    console.log("Nombre: " + contacto.nombre);
    console.log("Telefono: " + contacto.telefono);
    console.log("------------");
  }
}
mostrarContactos();
