import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        TelaSimulator t = new TelaSimulator();
        t.setContentPane(t.painelPrincipal);
        t.setTitle("$$ Simulator $$");
        t.setSize(400, 400);
        t.setVisible(true);
        t.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}