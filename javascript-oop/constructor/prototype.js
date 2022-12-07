// Constructor que acepta parámetros
function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.address = "";
  this.email = "";
}


//Ahora mediante este protótipo agregamos a Person el siguiente método
// Pero este funcionará como otro constructor
// de tal manera que los objetos ya creados cuando llamen dicha propiedad
// la crearán automáticamente.
Person.prototype.displayFullName = function () {
  return this.name + " " + this.surname;
};

const jamesWilson = new Person("James", "Wilson");
const gregoryHouse = new Person("Gregory", "House");

jamesWilson.displayFullName();
gregoryHouse.displayFullName();

Person.prototype; //?