import javax.swing.*;
import java.util.ArrayList;

public class Main {
    static ArrayList<Pessoa> pessoas = new ArrayList<Pessoa>();
    public static void main(String[] args) {
//        Pessoa p;
//        p = new Pessoa();


//        p.nome = "Zeroberto";
//        System.out.println(p.nome);
//        p.nome = "Umberto";
//        System.out.println(p.nome);
//        p.nome = "Doisberto";
//        System.out.println(p.nome);

//        Pessoa p = new Pessoa("Agenor", 55);
//        //p.setNome("Umberto");
//        System.out.println(p.getNome());
//        p.setNome("Doisberto");
//        String nome = p.getNome();
//        System.out.println(nome);
//
//       // p.setIdade(33);
//        System.out.println(p.getIdade());
//
//        Pessoa vazia = new Pessoa();
//        System.out.println("Vazia: "+vazia.getNome());
//        System.out.println("Idade vazia: "+ vazia.getIdade());
//        Pessoa soComNome = new Pessoa("Socom");
//        System.out.println(soComNome.getNome());
//        System.out.println(soComNome.getIdade());

        for(int i=0; i<3; i++){
            String nome = JOptionPane.showInputDialog("Nome: ");
            int idade = Integer.parseInt(
                    JOptionPane.showInputDialog("Idade: "));
            Pessoa p = new Pessoa(nome, idade);
            pessoas.add(p);

        }
//        for(Pessoa pessoa : pessoas){
        for(Pessoa daVez : pessoas){
            System.out.println("Pessoa "+(pessoas.indexOf(daVez)+1));

            System.out.println(daVez.getInfos());
            System.out.println("=============");
        }

//        System.out.println(pessoas.get(0).getInfos());
        //"
        // Nome: ${nome};
        // Idade: ${idade}
        // "
//        System.out.println(pessoas);

    }
}