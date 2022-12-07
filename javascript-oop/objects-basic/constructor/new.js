// Sin usar la palabra new, javascript lo unico que hace es ejecutar la función solamente y retornar lo que indique.
//Cuando asignamos this el lo relaciona con el new, el busca el nombre de la variable global o sea person para asignarle .name .lastname con valor ""
//Por lo tanto al no poner new no le indicamos a que le asignamos, por lo tanto busca el objeto superior que encuentre, en el navegador o en el pc, por lo tanto arroja undefined


//Ahora bien al usar "use strict" sucede que busca el contexto debajo de window o los globales, debido a que donde dice this.name por ejemplo lo pone undefined.name , sino pones new no cambia el undefined, sin embargo si tenemos un objeto dentro de otro objeto teóricamente no estaría el contexto global, entonces volveríamos a tener dicho problema, podemos ver que lo que hizo fue asignarle a humanidad name y lastname

function Person() {
  "use strict"
  this.name = "";
  this.lastname = "";
  this.surname = "";
  this.address = "";
}

// Sin new
// const person = Person()

const person = new Person()
console.log(person)

const humanidad = {
  Person: function() {
    'use strict'
    this.name = ""
    this.lastname = ""
  },
};

//Acá ocurre que aunque tenga use strict, al estar contenido en otro objeto, le asigna el this a el objeto que lo contiene. 

//Si no le pongo new, lo único que hace es definir th
const persona = humanidad.Person("Juan", "Sebastian");
