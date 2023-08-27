const alunos = [
    { nome: 'joao', nota: 7.3, bolsista: false},
    { nome: 'Maria', nota: 9.2, bolsista: true},
    { nome: 'Pedro', nota: 9.8, bolsista: false},
    { nome: 'Ana', nota: 8.7, bolsista: true},
    ]

    //desafio 1: Todos os alunos sao bolsista?

    
    const todosbolsista = (resultado, bolsista) => resultado && bolsista
    console.log(alunos.map(a=>a.bolsista).reduce(todosbolsista))

    // desafio 2: algum aluno e bolsista ?

    const algumbolsista = (resultado, bolsista) => resultado || bolsista
    console.log(alunos.map(a=>a.bolsista).reduce(algumbolsista))
    
    


   
    