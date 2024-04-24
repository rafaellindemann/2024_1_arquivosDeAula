import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class TelaHome extends JFrame{
    static ArrayList<Pessoa> lista = new ArrayList<Pessoa>();
    public JPanel painelPrincipal;
    private JTextField txtNome;
    private JButton btEnviar;
    private JTextField txtTelefone;
    private JTextArea txtLista;
    private JButton btTeste;

    public TelaHome() {
    btEnviar.addActionListener(new ActionListener() {
        @Override
        public void actionPerformed(ActionEvent e) {
//            Pessoa p = new Pessoa();
//            p.setNome(txtNome.getText());
//            p.setTelefone(txtTelefone.getText());

            Pessoa p = new Pessoa(txtNome.getText(),
                    txtTelefone.getText());

            lista.add(p);

//            JOptionPane.showMessageDialog(null, lista);
            txtNome.setText("");
            txtTelefone.setText("");
            txtNome.grabFocus();
            String texto = "";
            for (Pessoa pessoa : lista){
                texto += pessoa.mostrarEstado() + "\n---------------\n";
            }
            txtLista.setText(texto);
            System.out.println(texto);
        }
    });
}
}
