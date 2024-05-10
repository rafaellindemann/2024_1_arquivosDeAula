package exericio;

public class Animal implements Terrestre{

    private String nome;
    private int qtdPatas;

    public Animal(String nome, int qtdPatas) {
        this.nome = nome;
        this.qtdPatas = qtdPatas;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getQtdPatas() {
        return qtdPatas;
    }

    public void setQtdPatas(int qtdPatas) {
        this.qtdPatas = qtdPatas;
    }

    @Override
    public void andar() {
        System.out.println("andando com as minhas " + qtdPatas + " patas");
    }
}
