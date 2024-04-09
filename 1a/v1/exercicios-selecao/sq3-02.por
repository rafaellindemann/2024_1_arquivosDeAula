programa {
  funcao inicio() {
    real dolares, reais, euros
    inteiro opcao

    escreva("Escolha uma moeda para converter para as outras\n")
    escreva(" 1- Dolar\n")
    escreva(" 2- Real\n")
    escreva(" 3- Euro\n")
    escreva("Opção: ")
    leia(opcao)

    se(opcao==1){
      // dolar 5.01 reais
      // dolar 0.92 euros
      escreva("Digite um valor em dolares: ")
      leia(dolares)
      reais = dolares / 5.01
      euros = dolares * 0.92
      escreva("\nUSD" + dolares + " Convertido para Reais R$" + reais)
      escreva("\nUSD" + dolares + " Convertido para Euros EU$" + euros)


    }senao se(opcao==2){
      // real
    }senao se(opcao==3){
      // euro
    }senao{
      // erro
    }

  }
}
