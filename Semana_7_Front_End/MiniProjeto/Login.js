// Definição dos temas
const temas = {
  paubrasil: {
      nomeExibicao: 'Pau Brasil',
      '--background-img': "url('./IMG/Paubrasil0.jpg')",
      '--background-color': 'rgba(255, 255, 255, 0.52)',
      '--text-color': 'white',
      '--primary-color': '#cf3939',
      '--secondary-color': '#ffffff'
  },
  castanheira: {
      nomeExibicao: 'Castanheira',
      '--background-img': "url('./IMG/Castanheira0.jpg')",
      '--background-color': 'rgba(255, 255, 255, 0.52)',
      '--text-color': 'white',
      '--primary-color': '#422d2d',
      '--secondary-color': '#ffffff'
  },
  perobarosa: {
      nomeExibicao: 'Peroba Rosa',
      '--background-img': "url('./IMG/Perobarosa0.jpg')",
      '--background-color': 'rgba(255, 255, 255, 0.52)',
      '--text-color': 'white',
      '--primary-color': '#df3b6c',
      '--secondary-color': '#ffffff'
  }
};

// Função para salvar o tema no localStorage
function salvarTema(tema) {
  localStorage.setItem('selectedTheme', tema);
}

// Função para aplicar o tema salvo
function aplicarTemaSalvo() {
  const temaSelecionado = localStorage.getItem('selectedTheme');
  if (temaSelecionado && temas[temaSelecionado]) {
      const tema = temas[temaSelecionado];
      for (let variavel in tema) {
          if (variavel.startsWith('--')) {
              document.documentElement.style.setProperty(variavel, tema[variavel]);
          }
      }
      const msgTheme = document.getElementById('msg-theme');
      if (msgTheme) {
          msgTheme.textContent = tema.nomeExibicao;
      }
  }
}

// Função para configurar os botões de troca de tema
function configurarBotoesDeTema() {
  const botoes = document.querySelectorAll('.theme-option');
  botoes.forEach((btn) => {
      btn.addEventListener('click', () => {
          const tema = btn.dataset.theme;
          salvarTema(tema);
          aplicarTemaSalvo();
      });
  });
}

// Função para capturar os dados do login
function configurarFormularioDeLogin() {
  const submitButton = document.getElementById('submit-btn-login');
  if (submitButton) {
      submitButton.addEventListener('click', (e) => {
        e.preventDefault();

          const username = document.getElementById('username').value;
          const password = document.getElementById('password').value;
          const tema = localStorage.getItem('selectedTheme');

          const dadosLogin = {
              username,
              password,
              treetheme: tema,
              TotalArvores: 0,
          };

          console.log('Json String:', JSON.stringify(dadosLogin));

          localStorage.setItem("dadosLogin", JSON.stringify(dadosLogin));

          window.location.href = "Perfil.html";

      });
  }
}

// Função principal para inicializar as configurações
function inicializar() {
  aplicarTemaSalvo();
  configurarBotoesDeTema();
  configurarFormularioDeLogin();
  atualizarFotoDePerfil();
}

// Inicializa as configurações ao carregar a página
document.addEventListener('DOMContentLoaded', inicializar);


// Classe para Dados Falsos
class DadosFake {
  constructor(username, arvoresPlantadas, ipes, angicos, aroeiras, jequitibas, perovaDoCampo, imgUsuario) {
    this.imgUsuario = imgUsuario
    this.username = username;
    this.arvoresPlantadas = arvoresPlantadas;
    this.ipes = ipes;
    this.angicos = angicos;
    this.aroeiras = aroeiras;
    this.jequitibas = jequitibas;
    this.perovaDoCampo = perovaDoCampo;
  }
}

