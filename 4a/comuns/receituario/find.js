let nome

receitas.splice(receitas.indexOf(
    receitas.find((receita) => {
        return receita.nome == nome
    })
),1)

// ou, passo a passo

let obj = receitas.find((receita) => {
    return receita.nome == nome
})

let i = receitas.indexOf(obj)

receitas.splice(i,1)