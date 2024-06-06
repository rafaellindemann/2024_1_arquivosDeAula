import javax.swing.*;
public class Main {
//    static void escrever(String t){
//        JOptionPane.showMessageDialog(null, t);
//    }
//    static float media(float a, float b){
//        float soma = a+b;
//        return soma/2;
//    }
    public static void main(String[] args) {
//        escrever("Oi gente");
//        float valor = media(3,8);
//        System.out.println(valor);
        Pessoa p = new Pessoa("Breno", 18);
        //p.setIdade(16);
        //p.idade = p.idade + 1;
        //p.setIdade(p.getIdade() + 1);
        System.out.println(p.getNome()+" tem "+
                p.getIdade() + " anos");

        //p.dizerOla();
    }
}

//{idade:18,nome:"BreninhoBunitinho"}