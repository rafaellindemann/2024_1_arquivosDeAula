import javax.swing.*;
public class Main {
    static void escrever(String texto){
        JOptionPane.showMessageDialog(null, texto);
    }
    static float calcularMedia(int a, int b){
        float soma = (float) a+b;
        return soma/2;
    }
    public static void main(String[] args) {
        escrever("Oi Dudu");
        float valor = calcularMedia(3,6);
        System.out.println("Media: " + valor);
    }
}