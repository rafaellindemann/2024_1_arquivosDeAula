import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//        Scanner teclado = new Scanner(System.in);
//        System.out.print("Nome do aluno: ");
//        String nome = teclado.nextLine();
//        System.out.print("Nota: ");
//        float nota = teclado.nextFloat();
//
//        System.out.printf("A nota de %s é %.3f \n", nome, nota);

        Scanner teclado = new Scanner(System.in);
        System.out.print("Escreva um int: ");
        int i = teclado.nextInt();
        System.out.println("Eco do int: " + i);

        long li = i+1;
        System.out.println("Int+1 convertido automaticamente pra long na atribuição: " + li);

        li++;
        i = (int) li;
        System.out.println("\nLong incrementado convertido explicitamente para int: " + i);





    }
}