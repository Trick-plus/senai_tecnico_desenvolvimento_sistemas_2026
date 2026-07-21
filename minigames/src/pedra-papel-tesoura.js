import leia from 'readline-sync';

var opcoes = ["PEDRA", "PAPEL", "TESOURA"]

var escolhaComputador = Math.floor(Math.random() * 3);
var escolhaUsuario = leia.keyInSelect(opcoes, "ESCOLHA SUA OPCAO:");

if(escolhaUsuario === -1) {
    console.log("OPÇÃO INVÁLIDA, JOGO CANCELADO!!!")
} else {
    console.log("VOCÊ ESCOLHEU: " + opcoes[escolhaUsuario]);
    console.log("O COMPUTADOR ESCOLHEU: " + opcoes[escolhaComputador]);

    if(escolhaComputador === escolhaUsuario) {
        console.log("EMPATOUUUUU!!!!")
    } else if(
        escolhaUsuario === 0 && escolhaComputador === 2 ||
        escolhaUsuario === 1 && escolhaComputador === 0 ||
        escolhaUsuario === 2 && escolhaComputador === 1
    ){
        console.log("USUÁRIO GANHOUUUUUUU!!!!")
    }else {
        console.log("COMPUTADOR GANHOUUUUUU!!")
    }
}