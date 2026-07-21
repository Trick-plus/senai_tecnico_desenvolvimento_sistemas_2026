import leia from 'readline-sync';

var nome = leia.question("DIGITE O NOME DO FUNCIONARIO: ");
var salario = leia.questionFloat("DIGITE O VALOR DO SALARIO FIXO: ");
var qtdDepen = leia.questionInt("DIGITE A QTD DE DEPENDENTES: ");

var porcentagem = 0.0;
switch (qtdDepen) {
    case 0:
        porcentagem = 2 / 100; // 0.02
        break;
    case 1:
        porcentagem = 5 / 100; // 0.05
        break;
    case 2:
        porcentagem = 7 / 100; // 0.07
        break;
    case 3:
        porcentagem = 10 / 100; // 0.10
        break;
    default:
        porcentagem = 15 / 100; // 0.15
}

var salarioFinal = salario + (salario * porcentagem);
console.log("O SALARIO FINAL COM " + qtdDepen + " DEPENDENTES É R$" + salarioFinal.toFixed(2))