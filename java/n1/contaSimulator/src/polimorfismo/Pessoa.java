package polimorfismo;

public class Pessoa implements Pagamento {

    private String nome;
    private String cpf;
    private String dataNascimento;
    private String email;

    public Pessoa(String nome, String cpf, String dataNascimento, String email) {
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.dataNascimento = dataNascimento;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public String getDataNascimento() {
        return dataNascimento;
    }

    public void setDataNascimento(String dataNascimento) {
        this.dataNascimento = dataNascimento;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public void pagar() {
        System.out.println("Pagamento automatico no boleto");
    }
}
