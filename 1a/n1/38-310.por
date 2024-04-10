programa {
  funcao inicio() {
    //real corre1, corre2, corre3, corre4, corre5
    real corre
    real faturamentoDia
    real desconto, limpoDia
    real salario
    escreva("Digite o valor do primeiro corre: ")
    leia(corre)
    faturamentoDia = corre
    escreva("Digite o valor do segundo corre: ")
    leia(corre)
    faturamentoDia = faturamentoDia + corre
    escreva("Digite o valor do terceiro corre: ")
    leia(corre)
    faturamentoDia = faturamentoDia + corre
    escreva("Digite o valor do quarto corre: ")
    leia(corre)
    faturamentoDia = faturamentoDia + corre
    escreva("Digite o valor do quinto corre: ")
    leia(corre)
    faturamentoDia = faturamentoDia + corre
    escreva("Faturamento bruto do dia: R$" + faturamentoDia) // resultado do 3.8
    desconto = faturamentoDia * 25/100
    limpoDia = faturamentoDia - desconto
    escreva("\nLimpo de hôji: R$" + limpoDia) // resultado do 3.9
    salario = limpoDia * 20
    escreva("\nSalário vai ser mais ou menos: R$" + salario)
  }
}
