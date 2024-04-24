import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.FileWriter;
import com.google.gson.reflect.TypeToken;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        // Criar uma lista simples para demonstração
        ArrayList<Dino> lista = new ArrayList<>();
        lista.add(new Dino("Espinossauro", "Cretácio Inferior", 6000, 9));
        lista.add(new Dino("Rex", "Cretácio Superior", 7000, 7));
        lista.add(new Dino("Estegossauro", "Jurássico", 5000, 4));

        // Chamar o método para gravar a lista em um arquivo JSON
        //gravarListaComoJson(lista);

        // Chamar o método para ler o arquivo JSON e obter a lista de volta
        List<Dino> listaLida = lerListaDeJson();
        if (listaLida != null) {
            System.out.println("Lista lida do arquivo JSON:");
            for (Dino dino : listaLida) {
                System.out.println(dino.getNome());
            }
        }
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

    public static List<Dino> lerListaDeJson() {
        List<Dino> lista = new ArrayList<>();

        try (BufferedReader reader = new BufferedReader(new FileReader("lista.json"))) {
            // Criar um objeto Gson para desserialização
            Gson gson = new GsonBuilder().create();

            // Ler o JSON do arquivo e converter para uma lista de objetos Dino
            Type tipoLista = new TypeToken<ArrayList<Dino>>() {}.getType();
            lista = gson.fromJson(reader, tipoLista);

            System.out.println("Lista lida do arquivo JSON com sucesso!");
        } catch (IOException e) {
            e.printStackTrace();
        }

        return lista;
    }
}
