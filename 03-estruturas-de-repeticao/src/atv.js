import leia, { keyInSelect } from 'readline-sync';


/*// ==========================
// 1° 0 até o valor informado
// ==========================
var numero= leia.question('Digita um numro ai mano:')
var qtp=0;

while(qtp<=numero){
    console.log('Numero,'+ qtp)
    qtp++
}

// =================
// 2° Decrementação
// =================
var Nd =  consle.log("Digite um  numero:")

while(Nd  >= 0 ){
    console.log(Nd);
    Dn--;
}


// =========================================================================
// 3° 1000 e 1999 e mostra apenas aqueles que divididos por 11 dão resto 5
// =========================================================================

var inicio = 1000;
var fim = 1999

while( inicio <= fim){
    if(inicio % 11 ===v 5){
        console.log(`Nuemro:`+ inicio)
    }
}

// ==========================
// 4° 
// ==========================
var Mn;
var mn;
var contador = 1;
while (contador <= 15){
    var Nd = leia.questionInt("Digita Numero,");
    if(contador === 1){
        Mn = Nd;
        mn = Nd;
    }else if(Nd > Mn){
        Mn = Nd
    }else if(Nd < mn){
        mn = Nd
    }
    contador++
}

console.log(''+mn)
console.log(''+Mn)

// ==========================
// 5° 
// ==========================
var inicio = 1;
var fim = 500;
var preco = 1;
const valor = 0.33;
while(inicio <= fim){
    console.log(`O valor da copia, ${(valor*preco).toFixed(2)}`)
 inicio++
 preco++
}

// ==========================
// 6° 
// ==========================
var Np = leia.question(`Digita O numero ai mn:`)
var preco = 1;
while(preco <= 10){
    console.log(`${(Np*preco)}`)
 preco++
}

// ==========================
// 7° 
// ==========================
var contador = 10; 
while(contador <= 1000){
    console.log(contador)
    contador++

    if(contador === 50 ){
        contador = 900
    }
}
// ==========================
// 8° 
// ==========================
var Sn=0;
var Mn=0;
for(var i= 0; i<6; i++){
    var Nd = leia.questionInt("Digita ai um numero:")
    if(Nd % 3 != 0){
        Sn +=   Nd
    }else if(Nd % 2 == 0){
        Mn = Mn * Nd
    }
}
console.log(`A soma dos impares é de, ${Sn}`)
console.log(`O resto dos pares é de, ${Mn}`)

// ==========================
// 9° 
// ==========================
var contador = 0;

while(Nd !== 0){
    var Nd = leia.questionFloat("Para parar digite 0 mn:")
    if(Nd > 100 && Nd<200){
    contador++
    }
}
console.log(`A quantidade de numeros digitado entre 100 e 200 é de ${contador}`)

// ==========================
// 10° 
// ==========================
var v = 1.50
var j = 1.40  
var anos = 0  
while(v > j){
    v += 0.02
    j += 0.03
    anos++
}

console.log(`Vai demorar ${anos} anos para Joãozinho passar a Valentina `)

// ==========================
// 11° 
// ==========================
var Mn, mn;
var qom = 0;
var qmu = 0;
var somaMulheres = 0;
var somaPopulacao = 0;
var Md, Mdp;
for (var i = 0; i < 10; i++) {
    var Nd = leia.questionFloat("Diga sua altura: ");
    var Genero = leia.keyInSelect(["Homem", "Mulher"]);
    if (i === 0) {
        Mn = Nd;
        mn = Nd;
    } else {
        if (Nd > Mn) {
            Mn = Nd;
        }

        if (Nd < mn) {
            mn = Nd;
        }
    }
    somaPopulacao += Nd;
    if (Genero == 1) {
        somaMulheres += Nd;
        qmu++;
    } else {
        qom++;
    }
}
Md = qmu > 0 ? somaMulheres / qmu : 0;
Mdp = somaPopulacao / 10;
var percentualHomens = (qom / 10) * 100;
console.log("Maior altura:", Mn);
console.log("Menor altura:", mn);
console.log("Média das mulheres:", Md.toFixed(2));
console.log("Média da população:", Mdp.toFixed(2));
console.log("Percentual de homens:", percentualHomens + "%");

// ==========================
// 12° 
// ==========================
var opcao = leia.keyInSelect(["PvP","PvE"])
if(opcao === 0){
    numeroM = leia.questionInt("Digite o numero magico:")
    console.clear
    var Nd ;
    var Tentativas = 0;
    while(Nd != numeroM){
         Nd = leia.questionInt("digite mais um palpite:")
        if(Nd > numeroM){
            console.log('Está a baixo')
        }else if(Nd < numeroM){
            console.log('Está a acima')
        }
        Tentativas++
    }
    console.log('Tu ganhou mn aee')
}else if (opcao === 1){
    var numeroM;
    var dif = leia.keyInSelect(["Facil","Intermediario","Dificil"])
    if(dif = 0){
        numeroM = Math.floor(Math.random() * 10);
         var Nd ;
        var Tentativas = 0;
        while(Nd != numeroM){
         Nd = leia.questionInt("digite mais um palpite:")
        if(Nd > numeroM){
            console.log('Está a baixo')
        }else if(Nd < numeroM){
            console.log('Está a acima')
        }
        Tentativas++
        }console.log('Tu ganhou mn aee')

    }else if (dif = 1){
        numeroM = Math.floor(Math.random() * 100);
         var Nd ;
        var Tentativas = 0;
        while(Nd != numeroM){
         Nd = leia.questionInt("digite mais um palpite:")
        if(Nd > numeroM){
            console.log('Está a baixo')
        }else if(Nd < numeroM){
            console.log('Está a acima')
        }
        Tentativas++
        }console.log('Tu ganhou mn aee')
    }else if(dif = 2){
        numeroM = Math.floor(Math.random() * 1000);
         var Nd ;
        var Tentativas = 0;
        while(Nd != numeroM){
         Nd = leia.questionInt("digite mais um palpite:")
        if(Nd > numeroM){
            console.log('Está a baixo')
        }else if(Nd < numeroM){
            console.log('Está a acima')
        }
        Tentativas++
        }console.log('Tu ganhou mn aee')
    }
}
console.log(`Vc conseguio em ${Tentativas}`)

// ==========================
// 13° 
// ==========================
var Ndi =leia.questionInt('Diga o numero ai:')
var contador = 1;
var Nt = 1;
var Nd = 1;
var Sn = 0;
while(contador <=Ndi){
    if(contador==1 || contador==2){
        console.log(1)
    }else{
        Sn= Nt + Nd
        console.log(Sn)
        Nd = Nt
        Nt = Sn
    }
    contador++
}

// ==========================
// 14° FATORIAL
// ==========================
var nd = leia.questionInt('Digita um numero:')
var fa = 1;
for(var i= nd; i>0;i--){
    fa *= i;
}
console.log(`O fatorial de ${nd} é ${fa.toFixed(2)}`)



// =========================
// 15° Decimal para binário
// =========================
var decimal = leia.questionInt('Digite um numero ai: ');
var resto;
var binario = '';
if (decimal === 0) {
    console.log('O numero em bi e: 0');
} else {
    while (decimal > 0) {
        resto= decimal%2;
        binario= resto+binario;
        decimal= Math.floor(decimal / 2);
    }
    console.log(`O numero em bi e de: ${binario}`);
}

// =========================
// 16° Média dos 10 estudantes
// =========================
var nomes = [];
var medias = [];

for (var i = 0; i < 2; i++) {
    var nome = leia.question(`Digite os nomes ${i + 1}: `);
    var Sn = 0;

    for (var N = 0; N < 2; N++) {
        var nota = leia.questionFloat(`Digite a nota ${N + 1} de ${nome}: `);
        Sn += nota;
    }
    nomes.push(nome);
    medias.push(Sn / 3);
}
var Maluno = nomes[0];
var Mm = medias[0];
for (var i = 1; i < medias.length; i++) {
    if (medias[i] > Mm) {
        Mm = medias[i];
        Maluno = nomes[i];
    }
}
console.log(`Melhor aluno foi o ${Maluno} com madia ${Mm.toFixed(2)}`);*/

var decimal = leia.questionInt('Digite um numero ai: ');
var resto;
var binario = '';
if (decimal === 0) {
    console.log('O numero em bi e: 0');
} else {
    while (decimal > 0) {
        resto= decimal%2;
        binario= resto+binario;
        decimal= Math.floor(decimal / 2);
    }
    console.log(`O numero em bi e de: ${binario}`);
}                        