import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class Main {
//    Dino(String nome, String periodo, int peso, float altura)
    public static void main(String[] args) {
        // Criar uma lista simples para demonstração
        ArrayList<Dino> lista = new ArrayList<Dino>();
        lista.add(new Dino("Espinossauro", "Cretácio Inferior", 6000, 9));
        lista.add(new Dino("Rex", "Cretácio Superior", 7000, 7));
        lista.add(new Dino("Estegossauro", "Jurássico", 5000, 4));

        // Chamar o método para gravar a lista em um arquivo JSON
        gravarListaComoJson(lista);
    }

    public static void gravarListaComoJson(List<Dino> lista) {
        // Criar um objeto Gson para serialização
        Gson gson = new GsonBuilder().setPrettyPrinting().create();

        try (FileWriter writer = new FileWriter("lista.json")) {
            // Serializar a lista em formato JSON e gravar no arquivo
            gson.toJson(lista, writer);
            System.out.println("Lista gravada como JSON com sucesso!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
