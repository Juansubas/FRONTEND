function countItems(x) {
  return x.toString().length
}

console.log(countItems(1000));
console.log(countItems("Hola Mundo "));

//En este caso al poder dejar valores asignados por defecto podemos 
//realizar la sobrecarga pues ya tiene varias opciones
function sum(x = 0, y = 0, z = 0) {
  return x + y + z
}

console.log(sum(10, 20));

// Ahora Polimorfismo Parámetrico
// Recibe Cualquier dato

function Stack() {
  this.items = []

  this.push = (item) => {
    this.items.push(item)
  }
}

const stack = new Stack()
stack.push('asasasdad')

const stack2 = new Stack()
stack2.push(1000)

console.log(stack);
console.log(stack2);

// Subtype Polymorphism

//Permite a los objetos con diferentes tipos pero que vienen heredados de una interface u otra clase.

class Person {
  constructor(name, lastname) {
    this.name = name
    this.lastname = this.lastname
  }
}

class Programmer extends Person {
  constructor(language, name, lastname) {
    super(name, lastname)
    this.language = language
  }
}

const john = new Person('John', 'Ray')
const ryan = new Programmer('Javascript', 'ryan', 'Ray')

// Acá podemos ver como se manejan ambos objetos de diferentes clases
function writeFullName(p) {
  console.log(p.name + " " + p.lastname)
}

writeFullName(john)
writeFullName(ryan)