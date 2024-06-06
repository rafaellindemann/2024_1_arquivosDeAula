import javax.swing.*;

public class Fornecedor extends Pessoa{
    private String produto;

    public Fornecedor(String nome, int id, String senha, String produto) {
        super(nome, id, senha);
        this.produto = produto;
    }

    public void efetuarVenda(){
        JOptionPane.showMessageDialog(null, "Vendendo");
    }

    public String getProduto() {
        return produto;
    }

    public void setProduto(String produto) {
        this.produto = produto;
    }
}
