import javax.swing.*;

public class Pessoa {
    private String nome;
    private int id;
    private String senha;
    public static String teste = "blah";

    public Pessoa(String nome, int id, String senha) {
        this.nome = nome;
        this.id = id;
        this.senha = senha;
    }

    public static void olaMundo(){
        JOptionPane.showMessageDialog(null,"Oi amigos imaginários");
    }

    public void mudarSenha(String s){
        this.setSenha(s);
    }

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

//    public boolean alugar(){
//        if(getAlugada == false){
//            setAlugada(true);
//            return true;
//        }
//        return false;
//    }
}
