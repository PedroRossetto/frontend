// Promise.all
// Promise.race
// Promise.resolve
// Promise.reject

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') {
            reject(false);
            return;
        }
        // resolve, código executou com sucesso entao resolve ele pra mim
        // reject, deu erro, rejeita isso aqui pra mim
        setTimeout(() => {
            resolve(msg);
            return;
        }, tempo);
    });
}

const promises = [
esperaAi('Promise 1', 2000),
esperaAi('Promise 2', 3000),
esperaAi('Promise 3', 1000)
];

Promise.all(promises)   //Entrega todas, nao segue o padrao
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro); 
    });

Promise.race(promises) // Entrega a primeira, roda primeiro
    .then(function(valor) {
        console.log(valor);
    })
    .catch(function(erro) {
        console.log(erro); 
    });

function baixaPagina() {
    const emCache = true;

    if(emCache) {
        return Promise.resolve('Página em cache');
    }
    else {
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then( dadosPagina => {
        console.log(dadosPagina);
    }) 
    .catch(e => console.log('Erro', e));