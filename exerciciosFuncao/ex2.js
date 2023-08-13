/*02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

const tri = function(lado1,lado2,lado3){ 
    if(lado1 === lado2){
       var teste = (lado1 * 2)/2
        if(teste===lado3){
            console.log('Este triangulo tem todos lados iguais é um Equilátero')
        }else{console.log('Este triangulo é um Isósceles,tem dois lados iguais')}
    }
    else if(lado2 === lado3){
        console.log('Este triangulo é um Isósceles,tem dois lados iguais')
    }
    else if(lado1 === lado3){
        console.log('Este triangulo é um Isósceles,tem dois lados iguais')
    }else{console.log('Este triangulo tem todos lados diferentes')}
}

console.log(tri(2,2,2))
console.log(tri(2,3,2))
console.log(tri(2,3,4))