// Criando uma instância com dados falsos
const pessoas = [
  new DadosFake("Jessica Amaral", 350, 300, 50, 0, 0, 0, "./IMG/red2.jpg"),
  new DadosFake("Carlos Silva", 210, 0, 200, 10, 0, 0, "./IMG/brown1.jpg"),
  new DadosFake("Ana Costa", 180, 0, 0, 180, 0, 0, "./IMG/pink1.jpg"),
  new DadosFake("Lucas Ferreira", 400, 0, 0, 0, 300, 100, "./IMG/red2.jpg"),
  new DadosFake("Mariana Rocha", 275, 0, 0, 0, 0, 175, "./IMG/brown1.jpg"),
  new DadosFake("Rafael Lima", 125, 100, 25, 0, 0, 0, "./IMG/pink1.jpg"),
  new DadosFake("Fernanda Nunes", 390, 0, 0, 300, 0, 90, "./IMG/red2.jpg"),
  new DadosFake("Eduardo Ramos", 720, 0, 0, 0, 700, 20, "./IMG/pink1.jpg"),
  new DadosFake("Gabriel Souza", 290, 0, 0, 0, 0, 0, "./IMG/brown1.jpg"),
  new DadosFake("Lívia Martins", 1150, 0, 1000, 0, 150, 0, "./IMG/red3.jpg"),
  new DadosFake("Pedro Almeida", 310, 10, 300, 0, 0, 0, "./IMG/pink2.jpg"),
  new DadosFake("Juliana Castro", 2205, 2000, 200, 5, 0, 0, "./IMG/brown4.jpg"),
  new DadosFake("Thiago Moreira", 260, 60, 0, 200, 0, 0, "./IMG/red1.jpg"),
  new DadosFake("Sofia Barbosa", 330, 0, 300, 0, 0, 30, "./IMG/pink2.jpg"),
];

// Transformando os dados em JSON 
const JsonDadosFake = JSON.stringify(pessoas);

// Consumindo os dados diretamente do array 'pessoas'
if (window.location.pathname.includes('Destaques.html')) {
  console.log("Dados Recebidos", pessoas); // Exibe os dados no console

  const telaDestaques = document.getElementById("tela-destaques"); // Seleciona o elemento onde os posts serão exibidos

  const top3 = pessoas.sort((a, b) => b.arvoresPlantadas - a.arvoresPlantadas).slice(0, 3);

  top3.forEach((post) => {
    telaDestaques.innerHTML += `
      <div class="destaque-pessoa">
        <div class="destaque-coluna1">
          <img src="${post.imgUsuario}" alt="Imagem de uma árvore" id="tree-img-destaques">
        </div>
        <div class="destaque-coluna2">
          <h1>${post.username}</h1>
          <p>🌳 Árvores Plantadas: ${post.arvoresPlantadas}</p>
        </div>
      </div>
    `;
  });
}

// BIO DO PERFIL

//mostrando dados no perfil
const dados = JSON.parse(localStorage.getItem("dadosLogin"));
const dadosPerfil = document.querySelector(".dados-perfil");

if (dadosPerfil && dados) {
  dadosPerfil.innerHTML = `
    <h1>Informações da Conta</h1>
    <p>Nome: ${dados.username}</p>
    <p><strong>Email:</strong> ${dados.email || "Não informado"}</p>
    <p><strong>Telefone:</strong> ${dados.telefone || "Não informado"}</p>
    <p><strong>Data de Nascimento:</strong> ${dados.dataNascimento || "Não informado"}</p>
    <p><strong>Quantidade de Árvores Plantadas:</strong> ${dados.TotalArvores}</p>
  `;
}

console.log(localStorage.getItem("dadosLogin"));

if (window.location.pathname.includes('Perfil.html')) {

document.addEventListener('DOMContentLoaded', () => {
  const bioDisplay = document.getElementById('bio-display');
  const saveButton = document.getElementById('save-bio-btn');

  // Carregar bio salva ao carregar a página
  const carregarBio = () => {
      const bioSalva = localStorage.getItem('userBio');
      if (bioSalva) {
          bioDisplay.textContent = bioSalva;
      }
  };

  // Salvar a bio no localStorage
  const salvarBio = () => {
      const novaBio = bioDisplay.textContent; // Captura o texto editado
      localStorage.setItem('userBio', novaBio); // Salva no localStorage
      alert('Bio salva com sucesso!');
  };

  // Evento para salvar a bio
  saveButton.addEventListener('click', salvarBio);

  carregarBio(); // Carregar bio ao iniciar
})
};

// REGISTRO ARVORES PLANTADAS

