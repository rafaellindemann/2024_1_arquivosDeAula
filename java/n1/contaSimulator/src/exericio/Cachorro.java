package exericio;

public class Cachorro extends Animal implements Terrestre {

    public Cachorro(String nome, int qtdPatas) {
        super(nome, qtdPatas);
    }

    @Override
    public void andar() {
        System.out.println("Andando com as minhas " + getQtdPatas() + "pernas e balancando o meu rabo.");
    }
}
