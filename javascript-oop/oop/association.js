class Person {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
  }
}

const john = new Person('john', 'ray')
const maria = new Person('maria', 'perez')

//Relation
// Maria es el padre de John
// Involucrando el objeto adentro de maria
// Sin embargo si yo elimino la relación no ocurre nada pues tienen su lógica por separado.
// Solo es una relación pero puede ser de dos formas
//Aggregation and Composition
maria.parent = john;

console.log(maria)
console.log(john)