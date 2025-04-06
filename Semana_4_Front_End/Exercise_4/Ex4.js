const num1 = parseInt(prompt("Digite o Primeiro número: "));
const num2 = parseInt(prompt("Digite o Segundo número: "));

//Funções
const soma = (num1, num2) => num1 + num2;
const subtracao = (num1, num2) => num1 - num2;

let opcao = 0;

console.log("Atividade M1S04 - Arrow Function");

do{
    console.log("[1] Soma \n[2] Subtração \n[3] Sair");
    opcao = prompt("Escolha uma Opção: ");

    switch(opcao){
        case "1":
            console.log(`A soma de ${num1} + ${num2} = ${soma(num1, num2)}`);
            break;
        case "2":
            console.log(`A subtração de ${num1} - ${num2} = ${subtracao(num1, num2)}`);
            break;
        case "3":
            console.log("Saindo...");
            break;
        default:
            console.log("Opção Invalida");
    }
} while (opcao !== "3");