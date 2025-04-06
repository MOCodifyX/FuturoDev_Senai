//FUNÇOES

// SOMA
const soma = (num1, num2) => num1 + num2;

//SUBTRAÇÃO
const subtracao = (num1, num2) => num1 - num2;

//PARES
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

//IMPARES
function contarNumerosImpares(numero){
    let count = 0;
    let i = 1;

    do {
        if (i % 2 != 0) {
            count++;
        }
        i++;
    }while (i <= numero);
    return count;
}

//PRIMOS
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

//MENU
let opcao = 0;

do{
    console.log(`
        [1] Somar dois números
        [2] Subtrair dois números
        [3] Buscar quantidade de números pares
        [4] Buscar quantidade de números ímpares
        [5] Buscar quantidade de números primos
        [6] Sair.`);

        opcao = prompt("Escolha uma Opção: ");

    switch (opcao) {
        case "1": {
            const num1 = parseInt(prompt("Digite o Primeiro número: "));
            const num2 = parseInt(prompt("Digite o Segundo número: "));
            console.log(`A soma de ${num1} + ${num2} = ${soma(num1, num2)}`);
            break;
        }
        case "2": {
            const num1 = parseInt(prompt("Digite o Primeiro número: "));
            const num2 = parseInt(prompt("Digite o Segundo número: "));
            console.log(`A subtração de ${num1} - ${num2} = ${subtracao(num1, num2)}`);
            break;
        }
        case "3": {
            const numero = parseInt(prompt("Digite um número inteiro: "));
            console.log(`A quantidade de números pares até ${numero} é: ${contarNumerosPares(numero)}`);
            break;
        }
        case "4": {
            const numero = parseInt(prompt("Digite um número inteiro: "));
            console.log(`A quantidade de números ímpares até ${numero} é: ${contarNumerosImpares(numero)}`);
            break;
        }
        case "5": {
            const numero = parseInt(prompt("Digite um número inteiro: "));
            console.log(`A quantidade de números primos até ${numero} é: ${contarNumerosPrimos(numero)}`);
            break;
        }
        case "6":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção Inválida");
    }
} while (opcao !== "6");
