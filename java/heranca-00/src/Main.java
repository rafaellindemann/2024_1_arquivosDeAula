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

        Fornecedor f = new Fornecedor("Casa do Vidro", 22, "2233", "Vidros");
        pessoas.add(f);

        Estagiario est = new Estagiario("Juca", 17,"1001", "DESI",1700.0f);
        pessoas.add(est);

        for(Pessoa pessoa : pessoas){
            System.out.println("============");
            System.out.println("Nome: "+pessoa.getNome());
            System.out.println("ID: "+pessoa.getId());
            System.out.println("Senha: " + pessoa.getSenha());
            System.out.println(pessoa.getClass());


            if(pessoa instanceof Professor){
                Professor prof = (Professor) pessoa;
                System.out.println("Área de atuação: " + prof.getArea());
            }else if(pessoa.getClass() == Aluno.class){
                Aluno a = (Aluno) pessoa;
                System.out.println("Curso: " + a.getCurso());
            }else if (pessoa instanceof Fornecedor fornecedor){
                System.out.println("Produtos: " + fornecedor.getProdutos());
            }else if (pessoa instanceof Estagiario e){
                System.out.println(e.getBolsa());
            }
            System.out.println("----------");
            System.out.println(pessoa.toString());
            System.out.println("----------");
        }

    }
}