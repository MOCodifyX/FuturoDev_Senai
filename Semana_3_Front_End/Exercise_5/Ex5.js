// Variáveis Declaradas
let nomeFuncionario;
let horasTrabalhadas;
let setorFuncionario;
let valorHora;
let horasExtras;
let salario;

// Exemplo de valores das variáveis
nomeFuncionario = "João Silva";
horasTrabalhadas = 250;
setorFuncionario = "GE";
valorHora = 50;
salario = 0;
horasExtras = 0;

// Cálculo de Horas Extras
if (horasTrabalhadas > 220 && setorFuncionario != "GE") {
    horasExtras = horasTrabalhadas - 220;
}

// Função para calcular o salário base
function SalarioBase(setorFuncionario, valorHora) {
    let salarioBase = 0;

    if (setorFuncionario == "OP") {
        salarioBase = valorHora * 220;
    } else if (setorFuncionario == "AD") {
        salarioBase = (valorHora * 220) * 1.10;
    } else if (setorFuncionario == "GE") {
        salarioBase = (valorHora * 220) * 1.25;
    }

    return salarioBase;
}

// Função para calcular o salário por hora
function SalarioHora(salarioBase, horasTrabalhadas) {
    return salarioBase / horasTrabalhadas;
}

// Função para somar as horas extras ao salário
function SomaHorasExtras(horasTrabalhadas, horasExtras, setorFuncionario, valorHora) {
    let salario = 0;
    let salarioBase = SalarioBase(setorFuncionario, valorHora);
    let salarioHora = SalarioHora(salarioBase, horasTrabalhadas);

    if (horasExtras > 0 && setorFuncionario == "OP") {
        salario = salarioBase + (horasExtras * valorHora * 2); 
    } else if (horasTrabalhadas < 220 && setorFuncionario == "OP") {
        salario = horasTrabalhadas * salarioHora; 
    } else if (horasExtras > 0 && setorFuncionario == "AD") {
        salario = salarioBase + (horasExtras * valorHora * 2); 
    } else if (horasTrabalhadas < 220 && setorFuncionario == "AD") {
        salario = horasTrabalhadas * salarioHora; 
    } else if (horasTrabalhadas >= 220 && setorFuncionario == "GE") {
        salario = salarioBase; 
    } else if (horasTrabalhadas < 220 && setorFuncionario == "GE") {
        salario = horasTrabalhadas * salarioHora; 
    }

    return salario;
}

// Cálculo do salário total
let salarioBase = SalarioBase(setorFuncionario, valorHora);
let salarioPorHora = SalarioHora(salarioBase, horasTrabalhadas);
salario = SomaHorasExtras(horasTrabalhadas, horasExtras, setorFuncionario, valorHora);

// Exibição dos dados no console
console.log(`Funcionário: ${nomeFuncionario}`);
console.log(`Setor: ${setorFuncionario}`);
console.log(`Horas trabalhadas: ${horasTrabalhadas}`);
console.log(`Horas Extras: ${horasExtras}`);
console.log(`Valor por hora: R$ ${valorHora}`);
console.log(`Salário Base: R$ ${salarioBase.toFixed(2)}`);
console.log(`Salário Hora: R$ ${salarioPorHora.toFixed(2)}`);
console.log(`Salário Total: R$ ${salario.toFixed(2)}`);