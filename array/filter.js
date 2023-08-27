const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true},
    { nome: 'iPad pro', preco: 4199, fragi: true},
    { nome: 'Copo de Vidro', preco: 14.49, fragil:true},
    { nome: 'Copo de Plastico', preco: 18.99, fragi:false},
]

console.log(produto.filter(function(p){
    return false

}))

const caro = produto => produto.preco>=500
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))

