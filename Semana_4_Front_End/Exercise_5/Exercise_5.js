//Entrada de Dados
const num1 = parseInt(prompt("Digite o Primeiro número: "));
const num2 = parseInt(prompt("Digite o Segundo número: "));

// SOMA
const soma = (num1, num2) => num1 + num2;
//SUBTRAÇÃO
const subtracao = (num1, num2) => num1 - num2;
//PARES

//IMPARES

//PRIMOS


let opcao = 0;

do{
    console.log(`[1] Somar dois números
        [2] Subtrair dois números
        [3] Buscar quantidade de números pares
        [4] Buscar quantidade de números ímpares
        [5] Buscar quantidade de números primos
        [6] Sair.`);

        opcao = prompt("Escolha uma Opção: ");

        switch(opcao) {
            case "1":
                console.log(`A soma de ${num1} + ${num2} = ${soma(num1, num2)}`);
                break;
            case "2":
                console.log(`A subtração de ${num1} - ${num2} = ${subtracao(num1, num2)}`);
                break;
            case "3":
                // Lógica para buscar quantidade de números pares
                break;
            case "4":
                // Lógica para buscar quantidade de números ímpares
                break;
            case "5":
                // Lógica para buscar quantidade de números primos
                break;
            case "6":
                console.log("Saindo...");
                break;
            default:
                console.log("Opção Inválida");
        }
    } while (opcao !== "6");