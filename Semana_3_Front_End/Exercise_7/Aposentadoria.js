let Idade;
let Sexo;
let TempoDeContribuicao;

Sexo = "Feminino"; 
Idade = 65; 
TempoDeContribuicao = 16; 

// Verificando a aposentadoria
function verificarAposentadoria() {
if (Sexo == "Feminino") {
    if (Idade >= 62) {
        if (TempoDeContribuicao >= 15) {
            console.log("Sua Aposentadoria foi Aprovada");
        } else {
            console.log("Sua Aposentadoria foi Reprovada, tempo de contribuição insuficiente.");
        }
    } else {
        console.log("Sua Aposentadoria foi Reprovada, idade insuficiente.");
    }
} 
else if (Sexo == "Masculino") {
    if (Idade >= 65) {
        if (TempoDeContribuicao >= 20) {
            console.log("Sua Aposentadoria foi Aprovada");
        } else {
            console.log("Sua Aposentadoria foi Reprovada, tempo de contribuição insuficiente.");
        }
    } else {
        console.log("Sua Aposentadoria foi Reprovada, idade insuficiente.");
    }
}
}

verificarAposentadoria();