// Função simples para registrar árvores plantadas
if (window.location.pathname.includes('Registro.html')) {
  document.addEventListener('DOMContentLoaded', () => {
    const registrarArvorePlantadaButton = document.getElementById('submit-btn-registrar');

    if (registrarArvorePlantadaButton) {
      registrarArvorePlantadaButton.addEventListener('click', (e) => {
        e.preventDefault();

        const input = document.getElementById('totalArvores');
        const novasArvores = parseInt(input.value, 10) || 0; 

        let dadosLogin = JSON.parse(localStorage.getItem('dadosLogin')) || { TotalArvores: 0 };

        // Soma das árvores plantadas
        dadosLogin.TotalArvores += novasArvores;

        // Atualiza o localStorage
        localStorage.setItem('dadosLogin', JSON.stringify(dadosLogin));

        alert(`Total de árvores atualizadas: ${dadosLogin.TotalArvores}`);
        location.reload();
      });
    }
  });
}



// Função para atualizar a foto de perfil
function atualizarFotoDePerfil() {
  // Obtém os dados do localStorage
  const dadosLogin = JSON.parse(localStorage.getItem('dadosLogin')) || { TotalArvores: 0 };
  const tema = (localStorage.getItem('selectedTheme')).toLowerCase();

    const temaParaArquivo = {
      paubrasil: 'red',
      castanheira: 'brown',
      perobarosa: 'pink',
    };

    const NomeCorreto = temaParaArquivo[tema];

  // Seleciona o elemento da imagem de perfil
  const imgPerfil = document.getElementById('tree-img-perfil');

  // Verifica se a imagem de perfil existe
  if (imgPerfil) {
    let imgPath = '';
    if (dadosLogin.TotalArvores >= 1500) {
      imgPath = `./IMG/${NomeCorreto}4.jpg`;

    } else if (dadosLogin.TotalArvores >= 700) {
      imgPath = `./IMG/${NomeCorreto}3.jpg`;

    } else if (dadosLogin.TotalArvores >= 300) {
      imgPath = `./IMG/${NomeCorreto}2.jpg`;

    } else {
      imgPath = `./IMG/${NomeCorreto}1.jpg`;
    }
    // Atribui o caminho gerado ao atributo src
    console.log(`Caminho gerado para a imagem: ${imgPath}`); 
    imgPerfil.src = imgPath;

    document.addEventListener('DOMContentLoaded', atualizarFotoDePerfil);
    }
  }

// RELATORIOS

// Função para exibir os dados na lista
const exibirDados = (dados) => {
  const telaDestaques = document.getElementById("lista-relatorio");
  telaDestaques.innerHTML = ""; // Limpa a lista
  dados.forEach((post) => {
    telaDestaques.innerHTML += `
      <div class="destaque-pessoa">
        <div class="destaque-coluna1">
          <img src="${post.imgUsuario}" alt="Imagem de uma árvore" id="tree-img-destaques">
        </div>
        <div class="destaque-coluna2">
          <h1>${post.username}</h1>
          <p>🌳 Árvores Plantadas: ${post.arvoresPlantadas}</p>
          <p>🌳 Ipês: ${post.ipes}</p>
          <p>🌳 Angicos: ${post.angicos}</p>
          <p>🌳 Aroeiras: ${post.aroeiras}</p>
          <p>🌳 Jequitibás: ${post.jequitibas}</p>
          <p>🌳 Peroba do Campo: ${post.perovaDoCampo}</p>
        </div>
      </div>
    `;
  });
};

// Exibe todos os dados inicialmente
exibirDados(pessoas);

// Filtro por nome do usuário
const userSearchInput = document.getElementById("user-search"); // Campo de busca por usuário
if (userSearchInput) {
  userSearchInput.addEventListener("input", (e) => {
    const searchValue = e.target.value.toLowerCase();
    const filteredData = pessoas.filter((post) =>
      post.username.toLowerCase().includes(searchValue)
    );
    exibirDados(filteredData);
  });
}

// Filtro por tipo de árvore
const treeTypeSelect = document.getElementById("tree-type-search"); // Dropdown para filtro por tipo de árvore
if (treeTypeSelect) {
  treeTypeSelect.addEventListener("change", (e) => {
    const selectedTreeType = e.target.value;
    if (selectedTreeType) {
      const filteredData = pessoas.filter((post) => post[selectedTreeType] > 0);
      exibirDados(filteredData);
    } else {
      exibirDados(pessoas); // Exibe todos os dados se nenhum tipo for selecionado
    }
  });
}