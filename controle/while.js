function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)

}

let opcao = 0 

while(opcao != -1){
    opcao = getInteiroAleatorioEntre(-1,1000)
    console.log(`Opção escolhido foi ${opcao}.`)
    
}

console.log('Até a proxima!')