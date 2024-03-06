let clear = document.getElementById('clear')
let resultado = document.getElementById('tela');
let backspace = document.getElementById('backspace')
let elementos = document.querySelectorAll('button');
let equal = document.getElementById('equal')


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
            if (elemento !== equal && elemento !== clear && elemento !== backspace) { 
                adicionarValor(elemento.innerText);
            }
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