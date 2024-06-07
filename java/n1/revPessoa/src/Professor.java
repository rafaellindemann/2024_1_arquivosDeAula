public class Professor extends Pessoa{
    private String area;

    public Professor(String nome, int id, String senha, String area) {
        super(nome, id, senha);
        this.area = area;
    }

    public void fazerChamada(){
        System.out.println("Gabriel Cantor");
        System.out.println("Gi, mesmo que o Vino já tenha esquecido dela");
        System.out.println("Kaian");
    }
    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }
}
