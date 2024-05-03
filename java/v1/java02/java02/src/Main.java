////import javax.swing.*;
////
////public class Main {
////    public static void main(String[] args) {
////        String nome, nomeUsuario;
////        nome = JOptionPane.showInputDialog("Nome:");
////        nomeUsuario = JOptionPane.showInputDialog("nomeUsuario:");
////        if(nome.equals(nomeUsuario)){
////            System.out.println("Iguais");
////        }else{
////            System.out.println("Diferentes");
////        }
////    }
////}
//
//import javax.swing.*;
//
//public class Main {
//    public static void main(String[] args) {
//
//        int[] idades = new int[5];
//
//        for(int i=0; i<5; i++){
//            idades[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite a " + (i+1) + "a idade:"));
//        }
//
//        String texto = "";
//        for(int idade : idades){
////            texto += "Idade: " + idade + ";\n";
//            System.out.println("Idade: " + idade + ";");
//        }
////        JOptionPane.showMessageDialog(null, texto);
////        System.out.println(texto);
//    }
//}
//
//public class Main {
//    public static void main(String[] args) {
//        String[] mes = {"Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"};
//        int[] fim = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
//
//        for(int i=0; i<mes.length; i++){
//            System.out.println("O mês de " + mes[i] + " tem " + fim[i] + " dias");
//        }
//
//    }
//}

import javax.swing.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] idades = {14,12,25,44,11,8};
        Arrays.sort(idades);
        for (int n : idades){
            System.out.print(n + " ");
        }
        System.out.println("");
        int i = Integer.parseInt(JOptionPane.showInputDialog("n:"));
        int pos = Arrays.binarySearch(idades,i);
        System.out.println("Valor na encontrado na posição: "+pos);
    }
}
