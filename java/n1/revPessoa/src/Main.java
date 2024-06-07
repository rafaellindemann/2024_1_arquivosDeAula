import java.util.ArrayList;

public class Main {


    public static boolean testarClasseExata(Object objeto, Class<?> classe){
        return objeto.getClass() == classe;
    }

    public static void main(String[] args) {
        ArrayList<Pessoa> pessoas = new ArrayList<>();

        Aluno aluno = new Aluno("Gabriel Cantor", 0, "cigarro", "DESIstente");
        pessoas.add(aluno);
        System.out.println(pessoas.getFirst().teste);
        pessoas.get(0).teste = "Valor novo";

        Professor professor = new Professor("Girafales", 1, "fl0rind@", "Todas");
        pessoas.add(professor);
        System.out.println(pessoas.get(1).teste);

        Estagiario estagiario = new Estagiario("Juca", 2, "0000", "Engenharia de CSS", 1234.56f);
        pessoas.add(estagiario);
        System.out.println(pessoas.get(2).teste);

        Pessoa.olaMundo();

//        System.out.println(testarClasseExata(professor, Professor.class));
//        System.out.println(testarClasseExata(aluno, Pessoa.class));

        for(Pessoa pessoa : pessoas){
            System.out.println("============================");
            System.out.println("Nome: " + pessoa.getNome());
            System.out.println("ID: " + pessoa.getId());
            System.out.println("Senha: " + pessoa.getSenha());

            if (testarClasseExata(pessoa, Aluno.class)){
                Aluno a = (Aluno) pessoa;
                System.out.println("Curso: "+ a.getCurso());
            }else if(testarClasseExata(pessoa, Professor.class)){
                Professor p = (Professor) pessoa;
                System.out.println("Area: "+p.getArea());
            }else if (testarClasseExata(pessoa, Estagiario.class)){
                Estagiario e = (Estagiario) pessoa;
                System.out.println("Curso: " + e.getCurso());
                System.out.println("Bolsa: " + e.getBolsa());
            }
        }
    }
}