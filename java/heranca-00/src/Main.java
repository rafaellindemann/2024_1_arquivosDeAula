import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<Pessoa> pessoas = new ArrayList<Pessoa>();
        // Criando um aluno
        Aluno aluno = new Aluno("João", 1001, "senha123", "Ciência da Computação");
        aluno.fazerMatricula();
        aluno.mudarSenha("novaSenha123");
        pessoas.add(aluno);

        // Criando um professor
        Professor professor = new Professor("Maria", 2001, "senha456", "Matemática");
        professor.fazerChamada();
        professor.mudarSenha("outraNovaSenha456");
        pessoas.add(professor);

        Pessoa p = new Pessoa("João Pessoa", 111, "1234");
        System.out.println(p.getNome());

        pessoas.add(p);

        for(Pessoa pessoa : pessoas){
            System.out.println("============");
            System.out.println(pessoa.getNome());
            System.out.println(pessoa.getClass());
        }

    }
}