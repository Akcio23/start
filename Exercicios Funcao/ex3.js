/* 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.*/

const elevado = function(base,expoente){ 
    let resultado = Math.pow(base, expoente) 
    return resultado
}

console.log(elevado(2,2))