import leia from "readline-sync";
// Jogo da Bomba.
let fios = ["vermelho","azul","verde","amarelo","preto",];
let tentativasP = 3;
let fioC = Math.floor(Math.random() * fios.length);
tentativasP;
console.log("=== Jogo da Bomba ===");
while (tentativasP > 0) {
    console.log(`Tentativas restantes: ${tentativasP}`);
    let escolha = leia.keyInSelect(fios, "Escolha um fio para cortar:");
    if (escolha === -1) {
        console.log("Você cancelou. Bomba não desarmada.");
        break;
    }
    if (escolha === fioC) {
        console.log("Parabéns, você desarmou a bomba!");
        break;
    }
    tentativasP--;
    if (tentativasP > 0) {
        console.log(`Ops, você errou! Você tem mais ${tentativasP} tentativa(s).`);
    } else {
        console.log("BOOM! A bomba explodiu.");
    }
}
