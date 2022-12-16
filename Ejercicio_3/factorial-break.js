let numero = 10
let factorial = 1

while (true) {
    factorial *= numero
    numero--
    if (numero === 1) {
        break
    }
}

console.log(factorial);