import leia from 'readline-sync';

/*var senha = ""
var tentativas;
while (senha !== "1234"){
    senha =leia.question('Digite a senha:')
    
    if(senha!== "1234"){
        console.log('senha errada')
        tentativas--;
    }
}
if(tentativas>0){
    console.log('vc não tem mais tentativas')
}else{console.log('senha correta')}*/



var Sn= 0
var quantidade= 6
var contador = 1
/*
while (contador <= quantidade){
    var nota = leia.questionFloat("digite a nota,"+contador)
    Sn = Sn + nota
    contador++
}
var media = Sn/quantidade
console.log("media:"+ media.toFixed(2) )
*/
for(var i= 0; cont <= quantidade; cont++){
    var nota= leia.question("Digite a nota:"+ cont + "")
    media  = Sn/quantidade+nota
    console.log("media:"+ media.toFixed(2) )
}