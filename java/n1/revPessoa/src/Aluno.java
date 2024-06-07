public class Aluno extends Pessoa{
    private String curso;
    public static String especie = "Humano";

    public Aluno(String nome, int id, String senha, String curso) {
        super(nome, id, senha);
        this.curso = curso;
    }

    public void fazerMatricula(String c){
        this.setCurso(c);
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }
}
