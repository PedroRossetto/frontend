// Declarações de funções (function hoisting)

function falaOi() {
    console.log('Oie')
}

// First-class objects

const souUmDado = function() {
    console.log('Sou um dado');
}

function executaFuncao(funcao) {
    funcao();
}

executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
    console.log("Sou uma arrow function")
};


// setInterval(function() {
//     console.log('Oi')
// }, 1000);

//Dentro de obj
const obj = {
    falar: function() {
        console.log('Estou falando')
    }
}

obj.falar();