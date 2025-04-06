
// Solicitação de dados
const numero = parseInt(prompt("Digite um número inteiro: "));

function ehPrimo(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function contarPrimos(ate) {
    let contador = 0;
    for (let num = 2; num <= ate; num++) {
        if (ehPrimo(num)) {
            contador++;
        }
    }
    return contador;
}

console.log(`Quantidade de números primos até ${numero}: ${contarPrimos(numero)}`);