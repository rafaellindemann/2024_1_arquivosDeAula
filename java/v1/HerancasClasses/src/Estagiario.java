public class Estagiario extends Aluno{
    private float bolsa;

    public Estagiario(String nome, int id, String senha, String curso, float bolsa) {
        super(nome, id, senha, curso);
        this.bolsa = bolsa;
    }

    public void fazerCafe(){
        System.out.println("Sou um estagiário legal, faço um bom café :D");
    }

    public float getBolsa() {
        return bolsa;
    }

    public void setBolsa(float bolsa) {
        this.bolsa = bolsa;
    }
}
