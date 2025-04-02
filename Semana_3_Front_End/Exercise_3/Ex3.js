//Variaveis Declaradas
let nomeFuncionario;
let horasTrabalhadas;
let setorFuncionario;
let valorHora;
let Salario;
let HoraExtras;

//Exemplo Valor das Variaveis
nomeFuncionario = "João Silva";
horasTrabalhadas = 250;
setorFuncionario = "TI";
valorHora = 50;
Salario = 0;
HoraExtras = 0;

//Calculo Horas Extras
if (horasTrabalhadas > 220) {
    HoraExtras = horasTrabalhadas - 220;
}

// Cálculo Salário
if (HoraExtras > 0) {
    Salario = (220 * valorHora) + (HoraExtras * valorHora * 2);
} else {
    Salario = horasTrabalhadas * valorHora;
}

// Exibição dos dados no console
console.log(`Funcionário: ${nomeFuncionario}`);
console.log(`Setor: ${setorFuncionario}`);
console.log(`Horas trabalhadas: ${horasTrabalhadas}`);
console.log(`Valor por hora: R$ ${valorHora}`);
console.log(`Salário: ${Salario}`);