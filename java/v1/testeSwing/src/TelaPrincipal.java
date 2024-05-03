import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class TelaPrincipal extends JFrame {
    public JPanel painelPrincipal;
    private JTextField txtNome;
    private JButton btnEnviar;

    public TelaPrincipal() {
        btnEnviar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                JOptionPane.showMessageDialog(null,
                        "Olá " + txtNome.getText() );
            }
        });
    }
}
