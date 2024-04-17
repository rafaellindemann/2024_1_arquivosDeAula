programa {
  funcao inicio() {
    cadeia operacao
    real resultado, n1=6, n2=2
    escreva("Escolha a operação (+ - / *): ")
    leia(operacao)
//...
    se(operacao == "+"){
      resultado = n1 + n2
    }senao se(operacao == "-"){
      resultado = n1 - n2
    }//...

    escreva("O resultado de ", n1,operacao, n2, " é: ", resultado)

  }
}
