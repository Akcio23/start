/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

function frutas(a){
    switch(a){
        case 'maça': 
            return 'Não vendemos esta fruta aqui';
        case 'kiwi': 
            return 'Estamos come escassez de kiwis';
        case 'melancia': 
            return 'aqui está, são 3 reais o quilo';
        default: 
            return 'ERROR 404';
    }
}


console.log(frutas('maça'));
console.log(frutas('kiwi'));
console.log(frutas('melancia'));
console.log(frutas('banana'));
console.log(frutas(5));