const aprovados = [`Agatha`, `Aldo`, `Daniel`, `Raquel`]

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach((nome) => console.log(nome))

const exibirAprovadps = aprovado => console.log(aprovado)
    aprovados.forEach(exibirAprovadps)