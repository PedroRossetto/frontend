let um = document.getElementById('one')
let dois = document.getElementById('two')
let tres = document.getElementById('three')
let quatro = document.getElementById('four')
let cinco = document.getElementById('five')
let seis = document.getElementById('six')
let sete = document.getElementById('seven')
let oito = document.getElementById('eight')
let nove = document.getElementById('nine')
let zero = document.getElementById('zero')
let soma = document.getElementById('sum')
let subtracao = document.getElementById('sub')
let divisao = document.getElementById('division')
let multiplicacao = document.getElementById('multiplication')
let ponto = document.getElementById('point')
let clear = document.getElementById('clear')
let equal = document.getElementById('equal')
let resultado = document.getElementById('tela');
let backspace = document.getElementById('backspace')

let elementos = [um, dois, tres, quatro, cinco, seis, sete, oito, nove, zero, soma, subtracao, divisao, multiplicacao, ponto, clear]

document.addEventListener('DOMContentLoaded', function() {

    function adicionarValor(valor) {
        resultado.value += `${valor}`;
        console.log(resultado)
    }
    
    function zerarResultado() {
        resultado.value = null;
    }

    for (const elemento of elementos) {
        elemento.addEventListener('click', function() {
            return adicionarValor(elemento.innerText);
        });
    }

    clear.addEventListener('click', function() {
        return zerarResultado();
    });

    equal.addEventListener('click', function() {
        const final = eval(resultado.value)
        resultado.value = final;
    });

    backspace.addEventListener('click', function() {
        let antes = resultado.value;
        resultado.value = antes.slice(0, -1)
    });
});