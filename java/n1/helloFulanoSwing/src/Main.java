import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        TelaSwing t = new TelaSwing();
        t.setContentPane(t.painelPrincipal);
        t.setTitle("Hello Fulano");
        t.setSize(400, 300);
        t.setVisible(true);
        t.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    }
}