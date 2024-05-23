public class Aluno extends Pessoa {
    private String curso;

    public Aluno(String nome, int id, String senha, String curso) {
        super(nome, id, senha);
        this.curso = curso;
    }

    public void fazerMatricula(String curso){
        setCurso(curso);
    }

    public String getCurso() {
        return curso;
    }

    public void setCurso(String curso) {
        this.curso = curso;
    }
}
