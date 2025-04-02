//Variaveis Declaradas
let nomeFuncionario;
let horasTrabalhadas;
let setorFuncionario;
let valorHora;
let salario;
let horasExtras;

//Setores da Empresa
//[OP]Operacional: Não é necessário nenhuma mudança de cálculos;
//[AD]Administrativo: O valor do salário base é 10% maior;
//[GE]Gerência: O valor do salário base é 25% maior, mas não possui horas extras.

//Exemplo Valor das Variaveis
nomeFuncionario = "João Silva";
horasTrabalhadas = 250;
setorFuncionario = "GE";
valorHora = 50;
salario = 0;
horasExtras = 0;

//Calculo Horas Extras
if (horasTrabalhadas > 220 && setorFuncionario != "GE") {
    horasExtras = horasTrabalhadas - 220;
}

// Cálculo Salário por Função
if (horasExtras > 0 && setorFuncionario == "OP") {
    salario = (220 * valorHora) + (horasExtras * valorHora * 2); 
}
else if (horasTrabalhadas < 220 && setorFuncionario == "OP") {
    salario = horasTrabalhadas * valorHora; 
}
else if (horasExtras > 0 && setorFuncionario == "AD") {
    salario = ((220 * valorHora) * 1.10) + (horasExtras * valorHora * 2); 
} 
else if (horasTrabalhadas < 220 && setorFuncionario == "AD") {
    salario = (horasTrabalhadas * valorHora) * 1.10; 
}
else if (horasTrabalhadas => 220 && setorFuncionario == "GE") {
    salario = ((220 * valorHora) * 1.25); 
}
else if (horasTrabalhadas < 220 && setorFuncionario == "GE") {
    salario = (horasTrabalhadas * valorHora) * 1.25; 
}

// Exibição dos dados no console
console.log(`Funcionário: ${nomeFuncionario}`);
console.log(`Setor: ${setorFuncionario}`);
console.log(`Horas trabalhadas: ${horasTrabalhadas}`);
console.log(`Horas Extras: ${horasExtras}`)
console.log(`Valor por hora: R$ ${valorHora}`);
console.log(`Salário: ${salario.toFixed(2)}`);

