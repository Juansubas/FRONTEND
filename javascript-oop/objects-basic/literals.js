// Object literal -> { }

console.log( {} )

// new Object is {}
console.log( new Object)

// Properties and methods objects

const person = {
  name: "Juan", // Property
  surname: "Sebastian"
}

// Methods are just properties with functions as value 

const personTwo = {
  name: "Juan",
  lastname: "Paez",
  sayHello: () => {
    return "Hello I'am Juan"
  }
}

// an object is a *list* of key value pairs

const user = {
  username: "juansubas", // key: value
  email: "juansubas@gmail.com",
  password: "password",
  age: 20,
  hobbies: ["basketball", "programming", "Swimming"]
}

console.log(user)

// and like any list it could be empty
const emptyObject = {}