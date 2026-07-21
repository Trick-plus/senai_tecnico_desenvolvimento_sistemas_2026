import leia from 'readline-sync';

var mes = leia.questionInt("DIGITE UM NUMERO QUE REPRESENTE UM MES [1-12]: ")

// IF/ELSE
if (mes === 2) {
    console.log("O MÊS SELECIONADO TEM 28/29 DIAS");
} else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) {
    console.log("O MÊS SELECIONADO TEM 30 DIAS");
} else if (mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) {
    console.log("O MÊS SELECIONADO TEM 31 DIAS");
} else {
    console.log("NÚMERO NÃO REPRESENTA UM MÊS DO ANO")
}

// SWITCH/CASE
switch (mes) {
    case 2:
        console.log("28/29 DIAS")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("30 DIAS")
        break;
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("31 DIAS")
        break;
    default:
        console.log("NUMERO INVÁLIDO")
}