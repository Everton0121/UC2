
const readlineSync = require('readline-sync');


// Banco de dados de Pokémons disponíveis
const pokemonsDisponiveis = [
    { nome: 'Pikachu', tipo: 'Eletrico', nivel: 5, geracao: 1 },
    { nome: 'Raichu', tipo: 'Eletrico', nivel: 10, geracao: 1 },
    { nome: 'Charmander', tipo: 'Fogo', nivel: 10, geracao: 1 },
    { nome: 'Bulbasaur', tipo: 'Planta', nivel: 5, geracao: 1 },
    { nome: 'Squirtle', tipo: 'agua', nivel: 5, geracao: 1 },
    { nome: 'Eevee', tipo: 'Normal', nivel: 5, geracao: 1 },
    { nome: 'Mareep', tipo: 'Eletrico', nivel: 5, geracao: 2 },
    { nome: 'Flaaffy', tipo: 'Eletrico', nivel: 10, geracao: 2 },
    { nome: 'Electrike', tipo: 'Eletrico', nivel: 5, geracao: 3 },
    { nome: 'Manectric', tipo: 'Eletrico', nivel: 10, geracao: 3 },
  ];
  
  // Mochila do treinador
  const mochila = [];
  
  // Função para exibir o menu principal
  function exibirMenu(){
    let opcao;
    while(true){
    opcao = readlineSync.questionInt("Escola uma opcao: \n1. Adicionar Pokemon a mochila \n2. Ver Pokemons na mochila \n3. Remover Pokemon da mochila \n4. Sair\n")
    
  
    switch (opcao) {
      case '1':
        adicionarPokemon();
        break;
      case '2':
        verMochila();
        break;
      case '3':
        removerPokemon();
        break;
        case 4:
            console.log("Saindo....")
            return // Encerra a função, saindo do loop
            default:
                console.log("Opcao Invalida!")
                break   
    }
    }
  }
  
  // Função para adicionar Pokémon à mochila
  function adicionarPokemon() {
    if (mochila.length >= 6) {
      alert('Sua mochila já está cheia. Não é possível adicionar mais Pokémons.');
      exibirMenu();
      return;
    }
  
    const tipoEscolhido = prompt(`Escolha um tipo de Pokémon:
  1. Elétrico
  2. Fogo
  3. Água
  4. Planta
  5. Normal`);
  
    let tipo;
    switch (tipoEscolhido) {
      case '1':
        tipo = 'Elétrico';
        break;
      case '2':
        tipo = 'Fogo';
        break;
      case '3':
        tipo = 'Água';
        break;
      case '4':
        tipo = 'Planta';
        break;
      case '5':
        tipo = 'Normal';
        break;
      default:
        alert('Opcao invalida.');
        adicionarPokemon();
        return;
    }
  
    const geracaoEscolhida = prompt(`Escolha uma geracao de Pokemon:
  1. Geracao 1
  2. Geracao 2
  3. Geracao 3`);
  
    let geracao;
    switch (geracaoEscolhida) {
      case '1':
        geracao = 1;
        break;
      case '2':
        geracao = 2;
        break;
      case '3':
        geracao = 3;
        break;
      default:
        alert('Opcao invalida.');
        adicionarPokemon();
        return;
    }
  
    const pokemonsFiltrados = pokemonsDisponiveis.filter(
      (pokemon) => pokemon.tipo === tipo && pokemon.geracao === geracao
    );
  
    if (pokemonsFiltrados.length === 0) {
      alert(`Nao ha Pokemons disponíveis para o tipo ${tipo} e geracao ${geracao}.`);
      exibirMenu();
      return;
    }
  
    let listaPokemons = '';
    pokemonsFiltrados.forEach((pokemon, index) => {
      listaPokemons += `${index + 1}. ${pokemon.nome} - Nivel: ${pokemon.nivel}\n`;
    });
  
    const escolhaPokemon = prompt(`Escolha um Pokemon para adicionar a mochila:\n${listaPokemons}`);
  
    const pokemonEscolhido = pokemonsFiltrados[parseInt(escolhaPokemon) - 1];
  
    if (pokemonEscolhido) {
      mochila.push(pokemonEscolhido);
      alert(`${pokemonEscolhido.nome} foi adicionado a sua mochila!`);
    } else {
      alert('Escolha invalida.');
    }
  
    exibirMenu();
  }
  
  // Função para ver os Pokémons na mochila
  function verMochila() {
    if (mochila.length === 0) {
      alert('Sua mochila está vazia.');
    } else {
      let listaMochila = 'Pokemons na mochila:\n';
      mochila.forEach((pokemon, index) => {
        listaMochila += `${index + 1}. ${pokemon.nome} - Tipo: ${pokemon.tipo}, Nível: ${pokemon.nivel}\n`;
      });
      alert(listaMochila);
    }
  
    exibirMenu();
  }
  
  // Função para remover Pokémon da mochila
  function removerPokemon() {
    if (mochila.length === 0) {
      alert('Sua mochila está vazia.');
      exibirMenu();
      return;
    }
  
    let listaMochila = 'Escolha um Pokémon para remover:\n';
    mochila.forEach((pokemon, index) => {
      listaMochila += `${index + 1}. ${pokemon.nome} - Tipo: ${pokemon.tipo}, Nível: ${pokemon.nivel}\n`;
    });
  
    const escolhaRemover = prompt(listaMochila);
  
    const pokemonRemover = mochila[parseInt(escolhaRemover) - 1];
  
    if (pokemonRemover) {
      const index = mochila.indexOf(pokemonRemover);
      mochila.splice(index, 1);
      alert(`${pokemonRemover.nome} foi removido da sua mochila.`);
    } else {
      alert('Escolha inválida.');
    }
  
    exibirMenu();
  }
  
  // Iniciar o programa
  exibirMenu();
  