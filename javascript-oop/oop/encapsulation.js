// const company = {
//   name: "fazt tech",
//   employees: [],
//   sortEmployees: function () {}
// }

// se podría por ejemplo remplazar cosas o cambiar lal ógica

// company.sortEmployees = "xd"

// Ahora al llamarlo
// company.sortEmployees() no funcionaria porque ahora es un string

// Como let es de SCOPE o alcance de la función
// Nadie puede modificarla por fuera de la function
// ni tampoco consultar
// por eso creamos un método para consultarla

function Company(name) {
  let employees = []
  this.name = name

  this.getEmployees = () => employees

  this.addEmployee = (employee) => {
    employees.push(employee)
  }
}

const company = new Company("coca cola")
const company2 = new Company("pepsi")

console.log(company)
console.log(company2)

company.addEmployee({name: "ryan"})
company.addEmployee({name: "joe"})

console.log(company.getEmployees())
console.log(company2.getEmployees)