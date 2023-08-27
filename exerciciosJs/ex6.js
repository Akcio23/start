function inverso(valor){
const tipo = typeof valor

if(tipo==`boolean`) return !valor
else if(tipo=="number") return -valor
else return`Booleano ou numero esperado, mas o parametro e do tipo ${tipo}`

}

console.log(inverso(-200))