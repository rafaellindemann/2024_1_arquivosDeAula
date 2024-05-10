package polimorfismo;

public class Funcionario extends Pessoa implements Pagamento{

    private int salario;
    private String dataAdmissao;

    public Funcionario(String nome, String cpf,
                       String dataNascimento, String email,
                       int salario, String dataAdmissao) {
    super(nome, cpf, dataNascimento, email);
    this.salario = salario;
    this.dataAdmissao = dataAdmissao;
    }

    public int getSalario() {
        return salario;
    }

    public void setSalario(int salario) {
        this.salario = salario;
    }

    public String getDataAdmissao() {
        return dataAdmissao;
    }

    public void setDataAdmissao(String dataAdmissao) {
        this.dataAdmissao = dataAdmissao;
    }

    @Override
    public void pagar() {
        System.out.println("Pagamento feito por desconto em folha");
    }
}
