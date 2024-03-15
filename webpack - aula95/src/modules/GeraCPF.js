import {ValidaCPF} from './ValidaCPF';
let FirstD, SecondD, contador = 0, k = 0, cpfValido;

export function GeraCPF () {

    function aleatorio(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    const cpfSemDigito = aleatorio();     
    function gerarDigitos(cpfSemDigito) {
        for (let i = 10; i > 1; i--) {
            contador += parseInt(cpfSemDigito[k]*i);
            k++;            
        }
        k = 0;
        contador = ((contador*10)%11);
        contador == 10 ? FirstD = 0 : FirstD = contador;
        cpfSemDigito += FirstD;
        contador = 0
        for (let j = 11; j > 1; j--) {
            contador += parseInt(cpfSemDigito[k]*j);
            k++;
        }
        k = 0;
        contador = ((contador*10)%11);
        contador == 10 ? SecondD = 0 : SecondD = contador;
        cpfSemDigito += SecondD;
        
        cpfValido = cpfSemDigito;
        return ValidaCPF(cpfValido);
    }

    function GeraNovoCPF() {
           
        return gerarDigitos(cpfSemDigito);
    }

    return GeraNovoCPF();
}