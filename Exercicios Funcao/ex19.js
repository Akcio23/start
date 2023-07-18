/*19) O cardápio de uma lanchonete é o seguinte:

Código      Descrição do Produto      Preço
100           Cachorro Quente         R$ 3,00
200           Hambúrguer Simples      R$ 4,00
300           Cheeseburguer           R$5,50
400           Bauru                    R$ 7,50
500           Refrigerante            R$ 3,50
600           Suco                   R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.*/

function produtos(codigo,quantidade){
    switch(codigo){
        case 100: 
            return `R$ ${quantidade * 3.00}`;
        case 200:
            return `R$ ${quantidade * 4.00}`;
        case 300:
            return `R$ ${quantidade * 5.50}`;
        case 400:
            return `R$ ${quantidade * 7.50}`;
        case 500:
            return `R$ ${quantidade * 3.50}`;
        case 600:
            return `R$ ${quantidade * 2.80}`;
        default:
            return `Produto não existente.`
    }
}


console.log(produtos(100,2));
console.log(produtos(200,2));
console.log(produtos(300,2));
console.log(produtos(400,2));
console.log(produtos(500,2));
console.log(produtos(600,2));
console.log(produtos(700,2));