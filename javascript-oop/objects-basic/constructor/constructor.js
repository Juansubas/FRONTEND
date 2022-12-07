// Los objetos no se pueden reutilizar, para eso usamos constructores, de otra forma debemos repetirlos

const johnSmith = {
  name: "John",
  surname: "Smith",
  address: {
    street: "13 Duncannon Street",
    city: "London",
    country: "United Kingdom",
  },
  displayFullName: function () {
    return this.name + " " + this.surname;
  },
};

const marioRossi = {
  name: "Mario",
  surname: "Rossi",
  address: {
    street: "Piazza Colonna 370",
    city: "Roma",
    country: "Italy",
  },
  displayFullName: function () {
    return this.name + " " + this.surname;
  },
};

// A partir de aquí podemos utilizar un constructor en forma de función
function Person() {
  this.name = "";
  this.surname = "";
  this.address = "";
  this.email = "";
  this.displayFullName = function () {
    return this.name + " " + this.surname;
  };
}

// Para utilizar el constructor debemos utilizar la palabra new
// esto hace funcionar esa función pero indicandole que por ejemplo
//RyanRay es un nuevo objeto el cual se le asignará los datos del constructor.
let ryanRay = new Person();
ryanRay.name = "Ryan";
ryanRay.surname = "Ray";
ryanRay.displayFullName();

let johnCarter = new Person();
johnCarter.name = "John";
johnCarter.surname = "Carter";
johnCarter.displayFullName();