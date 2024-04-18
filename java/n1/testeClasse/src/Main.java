public class Main {
    public static void main(String[] args) {
//        Pessoa p;
//        p = new Pessoa();


//        p.nome = "Zeroberto";
//        System.out.println(p.nome);
//        p.nome = "Umberto";
//        System.out.println(p.nome);
//        p.nome = "Doisberto";
//        System.out.println(p.nome);

        Pessoa p = new Pessoa();
        p.setNome("Umberto");
        System.out.println(p.getNome());
        p.setNome("Doisberto");
        String nome = p.getNome();
        System.out.println(nome);
    }
}