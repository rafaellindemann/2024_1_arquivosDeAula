let receitas = [
    {
        nome: "Bolo de Chocolate",
        ingredientes: [
            { nome: "Chocolate em Pó", quantidade: 200, unidade: "g" },
            { nome: "Farinha de Trigo", quantidade: 250, unidade: "g" },
            { nome: "Açúcar", quantidade: 200, unidade: "g" }
        ],
        modoDePreparo: "1. Misture todos os ingredientes secos. 2. Adicione os líquidos. 3. Asse por 40 minutos."
    },
    {
        nome: "Risoto de Funghi",
        ingredientes: [
            { nome: "Arroz Arbóreo", quantidade: 300, unidade: "g" },
            { nome: "Funghi Seco", quantidade: 100, unidade: "g" },
            { nome: "Caldo de Legumes", quantidade: 500, unidade: "ml" }
        ],
        modoDePreparo: "1. Hidrate o funghi. 2. Refogue o arroz com o funghi. 3. Adicione o caldo aos poucos até o arroz ficar al dente."
    },
    {
        nome: "Salada de Frutas",
        ingredientes: [
            { nome: "Banana", quantidade: 2, unidade: "un" },
            { nome: "Maçã", quantidade: 2, unidade: "un" },
            { nome: "Laranja", quantidade: 2, unidade: "un" }
        ],
        modoDePreparo: "1. Corte as frutas em pedaços. 2. Misture tudo em uma tigela. 3. Sirva gelado."
    }
];

function mostrarCadastro() {
    document.getElementById("cadastro").style.display = "block";
    document.getElementById("pesquisa").style.display = "none";
}

function mostrarPesquisa() {
    document.getElementById("cadastro").style.display= "none";
    document.getElementById("pesquisa").style.display = "block";
}

function adicionarIngrediente() {
    const divIngredientes = document.getElementById("ingredientes");
    const divNovoIngrediente = document.createElement("div");
    divNovoIngrediente.innerHTML = `
        <input type="text" class="ingrediente" placeholder="Nome do Ingrediente">
        <input type="number" class="ingrediente" placeholder="Quantidade">
        <input type="text" class="ingrediente" placeholder="Unidade">
        <button onclick="adicionarIngrediente()">+</button>
    `;
    divIngredientes.appendChild(divNovoIngrediente);
}

function cadastrarReceita() {
    let receita = {
        nome: document.getElementById('nome').value,
        modoDePreparo: document.getElementById('modoPreparo').value,
        ingredientes: []
    }
    for(i=1;i<=3;i++){
        if(document.getElementById(`inpNomeIngrediente${i}`).value != ''){
            receita.ingredientes.push({
                nome: document.getElementById(`inpNomeIngrediente${i}`).value,
                quantidade: document.getElementById(`inpQuantidade${i}`).value,
                unidade: document.getElementById(`inpUnidade${i}`).value,
            })
        }
    }

    receitas.push(receita)
    
    alert("Receita cadastrada com sucesso!");
}

function pesquisarReceita() {
    const nomePesquisa = document.getElementById("pesquisaNome").value.toLowerCase();
    const resultadoPesquisa = receitas.filter(receita => receita.nome.toLowerCase().includes(nomePesquisa));
    const divResultado = document.getElementById("resultadoPesquisa");
    divResultado.innerHTML = "";
    if (resultadoPesquisa.length === 0) {
        divResultado.innerHTML = "<p>Nenhuma receita encontrada.</p>";
    } else {
        resultadoPesquisa.forEach(receita => {
            const divReceita = document.createElement("div");
            divReceita.innerHTML = `
                <h3>${receita.nome}</h3>
                <p><strong>Ingredientes:</strong></p>
                <ul>
                    ${receita.ingredientes.map(ingrediente => `<li>${ingrediente.nome} - ${ingrediente.quantidade} ${ingrediente.unidade}</li>`).join('')}
                </ul>
                <p><strong>Modo de Preparo:</strong></p>
                <p>${receita.modoDePreparo}</p>
                <button onclick="editarReceita('${receita.nome}')">Editar</button>
                <button onclick="deletarReceita('${receita.nome}')">Deletar</button>
            `;
            divResultado.appendChild(divReceita);
        });
    }
}

function editarReceita(nomeReceita) {
    // Aqui você pode adicionar a lógica para editar a receita com o nome especificado
    alert(`Editando a receita: ${nomeReceita}`);
}

function deletarReceita(nomeReceita) {
    // Aqui você pode adicionar a lógica para deletar a receita com o nome especificado
    alert(`Deletando a receita: ${nomeReceita}`);
}