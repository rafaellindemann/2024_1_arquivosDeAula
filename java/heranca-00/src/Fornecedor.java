public class Fornecedor extends Pessoa{
    private String produtos;

    public Fornecedor(String nome, int id, String senha, String produtos) {
        super(nome, id, senha);
        this.produtos = produtos;
    }

    public String getProdutos() {
        return produtos;
    }

    public void setProdutos(String produtos) {
        this.produtos = produtos;
    }

    @Override
    public String toString() {
        return "Fornecedor{" +
                "produtos='" + produtos + '\'' +
                '}';
    }
}
