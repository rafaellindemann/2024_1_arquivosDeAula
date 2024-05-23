public class Professor extends Pessoa{
    private String area;


    public Professor(String nome, int id, String senha, String area) {
        super(nome, id, senha);
        this.area = area;
    }

    public void fazerChamada(){
        System.out.println("Zuma");
        System.out.println("...");
        System.out.println("Andrey");
        System.out.println("Alexsandro");
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }
}
