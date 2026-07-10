const PAREDE = "⬜";
const VAZIO = "⬛";
const CABECA = "🟢";
const CORPO = "🟩";
const COMIDA = "🔴";
const largura = 30
const altura = 15 

var cobraX = [10]
var cobraY =[7]

var comidaX = Math.floor(Math.random()* largura)
var comidaY = Math.floor(Math.random()* altura)

var pontos = 0;
var direcao = 'd';

var gameover = false 

function desenhar (){
var tela= ''
tela += ' === jogo da cobrinha ===\n'
tela += ' W A S D = mover | Q = sair\n '
tela += 'pontos '+ pontos + '\n\n'
for(var y = -1; y <= altura; y++){

    var linha = ''

    for (var x = -1; x <= largura; x++){
        if(x ===-1 || x === largura || y ===-1 || y === altura){
        linha += PAREDE
        }else if (x === comidaX  && y === comidaY){
        linha += COMIDA
        }else{
        linha += VAZIO
        }
        }
        tela +=linha + '\n'
    }
    process.stdout.write('\x1b[H' + tela);
}
desenhar()