import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        String nome, nomeUsuario;
        nome = JOptionPane.showInputDialog("Nome:");
        nomeUsuario = JOptionPane.showInputDialog("nomeUsuario:");
        if(nome.equals(nomeUsuario)){
            System.out.println("Iguais");
        }else{
            System.out.println("Diferentes");
        }
    }
}