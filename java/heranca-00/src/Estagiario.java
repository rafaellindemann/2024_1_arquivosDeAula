public class Estagiario extends Aluno{
    private float bolsa;

    public Estagiario(String nome, int id, String senha, String curso, float bolsa) {
        super(nome, id, senha, curso);
        this.bolsa = bolsa;
    }

    public float getBolsa() {
        return bolsa;
    }

    public void setBolsa(float bolsa) {
        this.bolsa = bolsa;
    }

    @Override
    public String toString() {
        return "Estagiario{" +
                "bolsa=" + bolsa +
                '}';
    }
}
