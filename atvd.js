console.log("--- BLOCO 1: Fundamentos e Variáveis ---");

let pontos = 50;
pontos += 10;
console.log(`Pontos atuais: ${pontos}`);

const MAX_PONTOS = 100;
try {
  MAX_PONTOS = 101; 
} catch (erro) {
  console.error("Erro ao tentar reatribuir constante:", erro.name, "-", erro.message);
}

const texto = "Olá, mundo!";
const numero = 42;
const isAtivo = true;
let valorIndefinido;      
const valorNulo = null;

console.log("Tipo de texto:", typeof texto);
console.log("Tipo de numero:", typeof numero);
console.log("Tipo de isAtivo:", typeof isAtivo);
console.log("Tipo de valorIndefinido:", typeof valorIndefinido);
console.log("Tipo de valorNulo:", typeof valorNulo); 

const nome = "Ana";
const curso = "JavaScript";
const fraseTemplate = `A aluna ${nome} está estudando ${curso}.`;
const fraseConcat = "A aluna " + nome + " está estudando " + curso + ".";
console.log("Com Template Literals:", fraseTemplate);
console.log("Com Concatenação:", fraseConcat);

console.log("\n--- BLOCO 2: Funções ---");

console.log("Chamando função declarada antes (hoisting):", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
  return idade >= 18;
}

try {
  console.log(ehMaiorDeIdadeExpressao(15));
} catch (erro) {
  console.error("Erro ao chamar função de expressão antes (hoisting):", erro.name, "-", erro.message);
}

const ehMaiorDeIdadeExpressao = function(idade) {
  return idade >= 18;
};


function dobroDeclarada(n) {
  return n * 2;
}

const dobroExpressao = function(n) {
  return n * 2;
};

const dobroArrow = n => n * 2;

console.log("Dobro Declarada (5):", dobroDeclarada(5));
console.log("Dobro Expressão (5):", dobroExpressao(5));
console.log("Dobro Arrow (5):", dobroArrow(5));
const dobroPadrao = (n = 1) => n * 2;
console.log("Chamada de dobroPadrao sem argumentos (usa n=1):", dobroPadrao());

console.log("\n--- BLOCO 3: Controle de Fluxo ---");

function classificarNota(nota) {
  if (nota >= 6) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
console.log("Nota 7:", classificarNota(7));
console.log("Nota 5:", classificarNota(5));

const corSemaforo = "amarelo";
console.log(`\nSemáforo está ${corSemaforo}:`);
switch (corSemaforo) {
  case "vermelho":
    console.log("Pare");
    break;
  case "amarelo":
    console.log("Atenção");
    break;
  case "verde":
    console.log("Siga");
    break;
  default:
    console.log("Cor inválida");
}

console.log("\nTabuada do 5 (for):");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

console.log("\nContagem regressiva (while):");
let contador = 5;
while (contador >= 1) {
  console.log(contador);
  contador--;
}

console.log("\nPar ou Ímpar de 1 a 20 (Usando FOR):");
for (let i = 1; i <= 20; i++) {
  console.log(`${i} é ${i % 2 === 0 ? "par" : "ímpar"}`);
}

console.log("\nPar ou Ímpar de 1 a 20 (Usando WHILE):");
let numParImpar = 1;
while (numParImpar <= 20) {
  console.log(`${numParImpar} é ${numParImpar % 2 === 0 ? "par" : "ímpar"}`);
  numParImpar++;
}

function diaDaSemana(numero) {
  switch (numero) {
    case 1: return "Domingo";
    case 2: return "Segunda-feira";
    case 3: return "Terça-feira";
    case 4: return "Quarta-feira";
    case 5: return "Quinta-feira";
    case 6: return "Sexta-feira";
    case 7: return "Sábado";
    default: return "Número inválido. Insira um valor de 1 a 7.";
  }
}

console.log("\nDia da semana:");
console.log("Dia 1:", diaDaSemana(1));
console.log("Dia 5:", diaDaSemana(5));
console.log("Dia 9:", diaDaSemana(9));