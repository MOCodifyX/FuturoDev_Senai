//Seleção de elementos HTML
const nicknameInput = document.getElementById("nickname");
const startButton = document.querySelector(".tela-login button");
const playerNameSpan = document.getElementById("player-name");
const gameScreen = document.querySelector(".tela-jogo-da-forca");
const loginScreen = document.querySelector(".tela-login");

const wordDisplay = document.getElementById("word-display");

const letterInput = document.getElementById("letter");
const guessButton = document.getElementById("guess-button");
const wrongLettersSpan = document.getElementById("wrong-letters");
const congratulationsScreen = document.querySelector(".tela-jogar-novamente");

const playAgainButton = document.getElementById("play-again");

//Evento para Iniciar o Jogo
startButton.addEventListener("click", () => {
    const nickname = nicknameInput.value.trim(); // Remove espaços em branco no início e no final

    if (nickname) {
        playerNameSpan.textContent = nickname; // Atualiza o nome do jogador na tela do jogo
        loginScreen.style.display = "none"; // Esconde a tela de login
        gameScreen.style.display = "flex"; // Mostra a tela do jogo

        startGame(); // Inicia o jogo
    } else {
        alert("Por favor, insira um nome de jogador"); // Alerta se o nome não for válido
    }
});

// Lista de palavras para o jogo
const words = [
    "HIDROGENIO", "HELIO", "LITIO", "BERILIO", "BORO", "CARBONO", "NITROGENIO", 
    "OXIGENIO", "FLUOR", "NEONIO", "SODIO", "MAGNESIO", "ALUMINIO", "SILICIO",
    "FOSFORO", "ENXOFRE", "CLORO", "ARGONIO", "POTASSIO", "CALCIO", "ESCANDIO",
    "TITANIO", "VANADIO", "CROMO", "MANGANES", "FERRO", "COBALTO", "NIQUEL", 
    "COBRE", "ZINCO"
];

  //Declaração de variáveis do jogo
let selectedWord = ""; // Palavra escolhida
let correctLetters = []; // Letras corretas

//função para iniciar o jogo
function startGame() {

    selectedWord = words[Math.floor(Math.random() * words.length)]; // Seleciona uma palavra aleatória
    console.log("Palavra escolhida:", selectedWord);
    correctLetters = []; // Reinicia as letras corretas
    wrongLetters = []; // Reinicia as letras erradas
    updateWordDisplay(); // Atualiza a exibição da palavra
    updateWrongLettersDisplay(); // Atualiza a exibição das letras erradas

}

//Função para atualizar a exibição da palavra
function updateWordDisplay() {
    const display = selectedWord
    .split("") // Divide a palavra em letras
    .map(letter => (correctLetters.includes(letter) ? letter : "_")) // Substitui letras não adivinhadas por "_"
    .join(" "); // Junta as letras com espaços

    wordDisplay.textContent = display; // Atualiza o elemento HTML com a exibição da palavra
}

//Declarando variavel para letras erradas
let wrongLetters = [];

//Evento para processar o chute do jogador
guessButton.addEventListener("click", () => {
    const guessedLetter = letterInput.value.toUpperCase(); // Transforma a letra em maiúscula

    //Valição da Letra Correta
    if (guessedLetter.match(/^[A-Z]$/)) { // Verifica se a letra é válida
        if (selectedWord.includes(guessedLetter)) {
            if (!correctLetters.includes(guessedLetter)) {
                correctLetters.push(guessedLetter); // Adiciona às letras corretas
                updateWordDisplay(); // Atualiza a palavra exibida
                checkWinCondition(); // Verifica se o jogador venceu       
            } else {
                alert("Você já adivinhou essa letra!"); // Alerta se a letra já foi adivinhada
            }
        } else {
        // Validação da letra errada
            if (!wrongLetters.includes(guessedLetter)) {
                wrongLetters.push(guessedLetter); // Adiciona às letras erradas
                updateWrongLettersDisplay(); // Atualiza as letras erradas exibidas
            } else {
                alert("Você já chutou essa letra errada!");
            }
        } 
    }

    //limpa o campo de entrada da letra
    letterInput.value = ""; // Limpa o campo de entrada
    letterInput.focus(); // Foca no campo de entrada
});

// Atualiza a exibição das letras erradas
function updateWrongLettersDisplay() {
    wrongLettersSpan.textContent = wrongLetters.join(", "); 
}

// Verifica se o Jogador venceu
function checkWinCondition() {
    if (selectedWord.split("").every(letter => correctLetters.includes(letter))) {
        document.getElementById("final-word").textContent = selectedWord; // Mostra a palavra final
        gameScreen.style.display = "none"; // Esconde a tela do jogo 
        congratulationsScreen.style.display = "flex"; // Mostra a tela de vitória
    }
}

// Evento para reiniciar o jogo
playAgainButton.addEventListener("click", () => {
    congratulationsScreen.style.display = "none"; // Esconde a tela de vitória
    gameScreen.style.display = "flex"; // Mostra a tela do jogo
    startGame(); // Reinicia o jogo
});

