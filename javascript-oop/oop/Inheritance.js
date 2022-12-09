//Herencia ECMASCRIPT 6
class Person {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
    this.age = null
  }
}


// El constructor es el que se llama con el super
// podemos pasarle parametros al constructor de abajo para que le pase los objetos al de arriba
class Programmer extends Person{
  constructor(language, name, lastname) {
    super(name, lastname)
    this.language = language
  }
}


const person = new Person("Maria", "Perez")

console.log(person);

const programmer = new Programmer("joe", "mcmillan", "python")

console.log(programmer);