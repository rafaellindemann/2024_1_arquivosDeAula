////import javax.swing.*;
////
//////public class Main {
//////    public static void main(String[] args) {
//////        String s1, s2;
//////        s1 = JOptionPane.showInputDialog("S1: ");
//////        s2 = JOptionPane.showInputDialog("S2: ");
////////        s2 = s1;
////////        if(s1 == s2){ // isso dá muito ruim
//////        if(s1.equals(s2)){
//////            System.out.println("Iguais");
//////        }else{
//////            System.out.println("Diferentes");
//////        }
//////
//////        int num;
//////        num = Integer.parseInt(JOptionPane.showInputDialog("Número: "));
////
//////        int n = api.length();
//////        int[] a = new int[n];
//////}
////
////import javax.swing.*;
////
////public class Main {
////    public static void main(String[] args) {
////
////        int[] idades = new int[5];
////
////        for(int i=0; i<5; i++){
////            idades[i] = Integer.parseInt(JOptionPane.showInputDialog("Digite a " + (i+1) + "a idade:"));
////        }
////
////        String texto = "";
////        for(int idade : idades){
//////            texto += "Idade: " + idade + ";\n";
////            System.out.println("Idade: " + idade + ";");
////        }
//////        JOptionPane.showMessageDialog(null, texto);
////        System.out.println(texto);
////    }
////}
//
//import java.util.Arrays;
//
//public class Main {
//    public static void main(String[] args) {
//        int[] idades = {14,12,25,44,11,8};
//        Arrays.sort(idades);
//        for (int n : idades){
//            System.out.print(n + " ");
//        }
//        System.out.println("");
//        int pos = Arrays.binarySearch(idades,11);
//        System.out.println("Valor na encontrado na posição: "+pos);
//    }
//}

import javax.swing.*;
import java.util.ArrayList;
import java.util.Collections;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> dinos = new ArrayList<String>();

        dinos.add("Angaturama");
        dinos.add("Uberabatitan");
        dinos.add("Irritator");
        dinos.add("Oxalaia Quilombensis");

        System.out.println("Arraylist original: " + dinos);

        String dino = dinos.get(1);
        System.out.println("Dino selecionado: " + dino);

        dinos.set(1, "Santanarraptor");
        System.out.println("Modificado: " + dinos);

        dinos.remove(2);
        System.out.println("Removeu o 2: " + dinos);

        int tamanho = dinos.size();
        System.out.println("Tamanho: " + tamanho);

        System.out.println("--= Percorrendo com for =--");
        for (int i= 0; i<dinos.size(); i++){
            System.out.println("Dino: " + dinos.get(i));
        }

        System.out.println("--= Percorrendo com 'forEach' =--");
        for (String d : dinos){
            System.out.println("Dino: " + d);
        }

        Collections.sort(dinos);
        System.out.println("Organizado: " + dinos);

        int indice = dinos.indexOf("Santanarraptor");
        System.out.println("indexOf: " + indice);

        salario[i] = Float.parseFloat(JOptionPane.showInputDialog("Salario: "));

    }
}
//https://www.w3schools.com/java/java_arraylist.asp