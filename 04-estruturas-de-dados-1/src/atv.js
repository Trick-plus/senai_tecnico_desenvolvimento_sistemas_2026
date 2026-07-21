import leia from 'readline-sync';

var  hub = leia.questionInt('Escolha uma opcao de 1 a 13:')
switch(hub){
    // Multiplicar 10 números por 5  
    case 1:
        let vetorO = [];
        let vetorM = [];

        console.log('--- Digite 10 números ---');
        for (let i = 0; i < 10; i++) {
        let numero = leia.questionFloat(`Digite o ${i + 1}o numero: `);
        vetorOriginal.push(numero);}


        for (let i = 0; i < 10; i++) {
        vetorMultiplicado.push(vetorOriginal[i] * 5);}


        console.log('\n--- Vetor Original ---');
        console.log(vetorOriginal);

        console.log('\n--- Vetor Multiplicado por 5 ---');
        console.log(vetorMultiplicado);
    break;
    // Somatório de 5 números e exibição individual
    case 2:
        let numeros1 = [];
        let soma = 0;

        console.log('--- Digite 5 números ---');
        for (let i = 0; i < 5; i++) {
        let valor = leia.questionFloat(`Digite o ${i + 1}o numero: `);
        numeros.push(valor);
        soma += valor;}

        console.log('\n==============================');
        console.log(`Soma total dos números: ${soma}`);
        console.log('==============================');


        console.log('\nNúmeros digitados:');
        for (let i = 0; i < numeros.length; i++) {
        console.log(numeros1[i]);}
    break;
    // Filtrar e mostrar apenas números pares de 10 entradas
    case 3:


        let numeros2 =[0];
        for(let i = 0; i<10; i++){
            numeros1.push(leia.questionInt("Digite os numeros:"))
        }

        for(let i = 0; i<10; i++){
            let numerosPares = [];
            if(numeros2[i]% 2===0){
                numerosPares[i]=numeros2[i]
                console.log(numerosPares[i])
            }
        }
    break
    // Filtrar 15 números maiores ou iguais a 10
    case 4: 
        let numeros3 =[];
            for(let i = 0; i<15; i++){
                numeros3.push(leia.questionInt("Digite os numeros:"))
            }
        for(let i = 0; i<15; i++){
            let numerosPares = [];
            if(numeros3[i]>=10){
                numerosPares[i]=numeros3[i]
                console.log(numerosPares[i])
            }
        }
    break
    // Inverter a posição dos elementos de um vetor de 10 itens
    case 5:
        let numeros4 =[];

        for(let i = 0; i<10; i++){
            numeros4.push(leia.questionInt("Digite os numeros:"));  
        }
        numeros4.reverse();
        console.log(numeros4)
    break
    // Temperaturas mínimas e máximas de 30 dias (12°C a 35°C)
    case 6:
        var menorTemp = [];
        var maiorTemp = [];
        var maiorNumero=0;
        var menorNumero=0;

        for(let i =0; i < 60 ; i++){
            maiorNumero=Math.floor(Math.random() * (35 - 12 + 1)) + 12;
            menorNumero=Math.floor(Math.random() * (35 - 12 + 1)) + 12;
            if(maiorNumero>menorNumero){
                maiorTemp.push(maiorNumero)
                menorTemp.push(menorNumero)
            }else if(menorNumero>maiorNumero){
                let x = menorNumero
                menorNumero=maiorNumero
                maiorNumero=x
                maiorTemp.push(maiorNumero)
                menorTemp.push(menorNumero)

            }
        }
      console.log(`Lista das maiores temps ${maiorTemp}`)
        console.log(`Lista das menores temps ${menorTemp}`)
    break
    // Vetor Filho combinando posições pares do Pai e ímpares da Mãe
    case 7:
        
        var pai = [];
        var mae = [];
        var filho = []
        var paiN=0;
        var maeN=0;

        for(let i =0; i < 50 ; i++){
            maeN=Math.floor(Math.random() * 100);
            paiN=Math.floor(Math.random() * 100);
            pai.push(paiN)
            mae.push(maeN)
            if(maeN%3 !== 0){
                filho.push(maeN)
            }else if(paiN %2 !==0){
                filho.push(paiN)

            }
        }
         console.log(filho)
    break
    // Mesclar 3 terços de 3 vetores de 9 posições
    case 8:
        var V1 = [1,2,3,4,5,6,7,8,9]
        var V2 = [9,8,7,6,5,4,3,2,1]
        var V3 = [0,2,4,6,8,10,12,14,16]
        var vR = [1,2,3,6,5,4,12,14,16]
        console.log(vR)
    break    
    // Verificar se existem valores duplicados em um vetor de 10 itens
    case 9:
        let lista = [];

        for (let i = 0; i < 10; i++) {
        lista.push(Math.floor(Math.random() * 100));
        }

        for (let i = 0; i < 10; i++) {
            if (lista.indexOf(lista[i]) !== lista.lastIndexOf(lista[i])) {
            console.log(`O número ${lista[i]} está repetido.`);
            }
        }
    break
    // Solicitar 4 números estritamente pares ao usuário
    case 10:
        let lista1 = [];

         for(let i = 0; i<4;){
            let x = (leia.questionInt("Digite os numeros:")); 
            if(x %2  === 0 ){
                lista1.push(x)
                i++
            }else{console.log('Tenta dinovo mn pode impar não')}
        }
        console.log(lista1)
    break
    // Gerar matriz 8x8 aleatória e listar valores maiores que 10
    case 11:
        let matriz = [[],[]];

        for (let i = 0; i < 8; i++) {
            matriz[i] = [];

            for (let j = 0; j < 8; j++) {
            matriz[i][j] = Math.floor(Math.random() * 20);
            }
        }
        console.table(matriz);
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                if (matriz[i][j] > 10) {
                }
            }
        }
    break
    // Simular 1000 jogadas de dado e verificar vício (>22%)
    case 12:
   
        var frequencias = [0, 0, 0, 0, 0, 0];

        for (let i = 0; i < 1000; i++) {
        var lado = Math.floor(Math.random() * 6); 
        frequencias[lado]++;
        }

        let viciado = false;

        frequencias.forEach((qtd, i) => {
        var pct = (qtd / 1000) * 100;
        console.log(`Lado ${i + 1}: ${qtd} vezes (${pct.toFixed(1)}%)`);
              if (pct > 22) viciado = true;
        });
        console.log(viciado ? "Dado viciado!" : "Dado nao esta viciado.");
    break
    // Comparar gabarito de 10 questões com respostas do aluno
    case 13:
        var gabarito = ["a", "e", "d", "c", "a", "d", "c", "d", "b", "a"];
        var resposta = []
        var acertos= 0;

        for(let i = 0; i < 10; i++){
            resposta.push(leia.question('Digita ai suas respostas. (NA ORDEM DA QUESTAO 1 PARA A 10):'))
        }

        for(let i = 0; i<10; i++){
            if(resposta[i]===gabarito[i]){
                acertos++
            }
        }
        console.log(`Vc tirou ${acertos.toFixed(2)}`)
        break
}