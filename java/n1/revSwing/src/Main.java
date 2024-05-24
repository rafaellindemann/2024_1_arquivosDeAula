import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        TelaTeste t = new TelaTeste();
        t.setContentPane(t.painelPrincipal);
        t.setTitle("Primeiro swing");
        t.setSize(400,300);
        t.setVisible(true);
        t.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

    }
}