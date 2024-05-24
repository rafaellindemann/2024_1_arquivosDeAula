import javax.xml.transform.Source;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Pessoa> pessoas = new ArrayList<>();

        Aluno aluno1 = new Aluno("Jozefina", 1, "1234", "História");
//        System.out.println(aluno1.getCurso());
//        System.out.println(aluno1.getNome());
        pessoas.add(aluno1);
//        System.out.println( pessoas.getFirst().getNome() );
//        System.out.println( pessoas.getFirst().getId() );
//        System.out.println( pessoas.getFirst().getSenha() );

        Aluno aluno2 = (Aluno) pessoas.getFirst();
//        System.out.println(aluno2.getCurso());

        Professor prof1 = new Professor("Gleimon",2,"#Rb9*4--Lol","BD");
        pessoas.add(prof1);

        Aluno aluno3 = new Aluno("Flash", pessoas.size()+1,
                "onibus","React de vídeo de K pop");
        pessoas.add(aluno3);

        Professor profe2 = new Professor("Tia Vera", 4, "3,14xr2",
                "Matemática");
        pessoas.add(profe2);

        for(Pessoa p : pessoas){
            System.out.println("-----------");
            System.out.println(pessoas.indexOf(p));
            System.out.println(p.getNome());
            System.out.println(p.getId());
            System.out.println(p.getSenha());
            if( p.getClass() == Aluno.class){
//                System.out.println(p.getNome() + " é aluno");
                Aluno al1 = (Aluno) p;
                System.out.println(al1.getCurso());
            }else if(p.getClass() == Professor.class){
                Professor p1 = (Professor) p;
                System.out.println(p1.getArea());
            }
        }
    }
}

