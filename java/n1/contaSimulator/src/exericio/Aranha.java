package exericio;

public class Aranha extends Animal implements Terrestre{

    public Aranha(String nome, int qtdPatas) {
        super(nome, qtdPatas);
    }

    @Override
    public void andar() {
        System.out.println("Andando com as minhas " + getQtdPatas() + "pernas");
    }
}
