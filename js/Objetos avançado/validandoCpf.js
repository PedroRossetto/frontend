// CPF : 520.254.728-54
//VALIDAÇÃO = (5*10) + (2*9) + (0*8) + (2*7) + (5*6) + (4*5) + (7*4) + (2*3) + (8*2)  = 182
// (182*10)/11 = 5 RESTO DESSA DIVISÃO É A REPRESENTAÇÃO DO PRIMEIRO NUMERO DOS 2 ULTIMOS NUMEROS 
// NO CASO SE FOR 10 CONSIDERA 0 ENTÃO 
// NA SEGUNDA VAI SE A MESMA COISA MAS VAMOS ACRESCENTAR O RESTO NO FINAL E COMEÇAMOS DO 11

// 2 VALIDAÇÃO :
// (5*11) + (2*10) + (0*9) + (2*8) + (5*7) + (4*6) + (7*5) + (2*4) + (8*3) + (5*2) = 227
// console.log ((((5*11) + (2*10) + (0*9) + (2*8) + (5*7) + (4*6) + (7*5) + (2*4) + (8*3) + (5*2))*10) % 11)
// (227*10)%11 =  4
// console.log (((5*11) + (2*10) + (0*9) + (2*8) + (5*7) + (4*6) + (7*5) + (2*4) + (8*3) + (5*2))*10)

let cpfInserido = "52025472854" , soma = 0, contador = 0, verificador = 0;

    for (let i = 10; i > 1; i--) {
        soma += (parseInt(cpfInserido[contador]))*i;
        contador++;
    }
    verificador = (soma*10)%11;
    verificador == 10 ? verificador = 0 : verificador = verificador;
    if(verificador == cpfInserido[9]){
        console.log(cpfInserido, " : Passou no primeiro teste");
        verificador = 0, soma = 0, contador = 0;
        for (let i = 11; i > 1; i--) {
            soma += (parseInt(cpfInserido[contador]))*i;
            contador++;
        }
        verificador = (soma*10)%11;
        verificador == 10 ? verificador = 0 : verificador = verificador;
        if(verificador == cpfInserido[10]){
            console.log(cpfInserido, " : Passou no segundo teste")
            console.log("CPF VÁLIDO !!!")
            verificador = 0, soma = 0, contador = 0;
        }
        else {
            console.log(cpfInserido, " : CPF Invalido (Segunda verificação)")
            verificador = 0, soma = 0, contador = 0;
        }
    }
    else {
        console.log(cpfInserido, " : CPF Invalido")
        verificador = 0, soma = 0, contador = 0;
    }
