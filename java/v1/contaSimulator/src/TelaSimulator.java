import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TelaSimulator extends JFrame {
    Conta c = new Conta(1, "Juca", 120.0f);
    public JPanel painelPrincipal;
    private JLabel lblSaldo;
    private JTextField txtSaque;
    private JButton sacarButton;
    private JTextField txtDeposito;
    private JButton depositarButton;


    public TelaSimulator() {
        lblSaldo.setText(Float.toString(c.getSaldo()));
        sacarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
              float valor = Float.parseFloat(txtSaque.getText());
              c.sacar(valor);
              lblSaldo.setText(Float.toString(c.getSaldo()));
            }
        });
        depositarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

            }
        });
    }
}
