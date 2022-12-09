// FORMA PARA ECMASCRIPT 5

function Person() {
  this.name = ''
  this.lastname = ''
}

// no es útil hacer esto teniendo ya el constructor usuario
// function Programmer() {
//   this.name = ''
//   this.lastname = ''
//   this.language = ''
// }

function Programmer() {
  this.language = ''
}



//Aquí funciona que Programmer pasa a ser parte de Person
Programmer.prototype = new Person()

console.log(Programmer)
console.log(Person);

const person = new Person()
person.name = 'ryan'
person.lastname = 'ray'

const programmer = new Programmer()
programmer.name = 'ryan'
programmer.lastname = 'ray'
programmer.language = 'javascript'

console.log(programmer)