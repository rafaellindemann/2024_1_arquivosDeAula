import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        TelaPrincipal t = new TelaPrincipal();
        t.setContentPane(t.painelPrincipal);
        t.setTitle("Swing com respeito");
        t.setSize(400, 300);
        t.setVisible(true);
        t.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}