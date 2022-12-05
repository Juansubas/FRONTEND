const secret_number = 30

let name = 'my math module'

let x = 30, y = 100;

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}

function multiply(x, y) {
  return x * y
}

function divide(x, y) {
  return x / y
}

class Math {
  double(x) {
    return x * x
  }
}

// Exportar más fácil 
// export { secret_number, name, x, y, add, subtract, multiply, divide, Math};

export default {
  add,
  subtract
}