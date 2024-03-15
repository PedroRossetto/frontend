export function ValidaCPF(cpfInserido) {
    let soma =0, contador=0, verificador=0;

    for (let i = 10; i > 1; i--) {
        soma += (parseInt(cpfInserido[contador]))*i;
        contador++;
    }
    verificador = (soma*10)%11;
    verificador == 10 ? verificador = 0 : verificador = verificador;
    if(verificador == cpfInserido[9]){
        verificador = 0, soma = 0, contador = 0;
        for (let i = 11; i > 1; i--) {
            soma += (parseInt(cpfInserido[contador]))*i;
            contador++;
        }
        verificador = (soma*10)%11;
        verificador == 10 ? verificador = 0 : verificador = verificador;
        if(verificador == cpfInserido[10]){
            verificador = 0, soma = 0, contador = 0;
            console.log('CPF Válido');
            return String(cpfInserido)
        }
        else {
            return "Erro ao gerar cpf válido"
        }
    }
    else {
        verificador = 0, soma = 0, contador = 0;
        return "Erro ao gerar cpf válido"
    }
}

