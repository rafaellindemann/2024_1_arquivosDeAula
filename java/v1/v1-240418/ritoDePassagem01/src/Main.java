import javax.swing.*;
import java.util.ArrayList;
public class Main {
    static ArrayList<Pessoa> pessoas = new ArrayList<Pessoa>();
    public static void main(String[] args) {
        for(int i =0; i<3; i++){
            String nome =
                JOptionPane.showInputDialog("Digite o nome da pessoa "+(i+1));
            int idade = Integer.parseInt(JOptionPane.showInputDialog("Idade:"));
            Pessoa p = new Pessoa(nome, idade);
            pessoas.add(p);
        }
        System.out.println(pessoas);
    }
}