import java.util.ArrayList;


public class Main {
    public static boolean testarClasseExata(Object o, Class<?> classe){
        return o.getClass() == classe;
    }
    public static void main(String[] args) {
        ArrayList<Pessoa> pessoas = new ArrayList<Pessoa>();

        Aluno aluno = new Aluno("Daílson", 1, "1234", "Eng FrontEnd");
        pessoas.add(aluno);

        Professor professor = new Professor("Girafales", 10, "1111", "Todas e vida pessoal.");
        pessoas.add(professor);

        Fornecedor fornecedor = new Fornecedor("Cantina", 22, "4444", "Comida de frango");
        pessoas.add(fornecedor);

        Estagiario estagiario = new Estagiario("João", 899887877, "cafee", "DESI", 1050.28f );
        pessoas.add(estagiario);
//        System.out.println("Nome do aluno: "+aluno.getNome());
//        System.out.println("Nome do aluno no array: "+ pessoas.getFirst().getNome());
//
//        System.out.println("Curso do aluno: " + aluno.getCurso());

//        Aluno a = (Aluno) pessoas.get(0);
//        System.out.println("Curso do aluno no array: " + a.getCurso());

        for(Pessoa pessoa : pessoas){
            System.out.println("========================");
            System.out.println("Nome: " + pessoa.getNome());
            System.out.println("Id: " + pessoa.getId());
            System.out.println("Senha: " + pessoa.getSenha());
            if(testarClasseExata(pessoa, Aluno.class)){
                Aluno a = (Aluno) pessoa;
                System.out.println("Curso: " + a.getCurso());
            }else if(testarClasseExata(pessoa, Professor.class)){
                Professor p = (Professor) pessoa;
                System.out.println("Area: " + p.getArea());
            }else if (testarClasseExata(pessoa, Fornecedor.class)){
                Fornecedor f = (Fornecedor) pessoa;
                System.out.println("Produtos fornecidos: " + f.getProduto());
            }else if (testarClasseExata(pessoa, Estagiario.class)){
                Estagiario e = (Estagiario) pessoa;
                System.out.println("Curso: " + e.getCurso());
                System.out.println("Bolsa: R$" + e.getBolsa());
            }


        }


    }
}

//            System.out.print("pessoa instanceof Pessoa: ");
//            System.out.println(pessoa instanceof Pessoa);
//            System.out.print("pessoa instanceof Aluno: ");
//            System.out.println(pessoa instanceof Aluno);
//Aluno a = (Aluno) pessoas.get(0);
//            System.out.print("a instanceof Aluno: ");
//            System.out.println(a instanceof Aluno);
//            System.out.print("a instanceof Pessoa: ");
//            System.out.println(a instanceof Pessoa);
//
//            System.out.print("testarClasseExata(a, Aluno.class): ");
//            System.out.println(testarClasseExata(a, Aluno.class));
//        System.out.print("testarClasseExata(a, Pessoa.class): ");
//            System.out.println(testarClasseExata(a, Pessoa.class));