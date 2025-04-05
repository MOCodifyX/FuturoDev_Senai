const numero = parseInt(prompt("Digite um número inteiro: "));
const quantidadePares = contarNumerosPares(numero);

function contarNumerosPares(numero){
    let count = 0;
    let i = 1;

    do {
        if (i % 2 == 0) {
            count++;
        }
        i++;
    }while (i <= numero);
    return count;
}

console.log(`A quantidade de números pares até ${numero} é: ${quantidadePares}`);
