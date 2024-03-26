programa
{
	
	funcao inicio()
	{
		inteiro cont
		inteiro x, y
///		cont = 0 			// inicialização
//		enquanto(cont < 10){// cond repetição
//			escreva(cont)
//			cont++		// modificação da variável de controle
//		}

		
		
		x=0
		enquanto(x < 10){
			y=0
			enquanto(y < 10){
				escreva("(", x, ",", y, ")")
				y++
			}
			escreva("\n")
			x++
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 350; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */