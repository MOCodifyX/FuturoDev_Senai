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
  constructor(username, arvoresPlantadas) {
    this.username = username;
    this.arvoresPlantadas = arvoresPlantadas;
  }
}

// Criando uma instância com dados falsos
let pessoa1 = new DadosFake("Jessica Amaral", 350);
let pessoa2 = new DadosFake("Carlos Silva", 210);
let pessoa3 = new DadosFake("Ana Costa", 180);

// Transformando os dados em JSON (simulação)
const JsonDadosFake = JSON.stringify([pessoa1, pessoa2, pessoa3]);

// Simulando um "fetch" com os dados locais
const fakeFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(JSON.parse(JsonDadosFake)); // Retorna os dados parseados como JSON
  }); 
});

// Consumindo os dados simulados
if (window.location.pathname.includes('Destaques.html')) {

fakeFetch
  .then((data) => {
    console.log("Dados Recebidos", data); // Exibe os dados no console

    const telaDestaques = document.getElementById("tela-destaques"); // Seleciona o elemento onde os posts serão exibidos

    const top3 = data.sort((a, b) => b.arvoresPlantadas - a.arvoresPlantadas).slice(0, 3);

    top3.forEach((post) => {
      telaDestaques.innerHTML += `
        <div class="destaque-pessoa">
          <div class="destaque-coluna1">
            <img src="./IMG/pink1.jpg" alt="Imagem de uma árvore" id="tree-img-destaques">
          </div>
          <div class="destaque-coluna2">
            <h1>${post.username}</h1>
            <p>🌳 Árvores Plantadas: ${post.arvoresPlantadas}</p>
          </div>
        </div>
      `;
    });
  });
}

//
//
//
// BIO DO PERFIL
//
//
//

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

//
//
//
// REGISTRO ARVORES PLANTADAS
//
//
//

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



