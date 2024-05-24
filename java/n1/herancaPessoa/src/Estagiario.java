public class Estagiario extends Aluno{
    private String funcao;

    public Estagiario(String nome, int id, String senha, String curso, String funcao) {
        super(nome, id, senha, curso);
        this.funcao = funcao;
    }

    public void fazerCafe(){
        System.out.println("CaféCaféCaféCaféCaféCaféCaféCaféCa");
    }
    public String getFuncao() {
        return funcao;
    }

    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }
}
