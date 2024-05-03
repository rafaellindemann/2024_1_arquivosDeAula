import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TelaSimulator extends JFrame{
    Conta c = new Conta("ET Bilu", 1, 557.0f);
    private JLabel lblSaldo;
    private JTextField txtDeposito;
    private JButton depositarButton;
    private JTextField txtSaque;
    private JButton sacarButton;
    public JPanel painelPrincipal;

    public TelaSimulator() {

        lblSaldo.setText(Float.toString(c.getSaldo()));
        depositarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                float valor = Float.parseFloat(txtDeposito.getText());
                c.depositar(valor);
                lblSaldo.setText(Float.toString(c.getSaldo()));
            }
        });
        sacarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                float valor = Float.parseFloat(txtSaque.getText());
                c.sacar(valor);
                lblSaldo.setText(Float.toString(c.getSaldo()));
            }
        });
    }
}
