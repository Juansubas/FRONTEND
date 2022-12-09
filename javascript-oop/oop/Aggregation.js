// Los objetos se encuentran haciendo parte de un objeto mayor pasando a ser sus componentes.

const company = {
  name: "Juan Tech",
  employees: []
}

class Person {
  constructor(name, lastname) {
    this.name = name
    this.lastname = lastname
  }
}

const john = new Person('john', 'ray')
const maria = new Person('maria', 'perez')

company.employees.push(john)
company.employees.push(maria)

console.log(maria);
console.log(john);

console.log(company);