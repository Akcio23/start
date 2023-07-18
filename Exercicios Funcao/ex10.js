/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function ehDivisivelPor3(numero) {
    return numero % 3 === 0;
  }
  console.log(ehDivisivelPor3(9));  
  console.log(ehDivisivelPor3(5));   
  console.log(ehDivisivelPor3(12));
  console.log(ehDivisivelPor3(7));