import leia from 'readline-sync';

var golsTimeA = leia.questionInt("DIGITE QTD DE GOLS TIME A: ");
var golsTimeB = leia.questionInt("DIGITE QTD DE GOLS TIME B: ");

var diferenca = Math.abs(golsTimeA - golsTimeB);
if (diferenca === 0) {
    console.log("DEU EMPATE!!")
} else if (diferenca === 1 || diferenca === 2 || diferenca === 3) {
    console.log("PARTIDA NORMAL! VITÓRIA DE UM DOS TIMES!")
} else {
    console.log("GOLEADAAAAAAAA! UM TIME PASSEOU EM CAMPO!!!")
}