import leia, { keyInSelect } from 'readline-sync';

/*// ==========================
// 1° EXERCÍCIO - SENHA
// ==========================
let senha = leia.question("Digite a senha: ");

if (senha === "1234") {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}


// ==========================
// 2° EXERCÍCIO - PAR OU ÍMPAR
// ==========================
let numero = leia.questionInt("Digite um numero: ");

if (numero % 2 === 0) {
    console.log("Numero par");
} else {
    console.log("Numero impar");
}


// ==========================
// 3° EXERCÍCIO - RODÍZIO
// ==========================
let finalPlaca = leia.questionInt("Digite o ultimo numero da placa: ");

if (finalPlaca === 0 || finalPlaca === 1) {
    console.log("Nao pode rodar na Segunda-feira");
} else if (finalPlaca === 2 || finalPlaca === 3) {
    console.log("Nao pode rodar na Terca-feira");
} else if (finalPlaca === 4 || finalPlaca === 5) {
    console.log("Nao pode rodar na Quarta-feira");
} else if (finalPlaca === 6 || finalPlaca === 7) {
    console.log("Nao pode rodar na Quinta-feira");
} else if (finalPlaca === 8 || finalPlaca === 9) {
    console.log("Nao pode rodar na Sexta-feira");
} else {
    console.log("Numero invalido");
}


// ==========================
// 4° EXERCÍCIO - MAÇÃS
// ==========================
let quantidadeMacas = leia.questionInt("Quantidade de macas: ");

let totalMacas;

if (quantidadeMacas < 12) {
    totalMacas = quantidadeMacas * 0.30;
} else {
    totalMacas = quantidadeMacas * 0.25;
}

console.log("Total da compra: R$ " + totalMacas.toFixed(2));


// ==========================
// 5° EXERCÍCIO - CLIENTES
// ==========================
let nome1 = leia.question("Nome do cliente 1: ");
let valor1 = Number(leia.question("Valor da compra 1: "));

let nome2 = leia.question("Nome do cliente 2: ");
let valor2 = Number(leia.question("Valor da compra 2: "));

let totalClientes = valor1 + valor2;
let media = totalClientes / 2;

console.log("Total pago: R$ " + totalClientes.toFixed(2));
console.log("Media das compras: R$ " + media.toFixed(2));

if (valor1 > 20) {
    console.log(nome1 + " comprou mais de R$20");
}

if (valor2 > 20) {
    console.log(nome2 + " comprou mais de R$20");
}


// ==========================
// 6° EXERCÍCIO - COFRINHO
// ==========================
let produto = Number(leia.question("Valor do produto: "));

let moeda1 = leia.questionInt("Quantidade de moedas de R$1,00: ");
let moeda50 = leia.questionInt("Quantidade de moedas de R$0,50: ");
let moeda25 = leia.questionInt("Quantidade de moedas de R$0,25: ");
let moeda10 = leia.questionInt("Quantidade de moedas de R$0,10: ");
let moeda5 = leia.questionInt("Quantidade de moedas de R$0,05: ");

let totalCofrinho =
    (moeda1 * 1) +
    (moeda50 * 0.50) +
    (moeda25 * 0.25) +
    (moeda10 * 0.10) +
    (moeda5 * 0.05);

if (totalCofrinho >= produto) {
    console.log("Dinheiro suficiente para comprar o produto");
} else {
    console.log("Dinheiro insuficiente");
}


// ==========================
// 7° EXERCÍCIO - EMPRÉSTIMO
// ==========================
let salario = Number(leia.question("Digite o salario: "));
let emprestimo = Number(leia.question("Digite o valor do emprestimo: "));
let parcelas = leia.questionInt("Digite o numero de parcelas: ");

let prestacao = emprestimo / parcelas;

if (prestacao <= salario * 0.30) {
    console.log("Emprestimo aprovado");
} else {
    console.log("Emprestimo negado");
}


// ==========================
// 8° EXERCÍCIO - DIAS DO MÊS
// ==========================
let mes = leia.questionInt("Digite o numero do mes: ");

if (mes === 2) {
    console.log("28 ou 29 dias");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("30 dias");
} else if (mes >= 1 && mes <= 12) {
    console.log("31 dias");
} else {
    console.log("Mes invalido");
}


// ==========================
// 9° EXERCÍCIO - DEPENDENTES
// ==========================
let funcionario = leia.question("Nome do funcionario: ");
let salarioBase = Number(leia.question("Salario fixo: "));
let dependentes = leia.questionInt("Quantidade de dependentes: ");

let percentual = 0;

if (dependentes === 0) {
    percentual = 0.02;
} else if (dependentes === 1) {
    percentual = 0.05;
} else if (dependentes === 2) {
    percentual = 0.07;
} else if (dependentes === 3) {
    percentual = 0.10;
} else if (dependentes === 4) {
    percentual = 0.15;
}

let salarioFinal = salarioBase + (salarioBase * percentual);

console.log("Funcionario: " + funcionario);
console.log("Salario final: R$ " + salarioFinal.toFixed(2));


// ==========================
// 10° EXERCÍCIO - DOAÇÃO
// ==========================
let opcao = keyInSelect(['R$10' , 'R$25' , 'R$50' , 'Outro valor'], 'Quanto deseja doar?')

let doacao;

if (opcao === 0) {
    console.log('Obrigado pela doação de R$10');
} else if (opcao === 1) {
    console.log('Obrigado pela doação de R$25');
} else if (opcao === 2) {
    console.log('Obrigado pela doação de R$50');
} else {
    doacao = leia.questionInt("Digite o valor da doacao: ");
}


// ==========================
// 11° EXERCÍCIO - FUTEBOL
// ==========================
let A = leia.questionInt("Gols do Time A: ");
let B = leia.questionInt("Gols do Time B: ");

let diferenca = Math.abs(A - B);

if (diferenca === 0) {
    console.log("EMPATE");
} else if (diferenca >= 1 && diferenca <= 3) {
    console.log("PARTIDA NORMAL");
} else {
    console.log("GOLEADA");
}


// ==========================
// 12° EXERCÍCIO - VIAGEM
// ==========================
let idade = leia.questionInt("Digite sua idade: ");

if (idade >= 18) {
    let nome = leia.question("Digite seu nome completo: ");
    console.log("Cadastro realizado para " + nome);
} else {
    let permissao = leia.question("Possui permissao dos pais? (S/N): ");

    if (permissao === "S"||"s"||"sim"||"Sim"||"SIM") {
        let nome = leia.question("Digite seu nome completo: ");
        console.log("Cadastro realizado para " + nome);
    } else {
        console.log("Cadastro nao autorizado");
    }
}

// ===================================
// 13° EXERCÍCIO - PASSOU OU REPROVOU
// ===================================

var n1=leia.questionFloat(`Digite a preimeira nota:`)
var n2=leia.questionFloat(`Digite a sehgunda nota:`)
var n3=leia.questionFloat(`Digite a treceira nota:`)
var n4=leia.questionFloat(`Digite a quarte nota:`)
var n5=leia.questionFloat(`Digite a quinta nota:`)
var fre=leia.questionFloat(`Digite sua frequancia:`)
var media= (n1+n2+n3+n4+n5)/5
if(media>7 && fre>75){
  console.log(`Parabens voce passou`)
}else{
  console.log(`Voce esta reprovado`)
}

// ==========================
// 14° EXERCÍCIO - DESCONTO
// ==========================
var valor = leia.questionFloat(`Qual o valor total da compra?:`)
var vip   = leia.question(`Voce é um cliente vip ? S ou N:`)
if(vip === "S"){
  if(valor >= 1000){
   var desconto1= valor*0.20
   var valorFinal1= valor-desconto1
   console.log(`O valor a pagar já com desconto é de ${valorFinal1}`)
  }else if(valor >= 500){
   var desconto2=  valor*0.10
   var valorFinal= valor-desconto2
   console.log(`O valor a pagar já com desconto é de ${valorFinal}`)
  }else{
   var desconto3= valor*0.5
   var valorFinal1= valor-desconto3
   console.log(`O valor a pagar já com desconto é de ${valorFinal1}`)
  }

}else{
    console.log(`Vai ganhar desconto não pai F. Vai pagar o ${valor}.`)
}

// ===============================
// 15° EXERCÍCIO - ESTACIONAMENTO
// ===============================
var temp= leia.questionInt(`Quantas Horas seu veiculo ficou no estacionamento? : `)
var vip   = leia.keyIn(`Voce possui um cartao de fidelidade ? [S ou N]:`)
if(temp <= 1){
    var valor = 8;
  if(vip =='S'){
    var desconto = valor*0.15
    var valorf = valor - desconto
    console.log(`Valor a Pagar R$ ${valorf.toFixed(2)}`)
  }else{
    console.log(`Valor a pagar ${valor.toFixed(2)}`)
  }
}else if(temp <=3){
   var valor = 15;
  if(vip =='S'){
   var desconto = valor*0.15
    var valorf = valor - desconto
    console.log(`Valor a Pagar R$ ${valorf.toFixed(2)}`)
  }else{
    consoesconto = valor*0.15
    var valorf = valor - desconto
    console.log(`Valor a Pagar R$ ${valorf.toFixed(2)}`)
  }else{
    console.log(`Valor a pagar ${valor.toFixed(2)}`)
  }
}
le.log(`Valor a pagar ${valor.toFixed(2)}`)
  }
}else if(temp >=3 && temp<=6){
    var valor = 22;
  if(vip =='S'){
    var desconto = valor*0.15
    var valorf = valor - desconto
    console.log(`Valor a Pagar R$ ${valorf.toFixed(2)}`)
  }else{
    console.log(`Valor a pagar ${valor.toFixed(2)}`)
  }
}else if(temp > 6 ){
    var valor = 30;
  if(vip =='S'){
    var d
// ===============================
// 16° EXERCÍCIO - CONSTRUTORA
// ===============================
var a = leia.questionFloat(`Qual a medida da primeira barra? :`)
var b= leia.questionFloat(`Qual a medida da segunda barra? :`)
var c = leia.questionFloat(`Qual a medida da terceira barra? :`)
if (a + b > c && a + c > b && b + c > a) {
    console.log('As barras podem formar um triângulo.')
    if(a===b && b===c){
        console.log(`esse ai e Equilatero`)
    }else if (a===b || b===c || c===a ){
        console.log(`Esse ai e Isosceles`)
    }else {console.log(`Esse ai é Escaleno`)}
} else {
    console.log('As barras nao podem formar um triângulo.')
}

// ===========================
// 17° EXERCÍCIO - EMPRESTIMO
// ===========================
var money= leia.question(`Fala teu salario ai meu rei:`)
var idade= leia.questionInt(`Qual sua idade mn:`)
var ld= leia.keyIn(`Tens o nome limpo? [S/N]:`, {limit: "sSnN"}).toUpperCase()
if(idade >= 18 && money>=2.500 && ld == "S"){
    console.log("Emprestimo a provado")
}else if (idade < 18 &&  money>2.500 && ld == "S" ||idade > 18 &&  money<2.500 && ld == "S" ||idade>18 && money>2.500 && ld == "N")
    {console.log(`Em analise`)}else{console.log(`Emprestimo recusado`)
}


// ============================
// 18° EXERCÍCIO - CALCULADORA
// ============================
switch (keyInSelect(['Soma', 'Subtracao', 'Multiplicacao', 'Divisao'], 'Escolha a operacao:')) {
    case 0:
        var n1 = leia.questionFloat(`Digite o primeiro numero: `)  
        var n2 = leia.questionFloat(`Digite o segundo numero: `)
        console.log(`O resultado da soma e: ${n1 + n2}`)
        break;
    case 1:
        var n1 = leia.questionFloat(`Digite o primeiro numero: `)  
        var n2 = leia.questionFloat(`Digite o segundo numero: `)
        console.log(`O resultado da subtracao e: ${n1 - n2}`)
        break;
    case 2:
        var n1 = leia.questionFloat(`Digite o primeiro numero: `)  
        var n2 = leia.questionFloat(`Digite o segundo numero: `)       
        console.log(`O resultado da multiplicacao e: ${n1 * n2}`) 
        break;
    case 3:
        var n1 = leia.questionFloat(`Digite o primeiro numero: `)  
        var n2 = leia.questionFloat(`Digite o segundo numero: `) 
        if(n2 === 0){
            console.log(`Nao e possivel dividir por zero`)
        }else{
            console.log(`O resultado da divisao e: ${n1 / n2}`)
        }
        break;
}

// ======================
// 18° EXERCÍCIO - FRETE
// ======================
var valorproduto = leia.questionFloat(`Valor do produto: `)
if (valorproduto >= 500) {
    console.log(`Valor final: R$ ${valorproduto.toFixed(2)}`)
}else{
switch (keyInSelect(['SP', 'SC','PR', 'RS'], 'Escolha o tipo de frete:')) {
    case 0:
        console.log(`Valor final do produto. Já com frete incluso: R$ ${(valorproduto * 0.05)+valorproduto.toFixed(2)}`)
        break;
    case 1:
        console.log(`Valor final do produto. Já com frete incluso: R$ ${(valorproduto * 0.10)+valorproduto.toFixed(2)}`)
        break;
    case 2:
        console.log(`Valor final do produto. Já com frete incluso: R$ ${(valorproduto * 0.15)+valorproduto.toFixed(2)}`)
        break;
    case 3:
        console.log(`Valor final do produto. Já com frete incluso: R$ ${(valorproduto * 0.20)+valorproduto.toFixed(2)}`)
        break;
    
}}*/

