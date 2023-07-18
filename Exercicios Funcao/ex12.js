/*Faça um algoritmo que calcule o fatorial de um número.*/
function calcularFatorialIterativo(numero) {
    let fatorial = 1;
  
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  console.log(calcularFatorialIterativo(4))