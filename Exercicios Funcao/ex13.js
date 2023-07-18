/*Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.*/

function diaDoMes(numero) {
    switch(numero){
        case 1: 
            return `Fim de semana`
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return `Dia util`
        case 7:
            return`fim de semana`;
        default:
            return`dia invalido`;

}}


console.log(diaDoMes(1));
console.log(diaDoMes(2));
console.log(diaDoMes(3));
console.log(diaDoMes(4));
console.log(diaDoMes(5));
console.log(diaDoMes(6));
console.log(diaDoMes(7));

    