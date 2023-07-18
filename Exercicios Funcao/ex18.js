/*18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/

function lerNumeros(numero){
    switch(numero){
        case 0: return 'Zero'; 
        case 1: return 'Um'; 
        case 2: return 'Dois'; 
        case 3: return 'Tres'; 
        case 4: return 'Quatro'; 
        case 5: return 'Cinco';
        case 6: return 'Seis';
        case 7: return 'Sete';
        case 8: return 'oito';
        case 9: return 'nove';
        case 10: return 'Dez';
        default: return 'Número fora do intervalo.';
    }
}

console.log(lerNumeros(0));
console.log(lerNumeros(1));
console.log(lerNumeros(2));
console.log(lerNumeros(3));
console.log(lerNumeros(4));
console.log(lerNumeros(5));
console.log(lerNumeros(6));
console.log(lerNumeros(7));
console.log(lerNumeros(8));
console.log(lerNumeros(9));
console.log(lerNumeros(10));
console.log(lerNumeros(11));

