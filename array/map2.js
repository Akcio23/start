const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco" : 13.90}',
    '{"nome": "Kit de lapis", "preco" : 41.22}',
    '{"nome": "Caneta", "preco" : 7.50}',

]

//retornar um array apenas com os precos


const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto)
const resultado2 = resultado.map(apenasPreco)

console.log(resultado)
console.log(resultado2)