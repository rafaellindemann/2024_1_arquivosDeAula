programa
{
/*
Dias em um Mês: Peça ao usuário para inserir o nome 
de um mês e, em seguida, determine quantos dias ele tem.
*/
	cadeia mes
	funcao inicio()
	{
		escreva("Digite o mês:")
		leia(mes)
		//Janeiro, janeiro, 1
		se(mes == "Janeiro" ou mes=="janeiro" ou mes=="1"
		ou mes == "Marco" ou mes=="marco" ou mes=="3"
		ou mes == "Maio" ou mes=="maio" ou mes=="5"){
			escreva("Tem 31 dias")
		}
		//...
		se(mes == "Dezembro" ou ...){
			
		}
	
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 191; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */