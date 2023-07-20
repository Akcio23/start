/*21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130*/

const valorBase = 100 

function ValorAdicional(idade) { 
    if(idade < 10){
       return 80 + valorBase
    }else if(idade < 30){
        return 50 + valorBase
    }else if(idade < 60){
        return 95 + valorBase
    }else if(idade > 60){
        return 130 + valorBase
    }else{
        return `idade invalida`
    }
 
    }


console.log(`o valor do plano de saude sera R$ ${ValorAdicional(9)}`)
console.log(`o valor do plano de saude sera R$ ${ValorAdicional(25)}`)
console.log(`o valor do plano de saude sera R$ ${ValorAdicional(35)}`)
console.log(`o valor do plano de saude sera R$ ${ValorAdicional(65)}`)

