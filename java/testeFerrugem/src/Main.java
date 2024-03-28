import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        System.out.print("Nome do aluno: ");
        String nome = teclado.nextLine();
        System.out.print("Nota: ");
        float nota = teclado.nextFloat();

        System.out.printf("A nota de %s é %.3f \n", nome, nota);

//        int i = teclado.nextInt();


    }
}