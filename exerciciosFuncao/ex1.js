/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores.*/


const conta = function(a,b) { 
    return{
        soma : a + b,
        sub: a - b, 
        mult: a * b,
        div: a / b,
    }
}

console.log(conta(10,10))