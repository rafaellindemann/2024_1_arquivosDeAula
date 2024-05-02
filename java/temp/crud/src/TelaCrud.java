import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;

public class TelaCrud extends JFrame{
    public JPanel painelPrincipal;
    private JTextField txtNome;
    private JTextField txtAltura;
    private JTextField txtPeso;
    private JButton btnCadastrar;
    private JButton btnLocalizar;
    private JButton btnEditar;
    private JButton btnApagar;
    private JTextArea txtTodos;
    private JButton btnMostrarTodos;
    private JButton btnFakes;

    private ArrayList<Dino> dinos = new ArrayList<Dino>();

    private Dino alvo = null;

    private void mostrarTodos(){
        String s = "";
        txtTodos.setText("");
        for(Dino d : dinos){
            s = s.concat(String.format("Nome: %s \nAltura: %d \nPeso: %f \n--------------------\n", d.getNome(), d.getAltura(), d.getPeso()));
        }
        txtTodos.setText(txtTodos.getText() + s);
    }

    private void limparEntradas(){
        txtPeso.setText("");
        txtAltura.setText("");
        txtNome.setText("");
        txtNome.grabFocus();
    }
//    private Dino escontrarDinoPorNome(Dino d){
//
//    }
    public TelaCrud() {
        btnCadastrar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String nome = txtNome.getText();
                int altura = Integer.parseInt(txtAltura.getText());
                float peso = Float.parseFloat(txtPeso.getText());
                Dino d = new Dino(nome, altura, peso);
                dinos.add(d);

                mostrarTodos();
                limparEntradas();

                System.out.println(dinos);
            }
        });
        btnMostrarTodos.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                mostrarTodos();
            }
        });
        btnLocalizar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String n = txtNome.getText();
                for(Dino d : dinos){
                    if(d.getNome().equals(n)){
                        alvo = d;
                        txtNome.setText(d.getNome());
                        txtAltura.setText(Integer.toString(d.getAltura()));
                        txtPeso.setText(Float.toString(d.getPeso()));
                        System.out.println(d.getNome() + d.getAltura());
                        System.out.println(d);
                    }
                }
            }
        });
        btnFakes.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                dinos.add(new Dino("Rex", 20, 1000));
                dinos.add(new Dino("Tricerátopo", 10, 500));
                dinos.add(new Dino("Estegossauro", 8, 700));

                mostrarTodos();

                System.out.println(dinos);
            }
        });
        btnEditar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {

                if(alvo != null){
                    alvo.setNome(txtNome.getText());
                    alvo.setAltura(Integer.parseInt(txtAltura.getText()));
                    alvo.setPeso(Float.parseFloat(txtPeso.getText()));

                    mostrarTodos();
                    limparEntradas();
                    alvo = null;

                    System.out.println("!!Edição salva!!");
                }else {
                    JOptionPane.showMessageDialog(null, "Primeiro pesquise algum dino...");
                }

            }
        });
        btnApagar.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                System.out.println(alvo);
                if(alvo != null){
                    dinos.remove(alvo);
                    mostrarTodos();
                    alvo = null;
                    limparEntradas();
                }else {
                    JOptionPane.showMessageDialog(null, "Primeiro pesquise algum dino...");
                }
            }
        });
    }
}

