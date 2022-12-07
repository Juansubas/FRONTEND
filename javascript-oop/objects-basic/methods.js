// Las propiedades representan información y los metodos acciones
function showFullName() {
  return "Juan Sebastian Paez";
}

const juan = {};
juan.showFullName = showFullName;

// Podemos meter los metodos adentro de los objetos literales

const sebas = {
  name: "Juan",
  surname: "Sebastian",
  showFullName: function () {
    return "Joe Carter";
  },
};

// En ECMASCRIPT 2015, podemos asignar los métodos más facil 

const martha = {
  name: "Martha",
  surname: "Leonor",
  showFullName() {
    return "Ryan Ray";
  },
};

// Modificando el objeto 
martha.name = "Marthica"
martha.showFullName = function () {
  return this.name + " " + this.surname;
}