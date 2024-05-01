public class Cachorro {
    private String nome;
    private int peso;

    public Cachorro(String nome, int peso) {
        this.nome = nome;
        this.peso = peso;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getPeso() {
        return peso;
    }

    public void setPeso(int peso) {
        this.peso = peso;
    }

    public void cacarNaRua(){
        System.out.println(this.getNome() + " "+this.getPeso() + "=====");
        for(int i=0; i<this.peso; i++){
            System.out.println("Cocozinho fofo");
        }
    }
}