/*/ ======================
// 19° EXERCÍCIO - CINEMA
// =======================
var idade = leia.questionInt(`Digite sua idade: `)
var estudante = leia.keyIn(`Voce e estudante? [S/N]:`, {limit: "sSnN"}).toUpperCase()
var dia = leia.questionInt(`Digite o numero do dia da semana (1-7): `)
var valorOriginal = 40;
var descontoAplicado = 0;
var valorFinal = valorOriginal;
if (idade < 12) {
    valorFinal = 15;
    descontoAplicado = valorOriginal - valorFinal;
} else if (dia === 1) {
    descontoAplicado = valorOriginal * 0.50;
    valorFinal = valorOriginal - descontoAplicado;
} else if (estudante === "S") {
    descontoAplicado = valorOriginal * 0.30;
    valorFinal = valorOriginal - descontoAplicado;
}
console.log(`Valor original: R$ ${valorOriginal.toFixed(2)}`);
console.log(`Desconto aplicado: R$ ${descontoAplicado.toFixed(2)}`);
console.log(`Valor final do ingresso: R$ ${valorFinal.toFixed(2)}`);

// =================================
// 20° EXERCÍCIO - ERNEGIA ELETRICA  
// =================================
var consumo = leia.questionFloat(`Digite o consumo de energia em kWh: `)
var tarifaSocial = leia.keyIn(`Voce e beneficiario da tarifa social? [S/N]:`, {limit: "sSnN"}).toUpperCase()
var valorOriginal = 0;
if (consumo <= 100) {
    valorOriginal = consumo * 0.60;
} else if (consumo > 101 && consumo <= 300) {
    valorOriginal = consumo * 0.75;
} else {
    valorOriginal = consumo * 0.90;
}
if (tarifaSocial === "S") {
    valorOriginal = valorOriginal * 0.80;
}
console.log(`Valor original: R$ ${valorOriginal.toFixed(2)}`);

// ======================================
// 21° EXERCÍCIO - CAMPEONATO DE FUTEBOL 
// ======================================
var timeV = leia.questionInt(`Digite o numero de vitorias do time: `)
var  timeD = leia.questionInt(`Digite o numero de derrotas do time: `)
var  timeE = leia.questionInt(`Digite o numero de empates do time: `)
var pontos = (timeV * 3) + (timeE * 1) + (timeD * 0)
console.log(`O time possui ${pontos} pontos.`)
if (pontos>=70){
    console.log(`O time esta classificado para a proxima fase.`)
}else if (pontos>=45 && pontos<69){
    console.log(`O time esta na zona de rebaixamento.`)
}else{
    console.log(`O time esta na zona de rebaixamento.`)
}*/
