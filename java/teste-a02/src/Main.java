//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
//        Pessoa p = new Pessoa(); // sem constructor
//        p.setNome("Rafael");
//        p.setIdade(22);

        Pessoa p = new Pessoa("MJ", 17); // com constructor

        System.out.println(p.getNome());
        System.out.println(p.getIdade());
    }
}