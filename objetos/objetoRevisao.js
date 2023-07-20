// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    prorietario: {
        nome: 'Raul',
        idade:56,
        endereco: { 
            logradouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 18,
    },{
        nome: 'Pedro',
        idade: 21
    }],
    calcularValorSeguro: function(){

    }
} 

carro.prorietario.endereco.numero = 1000
carro['prorietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

//delete carro.condutores
delete carro.prorietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)