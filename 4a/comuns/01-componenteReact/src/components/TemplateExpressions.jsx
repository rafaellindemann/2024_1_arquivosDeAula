function TemplateExpressions(){
let nome = 'Papai Noel'
let nf = {
    cliente: "Papai Noel",
    valor: 1300
}
    return(
        <>
            <p>Ano que vem será {2024+1}</p>
            <p>Bem vindo {nome}</p>
            <p>A nota do cliente {nf.cliente} é de R${nf.valor.toFixed(2)}</p>

        </>
    )
}

export default TemplateExpressions