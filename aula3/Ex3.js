const valorHora = parseFloat(prompt("Quanto você ganha por hora?"));
const horasTrabalhadas = parseFloat(prompt("Quantas horas você trabalhou no mês?"));

const impostoRenda = 0.11 * (valorHora * horasTrabalhadas);
const inss = 0.08 * (valorHora * horasTrabalhadas);
const sindicato = 0.05 * (valorHora * horasTrabalhadas);

const salarioBruto = valorHora * horasTrabalhadas;
const salarioLiquido = salarioBruto - impostoRenda - inss - sindicato;

alert(`Salário Bruto: R$ ${salarioBruto.toFixed(2)}
Imposto de Renda: R$ ${impostoRenda.toFixed(2)}
INSS: R$ ${inss.toFixed(2)}
Sindicato: R$ ${sindicato.toFixed(2)}
Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);
