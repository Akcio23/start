/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

const divisao = function(a,b) { 
    total1 = Math.floor(a / b)
    total2 = a % b

    return console.log(`o total da divisão é ${total1} e o resto da operação é ${total2} `)
}

console.log(divisao(11,4))