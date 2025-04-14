// Seleciona os elementos do DOM
const decimalInput = document.getElementById("decimal-input");
const convertButton = document.getElementById("convert-button");
const binaryOutput = document.getElementById("binary-output");

// Adiciona um evento ao botão
convertButton.addEventListener("click", function () {
    const decimalValue = parseInt(decimalInput.value); // Converte o valor do input para número inteiro

    if (isNaN(decimalValue)) {
        binaryOutput.textContent = "Por favor, insira um número válido!";
        binaryOutput.style.color = "red";
    } else {
        const binaryValue = decimalValue.toString(2); // Converte o número para binário
        binaryOutput.textContent = `Binário: ${binaryValue}`;
        binaryOutput.style.color = "green";
    }
});
