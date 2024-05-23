import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        ArrayList<Pessoa> pessoas = new ArrayList<>();
        Aluno aluno = new Aluno("Dalison",1, "1234", "Des. de Sistemas");
        aluno.fazerMatricula("Mecânica de foguetes");
        pessoas.add(aluno);
        System.out.println(pessoas.getFirst().getSenha());
        System.out.println(aluno.getNome());
        System.out.println(aluno.getCurso());

        Professor professor = new Professor("Likas", 2, "1357", "Sistemas");
        pessoas.add(professor);

        aluno = new Aluno("Flash", 3, "2468", "React a vídeos de K pop");
        pessoas.add(aluno);

        professor = new Professor("Jack", pessoas.size()+1, "0000", "Spring");
        pessoas.add(professor);

//        Aluno a = (Aluno) pessoas.getFirst();
//        System.out.println("Curso da primeira pessoa: " + a.getCurso());

        System.out.println("=========================");
        for (Pessoa p : pessoas){
            System.out.println(p.getNome());
            System.out.println(p.getId());
            System.out.println(p.getSenha());
            if(p instanceof Aluno){
                Aluno a = (Aluno) p;
                System.out.println(a.getCurso());
//            }else if(p instanceof Professor){
            }else if(p.getClass() == Professor.class){
                Professor profe = (Professor) p;
                System.out.println(profe.getArea());
            }

            System.out.println("--------------");
        }
    }
}