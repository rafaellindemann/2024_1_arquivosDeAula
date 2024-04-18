programa
{
	funcao inicio()
	{
		inteiro cont, resultado, numero
		escreva("Digite um número: ")
		leia(numero)

		cont = 1
		enquanto(cont<=10){
			resultado = cont * numero
			escreva(cont,"x",numero,"=",resultado,"\n")
			cont++
		}
	}
//escreva(cont,"x5=",resultado)
//1x5=5
//2x5=10
//3x5=15
//...
//10x5=50
}


/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 240; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */