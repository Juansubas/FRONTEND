// Las comillas son opcionales en la key

const juan = {
  name: "Juan",
  surname: "Sebastian",
};

// Pero si el nombre de variable no es valido debemos ponerle comillas

const juancito = {
  "first-name": "juancho",
  "second-name": "Sebas",
};

// Objetos aninados, puedes asignar un objeto adentro de otro objeto

let martha = {
  name: "Martha",
  surname: "Ray",
  address: {
    // un objeto anidado
    street: "Lagos 3",
    city: "Cali",
    country: "Colombia",
  },
};

// para acceder a los valores se debe usar dot notation

let name = martha.name;

// También se puede usar notación de square brackets
//Esto se usa cuando el nombre no es un nombre valido de variable

let firstname = juancito["first-name"];

// Si tratamos de acceder a algo que no existe nos da undefined
let age = martha.age ; // Undefined

// Por otro lado podemos crear la propiedad al asignarla
martha.age = 30;

// Podemos iniciar con un objeto literal vacio e irlo llenarlo luego
let newUser = {};

newUser.name = "Fresa";
newUser.surname = "Salvaje";
newUser.address = {
  street: "Hotel Centro",
  city: "Zarzal",
  country: "Colombia",
};
newUser.age = 24;

// Además siendo capaz de crear propiedades, también podemos eliminarlas

delete newUser.age;