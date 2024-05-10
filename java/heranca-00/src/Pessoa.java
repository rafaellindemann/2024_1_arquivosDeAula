class Pessoa {
    private String nome;
    private int id;
    private String senha;

    public Pessoa(String nome, int id, String senha) {
        this.nome = nome;
        this.id = id;
        this.senha = senha;
    }

    public void mudarSenha(String novaSenha) {
        this.senha = novaSenha;
        System.out.println("Senha alterada com sucesso!");
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }
}