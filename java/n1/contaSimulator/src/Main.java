
import exericio.Animal;
import exericio.Aranha;
import exericio.Cachorro;
import exericio.Hamster;
import polimorfismo.Cliente;
import polimorfismo.Funcionario;
import polimorfismo.Pessoa;

import javax.swing.*;

public class Main {
    public static void main(String[] args) {
//        TelaSimulator t = new TelaSimulator();
//        t.setContentPane(t.painelPrincipal);
//        t.setTitle("$$ Simulator $$");
//        t.setSize(400, 400);
//        t.setVisible(true);
//        t.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

//        Pessoa p1 = new Pessoa("Jose", "01203405641", "01/12/1999", "jose@gmail.com");

//        Pessoa c1 = new Cliente("Cliente1", "01203405641", "01/12/1999", "jose@gmail.com", 6, "Cartao Credito");
//        Pessoa f1 = new Funcionario("Cliente1", "01203405641", "01/12/1999", "jose@gmail.com", 6000, "08/05/2024");
//
//        c1.pagar();
//        f1.pagar();

        Animal a1 = new Cachorro("Belo", 4);
        Animal a2 = new Aranha("Caramuja", 8);
        Animal a3 = new Hamster("Joana", 3);

        a1.andar();
        a2.andar();
        a3.andar();
    }
}