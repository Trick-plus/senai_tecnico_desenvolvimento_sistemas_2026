import leia from 'readline-sync';

const partes = [
    `
  +---+
  |   |
      |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
    `
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`,
];

var palavra = ["cachorro","gato","passaro","peixe","coelho","hamster","tartaruga","porquinho-da-india","papagaio","cavalo","vaca","ovelha","porco","galinha","pato","ganso","cabra","camelo","leao","tigre","elefante","girafa","zebra","rinoceronte","hipopotamo","crocodilo","jacaré","tubarao","baleia","golfinho"];
var letrasCorretas =[];
var letrasErradas = [];
var letra=[];
var tentativas = 6;
var venceu = false;
var palavraS = palavra[Math.floor(Math.random() * palavra.length)];

function desenharF(erros) {
  console.log(partes[erros]);
}

while(tentativas > 0 && venceu===false) {
  console.clear();
  console.log("===Jogo da forca===")
  desenharF(letrasErradas.length);
  var palavraM="";
  for(var i= 0; i < palavraS.length; i++){
    if(letrasCorretas.includes(palavraS[i])){
      palavraM+=palavraS[i]+"";
    }else{
      palavraM += "_";
    }
  }
console.log(`Palavra: ${palavraM}`)
    console.log(`Tentativas: ${tentativas}`)
    console.log(`letras erradas: ${letrasErradas}`)
    var letra= leia.question(`Digite uma letra:`).toLowerCase();
    if(letra.length !==1){
      console.log(`Digite apenas uma letra`)
      leia.question(`Aperta em ENTER`)
    }else if(letrasCorretas.includes(letra)||letrasErradas.includes(letra)){
    console.log('Voce ja tentou essa letra')
    leia.question("Aperta em ENTER")
    }else if(palavraS.includes(letra)){
      letrasCorretas.push(letra);
    }else{
      letrasErradas.push(letra);
      tentativas--;
    }
    venceu=true;
    for(var i = 0; i< palavraS.length; i++ ){
      if(!letrasCorretas.includes(palavraS[i])){
        venceu= false;
      }

    }
}
console.clear();
console.log("=== JOGO DA FORCA ===");
desenharF(letrasErradas.length);
if(venceu===true){
  console.log('Parabens pai')
}else{
  console.log('Perdeu')
  console.log('A palavra era:'+palavraS)
}