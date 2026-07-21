import leia from 'readline-sync';

var idade = leia.questionInt("DIGITE SUA IDADE: ");

if (idade >= 18) {
    var nome = leia.question("DIGITE SEU NOME: ")
    console.log(nome + " VOCÊ ESTÁ AUTORIZADO A IR NA VIAGEM");
} else {
    var foiAutorizado = leia.keyInSelect(["SIM", "NAO"], "VOCE FOI AUTORIZADO PELOS PAIS? ");
    if (foiAutorizado === 0) {
        var nome = leia.question("DIGITE SEU NOME: ");
        console.log(nome + " VOCÊ ESTÁ AUTORIZADO A IR NA VIAGEM");
    } else {
        console.log("VOCÊ NÃO ESTÁ AUTORIZADO A IR NA VIAGEM");
    }
}