package polimorfismo;

public class Cliente extends Pessoa {

    private int qtdAnimais;

    private String metodoPagamento;

    public Cliente(String nome, String cpf,
                   String dataNascimento, String email,
                   int qtdAnimais,
                   String metodoPagamento) {
        super(nome, cpf, dataNascimento, email);
        this.qtdAnimais = qtdAnimais;
        this.metodoPagamento = metodoPagamento;
    }

    public int getQtdAnimais() {
        return qtdAnimais;
    }

    public void setQtdAnimais(int qtdAnimais) {
        this.qtdAnimais = qtdAnimais;
    }

    public String getMetodoPagamento() {
        return metodoPagamento;
    }

    public void setMetodoPagamento(String metodoPagamento) {
        this.metodoPagamento = metodoPagamento;
    }

//    @Override
//    public void pagar() {
//        System.out.println("Pagamento realizado por " + metodoPagamento);
//    }
}
