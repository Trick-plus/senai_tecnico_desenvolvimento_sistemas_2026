import readline from 'readline'


const PAREDE = "⬜";
const VAZIO = "⬛";
const CABECA = "🟢";
const CORPO = "🟩";
const COMIDA = "🔴";

const LARGURA = 60; // X
const ALTURA = 40; // Y

var cobraX = [4, 3, 2, 1];
var cobraY = [7, 7, 7, 7];

var comidaX = Math.floor(Math.random() * LARGURA);
var comidaY = Math.floor(Math.random() * ALTURA);

var pontos = 0;
var direcao = "d";
var gameOver = false;

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdout.write("\x1b[?25l");
process.stdin.on("keypress", (str, key) => {
    console.log(str);
    console.log(key);

if(key.name === "w" && direcao !== "w"){
    direcao = "w"
}

if(key.name === "a" && direcao !== "a"){
    direcao = "a"
}

if(key.name === "d" && direcao !== "d"){
    direcao = "d"
}

if(key.name === "s" && direcao !== "s"){
    direcao = "s"
}

   if(key.name === "q"){
        gameOver === true;
        process.exit();
    }
})

function desenhar() {
  var tela = "";
  tela += "=== JOGO DA COBRINHA ===\n";
  tela += "W A S D = MOVER | Q = sair\n";
  tela += "Pontos " + pontos + "\n\n";

  for (var y = -1; y <= ALTURA; y++) {
    var linha = "";

    for (var x = -1; x <= LARGURA; x++) {
      if (x === -1 || x === LARGURA || y === -1 || y === ALTURA) {
        linha += PAREDE;
      } else if (x === comidaX && y === comidaY) {
        linha += COMIDA;
      } else {
        var desenhouCobrinha = false;

        for (var i = 0; i < cobraX.length; i++) {
          if (cobraX[i] === x && cobraY[i] === y) {
            linha += (i === 0) ? CABECA : CORPO;
            desenhouCobrinha = true;
          }
        }

        if (desenhouCobrinha === false) {
          linha += VAZIO
        }
      }
    }
    tela += linha + "\n"
  }

  process.stdout.write("\x1b[H" + tela);
}

function sortear(){
var posicao = false;

while(posicao === false){
comidaX = Math.floor(Math.random() * LARGURA)
comidaY = Math.floor(Math.random() * ALTURA)

posicao = true;
for(var i = 0; i < cobraX.length; i++){
    if(cobraX[i] === comidaX && cobraY[i] === comidaY){
posicao = false;
    }
}

}

}

function movimento(){
var novaposicaox = cobraX[0];
var novaposicaoy = cobraY[0];

switch(direcao){
    case "w":
        novaposicaoy--;
        break;
        case "s":
            novaposicaoy++
            break;
            case "a":
                novaposicaox--;
                break;
                case "d":
                    novaposicaox++;
                    break;


}

// if(novaposicaox < 0 || novaposicaox >= LARGURA || novaposicaoy <0 || novaposicaoy >= ALTURA){
//     gameOver = true;
//     return;
// }

if(novaposicaox < 0){
    novaposicaox = LARGURA -1
}

if(novaposicaox >= LARGURA ){
    novaposicaox = 0;
}

if(novaposicaoy < 0){
    novaposicaoy = ALTURA -1
}

if(novaposicaoy >= ALTURA ){
    novaposicaoy = 0;
}

for(var i = 0; i < cobraX.length; i++){
    if(novaposicaox === cobraX[i] && novaposicaoy === cobraY){
        gameOver = true;
        return;
    }
}



cobraX.unshift(novaposicaox)
cobraY.unshift(novaposicaoy)

if(novaposicaox === comidaX && novaposicaoy === comidaY){
    pontos+= 10;
    sortear();
}else{
    cobraX.pop()
cobraY.pop()
}


}

var jogo = setInterval(() => {
    if(gameOver === true){
        clearInterval(jogo);
        process.stdout.write("\xb1[?")
        console.log("\n=== PERDEU, ABUSADO ===")
        console.log("Pontuação final : " + pontos)
        process.exit();
    }
})

setInterval(() => {
    movimento();
    desenhar();

}, 0.000000000000000000000000001)

sortear()
desenhar();