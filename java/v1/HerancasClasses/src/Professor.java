import javax.swing.*;

public class Professor extends Pessoa{
    private String area;

    public Professor(String nome, int id, String senha, String area) {
        super(nome, id, senha);
        this.area = area;
    }

    public void fazerChamada(){
        JOptionPane.showMessageDialog(null, "Chamadaaaaaaaa");
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }
}
