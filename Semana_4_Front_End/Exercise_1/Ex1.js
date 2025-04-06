const numero = parseInt(prompt("Digite um número inteiro: "));

function contarNumerosPrimos(numero) {
    let count = 0;

    for (let i = 2; i <= numero; i++) {
        if (ehPrimo(i)) {
            count++;
        }
    }

    return count;
}

// Função auxiliar pra verificar se um número é primo
function ehPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}


console.log(`A quantidade de números primos até ${numero} é: ${contarNumerosPrimos(numero)}`);