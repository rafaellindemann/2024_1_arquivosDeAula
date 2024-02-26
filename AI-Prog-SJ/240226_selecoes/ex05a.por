programa
{
		
	funcao inicio()
	{
		inteiro n1, n2
		cadeia operacao
		real resultado

		escreva("Digite o primeiro número: ")
		leia(n1)
		escreva("Digite o segundo número: ")
		leia(n2)
		escreva("Escolha a operação: ")
		escreva("\n+ para adição")
		escreva("\n- para subtração")
		escreva("\nx para multiplicação")
		escreva("\n/ para divisão")
		escreva("\nOperação escolhida: ")
		leia(operacao)

		se(operacao == "+"){
			resultado = n1 + n2
			escreva("Resultado: " + resultado)
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 490; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {n1, 6, 10, 2}-{n2, 6, 14, 2}-{operacao, 7, 9, 8}-{resultado, 8, 7, 9};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */